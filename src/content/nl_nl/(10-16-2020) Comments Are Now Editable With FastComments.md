---
[category:Features]
###### [postdate]
# [postlink]Reacties zijn nu bewerkbaar met FastComments[/postlink]

{{#unless isPost}}
Een langverwachte update, je kunt nu reacties die zijn achtergelaten met FastComments bewerken.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Vakjargon

#### Wat is nieuw

Reacties die zijn achtergelaten met FastComments kunnen nu worden bewerkt - of je nu bent ingelogd of niet.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Bewerkingsdemonstratie"></video>

Begrijpelijkerwijs is dit een van onze meest gevraagde functies en we zijn blij dat we deze mijlpaal met onze gebruikers hebben bereikt.

#### Hoe het werkt

Ingelogde gebruikers kunnen altijd hun reacties bewerken. Voor anonieme reacties kunnen onze servers een tijdelijke bewerkingsperiode van 24 uur bieden zodat ze hun reactie kunnen bewerken na het plaatsen van de reactie, zolang ze hun browser niet sluiten. Dit betekent bijvoorbeeld dat een anonieme reageerder een reactie kan plaatsen en deze vervolgens kan bewerken om eventuele typfouten te corrigeren, zonder ooit in te loggen!

Als de anonieme reageerder zijn browser sluit, kan hij zijn reactie niet meer bewerken, tenzij hij op de magische link klikt die naar zijn e-mail is verzonden.

Voor extra beveiliging zal de tijdelijke bewerkingssleutel ongeldig worden bij elke poging om de sleutel verkeerd te raden.

#### Waarom nu, na zo'n lange tijd?

Zoals met alle wijzigingen aan de client-side widget moeten we voorzichtig zijn om de grootte ervan niet op te blazen. Deze functie voegt aanzienlijke grootte toe aan de kerncode voor reacties (ongeveer 1kb gecomprimeerd - ongeveer een stijging van 10%). We wilden ervoor zorgen dat dit de prestaties van FastComments niet zou verminderen en dat het goed zou werken met onze live commentaarfuncties. Ook wilden we dat de functie tegemoetkwam aan de meest voorkomende gebruikssituatie van onze klanten - anoniem reageren.

#### Live Reacties Bewerken

Net als reageren en stemmen - bewerken gebeurt live. Als twee gebruikers op dezelfde pagina zijn en een gebruiker zijn reactie bewerkt, zal de andere gebruiker de update zien.

#### Reactie Bewerken Inschakelen

We hebben het bewerken van reacties standaard uitgerold voor al onze klanten. Momenteel kan het niet worden uitgeschakeld.

#### Wat is de Volgende Stap?

We zijn van plan om in een toekomstige update de mogelijkheid toe te voegen om reacties te verwijderen.

#### Integraties van Derden

Het bewerken van een reactie zal de gebeurtenis naar alle integraties die je hebt, doorgeven - zoals WordPress. Als je onze WordPress-plug-in gebruikt, wordt het toevoegen van een reactie op de achtergrond je WordPress-installatie bijgewerkt zodat je een kopie van je gegevens behoudt. Als je een reactie bewerkt, volgen we dezelfde logica en werken we de kopie in je WordPress-installatie bij. Dit geldt ook voor andere integraties, niet alleen WordPress.

#### Ter Conclusie

We weten dat deze functie langverwacht is door sommigen. Zoals bij alle grote releases zijn we blij dat we de tijd konden nemen om te optimaliseren, te testen en deze functie goed uit te brengen.

Gezondheid!

{{/isPost}}

---