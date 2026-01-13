---
[category:Moderation]
[category:Features]

###### [postdate]
# [postlink]Aktualizacja wyszukiwania komentarzy moderacji[/postlink]

{{#unless isPost}}
FastComments teraz umożliwia wyszukiwanie według strony i użytkownika na stronie moderacji komentarzy.
{{/unless}}

{{#isPost}}

### Co nowego

Wcześniej FastComments pozwalał na wyszukiwanie według fraz lub dokładnego dopasowania ciągu znaków na stronie moderacji komentarzy.

Teraz możesz wyszukiwać komentarze na następujące sposoby:

- Wyszukiwanie z użyciem nieprecyzyjnych słów: **cats love**
- Dokładne dopasowanie frazy: **"I love cats."**
- **_Nowość!_** Według tytułu strony: **page:"Page Title"**
  - Obsługuje autouzupełnianie.
  - Pokazuje liczbę komentarzy dla każdej strony w sugestiach autouzupełniania.
- **_Nowość!_** Według URL strony: **page:"https://example.com/some-page"**
  - Obsługuje autouzupełnianie.
  - Pokazuje liczbę komentarzy dla każdej strony w sugestiach autouzupełniania.
- **_Nowość!_** Według użytkownika: **user:"Bob"**
  - Obsługuje autouzupełnianie.

Możesz dzielić się wynikami wyszukiwania z innymi moderatorami lub administratorami, udostępniając adres URL strony z strony moderacji. Wartość pola wyszukiwania
zostanie uwzględniona w URL w twojej przeglądarce po naciśnięciu "Go".

### Jak to uzyskać

Ta funkcja została wdrożona dla wszystkich klientów!

### Dokumentacja

Strona dokumentacji została zaktualizowana, a dedykowana dokumentacja dla tej funkcji [będzie utrzymywana tutaj](https://docs.fastcomments.com/guide-moderation.html#search).

### Na zakończenie

Jak w przypadku wszystkich dużych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i prawidłowe wdrożenie tej funkcji. Daj nam znać
poniżej, jeśli napotkasz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---