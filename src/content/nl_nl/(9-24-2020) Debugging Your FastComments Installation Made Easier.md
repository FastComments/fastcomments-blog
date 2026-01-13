---
[category:Tutorials]
###### [postdate]
# [postlink]Debugging Your FastComments Installation Made Easier[/postlink]

{{#unless isPost}}
Reacties worden niet weergegeven? Instellingen lijken niet toegepast te worden? Dat uitzoeken is nu een stuk eenvoudiger.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technische Jargon

#### Wat Is Nieuw

Bij <a href="https://fastcomments.com">FastComments</a> hebben we zojuist een browserextensie voor Google Chrome uitgebracht. Deze extensie helpt je te begrijpen welke configuratie
de comment widget ontvangt en waarom deze mogelijk niet wordt weergegeven.

Je kunt de extensie hier vinden: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Hoe Het Te Gebruiken

Als je merkt dat de comment widget niet laadt, of dat een configuratie die je hebt gedefinieerd niet wordt weergegeven, probeer dan <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">de extensie</a> te installeren 
en deze te openen op de betreffende pagina. Om het pictogram in je werkbalk te zien, moet je mogelijk op het puzzelstukje rechtsboven klikken om het vast te zetten, zoals weergegeven:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Hoe de Extensie Vast Te Zetten" title="Hoe de Extensie Vast Te Zetten" class="lozad" />
</div>

De extensie kan helpen bij het debuggen van twee soorten fouten. De eerste, als de widget helemaal niet op de pagina is opgenomen of als er een grote typfout in het script staat.

De tweede is als een bepaalde configuratie geen effect lijkt te hebben.

Om beide te debuggen, begin je simpelweg door op het pictogram te klikken.

Als de tool de comment widget niet op de pagina vindt, krijg je een grote rode foutmelding:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Embed.js niet gevonden voorbeeld" title="Embed.js niet gevonden voorbeeld" class="lozad" />
</div>

Als een of meer instanties van de widget zijn gevonden, zie je hun configuraties afzonderlijk weergegeven:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Voorbeeld van Meerdere Configuraties" title="Voorbeeld van Meerdere Configuraties" class="lozad" />
</div>

Bovendien zal de FastComments Debugger ook waarschuwingen weergeven voor veelvoorkomende valkuilen - zoals de widget die niet wordt weergegeven in de alleen-lezen modus als er geen reacties beschikbaar zijn.

#### "Eind" Instellingen van de Instanties?

Je kunt zien dat de debugger twee sets configuraties toont - een gemarkeerd als "Doorgegeven aan Widget" en een gemarkeerd als "Eind".

De configuratie "Doorgegeven aan Widget" is, zoals je misschien kunt raden, de configuratie die je aan de widget doorgeeft. Sommige waarden worden impliciet doorgegeven door embed.js zoals de URL of Pagina Titel - en die zijn inbegrepen.

De configuratie "Eind" is alles wat de widget gebruikt om zichzelf weer te geven. Dit kan zelf ingevulde waarden beteken (zoals instantie id), of <b>waarden van de widget aanpassings administratiepagina</b>.

#### Hoe Het Werkt

De comment widget slaat zijn configuratie op een plek op waar de debugger het kan vinden, en vervolgens scant de debugger de huidige pagina waarop je je bevindt naar instanties van de widget en laadt ze in het geheugen.

#### Welke Informatie Verzamelt Deze Extensie?

De FastComments Debug Tool belt niet naar huis of communiceert met enige FastComments-servers. In feite controleert de widget zelfs niet de inhoud van de pagina waarop je je bevindt
tenzij je deze opent.

#### Conclusie

We hopen dat het aanbieden van meer tools zoals deze het opzetten van FastComments gemakkelijker maakt voor elk type klant dat we hebben. Laat ons in de commentsectie hieronder weten
hoe dit voor jou heeft gewerkt.

We weten dat je in sommige gevallen nog steeds een helpende hand nodig kunt hebben - en daarvoor is er nog steeds de <a href="https://fastcomments.com/auth/my-account/help" target="_blank">klantenondersteuningspagina</a>.

Proost!

{{/isPost}}