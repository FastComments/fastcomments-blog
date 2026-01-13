---
[category:Features]

###### [postdate]
# [postlink]FastComments teraz obsługuje Markdown[/postlink]

Bogatsze doświadczenie komentowania dotarło do FastComments dzięki wykorzystaniu Markdown!

{{#isPost}}

Markdown to zestaw konwencji do stylizacji tekstu. Na przykład, aby stworzyć pogrubione słowo, możemy \*\*zrobić to\*\*.
Wklejenie zwykłych linków oznacza po prostu wklejenie surowego URL, a obrazy działają jak wcześniej.

Oto kartka z zadaniami Markdown, dostarczona przez Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Jaką składnię Markdown obsługuje FastComments?

W pełni wspieramy Markdown, z wyjątkiem nagłówków. Podczas definiowania nagłówka po prostu renderujemy go jako zwykły tekst, ponieważ odwracają one uwagę od przebiegu rozmowy. Nagłówki
są przeznaczone do treści takich jak posty na blogu i dokumenty - nie do rozmów.

FastComments zawsze obsługiwał obrazy za pomocą składni [img]...[/img]. To będzie nadal wspierane, ponieważ jest łatwiejsze do zrozumienia niż Markdown.

### Mieszanie treści

Pojedynczy komentarz może zawierać wszystkie formy formatowania - markdown, linki, obrazy, fragmenty kodu i tabele.

### Unikanie ataków XSF/XSS

Wcześniej FastComments przesyłał czysty tekst przez sieć i analizował go po stronie klienta. Teraz HTML jest przesyłany przez sieć, a my utrzymujemy dwie wersje każdego komentarza
w naszej bazie danych, aby wspierać funkcjonalności takie jak edytowanie komentarzy.

Wysyłanie HTML bezpośrednio do komentarzy wiąże się z ryzykiem - dlatego wszystkie generowane komentarze są analizowane i czyszczone, aby zapobiec atakom cross-site i cross-frame.

### Eksport danych

Podczas eksportowania komentarzy otrzymasz wersję, którą użytkownik widział, gdy pisał swój komentarz. Jeśli chcesz uzyskać surowy HTML, skontaktuj się z nami.

### Problemy z wydajnością

Zbyt wiele funkcji ma tendencję do spowalniania działania. Tego nie chcemy robić w FastComments.
Dodanie tej funkcji **zmniejszyło** rozmiar naszego widżetu po stronie klienta o ~400 bajtów - z 9.53kb do 9.12kb - co oznacza szybsze ładowanie stron.

Choć teoretycznie ta funkcja mogłaby spowolnić mechanizm zapisywania komentarzy, nie zauważyliśmy żadnych degradacji wydajności i jak zawsze monitorujemy nasze API.

### Jak to uzyskać?

Wsparcie dla Markdown zostało automatycznie wdrożone do wszystkich naszych klientów. Nie powinieneś zauważyć zbyt wielu zmian w treści publikowanej na twojej stronie - chyba że teraz użytkownicy mogą pogrubiać, podkreślać i robić inne ciekawe rzeczy,
takie jak tworzenie prostych tabel.

Jak z każdą aktualizacją funkcji czekamy na opinie i podczas gdy mamy wiele zautomatyzowanych testów... jeśli zauważysz jakiekolwiek problemy - daj nam znać!

Szczęśliwego komentowania.

{{/isPost}}