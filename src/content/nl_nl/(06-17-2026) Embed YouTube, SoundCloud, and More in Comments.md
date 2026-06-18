---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]YouTube, SoundCloud en meer in reacties insluiten[/postlink]

{{#unless isPost}}
Commentatoren kunnen nu een insluitcode plakken en de video of speler wordt direct in de reactie weergegeven. Het is standaard uitgeschakeld, opt-in per site, en beperkt tot vertrouwde aanbieders.
{{/unless}}

{{#isPost}}

### Wat is nieuw

Mensen delen graag een video of een nummer in een discussie. Tot nu toe had het plakken van een YouTube- of SoundCloud-insluiting in een reactie niet veel effect. De ruwe `<iframe>` werd verwijderd voor beveiliging, of het werd verpakt als een codeblok.

Je kunt nu media-insluitingen inschakelen voor je site. Wanneer het is ingeschakeld, kan een commentator de insluitcode rechtstreeks van de aanbieder plakken en deze wordt inline weergegeven, net zoals op elke andere pagina.

Hier is een voorbeeld van het soort snippet dat mensen kopiëren van een "Deel" of "Insluiten" knop:

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>

Plak dat in een reactie met insluitingen ingeschakeld en je krijgt de daadwerkelijke speler.

### Alleen Vertrouwde Aanbieders

Arbitraire iframes op je pagina toestaan is een echt beveiligingsrisico, dus we hebben niet zomaar de poort geopend. Insluitingen zijn beperkt tot een ingebouwde lijst van vertrouwde aanbieders, waaronder YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch, en Dailymotion.

Als een reactie een iframe bevat dat naar ergens anders wijst, wordt het iframe verwijderd wanneer de reactie wordt opgeslagen. Dezelfde sanitatie die beschermt tegen `<script>`-tags en `onload=` trucs wordt nog steeds uitgevoerd op elke reactie. Insluitingen zijn gewoon een extra, zorgvuldig afgebakende toestemming bovenop dat.

### Je Eigen Aanbieders Toevoegen

Als je een aanbieder gebruikt die niet op de ingebouwde lijst staat, kun je deze toestaan. Er is een veld "Extra Insluitdomeinen" waar je extra hostnamen kunt opsommen om te vertrouwen, naast de ingebouwde aanbieders.

Vergelijking gebeurt op exacte hostnaam, dus voeg de volledige host toe waar de insluiting vandaan laad, bijvoorbeeld `player.example.com`. Alles wat je niet opsomt blijft geblokkeerd.

### Hoe het In te Schakelen

Het is een instelling per site op de widget-aanpassingspagina, direct naast de afbeeldingsuploadopties. Vink "Media-insluitingen toestaan?" aan en sla op. Geen code of herdistributie nodig.

Zoals onze andere inhoudinstellingen, is dit per aanpassingsregel, zodat je insluitingen op de ene site of een set pagina's kunt inschakelen en het elders uit kunt laten.

### Werkt in Beide Editors

Plakken werkt zowel in het gewone reactieveld als in de WYSIWYG-editor. In het gewone veld wordt de insluitcode als tekst ingevoerd en wordt het een speler bij indienen. In de WYSIWYG-editor verschijnt de insluiting direct als een blok, met een kleine verwijderknop in de hoek, zodat het gemakkelijk te verwijderen is als het een vergissing was.

### Conclusie

Insluitingen zijn standaard uitgeschakeld, dus er verandert niets voor je site tenzij je besluit ze in te schakelen. Wanneer je dat doet, krijgen je commentatoren een fijnere manier om video's en nummers te delen, en behoud je de dezelfde beveiligingsgaranties die je al had.

Schakel het in, plak een video, en laat ons weten wat je ervan vindt hieronder.

Proost!

{{/isPost}}