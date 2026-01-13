---
[category:Security]

###### [postdate]
# [postlink]Zaštita komentarskih niti pomoću SSO-a[/postlink]

{{#unless isPost}}
Ne smatrate svoje komentarske niti javnim? Imate SSO podešen za autentifikaciju? Ovo bi moglo biti za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Uvod

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(detalji ovde)</a> pruža vašim korisnicima način
da komentarišu bez potrebe da se prijave na drugu platformu.

Međutim, ovo samo po sebi ne osigurava vaše komentarske niti, jer su po defaultu podaci o komentarima javno dostupne informacije - svako ko može da pregleda
stranicu može da vidi komentare. Ipak, ova verzija to menja.

#### Bez-kod podešavanje

Možemo sprečiti pregledanje i interakciju sa našim komentarskim nitima, kada je SSO podešen, stvaranjem <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">pravila za prilagođavanje</a>.

Kada to radite, potražite SSO, i naći ćete ovu opciju:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Opcija konfiguracije za zaključavanje komentara putem SSO-a" alt="Opcija konfiguracije za zaključavanje komentara putem SSO-a" class="lozad" />
</div>

Omogućite je i sačuvajte pravilo prilagođavanja.

#### Zaštita samo određenog domena ili stranice

Da biste zaštitili samo određeni domen ili stranicu, jednostavno ćemo konfigurisati pravilo prilagođavanja da to uradi.

Na vrhu UI za prilagođavanje, naći ćemo dva polja, Domen i URL ID.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Opcija konfiguracije po stranici ili domenu" alt="Opcija konfiguracije po stranici ili domenu" class="lozad" />
</div>

Da biste zaštitili samo određeni domen, unesite domen u pitanju u polje "domen".

Da biste zaštitili određenu stranicu, unesite URL stranice u polje "URL ID". Ako imate prilagođenu integraciju sa FastComments, možete uneti vrstu ID-a ovde
umesto URL-a.

#### Zaštita izvan čitanja

Omogućavanje ove opcije će zaštititi stranicu ili domen od komentarisanja osim ako korisnik nije prijavljen putem SSO-a. 

#### Problemi

Bilo koji korisnici koji su kreirali komentare pre vaše SSO integracije neće moći da ih vide, osim ako se ne prijave putem vaše SSO integracije.

#### Na kraju

Nadamo se da ste ovaj vodič pronašli korisnim i lakim za čitanje. Slobodno komentarišite u nastavku sa bilo kakvim pitanjima.

Živeli!

{{/isPost}}

---