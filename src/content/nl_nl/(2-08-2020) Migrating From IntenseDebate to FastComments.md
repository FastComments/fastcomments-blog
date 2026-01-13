---
[category:Migration]

###### [postdate]
# [postlink]Migreren Van IntenseDebate Naar FastComments[/postlink]

{{#unless isPost}}
Lees dit bericht om te laten zien hoe je volledig kunt migreren van IntenseDebate naar FastComments.
{{/unless}}

{{#isPost}}
## Als Je Op WordPress Bent

FastComments heeft een speciale WordPress-plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

De plugin maakt de installatie, configuratie en synchronisatie heel eenvoudig. Als je deze route volgt, kun je de rest van de instructies hier negeren.

## Handmatige, Generieke Installatie

### Exporteer Je Bestaande Reacties

Om de commentaar- en gebruikersgegevens van je site van IntenseDebate te exporteren, ga je vanuit hun beheerdersdashboard naar Sites -> Jouw Site -> Gereedschappen -> XML Export.

Je zult merken dat het resulterende bestand dat je via e-mail ontvangt een mysterieuze "gz" bestandsextensie heeft. Als je een beetje technisch onderlegd bent, weet je misschien dat dit staat voor "gzip" en een populaire en efficiënte manier is om bestanden te comprimeren.

### Open het "gz" bestand niet

Een standaard Windows 10-installatie kan het bestand van IntenseDebate niet openen. Dat is geen probleem, want je hoeft dat niet te doen met FastComments. Onze backend begrijpt dit gecomprimeerde bestand.

Daarna, als je bent ingelogd, kun je <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier gaan om het bestand te importeren</a>. Selecteer IntenseDebate in de dropdown en upload je bestand.

### Wacht een paar minuten

De import van FastComments is "asynchroon". Dit betekent dat het uploaden van het bestand en het verwerken ervan aparte stappen zijn.

Afhankelijk van de bestandsgrootte kun je meteen de succesmelding krijgen. Op de importpagina staat onderaan een tabel - elke rij vertegenwoordigt een importpoging. 
Je kunt deze pagina veilig verversen om de status van je import te zien en hoeveel rijen tot nu toe zijn geïmporteerd.

### Wanneer het klaar is

Je ontvangt een e-mail wanneer de import is voltooid - ongeacht of deze succesvol is of niet. Je kunt de pagina sluiten nadat de bestandupload succesvol is en je je import op de Imports-pagina ziet. Het zal een status hebben zoals "Aanvraag gedaan" en wanneer het begint, is de status "Bezig".

Het is veilig om zoveel keer te herimporteren als nodig is - als je import echter mislukt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">neem dan contact met ons op</a> zodat we kunnen helpen.

### Vervang de IntenseDebate Code met FastComments

Het is eenvoudigweg een kwestie van de kleine snippet die IntenseDebate je geeft te verwijderen en deze te vervangen door <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">onze eigen</a>.
Je kunt zelfs IntenseDebate en FastComments tijdelijk op dezelfde site draaien om het uiterlijk en de feel te testen en aan te passen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We kunnen daarbij helpen</a>.

Als je IntenseDebate-widgets gebruikt en deze wilt vervangen, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">neem dan hier contact met ons op</a>.

### URLs tegelijkertijd migreren

De reacties zelf zijn verbonden aan de "link" velden in de IntenseDebate-export, dus zolang je URLs niet veranderen, is de overstap eenvoudig. Als je URLs wilt migreren en je 
reacties wilt behouden, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">laat het ons weten</a> door ons de oude en nieuwe URLs te sturen. De hulp pagina staat het uploaden van kleine tekstbestanden toe, dus als 
je meer dan een paar URLs migreert, maak dan een Excel-sheet aan.

### Samenvatting

1. Exporteer je gegevens
2. Importeer in FastComments
3. Wissel de IntenseDebate JavaScript snippet om met <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Waarom Stuurt IntenseDebate Mijn Bestand Niet?
Voor grotere sites kan IntenseDebate mogelijk het geëxporteerde bestand niet aanmaken vanwege technische beperkingen aan hun kant. We hebben de mogelijkheid om je bestaande site te scrapen en de reacties te extraheren, maar dit kan 
redelijk aangepast zijn en vanwege de tijd die ermee gemoeid is, moet je het ondersteuningpakket hebben. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Je kunt hier om hulp vragen</a>.
{{/isPost}}

---