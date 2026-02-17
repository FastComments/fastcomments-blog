---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Posodobitev frekvence obvestil po elektronski pošti[/postlink]

{{#unless isPost}}
Uporabniki lahko zdaj nadzorujejo, kako pogosto prejemajo obvestila po elektronski pošti za nove komentarje in odgovore — vsakih minut, urni povzetek ali dnevni povzetek — z enim skupnim nastavitvijo, poleg tega pa tudi posamičnimi prekinitvami.
{{/unless}}

{{#isPost}}

### Kaj je novega

Dodali smo nastavitev **Frekvenca obvestil o novih komentarjih**, ki nadzoruje, kako pogosto prejemate obvestila po elektronski pošti tako za obvestila o odgovorih kot tudi za obvestila o novih komentarjih. Tri možnosti so:

- **Vsako minuto** - prejemajte e-pošto takoj, ko prispejo novi komentarji (preverjeno vsako minuto).
- **Urni povzetek** - prejemajte strnjen povzetek novih komentarjev enkrat na uro.
- **Dnevni povzetek** - prejemajte strnjen povzetek novih komentarjev enkrat na dan.

Ta nastavitev je na voljo tako administratorjem najemnikov kot tudi komentatorjem in se uporablja za vsa obvestila o komentarjih po elektronski pošti. Upoštevajte, da se obvestila o omembah @ vedno pošljejo takoj, ne glede na to nastavitev.

Frekvenco tudi lahko spremenite za posamezne naročnine v tabeli Naročnine, kar omogoča natančnejši nadzor nad posameznimi stranmi.

### Kako to konfigurirati

1. Pojdite na [Nastavitve obvestil](https://fastcomments.com/auth/my-account/edit-notifications).
2. Uporabite spustni meni **Frekvenca obvestil o novih komentarjih** za nastavitev vaše želene frekvence.
3. Po potrebi spremenite frekvenco za posamezne naročnine v tabeli Naročnine.
4. Kliknite **Shrani spremembe**.

Privzeta nastavitev je **Vsako minuto**, kar se ujema s prejšnjim vedenjem.

### Podpora API

Frekvenca obvestil je prav tako na voljo preko API. Nastavitev na ravni uporabnika je polje <div class="code">notificationFrequency</div>, prekinitve za posamezne naročnine pa se lahko nastavijo preko polja <div class="code">notificationFrequency</div> naročnine. Oglejte si [dokumentacijo API](https://docs.fastcomments.com/guide-api.html) za podrobnosti.

### V zaključku

To uporabnikom daje nadzor nad njihovim prejemanjem pošte, ne da bi se morali popolnoma odjaviti s strani. Ena nastavitev zdaj pokriva tako obvestila o odgovorih kot obvestila o novih komentarjih, kar olajša upravljanje.

Povejte nam v komentarjih spodaj, če imate kakšne povratne informacije!

Na zdravje!

{{/isPost}}

---