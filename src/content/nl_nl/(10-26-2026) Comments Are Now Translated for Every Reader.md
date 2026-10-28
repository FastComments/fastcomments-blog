[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]Reacties Worden Nu Voor Elke Lezer Vertaald[/postlink]

{{#unless isPost}}
FastComments kan nu de reacties zelf vertalen, niet alleen de widget eromheen. Schakel het in per site of per pagina, automatisch of met een Vertaalknop, en elke lezer ziet het gesprek in zijn eigen taal met de originele één klik verwijderd.
{{/unless}}

{{#isPost}}

### Wat is er nieuw

FastComments is al een tijdje vertaald in achtentwintig talen, zodat de knoppen, labels en e‑mails al verschijnen in de taal van de lezer. De reacties waren dat niet. Een Spaanse reactie op een Engelse pagina bleef Spaans, en iedereen die het niet las scrollde er langs.

Deze release voegt **Comment Translation** toe. Wanneer het is ingeschakeld, wordt een reactie die in een andere taal is geschreven dan die van de lezer, vertaald weergegeven, met een kleine regel eronder die aangeeft waar deze vandaan komt en een **Show original**‑link om te zien wat er daadwerkelijk is geschreven.

<img src="images/fc-comment-translation-auto.png" alt="An English reader seeing a Spanish comment translated, with a Translated from Spanish line and a Show original link under it" title="Automatic Comment Translation" class="lozad" />

### Twee Modi

**Automatic** vertaalt vooraf. Elke reactie in een andere taal wordt vertaald aangeleverd, en de lezer kan naar het origineel schakelen als hij dat wil. Dit is de modus voor een gemeenschap die echt in twee of meer talen schrijft en wil dat iedereen dezelfde conversatie leest.

**Manual** voegt een **Translate**‑link toe aan elke reactie en doet niets totdat erop geklikt wordt. De lezer beslist welke reacties vertaald moeten worden, en er wordt niets besteed aan de reacties waar niemand om vraagt. Een reactie die al in de taal van de lezer is, geeft dat aan in plaats van te doen alsof hij vertaald wordt.

<img src="images/fc-comment-translation-manual.png" alt="Manual mode, where a Spanish comment has been translated on click and an English comment reports it is already in the reader's language" title="Manual Comment Translation" class="lozad" />

In beide modi is de taal van de lezer wat de widget al weergeeft: de **Locale / Language** die je instelt op de aanpassingsregel, of de browsers taal van de bezoeker als je er geen hebt ingesteld. Er is niets dat de bezoeker moet installeren, zich voor moet aanmelden of configureren. Het werkt hetzelfde of de widget nu in je pagina is ingebed, binnen een site‑builder zoals Google Sites, of op een zelfstandige FastComments‑reactiepagina.

### Inschakelen

Open je <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,
zoek **Comment Translation** direct onder **Locale / Language**, en kies Automatic of Manual. Standaard staat het uit.

Omdat het op een aanpassingsregel zit, kun je het naar wens afbakenen: je hele site, één domein, of een enkele pagina waar je weet dat het publiek gemengd is. Het is een server‑side instelling, dus het kan niet alleen via de JavaScript‑configuratie van de widget worden ingeschakeld.

### Wat het kost

Vertalingen worden geproduceerd door een taalmodel en gefactureerd als LLM‑tokens, dezelfde eenheid als
[AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html). Elk abonnement kan het inschakelen.

Elke reactie wordt één keer per taal vertaald en de vertaling wordt opgeslagen bij de reactie. Als duizend Spaanse lezers dezelfde Engelse thread openen, gebeurt het vertaalwerk één keer. Een typische reactie is een paar honderd tokens, wat bij Flex‑tarieven ongeveer een halve cent is. Als de auteur of een moderator een reactie bewerkt, wordt de opgeslagen vertaling weggegooid en wordt de reactie opnieuw vertaald bij de volgende weergave, zodat niemand een vertaling leest van tekst die niet meer bestaat.

Handmatige modus kost niets totdat iemand klikt.

### De details

De vertaalde tekst wordt behandeld alsof het een door iemand getypte reactie is. Het doorloopt dezelfde sanitisatie‑ en linkregels als het origineel, zodat een vertaling niets kan bevatten wat het origineel niet kon. Vermeldingen en hashtags behouden hun opmaak.

Reacties die erg lang zijn, of waarvan de taal niet met zekerheid kan worden gedetecteerd, blijven zoals geschreven in plaats van geraden. De taallijn onder een vertaalde reactie staat ook in de taal van de lezer, dus een Spaanse lezer van een Engelse reactie ziet "Traducido del inglés" en "Mostrar original".

### Overhead

De code voor deze nieuwe functie wordt niet geladen tenzij deze is ingeschakeld, zodat het de commentaarwidget voor onze andere gebruikers niet vertraagt.

### Documentatie

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">De gids voor Comment Translation</a>
bespreekt beide modi, de regelinstelling en facturering.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">De locale gids</a>
bespreekt hoe de taal van de widget in eerste instantie wordt gekozen.

### Conclusie

Dit kwam van een buurtvereniging waarvan de bewoners in het Engels en Spaans reageren, en die beide groepen dezelfde thread wilden laten lezen zonder iemand te vragen een browserextensie te installeren of zich ergens voor te registreren.

Als je een gemeenschap runt die in meer dan één taal schrijft, schakel het dan in en vertel ons hieronder hoe de vertalingen lezen.

Proost!

{{/isPost}}

---