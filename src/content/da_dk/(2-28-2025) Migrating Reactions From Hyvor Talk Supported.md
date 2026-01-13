---
[category:Migration]

###### [postdate]
# [postlink]Migrering af reaktioner fra Hyvor Talk er nu understøttet[/postlink]

{{#unless isPost}}
Når du importerer din dataeksport fra Hyvor Talk, kan vi nu migrere dine side-niveau reaktioner.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Når du importerer kommentarer for at migrere dem fra Hyvor Talk, kan FastComments nu importere dine side-rekationer. Derudover vil vi registrere, om
kommentartråde på sider er lukkede eller ej, og migrere den status også.

At køre importen igen vil ikke få tællinger til at blive duplikeret eller miste nogen reaktionsværdier fra før importen.

### Sådan opsætter du reaktioner

Visningen af side-rekationer er ikke automatisk. For at komme i gang skal du opdatere din widget-konfiguration:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Star-Struck
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Red Heart
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Face with Open Mouth
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Crying Face
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Face with Tears of Joy
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Angry Face
            ]
        }
    });
</script>
```

Ids skal matche dem fra Hyvor Talk eksporten. Dette eksempel bruger de korrekte værdier.

Du skal finde dine egne reaktionsbilleder. De kan være i ethvert format, herunder gifs. Ovenstående eksempel bruger nogle fra OpenMoji-projektet.

### Afslutning

Som med alle større versioner er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne funktion. Lad os vide
nedenfor, hvis du opdager nogen problemer.

Skål!

{{/isPost}}