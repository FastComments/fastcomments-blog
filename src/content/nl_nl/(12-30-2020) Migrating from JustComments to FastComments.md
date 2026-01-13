---
[category:Migration]
###### [postdate]
# [postlink]Migreren Van JustComments Naar FastComments[/postlink]

{{#unless isPost}}
Lees deze post om te zien hoe je volledig kunt migreren van JustComments naar FastComments.

Het is meestal een kwestie van het kleine fragment dat ze je geven verwijderen en het vervangen door <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ons eigen fragment</a>.
Je kunt zelfs tijdelijk JustComments en FastComments op dezelfde site draaien om het uiterlijk en gevoel te testen en bij te stellen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We kunnen daarbij helpen</a>.
{{/unless}}

{{#isPost}}

Vanaf 2021 zal JustComments stoppen. Bij FastComments hebben we het je gemakkelijk gemaakt om over te stappen naar ons platform.

Je zult merken dat FastComments veel van dezelfde functies biedt waar je aan gewend bent, en meer.

## Prijsverschillen

Terwijl JustComments een op krediet gebaseerd systeem gebruikt, hanteert FastComments een gelaagd model met drie beschikbare niveaus. Met FastComments dekt ons $5/maand plan
tot 1 miljoen page loads per maand. Daarboven zijn er de Pro en Enterprise plannen, die je kunt bekijken op onze <a href="https://fastcomments.com/traffic-pricing" target="_blank">prijspagina</a>.

## Als je op WordPress zit

FastComments heeft een speciale WordPress-plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

De plugin maakt de installatie, configuratie en synchronisatie heel eenvoudig. Echter, JustComments synchroniseert je reacties niet terug in je WordPress-installatie zoals FastComments
dat doet. Dit betekent dat je na de synchronisatie de export- en importstappen hieronder moet volgen.

## Exporteer Je Bestaande Reacties

De FastComments-importeur zal je reacties, gebruikersnamen, gebruikersavatars en inline afbeeldingen migreren. We verplaatsen de afbeeldingen naadloos naar onze servers.

Om je reactiegegevens van JustComments te downloaden, ga naar je Account-pagina.

## Importeer In De FastComments Admin

Maak je geen zorgen over het openen van het resulterende bestand van JustComments.

Als je bent ingelogd, kun je <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier het bestand importeren</a>.

Selecteer JustComments in de dropdown en upload je bestand.

### Pagina Identifiers

Bij het importeren zie je de optie om Pagina URL of "Item ID" te kiezen. Als je niet zeker weet welke je moet kiezen, kies dan Pagina URL. Als je een integratie hebt met JustComments
waarbij je het Item ID in de widgetconfiguratie opgeeft, selecteer dan Item ID.

### Wacht een paar minuten

De FastComments-import is "asynchroon". Dit betekent dat het uploaden van het bestand en het verwerken daarvan afzonderlijke stappen zijn.

Dus, afhankelijk van je bestandsgrootte, kun je de succesmelding direct krijgen. Op de importpagina onderaan staat een tabel - elke rij vertegenwoordigt een importpoging.
Je kunt deze pagina veilig vernieuwen om de status van je import te zien en hoeveel rijen tot nu toe zijn geïmporteerd.

### Wanneer het klaar is

Je ontvangt een e-mail wanneer de import is voltooid - ongeacht of deze succesvol is of niet. Je kunt de pagina sluiten nadat de bestandsoverdracht is geslaagd en je je import op de Imports-pagina ziet. Het zal een status hebben zoals "Requested" en wanneer het begint, zal de status "Running" zijn.

Het is veilig om zo vaak als nodig opnieuw te importeren - als je import echter mislukt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">neem dan contact met ons op</a> zodat we kunnen helpen.

### Vervang de JustComments Code door FastComments

Als je de JustComments WordPress-plugin niet gebruikt, dan is het simpelweg een kwestie van het kleine fragment dat ze je geven verwijderen en het vervangen door <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ons eigen fragment</a>.
Je kunt zelfs tijdelijk JustComments en FastComments op dezelfde site draaien om het uiterlijk en gevoel te testen en bij te stellen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We kunnen daarbij helpen</a>.

### URL's tegelijkertijd migreren

De reacties zelf zijn standaard gekoppeld aan de "pageUrl" velden in de JustComments-export, dus zolang je URLs niet veranderen, is de switch eenvoudig. Als je URLs wilt migreren en je
reacties wilt behouden, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">laat het ons weten</a> door ons de oude en nieuwe URL's te sturen. De help-pagina staat het uploaden van kleine tekstbestanden toe, dus als
je meer dan een paar URL's migreert, maak dan een Excel-bestand aan.

## Samenvatting

1. Exporteer je gegevens
2. Importeer in FastComments
3. Als je niet op WordPress bent, vervang de JustComments JavaScript-fragment door <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

{{/isPost}}

---