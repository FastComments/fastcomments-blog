---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Aktualizacja częstotliwości powiadomień e-mail[/postlink]

{{#unless isPost}}
Użytkownicy mogą teraz kontrolować, jak często otrzymują powiadomienia e-mail o nowych komentarzach i odpowiedziach — co minutę, w formie godzinnego podsumowania lub codziennego podsumowania — za pomocą jednej wspólnej ustawienia, plus nadpisania dla poszczególnych subskrypcji.
{{/unless}}

{{#isPost}}

### Nowości

Dodaliśmy ustawienie **Częstotliwość powiadomień o nowych komentarzach**, które kontroluje, jak często otrzymujesz powiadomienia e-mail zarówno o odpowiedziach, jak i o nowych komentarzach. Trzy opcje to:

- **Co minutę** - otrzymuj e-mail, gdy tylko pojawią się nowe komentarze (sprawdzane co minutę).
- **Godzinne podsumowanie** - otrzymuj zbiorcze podsumowanie nowych komentarzy raz na godzinę.
- **Codzienne podsumowanie** - otrzymuj zbiorcze podsumowanie nowych komentarzy raz dziennie.

To ustawienie jest dostępne zarówno dla administratorów najemców, jak i komentatorów i dotyczy wszystkich e-maili z powiadomieniami o komentarzach. Należy pamiętać, że powiadomienia @mention są zawsze wysyłane natychmiast, niezależnie od tego ustawienia.

Możesz również nadpisać częstotliwość na poziomie poszczególnych subskrypcji w tabeli Subskrypcje, aby uzyskać bardziej szczegółową kontrolę nad poszczególnymi stronami.

### Jak to skonfigurować

1. Przejdź do swoich [Ustawień powiadomień](https://fastcomments.com/auth/my-account/edit-notifications).
2. Użyj rozwijanego menu **Częstotliwość powiadomień o nowych komentarzach**, aby ustawić preferowaną częstotliwość.
3. Opcjonalnie, nadpisz częstotliwość dla poszczególnych subskrypcji w tabeli Subskrypcje.
4. Kliknij **Zapisz zmiany**.

Domyślnie ustawienie to **Co minutę**, co odpowiada wcześniejszemu zachowaniu.

### Wsparcie API

Częstotliwość powiadomień jest również dostępna przez API. Ustawienie na poziomie użytkownika to pole <div class="code">notificationFrequency</div>, a nadpisania dla poszczególnych subskrypcji można ustawić za pomocą pola <div class="code">notificationFrequency</div> subskrypcji. Zobacz [dokumentację API](https://docs.fastcomments.com/guide-api.html) w celu uzyskania szczegółowych informacji.

### Podsumowując

Daje to użytkownikom kontrolę nad swoją skrzynką odbiorczą bez konieczności całkowitego wypisywania się ze stron. Jedno ustawienie teraz obejmuje zarówno powiadomienia o odpowiedziach, jak i o nowych komentarzach, co ułatwia zarządzanie.

Daj nam znać poniżej, jeśli masz jakieś uwagi!

Pozdrawiamy!

{{/isPost}}

---