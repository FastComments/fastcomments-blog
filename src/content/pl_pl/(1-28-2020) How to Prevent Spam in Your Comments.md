---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]Jak zapobiegać spamowi w swoich komentarzach[/postlink]

Nie ma sposobu na 100% zwalczanie spamu. Ale FastComments wdraża szereg środków, aby pomóc.

{{#isPost}}

## Dokumentacja dla administratorów strony

Domyślna instalacja FastComments ma włączone zarówno filtrowanie spamu, jak i wulgaryzmów.

Te domyślne ustawienia znajdują równowagę między zapobieganiem spamowi a niezbyt dużą inwazją na większość społeczności.

[Możesz zapoznać się z przewodnikiem po moderacji](https://docs.fastcomments.com/guide-moderation.html).

## Jak to działa

Nasz filtr spamu używa [klasyfikatora Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) do identyfikacji spamu.

Jest on trenowany w miarę upływu czasu na podstawie tego, co administratorzy oznaczają jako spam i nie spam.

FastComments działa w iframe na twojej stronie. To utrudnia automatycznym botom spamowym celowanie w sekcję komentarzy. Jednakże, jeśli to zrobią
a nasz klasyfikator ustali, że ich komentarze są "spamowe", zostaną one ukryte przed twoimi użytkownikami. Jak wszystkie inne komentarze, będą również oznaczone jako
"wymagające przeglądu" na [stronie moderacji](https://fastcomments.com/auth/my-account/moderate-comments) w panelu.

Filtrowanie wulgaryzmów z kolei domyślnie nie prowadzi do ukrycia komentarzy. Po prostu zamieni "złe słowa" na gwiazdki.

## Całkowite blokowanie spamu

Domyślnie FastComments pozwala na spam, ale go ukrywa i oznacza do przeglądu.

Jeśli chcesz poinformować użytkownika, że jego komentarz został wykryty jako spam i poprosić go o jego poprawienie, można to zrobić w [Ustawieniach Moderacji](https://fastcomments.com/auth/my-account/moderate-comments/settings)
włączając ustawienie `Blokuj Spam`.

## Ukrywanie wulgarnych komentarzy

Wulgarne komentarze mogą być ukryte przez włączenie `Automatyczne wysyłanie wulgarnych komentarzy do spamu` w [Ustawieniach Moderacji](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Ustawienia

Zarówno filtrowanie wulgaryzmów, jak i spamu można indywidualnie wyłączyć na stronie [Ustawienia Moderacji](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Weryfikacja komentarza

FastComments stosuje system weryfikacji, w którym, domyślnie, [nieweryfikowane komentarze](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) są oznaczane jako takie do zobaczenia przez wszystkich użytkowników.

Pozwalając użytkownikom komentować bez pełnego zalogowania, obniża to próg wejścia do dyskusji. Etykietę nieweryfikowaną można ukryć za pomocą reguł dostosowywania.

Nieweryfikowane komentarze są wyświetlane domyślnie, ale mogą być ukryte do momentu weryfikacji za pomocą e-maila, włączając `Tylko automatycznie zatwierdzaj weryfikowane komentarze`.

Należy pamiętać, że w przypadku SSO wszystkie komentarze są zawsze weryfikowane. Jeśli użytkownik jest zalogowany w zweryfikowanej sesji, jego komentarze również zawsze będą zweryfikowane.

Nieweryfikowane komentarze mogą być również zaplanowane do usunięcia.

## Dla komentujących

Jeśli twój komentarz zostanie wykryty jako spam, od razu zobaczysz komunikat. Ma to na celu poinformowanie cię, że komentarz będzie musiał być przeglądany
zanim zostanie pokazany innym. Wykrywanie spamu nie może być w 100% dokładne, więc rozumiemy, jeśli doświadczysz pewnego frustracji. Jeśli twój komentarz jest legitny, administrator strony powinien być w stanie to rozpoznać i oznaczyć twój komentarz jako nie-spam.

{{/isPost}}

---