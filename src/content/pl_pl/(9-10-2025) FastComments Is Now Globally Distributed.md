---
[category:Announcements]
[category:Performance]
[category:API & Development]
###### [postdate]
# [postlink]FastComments jest teraz globalnie rozdzielony[/postlink]

{{#unless isPost}}
FastComments przeszedł na nową architekturę, aby poprawić globalną wydajność.
{{/unless}}

{{#isPost}}

### Co nowego

Wcześniej FastComments miało bardzo tradycyjną architekturę aplikacji internetowej. Mieliśmy nasze serwery aplikacji, bazy danych i inne usługi. To było
duplikowane w dwóch regionach (us-west i eu). Jeśli znajdowałeś się we Francji i chciałeś zobaczyć wątek komentarzy dla klienta hostowanego w naszym
globalnym centrum danych, Twoje żądania musiałyby iść aż do us-west po dane komentarzy.

Już nie! Teraz dane komentarzy i wszystkie zasoby multimedialne są replikowane globalnie dla klientów w naszej globalnej wersji, a dla klientów
w naszej wersji EU mamy trzy punkty obecności w UE, gdzie dane są replikowane. Twoje żądania trafiają do najbliższego węzła w
UE.

### Jak to działało wcześniej

Z wyjątkiem baz danych, które miały kilka żywych replik w regionalnych i dostawców chmurowych, wszystkie usługi były wdrażane na jednej instancji dla każdego typu usługi.
Oznaczało to, że dla każdego regionu mieliśmy jeden serwer aplikacji, jeden serwer pubsub i jeden serwer multimedialny. Plan był taki, aby pionowo skalować tak długo, jak to możliwe,
co utrzymywało wszystko prosto. Pisanie kodu było łatwe - zawsze wiedziałeś, że możesz "czytać swoje własne zapisy", gdy trafiasz do bazy danych. Infra była łatwa,
z wyjątkiem aktualizacji zabezpieczeń, które zajmowały minutę przestoju.

### Problem

Problem zaczął się, gdy osiągaliśmy pojemność. Więc optymalizowaliśmy, a potem ostatecznie musieliśmy zwiększyć rozmiar instancji dla tej usługi.

To zaczęło być kosztowne na Linode, gdzie instancja za 144 USD jest mniej więcej równoważna, według naszych testów passmark, instancji za 20 USD OVH, a nawet jeśli
zmienilibyśmy dostawców hostingowych, mielibyśmy pojedyncze punkty awarii w całym miejscu - a dostawcy tacy jak OVH mają tendencję do dłuższych czasów rozwiązywania problemów niż Linode
w przypadku problemów z konserwacją.

### RiR :)

Przez pierwsze kilka lat usługi PubSub i Media w FastComments były pisane w Javie. Javę wybrano ze względu na stosunkowo wysoką wydajność za wysiłek
wsadzony w to, a po latach dostrajania GC, próbowaniu G1GC, Shenandoah i Z1, zdecydowaliśmy, że to koniec Javy. Przełożenie użycia pamięci było po prostu zbyt duże, a ponieważ te
usługi były bardzo statyczne po ukończeniu, korzyści z używania Javy straciły na znaczeniu. Ponadto te usługi miały do czynienia z problemem "thundering herd", co oznaczało,
że JVM próbował obsługiwać szczytowy ruch, gdy JIT jeszcze się nie włączył. Te usługi były idealnymi kandydatami do przejścia na C++ lub Rust.

Rust został wybrany, ponieważ nie jesteśmy ekspertami w C++ i popełnienie błędu w kodzie sieciowym mogłoby ujawnić dane jednego klienta innemu. Rust pomaga nam zapobiegać tego typu problemom.

Chcieliśmy i tak skonsolidować te usługi, więc chociaż mogliśmy zrobić *kolejne* przejście optymalizując je być może z GraalVM, zdecydowaliśmy się przejść na Rust i zakończyć to.

Migracja nie była pozbawiona problemów. Te usługi muszą kończyć SSL, wspierać HTTP 1.1, HTTP/2 itd. Robią rzeczy takie jak zarządzanie wieloma strumieniami danych jednocześnie,
odczytywanie multimediów z podręcznej pamięci lru na dysku, S3, baz danych i komunikowanie w sieci. Ekosystem Javy, Vertx i Netty, były bardzo dobre do tych rzeczy. Napotykamy
na granice ekosystemu bibliotek, a brak dużego doświadczenia w bibliotekach Rust oznaczał, że mieliśmy pewne próby i błędy. To spowodowało pewne przestoje, za co przepraszamy.

Eksperymentowaliśmy również z różnymi menedżerami pamięci, decydując się na mimalloc dla naszych niestandardowych serwerów DNS i libc dla warstwy transportowej. Nie używamy Nginx ani Apache, zamiast tego
korzystamy z naszej własnej kombinacji niestandardowego serwera DNS, który kieruje klientów globalnie na podstawie indeksu w pamięci odbudowywanego co tydzień z Maxmind oraz naszej warstwy transportowej w Rust, która utrzymuje siatkę
z innymi instancjami transportowymi. Transport kończy SSL, obsługuje pracę pubsub i jest naszym CDN. Korzyścią z tego jest mniejszy nadmiar podczas przenoszenia rzeczy między
usługami oraz mniejszy nadmiar/abstrakcja infrastruktury. Złą stroną jest widoczność, więc dobre metryki są ważne.

W kontekście wydajności, usługi Rust wykorzystywały około 10-30% pamięci usług Java, mimo całej naszej pracy. Czytam książki takie jak Java Concurrency in Practice dla przyjemności, więc
choć nie jestem ekspertem, wiem jedno lub dwa o pisaniu szybkich usług JVM, a osiągnięcie tego było znacznie łatwiejsze z Rust. Dodatkowo, szczyty wiadomości do dużej liczby
subskrybentów ledwie rejestrowały się na zużyciu CPU, podczas gdy usługi JVM spędzały 40% swojego czasu w GC, mimo że pisaliśmy nasz kod bardziej jak silnik gry, a mniej
jak typowy serwer. Nie mogę powiedzieć, że jestem wielkim fanem Rusta, ale dla usług, które wykonują dużo pracy i niewiele się zmieniają po początkowym rozwoju, jest idealny. Nasza główna logika biznesowa
pozostaje w TypeScript.

### Nowa architektura

Nowa architektura nie ma już "pet" nodów. Zamiast tego każdy serwer jest kompletnym klonem ze wszystkimi tymi samymi usługami i prawie identyczną konfiguracją. Każdy z nich uruchamia
transport, DNS, serwer aplikacji i kopię bazy danych. Wszystkie węzły utrzymują pełne szyfrowanie dysku z automatycznym odblokowywaniem za pomocą Dropbear.

Każdy serwer uruchamia transport trasujący, który kończy żądania i obsługuje je jako websocket, strumień http lub żądanie CDN. Te serwery łączą się ze sobą, a każdy z nich zapewnia mapowanie globalnej sieci do swojego lokalnego serwera DNS, aby powiedzieć DNS w czasie rzeczywistym, gdzie każdy żywy węzeł znajduje się globalnie.

Jedną z korzyści nowej architektury jest redundancja. Jeśli klient w jednym regionie uderzy w nas naprawdę mocno, inne regiony pozostają online.

Kod aplikacji musi teraz być bardzo świadomy, które zapytania mogą trafiać do najbliższego węzła lub które muszą iść do głównej bazy danych, która może być daleko. Popełnienie błędu
może drastycznie zmniejszyć wydajność. Oznacza to również, że zapisy z niektórych regionów mogą być wolne, co wymaga starannego dostrajania i optymalizacji. Teraz wewnętrznie
w kodzie podążamy za wzorcem, w którym wszystkie metody, które trafiają do bazy danych, przyjmują argument readPreference, tak aby wywołujący aż do samej góry musieli explicitnie zdecydować, jak zapytać.

Korzyścią jest bardzo dobra skalowalność pozioma dla odczytów. FastComments jest bardzo obciążony odczytem, ale nie możemy zapomnieć o naszych moderatorach! Moderatorzy pracują dzień w dzień na całym świecie
i chcemy, aby ich doświadczenie pozostało dobre. W ramach tego wdrożenia współpracowaliśmy z kilkoma z nich, aby zapewnić, że narzędzia moderacyjne pozostają szybkie.

Możemy również wybierać sprzęt, co jest zabawne i satysfakcjonujące. Nowe serwery to mieszanka i5-13500 i Ryzen 5 5600X, a w UE są na nieco starszych Xeonach. W naszych testach wydajności wszystkie te
były znacznie szybsze niż droższe serwery, które rozważaliśmy u innych dostawców. Złą stroną jest więcej pracy przy konfiguracji, ale zautomatyzowaliśmy to, wraz z monitoringiem dysków SMART w przypadku awarii itd.

Robienie tego typu rzeczy oznacza, że możemy nadal oferować konkurencyjne ceny.

### Wdrożenie

Wdrożenie w ciągu ostatnich kilku miesięcy, gdy przepisujemy usługi i przechodzimy do nowych dostawców hostingowych, było wyboiste, dziękujemy za twoją cierpliwość.

Podczas początkowego wdrożenia nasze metryki pokazały nam wzrost w żądaniach trwających > 100 ms. Staramy się, aby wiele żądań nie trwało tak długo w żadnym przypadku.

<div class="text-center">
    <div class="sm">Stopniowy postęp</div>
    <img src="images/slow-reqs.png" alt="Wolne żądania" title="Wolne żądania" />
</div>

Nadal dokonujemy stopniowego postępu w poprawie wydajności w niektórych regionach. Dziękujemy wszystkim, którzy do tej pory dostarczyli informacje zwrotne.

### Rozważania przy korzystaniu z API

API pozostaje silnie spójne - możesz czytać swoje własne zapisy - aby zachować zgodność w dół i uprościć sprawy dla programistów. Aby umożliwić
programistom wybór wydajności kosztem spójności, planujemy udostępnić parametr readPreference. Korzyścią jest to, że możemy również oferować zniżkę na kredyty za
te wywołania API.

Wszystkie publiczne punkty końcowe, takie jak serwowanie publicznego widżetu komentarzy, zawsze odczytują z najbliższej (lokalnej) bazy danych na tym węźle.

### Dlaczego nie używać po prostu zwykłego CDN

Wątki komentarzy nie są statyczne, są żywe, a zastosowanie strumienia na danych statycznych również nie działa, ponieważ gdy przeglądasz wątek jako
użytkownik anonimowy, otrzymujesz "anonimową sesję". W tej anonimowej sesji możesz robić rzeczy takie jak blokowanie i oznaczanie innych użytkowników, a musisz pokazać,
czy użytkownik anonimowy polubił dany komentarz itp. Wątki komentarzy mogą być również zablokowane za pomocą SSO, uwierzytelniania lub grup użytkowników.

Wreszcie, rodzaj "progresywnego ulepszania", w którym dynamiczne dane są mapowane do statycznych danych z CDN, daje złe doświadczenie, w którym zawartość przeskakuje lub zmienia się po kilku sekundach.
Wolelibyśmy tego nie robić.

### Kto teraz ma moje dane

Twoje dane nie są już przechowywane na Linode. Są replikowane na żywo między Hetzner i OVH z pełnym szyfrowaniem dysku, a cała komunikacja między serwerami backendowymi
odbywa się z użyciem TLS. Utrzymujemy kilka starszych instancji Linode dla proxy webhooków wychodzących, ale żadne dane ani multimedia nie pozostają przechowywane na Linode.

### Na zakończenie

Jak w przypadku wszystkich głównych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wydanie tej zmiany. FastComments powinien skalować się lepiej i mieć
lepszą dostępność w dłuższym okresie dzięki tej pracy. Daj nam znać poniżej, jeśli odkryjesz jakieś problemy.

{{/isPost}}

---