---
[category:Features]

###### [postdate]

# [postlink]Profielen, Badges en Direct Messaging[/postlink]

{{#unless isPost}}In deze release hebben we veel functies die gemeenschappen belonen die FastComments gebruiken en hen helpen te communiceren.{{/unless}}

{{#isPost}}

### Wat is er nieuw
FastComments heeft officieel Gebruikersprofielen en gerelateerde functies uitgebracht.

### Gebruikersprofielen

Een gebruikersprofiel bestaat uit hun naam, of ze online zijn, hun recente activiteit en een plek om op hun profiel te reageren.

Hun badges en de voortgang bij het verdienen van badges worden hier ook weergegeven.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="FastComments Gebruikersprofiel" title="FastComments Gebruikersprofiel"></video>
</div>

Gebruikers kunnen hun eigen profiel zien door op hun avatar in een reactie-thread te klikken, of [naar hun accountpagina te gaan](https://fastcomments.com/auth/my-account).

Daarnaast kun je een directe boodschap sturen naar een gebruiker vanuit hun profiel.

### Gebruikersprofiel Modal
Wanneer de avatar van een gebruiker is geselecteerd, wordt de Profiel Modal geopend. Dit is ook toegevoegd voor moderators op de Pagina voor Comment Moderatie.

### Gebruikers belonen met Badges

Badges zijn een recente toevoeging aan FastComments die je in staat stelt om gebruikers van je gemeenschap te belonen. Het creëren van een badge is eenvoudig:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Maak een Badge" title="Maak een Badge" />
</div>

Badges kunnen worden uitgereikt op basis van de volgende voorwaarden:

- Aantal achtergelaten Reacties
- Aantal Verhoogde Stemmen Verdiend
- Aantal Ontvangen Antwoorden
- Aantal Vastgepinde Reacties
- Veteraan (tijd sinds eerste reactie)
- Laat in de Nacht Reageren
- Snelle Reactietijd
- Reageren op Specifieke Pagina
- Moderators - Aantal Verwijderde Reacties
- Moderators - Aantal Goedkeurde Reacties
- Moderators - Aantal Niet-Goedgekeurde Reacties
- Moderators - Aantal Beoordeelde Reacties
- Moderators - Aantal Gemarkeerde Spam Reacties
- Moderators - Aantal Gemarkeerde Geen Spam Reacties

Zoals je kunt zien, zijn er veel soorten situaties waarin we gebruikers kunnen belonen.

We kunnen meerdere *niveaus* van badges definiëren. Bijvoorbeeld, we zouden `Comment Count` badges kunnen toevoegen met drempels van 10, 100 en 1000 achtergelaten reacties. Terwijl gebruikers
interageren in jouw gemeenschap, zullen hun verdiende badges in de loop van de tijd **opstapelen**.

Laten we de *Moderators* niet vergeten. In veel gemeenschappen is dit een ondankbare baan. Geef je moderators iets om mee te pronken door Moderator badges voor hen in te stellen.

We ondersteunen ook een paar unieke gevallen, zoals de `Night Owl` en `Fast Reply Time` badges om leden te erkennen die laat in de nacht actief zijn of snel reageren. `Fast Reply Time` werkt het beste wanneer de live functies van FastComments worden gebruikt.

Wanneer nieuwe badges worden aangemaakt, worden ze automatisch toegevoegd aan bestaande leden van jouw gemeenschap die in aanmerking komen.

### Direct Messaging

Klanten hebben sinds de lancering van FastComments om de mogelijkheid gevraagd om gebruikers direct te berichten. Twee jaar later zijn we blij deze functie eindelijk aan te kondigen en danken we
diegenen die geduldig hebben gewacht.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="FastComments Direct Messaging" title="FastComments Direct Messaging"></video>
</div>

Direct Messaging stelt leden van een gemeenschap in staat om privé met elkaar te berichten, maar het is ook een nuttig hulpmiddel voor Moderators en Administrators om contact op te nemen met reageerders.

Zoals het meeste van FastComments zijn alle Direct Messaging functies live.

#### Asynchrone Direct Messaging

Wanneer je een gebruiker een bericht stuurt, kunnen ze offline zijn. In dit geval sturen we de gebruiker een e-mail om hen te laten weten dat ze een nieuw bericht hebben.

#### Direct Messaging Via E-mail

Wanneer een gebruiker een bericht via e-mail ontvangt, hebben ze de mogelijkheid om te reageren door op die e-mail te reageren.

<div class="text-center">
    <img src="/images/email-dm.png" alt="DM E-mail" title="DM E-mail" />
</div>

Wanneer ze dat doen, zal hun reactie **live** verschijnen voor de andere gebruiker in het Berichten-tab van hun profiel.

### Veilige SSO

FastComments Gebruikersprofielen is volledig compatibel met bestaande Veilige SSO-installaties.

Dingen zoals de privacy-instellingen van de gebruiker kunnen ook worden geconfigureerd via de `isProfileActivityPrivate` vlag in de SSO payload.

 standaard is `isProfileActivityPrivate` waar.

### Bestaande Klanten

We hebben de uitrol van deze functie voltooid voor alle bestaande klanten op alle niveaus.

### Privacy Configureren

Door je profiel te bekijken, zijn er opties om:

- Reacties op je profiel uit te schakelen.
- Voorkomen dat je activiteit door anderen kan worden bekeken.
- Voorkomen dat anderen je direct berichten.

### Gegevens Verzameld

Gebruikersprofielen worden aangemaakt op basis van gegevens die we vandaag hebben, zoals hun naam, welke reacties ze recentelijk hebben achtergelaten, enzovoort.

We zullen geen aanvullende gegevens verzamelen om de profielen van gebruikers uit te breiden. We beschouwen Gebruikersprofielen meer als het typische profiel van een gebruiker op een forum.

### Conclusie

We denken dat deze functies FastComments als platform aanzienlijk uitbreiden, en we hopen dat je ze nuttig en gemakkelijk te gebruiken vindt.

Proost!

{{/isPost}}

---