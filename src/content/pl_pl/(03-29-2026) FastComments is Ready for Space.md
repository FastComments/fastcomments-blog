---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments jest gotowy na kosmos![/postlink]

{{#unless isPost}}
Zakończyliśmy migrację naszej bazy danych w trybie aktywnym, co wprowadza prawdziwą redundancję wieloregionalną dla FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera terminologię techniczną

### Co nowego

Każdy punkt obecności FastComments [point-of-presence](https://sophon.fastcomments.com/) teraz lokalnie zapisuje dane oraz asynchronicznie replikuje je
do wszystkich innych węzłów. To zapewni większą trwałość w porównaniu do poprzedniego systemu, a także przyspieszy narzędzia moderacyjne
dla użytkowników w niektórych regionach, z pewnymi kompromisami.

"Gotowy na kosmos" może brzmieć trochę optymistycznie, ale chodzi o to, że moglibyśmy wdrożyć FastComments na różnych planetach, a system ostatecznie synchronizowałby się. Użytkownicy na Plutonie musieliby jednak poczekać około dnia na zaktualizowanie zmian w ich nadchodzącej stronie faktury, ponieważ tylko jeden
główny węzeł na region może aktualnie agregować informacje o fakturowaniu.

### Trochę historii, dlaczego zmiana

Kiedy FastComments zostało pierwotnie uruchomione, mieliśmy bardzo typową architekturę. Mieliśmy warstwę proxy, warstwę aplikacji, bazę danych, kilka replik, a później repliki w różnych regionach i dostawcach chmurowych dla dodatkowej redundancji.

Ostatecznie przenieśliśmy repliki bazy danych do wszystkich stref, w których znajduje się większość naszych użytkowników, a także wdrożyliśmy aplikację tam, i stworzyliśmy nasz własny system DNS i proxy (opisany w późniejszym wpisie na blogu) do kierowania żądań do najbliższego węzła aplikacji. To przyspiesza odczyty, ale spowalnia zapisy, ponieważ teraz zamiast czekać na jedną podróż HTTP do backendu, czeka się na podróż HTTP do bliskiego węzła, a ten węzeł może wykonać wiele zapisów w bazie danych z powrotem do głównego. Nie jest dobrze!

Aby to zwalczyć, przekształciliśmy wiele obszarów aplikacji, aby przyjmowały `readPreference` w argumentach funkcji, dzięki czemu wywołujący mogą zdecydować, jak
stare są dla nich odczyty, a ponadto sprawiliśmy, że więcej zapisów (takich jak zapis statystyk moderatorów w wyniku działań moderatorów) odbywa się w trybie fire-and-forget. Nie jest to idealne, ale znacząco przyspieszyło działanie.

Jednym z problemów, na które natrafiliśmy podczas działania Mongo globalnie, są rozdzielenia sieci. Jeśli wystarczająca liczba węzłów zostanie odcięta, odczyty zatrzymują się, ponieważ każdy węzeł staje się niepewny, czy
może obsługiwać odczyty. Istnieje kilka sposobów na to, ale przypadki brzegowe stają się chaotyczne. To nie jest problem teoretyczny - zdarzyło się to wystarczająco często, powodując powiadomienia o 3 nad ranem, że mieliśmy tego dosyć, nawet próbując dostroić Mongo, aby radzić sobie z niepewnością wyboru replikatu do minuty różnicy. Niestety sieci na trasie Sao Paulo do Falkenstein były, w tym przypadku, po prostu niezbyt dobre wśród niektórych z naszych dostawców hostingu. Dostosowanie kontroli przeciążenia i tym podobnych pomogło, ale nie rozwiązało problemu.

Świętym Graalem rozwiązania, zakładając, że akceptujesz pewne kompromisy, jest możliwość lokalnego przyjmowania zapisów na tym węźle (który ma przyzwoity sprzęt, RAID itp., co ma mało prawdopodobne, aby się zepsuło) i informowanie użytkownika, że jego dane zostały zapisane. Możesz również w tym punkcie obecności mieć drugi węzeł jako gorącą replikę dla trwałości.

Więc to jest miejsce, w którym skończyliśmy. Oregon, Virginia, Falkenstein, Sao Paulo, Singapur, to wszystko są własne zbiory replik i akceptują zapisy. Wdrożenie w UE (choć tylko trzy PoPs) ma to samo zachowanie.

### Jak to działa

Niektóre z tego są poruszone w poprzedniej sekcji, ale TL;DR to CRDT-lite. Stworzyliśmy proxy (w Rust, bo oczywiście) które znajduje się pomiędzy aplikacją a Mongo i sprawia, że jest wielomistrzowskie. Proxy jest świadome peerów, zarządza punktami kontrolnymi, replikacją, monitorowaniem i początkową synchronizacją. Jest to wielomistrzowska alternatywa dla systemu replikacji Mongo, obejmująca niektóre komendy DDL.

**Różnicą w porównaniu do innych narzędzi** jest to, że **nie korzysta z taila oplog**. Korzystanie z taila oplog lub używanie strumieni zmian nie działałoby, ponieważ pokazują one tylko finalny stan obiektu po zapisie, co uniemożliwia obsługę konfliktów. Musisz uchwycić
każdą operację `$set`, `$inc` i zreplikować tę operację.

To jest rozwiązanie specyficzne dla domeny. Nie sprawdziłoby się dla wszystkich produktów. Można by powiedzieć, że to projektowanie napędzane domeną :). Działa dla nas, ponieważ od samego początku bardzo ostrożnie tylko `$set`ujemy pola, które zmieniamy w dokumentach - nigdy nie używamy `replaceOne` Mongo, na przykład. To samo dotyczy liczników. **Nigdy** nie robisz `SET VOTES = 5`. Zamiast tego zapisujesz `INCREMENT VOTES BY 5`, ponieważ to pozwala na ostateczną spójność. Rozproszone blokady są obsługiwane poprzez **całkowite ich unikanie**. Tylko jeden węzeł
na klasterze ma ustawioną flagę do uruchamiania crontabów. Choć może się to wydawać ograniczone, możemy kupić serwery z terabajtami RAM, więc możemy zaakceptować ten kompromis, aby zmniejszyć ryzyko i złożoność.

### Odczytywanie własnych zapisów

Dla programistów korzystających z API, powinieneś być w stanie odczytać własne zapisy tak jak wcześniej (wykonaj wywołanie API, aby utworzyć komentarz, a następnie wypisz komentarze i zobacz nowy wpis na tej liście). **Zastrzeżenie** polega na tym, że nie możesz tego zrobić w różnych regionach. Jeśli twój backend działa tylko w jednym regionie,
takim jak us-west, to powinieneś być w stanie odczytać swoje własne zapisy z wyjątkiem sytuacji, gdy pomiędzy twoim zapisem a twoim odczytem, ten węzeł ulegnie awarii **i** twoja
pamięć podręczna DNS zaktualizuje się, aby wskazać na następny najbliższy węzeł. O ile to się nie stanie, odczytywanie własnych zapisów jest niezawodne.

### Testowanie i migracja

Około połowa kodu w systemie to zestaw testów, framework i testy. Mimo to, wydanie było nieco wyboiste, z dłuższym czasem przestoju (1 godzina dla UE i 20 minut dla globalnego us) niż pożądano, ale cieszymy się, że pokonaliśmy ten kamień milowy i dziękujemy za twoją cierpliwość!

### Podsumowując i co to oznacza dla Ciebie

FastComments powinno być teraz szybsze i bardziej trwałe niż kiedykolwiek, a teraz możemy wrócić do pracy nad nowymi funkcjami :)

Na zdrowie!

{{/isPost}}

---