---
[category:Migration]

###### [postdate]
# [postlink]Migracja z IntenseDebate do FastComments[/postlink]

{{#unless isPost}}
Przeczytaj ten post, aby zobaczyć, jak w pełni migrować z IntenseDebate do FastComments.
{{/unless}}

{{#isPost}}
## Jeśli korzystasz z WordPress

FastComments ma dedykowany wtyczkę do WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Wtyczka ułatwia instalację, konfigurację i synchronizację. Jeśli wybierzesz tę drogę, możesz zignorować resztę instrukcji tutaj.

## Ręczna, ogólna instalacja

### Eksportuj swoje istniejące komentarze

Aby wyeksportować dane komentarzy i użytkowników swojego serwisu z IntenseDebate, przejdź do kokpitu Administratora, klikając: Serwisy -> Twój serwis -> Narzędzia -> Eksport XML.

Zauważysz, że plik, który otrzymasz e-mailem, ma tajemnicze rozszerzenie "gz". Jeśli jesteś nieco bardziej techniczny, możesz wiedzieć, że to oznacza "gzip" i jest popularnym oraz efektywnym sposobem kompresji plików.

### Nie otwieraj pliku "gz"

Domyślna instalacja Windows 10 nie będzie w stanie otworzyć pliku z IntenseDebate. To w porządku, ponieważ nie musisz tego robić z FastComments. Nasza infrastruktura rozumie ten skompresowany plik.

Po tym, jeśli jesteś zalogowany, możesz przejść <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tutaj, aby zaimportować plik</a>. Wybierz IntenseDebate z rozwijanej listy i przesłać swój plik.

### Poczekaj kilka minut

Import FastComments jest "asynchroniczny". Oznacza to, że przesyłanie pliku i jego przetwarzanie to osobne kroki.

W zależności od rozmiaru pliku możesz od razu otrzymać wiadomość o sukcesie. Na stronie importu na dole znajduje się tabela - każdy wiersz reprezentuje próbę importu. 
Możesz bezpiecznie odświeżyć tę stronę, aby zobaczyć status swojego importu i ile wierszy zostało dotychczas zaimportowanych.

### Kiedy to się skończy

Otrzymasz e-mail, gdy import zostanie zakończony - bez względu na to, czy zakończy się sukcesem, czy nie. Możesz zamknąć stronę po pomyślnym przesłaniu pliku i po tym, jak zobaczysz swój import na stronie Importy. Będzie miał status taki jak "Zażądano", a gdy zacznie, status będzie "W trakcie".

Możesz powtórnie importować tyle razy, ile potrzebujesz - jednak jeśli Twój import się nie powiedzie, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">skontaktuj się z nami</a>, abyśmy mogli pomóc.

### Zastąp kod IntenseDebate kodem FastComments

To po prostu kwestia usunięcia małego fragmentu kodu, który daje ci IntenseDebate, i zastąpienia go <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">naszym własnym</a>. 
Możesz nawet tymczasowo uruchomić IntenseDebate i FastComments na tej samej stronie, aby przetestować i dostosować wygląd i odczucia. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możemy Ci w tym pomóc</a>.

Jeśli korzystasz z widgetów IntenseDebate i chcesz je zastąpić, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">skontaktuj się z nami tutaj</a>.

### Migracja URL w tym samym czasie

Same komentarze są powiązane z polami "link" w eksporcie IntenseDebate, więc tak długo, jak twoje URL-e się nie zmienią, przełączenie jest łatwe. Jeśli chcesz migrować URL i zachować swoje
komentarze, to <a href="https://fastcomments.com/auth/my-account/help" target="_blank">daj nam znać</a>, przesyłając stare i nowe URL-e. Strona pomocy pozwala na przesyłanie małych plików tekstowych, więc jeśli
migracja dotyczy więcej niż kilku URL-i, stwórz arkusz Excel.

### Podsumowanie

1. Wyeksportuj swoje dane
2. Zaimportuj do FastComments
3. Wymień fragment JavaScript IntenseDebate na <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

## Dlaczego IntenseDebate nie wyśle mi mojego pliku?
Dla większych serwisów IntenseDebate może nie być w stanie stworzyć wyeksportowanego pliku z powodu ograniczeń technicznych po ich stronie. Mamy możliwość przeskanowania Twojego istniejącego serwisu i pobrania z niego komentarzy, jednak może to być
dość niestandardowe, a czas związany z tym wymaga, byś miał Pakiet Wsparcia. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możesz poprosić o pomoc w tym tutaj</a>.
{{/isPost}}

---