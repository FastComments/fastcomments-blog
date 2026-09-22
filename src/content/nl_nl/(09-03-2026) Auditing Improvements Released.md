[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Verbeteringen in Auditing uitgebracht[/postlink]

{{#unless isPost}}
The audit log now shows who or what each event affected by name, and you can search on it. There's also now date range, sub-tenant search, field-level diffs on updates, and matching API filters.
{{/unless}}

{{#isPost}}

### Wat is er nieuw

Het auditlogboek heeft altijd geregistreerd wie een actie heeft uitgevoerd en waarop deze werd uitgevoerd. Deze release draait om het leesbaar en doorzoekbaar maken van dat record zonder de pagina te verlaten.

Als je wilde weten wat er met een specifieke moderator was gebeurd, moest je eerst hun ID vinden, en als die moderator inmiddels was verwijderd, was er niets meer om het ID tegen op te zoeken. Het evenement gaf aan dat er iets was verwijderd, door wie, en wanneer, maar om een of andere reasoures ontbraken de namen.

Nu wordt de naam vastgelegd naast het ID op het moment van het evenement, zodat deze de verwijdering overleeft en je ernaar kunt zoeken.

### De Affected-kolom

Er is een nieuwe **Affected**-kolom in de tabel die de persoon of het object toont waarop het evenement van invloed was, per naam. Voor een persoon wordt dit weergegeven als `jsmith (jsmith@example.com)`. Voor een widget-aanpassing of een moderatiegroep is het de naam die je eraan hebt gegeven. Voor een mediabestand is het de bestandsnaam die je hebt geüpload.

Boven de tabel staat een bijpassend zoekvak, **Who or what was changed**. Typ een naam, een e-mailadres of een ID, en het vindt evenementen die die persoon of dat object beïnvloeden. Je hoeft niet te weten welke van de drie je hebt, en je hoeft niet eerst een interne ID op te zoeken.

Evenementen die vóór deze release zijn geschreven hebben geen naam gekoppeld, maar ze hebben nog steeds het ID dat ze altijd hadden, dus hetzelfde zoekvak vindt ze op ID.

### Datumbereik

De filterrij heeft nu een **Date Range**-dropdown met Laatste 30 dagen, Laatste 90 dagen, Laatste jaar, Alle tijd, en **Custom range**, die de datumkiezers Van en Tot onthult.

Een datumbereik is verreweg de gemakkelijkste manier om een zoekopdracht te verfijnen, en het combineren daarvan met de andere filters is de snelste manier om iets te vinden.

### Beheerde accounts

Als je account andere tenants beheert, is er een **Include sub-tenants**-checkbox. Als je deze aanvinkt, wordt er in één keer gezocht in je account en alle tenants die het beheert, met een **Tenant**-kolom die aangeeft van welk account elk evenement afkomstig is.

Tot nu toe kon het logboek van elke tenant alleen afzonderlijk worden gelezen, dus het beantwoorden van “heeft iemand deze week een van onze eigendommen aangeraakt” betekende dat je één voor één in elke tenant moest schakelen.

### Updates registreren nu wat er is veranderd

Het bewerken van een teamlid registreerde vroeger de resulterende set permissies. Dat vertelt je welke permissies nu gelden, maar niet welke dat eerder waren, dus “wie heeft de factureringsrechten van deze persoon verwijderd, en wanneer” was niet beantwoordbaar.

Update‑evenementen bevatten nu een `changes`‑map met alleen de velden die daadwerkelijk zijn gewijzigd, elk met de vorige en nieuwe waarde. Ongewijzigde velden worden weggelaten, zodat een permissiewijziging als één regel wordt weergegeven in plaats van een muur van booleans.

### Beschrijvingen, en het apparaat achter een wijziging

Destructieve evenementen bevatten nu een eenvoudige zin die beschrijft wat er is gebeurd, zoals “Removed user from account.” Paginaweergaven hadden beschrijvingen en deletes deden dat niet, wat omgekeerd was.

Evenementen die iets wijzigen registreren ook de browser die de wijziging heeft aangebracht. Sessies worden opgeslagen als een hash zodat de acties van één persoon kunnen worden gecorreleerd zonder dat het logboek iets opslaat dat kan worden afgespeeld.

### Andere verbeteringen

- Enkele correcties met paginering en filtercombinaties.
- Login‑evenementen toonden een lege **Who**-kolom. De gebruikersnaam stond de hele tijd in het record, maar de pagina las deze niet.
- De actiekolom weergaf login‑evenementen als N/A, omdat Login ontbrak in de lijst met actienamen.
- Audit‑logpagina's konden SSO‑gebruikers niet benoemen en toonden “Missing User”. Deze worden nu correct weergegeven.
- De pagina is veel sneller bij accounts met een lange geschiedenis.

### Voor de API

De `/api/v1/audit-logs`‑endpoint heeft overeenkomende filters gekregen: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` voor de substring‑zoekopdracht, en `includeManagedTenants`. Antwoorden bevatten nu `targetId`, `targetLabel` en `ua`.

Twee wijzigingen die het vermelding waard zijn als je deze endpoint al aanroept. `before` werkt nu zelfstandig, terwijl het voorheen werd genegeerd tenzij je ook `after` doorgeeft. En `limit` is nu begrensd tot 10k, terwijl er voorheen geen limiet was. De standaardwaarde blijft ongewijzigd op 1k.

### Documentatie

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">De AuditLogs API-gids</a> behandelt de nieuwe query‑parameters, en <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">de AuditLog-structuurreferentie</a> behandelt de nieuwe velden.

Als je het auditlogboek nog niet eerder hebt gebruikt, [de oorspronkelijke release‑post](/(3-21-2022)-audit-log-released.html) loopt door waar het zich bevindt, wie het kan lezen, en hoe lang vermeldingen worden bewaard. Al dat alles is ongewijzigd.

### Conclusie

We zijn blij dat we FastComments blijven verbeteren.
Als je iets in je log zoekt en het niet kunt vinden, laat het ons dan hieronder weten.

Proost!

{{/isPost}}

---