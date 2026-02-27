---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Nieuwe IP Login Alerts[/postlink]

{{#unless isPost}}
FastComments stuurt nu een beveiligingswaarschuwings-e-mail wanneer een inlog wordt gedetecteerd vanuit een nieuw IP-adres, inclusief de geschatte locatie, om gebruikers te helpen ongeoorloofde toegang te detecteren.
{{/unless}}

{{#isPost}}

### Wat is nieuw

FastComments stuurt nu automatisch een beveiligingswaarschuwings-e-mail wanneer we een aanmelding op je account detecteren vanuit een IP-adres dat we nog niet eerder hebben gezien. De e-mail bevat:

- De **geschatte locatie** (stad en land) van de inlog.
- Het **IP-adres** dat is gebruikt.
- De **tijd** van de inlog.
- Een directe link om je **wachtwoord te wijzigen** als de inlog niet jouw was.

Dit is van toepassing op alle inlogmethoden: wachtwoord-gebaseerde login, magische links en twee-factor-authenticatie.

### Privacy

We slaan je ruwe IP-adres niet op. We slaan alleen een verbloemde vorm op voor beveiligingsvergelijking. De geschatte locatie wordt bepaald op het moment van inloggen en wordt niet opgeslagen.

**Je IP wordt niet gedeeld met een derde partij** om de locatie te bepalen. We hosten ons eigen service die de geschatte locatie haalt uit een (wekelijks bijgewerkte) kopie van de MaxMind-database.

### Wanneer Waarschuwingen Worden Verstuurt

Een waarschuwing wordt verstuurd wanneer **aan alle** onderstaande voorwaarden is voldaan:

- De inlog was succesvol.
- Het is niet de eerste inlog van de gebruiker.
- Het IP-adres is niet gezien bij een eerdere succesvolle inlog voor dat account.

Dit betekent dat je geen waarschuwing ontvangt bij je allereerste inlog, en je geen herhaalde waarschuwingen ontvangt voor hetzelfde IP.

### Conclusie

Dit is weer een stap dichter bij het veilig houden van je account. Als je een waarschuwing ontvangt die je niet herkent, raden we aan om direct je wachtwoord te wijzigen.

Laat ons hieronder weten als je feedback hebt!

Proost!

{{/isPost}}

---