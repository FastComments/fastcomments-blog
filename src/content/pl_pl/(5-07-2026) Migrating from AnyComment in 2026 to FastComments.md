---
[category:Migration]
###### [postdate]
# [postlink]Migracja z AnyComment w 2026 roku do FastComments[/postlink]

{{#unless isPost}}
Przeczytaj ten post, aby zobaczyć, jak w pełni migrować z AnyComment do FastComments w 2026 roku.
{{/unless}}

{{#isPost}}

Otrzymaliśmy wiele zapytań od klientów dotyczących migracji z AnyComment w 2026 roku.

## AnyComment działa wewnątrz WordPressa

AnyComment jest wtyczką WordPress. W przeciwieństwie do samodzielnych platform takich jak Disqus czy Hyvor Talk, nie obsługuje własnego backendu - Twoje komentarze są przechowywane bezpośrednio w bazie danych WordPressa, w tej samej tabeli `wp_comments`, której używa rdzeń WordPressa. To świetna wiadomość dla migracji: nie ma osobnego eksportu AnyComment, który trzeba by obsługiwać, ani serwera zewnętrznego, z którym trzeba by się skoordynować. Twoje dane są już na Twoim własnym serwerze.

Oznacza to, że standardowy proces migracji FastComments w WordPressie obsługuje AnyComment bez dodatkowych kroków.

## Opcja 1: Wtyczka FastComments WordPress (Zalecana)

Najłatwiejszym sposobem jest zainstalowanie <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">wtyczki FastComments WordPress</a>. Wtyczka przeprowadza Cię przez proces łączenia Twojej instalacji WordPress z FastComments, a także automatycznie kopiuje Twoje istniejące dane komentarzy. Nie ma nic do pobrania ani przesłania ręcznie. Dane są kopiowane z Twojej bazy danych WordPress na nasze serwery, więc po zakończeniu migracji odciąży to także Twój serwer.

Większość migracji kończy się w ciągu kilku minut.

Po przeniesieniu danych dezaktywuj AnyComment. Komentarze będą nadal przetwarzane przez FastComments, a wtyczka synchronizuje Twoją bazę danych WordPress jako kopię zapasową (jeśli włączysz tę funkcję), więc zawsze posiadasz swoje dane.

## Opcja 2: Eksport XML WordPress

Jeśli wolisz przeprowadzić migrację ręcznie, lub już przeniosłeś się z WordPressa i masz tylko kopię zapasową XML, skorzystaj z wbudowanego eksportu WordPress.

1. W swoim panelu administracyjnym WordPress przejdź do **Narzędzia -> Eksportuj** i pobierz plik XML.
2. Zaloguj się do swojego panelu FastComments i przejdź <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tutaj, aby zaimportować plik</a>.
3. Wybierz **WordPress (.xml)** z rozwijanej listy i prześlij swój plik.

Ponieważ AnyComment zapisuje do `wp_comments`, każdy wątek AnyComment jest w tym XML obok innych komentarzy WordPress. Importer automatycznie dopasowuje je do odpowiedniego postu.

## Zastępowanie widgetu AnyComment

Jeśli skorzystałeś z Opcji 1, wtyczka FastComments WordPress już zastępuje AnyComment na Twojej stronie - po prostu dezaktywuj AnyComment po zakończeniu migracji.

Jeśli skorzystałeś z Opcji 2 i zachowujesz swoją instalację WordPress, zainstaluj wtyczkę FastComments, aby obsłużyć renderowanie widgetów i bieżącą synchronizację. Jeśli całkowicie przeprowadzasz się z WordPressa, umieść nasz <a href="https://fastcomments.com/install-wizard" target="_blank">fragment instalacyjny</a> na swojej nowej stronie - wspieramy wiele frameworków front-end, które <a href="https://fastcomments.com/install-wizard" target="_blank">możesz znaleźć tutaj</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możemy w tym pomóc</a>.

## UE

Jeśli jesteś w UE, prawdopodobnie będziesz chciał założyć swoje konto na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, aby Twoje dane klientów pozostały w UE.

## Podsumowanie

1. Zainstaluj wtyczkę FastComments WordPress i pozwól jej skopiować Twoje dane, **lub** wyeksportuj z WordPress jako XML i prześlij to na stronie importu.
2. Dezaktywuj AnyComment.
3. Jeśli również opuszczasz WordPress, wymień kod widgetu na swojej nowej stronie.

{{/isPost}}

---