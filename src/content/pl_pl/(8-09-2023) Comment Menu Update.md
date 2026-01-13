---
[category:API & Development]
###### [postdate]
# [postlink]Aktualizacja Menu Komentarzy[/postlink]

{{#unless isPost}}
Ta aktualizacja jest głównie dla deweloperów, którzy dostosowują FastComments. Wprowadziliśmy kilka zmian w API i dokonaliśmy optymalizacji.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Artykuł Zawiera Terminologię Techniczną

### Co Nowego

Niektórzy najemcy FastComments dostosowują widżet komentarzy. Tworzy to kontrakt
pomiędzy Twoimi dostosowaniami a naszą implementacją. Dokładamy wszelkich starań, aby nie łamać tego
kontraktu, ale w ramach tego ogłoszenia mamy małą zmianę łamiącą.

### Dla Deweloperów

Selector CSS dla menu komentarzy został zmieniony.

Stary:

    .comment .menu .menu-content

Nowy:

    .menu-content

### Istniejący Najemcy

Jeśli już używasz selektora "menu-content" - gratulacje! Przeanalizowaliśmy wszystkich naszych
najemców korzystających z tego selektora i zaktualizowaliśmy ich konfiguracje widżetów, aby zapobiec awariom.

Daj nam znać, jeśli masz jakieś problemy.

### Powody

Od momentu stworzenia widżetu komentarzy, menu komentarzy było czysto rozwijanym w CSS rozwijanym menu. Jest to prosta, szybka metoda implementacji rozwijanego menu, które nie wymaga zbyt wiele kodu - cel projektowy FastComments.

Jednakże, przez lata pojawiły się problemy.

Po pierwsze, gdy obszar komentarzy ma określoną wysokość i jest przewijalny, jak w przypadku Czatów Streamingowych,
dostęp do menu w dolnej części jest trudny, ponieważ menu próbuje wyjść poza
obszar zawartości przewijalnej. To sprawia, że część menu jest niewidoczna i wymaga od Ciebie
przesunięcia kursora i ponownego najechania na menu, aby wykonać jakąkolwiek pracę, którą właśnie próbowałeś wykonać. Uznaliśmy,
że to było frustrujące w użyciu.

Wprowadzono kilka obejść, takich jak obrócenie kierunku menu **w górę**,
ale to także nie działa, jeśli wysokość widżetu nie jest wystarczająco duża, a w menu jest wiele elementów akcji - jak dla administratorów. W takim przypadku idealnie byłoby opuścić menu poniżej
obszaru zawartości przewijalnej.

### Korzyści w Rozmiarze

Jedną z korzyści tej zmiany jest to, że mogliśmy zbudować dużą część kodu w asynchronicznie
ładującym się module. Pozwoli to na rozszerzenie działań, które możesz podejmować na danych komentarzy, bez nadmiernego
obciążania początkowego ładowania widżetu. Wprowadza to wywołanie sieciowe za pierwszym razem, gdy najedziesz
na menu edycji, ale początkowy pakiet jest bardzo mały (< 1kb), więc nie powinno to być zbyt zauważalne.

Bardzo trudno jest dalej rozwijać oprogramowanie i jednocześnie zmniejszać jego rozmiar w czasie. Zwykle oprogramowanie
zaczyna szybko, a potem staje się wolne. Dlatego zawsze cieszymy się, że możemy dążyć do utrzymania FastComments w szybkim tempie:

    Przed: 28.76kb gzipped (108.02kb całkowicie)
    Po: 28.39kb gzipped (105.79kb całkowicie)

Mniej kodu to także mniej kodu dla Twojej przeglądarki do przetworzenia podczas ładowania strony. Wpływ tego będzie się zwiększał, gdy dodawane będą nowe funkcje.

### Korzyści Wydajnościowe

Stare menu renderowało wszystkie elementy menu i ładowało wszystkie rozszerzenia, aby zobaczyć, czy rozszerzenia
miały elementy do dodania, i renderowało je również - dla każdego komentarza - tak, aby treść była gotowa do użycia przez Twój kursor.

Zwykle jest tylko 30 - 100 obiektów, więc zazwyczaj nie jest to duży problem, ale wpływ rósł. Nowy system eliminuje ten problem,
ponieważ menu jest teraz renderowane tylko na żądanie.

Wymagana jest wymiana, ponieważ nowe menu jest pozycjonowane i renderowane przy użyciu JS, aby osiągnąć to, co chcemy. Będziemy
dalej optymalizować to, gdy tylko będziemy mogli, jednak obecnie działa dobrze.

### Podsumowanie

Dziękujemy naszym klientom za ich cierpliwość w wprowadzaniu tych zmian. Mamy nadzieję, że
wciąż będą Państwo kochać FastComments.

Na zdrowie!

{{/isPost}}

---