---
[category:Moderation]

###### [postdate]
# [postlink]Wątki komentarzy można teraz łatwo zamykać[/postlink]

{{#unless isPost}}
FastComments zawsze pozwalał na oznaczenie wątków komentarzy jako tylko do odczytu za pomocą kodu lub reguł dostosowywania, ale teraz można to łatwo
zrobić z samego widżetu komentarzy.
{{/unless}}

{{#isPost}}

### Co nowego

FastComments zawsze pozwalał na oznaczenie wątków komentarzy jako tylko do odczytu za pomocą kodu lub reguł dostosowywania, ale teraz można to łatwo
zrobić z samego widżetu komentarzy.

W górnym menu z trzema kropkami w obszarze komentarzy, administratorzy lub każda osoba z uprawnieniami moderacyjnymi będą mieli teraz możliwość
**zamknięcia** wątku komentarzy, a potencjalnie **otwarcia** go ponownie w dowolnym momencie.

To różni się nieco od ustawiania wątków jako `readonly`, co mogłeś robić do tej pory. Ustawienie wątku jako `readonly`
oznacza, że absolutnie nic nie może się zmienić na stronie - brak nowych komentarzy, brak głosów, brak edytowania komentarzy, brak usuwania komentarzy.

Zamknięcie wątku komentarzy jest nieco inne - komentarze nie mogą być dodawane, ale użytkownicy mogą nadal usuwać swoje komentarze, jeśli chcą.
Dodatkowo, głosy mogą być nadal oddawane lub usuwane.

### Na żywo

Jak w całym FastComments, zamykanie i ponowne otwieranie wątków komentarzy działa na żywo i natychmiast wpływa na wszystkich użytkowników przeglądających ten wątek.

### Jak to uzyskać

Ta funkcja została udostępniona wszystkim klientom!

### Dostosowania tekstu

Nowe tłumaczenie, `THREAD_CLOSED`, z domyślną wartością w języku angielskim `This comment thread has been closed for new comments.` zostało dodane.

Ten tekst zawsze można dostosować za pomocą interfejsu dostosowywania widżetów.

### Na zakończenie

Jak w przypadku wszystkich większych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i odpowiednie wydanie tej funkcji. Daj nam znać
poniżej, jeśli napotkasz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---