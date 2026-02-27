---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Nye IP-login-alerter[/postlink]

{{#unless isPost}}
FastComments sender nu en sikkerhedsadvarsels-e-mail, når der registreres en login fra en ny IP-adresse, inklusive den omtrentlige placering, for at hjælpe brugere med at opdage uautoriseret adgang.
{{/unless}}

{{#isPost}}

### Hvad er nyt

FastComments sender nu automatisk en sikkerhedsadvarsels-e-mail, når vi registrerer en login til din konto fra en IP-adresse, vi ikke har set før. E-mailen inkluderer:

- Den **omtrentlige placering** (by og land) af log ind.
- Den **IP-adresse**, der blev brugt.
- Det **tidspunkt**, hvor log ind fandt sted.
- Et direkte link til at **ændre din adgangskode**, hvis log ind ikke var dig.

Dette gælder for alle loginmetoder: adgangskode-baseret login, magiske links og to-faktor autentificeringsforløb.

### Privatliv

Vi opbevarer ikke din rå IP-adresse. Vi opbevarer kun en obfuskeret form til sikkerhedssammenligning. Den omtrentlige placering bestemmes på tidspunktet for log ind og gemmes ikke.

**Din IP deles ikke med en tredjepart** for at bestemme placeringen. Vi hoster vores egen tjeneste, der udtrækker den omtrentlige placering fra en (ugeopdateret) kopi af MaxMind-databasen.

### Hvornår alarmer sendes

En alarm sendes, når **alle** følgende er sande:

- Log ind var vellykket.
- Det er ikke brugerens første-login.
- IP-adressen er ikke set ved en tidligere vellykket login for den konto.

Dette betyder, at du ikke får en alarm ved dit allerførste login, og du vil ikke få gentagne alarmer for den samme IP.

### Afslutning

Dette er endnu et skridt mod at holde din konto sikker. Hvis du modtager en alarm, du ikke genkender, anbefaler vi at ændre din adgangskode straks.

Lad os vide nedenfor, hvis du har nogen feedback!

Skål!

{{/isPost}}

---