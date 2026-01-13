---
[category:Features]

###### [postdate]
# [postlink]FastComments Voegt Ondersteuning voor #HashTags Toe[/postlink]

{{#unless isPost}}
Heb je ooit een onderwerp of informatie willen #taggen? Nu kan het.
{{/unless}}

{{#isPost}}

### Wat is nieuw

Bij het reageren kunnen gebruikers nu één of meer `#hashtags` invoeren. Door op een `#hashtag` in een reactie te klikken ga je naar een weergave met andere reacties
met de weergegeven hashtag.

Daarnaast kunnen `#hashtags` worden gebruikt om te linken naar externe stukjes inhoud. Met deze release hebben we onze [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure) gelanceerd
die vooraf invullen van hashtags in je account mogelijk maakt.

Bij het vooraf invullen van hashtags kunnen we een URL voor elke tag definiëren. Dit betekent dat `#hashtags` ook kunnen worden gebruikt om te linken naar bijvoorbeeld een ticketnummer of
een document in een CRM.

Het `#`-symbool kan ook op verzoek worden gepersonaliseerd.

### Hoe te Gebruiken

Wanneer je `#` typt, en vervolgens het begin van een hashtag, verschijnt er een lijst met zoekresultaten.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="HashTags Gebruik" title="#hashtags Demo" />
</div>

Klik eenvoudig op de hashtag die je wilt toevoegen.

Daarnaast kun je de pijltoetsen omhoog en omlaag gebruiken om door deze lijst te navigeren, en op enter te drukken om te selecteren, of op escape om te vertrekken.

We weten dat je het `#`-symbool mogelijk wilt gebruiken zonder een hashtag toe te voegen. FastComments zal dit detecteren en niet in je typervaring binnendringen.

### Hash Tags Toevoegen

Als de hashtag die je wilt gebruiken niet in de lijst met suggesties staat - zal FastComments de hashtag automatisch achter de schermen aanmaken.

Automatische `#hashtag`-creatie kan worden uitgeschakeld volgens de documentatie [hier](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Wie Krijgt Het

Alle huidige en nieuwe FastComments-klanten, op alle niveaus, hebben nu toegang tot `#hashtags`. `#hashtags` zijn ook teruggedragen naar eerdere versies van de
reactiewidget.

### Hoe de Autocomplete Werkt

De tags die in de autocompleted lijst worden weergegeven zijn alleen van jouw account. HashTags worden niet gedeeld tussen FastComments-tenant.

### Documentatie

Er is specifieke documentatie voor `#hashtags`. Zie hier: https://docs.fastcomments.com/guide-hashtags.html

### Conclusie

Net als de rest van FastComments hopen we dat je deze functie snel en eenvoudig te gebruiken vindt.

Proost!

{{/isPost}}

---