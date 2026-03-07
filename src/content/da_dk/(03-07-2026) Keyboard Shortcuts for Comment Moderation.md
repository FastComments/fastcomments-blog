---
[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Tastaturgenveje til Kommentar Moderation[/postlink]

{{#unless isPost}}
Powerbrugere kan nu moderere kommentarer udelukkende fra tastaturet med et fuldt sæt genveje til navigation, handlinger og mere.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Siden til Kommentar Moderation understøtter nu omfattende tastaturgenveje. Naviger mellem kommentarer, godkend, slet, spær,
marker som spam, vælg kontekst, se logs, og mere - alt uden at røre musen.

Dette er en stor ting for teams, der modererer store mængder af kommentarer. Hver handling, der tidligere krævede at flytte musen og klikke på en knap,  
er nu kun et enkelt tastetryk væk.

### Eksempel Flow

Sig, at du har en kø af kommentarer, der skal gennemgås. Tryk **j** for at fokusere på den første kommentar. Tryk **c** for at udvide dens 
kontekst og se den omkringliggende tråd. Ser godt ud, så tryk **c** igen for at collapsed konteksten, og tryk så **a** for at godkende den. 
Tryk **j** for at gå til den næste kommentar og gentag. Hvis noget ser forkert ud, tryk **s** for at markere det som spam eller **d** for 
at slette det. Du kan arbejde dig igennem en hel side af kommentarer uden nogensinde at række ud efter musen.

### Navigation

Tryk **j** for at flytte fokus til den næste kommentar og **k** for at flytte til den forrige. Den fokuserede kommentar er fremhævet 
med en blå kontur for at adskille den fra valgte (afkrydsede) kommentarer.

Tryk **x** eller **Enter** for at skifte valg for den fokuserede kommentar. Hold **Shift** nede og tryk **j** eller **k** for at vælge 
den aktuelle kommentar og flytte fokus i én bevægelse - nyttigt til hurtigt at vælge en række kommentarer.

### Handlinger

Med en kommentar i fokus, udløser enkelt-tastgenveje de samme handlinger som værktøjslinje-knapperne:

- **a** - Skift godkend / ugyldig
- **s** - Skift spam / ikke spam
- **d** - Slet
- **u** - Genskab
- **r** - Skift gennemset / ikke gennemset
- **e** - Rediger
- **b** - Spær / administrer spærring
- **p** - Skift fastgør / fjern fastgørelse
- **f** - Fjern markering
- **i** - Vis alt fra IP
- **t** - Indstil tillidsfaktor
- **m** - Administrer badges
- **l** - Vis logs
- **c** - Skift kontekst

### Globale Genveje

Nogle få genveje fungerer uanset om en kommentar er fokuseret:

- **Ctrl+a** - Vælg alle kommentarer
- **Ctrl+z** - Fortryd den sidste handling
- **/** - Fokuser søgefeltet
- **[** og **]** - Naviger til den forrige eller næste side

### Hjælp og Guiders

Tryk **?** når som helst for at åbne en hjælpe-dialog, der viser hver tilgængelig genvej.

Tryk **g** for at skifte til "guiders" tilstand, som overlay'er små badges på de fokuserede kommentarers handlingsknapper, der viser 
den tilsvarende genvejstast. Dette er praktisk, mens du lærer genvejene.

Alle genveje undertrykkes, når du skriver i søgefeltet eller ethvert andet inputfelt, og når en dialog er åben. 
Tryk **Escape** for at fjerne fokus fra en indtastning og vende tilbage til genvejs-tilstand.

### Dokumentation

For en fuld reference, se <a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">Moderationsguiden</a>.

### Afslutning

Vi håber, at tastaturgenveje gør moderering i høj volumen hurtigere og mere behagelig. Genvejene følger konventioner, 
som brugere af værktøjer som Gmail og GitHub er fortrolige med, så de skulle føles naturlige med det samme.

Lad os vide nedenfor, hvis du har spørgsmål eller feedback!

Skål!

{{/isPost}}

---