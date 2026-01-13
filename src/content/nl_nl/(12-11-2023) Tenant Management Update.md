---
[category:Features]
###### [postdate]
# [postlink]Huurderbeheer Update[/postlink]

{{#unless isPost}}
FastComments heeft de interactie voor het beheren van uw huurders verbeterd!
{{/unless}}

{{#isPost}}

### Wat is nieuw

Vanaf 11 december 2023 heeft FastComments nu de mogelijkheid om van huurders te wisselen zonder andere huurders te imiteren.

### Doelgroep

Deze update is niet voor commentatoren of sitebeheerders die een enkele site beheren. Dit komt ten goede aan beheerders die veel sites of huurders beheren.

### Impact op Beheerders

Eerder was het creëren van huurders en het wisselen van gebruikers een uitdaging. Een aantal veelvoorkomende pijnpunten waren:

1. U moest een gebruiker aanmaken bij het creëren van uw huurder, aangezien die gebruiker "eigenaar" was van de huurder.
2. Dit betekende dat u voor elke site een nieuw e-mailadres moest gebruiken, zelfs als u één e-mail/account voor veel sub-huurders wilde gebruiken.
3. Wisselen van huurders vereiste imitatie, wat betekende dat uw gebruikers over alle huurders moesten worden gedupliceerd, met dezelfde rechten, enzovoort.

Nu:

1. Er is geen gebruikerscreatie vereist bij het creëren van een huurder.
2. Elke Super Admin-gebruiker met de juiste rechten heeft dezelfde rechten in alle sub-huurders.
3. Er is een `Wissel`-knop in de lijst van huurders die uw huidige gebruiker en rechten behoudt, maar verandert naar welke huurder u bent ingelogd.
4. Als u een beheerder van een bovenliggende huurder bent, heeft u moderatorrechten in sub-huurders wanneer u de commentwidget gebruikt.

Gebeurtenissen worden nog steeds gelogd in het Audit Log voor de huurder waarnaar u bent gewisseld.

### Imitatie

U kunt nog steeds gebruikers imiteren. Wissel naar een huurder en ga naar de `Gebruikers`-pagina.

### Voor Ontwikkelaars & Aandachtspunten

Bij het gebruik van de `POST /tenants` API is het `email`-veld nu optioneel. De documentatie is bijgewerkt.

### Toekomstige Updates

In de toekomst zullen er meer administratieve acties in de lijst van huurders komen, zoals het verwijderen van huurders, enzovoort.

### Conclusie

Zoals bij alle grote releases zijn we blij dat we de tijd hebben kunnen nemen om deze functie te optimaliseren, testen en correct uit te brengen. Laat het ons weten hieronder als u problemen ontdekt.

Proost!

{{/isPost}}

---