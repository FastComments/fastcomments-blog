---
[category:Migration]
###### [postdate]
# [postlink]Migracja z Commento do FastComments[/postlink]

{{#unless isPost}}
Przeczytaj ten post, aby dowiedzieć się, jak w pełni migracja z Commento do FastComments.

## Pułapki

Commento nie dostarcza nam pełnych adresów URL. To, co oferują, to jedynie nazwa domeny, do której należy wątek komentarzy - na przykład "fastcomments.com/some-page".
Oznacza to, że importer FastComments musi założyć, jaki jest protokół, a domyślnie ustawia go na https. Jeśli uruchomisz import i nie widzisz swoich danych,
możesz sprawdzić, czy Twoja strona jest odpowiednio zabezpieczona.
{{/unless}}

{{#isPost}}
### Eksportuj swoje istniejące komentarze

Aby wyeksportować dane komentarzy i użytkowników swojej strony z Commento, przejdź do panelu administracyjnego, następnie do zakładki Ogólne, a potem Eksportuj dane.

Zauważysz, że plik, który otrzymasz e-mailem, ma tajemnicze rozszerzenie "gz". Jeśli masz trochę więcej wiedzy technicznej, możesz wiedzieć, że oznacza to "gzip" i jest popularnym i efektywnym sposobem kompresji plików. 

### Nie otwieraj pliku "gz"

Domyślna instalacja Windows 10 nie będzie w stanie otworzyć pliku z Commento. To dobrze, ponieważ nie musisz tego robić z FastComments. Nasz backend rozumie ten skompresowany plik.

Po tym, jeśli jesteś zalogowany, możesz iść <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tutaj, aby zaimportować plik</a>. Wybierz Commento z rozwijanej listy i prześlij swój plik.

### Poczekaj kilka minut

Import FastComments jest "asynchroniczny". Oznacza to, że przesyłanie pliku i jego przetwarzanie to osobne kroki.

W zależności od rozmiaru pliku, możesz otrzymać komunikat o powodzeniu od razu. Na stronie importu na dole znajduje się tabela - każdy wiersz reprezentuje próbę importu.
Możesz bezpiecznie odświeżyć tę stronę, aby zobaczyć status swojego importu i ile wierszy zostało dotąd zaimportowanych.

### Kiedy to skończone

Otrzymasz e-mail, kiedy import się zakończy - niezależnie od tego, czy został zakończony sukcesem, czy nie. Możesz zamknąć stronę po udanym przesłaniu pliku i zobaczeniu swojego importu na stronie Importy. Będzie miał status taki jak "Żądane", a kiedy zacznie, status będzie "W trakcie".

Możesz bezpiecznie ponownie importować tak wiele razy, jak to konieczne - jeśli jednak Twój import się nie powiedzie, to <a href="https://fastcomments.com/auth/my-account/help" target="_blank">skontaktuj się z nami</a>, abyśmy mogli pomóc.

### Zastąp kod Commento kodem FastComments

To po prostu kwestia usunięcia małego fragmentu kodu, który dostajesz od Commento, i zastąpienia go <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">naszym</a>.
Możesz nawet tymczasowo uruchomić Commento i FastComments na tej samej stronie, aby przetestować i dostosować wygląd oraz funkcjonalność. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możemy w tym pomóc</a>.

### Migracja URL-i jednocześnie

Same komentarze są powiązane z polami "link" w eksporcie Commento, więc tak długo, jak Twoje adresy URL się nie zmieniają, zmiana jest prosta. Jeśli chcesz migracji URL-i i zachowania swoich
komentarzy, to <a href="https://fastcomments.com/auth/my-account/help" target="_blank">daj nam znać</a> wysyłając nam stare i nowe adresy URL. Strona pomocy pozwala na przesyłanie małych plików tekstowych, więc jeśli
migrujesz więcej niż kilka adresów URL, stwórz arkusz Excel.

### Podsumowanie

1. Wyeksportuj swoje dane
2. Zaimportuj do FastComments
3. Zamień fragment JavaScript Commento na <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

## Pułapki

Commento nie dostarcza nam pełnych adresów URL. To, co oferują, to jedynie nazwa domeny, do której należy wątek komentarzy - na przykład "fastcomments.com/some-page".
Oznacza to, że importer FastComments musi założyć, jaki jest protokół, a domyślnie ustawia go na https. Jeśli uruchomisz import i nie widzisz swoich danych,
możesz sprawdzić, czy Twoja strona jest odpowiednio zabezpieczona.

## Dlaczego Commento nie wysyła mi mojego pliku?
W przypadku większych stron Commento może nie być w stanie stworzyć eksportowanego pliku z powodu ograniczeń technicznych po ich stronie. Mamy możliwość zeskrobania Twojej istniejącej strony i wyciągnięcia z niej komentarzy, jednak może to być
dosyć customowe i ze względu na czas, który to wymaga, będziesz musiał mieć Pakiet Wsparcia. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możesz tutaj poprosić o pomoc</a>.
{{/isPost}}

---