---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]DKIM Konfiguracija Sada Dostupna u UI[/postlink]

{{#unless isPost}}
FastComments sada pruža UI za konfiguraciju DKIM-a, olakšavajući poboljšanje stopa isporuke e-pošte bez korišćenja API-ja.
{{/unless}}

{{#isPost}}

### Šta je novo

Postavljanje DKIM-a za vašu prilagođenu email domenu je postalo lakše. Prethodno je konfiguracija DKIM-a zahtevala direktno korišćenje
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a>. Sada možete
konfigurisati DKIM direktno iz FastComments admin UI.

### Zašto je DKIM važan

Kada prilagodite From Domain za e-poruke koje FastComments šalje u vaše ime, provajderi e-pošte treba da potvrde da su
te e-poruke legitimne. DKIM (DomainKeys Identified Mail) je jedan od ključnih mehanizama autentifikacije koji pomaže u tome.
Bez pravilne DKIM konfiguracije, e-poruke poslate u ime vaše domene su verovatnije da će završiti u spam folderima.

### Kako to postaviti

Idite na stranicu <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Moje domene</a> i kliknite
na "Prikaži napredno" za domenu koju želite da konfigurišete. Videćete DKIM podešavanja gde možete uneti naziv vaše domene, selektor ključa,
i privatni ključ.

Nakon čuvanja, DKIM konfiguracija će biti primenjena na sve e-poruke poslate sa te domene.

### API i dalje radi

Ako više volite da upravljate DKIM konfiguracijom programatski, <a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> nastavlja da radi
kao pre.

### Zaključak

Nadamo se da će ovo olakšati obezbeđivanje da vaši korisnici dobijaju e-poruke koje FastComments šalje u vaše ime. Javite nam
ispod ako imate neka pitanja.

Pozdrav!

{{/isPost}}

---