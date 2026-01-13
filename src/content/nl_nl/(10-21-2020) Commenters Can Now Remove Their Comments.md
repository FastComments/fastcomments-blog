---
[category:Features]
###### [postdate]
# [postlink]Reacties Kunnen Nu Door Henzelf Worden Verwijderd[/postlink]

{{#unless isPost}}
Een langverwachte update, je kunt nu je reacties die je met FastComments hebt achtergelaten verwijderen.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Jargon

#### Wat is Er Nieuw

Zoals onlangs aangekondigd - reacties die met FastComments zijn achtergelaten kunnen nu worden bewerkt - of je nu bent ingelogd of niet.

<img src="images/fc-deleting-demo.gif" alt="Verwijderdemo GIF (11mb)" title="Verwijderdemo" />

Als vervolg is de mogelijkheid om je reacties te verwijderen vrijgegeven. Begrijpelijk, net als het bewerken van reacties, is dit een van onze meest gevraagde functies en we zijn blij dat we deze mijlpaal met onze gebruikers hebben bereikt.

#### Hoe Het Werkt

Het verwijderen van reacties werkt hetzelfde als het bewerken - ingelogde gebruikers kunnen altijd hun reacties bewerken en verwijderen. Voor anonieme reageerders bieden onze servers een tijdelijk 24-uur venster waarin ze hun reactie kunnen bewerken of verwijderen na het reageren, zolang ze hun browser niet sluiten. Dit betekent bijvoorbeeld dat een anonieme reageerder kan reageren en vervolgens zijn reactie kan bewerken om eventuele typefouten te corrigeren of deze kan verwijderen, zonder ooit in te loggen!

Als de anonieme reageerder hun browser sluit, kunnen ze hun reactie niet meer bewerken of verwijderen, tenzij ze op de magische link klikken die naar hun e-mail is gestuurd.

Voor extra beveiliging wordt de tijdelijke bewerk sleutel ongeldig gemaakt bij elke poging om de sleutel verkeerd te raden.

#### Waarom Nu, na zo Lang?

De rationale hiervoor is dezelfde als waarom het bewerken zo lang heeft geduurd om vrijgegeven te worden. We wilden ervoor zorgen dat dit de prestaties van FastComments niet zou verminderen en we wilden ervoor zorgen dat het goed werkte met onze live commentaarfuncties. Ook wilden we dat de functie tegemoetkwam aan de meest voorkomende gebruikscases van onze klanten - anonieme reacties.

#### Live Reacties Verwijderen

Net als bij reageren en stemmen - verwijderen gebeurt live. Als twee gebruikers op dezelfde pagina zijn, en een gebruiker hun reactie verwijdert, zal de andere gebruiker zien dat deze is verwijderd.

#### Inschakelen van Reactieverwijdering

We hebben het bewerken en verwijderen van reacties standaard uitgerold voor al onze klanten. Momenteel kan het niet worden uitgeschakeld.

#### Derde Partij Integraties

Het verwijderen van een reactie zal ervoor zorgen dat het evenement wordt doorgegeven aan alle integraties die je hebt - zoals WordPress. Als je onze WordPress-plugin gebruikt, dan wordt het toevoegen van een reactie op de achtergrond je WordPress-installatie bijgewerkt, zodat je een kopie van je gegevens behoudt. Als je reacties verwijdert, volgen we dezelfde logica en verwijderen het uit je WordPress-installatie. Dit geldt voor andere integraties, niet alleen WordPress.

#### Conclusie

We weten dat deze functie door sommigen lang is verwacht. Zoals bij alle grote releases, zijn we blij dat we de tijd hebben kunnen nemen om deze functie te optimaliseren, te testen en goed vrij te geven.

Proost!

{{/isPost}}