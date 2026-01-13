---
[category:Features]
###### [postdate]
# [postlink]Reacties zijn nu aanpasbaar met FastComments[/postlink]

{{#unless isPost}}
Een zeer verwachte update, je kunt nu reacties die met FastComments zijn achtergelaten bewerken.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technische Jargon

#### Wat is nieuw

Reacties die met FastComments zijn achtergelaten kunnen nu worden bewerkt - ongeacht of je bent ingelogd of niet.

<img src="images/fc-editing-demo.gif" alt="Bewerkingsdemo GIF (17mb)" title="Bewerkingsdemo" />

Begrijpelijkerwijs is dit een van onze meest gevraagde functies, en we zijn blij dat we deze mijlpaal met onze gebruikers hebben bereikt.

#### Hoe het werkt

Ingelogde gebruikers kunnen altijd hun reacties bewerken. Voor anonieme reageerders bieden onze servers een tijdelijke periode van 24 uur waarin ze hun reactie kunnen bewerken nadat ze hebben gereageerd, zolang ze hun browser niet sluiten. Dit betekent bijvoorbeeld dat een anonieme reageerder kan reageren en vervolgens hun reactie kan bewerken om eventuele typfouten te corrigeren zonder ooit in te loggen!

Als de anonieme reageerder hun browser sluit, kunnen ze hun reactie niet bewerken tenzij ze op de magische link klikken die naar hun e-mail is verzonden.

Voor extra veiligheid wordt de tijdelijke bewerkingssleutel ongeldig gemaakt bij elke poging om de sleutel verkeerd te raden.

#### Waarom nu, na zo lange tijd?

Zoals met alle wijzigingen aan de client-side widget moeten we voorzichtig zijn om de grootte ervan niet te vergroten. Deze functie voegt aanzienlijke grootte toe aan de kern-codebase voor reacties (ongeveer 1kb gecomprimeerd - een stijging van ongeveer 10%).
We wilden ervoor zorgen dat dit de prestaties van FastComments niet zou verminderen en dat het goed zou samenwerken met onze live reactiefuncties. Ook wilden we dat de functie
de meest voorkomende gebruiksgevallen van onze klanten - anonieme reacties - ondersteunde.

#### Live Reacties Bewerken

Net als reageren en stemmen - gebeurt het bewerken live. Als twee gebruikers op dezelfde pagina zijn, en een gebruiker hun reactie bewerkt, zal de andere gebruiker deze update zien.

#### Reactiebewerking Inschakelen

We hebben het bewerken van reacties standaard voor al onze klanten uitgerold. Momenteel kan het niet worden uitgeschakeld.

#### Wat is de volgende stap?

We zijn van plan om in een toekomstige update de mogelijkheid om reacties te verwijderen uit te brengen.

#### Integraties van Derden

Het bewerken van een reactie zal ervoor zorgen dat de gebeurtenis zich verspreidt naar alle integraties die je hebt - zoals WordPress. Als je onze WordPress-plug-in gebruikt, wordt het toevoegen van een reactie op de achtergrond je WordPress-installatie bijgewerkt, zodat je een kopie van je gegevens behoudt. Als je een reactie bewerkt, volgen we dezelfde logica en werken we de kopie in je WordPress-installatie bij. Dit geldt voor andere integraties, niet alleen WordPress.

#### Conclusie

We weten dat deze functie door sommigen lang is gewenst. Zoals bij alle grote releases zijn we blij dat we de tijd konden nemen om deze functie te optimaliseren, te testen en goed uit te brengen.

Proost!

{{/isPost}}