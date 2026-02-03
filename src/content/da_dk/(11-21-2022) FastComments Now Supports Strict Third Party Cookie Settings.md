---
[category:Security]

###### [postdate]
# [postlink]FastComments understøtter nu strenge indstillinger for tredjepartscookies[/postlink]

{{#unless isPost}}
Indtil nu har FastComments krævet, at tredjepartscookies skulle være aktiveret for at fungere fuldt ud. Det er ikke længere tilfældet!
{{/unless}}

{{#isPost}}

### Hvad er nyt

Deaktivering af tredjepartscookies som standard er blevet normen i privatlivsorienterede browsere. Et eksempel på dette er Apples Safari på iOS, hvor
hvis du efterlader din e-mail for at kommentere med FastComments, verificerer den kommentar, og derefter kommer tilbage til den side for at efterlade en anden kommentar eller svare
på nogen, vil du finde, at eventuelle yderligere kommentarer, du efterlader, vil blive markeret som uverificerede.

Dette vil kun ske med standardopsætningen, der viser en `Uverificeret` label på kommentarer. Dette kan dog påvirke andre ting som automatiske godkendelser,
hvis automatiske godkendelser kun er aktiveret for verificerede kommentarer.

Som du kan forestille dig, kan dette føre til frustrerende adfærd, hvor en bruger verificerer deres kommentar, klikker på "Hold mig logget ind", og de er
stadig ikke logget ind, når de besøger dit website eller din applikation. Vær opmærksom på, at dette ikke gælder for SSO-integrationer, da SSO ikke afhænger
af cookies.

Nu, med en ny indstilling, der kan aktiveres kaldet `Aktiver popup for tredjepartscookies` i widgetindstillingerne, er dette problem løst ved
at åbne en popup, der henter brugerens cookie. Indtil videre sker dette kun, hvis de interagerer med kommentarwidgeten, men resultatet er, at
kommentaren vil blive postet fra deres FastComments.com-session, hvilket markerer deres kommentar som verificeret, og så videre.

### Hvordan får man det & Dokumentation

Alle FastComments-kunder på alle niveauer har nu adgang til denne funktion. Tjek [dokumentationen](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) for at lære, hvordan man aktiverer omgangen af tredjepartscookies.

### Afslutningsvis

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne funktion. Lad os vide
nedenfor, hvis du opdager eventuelle problemer.

Skål!

{{/isPost}}