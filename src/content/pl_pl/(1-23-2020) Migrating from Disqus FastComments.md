---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migracja z Disqus do FastComments[/postlink]

{{#unless isPost}}
Przeczytaj ten post, aby zobaczyć, jak w pełni migrować z Disqus do FastComments.

Jeśli korzystasz z Integracji Strony Ogólnej z Disqus, wystarczy usunąć mały fragment kodu, który oni podają i zastąpić go <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">naszym</a>.
Możesz nawet tymczasowo uruchomić Disqus i FastComments na tej samej stronie, aby przetestować i dostosować wygląd i styl. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możemy w tym pomóc</a>.

Jeśli nie korzystasz z Integracji Strony Ogólnej, instrukcje będą się różnić w zależności od Twojej platformy - ponownie <a href="https://fastcomments.com/auth/my-account/help" target="_blank">skontaktuj się z nami</a>.
{{/unless}}

{{#isPost}}
Jest wiele rzeczy, które Disqus robi dobrze, ale tam, gdzie mają braki, tam wkracza FastComments.

## Jeśli korzystasz z WordPress

FastComments ma dedykowaną wtyczkę do WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Wtyczka sprawia, że instalacja, konfiguracja i synchronizacja są bardzo proste. Jeśli wybierzesz tę opcję, możesz zignorować resztę instrukcji tutaj.

## Ręczna, Ogólna Instalacja

### Eksportuj swoje istniejące komentarze

Importer FastComments przeniesie Twoje komentarze, nazwy użytkowników, awatary użytkowników i obrazy w treści. Przeniesiemy obrazy na nasze serwery bezproblemowo.

Jedną z dobrych rzeczy, które robi Disqus, jest sposób, w jaki obsługują eksport danych. Zauważysz po wykonaniu kroków w ich przewodniku <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">tutaj</a>, że wynikowy
plik, który otrzymujesz ma tajemnicze rozszerzenie "gz". Jeśli masz trochę dodatkowych umiejętności technicznych, możesz wiedzieć, że oznacza to "gzip" i jest popularnym i efektywnym sposobem kompresji plików. 

### Nie otwieraj pliku "gz"

Domyślna instalacja Windows 10 nie będzie w stanie otworzyć pliku z Disqus. To w porządku, ponieważ nie musisz tego robić z FastComments. Nasza infrastruktura rozumie
ten skompresowany plik, więc wszystko, co musisz zrobić, to postępować zgodnie z ich instrukcjami <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">tutaj, aby uzyskać wspomniany plik</a>.

Po tym, jeśli jesteś zalogowany, możesz przejść <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tutaj, aby zaimportować plik</a>. Wybierz Disqus z rozwijanego menu i prześlij swój plik.

### Poczekaj kilka minut

Import FastComments jest "asynchroniczny". Oznacza to, że przesyłanie pliku i jego przetwarzanie są oddzielnymi krokami.

Więc, w zależności od rozmiaru pliku, możesz od razu otrzymać komunikat o powodzeniu. Na stronie importu na dole znajduje się tabela - każdy wiersz reprezentuje próbę importu.
Możesz bezpiecznie odświeżyć tę stronę, aby zobaczyć status swojego importu i ile wierszy zostało zaimportowanych do tej pory.

### Kiedy to się skończy

Otrzymasz e-mail, gdy import zostanie zakończony - niezależnie od tego, czy zakończy się powodzeniem, czy nie. Możesz zamknąć stronę po pomyślnym przesłaniu pliku i zobaczeniu swojego importu na stronie Importy. Będzie miał status "Wysłano", a gdy rozpocznie się jego status, będzie "W trakcie".

Bez obaw możesz ponownie importować tyle razy, ile potrzeba - jednak jeśli twój import nie powiedzie się, to <a href="https://fastcomments.com/auth/my-account/help" target="_blank">skontaktuj się z nami</a>, abyśmy mogli pomóc.

### Zastąp kod Disqus kodem FastComments

Jeśli korzystasz z Integracji Strony Ogólnej z Disqus, wystarczy usunąć mały fragment kodu, który oni podają i zastąpić go <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">naszym</a>.
Możesz nawet tymczasowo uruchomić Disqus i FastComments na tej samej stronie, aby przetestować i dostosować wygląd i styl. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możemy w tym pomóc</a>.

Jeśli nie korzystasz z Integracji Strony Ogólnej, instrukcje będą się różnić w zależności od Twojej platformy - ponownie <a href="https://fastcomments.com/auth/my-account/help" target="_blank">skontaktuj się z nami</a>.

### Migrowanie URL w tym samym czasie

Same komentarze są powiązane z polami "link" w eksporcie Disqus, więc tak długo, jak Twoje URL nie zmieniają się, przełączenie jest proste. Jeśli chcesz migrować URL i zachować swoje
komentarze, to <a href="https://fastcomments.com/auth/my-account/help" target="_blank">daj nam znać</a>, wysyłając nam stare i nowe URL. Strona pomocy pozwala na przesyłanie małych plików tekstowych, więc jeśli
migrujesz więcej niż tylko kilka URL, stwórz arkusz Excela.

### Podsumowanie

1. Eksportuj swoje dane
2. Importuj do FastComments
3. Zamień fragment JavaScript Disqus na <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

## Dlaczego Disqus nie wyśle mi mojego pliku?
Dla większych stron Disqus może nie być w stanie stworzyć eksportowanego pliku z powodu ograniczeń technicznych z ich strony. Mamy możliwość zeskrobania Twojej istniejącej strony i pobrania komentarzy z niej, jednak to może być
dość niestandardowe i ze względu na zaangażowany czas wymagać będzie posiadania Pakietu wsparcia. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możesz poprosić o pomoc w tym tutaj</a>.
{{/isPost}}