---
[category:Features]
###### [postdate]
# [postlink]Opgaveadministration opdatering[/postlink]

{{#unless isPost}}
FastComments har forbedret interaktionen for at administrere dine lejere!
{{/unless}}

{{#isPost}}

### Hvad er nyt

Fra den 11. december 2023 tilbyder FastComments nu muligheden for at skifte lejere uden at påvirke andre lejerbrugere.

### Målgruppe

Denne opdatering er ikke til kommentatorer eller websted administratorer, der driver et enkelt websted. Dette gavner administratorer, der driver mange websteder eller kun lejere.

### Indvirkning på administratorer

Tidligere var det endnu en udfordring at oprette lejere og skifte brugere. Nogle almindelige problemstillinger var:

1. Du var nødt til at oprette en bruger, når du oprettede din lejer, da denne bruger "ejede" lejeren.
2. Dette betød, at du var nødt til at bruge en ny e-mail for hvert websted, selvom du ønskede at bruge én e-mail/konto til mange underlejere.
3. At skifte lejere krævede påvirkning, hvilket betød, at dine brugere skulle duplikeres på tværs af alle lejere med samme rettigheder, osv.

Nu:

1. Ingen brugeroprettelse er nødvendig, når en lejer oprettes.
2. Enhver Super Admin-bruger med de rigtige tilladelser har de samme tilladelser i alle underlejere.
3. Der er en `Switch`-knap i lejernes liste, som bevarer din nuværende bruger og tilladelser, men ændrer hvilken lejer du er logget ind på.
4. Hvis du er administrator for en hovedlejer, har du moderatorrettigheder i underlejere, når du bruger kommentarswidgeten.

Hændelser logges stadig i Audit Log for den lejer, du er skiftet til.

### Påvirkning

Du kan stadig påvirke brugere. Skift til en lejer og gå til `Users`-siden.

### Til udviklere & udfordringer

Når du bruger `POST /tenants` API'en, er `email` feltet nu valgfrit. Dokumentationen er blevet opdateret.

### Fremtidige opdateringer

I fremtiden vil der være flere administrative handlinger i lejernes liste, såsom at slette lejere osv.

### Afslutning

Ligesom ved alle store udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne funktion. Lad os vide
nedenfor, hvis du opdager nogen problemer.

Skål!

{{/isPost}}

---