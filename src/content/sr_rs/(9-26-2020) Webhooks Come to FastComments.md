---
[category:API & Development]
###### [postdate]
# [postlink]Webhooks dolaze na FastComments[/postlink]

{{#unless isPost}}
FastComments sada može pozvati vaš API za kreiranje, ažuriranje i uklanjanje komentara.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničke termine

#### Šta je novo

Sa FastComments, sada je moguće pozvati API endpoint svaki put kada se komentar doda, ažurira ili ukloni iz našeg sistema. 

To postižemo putem asinhronih webhooks preko HTTP/HTTPS.

#### Kako ga koristiti

Prvo, idite na <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administraciju Webhooks</a>. Ovo je dostupno putem Manage Data -> Webhooks.

Od tamo možete da navedete endpoint-e za svaku vrstu događaja komentara.

Za svaku vrstu događaja, budite sigurni da kliknete na **Send Test Payload** kako biste osigurali da ste ispravno postavili vašu integraciju. Pogledajte sledeći odeljak, "Testiranje", za detalje.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Primer podešavanja Webhooks" title="Primer podešavanja Webhooks" class="lozad" />
</div>

#### Testiranje

U <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administraciji Webhooks</a> postoje dugmad "Send Test Payload" za svaki
tip događaja (Kreiranje, Ažuriranje, Brisanje). Događaji Kreiranja i Ažuriranja šalju dummy WebhookComment objekat, dok testiranje Brisanja šalje dummy telo zahteva samo sa ID-jem.

Test će napraviti dva poziva kako bi proverio kod odgovora za "srećne" (ispravan API ključ) i "tužne" (neispravan API ključ) scenarije.

Kada test pošalje neispravan API ključ, trebali biste vratiti status kod 401 da bi test prošao u potpunosti. Ako ne proverite ispravno vrednost tokena, videćete grešku poput:

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

#### Struktura događaja "Kreiraj"

Telo zahteva za događaj "kreiraj" je WebhookComment objekat.

#### Struktura događaja "Ažuriraj"

Telo zahteva za događaj "ažuriraj" je WebhookComment objekat.

#### Struktura događaja "Briši"

Telo zahteva za događaj "briši" je WebhookComment objekat, **ali sadrži samo id**.

#### Zašto oba, Kreiraj i Ažuriraj koriste HTTP PUT, a ne POST?

**Pošto svi naši zahtevi sadrže ID**, ponavljanje istog zahteva za Kreiranje ili Ažuriranje **ne bi trebalo da kreira nove objekte na vašoj strani**. To znači da su ovi pozivi idempotentni i trebali bi biti
PUT događaji prema HTTP specifikaciji.

#### Kako to funkcioniše

Sve promene u objektu Komentara u sistemu aktiviraju događaj koji se završava u redu. Možete pratiti ovaj red u <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administraciji Webhooks</a> u slučaju
da vaš API padne. Ako zahtev za vaš API ne uspije, ponovo ćemo ga staviti u red po rasporedu. Taj raspored je 1 minuta * broj ponovnih pokušaja. Ako poziv ne uspe jednom, pokušaće ponovo za minut. Ako ne uspe dvaput, sačekat će dve minute, i tako dalje.
Ovo je da ne opterećujemo vaš API ukoliko padne zbog povezanih razloga.

#### Bezbednost & API Token

U zaglavlju zahteva proslijedićemo vaš <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> u parametru zvanom "token".

Ako neproverite pravilno ovaj parametar, vaša integracija neće biti označena kao Verifikovana. Ovo je zaštitna mera kako bi se osiguralo da su sve integracije sa FastComments sigurnе.

#### Zaključak

Nadamo se da će vam integracija FastComments Webhook biti jasna i brza za postavljanje.

Ako imate dodatnih pitanja, slobodno se obratite <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranici za podršku korisnicima</a>.

Pozdrav!

{{/isPost}}

---