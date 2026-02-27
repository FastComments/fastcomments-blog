---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Aktualizacja częstotliwości powiadomień e-mail[/postlink]

{{#unless isPost}}
Użytkownicy mogą teraz kontrolować, jak często otrzymują powiadomienia e-mail o nowych komentarzach i odpowiedziach, co minutę, w formie podsumowania godzinnego lub codziennego, z osobnymi ustawieniami dla powiadomień o odpowiedziach i administracyjnych, oraz z możliwością nadpisania dla każdej subskrypcji.
{{/unless}}

{{#isPost}}

### Co nowego

Dodaliśmy ustawienia **Częstotliwość powiadomień o odpowiedziach** i **Częstotliwość powiadomień administracyjnych**, które kontrolują, jak często otrzymujesz powiadomienia e-mail o odpowiedziach i nowych komentarzach, odpowiednio. Trzy dostępne opcje dla każdej z kategorii to:

- **Co minutę** - otrzymuj e-mail natychmiast po pojawieniu się nowych komentarzy (sprawdzane co minutę).
- **Podsumowanie godzinne** - otrzymuj podsumowanie nowych komentarzy raz na godzinę.
- **Podsumowanie dzienne** - otrzymuj podsumowanie nowych komentarzy raz na dzień.

Częstotliwość powiadomień o odpowiedziach jest dostępna dla wszystkich użytkowników i domyślnie ustawiona na **Co minutę**. Częstotliwość powiadomień administracyjnych jest dostępna dla administratorów strony i domyślnie ustawiona na **Podsumowanie godzinne**. Zauważ, że powiadomienia o @wzmiankach są zawsze wysyłane natychmiast, niezależnie od tych ustawień.

Możesz również nadpisać częstotliwość dla poszczególnych subskrypcji w tabeli Subskrypcje, aby uzyskać precyzyjną kontrolę nad poszczególnymi stronami.

### Jak to skonfigurować

1. Przejdź do swoich [Ustawień powiadomień](https://fastcomments.com/auth/my-account/edit-notifications).
2. Skorzystaj z rozwijanych menu **Częstotliwość powiadomień o odpowiedziach** i **Częstotliwość powiadomień administracyjnych**, aby ustawić preferowane częstotliwości.
3. Opcjonalnie, nadpisz częstotliwość dla poszczególnych subskrypcji w tabeli Subskrypcje.
4. Kliknij **Zapisz zmiany**.

### Wsparcie API

Pole `notificationFrequency` w obiekcie użytkownika kontroluje częstotliwość powiadomień o odpowiedziach, a pole `adminNotificationFrequency` kontroluje częstotliwość powiadomień administracyjnych. Nadpisania dla poszczególnych subskrypcji można ustawić za pomocą pola `notificationFrequency` subskrypcji. Zobacz [dokumentację API](https://docs.fastcomments.com/guide-api.html) po szczegóły.

### Podsumowując

Daje to użytkownikom kontrolę nad swoją skrzynką odbiorczą, bez potrzeby całkowitego wypisywania się z stron.

Daj nam znać poniżej, jeśli masz jakieś uwagi!

Na zdrowie!

{{/isPost}}

---