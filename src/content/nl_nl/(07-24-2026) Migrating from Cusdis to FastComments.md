[category:Migration]
###### [postdate]
# [postlink]Migrating From Cusdis To FastComments[/postlink]

{{#unless isPost}}
Lees dit bericht om te zien hoe je volledig migreert van Cusdis naar FastComments, inclusief je threads, moderatiestatus en pagin URLs.
{{/unless}}

{{#isPost}}

Cusdis is een lichtgewicht, open‑source commentaarsysteem. Als je er uitgroeit en functies wilt zoals spamfiltering, stemmen, reacties, meldingen, SSO en een volledig moderatiedashboard, importeert FastComments nu direct je Cusdis‑gegevens.

## Export Your Existing Comments

Vraag vanuit je Cusdis‑dashboard een volledige data‑export aan. Cusdis levert één JSON‑bestand met je projecten, pagina’s en elke opmerking, inclusief hun threads en goedkeuringsstatus. Afhankelijk van je Cusdis‑instelling wordt de export naar je e‑mail gestuurd of direct gedownload.

Er is niets te bewerken of uit te pakken. Houd het “.json”‑bestand ongewijzigd; onze backend leest het direct.

## Import Into FastComments

Zodra je bent ingelogd, ga <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier om het bestand te importeren</a>. Selecteer **Cusdis (.json)** in het dropdown‑menu en upload je bestand.

### Wait a few minutes

De FastComments‑import is “asynchronous”. Het uploaden van het bestand en het verwerken ervan zijn aparte stappen. Bij een klein bestand verschijnt het succesbericht meteen. Onderaan de importpagina staat een tabel; elke rij is een importpoging. Ververs de pagina om de status en het aantal geïmporteerde opmerkingen tot nu toe te zien.

### When it's done

Je ontvangt een e‑mail wanneer de import is voltooid, of deze nu slaagt of niet. Het is veilig de pagina te sluiten nadat de upload is geslaagd en je je import ziet staan met de status “Requested” of “Running”.

Her‑importeren is veilig. FastComments koppelt elke opmerking aan zijn oorspronkelijke Cusdis‑id, dus een tweede import werkt je bestaande opmerkingen bij in plaats van duplicaten te maken. Als een import mislukt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">neem contact met ons op</a> en we helpen je.

## What is Imported

- **Threaded replies.** Cusdis nestelt antwoorden meerdere niveaus diep, en FastComments bouwt de volledige ouder‑ en kindstructuur opnieuw op.
- **Moderation status.** Goedgekeurde opmerkingen blijven goedgekeurd. Opmerkingen die nog op goedkeuring wachten, komen in je FastComments‑moderatie‑wachtrij zodat je ze kunt beoordelen.
- **Authors.** De naam en e‑mail van elke commentator worden overgenomen, en geregistreerde FastComments‑gebruikers worden per e‑mail gekoppeld.
- **Formatting.** Cusdis‑opmerkingen zijn geschreven in Markdown. FastComments rendert dezelfde Markdown, inclusief links, afbeeldingen en regeleinden, zodat je threads er precies zo uitzien als voorheen.

Opmerkingen die in Cusdis zijn verwijderd, blijven achter, zodat je geïmporteerde threads schoon blijven.

## Replace the Cusdis Widget

Zodra je gegevens zijn overgezet, verwijder je het kleine Cusdis‑fragment van je site en plaats je <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">de onze</a>. Je kunt een tijdje Cusdis en FastComments naast elkaar draaien om eerst het uiterlijk en gevoel te testen. We ondersteunen veel front‑end‑frameworks, die <a href="https://fastcomments.com/install-wizard" target="_blank">je hier kunt vinden</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We kunnen daarbij helpen</a>.

### Migrating URLs at the same time

Cusdis koppelt elke opmerking aan de URL van de pagina, dus zolang je URLs niet veranderen is de overstap eenvoudig. Als je URLs ook veranderen, importeer dan eerst je Cusdis‑data en gebruik vervolgens het ingebouwde <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a>-gereedschap onder Manage Data om je opmerkingen naar de nieuwe locaties te verplaatsen. Je kunt een heel domein, een volledige URL of een URL‑ID invoeren voor zowel de oude als de nieuwe locatie, zodat één “from”‑ en “to”‑paar alle overeenkomende pagina’s in één keer verplaatst. Het draait als een achtergrondtaak en stuurt je een e‑mail wanneer het klaar is.

Als je liever dat wij het doen (bij veel pagina’s), <a href="https://fastcomments.com/auth/my-account/help" target="_blank">laat het ons weten</a> de oude en nieuwe URLs.

## EU

Als je in de EU bent, wil je waarschijnlijk je account aanmaken op <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> zodat je klantgegevens in de EU blijven.

## Recap

1. Exporteer je data van Cusdis als JSON
2. Upload het op de FastComments‑importpagina en selecteer **Cusdis (.json)**
3. Vervang het Cusdis‑fragment door <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

{{/isPost}}

---