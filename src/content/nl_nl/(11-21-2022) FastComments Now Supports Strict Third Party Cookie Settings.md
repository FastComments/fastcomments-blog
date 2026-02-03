---
[category:Security]

###### [postdate]
# [postlink]FastComments ondersteunt nu strikte instellingen voor cookies van derden[/postlink]

{{#unless isPost}}
Tot nu toe vereiste FastComments dat cookies van derden waren ingeschakeld om volledig te functioneren. Dit is niet langer het geval!
{{/unless}}

{{#isPost}}

### Wat is nieuw

Het standaard uitschakelen van cookies van derden wordt de norm in op privacy gerichte browsers. Een voorbeeld hiervan is Apple's Safari op iOS, waar
als je je e-mailadres achterlaat om te reageren met FastComments, die reactie verifieert en vervolgens terugkeert naar die pagina om een andere reactie achter te laten, of te reageren
op iemand, je zult merken dat verdere reacties die je achterlaat als onverenigd worden gemarkeerd.

Dit zal alleen gebeuren met de standaardinstelling die een `Ongecontroleerd` label op reacties toont. Dit kan echter invloed hebben op andere zaken zoals automatische goedkeuringen
als automatische goedkeuringen alleen zijn ingeschakeld voor geverifieerde reacties.

Zoals je je kunt voorstellen, kan dit leiden tot frustrerend gedrag waarbij een gebruiker zijn reactie verifieert, op "Ingelogd blijven" klikt, en zij zijn
toch niet ingelogd wanneer ze jouw site of applicatie bezoeken. Let op dat dit niet van toepassing is op SSO-integraties, aangezien SSO niet afhankelijk is
van cookies.

Nu, met een nieuwe instelling die kan worden ingeschakeld genaamd `Enable Third-Party Cookie Popup` in de widgetinstellingen, is dit probleem opgelost door
een pop-up te openen die de cookie van de gebruiker ophaalt. Voorlopig gebeurt dit alleen als ze interactie hebben met de reactiewidget, maar het resultaat is dat
de reactie wordt geplaatst vanuit hun FastComments.com-sessie, waardoor hun reactie als geverifieerd wordt gemarkeerd, enzovoort.

### Hoe te krijgen en documentatie

Alle FastComments-klanten op alle niveaus hebben nu toegang tot deze functie. Bekijk [de documentatie](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) om te leren hoe je de bypass van cookies van derden kunt inschakelen.

### Conclusie

Zoals bij alle grote releases zijn we blij dat we de tijd hebben kunnen nemen om deze functie te optimaliseren, te testen en goed uit te brengen. Laat het ons hieronder weten
wanneer je problemen tegenkomt.

Proost!

{{/isPost}}

---