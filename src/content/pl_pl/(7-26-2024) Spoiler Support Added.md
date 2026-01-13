---
[category:Features]
###### [postdate]
# [postlink]Dodano wsparcie dla spoilerów[/postlink]

{{#unless isPost}}
Użytkownicy mogą teraz dodawać spoilery w swoich komentarzach, które są ukryte, dopóki nie zostaną na nie najechane myszą.
{{/unless}}

{{#isPost}}

### Co nowego
Użytkownicy FastComments mogą teraz kliknąć przycisk "SPOILER", aby dodać spoilery do swoich komentarzy. Mogą także pisać tagi `<spoiler>some text</spoiler>` bezpośrednio, jeśli chcą.
Należy pamiętać, że opcja paska narzędzi do spoilerów jest domyślnie wyłączona.

### Włączanie spoilerów

W dostosowywaniu widgetu można po prostu włączyć opcję `Spoilers` i kliknąć zapisz. Dokumentacja jest [tutaj](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-spoilers).
Włączyliśmy je dla tego posta na blogu, aby zademonstrować tę funkcję.

### Dla programistów i pułapki

Domyślny styl spoilerów obsługuje jasny i ciemny tryb. Jeśli piszesz niestandardowy CSS dla zamaskowanego tekstu, pamiętaj, aby uwzględnić
ciemny tryb, jeśli twoja strona to obsługuje.

### Na zakończenie

Jak w przypadku wszystkich dużych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wprowadzenie tej funkcji. Daj nam znać
poniżej, jeśli odkryjesz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---