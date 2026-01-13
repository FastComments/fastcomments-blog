---
[category:Migration]
###### [postdate]
# [postlink]Migreren van Muut Comments naar FastComments[/postlink]

{{#unless isPost}}
Lees deze post om te zien hoe je volledig migreert van Muut naar FastComments.

Het is simpelweg een kwestie van het verwijderen van het kleine snippet dat Muut je geeft en dit te vervangen door <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">onze eigen</a>.
Je kunt zelfs tijdelijk Muut en FastComments op dezelfde site draaien om de look en feel te testen en aan te passen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We kunnen daarbij helpen</a>.
{{/unless}}

{{#isPost}}
### Exporteer je bestaande opmerkingen

De FastComments-importeur zal je opmerkingen, gebruikersnamen, gebruikersavatars en inline-afbeeldingen migreren. We verplaatsen de afbeeldingen naadloos naar onze servers.

Om de Comment- en Gebruikersgegevens van je site vanuit Muut te exporteren, ga je vanuit hun Admin-dashboard naar Integraties en dan naar JSON Export.

Je zult opmerken dat het resulterende bestand dat je via e-mail ontvangt een mysterieuze "gz" bestandsextensie heeft. Als je een beetje technisch onderlegd bent, weet je misschien dat dit staat voor "gzip" en een populaire en efficiënte manier is om bestanden te comprimeren.

### Open het "gz" bestand niet

Een standaard Windows 10-installatie kan het bestand van Muut niet openen. Dat is prima, want je hoeft dat niet met FastComments. Ons backend begrijpt dit gecomprimeerde bestand.

Daarna, als je bent ingelogd, kun je <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier naartoe gaan om het bestand te importeren</a>. Selecteer Muut in de dropdown en upload je bestand.

Je moet de URL van je website invoeren. Dit komt omdat Muut ons die informatie niet geeft in de export.

### Wacht een paar minuten

De FastComments-import is "asynchroon". Dit betekent dat het uploaden van het bestand en het verwerken ervan aparte stappen zijn.

Afhankelijk van de bestandsgrootte kun je de successmelding direct ontvangen. Op de importpagina staat onderaan een tabel - elke rij vertegenwoordigt een importpoging.
Je kunt deze pagina veilig verversen om de status van je import te zien en hoeveel rijen tot nu toe zijn geïmporteerd.

### Wanneer het klaar is

Je ontvangt een e-mail wanneer de import is voltooid - of het nu succesvol was of niet. Je kunt de pagina sluiten nadat de bestandsoverdracht is gelukt en je je import op de Imports-pagina ziet. Het zal een status hebben zoals "Requested" en wanneer het begint, zal de status "Running" zijn.

Het is veilig om zo vaak opnieuw te importeren als nodig - echter, als je import mislukt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">neem contact met ons op</a> zodat we kunnen helpen.

### Vervang de Muut-code door FastComments

Het is simpelweg een kwestie van het verwijderen van het kleine snippet dat Muut je geeft en dit te vervangen door <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">onze eigen</a>.
Je kunt zelfs tijdelijk Muut en FastComments op dezelfde site draaien om de look en feel te testen en aan te passen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We kunnen daarbij helpen</a>.

### URL's gelijktijdig migreren

De opmerkingen zelf zijn verbonden met de "link" velden in de Muut-export, dus zolang je URL's niet veranderen, is de overstap eenvoudig. Als je URL's wilt migreren en je
opmerkingen wilt behouden, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">laat het ons weten</a> door ons de oude en nieuwe URL's te sturen. De help-pagina staat het uploaden van kleine tekstbestanden toe, dus als
je meer dan een paar URL's migreert, maak dan een Excel-bestand.

### Samenvatting

1. Exporteer je gegevens
2. Importeer in FastComments
3. Wissel het Muut JavaScript snippet om met <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Waarom stuurt Muut mijn bestand niet?
Voor grotere sites kan Muut mogelijk het geëxporteerde bestand niet maken vanwege technische beperkingen aan hun kant. We hebben de mogelijkheid om je bestaande site te scrapen en de opmerkingen ervan af te halen, maar dit kan vrij maatwerk zijn en vanwege de tijd die ermee gemoeid is, vereist het dat je het Support-pakket hebt. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Je kunt hier hulp vragen</a>.
{{/isPost}}

---