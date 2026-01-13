---
[category:API & Development]
###### [postdate]
# [postlink]Webhooks Dolaze u FastComments[/postlink]

{{#unless isPost}}
FastComments sada može pozvati vašu API za kreiranje, ažuriranje i uklanjanje komentara.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničku Terminologiju

#### Šta je Novo

Sa FastComments, sada je moguće pozvati API endpoint svaki put kada se komentar doda, ažurira ili ukloni iz našeg sistema.

To postižemo pomoću asinhronih webhookova preko HTTP/HTTPS.

#### Kako to Koristiti

Prvo, idite na <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks admin</a>. Ovo je dostupno putem Manage Data -> Webhooks.

Odavde možete odrediti endpointove za svaku vrstu događaja komentara.

Za svaku vrstu događaja, obavezno kliknite na **Send Test Payload** da se uverite da ste pravilno podesili vašu integraciju. Pogledajte sledeći deo, "Testiranje", za detalje.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Primer Podesavanja Webhookova" title="Primer Podesavanja Webhookova" class="lozad" />
</div>

#### Testiranje

U <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks admin</a> postoje dugmad "Send Test Payload" za svaku
vrstu događaja (Kreirati, Ažurirati, Obriši). Događaji Kreirati i Ažurirati šalju dummy WebhookComment objekat, dok testiranje Brisanja šalje dummy telo zahteva sa samo ID-em.

Test će napraviti dva poziva da verifikuje kod odgovora za "srećne" (ispravna API ključ) i "tužne" (neispravni API ključ) scenarije.

Kada test pošalje neispravan API ključ, trebate vratiti status kod 401 kako bi test prošao potpuno. Ako ne proverite pravilno vrednost tokena, videćete grešku kao:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Greška na Testu Autentifikacije Webhookova" title="Greška na Testu Autentifikacije Webhookova" class="lozad" />
</div>

#### Struktura Objekta Komentara
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

#### Struktura Događaja "Kreirati"

Telo zahteva za događaj "kreirati" je WebhookComment objekat.

#### Struktura Događaja "Ažurirati"

Telo zahteva za događaj "ažurirati" je WebhookComment objekat.

#### Struktura Događaja "Obrisati"

Telo zahteva za događaj "brisati" je WebhookComment objekat, **ali sadrži samo id**.

#### Zašto oba Kreirati i Ažurirati koriste HTTP PUT umesto POST?

**Pošto svi naši zahtevi sadrže ID**, ponavljanje istog zahteva za Kreiranje ili Ažuriranje **ne bi trebalo da kreira nove objekte sa vaše strane**. Ovo znači da su ovi pozivi idempotentni i da bi trebali biti
PUT događaji prema HTTP specifikaciji.

#### Kako to Funkcioniše

Sve promene na objektu Komentara u sistemu pokreću događaj koji završi u redu. Možete pratiti ovaj red u <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks admin</a> u slučaju
da vaš API prestane sa radom. Ako zahtev prema vašem API ne uspe, ponovo ćemo ga staviti u red prema rasporedu. Taj raspored je 1 minuta * broj ponovnih pokušaja. Ako poziv ne uspe jednom, pokušaće ponovo za minut. Ako ne uspe dvaput, onda će čekati dva minuta, i tako dalje.
Ovo je da ne opterećujemo vaš API ako prestane sa radom iz povezanih razloga.

#### Bezbednost & API Token

U zaglavlju zahteva proći ćemo vaš <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> u parametru nazvanom "token".

Ako ne proverite pravilno ovaj parametar, vaša integracija neće biti označena kao Verifikovana. Ovo je zaštita da se osigura da su sve integracije sa FastComments sigurni.

#### Na Zaključku

Nadamo se da ćete pronaći integraciju FastComments Webhook jednostavnom za razumevanje i brzim za podešavanje.

Ako imate dodatnih pitanja, slobodno se obratite <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranici za korisničku podršku</a>.

Živeli!

{{/isPost}}

---