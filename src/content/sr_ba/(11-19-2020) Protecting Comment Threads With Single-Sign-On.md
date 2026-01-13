---
[category:Security]

###### [postdate]
# [postlink]Zaštita komentarskih niti pomoću jedinstvenog prijavljivanja[/postlink]

{{#unless isPost}}
Ne smatrate svoje komentarske niti javnim? Imate SSO podešavanje za autentifikaciju? Ovo bi moglo biti za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Uvod

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(detalji ovde)</a> pruža vašim korisnicima način
da komentarišu bez potrebe da se prijave na drugu platformu.

Međutim, samo to ne osigurava vaše komentarske niti, budući da su podaci o komentarima po defaultu javno dostupne informacije - svako ko može da vidi
stranicu može videti i komentare. Međutim, ova verzija to menja.

#### Podešavanje bez koda

Možemo sprečiti pregledanje i interakciju sa našim komentarskim nitima, kada je SSO podešen, kreiranjem <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">pravila za prilagođavanje</a>.

Kada to radite, potražite SSO, i naći ćete ovu opciju:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Opcija konfiguracije za zaštitu komentara putem SSO" alt="Opcija konfiguracije za zaštitu komentara putem SSO" class="lozad" />
</div>

Aktivirajte je i sačuvajte pravilo prilagođavanja.

#### Zaštita samo određenog domena ili stranice

Da bismo zaštitili samo određeni Domen ili Stranicu, jednostavno ćemo konfigurisati pravilo prilagođavanja da to uradi.

Na vrhu UI za prilagođavanje, naći ćemo dva unosa, Domen i URL ID.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Opcija konfiguracije po stranici ili domenu" alt="Opcija konfiguracije po stranici ili domenu" class="lozad" />
</div>

Da bismo zaštitili određeni domen, unesite predmetni domen u polje "domen".

Da bismo zaštitili određenu stranicu, unesite URL stranice u polje "URL ID". Ako imate prilagođenu integraciju sa FastComments, možete uneti tip ID-a ovde
umesto URL-a.

#### Zaštita iznad čitanja

Aktiviranje ove opcije će zaštititi stranicu ili domen od komentarisanja osim ako korisnik nije prijavljen putem SSO. 

#### Problemi

Bilo koji korisnici koji su kreirali komentare pre vaše SSO integracije neće moći da ih vide, osim ako se ne prijave putem vaše SSO integracije.

#### Zaključak

Nadamo se da ste našli ovaj vodič korisnim i lakim za čitanje. Slobodno komentarišite ispod sa bilo kakvim pitanjima.

Pozdrav!

{{/isPost}}

---