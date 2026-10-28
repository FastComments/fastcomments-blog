[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]Komentarze są teraz tłumaczone dla każdego czytelnika[/postlink]

{{#unless isPost}}
FastComments może teraz tłumaczyć same komentarze, a nie tylko widget wokół nich. Włącz to per site lub per page, automatycznie lub przyciskiem Translate, i każdy czytelnik widzi rozmowę w swoim języku, a oryginał jest oddalony o jedno kliknięcie.
{{/unless}}

{{#isPost}}

### Co nowego

FastComments jest już od pewnego czasu przetłumaczony na dwadzieścia osiem języków, więc przyciski, etykiety i e‑maile wyświetlają się w języku czytelnika. Komentarze nie. Hiszpański komentarz na angielskiej stronie pozostał po hiszpańsku, a każdy, kto go nie rozumiał, przewijał dalej.

Ta wersja dodaje **Comment Translation**. Gdy jest włączona, komentarz napisany w języku innym niż język czytelnika jest wyświetlany przetłumaczony, z małą linią pod spodem informującą, skąd pochodzi, oraz linkiem **Show original**, aby zobaczyć, co faktycznie zostało napisane.

<img src="images/fc-comment-translation-auto.png" alt="An English reader seeing a Spanish comment translated, with a Translated from Spanish line and a Show original link under it" title="Automatic Comment Translation" class="lozad" />

### Dwa tryby

**Automatic** tłumaczy od razu. Każdy komentarz w innym języku przychodzi przetłumaczony, a czytelnik może przełączyć się na oryginał, jeśli chce. To tryb dla społeczności, która naprawdę pisze w dwóch lub więcej językach i chce, aby wszyscy czytali tę samą rozmowę.

**Manual** dodaje link **Translate** do każdego komentarza i nie robi nic, dopóki nie zostanie kliknięty. Czytelnik decyduje, które komentarze są warte tłumaczenia, i nie wydaje się nic na te, o które nikt nie pyta. Komentarz, który już jest w języku czytelnika, informuje o tym zamiast udawać, że go tłumaczy.

<img src="images/fc-comment-translation-manual.png" alt="Manual mode, where a Spanish comment has been translated on click and an English comment reports it is already in the reader's language" title="Manual Comment Translation" class="lozad" />

W obu trybach język czytelnika jest taki, jaki widget już wyświetla: **Locale / Language**, które ustawiasz w regule dostosowywania, lub język przeglądarki odwiedzającego, jeśli nie ustawiłeś żadnego. Nie ma nic, co odwiedzający musiałby instalować, rejestrować się lub konfigurować. Działa to tak samo, czy widget jest osadzony na Twojej stronie, w kreatorze witryn takim jak Google Sites, czy na samodzielnej stronie komentarzy FastComments.

### Włączanie

Otwórz <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>, znajdź **Comment Translation** tuż pod **Locale / Language** i wybierz Automatic lub Manual. Domyślnie jest wyłączone.

Ponieważ znajduje się w regule dostosowywania, możesz go zastosować tak, jak chcesz: na całej stronie, jednej domenie lub pojedynczej stronie, gdzie wiesz, że odbiorcy są mieszani. To ustawienie po stronie serwera, więc nie można go włączyć wyłącznie z konfiguracji JavaScript widgetu.

### Koszty

Tłumaczenia są generowane przez model językowy i rozliczane jako tokeny LLM, ten sam licznik co
[AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html). Każdy plan może je włączyć.

Każdy komentarz jest tłumaczony raz na język, a tłumaczenie jest przechowywane razem z komentarzem. Jeśli tysiąc hiszpańskich czytelników otworzy ten sam angielski wątek, praca tłumaczeniowa odbywa się raz. Typowy komentarz to kilka set tokenów, co przy stawkach Flex wynosi około pół centa. Jeśli autor lub moderator edytuje komentarz, przechowywane tłumaczenie jest usuwane i komentarz jest tłumaczony ponownie przy następnym wyświetleniu, więc nikt nie czyta tłumaczenia tekstu, który już nie istnieje.

Tryb manualny nie kosztuje nic, dopóki ktoś nie kliknie.

### Szczegóły

Przetłumaczony tekst jest traktowany dokładnie tak, jak komentarz wpisany przez kogoś. Przechodzi przez te same reguły sanitacji i linkowania co oryginał, więc tłumaczenie nie może zawierać niczego, czego oryginał nie mógłby. Wzmianki i hashtagi zachowują swoje formatowanie.

Komentarze bardzo długie lub takie, których język nie może być wykryty z pewnością, pozostawiane są w oryginalnej formie, a nie zgadywane. Linia języka pod przetłumaczonym komentarzem jest również w języku czytelnika, więc hiszpański czytelnik angielskiego komentarza widzi „Traducido del inglés” i „Mostrar original”.

### Obciążenie

Kod tej nowej funkcji nie jest ładowany, chyba że jest włączony, więc nie spowalnia widgetu komentarzy dla naszych innych użytkowników.

### Dokumentacja

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">Przewodnik tłumaczenia komentarzy</a> obejmuje oba tryby, ustawienie reguły i rozliczenia.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Przewodnik po ustawieniach regionalnych</a> opisuje, jak język widgetu jest wybierany od samego początku.

### Podsumowanie

Ten pomysł pochodzi od stowarzyszenia sąsiedzkiego, którego mieszkańcy komentują po angielsku i hiszpańsku, i którzy chcieli, aby obie grupy czytały ten sam wątek bez proszenia kogokolwiek o instalację rozszerzenia przeglądarki czy rejestrację.

Jeśli prowadzisz społeczność, która pisze w więcej niż jednym języku, włącz tę funkcję i powiedz nam poniżej, jak brzmią tłumaczenia.

Pozdrawiam!

{{/isPost}}

---