---
[category:Features]
###### [postdate]
# [postlink]FastComments Krijgt @mentions[/postlink]

{{#unless isPost}}
Heb je ooit één of meer gebruikers in een reactie willen @vermelden? Nu kan dat.
{{/unless}}

{{#isPost}}

### Wat is nieuw

Voorheen zou FastComments gebruikers notificeren als je op hun reacties reageerde, maar er was geen manier om meerdere mensen in een enkele reactie te taggen. Daarnaast werden deze
notificaties elk uur in batches verzonden. Met `@mentions` is het nu mogelijk om één of meer gebruikers te taggen en FastComments zal hen onmiddellijk via e-mail informeren.

### Hoe te gebruiken

Wanneer je `@` typt, en vervolgens het begin van een gebruikersnaam, verschijnt er een lijst met zoekresultaten.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Gebruik van Mentions" title="@mentions Demo" />
</div>

Klik eenvoudig op de naam van de gebruiker die je wilt taggen.

Bovendien kun je de omhoog- en omlaagpijlen gebruiken om door deze lijst te navigeren, en op enter drukken om te selecteren, of op escape om te verlaten.

We weten dat je het `@`-symbool misschien wilt gebruiken zonder een gebruiker te taggen. FastComments zal dit detecteren en niet tussenkomen in je typervaring.

### Wie krijgt het

Alle huidige en nieuwe FastComments-klanten, op alle niveaus, hebben nu toegang tot `@mentions`. `@mentions` zijn ook teruggepakt naar eerdere versies van de
reactiewidget.

### Hoe de Autocomplete Werkt

De gebruikers die in de autocompleted lijst worden getoond, worden bepaald door:

- Gebruikers die op dezelfde pagina of thread hebben gereageerd.
- Gebruikers die hun FastComments-accounts via dezelfde site hebben aangemaakt.
- Moderators van de huidige site.
- SSO-gebruikers die tot de huidige huurder behoren.

### Reacties Bewerken

Vermeldingen kunnen aan bestaande reacties worden toegevoegd door ze te bewerken. Echter, de applicatie `Moderate Comments` autocomplete momenteel geen `@mentions`.

### Toekomstige Overwegingen

In de toekomst zullen gebruikers die FastComments in een browservenster open hebben, een melding krijgen wanneer ze worden vermeld, als ze zijn ingeschreven voor notificaties.

### Ter conclusie

Net als de rest van FastComments hopen we dat je deze functie snel en eenvoudig kunt gebruiken.

Proost!

{{/isPost}}