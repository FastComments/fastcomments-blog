---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]System Automatycznego Transportu Rozkładowego FastComments[/postlink]

{{#unless isPost}}
Przedstawiamy System Automatycznego Transportu Rozkładowego FastComments!
{{/unless}}

{{#isPost}}

## Wprowadzenie

System Automatycznego Transportu Rozkładowego FastComments (FARTS) jest naszą warstwą transportową i serwisową. FARTs pomagają w zarządzaniu obciążeniem, kierując ruchem na podstawie lokalizacji użytkownika i potencjalnie obciążenia w przyszłości. Składa się z kilku różnych systemów, warstwy DNS z geolokalizacją, proxy DB, replikacji DB, zarządzania certyfikatami SSL, proxy odwrotnego oraz CDN, który używa pamięci podręcznej LRU na dysku do przechowywania zasobów na krawędzi. System wspiera zarówno ciche, jak i głośne tryby awaryjne. Cichy jest preferowany w produkcji.

## Aktywny-Aktywny

Najnowsza wersja FART zawiera wbudowane proxy i warstwę replikacji dla naszej bazy danych. To pozwala FastComments na działanie w trybie Aktywnym-Aktywnym z globalną dostępnością do zapisu, co sprawia, że nasze FARTS są ostatecznie spójne. [Więcej szczegółów tutaj](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jednym z podejść, które wdrożyliśmy na początku, było sprawdzenie, czy możemy stworzyć fork MongoDB. Jeden z naszych inżynierów (Sloperators) był w stanie to osiągnąć z Opus 4.6, jednak zdecydowaliśmy, że ryzyko związane z tym było wyższe niż budowanie własnego izolowanego systemu.

Ostatnią rzeczą, której chciałbyś w przypadku czegoś takiego jak FART, to wiedzieć, że dotarł, ale nie możesz prześledzić źródła. Dodaliśmy monitoring i diagnostykę do monitorowania replikacji aktywnej w trybie aktywnym na szczegółowym poziomie.

## Rust w Skali

Częścią motywacji do stworzenia FART był zastąpienie niektórych istniejących usług napisanych w Javie. Po chwili zatrzymania się nad tym, zdecydowaliśmy się skonsolidować je w jedną usługę w Rust, aby zmniejszyć narzut czasowy. To był akceptowalny kompromis, ponieważ nie wdrażamy FART często. FART jest kompilowany z LTO, więc naprawdę możemy go rozkręcić.

Spędziliśmy dużo czasu na próbach dostosowania starego systemu Java z różnymi GC itd., a ostatecznie zdecydowaliśmy, że asynchroniczny Rust + Mimalloc działa znacząco lepiej na tym samym sprzęcie, z dużo niższymi wymaganiami pamięciowymi, więc przejście było oczywiste.

## Mistrz FART

Każde wdrożenie zawiera swój własny Mistrz FART. Mistrz odpowiada za orkiestrację crons, webhooków i tak dalej.

## Wpływ na Klientów

System FART działa w produkcji od około roku. Dopiero niedawno przeszliśmy do wdrożenia Aktywny-Aktywny. Nowy system zapewnia nam lepszą widoczność opóźnień w całym systemie, a także niższe obciążenie konserwacyjne, dzięki czemu możemy teraz poświęcać więcej czasu na nowe funkcje.

FART działa cicho w tle, chociaż jego obecność jest zawsze odczuwalna. Mamy nadzieję, że nasze systemy są szybsze w przypadku twoich zastosowań (przede wszystkim działania użytkownika, które skutkują zmianami w danych, będą szybsze w niektórych regionach).

## Wdrożenia

Wdrożenie wykorzystuje ten sam globalny system orkiestracji, którego używamy do wdrażania samych usług. Dokumentacja FARTS zaleca sloperators, aby nigdy nie ufać wdrożeniu, zawsze weryfikować ładunek przed wydaniem.

Po wdrożeniu powiadomienia FART podążają za polityką eskalacji: najpierw pokój, potem piętro, potem budynek.

## Podsumowując

Jak w przypadku wszystkich większych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i odpowiednie wdrożenie tej zmiany. Jesteśmy podekscytowani tym, co nadchodzi. FastComments powinien w przyszłości lepiej skalować i mieć lepszą dostępność dzięki tej pracy. Jak mówi instrukcja obsługi FART: "Jeśli coś czujesz, powiedz coś". Daj nam znać poniżej, jeśli odkryjesz jakiekolwiek problemy.

{{/isPost}}

---