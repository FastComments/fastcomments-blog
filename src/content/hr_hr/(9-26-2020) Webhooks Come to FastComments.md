---
[category:API & Development]
###### [postdate]
# [postlink]Webhooks dolaze na FastComments[/postlink]

{{#unless isPost}}
FastComments sada može pozvati vašu API za kreiranje, ažuriranje i uklanjanje komentara.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničke pojmove

#### Što je novo

S FastComments sada je moguće pozvati API endpoint svaki put kada se komentar doda, ažurira ili ukloni iz našeg sustava.

To ostvarujemo putem asinkronih webhooks preko HTTP/HTTPS.

#### Kako to koristiti

Prvo, idite na <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks administrator</a>. Ovo možete pronaći putem Manage Data -> Webhooks.

Od tamo možete odrediti endpointove za svaku vrstu komentarnog događaja.

Za svaku vrstu događaja, obavezno kliknite na **Send Test Payload** kako biste osigurali da ste ispravno postavili svoju integraciju. Pogledajte sljedeći odjeljak, "Testiranje", za detalje.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Primjer postavke Webhook-a" title="Primjer postavke Webhook-a" class="lozad" />
</div>

#### Testiranje

U <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks administrator</a> nalaze se "Send Test Payload" gumbi za svaki
tip događaja (Kreiraj, Ažuriraj, Izbriši). Događaji Kreiraj i Ažuriraj šalju dummy WebhookComment objekt, dok testiranje Izbriši šalje dummy tijelo zahtjeva s samo jednim ID-om.

Test će izvršiti dva poziva kako bi provjerio kod odgovora za "sretne" (ispravan API ključ) i "tužne" (neispravan API ključ) scenarije.

Kada test pošalje neispravan API ključ, trebali biste vratiti status kod 401 kako bi test potpuno prošao. Ako ne provjerite ispravno vrijednost tokena, vidjet ćete grešku poput:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Neuspjeh Webhooks autentifikacijskog testa" title="Neuspjeh Webhooks autentifikacijskog testa" class="lozad" />
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

#### Struktura događaja "Kreirati"

Tijelo zahtjeva za događaj "kreirati" je WebhookComment objekt.

#### Struktura događaja "Ažurirati"

Tijelo zahtjeva za događaj "ažurirati" je WebhookComment objekt.

#### Struktura događaja "Izbrisati"

Tijelo zahtjeva za događaj "izbrisati" je WebhookComment objekt, **ali samo s id-om**.

#### Zašto obje, Kreirati i Ažurirati koriste HTTP PUT, a ne POST?

**Budući da svi naši zahtjevi sadrže ID**, ponavljanje istog zahtjeva za Kreiranje ili Ažuriranje **ne bi trebalo stvarati nove objekte na vašoj strani**. To znači da su ti pozivi idempotentni i trebaju biti
PUT događaji prema HTTP specifikaciji.

#### Kako to funkcionira

Sve promjene u objektu komentara u sustavu pokreću događaj koji završava na redu. Možete pratiti ovaj red u <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks administrator</a> u slučaju
da vaša API usluga prestane raditi. Ako zahtjev prema vašem API-u ne uspije, ponovo ćemo ga staviti na red prema rasporedu. Taj raspored je 1 minuta * broj ponovnih pokušaja. Ako poziv ne uspije jednom, pokušat će ponovno za minutu. Ako ne uspije dvaput, čekat će onda dvije minute, i tako dalje.
To je kako bismo preopteretili vaš API ako zbog opterećenja prestaje raditi.

#### Sigurnost & API Token

U zaglavlju zahtjeva poslati ćemo vaš <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> u parametru zvanom "token".

Ako ne provjerite ispravno ovaj parametar, vaša integracija neće biti označena kao Verified. Ovo je zaštita kako bi se osiguralo da su sve integracije s FastComments sigurne.

#### Na kraju

Nadamo se da ćete lako razumjeti FastComments Webhook integraciju i da će vam brzo biti postavljena.

Ako imate daljnjih pitanja, slobodno se obratite <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranici za korisničku podršku</a>.

Živjeli!

{{/isPost}}

---