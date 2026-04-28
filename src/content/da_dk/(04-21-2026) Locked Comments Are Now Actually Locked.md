---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Låste kommentarer er nu faktisk låste[/postlink]

{{#unless isPost}}
Lås-ikonet vises endelig på låste kommentarer, og låste kommentarer kan ikke længere redigeres eller slettes, før en administrator låser dem op.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Moderatorer har længe kunnet låse kommentarer. At låse en kommentar forhindrer nye svar, hvilket er praktisk, når en tråd har udspillet sin rolle, eller en underkonversation går af sporet.

Problemet var, at "låst" ikke havde meget vægt. Læserne havde ingen visuel indikation på, at en kommentar var låst. Og selvom nye svar blev blokeret, kunne den originale forfatter eller enhver med redigeringsadgang stadig redigere eller slette kommentaren. Det er ikke rigtig låst. Denne opdatering løser begge problemer.

### Lås-ikonet

Når en moderator låser en kommentar, vises et lille hængelås i det øverste højre hjørne af kommentaren, lige ved siden af ​​nåle-ikonet. Det vises for hver læser - ikke kun moderatorer. At låse kommentaren op fjerner det.

Ikonet respekterer lys- og mørk tilstand, ligesom nåle-ikonet.

### Rediger og slet er blokeret

En låst kommentar kan ikke redigeres eller slettes af nogen, inklusive administratorer og moderatorer. Hvis du vil redigere eller fjerne en låst kommentar, skal du først låse den op, foretage ændringen, og derefter låse den igen, hvis du ønsker det.

Dette gælder på alle stier, der berører en kommentar:

- Den bruger-facing widget skjuler menuindgangene Rediger og Slet på låste kommentarer.
- Den offentlige API PATCH og DELETE endpoints returnerer en `locked` fejl, hvis målkKommentaren er låst.
- Administrators moderations-UI viser den låste fejl, hvis du forsøger at slette uden at låse op først.

### Undtagelser

Et udvalg af stier omgår med vilje låsen, så de kan udføre deres arbejde:

- Kontosletning. Hvis en bruger sletter deres FastComments-konto, bliver deres kommentarer ryddet op uanset låsetilstand.
- Lejer / SSO-brugeroprydning. Samme idé for fjernelse af brugere på lejer-niveau.
- Planlagt automatisk sletning. Hvis du planlagde en kommentar til at blive slettet på et specifikt tidspunkt, behøver planlæggeren ikke at bekymre sig om låse.
- Duplicatoprydning. Dedupe-værktøjet fjerner låste duplikater uden yderligere ceremonier.
- Moderatorforbud med "slet alle kommentarer fra denne bruger". At forbyde en bruger og feje deres historik er en enkelt bevidst handling, så det rydder også låse.

Alt andet - widgeten, moderations-UI'et, den offentlige API, eksterne kaldere - respekterer låsen.

### API-fejlstruktur

Hvis du kalder den offentlige API for at redigere eller slette en låst kommentar, vil du få et svar som:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Kommentar er låst.",
    "translatedError": "Denne kommentar er låst og kan ikke redigeres eller slettes. Lås den op først."
}</div>

HTTP-status er 401. Feltet `translatedError` bruger din lejers konfigurerede lokalitet og enhver tilpasset oversættelse, du har opsat.

### Afslutning

Lille ændring, men det lukker et hul, der har været åbent i et stykke tid. Låst betyder nu låst.

Skål!

{{/isPost}}