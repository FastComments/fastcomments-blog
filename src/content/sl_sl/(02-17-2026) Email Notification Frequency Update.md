---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Posodobitev frekvence obvestil po elektronski pošti[/postlink]

{{#unless isPost}}
Uporabniki lahko zdaj nadzorujejo, kako pogosto prejemajo obvestila po e-pošti o novih komentarjih in odgovorih, vsako minuto, dnevno zbirko ali tedensko zbirko, z ločenimi nastavitvami za obvestila o odgovorih in obvestila za administratorje, poleg tega pa tudi prilagoditve za posamezne naročnine.
{{/unless}}

{{#isPost}}

### Kaj je novega

Dodali smo nastavitve **Frekvenca obvestil o odgovorih** in **Frekvenca obvestil za administratorje**, ki nadzorujejo, kako pogosto prejemate obvestila po e-pošti za odgovore in nove komentarje, oziroma. Tri možnosti za vsako so:

- **Vsako minuto** - prejemite e-pošto takoj, ko prispejo novi komentarji (preverja se vsako minuto).
- **Dnevna zbirka** - prejemite zbrano povzetek novih komentarjev enkrat na uro.
- **Tedenska zbirka** - prejemite zbrano povzetek novih komentarjev enkrat na dan.

Frekvenca obvestil o odgovorih je na voljo vsem uporabnikom in privzeto nastavljena na **Vsako minuto**. Frekvenca obvestil za administratorje je na voljo adminom spletnega mesta in privzeto nastavljena na **Dnevna zbirka**. Upoštevajte, da se obvestila o @omembah vedno pošiljajo takoj, ne glede na te nastavitve.

Prav tako lahko prilagodite frekvenco za posamezne naročnine v tabeli Naročne, za natančen nadzor nad posameznimi stranmi.

### Kako to konfigurirati

1. Pojdite na svoje [Nastavitve obvestil](https://fastcomments.com/auth/my-account/edit-notifications).
2. Uporabite **Frekvenca obvestil o odgovorih** in **Frekvenca obvestil za administratorje** spustne sezname, da nastavite svoje želene frekvence.
3. Po želji, prilagodite frekvenco za posamezne naročnine v tabeli Naročne.
4. Kliknite **Shrani spremembe**.

### Podpora za API

Polje `notificationFrequency` na objektu uporabnika nadzoruje frekvenco obvestila o odgovorih, polje `adminNotificationFrequency` pa nadzoruje frekvenco obvestil za administratorje. Prilagoditve za posamezne naročnine lahko nastavite preko polja `notificationFrequency` naročnine. Oglejte si [dokumentacijo API](https://docs.fastcomments.com/guide-api.html) za podrobnosti.

### Na koncu

To uporabnikom daje nadzor nad njihovim prejeto pošto, ne da bi se morali popolnoma odjaviti s strani.

Sporočite nam spodaj, če imate kakšne povratne informacije!

Na zdravje!

{{/isPost}}

--- 

---