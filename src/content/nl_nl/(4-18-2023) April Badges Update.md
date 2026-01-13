---
[category:Features]

###### [postdate]

# [postlink]April Badges Update[/postlink]

{{#unless isPost}}Er zijn enkele wijzigingen aangebracht in badges, zijn er enkele functies toegevoegd en zijn er verbeteringen aangebracht om te voorkomen dat badges verdwijnen tijdens het herprocessen.{{/unless}}

{{#isPost}}

### Wat is nieuw - Badge Stapeling

Voor gisteren, als je een set badges in je gemeenschap had zoals de volgende:

- Nieuwe Reactiegever (1 reactie)
- Gemeenschapslid (50 reacties)
- Expert (500 reacties)

... en een gebruiker eindigt met 500 reacties, zullen ze badges op hun reacties krijgen zoals dit:

    [Nieuwe Reactiegever] [Gemeenschapslid] [Expert]

In dit specifieke scenario willen we waarschijnlijk alleen de `Expert` badge tonen. Nou, de meeste van onze klanten willen dit, maar niet allemaal. Niet al onze huurders
hebben dezelfde opzet en we erkennen dit.

Echter, voor de gemeenschappen die het bovenstaande patroon volgen, wat de meeste zijn, willen ze dat de reacties de meest prestigieuze badge tonen.

Om deze use case aan te pakken, hebben we het concept van een badge **vervangen** door een andere badge toegevoegd. Door dit te doen, kunnen we een flow van badges creëren die een gebruiker kan verdienen:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Badge Stapeling" title="Badge Stapeling" />
</div>

Intern noemen we dit *badge stapeling*. De nieuwe badge "stapelt" zich bovenop de oude.

We kunnen dit configureren door een badge te bewerken en te zeggen dat deze een andere vervangt:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Badge Stapeling Configuratie" title="Badge Stapeling Configuratie" />
</div>

Het is vanzelfsprekend dat dit moeilijk te volgen kan zijn, dus de badgelijst is ook bijgewerkt om meer informatie te bieden, waaronder
welke badge wat vervangt.

### Wat is nieuw - Herverwerkingsverbeteringen

Wanneer je een wijziging aanbrengt in een badge, moeten we al je gebruikers doorlopen en bepalen of ze de badge nog steeds "verdienen",
en alle weergegeven badge-stijlen en caches bijwerken zodat de nieuwste versie wordt weergegeven.

Herverwerking verwijdert een badge niet langer van een gebruiker bij opslaan, zelfs niet als ze niet langer aan de criteria voldoen **tenzij de geconfigureerde criteria verandert**.

Administrators opmerking - je kunt de drempelcriteria voor een badge verlagen zonder dat herverwerking die badge verwijdert. Alleen **verhogen** van de drempel zal
herverwerking veroorzaken die de badge in sommige gevallen kan verwijderen.

Voor meer, lees verder in *Het Perspectief van de Reactiegever*.

### Het Perspectief van de Reactiegever

Herverwerking van badges is zeer riskant omdat gebruikers dol zijn op hun badges - en dat erkennen we! We willen een badge van een gebruiker niet afnemen omdat
ze de Reactie badge hebben verdiend doordat 100 gebruikers op hun reacties hebben gereageerd, en daarna 10 gebruikers later hun reacties verwijderen, of door moderators worden verwijderd.

De badge moet blijven, en dat doet hij, behalve...

Bij herverwerking weten we niet dat die eerdere reacties bestaan, dus de badge kan bij sommige gebruikers verwijderd worden als een badge wordt bewerkt, zoals wanneer de styling
wordt bijgewerkt, of als badge stapeling is ingesteld.

Dit is wat er gebeurde op 17 april 2023 toen we *Badge Stapeling* uitrolden en sommige gemeenschappen de functie inschakelden.

Twee scenario's werden waargenomen:

1. Gebruikers ontdekten dat sommige van hun badges verdwenen leken. Wat daadwerkelijk gebeurde was dat alle behalve de meest prestigieuze badges verborgen waren.
   - **Je kunt al je badges weergeven als je dat wilt.** Klik gewoon op het menu met drie stippen rechtsboven in je profiel en klik op `Beheer Badges`.
2. Sommige badges zijn daadwerkelijk verwijderd voor sommige gebruikers, zoals in het voorbeeld van de Reactie badge hierboven. Om dit in de toekomst te voorkomen, hebben we
    het herverwerkingsysteem verbeterd zodat de badge niet wordt verwijderd tenzij de badgecriteria zelf verandert en je niet langer aan de criteria voldoet, echter
    adviseren we gemeenschapsbeheerders hier tegen omdat, nogmaals, gebruikers dol zijn op hun badges.

### Voor Moderators

Er is geen verandering vanuit het perspectief van een moderator, behalve dat je in de meeste gevallen minder badges weergegeven zult zien. Je zult in plaats daarvan de meest prestigieuze van
de badges van jou en je gemeenschap leden weergegeven zien.

### Bestaande Klanten

We hebben de uitrol van deze functie naar alle bestaande klanten op alle niveaus voltooid! Badge stapeling is niet standaard ingeschakeld en moet handmatig worden geconfigureerd.

### Conclusie

We hopen dat je deze nieuwe set functies en fixes nuttig en gemakkelijk te gebruiken vindt. 

Proost!

{{/isPost}}