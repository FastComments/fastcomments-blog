---
[category:Značajke]
[category:Email]

###### [postdate]
# [postlink]DKIM Konfiguracija Sada Dostupna u UI-u[/postlink]

{{#unless isPost}}
FastComments sada pruža UI za konfiguraciju DKIM-a, što olakšava poboljšanje stope isporuke email-a bez korišćenja API-ja.
{{/unless}}

{{#isPost}}

### Šta je Novo

Postavljanje DKIM-a za vašu prilagođenu email domenu postalo je lakše. Prethodno je konfiguracija DKIM-a zahtevala direktno korišćenje
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a>. Sada možete
konfigurisati DKIM direktno iz FastComments administrativnog UI-a.

### Zašto je DKIM Važan

Kada prilagodite From Domain za email-ove koje FastComments šalje u vaše ime, provajderi email-a moraju da provere da su
ti email-ovi legitimni. DKIM (DomainKeys Identified Mail) je jedan od ključnih mehanizama autentifikacije koji pomaže u tome.
Bez proper DKIM konfiguracije, email-ovi poslati u ime vaše domene su verovatnije da završe u spam folderima.

### Kako to Postaviti

Idite na stranicu <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Moje Domene</a> i kliknite
"Prikaži Napredno" za domenu koju želite da konfigurišete. Videćete DKIM podešavanja gde možete uneti ime vaše domene, selektor ključa,
i privatni ključ.

Nakon čuvanja, DKIM konfiguracija će biti primenjena na sve email-ove poslati sa te domene.

### API i dalje Radi

Ako više volite da upravljate DKIM konfiguracijom programatski, <a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> nastavlja da funkcioniše
kao i pre.

### U Zaključku

Nadamo se da će ovo olakšati osiguranje da vaši korisnici primaju email-ove koje FastComments šalje u vaše ime. Javite nam
ispod ako imate bilo kakvih pitanja.

Pozdrav!

{{/isPost}}

---