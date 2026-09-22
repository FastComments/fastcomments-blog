[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments is nu op Zapier[/postlink]

{{#unless isPost}}
Verbind uw opmerkingen met duizenden apps met de officiële FastComments-app voor Zapier. Triggers worden geactiveerd op het moment dat een opmerking wordt geplaatst, en elke app kan opmerkingen, pagina's en gebruikers op uw site aanmaken.
{{/unless}}

{{#isPost}}

### Wat is nieuw

Er is nu een officiële FastComments-app op [Zapier](https://zapier.com). Meld u één keer aan vanuit de Zapier-editor en u kunt elke nieuwe opmerking naar Slack sturen, ze loggen in een spreadsheet, commentatoren toevoegen aan uw CRM, of opmerkingen aanmaken vanuit een formulierinzending, zonder code te schrijven.

Voorheen betekende het integreren van FastComments in een andere tool het opzetten van een eigen webhook-ontvanger of schrijven tegen de REST API. Beide werken nog steeds. De Zapier-app is voor de gevallen waarin u liever niets uitvoert.

### Triggers

Drie triggers, allemaal direct:

- **New Comment** wordt geactiveerd wanneer een opmerking wordt geplaatst. Standaard worden alleen goedgekeurde, niet-spam opmerkingen getriggerd, zodat een Zap die naar een openbaar kanaal post niet dingen lekt die nog in de moderatiewachtrij staan. Er is een selectievakje om alles op te nemen.
- **Updated Comment** wordt geactiveerd wanneer een opmerking wordt bewerkt, goedgekeurd, gestemd, vastgezet, of anderszins gewijzigd. Filter op het goedgekeurd-veld en het wordt een "goedgekeurde opmerking"-trigger.
- **Deleted Comment** wordt geactiveerd wanneer een opmerking wordt verwijderd, met de volledige opmerking voor uw administratie.

Elke trigger heeft een optionele domeinfilter die de domeinen weergeeft die op uw account zijn geconfigureerd, zodat een Zap één site uit vele kan bewaken.

De triggers worden ondersteund door webhooks, niet door polling. FastComments levert het evenement aan Zapier op het moment dat het gebeurt, er wordt niets gepolld op uw account terwijl het wacht, en wachten kost geen API‑credits.

### Acties en zoekopdrachten

Acties roepen de FastComments API namens u aan:

- **Create Comment** op elke pagina, als een benoemde commentator of een bestaande SSO‑gebruiker, eventueel als een antwoord.
- **Create Page**, zodat een pagina kan worden vermeld en beperkt tot leden‑groepen voordat de eerste opmerking verschijnt.
- **Create SSO User**, zodat leden van uw andere tools kunnen reageren onder hun eigen identiteit.
- **Create Feed Post** en **Create Hash Tag**.
- **Flag Comment** voor moderatie‑review.

Zoekopdrachten zoeken dingen op voor latere stappen: **Find Comment** op id, **Find SSO User** op e‑mail, en **Find Page** op URL‑ID. Combineer een zoekopdracht met de bijbehorende create in Zapier's "find or create"-modus en de ontbrekende gebruiker of pagina wordt voor u aangemaakt.

### Een paar Zaps om mee te beginnen

- New Comment, vervolgens Slack "Send Channel Message". Koppel de naam van de commentator, de opmerking en de pagin URL. Gebruik de domeinfilter om elke site naar zijn eigen kanaal te routeren.
- New Comment, vervolgens Google Sheets "Create Spreadsheet Row", met Deleted Comment die een rij toevoegt als een tweede Zap. Het blad wordt een audit‑trail.
- Updated Comment gefilterd op Approved is true, vervolgens Gmail "Send Email" om de auteur te laten weten dat hun opmerking live is.
- Typeform "New Response", vervolgens Create Comment op uw testimonials‑pagina met Approved uitgevinkt, zodat u elke opmerking beoordeelt voordat deze verschijnt.
- WordPress "New Post", vervolgens Create Page, zodat elke post wordt geregistreerd vóór de eerste opmerking.

[De gids](https://docs.fastcomments.com/guide-installation-zapier.html) bevat meer, inclusief een workflow voor het provisionen van SSO‑gebruikers vanuit uw lidmaatschapstool.

### Hoe het verbindt

De app gebruikt OAuth. Wanneer u een FastComments‑stap toevoegt, vraagt Zapier om uw regio (United States of EU), stuurt u naar FastComments om in te loggen, en toont een toestemmingspagina die de applicatie, het account waarmee het verbinding maakt, en de gevraagde rechten benoemt. Er wordt geen API‑sleutel naar Zapier gekopieerd.

De persoon die de verbinding goedkeurt moet een API‑admin zijn op het account. Account‑eigenaren hebben dit al en kunnen het toekennen aan andere teamleden op de pagina Gebruikers.

Elke verbinding verschijnt onder **Integrate, then Connected Apps** in uw dashboard, gemarkeerd als een officiële integratie, met wanneer deze voor het laatst is gebruikt. Het intrekken daarvan verbreekt Zapier onmiddellijk. Een Zap inschakelen maakt een webhook‑abonnement aan dat u kunt zien op de Webhooks‑pagina met de bron **API**, en een Zap uitschakelen verwijdert het.

### het kost

De app is gratis op elk Zapier‑plan, inclusief het gratis plan, en FastComments brengt er geen extra kosten voor in rekening. Triggers verbruiken geen API‑credits. Acties en zoekopdrachten verbruiken dezelfde credits als een oproep vanuit uw eigen code, meestal één per oproep.

### Documentatie

[De Zapier‑gids](https://docs.fastcomments.com/guide-installation-zapier.html) behandelt het verbinden van een account, elke trigger en actie met de bijbehorende velden, voorbeeld‑Zaps, en probleemoplossing. De integratie zelf is open source op [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier).

### Conclusie

Open [fastcomments.com/zapier](https://fastcomments.com/zapier) om de app te vinden, uw account te verbinden, en uw eerste Zap te bouwen.

Zoals altijd, laat ons hieronder weten als u ergens tegenaan loopt.

Proost!

{{/isPost}}

---