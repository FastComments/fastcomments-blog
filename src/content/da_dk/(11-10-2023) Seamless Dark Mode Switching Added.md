---
[category:UI & Customization]

###### [postdate]
# [postlink]Problemfri skift til mørk tilstand tilføjet[/postlink]

{{#unless isPost}}
FastComments har altid understøttet mørk tilstand. Tidligere krævede det imidlertid en genindlæsning af kommentarfeltet for at skifte til mørk tilstand. Dette er blevet rettet.
{{/unless}}

{{#isPost}}

### Hvad er nyt

FastComments har altid understøttet mørk tilstand. Tidligere krævede det dog en genindlæsning af kommentarfeltet for at skifte til mørk tilstand.

Dette betød, at hvis en side brugte mørk tilstand, eller tillod brugere at skifte frem og tilbage mellem lys og mørk tilstand, ville vi
fuldstændig fjerne kommentarfeltet fra browseren og genindlæse det. Dette blev gjort af tekniske årsager for at forenkle produktet
ved den første lancering, da tilstand skal kommunikeres frem og tilbage mellem den overordnede side og widget'ens iframe.

I takt med at den uhyggelige sæson er ovre - er skiftet til mørk tilstand blevet forbedret. Kommentarfeltet understøtter nu problemfrie overgange mellem lys
og mørk tilstand. Det kræver dog stadig, at `hasDarkBackground` flaget sendes, når det er relevant.

### Til udviklere & forbehold

For at fortælle kommentarfeltet, at din side er i mørk tilstand - eller har en mørk baggrund anvendt - skal du sende
`hasDarkBackground` flaget. Dette ændrer sig ikke. Men nu, når du kalder `instance.update(newConfig)` (eller ændrer tilstand
i et af vores biblioteker som React, Svelte osv.), vil vi registrere, om den eneste ændrede parameter er `hasDarkBackground`, og hvis det er tilfældet,
vil kommentarfeltet blive opdateret korrekt. Widgetten vil asynkront indlæse mørk tilstand-udvidelsen i baggrunden og opdatere sin stil
hvis nødvendigt.

Et stort forbehold er, at når du sender `newConfig` - dette skal være et helt nyt objekt for, at denne funktion kan fungere.

### Afslutning

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne funktion. Lad os vide
nedenfor, hvis du opdager nogen problemer.

Skål!

{{/isPost}}

---