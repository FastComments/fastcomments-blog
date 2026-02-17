---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Posodobitev Frekvence Obvestil po Elektronski Pošti[/postlink]

{{#unless isPost}}
Uporabniki lahko zdaj nadzorujejo, kako pogosto prejemajo obvestila po elektronski pošti o novih komentarjih in odgovorih, vsakih minut, v urnem povzetku ali v dnevnem povzetku, z eno skupno nastavitvijo, plus prekinitvami po naročilu.
{{/unless}}

{{#isPost}}

### Kaj je novega

Dodali smo nastavitev **Frekvenca Obvestil o Novih Komentarjih**, ki nadzoruje, kako pogosto prejemate obvestila po elektronski pošti za obvestila o odgovorih in obvestila o najemnikih (novi komentarji). Tri možnosti so:

- **Vsako minuto** - prejemite e-pošto takoj, ko novi komentarji prispejo (preverja se vsakih minut).
- **Urvni povzetek** - prejemite zgoščen povzetek novih komentarjev enkrat na uro.
- **Dnevni povzetek** - prejemite zgoščen povzetek novih komentarjev enkrat na dan.

Ta nastavitev je na voljo tako skrbnikom najemnikov kot tudi komentatorjem in se uporablja za vsa obvestila o komentarjih. Upoštevajte, da se obvestila o @omembah vedno pošljejo takoj, ne glede na to nastavitev.

Frekvenco lahko tudi prekličete po naročilu v tabeli Naročila, za natančnejši nadzor nad posameznimi stranmi.

### Kako to Konfigurirati

1. Pojdite na svoje [Nastavitve Obvestil](https://fastcomments.com/auth/my-account/edit-notifications).
2. Uporabite spustni meni **Frekvenca Obvestil o Novih Komentarjih** za nastavitev želene frekvence.
3. Po želji prekličite frekvenco za posamezna naročila v tabeli Naročila.
4. Kliknite **Shrani Spremembe**.

Privzeta nastavitev je **Vsako minuto**, kar se ujema s prejšnjim delovanjem.

### Podpora za API

Frekvenca obvestil je na voljo tudi prek API-ja. Nastavitev na ravni uporabnika je polje `notificationFrequency`, prekinitve po naročilu pa se lahko nastavijo prek polja `notificationFrequency` naročila. Oglejte si [dokumentacijo API-ja](https://docs.fastcomments.com/guide-api.html) za več podrobnosti.

### V Zaključku

To uporabnikom daje nadzor nad njihovim poštnim predalom, ne da bi se morali popolnoma odjaviti s strani. Ena nastavitev zdaj pokriva tako obvestila o odgovorih kot obvestila o najemnikih, kar poenostavi upravljanje.

Povejte nam spodaj, če imate kakšne povratne informacije!

Na zdravje!

{{/isPost}}

---