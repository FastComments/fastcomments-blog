---
[category:Features]

###### [postdate]
# [postlink]Vrijgeven van Weergavenamen[/postlink]

{{#unless isPost}}
FastComments heeft altijd weergavenamen ondersteund voor SSO-gebruikers. Echter, dit werd nooit blootgesteld aan reguliere commenters. Vandaag verandert dat!
{{/unless}}

{{#isPost}}

### Wat is er nieuw

FastComments heeft altijd weergavenamen ondersteund voor SSO-gebruikers. Echter, dit werd nooit blootgesteld aan reguliere commenters. Vandaag verandert dat!

Op de [Accountgegevens](https://fastcomments.com/auth/my-account/edit-details) pagina kun je nu een nieuw veld `Weergavenaam` invullen. `Weergavenaam` zal
worden weergegeven bij je opmerkingen en je profielen.

### Emoji's

In het verleden hadden gebruikers moeite met het gebruik van emoji's in gebruikersnamen omdat je je gebruikersnaam moest invoeren om in te loggen. Echter, nu kan `Weergavenaam` emoji's bevatten.

### Uniciteit en Misbruik

Het punt van `Weergavenaam` is dat het niet uniek is. Als twee FastComments.com gebruikers, op twee zeer verschillende grote gemeenschappen, vergelijkbare namen hebben, willen we dat ze gewoon hun gewenste weergavenaam kunnen instellen. Echter, we kunnen niet beperken waar mensen commentaar geven met hun wereldwijde FastComments-account, dus soms kan dit
leiden tot verwarring.

Een vergelijkbare naam hebben als een andere gebruiker, of een moderator, is op zich geen geval van misbruik. Echter, als je dit misbruikt door opzettelijk andere gebruikers te imiteren, kunnen we deze functie op je account uitschakelen en ben je beperkt tot het gebruik van `gebruikersnaam`.

### Inloggen

Je gebruikt nog steeds je gebruikersnaam om in te loggen - **niet je weergavenaam!**

### Voor Ontwikkelaars & Aantekeningen

De reguliere `User` objecten die via de API worden blootgesteld hebben nu `displayName`.

### Conclusie

Zoals bij alle grote releases, zijn we blij dat we de tijd konden nemen om deze functie te optimaliseren, te testen en goed vrij te geven. Laat het ons weten
hieronder als je problemen ontdekt.

Proost!

{{/isPost}}

---