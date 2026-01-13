---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments Lanceert Aangepaste Stemstijlen[/postlink]

{{#unless isPost}}
Heb je ooit willen overstappen van de standaard op/omlaag stemstijl naar alleen een eenvoudige harticoon? Nu kan het.
{{/unless}}

{{#isPost}}

### Wat is er nieuw

Vroeger moest er aangepaste code en CSS geschreven worden om de stembalk aan te passen. Dit betekende ook dat als je iets wilde doen zoals, anonieme stemmingen inschakelen, maar afstemmen uitschakelen,
dit niet alleen aangepaste code vereiste, maar dat de stemverzoeken niet serverzijde gevalideerd konden worden. Dit betekende dat mensen nog steeds anoniem konden afstemmen door de server rechtstreeks aan te roepen, wat in sommige gemeenschappen gebeurde.

We hebben nu het concept van `voteStyle` in het platform geïntroduceerd, waarbij de eerste nieuwe stemstijl het harticoon is waar velen om hebben gevraagd.

Wanneer gedefinieerd via de widget aanpassings-UI voegt dit ook validatie aan het platform toe, waardoor afstemmen helemaal wordt voorkomen, zodat hackers niet langer de UI kunnen omzeilen en iemand in de verdoemenis kunnen stemmen,
zoals zou kunnen gebeuren als anonieme stemmingen waren ingeschakeld.

### Hoe het te gebruiken

Ga naar de [Widget Apassings-UI](https://fastcomments.com/auth/my-account/customize-widget) en selecteer `Hart` onder `Stemstijl`.

### Documentatie

Officiële documentatie voor deze functie is [beschikbaar op docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Wie het krijgt

Alle huidige en nieuwe FastComments klanten, op alle niveaus, hebben nu toegang tot aangepaste stemstijlen. Deze functie wordt alleen ondersteund door v2 van de comment-widget en later.

### Optimalisaties

De code voor de verschillende stemstijlen is niet opgenomen in de cliëntdownload van de widget, tenzij ingeschakeld, om bloat van het product te voorkomen.

### Vooruitkijkend

We hebben nu de capaciteit om verschillende soorten stemmingen en reacties toe te voegen, wat we in de toekomst kunnen doen.

### Conclusie

Net als de rest van FastComments hopen we dat je deze functie snel en gemakkelijk te gebruiken vindt.

Proost!

{{/isPost}}

---