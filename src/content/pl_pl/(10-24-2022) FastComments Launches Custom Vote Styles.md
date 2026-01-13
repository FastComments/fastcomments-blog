---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments Wprowadza Niestandardowe Style Głosowania[/postlink]

{{#unless isPost}}
Kiedykolwiek chciałeś przełączyć się z domyślnego stylu głosowania w górę/w dół na po prostu zwykłą ikonę serca? Teraz możesz.
{{/unless}}

{{#isPost}}

### Co nowego

Poprzednio, aby dostosować pasek głosowania, należało napisać niestandardowy kod i CSS. Oznaczało to także, że jeśli chciałeś zrobić coś takiego jak włączenie anonimowego głosowania, ale wyłączenie głosów w dół, wymagało to nie tylko niestandardowego kodu, ale też żądania głosów nie mogły być weryfikowane po stronie serwera. Oznaczało to, że ludzie mogli nadal oddawać głosy przeciwko anonimowo, bezpośrednio wywołując serwer, co miało miejsce w niektórych społecznościach.

Wprowadziliśmy teraz koncepcję `voteStyle` na platformie, z pierwszym nowym stylem głosowania, którym jest ikona serca, o którą wielu prosiło.

Gdy jest zdefiniowane za pomocą interfejsu dostosowywania widżetów, dodaje to także walidację do platformy, która całkowicie zapobiega głosowaniu w dół, dzięki czemu hakerzy nie mogą już ominąć interfejsu i znieść użytkownika w niebyt, co mogłoby się zdarzyć, gdyby włączono anonimowe głosowanie. 

### Jak to użyć

Przejdź do [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) i wybierz `Heart` w sekcji `Vote Style`.

### Dokumentacja

Oficjalna dokumentacja dla tej funkcji jest [dostępna na docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Kto to dostaje

Wszyscy obecni i nowi klienci FastComments, we wszystkich poziomach, mają teraz dostęp do niestandardowych stylów głosowania. Ta funkcja jest wspierana tylko w wersji v2 widżetu komentarzy i nowszych.

### Optymalizacje

Kod dla różnych stylów głosowania nie jest dołączany do pobrania klienta widżetu, chyba że jest włączony, aby zapobiec nadmiarowości produktu.

### Patrząc w przyszłość

Mamy teraz zdolność do dodawania różnych typów głosowania i reakcji, co możemy zrobić w przyszłości.

### Na zakończenie

Jak w przypadku reszty FastComments, mamy nadzieję, że ta funkcja będzie szybka i łatwa w użyciu.

Na zdrowie!

{{/isPost}}

---