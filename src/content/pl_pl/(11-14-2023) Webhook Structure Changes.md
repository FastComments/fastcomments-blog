---
[category:API & Development]

###### [postdate]
# [postlink]Zmiany w strukturze webhooków[/postlink]

{{#unless isPost}}
Wprowadziliśmy pewne zmiany dotyczące zachowania struktur webhooków.
{{/unless}}

{{#isPost}}

### Co nowego

Przed 14 listopada 2023 roku wprowadziliśmy następujące zmiany w webhookach:

#### Aktualizacja Webhooków

**Wcześniej**, aktualizacje zawierały najnowszą wersję komentarza. Jeśli dwóch użytkowników szybko oddało głosy na komentarz, spowodowało to 
wywołanie dwóch webhooków. Jednak możliwe było, że pierwszy zdarzenie webhooka zawierało **najnowszą wersję**, co prowadziło do dwóch
identycznych zdarzeń webhooków:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**Od 14 listopada** każde zdarzenie webhooka jest idempotentne i zawiera obiekt komentarza w momencie zmiany. W powyższym przykładzie teraz otrzymasz dwa zdarzenia:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Usuwanie Webhooków

**Wcześniej**, webhooki usuwania zawierały tylko id komentarza. Był to obiekt jak `{ id: string }`.

**Od 14 listopada**, webhooki usuwania będą zawierać **cały** obiekt komentarza w momencie usunięcia.

### Podsumowując

Jak w przypadku wszystkich głównych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wydanie tej funkcji. Daj nam znać
poniżej, jeśli odkryjesz jakieś problemy.

Na zdrowie!

{{/isPost}}

---