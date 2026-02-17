---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]Konfiguracja DKIM teraz dostępna w UI[/postlink]

{{#unless isPost}}
FastComments teraz zapewnia interfejs użytkownika do konfigurowania DKIM, co ułatwia poprawę wskaźników dostarczania e-maili bez użycia API.
{{/unless}}

{{#isPost}}

### Co nowego

Ustawienie DKIM dla Twojej niestandardowej domeny e-mailowej stało się łatwiejsze. Wcześniej konfiguracja DKIM wymagała bezpośredniego korzystania z
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API konfiguracji domen</a>. Teraz możesz
konfigurować DKIM bezpośrednio z interfejsu administracyjnego FastComments.

### Dlaczego DKIM ma znaczenie

Gdy dostosowujesz domenę nadawcy dla e-maili, które FastComments wysyła w Twoim imieniu, dostawcy e-mailowi muszą zweryfikować, że
te e-maile są legalne. DKIM (DomainKeys Identified Mail) jest jednym z kluczowych mechanizmów uwierzytelniania, który pomaga w tym.
Bez odpowiedniej konfiguracji DKIM, e-maile wysyłane w imieniu Twojej domeny są bardziej podatne na trafić do folderów spamowych.

### Jak to ustawić

Przejdź do strony <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Moje domeny</a> i kliknij
"Zobacz więcej opcji" dla domeny, którą chcesz skonfigurować. Zobaczysz ustawienia DKIM, gdzie możesz wprowadzić nazwę swojej domeny, selektor klucza
i klucz prywatny.

Po zapisaniu konfiguracja DKIM zostanie zastosowana do wszystkich e-maili wysyłanych z tej domeny.

### API nadal działa

Jeśli wolisz zarządzać konfiguracją DKIM programowo,
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API konfiguracji domen</a> nadal działa
jak wcześniej.

### Wnioski

Mamy nadzieję, że to ułatwi zapewnienie, że Twoi użytkownicy otrzymują e-maile, które FastComments wysyła w Twoim imieniu. Daj nam znać
poniżej, jeśli masz jakiekolwiek pytania.

Pozdrawiamy!

{{/isPost}}