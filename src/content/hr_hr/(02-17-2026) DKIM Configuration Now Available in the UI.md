---
[category:Značajke]
[category:Email]

###### [postdate]
# [postlink]DKIM konfiguracija sada dostupna u korisničkom sučelju[/postlink]

{{#unless isPost}}
FastComments sada pruža korisničko sučelje za konfiguraciju DKIM-a, olakšavajući poboljšanje stope isporuke e-pošte bez korištenja API-ja.
{{/unless}}

{{#isPost}}

### Što je novo

Postavljanje DKIM-a za vašu prilagođenu domenu e-pošte postalo je lakše. Prije je konfiguracija DKIM-a zahtijevala izravno korištenje
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API-ja za konfiguraciju domena</a>. Sada možete
konfigurirati DKIM izravno iz FastComments administratorskog sučelja.

### Zašto je DKIM važan

Kada prilagodite From Domain za e-poštu koju FastComments šalje u vaše ime, pružatelji e-pošte trebaju provjeriti da su
te e-pošte legitimne. DKIM (DomainKeys Identified Mail) je jedan od ključnih mehanizama za autentifikaciju koji pomaže u tome.
Bez pravilne DKIM konfiguracije, e-pošta poslana u ime vaše domene vjerojatnije će završiti u mapama nepoželjne pošte.

### Kako to postaviti

Idite na stranicu <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Moje domene</a> i kliknite
"Prikaži napredno" za domenu koju želite konfigurirati. Vidjet ćete DKIM postavke gdje možete unijeti naziv svoje domene, selektor ključa
i privatni ključ.

Nakon spremanja, DKIM konfiguracija će se primijeniti na sve e-pošte poslane s te domene.

### API još uvijek radi

Ako više volite upravljati DKIM konfiguracijom programatski, 
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API za konfiguraciju domena</a> i dalje radi
kao i prije.

### Zaključak

Nadamo se da će ovo olakšati osiguranje da vaši korisnici prime e-poštu koju FastComments šalje u vaše ime. Javite nam
ispod ako imate bilo kakvih pitanja.

Živjeli!

{{/isPost}}

---