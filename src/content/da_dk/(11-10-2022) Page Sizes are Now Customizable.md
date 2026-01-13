---
[category:UI & Customization]

###### [postdate]
# [postlink]Side Størrelser er Nu Tilpasselige[/postlink]

{{#unless isPost}}
FastComments har haft en fast side størrelse på 30 kommentarer siden lanceringen. Dette er nu tilpasseligt!
{{/unless}}

{{#isPost}}

### Hvad er Nyt

Dine kommentartråde kan nu have varierende pagineringstørrelser, og dette kan nu tilpasses globalt på din konto, eller på et
sted, eller endda side niveau. Dette kan være ønskeligt, hvis du ønsker, at visse sider skal vise færre eller flere kommentarer, før brugeren 
skal paginere.

Dette påvirker også uendelig scrolling og eventuelle rammer eller integrationer, der viser kommentarer fra FastComments.

Side størrelser kan variere fra `10` helt op til `200`. Standardindstillingen forbliver på `30`.

### Hvordan Får Man Det

Gå blot over til den pålidelige [Widget Tilpasnings UI](https://fastcomments.com/auth/my-account/customize-widget) og definer
din sides størrelse.

Bemærk, at FastComments forudberegner kommentarerne, der vises på hver side, så ændring af denne parameter vil få vores system
til at genberegne alle dine kommentartråde. Dette vil ikke forårsage nedetid, men det kan tage et par minutter, før ændringen viser sig.

### Dokumentation

Opdateret dokumentation om sides størrelser kan findes på [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Brydende Ændringer

Som en del af denne ændring er to oversættelser defineret i kommentar-widgetten blevet omdøbt. `PREV_30` og `NEXT_30` er nu
`PREV` og `NEXT`, henholdsvis, og indeholder en `[count]` variabel.

Hvis du har defineret oversættelser for pagineringsknapperne via Widget Tilpasnings UI, så har vi allerede migreret
disse for dig. Hvis du sender oversættelserne i en form for integration via kode, skal du opdatere disse:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### Afslutningsvis

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt udgive denne funktion. Lad os vide
nederst, hvis du opdager nogen problemer.

Skål!

{{/isPost}}

---