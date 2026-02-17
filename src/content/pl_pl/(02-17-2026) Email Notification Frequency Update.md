---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Aktualizacja częstotliwości powiadomień e-mail[/postlink]

{{#unless isPost}}
Użytkownicy mogą teraz kontrolować, jak często otrzymują powiadomienia e-mail o nowych komentarzach i odpowiedziach, co minutę, w formie podsumowania godzinnego lub dziennego, za pomocą jednego wspólnego ustawienia, plus indywidualne nadpisania dla subskrypcji.
{{/unless}}

{{#isPost}}

### Co nowego

Dodaliśmy ustawienie **Częstotliwość powiadomień o nowych komentarzach**, które kontroluje, jak często otrzymujesz powiadomienia e-mail o powiadomieniach o odpowiedziach oraz powiadomieniach od najemców (nowy komentarz). Trzy opcje to:

- **Co minutę** - otrzymuj e-maila, jak tylko pojawią się nowe komentarze (sprawdzane co minutę).
- **Podsumowanie godzinne** - otrzymuj zebrane podsumowanie nowych komentarzy raz na godzinę.
- **Podsumowanie dzienne** - otrzymuj zebrane podsumowanie nowych komentarzy raz na dzień.

To ustawienie jest dostępne zarówno dla administratorów najemców, jak i komentatorów, i ma zastosowanie do wszystkich e-maili powiadamiających o komentarzach. Należy pamiętać, że powiadomienia o @wzmiankach są zawsze wysyłane natychmiast, niezależnie od tego ustawienia.

Możesz również nadpisać częstotliwość na poziomie poszczególnych subskrypcji w tabeli Subskrypcje, aby uzyskać precyzyjną kontrolę nad poszczególnymi stronami.

### Jak to skonfigurować

1. Przejdź do ustawień [Powiadomień](https://fastcomments.com/auth/my-account/edit-notifications).
2. Użyj rozwijanego menu **Częstotliwość powiadomień o nowych komentarzach**, aby ustawić preferowaną częstotliwość.
3. Opcjonalnie, nadpisz częstotliwość dla poszczególnych subskrypcji w tabeli Subskrypcje.
4. Kliknij **Zapisz zmiany**.

Domyślna wartość to **Co minutę**, co odpowiada wcześniejszemu zachowaniu.

### Wsparcie API

Częstotliwość powiadomień jest również dostępna poprzez API. Ustawienie na poziomie użytkownika to pole `notificationFrequency`, a nadpisania dla subskrypcji można ustawić przez pole `notificationFrequency` subskrypcji. Zobacz [dokumentację API](https://docs.fastcomments.com/guide-api.html) po szczegóły.

### Wnioski

To daje użytkownikom kontrolę nad swoją skrzynką odbiorczą bez konieczności całkowitego wypisywania się z stron. Jedno ustawienie teraz obejmuje zarówno powiadomienia o odpowiedziach, jak i powiadomienia od najemców, co ułatwia zarządzanie.

Daj nam znać poniżej, jeśli masz jakieś uwagi!

Na zdrowie!

{{/isPost}}

---