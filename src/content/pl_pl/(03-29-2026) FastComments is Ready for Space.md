---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments jest gotowy na przestrzeń![/postlink]

{{#unless isPost}}
Zakończyliśmy naszą migrację bazy danych w trybie aktywno-aktywnym, wprowadzając prawdziwą redundancję multi-regionową do FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera terminologię techniczną

### Co nowego

Każdy punkt obecności FastComments [point-of-presence](https://sophon.fastcomments.com/) teraz zapisuje lokalnie i asynchronicznie replikuje
te dane do wszystkich innych węzłów. To zapewni większą trwałość w porównaniu do poprzedniego systemu, a także przyspieszy narzędzia moderacji dla użytkowników w niektórych regionach, z pewnymi kompromisami.

"Gotowy na przestrzeń" to trochę optymistyczne stwierdzenie, ale pomysł polega na tym, że moglibyśmy wdrożyć FastComments na różnych planetach, a w końcu system byłby zsynchronizowany. Użytkownicy na Plutonie musieliby jednak poczekać około dnia, aby zobaczyć zmiany na stronie ich nadchodzących faktur, ponieważ obecnie tylko jeden
master na region może agregować informacje o płatnościach.

### Trochę historii, dlaczego ta zmiana

Kiedy FastComments początkowo wystartował, mieliśmy bardzo typową architekturę. Mieliśmy warstwę proxy, warstwę aplikacji, bazę danych, kilka replik, a potem później repliki w różnych regionach i dostawcach chmury dla dodatkowej redundancji.

Ostatecznie przenieśliśmy repliki bazy danych do wszystkich stref, w których znajdują się większość naszych użytkowników, a także wdrożyliśmy aplikację tam, stworzyliśmy nasz własny system DNS i proxy (opisany w późniejszym wpisie na blogu), aby kierować żądania do najbliższego węzła aplikacji. To przyspiesza odczyty, ale spowalnia zapisy, ponieważ teraz zamiast czekać na jedno okrążenie HTTP do backendu, czeka się na okrążenie HTTP do najbliższego węzła, a ten węzeł może dokonać wielu zapisów bazy danych z powrotem do głównego węzła. To nie jest dobre!

Aby zwalczyć ten problem, przeorganizowaliśmy wiele obszarów aplikacji, aby przyjmowały `readPreference` w argumentach funkcji, aby wywołujący mógł zdecydować, jak
stare mogą być ich odczyty, a oprócz tego sprawiliśmy, że więcej zapisów (jak zapisywanie statystyk moderatorów na działaniach moderatorów) działa w trybie fire-and-forget. Nie jest to idealne, ale znacząco przyspieszyło procesy.

Jednym z problemów, z jakim spotkaliśmy się podczas działania Mongo globalnie, są podziały sieci. Jeśli wystarczająca liczba węzłów zostanie odłączona, odczyty zatrzymują się, ponieważ każdy węzeł staje się niepewny, czy
akceptowalne jest serwowanie odczytów. Istnieją pewne sposoby na obejście tego, ale przypadki brzegowe są skomplikowane. To nie jest teoretyczny problem - zdarzyło się to wystarczająco wiele razy, by wywołać alarmy o 3:00 w nocy, co stało się dla nas uciążliwe, nawet próbując dostroić Mongo do tolerowania niepewności w wyborze repliki przez minutę. Niestety, sieci z Sao Paulo do Falkenstein, na przykład, po prostu nie były zbyt dobre wśród niektórych naszych dostawców hostingu. Strojenie kontroli tłumienia i tym podobne pomogło, ale nie rozwiązało problemu.

Świętym Graalem rozwiązania, zakładając, że akceptujesz pewne kompromisy, jest możliwość akceptacji zapisów lokalnie w tym węźle (który ma przyzwoity sprzęt, RAID, itd., co jest mało prawdopodobne, aby się zepsuło) i poinformowanie użytkownika, że jego dane zostały zapisane. Możesz również w tym punkcie obecności mieć drugi węzeł jako gorącą replikę dla trwałości.

Więc do tego doszliśmy. Oregon, Virginia, Falkenstein, Sao Paulo, Singapore to wszystko ich własne zestawy replik i akceptują zapisy. Wdrażanie w UE
(chociaż tylko trzy PoPs) ma to samo zachowanie.

### Jak to działa

Niektóre z tego są omówione w poprzedniej sekcji, ale TL;DR to CRDT-lite. Stworzyliśmy proxy (w Rust, bo oczywiście), które znajduje się między aplikacją a Mongo i czyni je multi-master. Proxy jest świadome równorzędności, zarządza punktami kontrolnymi, replikacją, monitorowaniem i początkową synchronizacją. Jest to zastąpienie multi-master dla systemu replikacji Mongo, w tym dla niektórych poleceń DDL.

**Różnica w porównaniu do innych narzędzi** polega na tym, że **nie śledzi logu operacji**. Śledzenie logu operacji lub korzystanie z strumieni zmian nie działa, ponieważ pokazują one tylko ostateczny stan obiektu po zapisie, co uniemożliwia obsługę konfliktów. Musisz uchwycić
każą `$set`, `$inc` operację i zreplikować tę operację samą w sobie.

To jest rozwiązanie specyficzne dla domeny. Nie działałoby dla wszystkich produktów. Można powiedzieć, że to podejście oparte na projektowaniu zorientowanym na domenę :). Działa dla nas, ponieważ od samego początku bardzo starannie tylko `$set`ujemy pola, które zmieniamy w dokumentach - nigdy nie używamy `replaceOne` Mongo, na przykład. To samo dotyczy liczników. **Nigdy** nie robisz `SET VOTES = 5`. Zamiast tego zapisałbyś `INCREMENT VOTES BY 5`, ponieważ to pozwala na eventual consistency. Rozproszone blokady są obsługiwane przez **don't**. Tylko jeden węzeł
na klastra ma ustawioną flagę do uruchamiania crons. Choć może się to wydawać ograniczone, możemy kupić serwery z terabajtami RAM-u, więc możemy przyjąć ten kompromis w celu obniżenia ryzyka i złożoności.

### Odczytywanie własnych zapisów

Dla deweloperów korzystających z API, powinniście być w stanie odczytać własne zapisy tak jak wcześniej (wykonać wywołanie API, aby utworzyć komentarz, a następnie wymienić komentarze i zobaczyć nowy wpis na tej liście). **Zastrzeżenie** jest takie, że nie można tego zrobić w różnych regionach. Jeśli wasz backend działa tylko w jednym regionie,
jak us-west, wtedy powinniście być w stanie odczytać swoje własne zapisy, z wyjątkiem sytuacji, gdy pomiędzy waszym zapisem a odczytem ten węzeł padnie **i** wasza
pamięć podręczna DNS zaktualizuje się, aby wskazywać na następny najbliższy węzeł. Pod warunkiem, że to się nie zdarzy, odczytywanie własnych zapisów jest niezawodne.

[Możesz również przypiąć, który punkt obecności trafiasz. Więcej informacji tutaj.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Testowanie i migracja

Około połowa kodu w systemie to wdrożenia testowe, framework i testy. Nadal wydanie było trochę wyboiste, trwało dłużej niż oczekiwano (1 godzina dla UE i 20 minut dla us-global), ale cieszymy się, że przeszliśmy ten kamień milowy i dziękujemy za waszą cierpliwość!

### Na zakończenie i co to oznacza dla Ciebie

FastComments powinny być teraz szybsze i bardziej trwałe niż kiedykolwiek wcześniej, a teraz możemy wrócić do pracy nad nowymi funkcjami :)

Na zdrowie!

{{/isPost}}

---