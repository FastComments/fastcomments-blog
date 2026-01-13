---
[category:Features]
###### [postdate]
# [postlink]Powiadomienia e-mail włączone dla subskrypcji[/postlink]

{{#unless isPost}}
FastComments teraz wysyła e-maile do użytkowników dla stron, do których są subskrybowani.
{{/unless}}

{{#isPost}}

### Co nowego

Z FastComments użytkownicy mogą kliknąć ikonę dzwonka na widżecie komentarzy, aby subskrybować tę stronę. Powiadomimy ich,
gdy na tej stronie zostaną dodane nowe komentarze lub gdy pojawi się nowy komentarz w wątku odpowiedzi, w którym biorą udział.

Robimy to od lat, jednak wcześniej nie wysyłaliśmy e-maili z tymi powiadomieniami - były one widoczne tylko w naszym panelu.

Teraz będziemy wysyłać e-maile z tymi powiadomieniami.

### Nowe rodzaje e-maili

Teraz wysyłamy dwa nowe rodzaje e-maili. Pierwszy to taki, gdy masz tylko kilka powiadomień. Po prostu wymienimy
nowe komentarze w e-mailu dla Ciebie.

Drugi typ e-maila, który otrzymasz, zawiera linki do każdej strony, na której otrzymałeś powiadomienia. Jest on wysyłany,
gdy otrzymasz wiele powiadomień.

Te powiadomienia e-mailowe są tylko dla nowych komentarzy na stronach, do których jesteś subskrybowany.

### Harmonogram powiadomień e-mailowych

E-maile powiadamiające są wysyłane co godzinę, aby zapobiec nadmiarowi e-maili. Wyjątkiem jest sytuacja, gdy
strona, o której mowa, ma ponad dziesięć tysięcy komentarzy, w takim przypadku powiadomienia dla tej strony będą wysyłane
raz dziennie.

### Dla właścicieli witryn - dostosowywanie e-maili

Nowy szablon e-maila `Nowe komentarze subskrypcyjne` wkrótce będzie dostępny do dostosowania.

### Dla programistów i uwagi

Dla użytkowników SSO, domyślnie nie będziemy wysyłać powiadomień e-mailowych. Będziesz musiał przekazać nową flagę: `optedInSubscriptionNotifications: true` w obiekcie użytkownika lub
w ładunku do widżetu komentarzy, aby włączyć te nowe powiadomienia.

### Podsumowując

Jak w przypadku wszystkich dużych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i odpowiednie wydanie tej funkcji. Daj nam znać
poniżej, jeśli odkryjesz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---