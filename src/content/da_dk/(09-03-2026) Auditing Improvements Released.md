[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Auditeringsforbedringer udgivet[/postlink]

{{#unless isPost}}
Auditloggen viser nu, hvem eller hvad hver hændelse påvirkede ved navn, og du kan søge på den. Der er også nu datointerval, søgning på underlejere, felt‑niveau forskelle ved opdateringer og matchende API‑filtre.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Auditloggen har altid registreret, hvem der udførte en handling, og hvad den blev udført på. Denne udgivelse handler om at gøre den
post læsbar og søgbar uden at forlade siden.

Hvis du ville vide, hvad der skete med en bestemt moderator, skulle du først finde deres ID, og hvis den
moderator siden da var blevet fjernet, var der intet at slå ID'et op imod. Hændelsen sagde, at noget blev slettet,
af hvem, og hvornår, men af en eller anden grund manglede navnene.

Nu bliver navnet fanget sammen med ID'et i øjeblikket for hændelsen, så det overlever sletningen, og du kan søge på det.

### Den påvirkede kolonne

Der er en ny **Affected** kolonne i tabellen, der viser personen eller objektet, som hændelsen påvirkede, ved navn. For en person læses den som `jsmith (jsmith@example.com)`. For en widget‑tilpasning eller en moderationsgruppe er det navnet du gav den. For en mediefil er det filnavnet du uploadede.

Over tabellen er der en matchende søgeboks, **Who or what was changed**. Indtast et navn, en e‑mailadresse eller et ID, så
finder den hændelser, der påvirker den person eller det objekt. Du behøver ikke vide, hvilken af de tre du har, og du behøver ikke slå et internt ID op først.

Hændelser skrevet før denne udgivelse har ikke et navn vedhæftet, men de har stadig det ID, de altid har haft, så den samme
søgeboks finder dem via ID.

### Datointerval

Filterraden har nu en **Date Range** dropdown med Last 30 Days, Last 90 Days, Last Year, All Time og **Custom range**, som viser Fra‑ og Til‑datovælgerne.

Et datointerval er langt den nemmeste måde at indsnævre en søgning på, og at kombinere det med de andre filtre er den hurtigste måde
at finde noget på.

### Administrerede konti

Hvis din konto administrerer andre lejere, er der en **Include sub-tenants** afkrydsningsboks. Når den er markeret, søger den din konto og
hver lejer, den administrerer, i ét trin, med en **Tenant** kolonne, der viser, hvilken konto hver hændelse kom fra.

Indtil nu kunne hver lejers log kun læses separat, så svaret på “har nogen rørt nogen af vores ejendomme denne uge”
betød, at man skulle skifte til hver enkelt i rækkefølge.

### Opdateringer registrerer nu, hvad der ændredes

Redigering af et teammedlem plejede at registrere det resulterende sæt af tilladelser. Det fortæller dig, hvilke tilladelser der er nu, men ikke
hvad de var, så “who removed this person's billing access, and when” var ubesvarbart.

Opdateringshændelser inkluderer nu et `changes` kort over kun de felter, der faktisk ændredes, hver med sin tidligere og nye værdi.
Uændrede felter udelades, så en tilladelsesændring læses som én linje i stedet for en mur af boolske værdier.

### Beskrivelser og enheden bag en ændring

Destruktive hændelser bærer nu en simpel sætning, der beskriver hvad der skete, som “Removed user from the account.” Sidevisninger havde
beskrivelser, mens sletninger ikke havde, hvilket var omvendt.

Hændelser, der ændrer noget, registrerer også den browser, der foretog ændringen. Sessioner registreres som en hash, så én persons handlinger kan
korreleres uden at loggen gemmer noget, der kunne afspilles igen.

### Andre forbedringer

- Nogle rettelser vedrørende paginering og filterkombinationer.
- Login‑hændelser viste en tom **Who** kolonne. Brugernavnet var i posten hele tiden, men siden læste det ikke.
- Handlingskolonnen viste login‑hændelser som N/A, fordi Login manglede i listen over handlingsnavne.
- Audit‑log‑sider kunne ikke navngive SSO‑brugere og viste i stedet “Missing User”. De er nu korrekt løst.
- Siden er meget hurtigere på konti med lange historikker.

### For API‑et

Endpointet `/api/v1/audit-logs` fik matchende filtre: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target`
til substring‑søgning, og `includeManagedTenants`. Svar inkluderer nu `targetId`, `targetLabel` og `ua`.

To ændringer, der er værd at bemærke, hvis du allerede kalder dette endpoint. `before` fungerer nu alene, hvor det tidligere blev ignoreret
medmindre du også sendte `after`. Og `limit` er nu begrænset til 10k, hvor det før ikke havde nogen loft. Standardværdien er uændret
på 1k.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">AuditLogs API‑guiden</a> dækker de
nye forespørgselsparametre, og <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">AuditLog‑strukturreferencen</a> dækker de nye felter.

Hvis du ikke har brugt audit‑loggen før, [the original release post](/(3-21-2022)-audit-log-released.html) gennemgår
hvor den findes, hvem der kan læse den, og hvor længe poster gemmes. Alt dette er uændret.

### Afslutningsvis

Vi er glade for, at vi kan fortsætte med at forbedre FastComments.
Hvis du leder efter noget i din log og ikke kan finde det, så fortæl os nedenfor.

Skål!

{{/isPost}}

---