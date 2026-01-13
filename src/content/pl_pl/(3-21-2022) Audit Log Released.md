---
[category:Security]

###### [postdate]
# [postlink]Wydanie Dziennika Audytów[/postlink]

{{#unless isPost}}FastComments teraz udostępnia szczegółowy dziennik wszystkich modyfikacji dokonanych za pośrednictwem platformy.{{/unless}}

{{#isPost}}

### Co nowego

Od marca FastComments teraz obejmuje szczegółowy audyt w planie Pro oraz dla wszystkich istniejących klientów korporacyjnych.

Wszystkie działania administracyjne, niezależnie od tego, czy to dostęp do danych, edytowanie komentarza, czy zbanowanie użytkownika, są śledzone i indeksowane w dzienniku audytów.

### Jak to używać

Dziennik audytów można uzyskać, przechodząc do `Zarządzaj Danymi`, a następnie `Dzienniki Audytów`. Bezpośredni link znajduje się [tutaj](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Na początek zobaczysz stronę podobną do poniższej:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Dziennik Audytów" />
</div>

Stąd możesz przeszukiwać według nazwy użytkownika, adresu IP, rodzaju akcji lub zasobu.

Na przykład, filtrując według zasobu:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Wybór Zasobu w Dzienniku Audytów" />
</div>

Możemy również zgłębić szczegóły wpisu w dzienniku audytów i zobaczyć związany obiekt, który został zmieniony.

Na przykład, możemy przejść do wpisu dotyczącego zbanowania użytkownika:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Szczegóły Wpisu w Dzienniku Audytów" />
</div>

Tutaj możemy zobaczyć, kto zbanował użytkownika (użytkownik o nazwie `winrid`). Możemy zauważyć, że jest to ban na stałe, a także mamy identyfikator użytkownika i e-mail zbanowanego, wraz z tekstem,
za który został zbanowany.

Możemy zobaczyć IP, które utworzyło ban, ale oryginalny adres IP komentującego jest celowo pomijany dla ich prywatności.

Aby zobaczyć wszystkie wydarzenia od `winrid`, wystarczy kliknąć ikonę filtra po prawej stronie, obok ich nazwy użytkownika.

### Ograniczenie Dostępu

Dane w dzienniku audytów mogą być dostępne tylko dla użytkowników z uprawnieniami `Zarządzaj Danymi`.

### Retencja

Wszystkie wpisy w dzienniku audytów są przechowywane przez dwa lata. Jednak dziennik audytów jest usuwany, gdy Twoje konto zostanie usunięte.

### Dostęp do API

[Dokumentacja dla API Dziennika Audytów jest tutaj.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Możesz zauważyć, że dziennik audytów można 
sortować i paginować na kilka różnych sposobów w zależności od Twojego przypadku użycia.

### Istniejący Klienci

Jeśli masz plan Pro lub równoważny, zauważysz, że dziennik audytów został automatycznie włączony! Jeśli chcesz uzyskać dostęp, skontaktuj się ze swoim przedstawicielem wsparcia.

### Co Ominięto

Jedynym typem zmian, które są pomijane, są same komentarze i ich głosy. Dzieje się tak, ponieważ stwierdziliśmy, że nasi klienci są głównie zainteresowani stroną administracyjną podczas audytu, a niekoniecznie pragną audytować to, co ludzie komentują. Tego typu działania również wprowadzają znaczny hałas do dziennika.

Jednak jeśli jest to wymóg, skontaktuj się, a możemy omówić włączenie tego dla Ciebie.

### Podsumowując

Mamy nadzieję, że ten obszar naszej oferty będzie przydatny, interfejs użytkownika łatwy w obsłudze, a API szybkie. 

Na zdrowie!

{{/isPost}}