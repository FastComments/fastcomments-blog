---
[category:Security]

###### [postdate]
# [postlink]Ochrona Wątków Komentarzy z Użyciem Logowania Jednoetapowego[/postlink]

{{#unless isPost}}
Uważasz, że Twoje wątki komentarzy nie są publiczne? Masz skonfigurowane SSO do uwierzytelniania? To może być dla Ciebie.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten Artykuł Zawiera Żargon Techniczny

#### Wprowadzenie

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(szczegóły tutaj)</a> daje Twoim użytkownikom możliwość
komentowania bez konieczności logowania się na innej platformie.

Jednak samo to nie zabezpiecza Twoich wątków komentarzy, ponieważ domyślnie dane komentarzy są publicznie dostępnymi informacjami - każdy, kto może zobaczyć
stronę, może zobaczyć komentarze. Jednak ta wersja to zmienia.

#### Konfiguracja Bez Kodowania

Możemy zapobiec przeglądaniu i interakcjom z naszymi wątkami komentarzy, gdy SSO jest skonfigurowane, tworząc <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">zasadę dostosowania</a>.

Podczas tego procesu, wyszukaj SSO, a znajdziesz tę opcję:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Opcja Konfiguracji Zamykania Komentarzy za pomocą SSO" alt="Opcja Konfiguracji Zamykania Komentarzy za pomocą SSO" class="lozad" />
</div>

Włącz ją i zapisz zasadę dostosowania.

#### Ochrona Tylko Określonej Domeny lub Strony

Aby chronić tylko określoną domenę lub stronę, po prostu skonfigurujemy zasadę dostosowania, aby to zrobić.

Na górze interfejsu dostosowywania znajdziemy dwa pola, Domenę i ID URL.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Opcja Konfiguracji według Strony lub Domeny" alt="Opcja Konfiguracji według Strony lub Domeny" class="lozad" />
</div>

Aby chronić tylko daną domenę, wpisz odpowiednią domenę w polu "domena".

Aby chronić określoną stronę, wpisz adres URL strony w polu "ID URL". Jeśli masz własną integrację z FastComments, możesz wpisać tutaj rodzaj ID
zamiast adresu URL.

#### Ochrona Poza Czytaniem

Włączenie tej opcji zabezpieczy stronę lub domenę przed komentowaniem, chyba że użytkownik jest zalogowany przez SSO.

#### Pułapki

Każdy użytkownik, który stworzył komentarze przed integracją SSO, nie będzie mógł ich zobaczyć, chyba że zaloguje się za pomocą integracji SSO.

#### Na koniec

Mamy nadzieję, że ten przewodnik był pomocny i łatwy do przeczytania. Zachęcamy do komentowania poniżej z wszelkimi pytaniami.

Na zdrowie!

{{/isPost}}