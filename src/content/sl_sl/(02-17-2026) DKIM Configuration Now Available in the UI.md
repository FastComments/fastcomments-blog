---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]Konfiguracija DKIM zdaj na voljo v uporabniškem vmesniku[/postlink]

{{#unless isPost}}
FastComments zdaj ponuja uporabniški vmesnik za konfiguracijo DKIM, kar omogoča lažje izboljšanje stopenj dostave e-poštnih sporočil brez uporabe API-ja.
{{/unless}}

{{#isPost}}

### Novosti

Nastavitev DKIM za vašo lastno domeno e-pošte je postala enostavnejša. Prej je bila konfiguracija DKIM potrebna neposredno s
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API-jem za konfiguracijo domen</a>. Zdaj lahko
konfigurirate DKIM neposredno iz uporabniškega vmesnika FastComments.

### Zakaj je DKIM pomemben

Ko prilagodite domeno pošiljatelja za e-pošto, ki jo FastComments pošilja v vašem imenu, morajo ponudniki e-pošte preveriti, da so
ta e-poštna sporočila legitimna. DKIM (DomainKeys Identified Mail) je mehanizem za overjanje, ki pri tem pomaga.
Brez ustrezne konfiguracije DKIM je bolj verjetno, da bodo e-poštna sporočila, poslana v imenu vaše domene, končala v mapah z neodgovorjeno pošto.

### Kako to nastaviti

Pojdite na stran <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Moje domene</a> in kliknite
"Prikaži napredno" za domeno, ki jo želite konfigurirati. Videli boste nastavitve DKIM, kjer lahko vnesete ime svoje domene, izbirnik ključa
in zasebni ključ.

Po shranjevanju bo konfiguracija DKIM uporabljena za vse e-pošte, poslane s te domene.

### API še vedno deluje

Če raje upravljate konfiguracijo DKIM programatsko, <a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API za konfiguracijo domen</a> še naprej deluje
kot prej.

### Na koncu

Upamo, da to olajša zagotavljanje, da vaši uporabniki prejemajo e-pošto, ki jo FastComments pošilja v vašem imenu. Sporočite nam
spodaj, če imate kakršnakoli vprašanja.

Na zdravje!

{{/isPost}}

---