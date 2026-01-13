---
[category:Migration]
###### [postdate]
# [postlink]Migracja z Muut Comments do FastComments[/postlink]

{{#unless isPost}}
Przeczytaj ten post, aby zobaczyć, jak w pełni migrować z Muut do FastComments.

To po prostu kwestia usunięcia małego fragmentu, który daje Ci Muut, i zastąpienia go <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">naszym</a>.
Możesz nawet tymczasowo używać Muut i FastComments na tej samej stronie, aby przetestować i dostosować wygląd i odczucia. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możemy w tym pomóc</a>.
{{/unless}}

{{#isPost}}
### Eksportuj istniejące komentarze

Importer FastComments przeniesie Twoje komentarze, nazwy użytkowników, awatary użytkowników i obrazy inline. Przeniesiemy obrazy na nasze serwery bezproblemowo.

Aby wyeksportować dane komentarzy i użytkowników ze swojej strony z Muut, przejdź do panelu administratora, a następnie do Integracji i wybierz JSON Export.

Zauważysz, że plik, który otrzymujesz e-mailem, ma tajemniczy rozszerzenie "gz". Jeśli jesteś nieco bardziej technicznie zaawansowany, możesz wiedzieć, że oznacza to "gzip" i jest popularnym i efektywnym sposobem kompresji plików.

### Nie otwieraj pliku "gz"

Domyślna instalacja systemu Windows 10 nie będzie w stanie otworzyć pliku z Muut. To w porządku, ponieważ nie musisz tego robić z FastComments. Nasza strona backendowa rozumie ten skompresowany plik.

Po tym, jeśli jesteś zalogowany, możesz przejść <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tutaj, aby zaimportować plik</a>. Wybierz Muut z listy rozwijanej i załaduj swój plik.

Będziesz musiał wprowadzić adres URL swojej strony internetowej. To dlatego, że Muut nie przekazuje nam tych informacji w eksporcie.

### Poczekaj kilka minut

Import FastComments jest "asynchroniczny". Oznacza to, że przesyłanie pliku i przetwarzanie go to oddzielne kroki.

Zatem, w zależności od rozmiaru pliku, możesz od razu otrzymać komunikat o sukcesie. Na stronie importu na dole znajduje się tabela - każdy wiersz reprezentuje próbę importu.
Możesz bezpiecznie odświeżyć tę stronę, aby zobaczyć status swojego importu i ile wierszy zostało dotychczas zaimportowanych.

### Kiedy to się skończy

Otrzymasz e-mail, gdy import zostanie zakończony - niezależnie od tego, czy się powiedzie, czy nie. Możesz zamknąć stronę po tym, jak przesyłanie pliku się powiedzie i zobaczysz swój import na stronie Importy. Będzie miał status "Zgłoszono", a gdy się rozpocznie, status zmieni się na "W trakcie".

Bezpiecznie jest ponownie zaimportować tak wiele razy, jak to konieczne - jednak jeśli twój import nie powiedzie się, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">skontaktuj się z nami</a>, abyśmy mogli pomóc.

### Zastąp kod Muut kodem FastComments

To po prostu kwestia usunięcia małego fragmentu, który daje Ci Muut, i zastąpienia go <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">naszym</a>.
Możesz nawet tymczasowo używać Muut i FastComments na tej samej stronie, aby przetestować i dostosować wygląd i odczucia. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możemy w tym pomóc</a>.

### Migrowanie URL-i jednocześnie

Same komentarze są powiązane z polami "link" w eksporcie Muut, więc tak długo, jak Twoje URL-e się nie zmieniają, przełączenie jest łatwe. Jeśli chcesz migrować URL-e i zachować swoje komentarze, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">daj nam znać</a>, wysyłając nam stare i nowe URL-e. Strona pomocnicza pozwala na przesyłanie małych plików tekstowych, więc jeśli migrujesz więcej niż tylko kilka URL-i, stwórz arkusz Excel.

### Podsumowanie

1. Wyeksportuj swoje dane
2. Zaimportuj do FastComments
3. Zamień fragment JavaScript Muut na <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

## Dlaczego Muut nie wysyła mi mojego pliku?
Dla większych stron Muut może nie być w stanie utworzyć wyeksportowanego pliku z powodu ograniczeń technicznych z ich strony. Mamy możliwość zeskrobania Twojej istniejącej strony i pobrania komentarzy z niej, jednak może to być
dość niestandardowe i z powodu czasu wymagane będzie posiadanie Pakietu wsparcia. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możesz poprosić o pomoc w tym tutaj</a>.
{{/isPost}}

---