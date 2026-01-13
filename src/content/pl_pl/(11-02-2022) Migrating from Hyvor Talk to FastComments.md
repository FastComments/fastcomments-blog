---
[category:Migration]
###### [postdate]
# [postlink]Migracja z Hyvor Talk do FastComments[/postlink]

{{#unless isPost}}
Przeczytaj ten post, aby dowiedzieć się, jak w pełni migrować z Hyvor Talk do FastComments.

Jeśli używasz ręcznej instalacji kodu z Hyvor Talk, wystarczy usunąć mały fragment kodu, który otrzymałeś, i zastąpić go <a href="https://fastcomments.com/install-wizard" target="_blank">naszym</a>.
Możesz nawet tymczasowo uruchomić Hyvor i FastComments na tej samej stronie, aby przetestować i dostosować wygląd. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możemy w tym pomóc</a>.

Jeśli nie używasz instalacji opartej na fragmencie kodu, instrukcje będą się różnić w zależności od Twojej platformy - ponownie <a href="https://fastcomments.com/auth/my-account/help" target="_blank">skontaktuj się z nami</a>.
{{/unless}}

{{#isPost}}

## Jeśli jesteś na WordPressie

FastComments ma dedykowaną wtyczkę do WordPressa: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Wtyczka ułatwia instalację, konfigurację i synchronizację. Jeśli wybierzesz tę drogę, możesz zignorować resztę instrukcji tutaj. Upewnij się tylko, 
że zsynchronizowałeś swoje komentarze z Hyvor Talk z instalacją WordPress.

Jeśli to nie działa dla Ciebie, jak zgłaszali niektórzy nasi klienci, możesz chcieć użyć naszej wtyczki do WordPressa, ale wykonać import danych 
poprzez ręczne wyeksportowanie z Hyvor Talk. Możesz znaleźć import danych w [Zarządzaj danymi -> Importuj komentarze](https://fastcomments.com/auth/my-account/manage-data/import).

## Ręczna, ogólna instalacja

### Eksportuj swoje istniejące komentarze

Importer FastComments przeniesie Twoje wątki komentarzy, nazwy użytkowników, awatary, emoji i obrazy wbudowane. Przeniesiemy obrazy na nasze serwery bezproblemowo.

Od 2022 roku Hyvor Talk nie eksportuje adresów e-mail ani głosów w górę/w dół. Jeśli uda Ci się uzyskać eksport z tymi informacjami, możemy to zaimportować.

### Importuj plik .JSON

Po pobraniu eksportu z Hyvor, zaloguj się do swojego panelu FastComments i przejdź <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tutaj, aby zaimportować plik</a>. Wybierz Hyvor Talk z rozwijanego menu i przesył plik.

### Poczekaj kilka minut

Import FastComments jest "asynchroniczny". Oznacza to, że przesyłanie pliku i jego przetwarzanie to oddzielne kroki.

W zależności od rozmiaru pliku możesz od razu otrzymać komunikat o powodzeniu. Na stronie importu na dole znajduje się tabela - każdy wiersz reprezentuje próbę importu.
Możesz bezpiecznie odświeżyć tę stronę, aby zobaczyć status swojego importu i ile wierszy zostało dotychczas zaimportowanych.

### Kiedy to się skończy

Otrzymasz e-mail, gdy import się zakończy - niezależnie od tego, czy się powiedzie, czy nie. Możesz zamknąć stronę po pomyślnym przesłaniu pliku i gdy zobaczysz swój import na stronie importów. Będzie mieć status "Zamówione", a kiedy się zacznie, status będzie "W trakcie".

Możesz ponownie importować tyle razy, ile potrzebujesz - jednak jeśli Twój import nie powiedzie się, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">skontaktuj się z nami</a>, abyśmy mogli pomóc.

### Zastąp kod Hyvor Talk kodem FastComments

Jeśli używasz instalacji opartej na fragmencie kodu z Hyvor, wystarczy usunąć mały fragment kodu, który otrzymałeś, i zastąpić go <a href="https://fastcomments.com/install-wizard" target="_blank">naszym</a>.
Obsługujemy także wiele frameworków front-end, które [możesz znaleźć tutaj](https://fastcomments.com/install-wizard). Możesz nawet tymczasowo uruchomić Hyvor i FastComments na tej samej stronie, aby przetestować i dostosować wygląd. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możemy w tym pomóc</a>.

Jeśli nie używasz instalacji opartej na fragmencie kodu, instrukcje będą się różnić w zależności od Twojej platformy - ponownie <a href="https://fastcomments.com/auth/my-account/help" target="_blank">skontaktuj się z nami</a>.

Oferujemy kreator instalacji samoobsługowej [tutaj](https://fastcomments.com/install-wizard).

### Migrowanie adresów URL jednocześnie

Same komentarze są powiązane z polami id strony w eksporcie, więc tak długo, jak Twoje adresy URL nie zmieniają się, przełączenie jest łatwe. Jeśli chcesz migrować adresy URL i zachować swoje 
komentarze, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">daj nam znać</a>, wysyłając stare i nowe adresy URL. Strona pomocy pozwala na przesyłanie małych plików tekstowych, więc jeśli 
migrujesz więcej niż kilka adresów URL, stwórz arkusz Excel.

### UE

Jeśli jesteś w UE, prawdopodobnie chcesz założyć swoje konto na [eu.fastcomments.com](https://eu.fastcomments.com), aby Twoje dane klientów pozostały w UE.

### Podsumowanie

1. Eksportuj swoje dane
2. Importuj do FastComments
3. Zamień fragment JavaScript Hyvor na <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments</a>

## Dlaczego Hyvor nie wysyła mi mojego pliku?
W przypadku większych witryn Hyvor może nie być w stanie utworzyć wyeksportowanego pliku z powodu ograniczeń technicznych z ich strony. Mamy możliwość zeskrobywania Twojej istniejącej strony i pobierania komentarzy z niej, jednak to może być 
dość niestandardowe i ze względu na potrzebny czas wymaga posiadania Pakietu Wsparcia. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możesz poprosić o pomoc w tej sprawie tutaj</a>.
{{/isPost}}

---