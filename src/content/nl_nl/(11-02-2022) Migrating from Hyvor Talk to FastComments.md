---
[category:Migration]
###### [postdate]
# [postlink]Migreren van Hyvor Talk naar FastComments[/postlink]

{{#unless isPost}}
Lees deze post om te zien hoe je volledig kunt migreren van Hyvor Talk naar FastComments.

Als je de handmatige code-installatie met Hyvor Talk gebruikt, is het eenvoudigweg een kwestie van het verwijderen van het kleine snippet dat zij je geven en het vervangen door <a href="https://fastcomments.com/install-wizard" target="_blank">de onze</a>.
Je kunt zelfs Hyvor en FastComments tijdelijk op dezelfde site draaien om de look and feel te testen en aan te passen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wij kunnen daarbij helpen</a>.

Als je de installatie op basis van een code snippet niet gebruikt, zullen de instructies variëren afhankelijk van je platform - nogmaals <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bereik ons</a>.
{{/unless}}

{{#isPost}}

## Als je op WordPress bent

FastComments heeft een speciale WordPress-plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

De plugin maakt de installatie, setup en synchronisatie zeer eenvoudig. Als je deze route volgt, kun je de rest van de instructies hier negeren. Zorg er gewoon voor
dat je je Hyvor Talk-comments hebt gesynchroniseerd met je WordPress-installatie.

Als dit niet werkt voor jou zoals gerapporteerd door enkele van onze klanten, wil je misschien onze WordPress-plugin gebruiken, maar een data-import doen
door handmatig te exporteren vanuit Hyvor Talk. Je kunt data-imports vinden in [Beheer Gegevens -> Reacties Importeren](https://fastcomments.com/auth/my-account/manage-data/import).

## Handmatige, Generieke Installatie

### Exporteer je Bestaande Reacties

De FastComments-importeur zal je commentaarthreads, gebruikersnamen, gebruikersavatars, emoji's en inline-afbeeldingen migreren. We zullen de afbeeldingen naadloos naar onze servers verplaatsen.

Vanaf 2022 exporteert Hyvor Talk geen e-mails of up/down stemmen. Als je in staat bent om een export van hen te krijgen met deze informatie, kunnen we het importeren.

### Importeer het .JSON-bestand

Nadat je de Hyvor-export hebt gedownload, log je in op je FastComments-dashboard en ga je <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier om het bestand te importeren</a>. Selecteer Hyvor Talk in de dropdown en upload je bestand.

### Wacht een paar minuten

De FastComments-import is "asynchroon". Dit betekent dat het uploaden van het bestand en het verwerken ervan aparte stappen zijn.

Afhankelijk van de bestandsgrootte kun je direct de succesmelding ontvangen. Op de importpagina onderaan staat een tabel - elke rij vertegenwoordigt een importpoging.
Je kunt deze pagina veilig verversen om de status van je import te zien en te bekijken hoeveel rijen tot nu toe zijn geïmporteerd.

### Wanneer het klaar is

Je ontvangt een e-mail wanneer de import is voltooid - of het nu succesvol is of niet. Je kunt de pagina sluiten nadat de bestandupload is geslaagd, en je de import op de Import-pagina ziet. Het zal een status hebben zoals "Aangevraagd" en wanneer het begint, zal de status "Bezig" zijn.

Het is veilig om het aantal keren dat nodig is opnieuw te importeren - als je import echter mislukt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bereik ons</a> zodat we kunnen helpen.

### Vervang de Hyvor Talk Code door FastComments

Als je de installatie op basis van een code snippet met Hyvor gebruikt, is het eenvoudigweg een kwestie van het verwijderen van het kleine snippet dat zij je geven en het vervangen door <a href="https://fastcomments.com/install-wizard" target="_blank">de onze</a>.
We ondersteunen ook veel front-end frameworks die [je hier kunt vinden](https://fastcomments.com/install-wizard). Je kunt zelfs Hyvor en FastComments tijdelijk op dezelfde site draaien om de look and feel te testen en aan te passen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wij kunnen daarbij helpen</a>.

Als je de installatie op basis van een code snippet niet gebruikt, zullen de instructies variëren afhankelijk van je platform - nogmaals <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bereik ons</a>.

We bieden een zelfservice-installatiewizard [hier](https://fastcomments.com/install-wizard).

### Migreren van URL's gelijktijdig

De reacties zelf zijn gekoppeld aan de paginavid-velden in de export, dus zolang je URL's niet veranderen, is het omschakelen eenvoudig. Als je URL's wilt migreren en je
reacties wilt behouden, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">laat het ons weten</a> door ons de oude en nieuwe URL's te sturen. De help-pagina staat het uploaden van kleine tekstbestanden toe, dus als
je meer dan een paar URL's migreert, maak dan een Excel-sheet aan.

### EU

Als je in de EU bent, wil je waarschijnlijk je account aanmaken op [eu.fastcomments.com](https://eu.fastcomments.com) zodat je klantgegevens in de EU blijven.

### Samenvatting

1. Exporteer je gegevens
2. Importeer in FastComments
3. Vervang het Hyvor JavaScript-snippet door <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments's</a>

## Waarom Stuurt Hyvor Mij Niet Mijn Bestand?
Voor grotere sites kan Hyvor mogelijk het geëxporteerde bestand niet maken vanwege technische beperkingen aan hun kant. We hebben de mogelijkheid om je bestaande site te scrapen en de comments ervan te halen, maar dit kan vrij op maat gemaakt zijn en vereist, vanwege de tijd die erbij gemoeid is, dat je het Supportpakket hebt. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Je kunt hier hulp aanvragen</a>.
{{/isPost}}

---