---
[category:Migratie]
[category:Handleidingen]
###### [postdate]
# [postlink]Migreren Van Disqus Naar FastComments[/postlink]

{{#unless isPost}}
Lees deze post om te zien hoe je volledig kunt migreren van Disqus naar FastComments.

Als je de Generic Site Integration met Disqus gebruikt, is het eenvoudigweg een kwestie van het verwijderen van het kleine fragment dat ze je geven en het vervangen door <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">de onze</a>.
Je kunt zelfs Disqus en FastComments tijdelijk op dezelfde site draaien om de look en feel te testen en aan te passen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wij kunnen daarbij helpen</a>.

Als je de Generic Site Integration niet gebruikt, variëren de instructies op basis van je platform - neem opnieuw <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contact met ons op</a>.
{{/unless}}

{{#isPost}}
Er zijn veel dingen die Disqus goed doet, maar waar ze tekortschieten, dat is waar FastComments invalt.

## Als Je Op WordPress Bent

FastComments heeft een speciale WordPress-plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

De plugin maakt de installatie, setup en synchronisatie heel eenvoudig. Als je deze route volgt, kun je de rest van de instructies hier negeren.

## Handmatige, Generieke Installatie

### Exporteer Je Bestaande Reacties

De FastComments-importeur zal je reacties, gebruikersnamen, gebruikersavatars en inline afbeeldingen migreren. We verplaatsen de afbeeldingen moeiteloos naar onze servers.

Een ding dat Disqus goed doet is hoe ze gegevens exporteren. Je zult opmerken dat na het volgen van de stappen in hun handleiding <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">hier</a> het resulterende
bestand dat je via e-mail ontvangt een mysterieuze "gz" bestandsextensie heeft. Als je een beetje technisch onderlegd bent, weet je misschien dat dit staat voor "gzip" en een populaire en efficiënte manier is om bestanden te comprimeren. 

### Open het "gz" bestand niet

Een standaard Windows 10-installatie kan het bestand van Disqus niet openen. Dat is prima, want dat hoeft niet met FastComments. Onze backend begrijpt
dit gecomprimeerde bestand, dus alles wat je hoeft te doen is hun instructies te volgen <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">hier om het genoemde bestand te verkrijgen</a>.

Daarna, als je bent ingelogd, kun je <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier naartoe gaan om het bestand te importeren</a>. Selecteer Disqus in de dropdown en upload je bestand.

### Wacht een paar minuten

De FastComments-import is "asynchroon". Dit betekent dat het uploaden van het bestand en het verwerken ervan aparte stappen zijn.

Afhankelijk van de bestandsgrootte krijg je misschien direct het succesbericht. Op de importpagina staat onderaan een tabel - elke rij vertegenwoordigt een importpoging.
Je kunt deze pagina veilig vernieuwen om de status van je import te zien en hoeveel rijen tot nu toe zijn geïmporteerd.

### Wanneer het klaar is

Je ontvangt een e-mail wanneer de import is voltooid - of het nu succesvol is of niet. Je kunt de pagina sluiten nadat de bestandsoverdracht succesvol is en je je import op de Imports-pagina ziet. Het zal een status hebben zoals "Aangevraagd" en wanneer het begint, zal de status "Bezig".

Het is veilig om zo vaak als nodig te herimporteren - als je echter import mislukt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">neem dan contact met ons op</a> zodat we kunnen helpen.

### Vervang de Disqus-code door FastComments

Als je de Generic Site Integration met Disqus gebruikt, is het eenvoudigweg een kwestie van het verwijderen van het kleine fragment dat ze je geven en het vervangen door <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">de onze</a>.
Je kunt zelfs Disqus en FastComments tijdelijk op dezelfde site draaien om de look en feel te testen en aan te passen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wij kunnen daarbij helpen</a>.

Als je de Generic Site Integration niet gebruikt, variëren de instructies op basis van je platform - neem opnieuw <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contact met ons op</a>.

### Migreren van URL's tegelijk

De reacties zelf zijn gekoppeld aan de "link" velden in de Disqus-export, dus zolang je URL's niet veranderen, is de overstap eenvoudig. Als je URL's wilt migreren en je
reacties wilt behouden, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">laat het ons weten</a> door ons de oude en nieuwe URL's te sturen. De help-pagina staat het uploaden van kleine tekstbestanden toe, dus als
je meer dan een paar URL's migreert, maak dan een Excel-sheet aan.

### Samenvatting

1. Exporteer je gegevens
2. Importeer in FastComments
3. Vervang de Disqus JavaScript-snippet door <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Waarom Stuurt Disqus Mij Mijn Bestand Niet?
Voor grotere sites kan Disqus mogelijk het geëxporteerde bestand niet maken vanwege technische beperkingen aan hun kant. Wij hebben de mogelijkheid om je bestaande site te scrapen en de reacties ervan te halen, echter kan dit
vrij uitgebreid zijn en, vanwege de tijd die ermee gemoeid is, vereisen dat je het Support Package hebt. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Hier kun je hulp aanvragen</a>.
{{/isPost}}