---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Aankondiging van de FastComments Trust Factor[/postlink]

{{#unless isPost}}
FastComments gebruikt nu meer heuristieken bij het bepalen wat spam is en wat niet.
{{/unless}}

{{#isPost}}

### Wat is er nieuw

Sinds 16 november 2023 is FastComments begonnen met het uitbreiden van de manier waarop het de betrouwbaarheid
van gebruikers bepaalt om de frustratie met spamfilters te verminderen.

### Impact op Gebruikers

Als je een lange tijd lid bent van een bestaande site en je opmerkingen zijn door
het spamfilter opgevangen, dan is deze verandering voor jou.

We hebben talloze meldingen ontvangen van gebruikers op sites die dingen doen waar spamfilters niet van houden, zoals het delen van veel links en dergelijke, en deze
opmerkingen eindigen in de spam en worden ofwel geblokkeerd of wachten op goedkeuring van een moderator, afhankelijk van de site-instelling.

### Impact op Sitebeheerders en Moderators

1. Je kunt minder opmerkingen zien die automatisch als spam worden gemarkeerd van je meest actieve gebruikers.
2. Dit verandert niets aan spamdetectie op basis van de woord/zin zwarte lijst. Vulgaire woorden en gefilterde zinnen zullen nog steeds ertoe leiden dat opmerkingen naar spam gaan als je deze instelling hebt.

Het Trust Factor-nummer zelf is momenteel niet zichtbaar voor sitebeheerders of moderators, maar
dit is iets dat we in de toekomst zullen verkennen.

### Hoe het Trust Factor wordt Berekend

Trust Factor is een getal van `0` tot `100` en wordt per site onderhouden.

De volgende variabelen worden gebruikt om het trust factor te bepalen:

- Leeftijd van de interactie met de site.
- Aantal goedgekeurde opmerkingen.
- Aantal gepinde opmerkingen.

Als je langer dan zes maanden lid bent van een site, en je hebt meer dan 50 goedgekeurde opmerkingen achtergelaten,
heb je een perfecte trust score van `100`.

Anders is de formule als volgt en zal deze in de loop der tijd evolueren:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Waarbij:

    timeFactor = 100 * TijdSindsEersteOpmerking / ZesMaanden
    commentFactor = AantalGoedgekeurdeOpmerkingen
    pinFactor = AantalGepindeOpmerkingen * 20

Je kunt hier de `* 20` opmerken - gepinde opmerkingen hebben een hoog gewicht. Als moderators je
opmerkingen pinnen, wordt je waarschijnlijk beschouwd als een redelijk betrouwbare gebruiker.

### Voor Ontwikkelaars & Opmerkingen

In de API heeft `UserBadgeProgress` nu `autoTrustFactor` en `manualTrustFactor` beschikbaar.

`autoTrustFactor` wordt door ons berekend en is niet schrijfbaar via de API.

Als je het trust factor zelf wilt configureren, kun je `manualTrustFactor` definiëren. Het systeem
zal dan deze waarde in plaats daarvan gebruiken, en we blijven de `autoTrustFactor` waarde apart onderhouden.

### Misbruik van het Trust Factor

Zoals bij alle dingen verwachten we dat dit wordt misbruikt. Mensen zullen relaties opbouwen met een gemeenschap en vervolgens het account gebruiken om spam te plaatsen. We denken echter dat met redelijke standaardinstellingen (zes maanden, 50+ opmerkingen), we de lat hoog genoeg hebben gelegd om dit voor de meeste spammers niet aantrekkelijk te maken. Zodra ze beginnen met het plaatsen van spam kan hun account onmiddellijk door moderators worden verbannen. In de toekomst kunnen we moderators ook de mogelijkheid geven om de trust factor aan te passen.

### Conclusie

Zoals bij alle grote releases zijn we blij dat we de tijd hebben kunnen nemen om deze functie te optimaliseren, testen en correct uit te brengen. Laat het ons weten
hieronder als je problemen ontdekt.

Proost!

{{/isPost}}

---