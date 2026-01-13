---
[category:Features]

###### [postdate]
# [postlink]Łatwe wsparcie dla fragmentów kodu z FastComments[/postlink]

Niektórzy z naszych klientów mają strony i blogi związane z rozwojem oprogramowania. W tych społecznościach powszechnie dzieli się fragmentami kodu. Oto jak FastComments to ułatwia.

{{#isPost}}

FastComments umożliwia dzielenie się kodem po prostu poprzez wklejanie go do pola komentarza. Można go mieszać z innym tekstem i obrazami i nie wymaga ręcznego dodawania jakichkolwiek tagów "code"
do zastosowania formatowania. Po prostu wklej!

Oto szybka demonstracja, która pokazuje to w akcji.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Demonstracja dzielenia się fragmentami kodu" title="Demonstracja dzielenia się fragmentami kodu"></video>

### Impikacje wydajności

Dodanie tej funkcji dodało tylko ~150 bajtów do rozmiaru widgetu po stronie klienta, ponieważ większość funkcjonalności jest obsługiwana po stronie serwera. W rzeczywistości, jeśli zgrupujesz to z nowymi funkcjami Markdown, rozmiar widgetu faktycznie zmniejszył się z tymi nowymi funkcjami!

### Rzeczy do zauważenia

Jeśli masz społeczność, która intensywnie dzieli się kodem, powinieneś rozważyć zwiększenie maksymalnego rozmiaru komentarzy, aby ułatwić dzielenie się fragmentami kodu. Można to zrobić za pomocą zakładki "Dostosuj"
w panelu administracyjnym.

### Wykrywanie kodu

Aby utrzymać mały rozmiar widgetu po stronie klienta, automatycznie wykrywamy wklejony kod tylko dla języków podobnych do C i Pythona (Java, JavaScript, CSS, C++, na przykład), które używają "{" lub spacji do sterowania przepływem.
Jeśli często używasz języka, który nie jest automatycznie wykrywany, skontaktuj się z nami.

Aby ręcznie wstawić blok kodu, napisz komentarz jak: ```<code>(defun someLispCode(1, 2, 3))</code>```. Możemy automatycznie wykryć około 150 języków.

### Migracja istniejących komentarzy

Jeśli chcesz przejść do FastComments i masz wiele komentarzy, które zawierają fragmenty kodu, które chciałbyś sformatować poprawnie, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">możemy pomóc</a>.

### Podsumowanie

To wszystko! Wprowadziliśmy to do wszystkich społeczności online na FastComments.

Szczęśliwego komentowania!

{{/isPost}}