---
[category:API & Development]
###### [postdate]
# [postlink]Comment Menu Update[/postlink]

{{#unless isPost}}
Deze update is voornamelijk voor ontwikkelaars die FastComments aanpassen. We hebben enkele API-wijzigingen doorgevoerd en enkele optimalisaties gemaakt.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit artikel bevat technische terminologie

### Wat is er nieuw

Sommige FastComments-huurders passen de commentwidget aan. Dit creëert een contract
tussen uw aanpassingen en onze implementatie. We doen ons best om dit
contract niet te breken, maar als onderdeel van deze aankondiging hebben we een kleine brekende wijziging.

### Voor ontwikkelaars

Een CSS-selector voor het comment menu is gewijzigd.

Oud:

    .comment .menu .menu-content

Nieuw:

    .menu-content

### Bestaande huurders

Als u de "menu-content" selector al gebruikt - gefeliciteerd! We hebben al onze
huurders die deze selector gebruiken doorgenomen en hun widgetconfiguraties bijgewerkt om breuken te voorkomen.

Laat het ons weten als u problemen ondervindt.

### Redenering

Sinds de commentwidget is gemaakt, was het comment menu puur een CSS-gedreven dropdown. Dit
is een mooie simpele, snelle manier om een dropdownmenu te implementeren dat ook niet veel code vereist - een ontwerpgdoel van FastComments.

Echter, in de loop der jaren zijn er problemen ontstaan.

Ten eerste, wanneer het commentgebied een specifieke hoogte heeft en scrollbaar is, zoals bij Streaming Chat, 
is het moeilijk om het menu onderaan te bereiken omdat het menu probeert verder te gaan dan 
het scrollbare inhoudsgebied. Dit maakt een deel van het menu onzichtbaar en vereist dat je 
je muis beweegt en opnieuw over het menu zweeft om het werk te doen dat je net probeerde af te ronden. We vonden 
dat dit frustrerend was in gebruik.

Er zijn enkele oplossingen bedacht, zoals het menu **omhoog** draaien,
maar dit werkt ook niet als de widgethoogte niet hoog genoeg is en er veel actie-items in het menu zijn - zoals voor beheerders. In dat geval zou het ideaal zijn om het menu naar beneden te laten vallen
ver voorbij het scrollbare inhoudsgebied.

### Voordelen van de wijziging

Een voordeel van deze wijziging is dat we veel code hebben kunnen abstraheren in een asynchroon ladend
module. Dit stelt ons in staat om de acties die u kunt ondernemen op commentgegevens uit te breiden zonder
de initiële laadtijd van de widget te vervuilen. Dit introduceert een netwerkaanroep de eerste keer dat je over het bewerkingsmenu zweeft, maar het initiële pakket is heel klein (< 1kb), dus dit zou niet erg merkbaar moeten zijn.

Het is erg moeilijk om software verder te ontwikkelen en tegelijkertijd de grootte in de loop van de tijd te verkleinen. Gewoonlijk begint software snel en wordt langzaam. Dus, we zijn altijd blij om te blijven werken aan het snel houden van FastComments:

    Voor: 28.76kb gzipped (108.02kb totaal)
    Na: 28.39kb gzipped (105.79kb totaal)

Minder code betekent ook minder code voor uw browser om te parseren bij het laden van de pagina. De impact hiervan zal toenemen naarmate er meer functies worden toegevoegd.

### Prestatievoordelen

Het oude menu rendeerde alle menu-items en laadde alle extensies om te zien of de extensies
items hadden om toe te voegen, en rendeerde die ook - voor elke opmerking - zodat de inhoud klaar was voor uw muis.

Er zijn gewoonlijk slechts 30 - 100 objecten, dus dit blijkt meestal geen groot probleem te zijn, maar de impact groeide. Het nieuwe systeem verwijdert deze zorg
aangezien het menu nu alleen op aanvraag wordt gerenderd.

De handelswaar is dat het nieuwe menu wordt gepositioneerd en gerenderd met JS om te bereiken wat we willen. We zullen
doorgaan met optimaliseren waar we kunnen, maar het presteert momenteel goed.

### Conclusie

Bedankt aan onze klanten voor hun geduld bij het doorvoeren van deze wijzigingen. We hopen dat u 
blijft houden van FastComments.

Proost!

{{/isPost}}