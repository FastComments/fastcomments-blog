---
[category:Features]

###### [postdate]

# [postlink]Profile, Odznaki i Bezpośrednie Wiadomości[/postlink]

{{#unless isPost}}W tej wersji dodaliśmy wiele funkcji, które nagradzają społeczności korzystające z FastComments i pomagają im w komunikacji.{{/unless}}

{{#isPost}}

### Co nowego
FastComments oficjalnie wprowadziło Profile Użytkowników i powiązane funkcje.

### Profile Użytkowników

Profil użytkownika składa się z jego imienia, statusu online, ostatniej aktywności oraz miejsca na komentarz na swoim profilu.

Wyświetlane są również jego odznaki oraz postęp w zdobywaniu odznak.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="Profil Użytkownika FastComments" title="Profil Użytkownika FastComments"></video>
</div>

Użytkownicy mogą zobaczyć swój własny profil, klikając na swój awatar w wątku komentarzy lub [przechodząc do swojej strony konta](https://fastcomments.com/auth/my-account).

Dodatkowo, możesz wysłać bezpośrednią wiadomość do użytkownika z jego profilu.

### Modal Profilu Użytkownika
Gdy klikniesz na awatar użytkownika, otworzy się Modal Profilu. Został on również dodany dla moderatorów do strony Moderacji Komentarzy.

### Nagradzanie Użytkowników Odznakami

Odznaki to kolejny niedawny dodatek do FastComments, który pozwala nagradzać użytkowników twojej społeczności. Tworzenie odznaki jest proste:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Stwórz Odznakę" title="Stwórz Odznakę" />
</div>

Odznaki mogą być przyznawane na podstawie następujących warunków:

- Liczba Zostawionych Komentarzy
- Liczba Zdobytch Głosów
- Liczba Odpowiedzi Otrzymanych
- Liczba Przypiętych Komentarzy
- Weteran (czas od pierwszego komentarza)
- Komentowanie Późno w Nocy
- Szybki Czas Odpowiedzi
- Odpowiedź na Konkretna Stronę
- Moderatorzy - Liczba Usuniętych Komentarzy
- Moderatorzy - Liczba Zatwierdzonych Komentarzy
- Moderatorzy - Liczba Odrzuconych Komentarzy
- Moderatorzy - Liczba Przeglądanych Komentarzy
- Moderatorzy - Liczba Oznaczonych jako Spam
- Moderatorzy - Liczba Oznaczonych jako Nie Spam

Jak widać, jest wiele sytuacji, w których możemy nagradzać użytkowników.

Możemy zdefiniować wiele *poziomów* odznak. Na przykład, możemy dodać odznaki `Liczba Komentarzy` z progami 10, 100 i 1000 zostawionych komentarzy. W miarę jak użytkownicy
interagują w twojej społeczności, zdobyte przez nich odznaki będą **nakładać się** w czasie.

Nie zapominajmy o *Moderatorach*. W wielu społecznościach to niewdzięczna praca. Daj swoim moderatorom coś, czym będą mogli się pochwalić, konfigurując dla nich odznaki Moderatorów.

Obsługujemy również kilka unikalnych przypadków, takich jak odznaki `Sowa Nocna` i `Szybki Czas Odpowiedzi`, aby docenić członków, którzy są aktywni późno w nocy lub odpowiadają
szybko. `Szybki Czas Odpowiedzi` działa najlepiej, gdy wykorzystywane są funkcje na żywo FastComments.

Gdy nowe odznaki są tworzone, automatycznie będą dodawane do istniejących członków twojej społeczności, którzy się kwalifikują.

### Bezpośrednie Wiadomości

Klienci pytali o możliwość wysyłania Bezpośrednich Wiadomości do użytkowników od momentu uruchomienia FastComments. Po dwóch latach z radością ogłaszamy tę funkcję i dziękujemy
tym, którzy cierpliwie czekali.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="Bezpośrednie Wiadomości FastComments" title="Bezpośrednie Wiadomości FastComments"></video>
</div>

Bezpośrednie Wiadomości pozwalają członkom społeczności na prywatne wysyłanie wiadomości do siebie nawzajem, ale służą również jako przydatne narzędzie dla Moderatorów i Administratorów do kontaktowania się z komentatorami.

Jak w większości FastComments, wszystkie funkcje Bezpośrednich Wiadomości są na żywo.

#### Asynchroniczne Bezpośrednie Wiadomości

Gdy wysyłasz wiadomość do użytkownika, może on być offline. W takim przypadku wyślemy użytkownikowi e-mail powiadamiający go o nowej wiadomości.

#### Bezpośrednie Wiadomości przez E-mail

Gdy użytkownik otrzyma wiadomość przez e-mail, ma możliwość odpowiedzi na tę wiadomość.

<div class="text-center">
    <img src="/images/email-dm.png" alt="Email DM" title="Email DM" />
</div>

Gdy to zrobi, jego odpowiedź pojawi się **na żywo** dla drugiego użytkownika w zakładce Wiadomości na jego profilu.

### Bezpieczne SSO

Profile Użytkowników FastComments są w pełni kompatybilne z istniejącymi instalacjami Bezpiecznego SSO.

Ustawienia prywatności użytkownika mogą być również konfigurowane za pomocą flagi `isProfileActivityPrivate` w ładunku SSO.

Domyślnie `isProfileActivityPrivate` jest ustawione na true.

### Istniejący Klienci

Zakończyliśmy wdrażanie tej funkcji dla wszystkich istniejących klientów na wszystkich poziomach.

### Konfiguracja Prywatności

Przeglądając swój profil, masz opcje:

- Wyłączenie komentowania na swoim profilu.
- Zapobieganie, aby twoja aktywność była widoczna dla innych.
- Zapobieganie innym w bezpośrednim wysyłaniu wiadomości do ciebie.

### Zbierane Dane

Profile Użytkowników są tworzone na podstawie danych, które mamy dzisiaj, takich jak ich imię, co komentowali ostatnio i tak dalej.

Nie będziemy zbierać dodatkowych danych, aby rozszerzyć profile użytkowników. Uważamy, że Profile Użytkowników są bardziej typowym profilem użytkownika na forum.

### Na zakończenie

Uważamy, że te funkcje znacznie poszerzają FastComments jako platformę i mamy nadzieję, że znajdziesz je użyteczne i łatwe w obsłudze.

Na zdrowie!

{{/isPost}}