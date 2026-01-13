---
[category:API & Development]
###### [postdate]
# [postlink]Webhooks komen naar FastComments[/postlink]

{{#unless isPost}}
FastComments kan nu uw API aanroepen voor het aanmaken, bijwerken en verwijderen van opmerkingen.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Jargon

#### Wat is Nieuw

Met FastComments is het nu mogelijk om een API-eindpunt aan te roepen wanneer een opmerking wordt toegevoegd, bijgewerkt of verwijderd uit ons systeem. 

We bereiken dit met asynchrone webhooks via HTTP/HTTPS.

#### Hoe Te Gebruiken

Navigeer eerst naar de <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks administratie</a>. Dit is toegankelijk via Gegevens Beheren -> Webhooks.

Van daaruit kunt u eindpunten specificeren voor elk type commentaargebeurtenis.

Voor elk type gebeurtenis moet u op **Verzend Test Payload** klikken om ervoor te zorgen dat u uw integratie correct hebt ingesteld. Zie de volgende sectie, "Testen", voor details.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Voorbeeld Webhooks Setup" title="Voorbeeld Webhooks Setup" class="lozad" />
</div>

#### Testen

In de <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks administratie</a> zijn er "Verzend Test Payload" knoppen voor elk
type gebeurtenis (Aanmaken, Bijwerken, Verwijderen). De Aanmaak- en Bijwerkgebeurtenissen sturen een dummy WebhookComment-object, terwijl het testen van Verwijderen een dummy-verzoeklichaam met alleen een ID zal verzenden.

De test zal twee oproepen doen om de antwoordcode voor "blij" (juiste API-sleutel) en "verdrietig" (ongeldige API-sleutel) scenario's te verifiëren.

Wanneer de test een ongeldige API-sleutel verzendt, moet u een statuscode van 401 retourneren om de test volledig te laten slagen. Als u de waarde van de token niet correct controleert, ziet u een fout zoals:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Webhooks Authentificatietest Mislukt" title="Webhooks Authentificatietest Mislukt" class="lozad" />
</div>

#### De Commentaarobjectstructuur
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

#### De "Aanmaken" Gebeurtenisstructuur

De "aanmaken" gebeurtenis verzoeklichaam is een WebhookComment-object.

#### De "Bijwerken" Gebeurtenisstructuur

De "bijwerken" gebeurtenis verzoeklichaam is een WebhookComment-object.

#### De "Verwijderen" Gebeurtenisstructuur

De "verwijderen" gebeurtenis verzoeklichaam is een WebhookComment-object, **maar bevat alleen de id**.

#### Waarom gebruiken Aanmaak en Bijwerken beide HTTP PUT en niet POST?

**Aangezien al onze verzoeken een ID bevatten**, zou het herhalen van hetzelfde Aanmaak- of Bijwerkverzoek **geen nieuwe objecten aan uw kant moeten creëren**. Dit betekent dat deze oproepen idempotent zijn en als PUT-evenementen moeten worden behandeld volgens de HTTP-specificatie.

#### Hoe Het Werkt

Alle wijzigingen aan het Commentaarobject in het systeem starten een gebeurtenis die op een wachtrij terechtkomt. U kunt deze wachtrij monitoren in de <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks administratie</a> voor het geval uw API uitvalt. Als een verzoek aan uw API mislukt, zullen we het opnieuw in de wachtrij plaatsen volgens een schema. Dat schema is 1 minuut * het herhalingsaantal. Als de oproep eenmaal mislukt, probeert hij het opnieuw over een minuut. Als het twee keer mislukt, wacht het vervolgens twee minuten, en zo verder.
Dit is zodat we uw API niet overbelasten als u om gerelateerde redenen uitvalt.

#### Beveiliging & API-token

In de verzoekheader verzenden we uw <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> in de parameter genaamd "token".

Als u deze parameter niet goed controleert, wordt uw integratie niet gemarkeerd als Geverifieerd. Dit is een beveiligingsmaatregel om ervoor te zorgen dat alle integraties met FastComments veilig zijn.

#### Conclusie

We hopen dat u de FastComments Webhook-integratie eenvoudig te begrijpen en snel in te stellen vindt.

Als u verdere vragen heeft, aarzel dan niet om contact op te nemen met de <a href="https://fastcomments.com/auth/my-account/help" target="_blank">klantenservicepagina</a>.

Proost!

{{/isPost}}

---