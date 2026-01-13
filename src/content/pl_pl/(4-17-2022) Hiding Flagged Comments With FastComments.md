---
[category:Moderation]

###### [postdate]

# [postlink]Ukrywanie oznaczonych komentarzy z FastComments[/postlink]

{{#unless isPost}}Oznaczanie zostało dodane do FastComments. Dodatkowo, komentarze mogą być ukrywane w zależności od liczby razy, kiedy zostały oznaczone.{{/unless}}

{{#isPost}}

### Co nowego

Użytkownicy mogą teraz oznaczać komentarze w wątkach komentarzy hostowanych przez FastComments. Moderatorzy mogą filtrować komentarze oznaczone, a także zobaczyć, ile razy zostały one oznaczone.

Platforma może być także skonfigurowana do automatycznego ukrywania komentarzy, gdy zostaną oznaczone określoną liczbę razy.

### Perspektywa komentującego

Kiedy użytkownik ma ważną sesję, może oznaczać komentarze za pomocą menu edycji komentarzy.

To jest kompatybilne z następującymi typami sesji:

- Sesje anonimowe
- Sesja użytkownika FastComments.com (korzystająca z ciasteczek zewnętrznych)
- Bezpieczne SSO
- Proste SSO

Oznaczone komentarze będą nadal wyświetlane, dopóki nie zostanie osiągnięty skonfigurowany próg oznaczeń.

### Dla moderatorów

Moderatorzy mogą zobaczyć oznaczone komentarze korzystając z filtru `Oznaczone`, który jest również dostępny bezpośrednio [tutaj](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

Dodatkowo, liczba razy, kiedy komentarz został oznaczony, jest widoczna dla moderatorów i administratorów.

Uwaga:

- Resetowanie liczby oznaczeń dla komentarza, który został `Niezatwierdzony` za pomocą `Progu Niezatwierdzenia`, spowoduje `Ponowne zatwierdzenie` komentarza.
- `Ponowne zatwierdzenie` `Oznaczonego` komentarza **zresetuje liczbę oznaczeń**.
- To jest funkcja stworzona dla wygody.

### Konfiguracja

Konfigurowanie automatycznego ukrywania oznaczonych komentarzy można zrobić na stronie [Ustawienia moderacji komentarzy](https://fastcomments.com/auth/my-account/moderate-comments/settings).

### Istniejący klienci

Zakończyliśmy wdrożenie tej funkcji dla wszystkich istniejących klientów we wszystkich planach. Automatyczne ukrywanie niezatwierdzonych komentarzy nie jest włączone dla nowych ani istniejących klientów.

### Na koniec

Mamy nadzieję, że znajdziesz ten nowy zestaw funkcji użytecznym i łatwym w obsłudze. 

Na zdrowie!

{{/isPost}}

---