---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]System Automatycznego Transportu Routingowego FastComments[/postlink]

{{#unless isPost}}
Przedstawiamy System Automatycznego Transportu Routingowego FastComments!
{{/unless}}

{{#isPost}}

## Wprowadzenie

System Automatycznego Transportu Routingowego FastComments (FARTS) jest naszą warstwą transportową i serwisową. FARTS pomagają w zarządzaniu ruchem, kierując go na podstawie lokalizacji użytkownika i potencjalnego obciążenia w przyszłości. Składa się z kilku różnych systemów, geoświadomej warstwy DNS, proxy do DB, replikacji DB, zarządzania certyfikatami SSL, proxy odwrotnego i CDN, który używa LRU cache na dysku do buforowania zasobów na krawędzi.

## Aktywny-Aktywny

Najnowsza wersja FART zawiera wbudowane proxy i warstwę replikacji dla naszej bazy danych. Pozwala to na działanie FastComments w trybie Active-Active z globalną dostępnością zapisu, co zapewnia, że nasze FARTS są ostatecznie spójne. [Więcej szczegółów tutaj](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jednym z podejść, które zastosowaliśmy na początku, było sprawdzenie, czy możemy stworzyć aktywną aktywną wersję MongoDB. Jeden z naszych inżynierów (Sloperators) był w stanie to zrealizować w Opus 4.6, jednak zdecydowaliśmy, że ryzyko związane z tym było wyższe niż budowa własnego izolowanego systemu.

## Rust w Skali

Część motywacji do stworzenia FART była związana z zastąpieniem niektórych istniejących usług napisanych w Javie. Po pewnym czasie, zdecydowaliśmy się połączyć je w jedną usługę napisaną w Rust, aby obniżyć koszty czasu działania. Była to akceptowalna wymiana, ponieważ nie wdrażamy FART zbyt często. FART jest kompilowany z LTO, więc naprawdę możemy to wykorzystać.

Spędziliśmy dużo czasu na tuning starych systemów Java z różnymi GC itd., i ostatecznie zdecydowaliśmy, że async Rust + Mimalloc działa znacząco lepiej na tym samym sprzęcie z dużo mniejszymi wymaganiami pamięciowymi, więc zmiana była oczywista.

Rust okazał się naprawdę świetny do kodu związanego z siecią, który wykorzystuje współdzielone sterty i blokady. Nie jest jednak odporny na problemy związane z czasem działania. Może warto wspomnieć, że kod napisany przez LLM w Rust jest dość podatny na zakleszczenia, a sposobem na ominięcie tego jest projektowanie systemów jako łatwych do zrozumienia maszyn stanowych, zamiast po prostu stosu async/await.

## Mistrz FART

Każde wdrożenie zawiera własnego Mistrza FART. Mistrz odpowiada za orkiestrację crons, webhooków itd.

## Wpływ na Klienta

System FART działa w produkcji od około roku. Dopiero niedawno przeprowadziliśmy migrację do wdrożenia Active-Active. Istnieje pewien wpływ na odczyt własnych zapisów pomiędzy regionami, co zostało omówione w powyższym poście na blogu oraz [w dokumentacji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART działa cicho w tle, choć jego obecność zawsze jest odczuwalna. Mamy nadzieję, że nasze systemy będą szybsze w Twoich przypadkach użycia (przede wszystkim działania użytkowników, które prowadzą do zmian w danych, będą szybsze w niektórych regionach).

## Wdrożenia

Wdrożenie korzysta z tego samego globalnego systemu orkiestracyjnego, którego używamy do wdrażania samych usług. Dokumentacja FART zaleca, aby Sloperators nigdy nie ufał wdrożeniu, zawsze weryfikować ładunek przed wydaniem.

Po wdrożeniu alerty FART podlegają polityce eskalacji: najpierw pokój, potem piętro, następnie budynek.

## Na Zakończenie

Mówi się, że internet to seria rur, ale to tak naprawdę seria pierdnięć.

Jak przy każdym większym wydaniu, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i odpowiednie wydanie tej zmiany. Jesteśmy podekscytowani tym, co nas czeka.
FastComments powinno lepiej skalować się i mieć lepszy czas działania w dłuższym okresie dzięki tej pracy. Jak mówi podręcznik FART: "Jeśli czujesz coś, powiedz coś". Daj nam znać poniżej, jeśli odkryjesz jakiekolwiek problemy.

{{/isPost}}

---