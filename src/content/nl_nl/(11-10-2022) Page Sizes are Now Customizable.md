---
[category:UI & Customization]

###### [postdate]
# [postlink]Paginaformaten zijn nu aanpasbaar[/postlink]

{{#unless isPost}}
FastComments had sinds de lancering een vaste paginagrootte van 30 opmerkingen. Dit is nu aanpasbaar!
{{/unless}}

{{#isPost}}

### Wat is nieuw

Je opmerkingen kunnen nu verschillende paginagrootten hebben, en dit kan nu globaal worden aangepast voor je account, of op een
site- of zelfs paginaniveau. Dit kan wenselijk zijn als je wilt dat bepaalde pagina's minder of meer opmerkingen tonen voordat de gebruiker
moet pagineren.

Dit heeft ook invloed op oneindig scrollen, en op alle frameworks of integraties die opmerkingen van FastComments weergeven.

Paginagrootten kunnen variëren van `10` tot wel `200`. De standaard blijft op `30`.

### Hoe het te krijgen

Ga gewoon naar de betrouwbare [Widget Aanpassingsinterface](https://fastcomments.com/auth/my-account/customize-widget) en definieer
je paginagrootte.

Houd er rekening mee dat FastComments de getoonde opmerkingen op elke pagina vooraf berekent, dus het wijzigen van deze parameter zal ons systeem
dwingen om al je opmerkingen opnieuw te berekenen. Dit zal geen downtime veroorzaken, maar het kan een paar minuten duren voordat de wijziging zichtbaar is.

### Documentatie

Geüpdatete documentatie over paginagrootten is te vinden op [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Brekende Wijzigingen

Als onderdeel van deze wijziging zijn twee vertalingen die in de opmerkingenwidget zijn gedefinieerd, hernoemd. `PREV_30` en `NEXT_30` zijn nu
`PREV` en `NEXT`, respectievelijk, en bevatten een `[count]` variabele.

Als je vertalingen voor de paginatieknoppen hebt gedefinieerd via de Widget Aanpassingsinterface, dan hebben we deze al voor je gemigreerd.
Als je de vertalingen op een of andere manier via code doorgeeft, moet je deze bijwerken:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### Tot Slot

Zoals bij alle grote releases zijn we blij dat we de tijd konden nemen om deze functie te optimaliseren, te testen en goed uit te brengen. Laat ons hieronder weten
als je problemen ontdekt.

Proost!

{{/isPost}}

---