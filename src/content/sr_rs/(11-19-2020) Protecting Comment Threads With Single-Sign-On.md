---
[category:Security]

###### [postdate]
# [postlink]Zaštita komentara uz pomoć jedinstvenog prijavljivanja[/postlink]

{{#unless isPost}}
Ne smatrate svoje komentare javnim? Imate SSO postavljen za autentifikaciju? Ovo bi moglo biti za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Uvod

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(detalji ovde)</a> pruža vašim korisnicima način
da komentarišu bez potrebe da se prijave na drugu platformu.

Međutim, samo to ne obezbeđuje vaše komentare, pošto su podaci o komentarima podrazumevano javno dostupne informacije - bilo ko ko može da pregleda
stranicu može videti komentare. Međutim, ova verzija to menja.

#### Postavljanje bez koda

Možemo sprečiti prikazivanje i interakciju sa našim komentarima, kada je SSO postavljen, kreiranjem <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">pravila za prilagođavanje</a>.

Kada to uradite, potražite SSO i naći ćete ovu opciju:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Opcija konfiguracije za zaključavanje komentara putem SSO" alt="Opcija konfiguracije za zaključavanje komentara putem SSO" class="lozad" />
</div>

Aktivirajte je i sačuvajte pravilo za prilagođavanje.

#### Zaštita samo određenog domena ili stranice

Da bismo zaštitili samo određeni domen ili stranicu, jednostavno ćemo konfigurisati pravilo za prilagođavanje da to uradi.

Na vrhu UI za prilagođavanje, naći ćemo dva unosa, Domen i URL ID.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Opcija konfiguracije po stranici ili domenu" alt="Opcija konfiguracije po stranici ili domenu" class="lozad" />
</div>

Da bismo samo zaštitili određeni domen, unesite taj domen u polje "domen".

Da bismo zaštitili određenu stranicu, unesite URL stranice u polje "URL ID". Ako imate prilagođenu integraciju sa FastComments, možete uneti vrstu ID-a ovde
umesto URL-a.

#### Zaštita iznad čitanja

Aktiviranje ove opcije će zaštititi stranicu ili domen od komentarisanja osim ako korisnik nije prijavljen putem SSO. 

#### Problemi

Svi korisnici koji su kreirali komentare pre vaše SSO integracije neće moći da ih vide, osim ako se ne prijave putem vaše SSO integracije.

#### Zaključak

Nadamo se da ste našli ovaj vodič korisnim i lakim za čitanje. Slobodno komentarišite ispod sa bilo kakvim pitanjima.

Pozdrav!

{{/isPost}}

---