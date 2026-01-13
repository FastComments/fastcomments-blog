---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]Obsługa uwierzytelniania hasłem jest już dostępna[/postlink]

{{#unless isPost}}
W ramach tej aktualizacji FastComments teraz obsługuje tradycyjne uwierzytelnianie oparte na haśle, oprócz istniejącego systemu opartego na e-mailach.
{{/unless}}

{{#isPost}}

### Co nowego

Od momentu uruchomienia FastComments uwierzytelnialiśmy za pomocą magicznych linków e-mailowych. Było to możliwe, ponieważ mogliśmy skonsolidować nasze mechanizmy logowania w ten sam system, który był używany, gdy użytkownik zostawia swój pierwszy komentarz i weryfikuje/loguje się za pomocą linku opartego na e-mailu. Jednak nie wszystkie serwery e-mailowe są takie same, a czasami otrzymanie linku mogło zająć kilka minut. To było bardzo frustrujące dla niektórych naszych użytkowników.

Od końca 2023 roku FastComments obsługuje teraz uwierzytelnianie za pomocą haseł! Na stronie logowania znajdują się teraz dwie zakładki - jedna do logowania przez e-mail, a druga do logowania przez hasło.

### Jak ustawić hasło

Możesz ustawić hasło, przechodząc do [Moje Konto -> Szczegóły Konta -> Zmień Hasło](https://fastcomments.com/auth/my-account/edit-details/change-password).

Wystarczy zażądać linku resetującego. Link zostanie wysłany na Twój adres e-mail, a po kliknięciu w niego będziesz mógł ustawić nowe hasło. Link działa tylko raz i wygasa, jeśli nie jest użyty.

### Przechowywanie haseł i bezpieczeństwo

Hasła nie są przechowywane. Zamiast tego hasła są haszowane z użyciem 11-rundowej soli przy użyciu bcrypt. Współbieżność w systemie opartym na hasłach jest ograniczona i monitorowana, aby zapobiegać różnym rodzajom ataków związanych z hasłami.

### Przyszłość

W przyszłości planujemy również wsparcie dla 2FA.

### Podsumowanie

Jak w przypadku wszystkich ważnych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wydanie tej funkcji. Daj nam znać poniżej, jeśli napotkasz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---