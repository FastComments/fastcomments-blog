---
[category:API & Development]
###### [postdate]
# [postlink]Webhooks prihajajo v FastComments[/postlink]

{{#unless isPost}}
FastComments lahko zdaj pokliče vaš API za ustvarjanje, posodabljanje in odstranjevanje komentarjev.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnično terminologijo

#### Kaj je novega

Z FastComments je zdaj mogoče poklicati API končno točko, kadarkoli se komentar doda, posodobi ali odstrani iz našega sistema.

To dosežemo z asinhronimi webhooki preko HTTP/HTTPS.

#### Kako to uporabljati

Najprej se pomaknite do <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administratorja Webhookov</a>. To lahko dostopate preko Upravljanje podatkov -> Webhooki.

Od tam lahko določite končne točke za vsako vrsto dogodka komentarja.

Za vsako vrsto dogodka se prepričajte, da kliknete **Pošlji testno nakladanje**, da se prepričate, da ste pravilno nastavili integracijo. Za podrobnosti glejte naslednji razdelek "Testiranje".

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Primer nastavitev Webhookov" title="Primer nastavitev Webhookov" class="lozad" />
</div>

#### Testiranje

V <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administratorju Webhookov</a> so gumbi "Pošlji testno nakladanje" za vsak
tip dogodka (Ustvari, Posodobi, Izbriši). Ustvari in Posodobi dogodki pošljejo dummy objekt WebhookComment, medtem ko testiranje Izbriši pošlje dummy telo zahteve z le ID-jem.

Test bo izvedel dva klica za preverjanje kode odgovora za "srečno" (pravilna API Ključ) in "žalostno" (neveljavna API ključ) scenarije.

Ko test pošlje neveljaven API ključ, bi morali vrniti statusno kodo 401, da test popolnoma uspe. Če pravilno ne preverite vrednosti žetona, boste
videli napako, kot je:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Napaka pri avtentikaciji Webhookov" title="Napaka pri avtentikaciji Webhookov" class="lozad" />
</div>

#### Struktura objekta komentarja
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

#### Struktura dogodka "Ustvari"

Telo zahteve za dogodek "ustvari" je objekt WebhookComment.

#### Struktura dogodka "Posodobi"

Telo zahteve za dogodek "posodobi" je objekt WebhookComment.

#### Struktura dogodka "Izbriši"

Telo zahteve za dogodek "izbriši" je objekt WebhookComment, **vendar vsebuje le id**.

#### Zakaj oba, Ustvari in Posodobi, uporabljata HTTP PUT in ne POST?

**Ker vse naše zahteve vsebujejo ID**, ponavljanje iste zahteve Ustvari ali Posodobi **ne bi smelo ustvariti novih objektov na vaši strani**. To pomeni, da so ti klici idempotentni in bi morali biti
PUT dogodki v skladu s specifikacijo HTTP.

#### Kako deluje

Vse spremembe objekta Komentar v sistemu sprožijo dogodek, ki konča na vrsti. To vrsto lahko spremljate v <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administratorju Webhookov</a>, v primeru
da vaš API preneha delovati. Če zahteva vašemu API-ju ne uspe, jo bomo ponovno vrnili v načrt. Ta načrt je 1 minuta * število poskusov. Če klic ne uspe enkrat, bo poskusil znova čez minuto. Če ne uspe dvakrat, bo nato čakal dve minuti in tako naprej.
To je, da ne obremenjujemo vašega API-ja, če preneša delovati iz povezanih razlogov.

#### Varnost in API žeton

V glavi zahteve bomo poslali vaš <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> v parametru imenovanem "token".

Če tega parametra ne preverite pravilno, vaša integracija ne bo označena kot preverjena. To je zaščitna ovira, da zagotovimo, da so vse integracije s FastComments varne.

#### Na koncu

Upamo, da boste integracijo FastComments Webhook enostavno razumeli in hitro nastavili.

Če imate dodatna vprašanja, se obrnite na <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stran za podporo strankam</a>.

Na zdravje!

{{/isPost}}

---