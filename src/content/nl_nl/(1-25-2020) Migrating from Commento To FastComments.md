---
[category:Migration]
###### [postdate]
# [postlink]Migreren Van Commento Naar FastComments[/postlink]

{{#unless isPost}}
Lees deze post om te zien hoe je volledig kunt migreren van Commento naar FastComments.

## Problemen

Commento geeft ons geen volledige URL's. Wat ze bieden is alleen de domeinnaam waartoe een opmerkingenreeks behoort - zoals "fastcomments.com/some-page".
Dit betekent dat de FastComments importeur moet aannemen wat het protocol is, en het standaard is https. Als je de import uitvoert en je ziet je gegevens niet,
wil je misschien controleren of je site goed beveiligd is.
{{/unless}}

{{#isPost}}
### Exporteer Je Bestaande Opmerkingen

Om de Comment- en Gebruikersgegevens van je site van Commento te exporteren, ga je vanuit hun Admin-dashboard naar Algemeen en vervolgens naar Gegevens Exporteren.

Je zult opmerken dat het resulterende bestand dat je per e-mail ontvangt een mysterieuze "gz" bestandsextensie heeft. Als je technisch onderlegd bent, weet je misschien dat dit staat voor "gzip" en een populaire en efficiënte manier is om bestanden te comprimeren.

### Open het "gz" bestand niet

Een standaard Windows 10-installatie kan het bestand van Commento niet openen. Dat is prima, want dat hoeft niet met FastComments. Onze backend begrijpt dit gecomprimeerde bestand.

Daarna, als je bent ingelogd, kun je <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hiernaartoe gaan om het bestand te importeren</a>. Selecteer Commento in de dropdown en upload je bestand.

### Wacht een paar minuten

De FastComments import is "asynchroon". Dit betekent dat het uploaden van het bestand en het verwerken daarvan aparte stappen zijn.

Dus, afhankelijk van je bestandsgrootte, kun je de succesmelding direct ontvangen. Op de importpagina onderaan is er een tabel - elke rij vertegenwoordigt een importpoging.
Je kunt deze pagina veilig vernieuwen om de status van je import te zien en hoeveel rijen tot nu toe zijn geïmporteerd.

### Wanneer het klaar is

Je ontvangt een e-mail wanneer de import is voltooid - of deze nu succesvol is of niet. Je kunt de pagina sluiten nadat de bestanduploader succesvol is en je je import ziet op de Imports-pagina. Het zal een status hebben zoals "Aangevraagd" en wanneer het begint, is de status "Bezig".

Het is veilig om zoveel keer te re-importeren als nodig is - als je import echter mislukt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">neem contact met ons op</a> zodat we kunnen helpen.

### Vervang de Commento Code met FastComments

Het is simpelweg een kwestie van het verwijderen van de kleine snippet die Commento je geeft en deze te vervangen door <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">onze eigen</a>.
Je kunt zelfs Commento en FastComments tijdelijk op dezelfde site draaien om de look en feel te testen en aan te passen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We kunnen daarbij helpen</a>.

### Migreren van URL's tegelijk

De opmerkingen zelf zijn gekoppeld aan de "link" velden in de Commento-export, dus zolang je URL's niet veranderen, is de switch eenvoudig. Als je URL's wilt migreren en je opmerkingen wilt behouden, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">laat het ons weten</a> door ons de oude en nieuwe URL's te sturen. De help-pagina maakt het mogelijk om kleine tekstbestanden te uploaden, dus als je meer dan een paar URL's migreert, maak dan een Excel-sheet.

### Samenvatting

1. Exporteer je gegevens
2. Importeer in FastComments
3. Vervang de Commento JavaScript-snippet met <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Problemen

Commento geeft ons geen volledige URL's. Wat ze bieden is alleen de domeinnaam waartoe een opmerkingenreeks behoort - zoals "fastcomments.com/some-page".
Dit betekent dat de FastComments importeur moet aannemen wat het protocol is, en het standaard is https. Als je de import uitvoert en je ziet je gegevens niet,
wil je misschien controleren of je site goed beveiligd is.

## Waarom Stuurt Commento Mijn Bestand Niet?
Voor grotere sites kan Commento mogelijk het geëxporteerde bestand niet aanmaken vanwege technische beperkingen aan hun kant. We hebben de mogelijkheid om je bestaande site te scrapen en de opmerkingen ervan te halen, echter dit kan vrij maatwerk zijn en vanwege de tijd die dit in beslag neemt, moet je het Ondersteuningspakket hebben. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Je kunt hier om hulp vragen</a>.
{{/isPost}}

---