---
[category:Features]
###### [postdate]
# [postlink]Meldingen voor E-mails Ingeschakeld Voor Abonnementen[/postlink]

{{#unless isPost}}
FastComments verstuurt nu e-mails naar gebruikers voor pagina's waarop ze zijn geabonneerd.
{{/unless}}

{{#isPost}}

### Wat is nieuw

Met FastComments kunnen gebruikers op het belpictogram in een commentaarwidget klikken om zich op die pagina te abonneren. We zullen ze op de hoogte stellen
wanneer er nieuwe opmerkingen zijn geplaatst op die pagina, of wanneer er een nieuwe opmerking is in een reply-thread waaraan ze deelnemen.

We hebben dit al jaren gedaan, echter hebben we geen e-mails voor deze meldingen verzonden - ze waren alleen zichtbaar in ons dashboard.

We zullen nu e-mails voor deze meldingen verzenden.

### Nieuwe E-mailtypes

We sturen nu twee nieuwe soorten e-mails. De eerste is wanneer je slechts een paar meldingen hebt. We zullen de nieuwe opmerkingen simpelweg
in de e-mail voor je opsommen.

De tweede soort e-mail die je ontvangt bevat links naar elke pagina waarvoor je meldingen hebt ontvangen. Dit wordt verzonden
wanneer je veel meldingen ontvangt.

Deze meldingen e-mails zijn alleen voor nieuwe opmerkingen op pagina's waarop je bent geabonneerd.

### E-mail Meldingsschema

Meldings-e-mails worden elk uur verzonden om overmatige e-mails te voorkomen. De uitzondering is als de betreffende pagina meer dan tienduizend
opmerkingen heeft, in welk geval we alleen meldingen voor die pagina eenmaal per dag verzenden.

### Voor Site-eigenaren - De E-mails Aanpassen

Een nieuwe `Nieuwe Abonnement Opmerkingen` e-mailtemplate zal binnenkort beschikbaar zijn om aan te passen.

### Voor Ontwikkelaars & Problemen

Voor SSO-gebruikers zullen we de meldings-e-mails standaard niet verzenden. Je moet een nieuwe vlag doorgeven: `optedInSubscriptionNotifications: true` in het gebruikersobject, of
in de payload naar de commentaarwidget, om deze nieuwe meldingen in te schakelen.

### Conclusie

Zoals bij alle grote releases zijn we blij dat we de tijd hebben kunnen nemen om deze functie te optimaliseren, te testen en correct te lanceren. Laat het ons hieronder weten
als je problemen tegenkomt.

Proost!

{{/isPost}}

---