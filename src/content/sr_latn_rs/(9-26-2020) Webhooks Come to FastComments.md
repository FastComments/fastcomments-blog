---
[category:API & Development]
###### [postdate]
# [postlink]Webhooks dolaze u FastComments[/postlink]

{{#unless isPost}}
FastComments sada može da poziva vaš API za kreiranje, ažuriranje i uklanjanje komentara.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Šta je novo

Sa FastComments sada je moguće pozvati API endpoint svaki put kada se komentar dodaje, ažurira ili uklanja iz našeg sistema.

To postižemo putem asinhronih webhook-a preko HTTP/HTTPS.

#### Kako ga koristiti

Prvo, idite na <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Administraciju Webhook-a</a>. Ovo je dostupno preko Manage Data -> Webhooks.

Odavde možete odrediti endpoint-e za svaki tip događaja vezanih za komentare.

Za svaki tip događaja, obavezno kliknite na **Send Test Payload** kako biste osigurali da ste ispravno postavili vašu integraciju. Poglede sledeći deo, "Testiranje", za detalje.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Primer podešavanja Webhook-a" title="Primer podešavanja Webhook-a" class="lozad" />
</div>

#### Testiranje

U <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Administraciji Webhook-a</a> postoje dugmići "Send Test Payload" za svaki tip događaja (Kreiraj, Ažuriraj, Obriši). Kreiranje i Ažuriranje događaji šalju dummy WebhookComment objekat, dok testiranje Briši šalje dummy telo zahteva sa samo jednim ID-jem.

Test će izvršiti dva poziva kako bi verifikovao kod odgovora za "srećne" (ispravne API ključeve) i "tužne" (neispravne API ključeve) scenarije.

Kada test pošalje neispravan API ključ, trebalo bi da vratite statusni kod 401 kako bi test potpuno prošao. Ako ne proverite ispravno vrednost tokena, videćete grešku poput:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Greška u testiranju autentifikacije Webhook-a" title="Greška u testiranju autentifikacije Webhook-a" class="lozad" />
</div>

#### Struktura objekta komentara
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### Struktura događaja "Kreiraj"

Telo zahteva za "kreiraj" događaj je WebhookComment objekat.

#### Struktura događaja "Ažuriraj"

Telo zahteva za "ažuriraj" događaj je WebhookComment objekat.

#### Struktura događaja "Obriši"

Telo zahteva za "obriši" događaj je WebhookComment objekat, **ali sadrži samo id**.

#### Zašto se Kreiraj i Ažuriraj koriste HTTP PUT, a ne POST?

**Budući da svi naši zahtevi sadrže ID**, ponavljanje istog zahteva za Kreiranje ili Ažuriranje **ne bi trebalo da kreira nove objekte sa vaše strane**. To znači da su ovi pozivi idempotentni i trebali bi biti PUT događaji u skladu sa HTTP specifikacijom.

#### Kako to funkcioniše

Sve promene na objektu Komentar u sistemu aktiviraju događaj koji završava na redu. Možete nadgledati ovaj red u <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Administraciji Webhook-a</a> u slučaju da vaš API prestane sa radom. Ako zahtev za vaš API ne uspe, ponovo ćemo ga staviti na red po rasporedu. Taj raspored je 1 minuta * broj ponovljenih pokušaja. Ako poziv ne uspe jednom, pokušaće ponovo za minut. Ako ne uspe dva puta, čekat će dva minuta, i tako dalje. Ovo je kako ne bismo preopteretili vaš API ako prestaje da radi zbog opterećenja.

#### Bezbednost & API token

U zaglavlju zahteva prosledićemo vaš <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> u parametru pod nazivom "token".

Ako ne proverite pravilno ovaj parametar, vaša integracija neće biti označena kao Verifikovana. Ovo je zaštita kako bi se osiguralo da su sve integracije sa FastComments bezbedne.

#### Na kraju

Nadamo se da ćete smatrati da je integracija FastComments Webhook-a laka za razumevanje i brza za postavljanje.

Ako imate dodatnih pitanja, slobodno se obratite <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranici za korisničku podršku</a>.

Pozdrav!

{{/isPost}}

---