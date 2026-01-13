---
[category:Performance]
###### [postdate]
# [postlink]FastComments Geüpgraded naar HTTP/2[/postlink]

{{#unless isPost}}
We hebben enkele infrastructuuraanpassingen gedaan die de prestaties van FastComments nog verder verbeteren!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Jargon

### Wat is Nieuw

Sinds de lancering draait FastComments op HTTP/1.1. Onlangs hebben we onze hele infrastructuur
in alle regio's naar HTTP/2 geconverteerd.

### Impact

Deze update houdt FastComments up-to-date met moderne standaarden en biedt tegelijkertijd enkele
prestatieverbeteringen. Het nadeel is dat sommige oudere browsers niet langer worden ondersteund.

### Verouderde Browsers en Clients

Je kunt [ondersteunde browsers hier vinden](https://caniuse.com/http2). Het grootste probleem zal IE11 zijn, dat
slechts gedeeltelijke ondersteuning heeft, echter deze gebruikers zouden moeten overstappen op Edge.

Chrome, Firefox en anderen ondersteunen HTTP/2 al jaren, dus we vinden het veilig om deze wijziging door te voeren.

### Prestatievoordelen

FastComments is al vrij geoptimaliseerd wat betreft aangeboden middelen en hun volgorde. Bijvoorbeeld,
de comment widget doet maar een paar verzoeken om te laden - de initiële iframe, vervolgens het script dat styling omvat om het aantal verzoeken te verminderen, en daarna
het verzoek aan de API om alle benodigde informatie te verkrijgen. Vergeleken met veel andere diensten is het vrij compact.

Dit is dus niet echt een geval waarin HTTP/2 veel helpt. Het belangrijkste voordeel van HTTP/2 is het maken van gelijktijdige verzoeken.

Echter, HTTP/2 helpt ons wel met compressie! Headers worden nu verzonden in een binair protocol dat
compacter is, en bepaalde plugins met veel middelen zullen veel sneller laden doordat de verzoeken
parallel gepipeline kunnen worden.

### Conclusie

Dank aan onze klanten voor hun geduld bij het uitrollen van deze wijzigingen. We hopen dat je
blijft genieten van FastComments.

Proost!

{{/isPost}}

---