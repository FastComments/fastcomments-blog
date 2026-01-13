---
[category:API & Development]
###### [postdate]
# [postlink]Webhooks dolaze u FastComments[/postlink]

{{#unless isPost}}
FastComments sada može da poziva vaš API za kreiranje, ažuriranje i uklanjanje komentara.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničke termine

#### Šta je novo

Sa FastComments sada je moguće pozvati API endpoint svaki put kada se komentar doda, ažurira ili ukloni iz našeg sistema. 

To postižemo pomoću asinhronih webhooks preko HTTP/HTTPS.

#### Kako to koristiti

Prvo, idite na <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administraciju Webhooks</a>. Ovo možete pristupiti putem Manage Data -> Webhooks.

Odavde možete specificirati endpoint-e za svaku vrstu događaja komentara.

Za svaku vrstu događaja, obavezno kliknite na **Send Test Payload** kako biste osigurali da ste pravilno postavili integraciju. Pogledajte sledeći odeljak, "Testiranje", za detalje.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Primer postavke Webhooks" title="Primer postavke Webhooks" class="lozad" />
</div>

#### Testiranje

U <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administraciji Webhooks</a> postoje dugmadi "Send Test Payload" za svaku vrstu događaja (Kreirati, Ažurirati, Obriši). Događaji Kreirati i Ažurirati šalju dummy WebhookComment objekat, dok testiranje Obriši šalje dummy telo zahteva samo sa ID-jem.

Test će izvršiti dva poziva kako bi proverio kod odgovora za "srećne" (tačan API ključ) i "tužne" (nevažeći API ključ) scenarije.

Kada test pošalje nevažeći API ključ, trebate vratiti status kod 401 da bi test potpuno prošao. Ako ne proverite pravilno vrednost tokena, videćete grešku poput:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Neuspeh testa autentifikacije Webhooks" title="Neuspeh testa autentifikacije Webhooks" class="lozad" />
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

#### Struktura "Kreirati" događaja

Telo zahteva događaja "create" je WebhookComment objekat.

#### Struktura "Ažurirati" događaja

Telo zahteva događaja "update" je WebhookComment objekat.

#### Struktura "Obriši" događaja

Telo zahteva događaja "delete" je WebhookComment objekat, **ali samo sadrži id**.

#### Zašto koriste oba, Kreirati i Ažurirati, HTTP PUT umesto POST?

**Budući da svi naši zahteva sadrže ID**, ponavljanje istog zahteva Kreirati ili Ažurirati **ne bi trebalo da stvara nove objekte na vašoj strani**. To znači da su ovi pozivi idempotentni i da bi trebali biti PUT događaji prema HTTP specifikaciji.

#### Kako to funkcioniše

Sve promene na objektu komentara u sistemu pokreću događaj koji završava na redu. Možete pratiti ovaj red u <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administraciji Webhooks</a> u slučaju da vaš API padne. Ako zahtev za vaš API ne uspe, ponovo ćemo ga staviti u red prema rasporedu. Taj raspored je 1 minut * broj ponovljenih pokušaja. Ako poziv ne uspe jednom, pokušaće ponovo za minut. Ako ne uspe dva puta, sačekaće dva minuta, i tako dalje. 
To je kako bismo ne preopteretili vaš API ako padne zbog problema sa opterećenjem.

#### Bezbednost & API Token

U zaglavlju zahteva prosledićemo vaš <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> u parametru pod nazivom "token".

Ako pravilno ne proverite ovaj parametar, vaša integracija neće biti označena kao Verifikovana. Ovo je zaštitna mera kako bi se osiguralo da su sve integracije sa FastComments sigurne.

#### Zaključak

Nadamo se da ćete smatrati FastComments Webhook integraciju lakom za razumevanje i brzim za postavljanje.

Ako imate dodatnih pitanja, slobodno se obratite <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranici za korisničku podršku</a>.

Pozdrav!

{{/isPost}}

---