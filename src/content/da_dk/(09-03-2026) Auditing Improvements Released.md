[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Forbedringer i revision udgivet[/postlink]

{{#unless isPost}}
Auditloggen viser nu hvem eller hvad hver hændelse påvirkede ved navn, og du kan søge på den. Der er også nu datointerval, sub-lejer søgning, felt‑niveau diff på opdateringer, og matchende API‑filtre.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Auditloggen har altid registreret, hvem der udførte en handling, og hvad den blev udført på. Denne udgivelse handler om at gøre den post læsbar og søgbar uden at forlade siden.

Hvis du ville vide, hvad der skete med en bestemt moderator, skulle du først finde deres ID, og hvis den moderator siden da var blevet fjernet, var der intet at slå ID'en op imod. Hændelsen sagde, at noget blev slettet, af hvem, og hvornår, men af en eller anden grund manglede navnene.

Nu bliver navnet fanget sammen med ID'en i øjeblikket for hændelsen, så det overlever sletningen, og du kan søge på det.

### Den berørte kolonne

Der er en ny **Affected** kolonne i tabellen, der viser personen eller objektet, som hændelsen påvirkede, ved navn. For en person vises den som `jsmith (jsmith@example.com)`. For en widget‑tilpasning eller en moderationsgruppe er det navnet du gav den. For en mediefil er det filnavnet du uploadede.

Over tabellen er der en matchende søgeboks, **Who or what was changed**. Indtast et navn, en e‑mailadresse eller et ID, og den finder hændelser, der påvirker den person eller det objekt. Du behøver ikke vide, hvilken af de tre du har, og du behøver ikke slå et internt ID op først.

Hændelser skrevet før denne udgivelse har ikke et navn vedhæftet, men de har stadig det ID, de altid har haft, så den samme søgeboks finder dem via ID.

### Datointerval

Filterraden har nu en **Date Range** dropdown med Sidste 30 dage, Sidste 90 dage, Sidste år, Alle tider, og **Custom range**, som viser Fra‑ og Til‑dato vælgere.

Et datointerval er langt den nemmeste måde at indsnævre en søgning på, og at kombinere det med de andre filtre er den hurtigste måde at finde noget på.

### Administrerede konti

Hvis din konto administrerer andre lejere, er der en **Include sub‑tenants** afkrydsningsboks. Når den er markeret, søges der i din konto og alle lejere, den administrerer, i ét skridt, med en **Tenant** kolonne, der viser hvilken konto hver hændelse kom fra.

Indtil nu kunne hver lejers log kun læses separat, så for at svare på "havde nogen rørt nogen af vores ejendomme denne uge" skulle man skifte ind i hver enkelt i rækkefølge.

### Opdateringer registrerer nu hvad der ændredes

Redigering af et teammedlem plejede at registrere det resulterende sæt af tilladelser. Det fortæller dig, hvad tilladelserne er nu, men ikke hvad de var, så "hvem fjernede denne persons faktureringsadgang, og hvornår" var ubesvarligt.

Opdateringshændelser inkluderer nu et `changes` kort over kun de felter, der faktisk ændredes, hver med sin tidligere og nye værdi. Uændrede felter udelades, så en tilladelsesændring vises som én linje i stedet for en mur af boolske værdier.

### Beskrivelser, og enheden bag en ændring

Destruktive hændelser bærer nu en simpel sætning, der beskriver hvad der skete, som "Removed user from the account." Sidevisninger havde beskrivelser, mens sletninger ikke havde, hvilket var omvendt.

Hændelser, der ændrer noget, registrerer også den browser, der foretog ændringen. Sessioner registreres som en hash, så én persons handlinger kan korreleres uden at loggen gemmer noget, der kan afspilles igen.

### Andre forbedringer

- Nogle rettelser ved pagination og filterkombinationer.
- Login‑hændelser viste en tom **Who** kolonne. Brugernavnet var i posten hele tiden, men siden læste det ikke.
- Handlingskolonnen gengav login‑hændelser som N/A, fordi Login manglede i listen over handlingsnavne.
- Audit‑log sider kunne ikke navngive SSO‑brugere, og viste i stedet "Missing User". De er nu korrekt løst.
- Siden er meget hurtigere på konti med lange historikker.

### For API'en

`/api/v1/audit-logs` endpointet fik matchende filtre: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` til substring‑søgning, og `includeManagedTenants`. Svar inkluderer nu `targetId`, `targetLabel` og `ua`.

To ændringer, der er værd at bemærke, hvis du allerede kalder dette endpoint. `before` fungerer nu alene, hvor den tidligere blev ignoreret medmindre du også sendte `after`. Og `limit` er nu begrænset til 10k med en standard på 5k. Den var tidligere ubegrænset.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">AuditLogs API‑vejledningen</a> dækker de nye forespørgselsparametre, og <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">AuditLog‑strukturreferencen</a> dækker de nye felter.

Hvis du ikke har brugt auditloggen før, [det oprindelige udgivelsesindlæg](/(3-21-2022)-audit-log-released.html) gennemgår hvor den findes, hvem der kan læse den, og hvor længe poster opbevares. Alt dette er uændret.

### Afslutningsvis

Vi er glade for, at vi kan fortsætte med at forbedre FastComments. Hvis du leder efter noget i din log og ikke kan finde det, så fortæl os det nedenfor.

Skål!

{{/isPost}}

---