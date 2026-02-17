---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]DKIM konfiguracija sada dostupna u UI[/postlink]

{{#unless isPost}}
FastComments sada pruža UI za konfiguraciju DKIM-a, što olakšava poboljšanje stopa isporuke e-pošte bez korišćenja API-ja.
{{/unless}}

{{#isPost}}

### Šta je novo

Postavljanje DKIM-a za vašu prilagođenu domenu e-pošte je postalo lakše. Prethodno je konfiguracija DKIM-a zahtevala korišćenje
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> direktno. Sada možete
konfigurisati DKIM direktno iz FastComments admin UI.

### Zašto je DKIM važan

Kada prilagodite From Domain za e-poštu koju FastComments šalje u vaše ime, provajderi e-pošte moraju da verifikuju da
su te e-poruke legitimne. DKIM (DomainKeys Identified Mail) je jedan od ključnih mehanizama autentifikacije koji pomaže u ovome.
Bez pravilne DKIM konfiguracije, e-poruke poslati u ime vaše domene su sklonije da završe u spam folderima.

### Kako to postaviti

Idite na stranicu <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Moje domene</a> i kliknite
"Prikaži napredno" za domenu koju želite da konfigurišete. Videćete DKIM podešavanja gde možete uneti naziv svoje domene, selektor ključa
i privatni ključ.

Nakon čuvanja, DKIM konfiguracija će se primeniti na sve e-poruke poslati sa te domene.

### API i dalje funkcioniše

Ako više volite da upravljate DKIM konfiguracijom programatski, <a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> nastavlja da funkcioniše
kao i pre.

### U zaključku

Nadamo se da će ovo olakšati osiguranje da vaši korisnici prime e-poruke koje FastComments šalje u vaše ime. Javite nam
ispod ako imate bilo kakva pitanja.

Pozdrav!

{{/isPost}}

---