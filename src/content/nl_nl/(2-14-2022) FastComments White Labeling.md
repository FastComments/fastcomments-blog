---
[category:API & Development]

###### [postdate]
# [postlink]FastComments White Labeling[/postlink]

{{#unless isPost}}
White Labeling, met volledige API-integratie en automatiseringstools, is nu beschikbaar bij FastComments.
{{/unless}}

{{#isPost}}

## Wat is Nieuw

FastComments kan nu integreren met andere applicaties en third-party resellers via White Labeling. White Labeling stelt je in staat om FastComments-accounts (genoemd tenants), gebruikers, moderators en meer aan te maken.

We bieden nu een [uitgebreide API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) om de integratie
met derden te automatiseren.

Je kunt nu, via de API:

- Klanten (kinderen tenants) aanmaken die beheerd worden door jouw tenant.
- De pakketten beheren die beschikbaar zijn voor jouw klanten en hoe je de facturering zult afhandelen.
- Gebruikers toevoegen en beheren in jouw beheerde tenants.
- Moderators toevoegen en beheren in jouw beheerde tenants.
- Moderators uitnodigen en inloglinks naar tenantgebruikers sturen.

## Facturering

Bij facturering zijn er twee mogelijkheden:

1. Via FastComments Flex worden de gebruiksgegevens van jouw kindertenants automatisch samengevoegd en gefactureerd aan de oudertenant. Dit kan worden gemonitord via de [Billing Analytics Page](https://fastcomments.com/auth/my-account/analytics/billing).
2. Via FastComments Pro krijg je toegang om een vast aantal kindertenants te creëren voor een vaste maandprijs.

## Debranding

Beheerde tenants kunnen debranding inschakelen, wat onze logo's uit de comment widget verwijdert.

## Hoe White Labeling te Verkrijgen

Momenteel bieden de FastComments Flex en Pro plannen toegang tot de White Labeling API.

## Scripts en Voorbeelden

Een voorbeeldscript dat de API gebruikt om een tenant met gebruikers en moderators in te stellen [is hier beschikbaar](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Uitgebreide Validatie

Elke API-resource bevat uitgebreide validaties en restricties, met nuttige foutmeldingen, om je te begeleiden bij het correct gebruiken ervan.

<div class="code"><div class="title">Gedetailleerd Fout Voorbeeld</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Een gebruiker met dat id bestaat niet in deze tenant. Maak eerst de gebruiker aan en maak hen vervolgens een moderator.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Andere Toepassingen

De [tenant gebruikers](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) en [moderators](https://docs.fastcomments.com/guide-api.html#moderator-structure) API's kunnen ook worden gebruikt om
deze resources toe te voegen en te beheren in jouw eigen tenant, ongeacht white labeling.

## Documentatie

Je kunt de volledige documentatie van White Labeling en hoe je de API kunt gebruiken [hier](https://docs.fastcomments.com/guide-white-labeling.html) vinden.

## Conclusie

We hopen dat je deze update en de documentatie nuttig vond. Veel plezier met integreren!

{{/isPost}}

---