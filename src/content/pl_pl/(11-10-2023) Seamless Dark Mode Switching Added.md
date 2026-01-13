---
[category:UI & Customization]

###### [postdate]
# [postlink]Dodano bezproblemowe przełączanie trybu ciemnego[/postlink]

{{#unless isPost}}
FastComments zawsze wspierał tryb ciemny. Jednak wcześniej wymagał przeładowania widgetu komentarzy, aby przełączyć się na tryb ciemny. To zostało naprawione.
{{/unless}}

{{#isPost}}

### Co nowego

FastComments zawsze wspierał tryb ciemny. Jednak wcześniej wymagał przeładowania widgetu komentarzy, aby przełączyć się na tryb ciemny.

Oznacza to, że jeśli strona używała trybu ciemnego lub pozwalała użytkownikom przełączać się między trybem jasnym a ciemnym, całkowicie usuwaliśmy
widget komentarzy z przeglądarki i przeładowywaliśmy go. Zrobiono to z powodów technicznych, aby uprościć produkt
przy początkowym uruchomieniu, ponieważ stan musi być komunikowany w obie strony między stroną nadrzędną a iframe widgetu.

W świetle zakończenia strasznego sezonu - przełączanie trybu ciemnego zostało ulepszone. Widget komentarzy teraz wspiera bezproblemowe przejścia między trybem
jasnym a ciemnym. Wciąż jednak wymaga przekazania flagi `hasDarkBackground`, gdy jest to stosowne.

### Dla programistów i pułapki

Aby poinformować widget komentarzy, że Twoja strona jest w trybie ciemnym - lub ma zastosowane ciemne tło - musisz przekazać
flagę `hasDarkBackground`. To się nie zmienia. Jednak teraz, gdy wywołasz `instance.update(newConfig)` (lub zmienisz stan
w jednej z naszych bibliotek, takich jak React, Svelte itp.), wykryjemy, czy jedynym zmienionym parametrem jest `hasDarkBackground`, a jeśli tak,
łagodnie zaktualizujemy widget komentarzy. Widget asynchronicznie załaduje rozszerzenie trybu ciemnego w tle i zaktualizuje swoje stylizacje,
jeśli to konieczne.

Jedna główna pułapka polega na tym, że gdy przekazujesz `newConfig` - musi to być całkowicie nowy obiekt, aby ta funkcja działała.

### Podsumowanie

Jak w przypadku wszystkich dużych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i odpowiednie wydanie tej funkcji. Daj nam znać
poniżej, jeśli odkryjesz jakiekolwiek problemy.

Pozdrawiamy!

{{/isPost}}

---