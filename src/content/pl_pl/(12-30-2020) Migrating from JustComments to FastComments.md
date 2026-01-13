---
[category:Migration]
###### [postdate]
# [postlink]Migracja z JustComments do FastComments[/postlink]

{{#unless isPost}}
Przeczytaj ten post, aby dowiedzieć się, jak w pełni przejść z JustComments na FastComments.

Zazwyczaj chodzi o usunięcie małego fragmentu kodu, który ci podają, i zastąpienie go <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">naszym własnym</a>.
Możesz nawet tymczasowo uruchomić JustComments i FastComments na tej samej stronie, aby przetestować i dostosować wygląd. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możemy w tym pomóc</a>.
{{/unless}}

{{#isPost}}

Od 2021 roku JustComments zniknie z rynku. W FastComments ułatwiliśmy Ci przejście na naszą platformę.

Odkryjesz, że FastComments oferuje wiele tych samych funkcji, do których jesteś przyzwyczajony, a nawet więcej.

## Różnice w cenach

Podczas gdy JustComments korzysta z systemu opartego na kredytach, FastComments używa modelu warstwowego, z trzema dostępnymi warstwami. W przypadku FastComments nasz plan za 5 USD/miesiąc
obejmuje do 1M załadowań strony miesięcznie. Powyżej tego są plany Pro i Enterprise, które możesz zobaczyć na naszej <a href="https://fastcomments.com/traffic-pricing" target="_blank">stronie cenowej</a>.

## Jeśli korzystasz z WordPress

FastComments ma dedykowany wtyczkę do WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Wtyczka znacznie ułatwia instalację, konfigurację i synchronizację. Jednak JustComments nie synchronizuje Twoich komentarzy z powrotem do Twojej instalacji WordPress, tak jak robi to FastComments.
Oznacza to, że po synchronizacji będziesz musiał wykonać kroki eksportu i importu poniżej.

## Eksportuj swoje istniejące komentarze

Importator FastComments przeniesie Twoje komentarze, nazwy użytkowników, awatary użytkowników i obrazy w treści. Przeniesiemy obrazy na nasze serwery bezproblemowo.

Aby pobrać dane swoich komentarzy z JustComments, przejdź do strony swojego konta.

## Importuj do panelu administracyjnego FastComments

Nie martw się o otwieranie rezultatu pliku z JustComments.

Jeśli jesteś zalogowany, możesz <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tutaj zaimportować plik</a>.

Wybierz JustComments z rozwijanego menu i prześlij swój plik.

### Identyfikatory stron

Podczas importu zobaczysz opcję wyboru URL strony lub "Item ID". Jeśli nie jesteś pewien, co wybrać, wybierz URL strony. Jeśli masz integrację z JustComments,
gdzie określasz Item ID w konfiguracji widgetu, wybierz Item ID.

### Poczekaj kilka minut

Import FastComments jest "asynchroniczny". Oznacza to, że przesyłanie pliku i jego przetwarzanie są oddzielnymi krokami.

Zatem, w zależności od rozmiaru Twojego pliku, możesz od razu otrzymać komunikat o powodzeniu. Na stronie importu na dole znajduje się tabela - każdy wiersz reprezentuje próbę importu.
Możesz bezpiecznie odświeżyć tę stronę, aby zobaczyć status swojego importu i ile wierszy zostało do tej pory zaimportowanych.

### Kiedy to będzie skończone

Otrzymasz e-mail, gdy import się zakończy - niezależnie od tego, czy zakończył się sukcesem, czy nie. Możesz zamknąć stronę po pomyślnym przesłaniu pliku i zobaczeniu swojego importu na stronie Importy. Będzie miał status „Zażądano”, a gdy się rozpocznie, status zmieni się na „W trakcie”.

Możesz bezpiecznie ponownie zaimportować tyle razy, ile potrzebujesz - jednak jeśli Twój import się nie powiedzie, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">skontaktuj się z nami</a>, abyśmy mogli pomóc.

### Zamień kod JustComments na FastComments

Jeśli nie korzystasz z wtyczki JustComments do WordPress, wystarczy usunąć mały fragment kodu, który oni ci podają, i zastąpić go <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">naszym własnym</a>.
Możesz nawet tymczasowo uruchomić JustComments i FastComments na tej samej stronie, aby przetestować i dostosować wygląd. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możemy w tym pomóc</a>.

### Migracja URL w tym samym czasie

Same komentarze są domyślnie powiązane z polami "pageUrl" w eksporcie JustComments, więc tak długo, jak Twoje URL-e się nie zmieniają, zmiana jest prosta. Jeśli chcesz migracji URL-i i zachowania swoich
komentarzy, to <a href="https://fastcomments.com/auth/my-account/help" target="_blank">daj nam znać</a>, przesyłając nam stare i nowe URL-e. Strona pomocy pozwala na przesyłanie małych plików tekstowych, więc jeśli
migrujesz więcej niż tylko kilka URL-i, stwórz arkusz Excela.

## Podsumowanie

1. Eksportuj swoje dane
2. Importuj do FastComments
3. Jeśli nie korzystasz z WordPress, zamień fragment JavaScript JustComments na <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

{{/isPost}}

---