---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Jak usunąć reklamy z komentarzy Disqus[/postlink]

{{#unless isPost}}
Na darmowym planie Disqus, w twojej sekcji komentarzy pojawiają się reklamy. Istnieją dwa sposoby, aby się ich pozbyć. Lepszy z nich sprawia, że twoje komentarze ładują się szybciej i uniemożliwia śledzenie twoich czytelników.
{{/unless}}

{{#isPost}}

Disqus zarabia na swoim darmowym planie, umieszczając reklamy w twojej sekcji komentarzy, tuż pod twoją zawartością, w tym samym miejscu, gdzie twoi czytelnicy przychodzą, aby z tobą porozmawiać. Te reklamy nie są twoje. Nie wybierasz ich i nie zarabiasz na nich ani grosza. To jest cena za darmową wersję.

Istnieją dwa prawdziwe sposoby, aby je usunąć.

## Opcja 1: Uaktualnij swój plan Disqus

Najprostszym rozwiązaniem jest zapłacenie za Disqus. Ich płatne plany wyłączają reklamy. Możesz znaleźć aktualne opcje na <a href="https://disqus.com/pricing/" target="_blank">stronie cenowej Disqus</a>.

To działa, ale warto wyjaśnić, za co płacisz. Płacisz, aby cofnąć wadę. Reklamy znikają, a reszta Disqus pozostaje taka sama: obszar komentarzy nadal ładuje ciężki pakiet skryptów osób trzecich, a twoi czytelnicy nadal są śledzeni po stronach, które go osadzają. Płacisz za usunięcie reklam, a nie za uczynienie sekcji komentarzy lżejszą lub bardziej prywatną.

## Opcja 2: Przełącz się na platformę, która nigdy nie wyświetla reklam

Inny sposób, aby usunąć reklamy, to skorzystanie z platformy do komentowania, która w ogóle ich nie wyświetla. :)

Za jedyne 0,99 USD/miesiąc, FastComments oferuje głęboką, zoptymalizowaną funkcjonalność bez śledzenia lub reklam.

## Zachowujesz wszystkie komentarze

Część, którą ludzie najbardziej się martwią, to utrata istniejącej dyskusji. FastComments ma wbudowany importer Disqus, który przenosi twoje komentarze, nazwiska użytkowników, avatary użytkowników, obrazy w treści, głosy i znaczniki czasu. Nawet przenosimy wszystkie obrazy do naszego własnego CDN dla ciebie.

Jeśli chcesz pełnego, szczegółowego przewodnika, mamy dedykowany artykuł: [Migracja z Disqus do FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). Skrócona wersja jest poniżej.

## Jak przełączyć się w trzech krokach

### 1. Eksportuj swoje komentarze z Disqus

Postępuj zgodnie z <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">własnymi krokami eksportu Disqus</a>. Wyślą ci plik z rozszerzeniem "gz". Nie musisz go otwierać ani dekompresować, a domyślna instalacja Windows i tak nie może tego zrobić. Nasz backend odczytuje ten skompresowany plik bezpośrednio.

### 2. Importuj plik do FastComments

Gdy jesteś zalogowany, przejdź do <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">strony importu</a>, wybierz Disqus z rozwijanego menu i przesyłaj plik bez zmian. Import działa w tle; strona będzie się automatycznie aktualizować, aby pokazać ci na bieżąco liczbę odkrytych i zaimportowanych komentarzy. Możesz ponownie importować tak wiele razy, jak potrzebujesz.

### 3. Wymień kod Disqus na nasz

Usuń kod osadzania Disqus ze swoich stron i wklej <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">kod FastComments</a>. Tak długo, jak adresy URL twoich stron pozostaną takie same, zaimportowane komentarze będą się zgadzały z miejscem, gdzie były wcześniej.

## Na WordPressie?

Jeśli twoja strona działa na WordPressie, pomiń ręczne kroki i zainstaluj <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">wtyczkę FastComments dla WordPressa</a>. Obsługuje instalację, konfigurację i synchronizację za ciebie, a potem możesz dezaktywować Disqus.

## Przetestuj to, zanim się zdecydujesz

Nie musisz przełączać się od razu. Możesz tymczasowo uruchomić Disqus i FastComments na tej samej stronie, aby porównać wygląd i odczucia, zanim całkowicie przetniesz. Jeśli potrzebujesz pomocy w tym wszystkim, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">skontaktuj się z nami</a>, a my ci w tym pomożemy.

Nie jesteś pewien, ile będzie cię kosztować FastComments? Każdy plan jest wolny od reklam, a twoją liczbę możesz sprawdzić na <a href="https://fastcomments.com/pricing-calculator" target="_blank">kalkulatorze cenowym</a>. Jeśli jesteś w UE, możesz założyć swoje konto na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, aby twoje dane pozostały w UE.

## Podsumowanie

1. Eksportuj swoje dane z Disqus
2. Importuj je do FastComments
3. Wymień kod Disqus na <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

To wszystko. Żadnych reklam w twojej sekcji komentarzy, lżejsze strony i każdy komentarz, który już miałeś.

Na zdrowie!

{{/isPost}}

---