---
[category:Security]

###### [postdate]
# [postlink]Zaštita komentara uz pomoć jedinstvenog prijavljivanja[/postlink]

{{#unless isPost}}
Ne smatrate li svoje komentare javnim? Imate SSO podešavanja za autentifikaciju? Ovo bi moglo biti za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničke izraze

#### Uvod

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(detalji ovde)</a> pruža vašim korisnicima mogućnost
da komentarišu bez potrebe da se prijave na drugu platformu.

Međutim, to samo po sebi ne osigurava vaše komentare, pošto su po defaultu podaci o komentarima javno dostupne informacije - svako ko može da pogleda
stranicu može videti komentare. Međutim, ovo izdanja menja to.

#### Podešavanje bez koda

Možemo sprečiti pregledanje i interakciju sa našim komentarima kada je SSO postavljen, kreiranjem <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">pravila prilagođavanja</a>.

Kada to radite, potražite SSO, i naći ćete ovu opciju:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Opcija podešavanja za zaključavanje komentara putem SSO" alt="Opcija podešavanja za zaključavanje komentara putem SSO" class="lozad" />
</div>

Omogućite je i sačuvajte pravilo prilagođavanja.

#### Zaštita samo određenog domena ili stranice

Da bismo zaštitili samo određeni domen ili stranicu, jednostavno ćemo konfigurisati pravilo prilagođavanja da to uradi.

Na vrhu UI-a prilagođavanja, naći ćemo dva unosa, Domen i URL ID.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Opcija podešavanja po stranici ili domenu" alt="Opcija podešavanja po stranici ili domenu" class="lozad" />
</div>

Da bismo zaštitili određeni domen, unesite domen u "domain" polje.

Da bismo zaštitili određenu stranicu, unesite URL stranice u "URL ID" polje. Ako imate prilagođenu integraciju sa FastComments, ovde možete uneti vrstu ID-a
umesto URL-a.

#### Zaštita izvan čitanja

Omogućavanje ove opcije će zaštititi stranicu ili domen od komentarisanja osim ako se korisnik ne prijavi putem SSO. 

#### Problemi

Bilo koji korisnici koji su kreirali komentare pre vaše SSO integracije neće moći da ih vide, osim ako se ne prijave putem vaše SSO integracije.

#### Na kraju

Nadam se da vam je ovaj vodič bio koristan i lak za čitanje. Slobodno komentarišite ispod sa bilo kojim pitanjima.

Pozdrav!

{{/isPost}}

---