---
[category:Migration]
###### [postdate]
# [postlink]Migracja z Yotpo do FastComments[/postlink]

{{#unless isPost}}
Szukasz alternatywy dla Yotpo? Ten post opisuje, jak migrować recenzje produktów z Yotpo do FastComments, co zostaje zachowane, jak platformy się porównują i co zmienia się w Twoim sklepie internetowym.
{{/unless}}

{{#isPost}}

Otrzymaliśmy stały napływ pytań od sprzedawców Shopify na temat alternatyw dla Yotpo i tego, jak przenieść swoje recenzje produktów z tej platformy. Ten post omawia, na co zwrócić uwagę w alternatywie dla Yotpo, jak działa migracja do FastComments od początku do końca oraz jakie zmiany następują po przejściu na FastComments.

## Dla kogo jest ten post

Ten przewodnik jest dla sprzedawców e-commerce i właścicieli sklepów korzystających z Yotpo do recenzji produktów, którzy chcą szybszej, lżejszej lub bardziej przystępnej alternatywy. Większość sprzedawców, z którymi rozmawiamy, korzysta z Shopify, ale FastComments działa tak samo na sklepach WooCommerce, BigCommerce, sklepach dostosowanych oraz w konfiguracjach headless. Proces migracji jest taki sam, niezależnie od tego, gdzie działa Twój sklep.

## Dlaczego warto się przenieść

- FastComments jest szybki. Yotpo ładowało prawie megabajt JavaScript i wiele zewnętrznych połączeń, co może spowolnić strony produktów.
- Recenzje nie pojawiają się na żywo. Klient wysyła recenzję, strona informuje go, aby sprawdził swoją skrzynkę odbiorczą, a recenzja pojawia się dopiero po pewnym czasie.
- FastComments oferuje bardziej liniowe ceny bez ograniczeń funkcji w różnych poziomach.

FastComments dostarcza oceny gwiazdkowe i wątki recenzji w pojedynczym widgetcie ~30KB, który aktualizuje się w czasie rzeczywistym. Nowe recenzje płyną do każdej otwartej strony w momencie publikacji, bez potrzeby odświeżania! Nasz plan oparty na ruchu obejmuje oceny, moderację AI, moderację wielostanową, funkcję Pytania oraz pełny eksport danych. Wielu klientów płaci tylko dolara, z cenami za miejsce administracyjne i moderacyjne dostępnymi dla większych organizacji.

## Doświadczenie na żywo

Widget Podsumowania FastComments działa na żywo, podobnie jak nasze widgety komentarzy i czatu. Jeśli zostanie zostawiona recenzja, oceny aktualizują się natychmiast bez odświeżania. To może być przydatne przy uruchamianiu produktów.

FastComments działa również poza Shopify, jeśli kiedykolwiek zdecydujesz się przenieść lub prowadzić różne sklepy na różnych platformach.

## Yotpo vs FastComments W Skrócie

Szybkie porównanie wymiarów, o które pytają sprzedawcy, kiedy szukają alternatywy dla Yotpo:

- Waga widgetu: Yotpo dostarcza ponad 800KB JavaScript w kilku połączeniach. FastComments dostarcza 38KB w jednym połączeniu.
- Żywe recenzje: Yotpo wymaga odświeżenia strony, aby pokazać nowe recenzje. FastComments natychmiast przesyła nowe gwiazdy i komentarze do każdej otwartej strony w czasie rzeczywistym.
- Ceny: Yotpo ceny ustala na podstawie wolumenu recenzji w tierowanych planach z ograniczeniami funkcji. FastComments stosuje stałą cenę w zależności od ruchu na stronach i obejmuje każdą funkcję w każdym planie.
- Recenzje ze zdjęciami i wideo: Oba je wspierają.
- Recenzje pytań i odpowiedzi: Yotpo sprzedaje Q&A jako moduł dodatkowy. FastComments zawiera tę funkcję wbudowaną w funkcję Pytania.
- Moderacja AI: Yotpo oferuje podstawowe zasady automatycznego publikowania. FastComments zawiera agentów AI z konfigurowalnym punktowaniem na komentarz oraz dziennikami audytów, a także konfigurowalnymi ustawieniami publikacji ręcznych i automatycznych.
- Eksport danych: Yotpo wymaga wyższych poziomów, aby uzyskać pełny eksport. FastComments zawiera pełny eksport w formacie CSV i JSON w każdym planie.
- Migracja z konkurenta: Yotpo pobiera opłatę za usługę migracyjną. FastComments obsługuje to bezpłatnie poprzez zgłoszenie w wsparciu.

## Jak działa migracja

Yotpo nie ma czystego eksportu samoobsługowego, który mapuje się w czysty schemat importera publicznego, więc obsługujemy migracje Yotpo przez nasz zespół wsparcia, a nie przez standardową stronę importu. Proces od początku do końca wygląda następująco:

1. Otwórz <a href="https://fastcomments.com/contact-us" target="_blank">zgłoszenie wsparcia</a> i daj nam znać, że przechodzisz z Yotpo.
2. Wyślemy Ci instrukcje dotyczące eksportu Twoich danych z Yotpo. Eksport obejmuje recenzje, oceny, zdjęcia, oznaczenia zweryfikowanych nabywców oraz odpowiedzi.
3. Prześlij eksport z powrotem do nas w zgłoszeniu.
4. Mapujemy każde pole do FastComments i ładujemy je do tymczasowego środowiska powiązanego z Twoim kontem, abyś mógł zobaczyć wynik przed wdrożeniem na żywo w Twoim sklepie.
5. Po zatwierdzeniu podglądu, przenosimy dane do Twojego środowiska produkcyjnego.

Większość migracji z Yotpo kończy się w ciągu tygodnia od momentu otrzymania eksportu.

## Co zostaje zachowane

Mapowanie obejmuje wszystko, co Yotpo przechowuje na każdą recenzję:

- Oceny gwiazdkowe i zsumowana ocena produktu
- Tekst recenzji, wątki odpowiedzi i znaczniki czasowe odpowiedzi
- Załączniki ze zdjęciami i wideo (przenosimy pliki do naszego CDN)
- Oznaczenia zweryfikowanych nabywców
- Identyfikatory klientów, aby liczniki recenzji na profilach klientów odpowiadały wcześniejszym wartościom
- Znaczniki czasowe złożenia, dzięki czemu chronologiczny porządek na stronach produktów zostaje zachowany

Jeśli masz pytania i odpowiedzi z Yotpo, te mapują się do funkcji Pytania w FastComments w tych samych wątkach produktów.

## Zmiana widgetu

Gdy dane zostaną przeniesione, zamień widget Yotpo w szablonie strony produktu na widget FastComments. Jesteśmy aplikacją Shopify, więc dla większości sklepów jest to jedna linia kodu w Twoim motywie. <a href="https://fastcomments.com/install-wizard" target="_blank">Kreator instalacji</a> obejmuje Shopify, konfiguracje headless i główne frameworki front-end. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możemy Ci w tym pomóc</a>.

Możesz tymczasowo uruchomić Yotpo i FastComments obok siebie na jednej stronie produktu, jeśli chcesz porównać wygląd i odczucia przed całkowitym przejściem.

## UE

Jeśli jesteś w UE, załóż konto na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, aby Twoje dane klientów pozostały w UE.

## Często zadawane pytania dotyczące przejścia z Yotpo

### Czy FastComments jest tańszy od Yotpo?

W prawie każdym przypadku tak. FastComments działa na jednym, płaskim planie opartym na ruchu, który obejmuje każdą funkcję, podczas gdy Yotpo pobiera opłaty za recenzję w tierowanych planach i dodaje opłaty za przekroczenia. Oblicz koszty dla swojego sklepu w <a href="https://fastcomments.com/pricing-calculator" target="_blank">kalkulatorze cenowym</a>.

### Czy mogę zachować moje recenzje Yotpo, gdy przechodzę?

Tak. Migracja zachowuje każdą recenzję, każdą ocenę, każdy załącznik ze zdjęciem lub wideo, każdą odpowiedź oraz każde oznaczenie zweryfikowanego nabywcy. Znaczniki czasowe złożenia również przechodzą, więc chronologiczny porządek na Twoich stronach produktów pozostaje taki sam.

### Czy FastComments działa poza Shopify?

Tak. FastComments działa na Shopify, WordPressie, WooCommerce, BigCommerce, dostosowanych sklepach i konfiguracjach headless. <a href="https://fastcomments.com/install-wizard" target="_blank">Kreator instalacji</a> obejmuje główne frameworki front-end.

### Czy mogę najpierw uruchomić Yotpo i FastComments obok siebie?

Tak. Zamontuj oba widgety na jednej stronie produktu podczas przeglądu przygotowawczego, aby porównać, jak wyglądają i jak się czują w Twoim sklepie, a następnie usuń Yotpo, gdy będziesz gotowy do pełnego przejścia.

### Co z Yotpo Loyalty, Yotpo SMS lub Yotpo Email?

FastComments jest platformą recenzji i komentarzy na żywo. Nie zarządza programami lojalnościowymi, marketingiem SMS ani kampaniami e-mailowymi. Jeśli korzystasz dzisiaj z tych produktów Yotpo, będziesz chciał je zachować lub przenieść do dedykowanego narzędzia, gdy przełączysz recenzje do FastComments.

Należy zauważyć, że chcielibyśmy rozwijać tę funkcjonalność, a jeśli jesteś zainteresowany byciem beta testerem tych funkcji, chętnie dodamy to do naszej krótkoterminowej mapy drogowej.

### Czy moje oceny gwiazdkowe nadal będą widoczne na stronach produktów?

Tak. Widget FastComments renderuje zbiorczą ocenę gwiazdkową, indywidualne gwiazdy recenzji oraz liczbę recenzji w tych samych miejscach, gdzie robił to widget Yotpo. HTML każdej recenzji jest zbudowany, aby wyszukiwarki mogły przechwycić dane oceny na stronie.

### Czy przejście z Yotpo na FastComments wpłynie na moje SEO?

Jeśli adresy URL Twoich stron produktów pozostaną takie same, to nie. Zawartość recenzji przenosi się do nowego widgetu na tych samych adresach URL, a wyszukiwarki widzą te same produkty z tymi samymi recenzjami na tych samych stronach. Jeśli zmieniasz adresy URL w ramach migracji, wyślij nam stare i nowe pary adresów URL w zgłoszeniu wsparcia, aby importer mógł je zmapować.

### Czy jest bezpłatny okres próbny?

Każdy plan FastComments zaczyna się od bezpłatnego okresu próbnego. Możesz założyć konto, uruchomić podgląd importu i zobaczyć widget w środowisku testowym, zanim zdecydujesz się na płatny plan.

## Podsumowanie

1. <a href="https://fastcomments.com/contact-us" target="_blank">Otwórz zgłoszenie wsparcia</a>, informując nas, że chcesz migracji z Yotpo
2. Eksportuj swoje dane z Yotpo i wyślij je do nas w zgłoszeniu
3. Zobacz podgląd importu w środowisku testowym
4. Zamień widget Yotpo na widget FastComments w szablonie swojej strony produktu

{{/isPost}}

---