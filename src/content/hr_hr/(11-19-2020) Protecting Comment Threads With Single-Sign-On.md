---
[category:Security]

###### [postdate]
# [postlink]Zaštita komentarskih niti s jedinstvenim prijavljivanjem[/postlink]

{{#unless isPost}}
Ne smatrate svoje komentarske niti javnima? Imate SSO postavljen za autentifikaciju? Ovo bi moglo biti za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Uvod

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(detalji ovdje)</a> omogućuje vašim korisnicima način
da komentiraju bez potrebe za prijavom na drugu platformu.

Međutim, ovo samo po sebi ne osigurava vaše komentarske niti, budući da su prema zadanim postavkama podaci o komentarima javno dostupni - svatko tko može pregledati
stranicu može vidjeti komentare. Međutim, ovo izdanje to mijenja.

#### Postavljanje bez koda

Možemo spriječiti pregledavanje i interakciju s našim komentarskim nitima, kada je SSO postavljen, tako da stvorimo <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">pravilo prilagodbe</a>.

Kada to radite, potražite SSO, i pronaći ćete ovu opciju:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Opcija konfiguracije za zaključavanje komentara putem SSO-a" alt="Opcija konfiguracije za zaključavanje komentara putem SSO-a" class="lozad" />
</div>

Omogućite je i spremite pravilo prilagodbe.

#### Zaštitite samo određeni domen ili stranicu

Da biste zaštitili samo određeni domen ili stranicu, jednostavno ćemo konfigurirati pravilo prilagodbe za to.

Na vrhu UI-a za prilagodbu naći ćemo dva unosa, Domen i URL ID.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Opcija konfiguracije po stranici ili domenu" alt="Opcija konfiguracije po stranici ili domenu" class="lozad" />
</div>

Da biste zaštitili samo određeni domen, unesite dotični domen u polje "domen".

Da biste zaštitili određenu stranicu, unesite URL stranice u polje "URL ID". Ako imate prilagođenu integraciju s FastComments, ovdje možete unijeti vrstu ID-a
umjesto URL-a.

#### Zaštita izvan čitanja

Omogućavanje ove opcije će zaštititi stranicu ili domen od komentiranja osim ako se korisnik ne prijavi putem SSO-a. 

#### Uočavanja

Bilo koji korisnici koji su stvorili komentare prije vaše SSO integracije neće moći vidjeti te komentare, osim ako se ne prijave putem vaše SSO integracije.

#### Zaključak

Nadamo se da ste pronašli ovaj vodič korisnim i lako čitljivim. Slobodno komentirajte u nastavku s bilo kakvim pitanjima.

Živjeli!

{{/isPost}}

---