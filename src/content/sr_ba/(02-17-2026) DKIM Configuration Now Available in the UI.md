---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]DKIM Konfiguracija Sada Dostupna u UI-u[/postlink]

{{#unless isPost}}
FastComments sada pruža UI za konfiguraciju DKIM-a, olakšavajući poboljšanje stope isporuke emailova bez korištenja API-ja.
{{/unless}}

{{#isPost}}

### Šta je novo

Postavljanje DKIM-a za vašu prilagođenu email domenu sada je lakše. Ranije je konfiguracija DKIM-a zahtevala direktno korišćenje
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a>. Sada možete
konfigurisati DKIM direktno iz FastComments admin UI-a.

### Zašto je DKIM važan

Kada prilagodite From Domain za emailove koje FastComments šalje u vaše ime, provajderi emaila trebaju da verifikuju da
su ti emailovi legitimni. DKIM (DomainKeys Identified Mail) je jedan od ključnih mehanizama autentifikacije koji pomaže u tome.
Bez pravilne DKIM konfiguracije, emailovi poslati u vaše ime su skloniji da završe u spam folderima.

### Kako to postaviti

Idite na stranicu <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Moje Domene</a> i kliknite
"Prikaži Napredno" za domenu koju želite konfigurisati. Videćete DKIM postavke gde možete uneti ime vaše domene, selektor ključa
i privatni ključ.

Nakon čuvanja, DKIM konfiguracija će biti primenjena na sve emailove poslati sa te domene.

### API i dalje funkcioniše

Ako više volite da upravljate DKIM konfiguracijom programatski, 
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> i dalje funkcioniše
kao i pre.

### Zaključak

Nadamo se da će ovo olakšati osiguranje da vaši korisnici dobiju emailove koje FastComments šalje u vaše ime. Javite nam
ispod ako imate bilo kakva pitanja.

Pozdrav!

{{/isPost}}

---