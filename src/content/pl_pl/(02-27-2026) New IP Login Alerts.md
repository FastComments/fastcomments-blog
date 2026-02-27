---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Nowe powiadomienia o logowaniu z nieznanego adresu IP[/postlink]

{{#unless isPost}}
FastComments teraz wysyła e-mail z powiadomieniem o bezpieczeństwie, gdy wykryjemy logowanie z nowego adresu IP, w tym przybliżoną lokalizację, aby pomóc użytkownikom wykryć nieautoryzowany dostęp.
{{/unless}}

{{#isPost}}

### Co nowego

FastComments teraz automatycznie wysyła e-mail z powiadomieniem o bezpieczeństwie, gdy wykryjemy logowanie do twojego konta z adresu IP, którego wcześniej nie widzieliśmy. E-mail zawiera:

- **przybliżoną lokalizację** (miasto i kraj) logowania.
- **adres IP** użyty.
- **czas** logowania.
- Bezpośredni link do **zmiany hasła**, jeśli to logowanie nie było z tobą związane.

Dotyczy to wszystkich metod logowania: logowanie hasłem, magiczne linki i procesy uwierzytelniania dwuskładnikowego.

### Prywatność

Nie przechowujemy twojego surowego adresu IP. Przechowujemy jedynie zanonimizowaną formę do celów porównawczych w zakresie bezpieczeństwa. Przybliżona lokalizacja jest
określana w momencie logowania i nie jest przechowywana.

**Twój IP nie jest udostępniany osobom trzecim** w celu określenia lokalizacji. Prowadzimy własną usługę, która wyodrębnia przybliżoną lokalizację
z (aktualizowanej co tydzień) kopii bazy danych MaxMind.

### Kiedy wysyłane są powiadomienia

Powiadomienie jest wysyłane, gdy **wszystkie** z poniższych warunków są spełnione:

- Logowanie było udane.
- To nie jest pierwsze logowanie użytkownika.
- Adres IP nie był widziany w poprzednim udanym logowaniu dla tego konta.

Oznacza to, że nie otrzymasz powiadomienia przy swoim pierwszym logowaniu i nie będziesz otrzymywać powtórnych powiadomień dla tego samego adresu IP.

### Podsumowując

To kolejny krok w kierunku zabezpieczenia twojego konta. Jeśli otrzymasz powiadomienie, którego nie rozpoznajesz, zalecamy natychmiastową zmianę
hasła.

Daj nam znać poniżej, jeśli masz jakieś uwagi!

Na zdrowie!

{{/isPost}}