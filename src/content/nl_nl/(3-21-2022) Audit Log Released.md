---
[category:Security]

###### [postdate]
# [postlink]Audit Log Vrijgegeven[/postlink]

{{#unless isPost}}FastComments biedt nu een gedetailleerd logboek van alle wijzigingen die via het platform zijn aangebracht.{{/unless}}

{{#isPost}}

### Wat is er nieuw

Sinds maart bevat FastComments nu gedetailleerde auditing met het Pro-plan, en voor alle bestaande zakelijke klanten.

Alle administratieve acties, of het nu gaat om gegevensaccess, het wijzigen van een commentaar, of het opheffen van een ban voor een gebruiker, worden gevolgd en geïndexeerd in het auditlogboek.

### Hoe te gebruiken

Het Audit Log is toegankelijk door naar `Beheer Gegevens` te gaan en dan `Audit Logs`. Een directe link is [hier](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Om te beginnen, zie je een pagina zoals de volgende:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Audit Log" />
</div>

Van hieruit kun je zoeken op gebruikersnaam, ip-adres, type actie, of de bron.

Bijvoorbeeld, filteren op bron:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Audit Log Resource Selection" />
</div>

We kunnen ook in de details van een invoer in het auditlogboek duiken, en zelfs het gerelateerde object zien dat is gewijzigd.

Bijvoorbeeld, we kunnen in een invoer voor het ban van een gebruiker duiken:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Audit Log Entry Details" />
</div>

Hier kunnen we zien wie de gebruiker heeft geband (een gebruiker met de gebruikersnaam `winrid`). We kunnen zien dat het een permanente ban is, en we hebben ook de gebruikers-id en e-mail geband, samen met de tekst waarvoor ze zijn verbannen.

We kunnen het IP zien dat de ban heeft aangemaakt, maar het IP van de oorspronkelijke commentator is opzettelijk weggelaten voor hun privacy.

Om alle gebeurtenissen van `winrid` te zien, kunnen we eenvoudig op het filterpictogram aan de rechterkant klikken, naast hun gebruikersnaam.

### Toegang Beperken

Gegevens in het auditlogboek kunnen alleen worden geopend door gebruikers met de toestemming `Beheer Gegevens`.

### Bewaartermijn

Alle invoeren in het auditlogboek worden gedurende twee jaar bewaard. Het auditlogboek wordt echter gewist wanneer je account wordt verwijderd.

### API-toegang

[Documentatie voor de Audit Log API is hier.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Je zult ontdekken dat het auditlogboek op een paar verschillende manieren kan worden gesorteerd en gepagineerd, afhankelijk van jouw gebruiksdoel.

### Bestaande Klanten

Als je op het Pro- of gelijkwaardige plan zit, zul je zien dat het auditlogboek automatisch is ingeschakeld! Als je toegang wilt krijgen, neem dan contact op met je supportvertegenwoordiger.

### Wat is weggelaten

Het enige type wijzigingen dat is weggelaten, zijn daadwerkelijke comments en hun stemmen. Dit komt omdat we hebben ontdekt dat onze klanten voornamelijk geïnteresseerd zijn in de administratieve kant bij het auditen, en niet noodzakelijk geïnteresseerd zijn in het auditen van wat mensen commentariëren. Deze soorten acties voegen ook aanzienlijke ruis aan het logboek toe.

Als dit echter een vereiste is, neem dan contact op, en we kunnen bespreken of we dit voor je kunnen inschakelen.

### Conclusie

We hopen dat je deze functie van ons aanbod nuttig vindt, de gebruikersinterface gemakkelijk te gebruiken is, en de API snel is. 

Proost!

{{/isPost}}