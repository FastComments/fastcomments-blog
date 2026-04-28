---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]System Automatycznego Transportu i Routing’u FastComments[/postlink]

{{#unless isPost}}
Przedstawiamy System Automatycznego Transportu i Routing’u FastComments!
{{/unless}}

{{#isPost}}

## Wprowadzenie

System Automatycznego Transportu i Routing’u FastComments (FARTS) to nasza warstwa transportowa i serwisowa. FARTS pomagają w zarządzaniu przeciążeniem, kierując ruchem w zależności od lokalizacji użytkownika i potencjalnie obciążenia w przyszłości. Składa się z kilku różnych systemów, geolokalizowanej warstwy DNS, proxy DB, replikacji DB, zarządzania certyfikatami SSL, reverse proxy i CDN, które wykorzystuje pamięć podręczną LRU na dysku do cache’owania zasobów na brzegu.

## Aktywne-Aktywne

Najnowższa wersja FART zawiera wbudowane proxy i warstwę replikacji dla naszej bazy danych. To pozwala FastComments na tryb Aktywny-Aktywny z globalną dostępnością zapisu, co zapewnia, że nasze FARTS są ostatecznie spójne. [Więcej szczegółów tutaj](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Początkowym podejściem było sprawdzenie, czy możemy stworzyć aktywno-aktywny fork MongoDB. Jeden z naszych inżynierów (Sloperators) był w stanie to zrealizować z Opus 4.6, jednak zdecydowaliśmy, że ryzyko związane z tym pomysłem było wyższe niż zbudowanie własnego izolowanego systemu.

## Rust na dużą skalę

Część motywacji do stworzenia FART była zastąpieniem niektórych istniejących usług napisanych w Javie. Po pewnym czasie postanowiliśmy skonsolidować je w jedną usługę napisaną w Rust, aby obniżyć narzut czasowy. Był to akceptowalny kompromis, ponieważ nie wdrażamy FART często. FART jest kompilowany z LTO, więc naprawdę możemy go maksymalnie wykorzystać.

Spędziliśmy dużo czasu starając się dostosować stary system Java z różnymi GC itd., i ostatecznie zdecydowaliśmy, że asynchroniczny Rust + Mimalloc działa znacznie lepiej na tym samym sprzęcie z dużo niższymi wymaganiami pamięciowymi, więc zmiana była oczywistym wyborem.

Rust okazał się naprawdę świetny do kodu związanego z siecią, który wykorzystuje współdzielone sterty i blokady. Jednak nie jest odporny na problemy z czasem wykonania. Może warto zaznaczyć, że kod napisany przez LLM w Rust jest dość podatny na zakleszczenia, a sposobem na ich uniknięcie jest projektowanie systemów jako łatwych do zrozumienia maszyn stanowych, zamiast po prostu stosów async/await.

## Mistrz FART

Każde wdrożenie zawiera własnego Mistrza FART. Mistrz jest odpowiedzialny za orkiestrację crons, webhooków itd.

## Wpływ na klientów

System FART jest w produkcji od około roku. Dopiero niedawno dokonaliśmy migracji do wdrożenia Aktywny-Aktywny. Istnieje pewien wpływ na odczyt własnych zapisów w różnych regionach, co jest opisane w powyższym wpisie na blogu oraz [w dokumentacji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART działa cicho w tle, chociaż jego obecność zawsze jest odczuwalna. Mamy nadzieję, że nasze systemy będą szybsze dla Twoich przypadków użycia (głównie działania użytkowników, które skutkują zmianami w danych będą szybsze w niektórych regionach).

## Wdrożenia

Wdrożenie korzysta z tego samego globalnego systemu orkiestracji, którego używamy do wdrażania samych usług. Dokumentacja FART zaleca, aby Sloperators nigdy nie ufał wdrożeniu, zawsze weryfikować ładunek przed wydaniem.

Po wdrożeniu powiadomienia FART podlegają polityce eskalacji: najpierw pokój, potem piętro, potem budynek.

## Podsumowanie

Mówi się, że internet to seria rur, ale tak naprawdę to seria dźwięków.

Jak przy wszystkich głównych wydaniach, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i odpowiednie wdrożenie tej zmiany. Jesteśmy podekscytowani tym, co nadchodzi. FastComments powinno lepiej się skalować i mieć lepszą dostępność w dłuższej perspektywie dzięki tej pracy. Jak mówi podręcznik FART: "Jeśli wyczujesz coś, powiedz coś". Daj nam znać poniżej, jeśli odkryjesz jakiekolwiek problemy.

{{/isPost}}