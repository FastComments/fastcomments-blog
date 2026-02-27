---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Opdatering af e-mailnotifikationsfrekvens[/postlink]

{{#unless isPost}}
Brugere kan nu styre, hvor ofte de modtager e-mailnotifikationer for nye kommentarer og svar, hver minut, timevis opsummering eller daglig opsummering, med separate indstillinger for svar- og administratornotifikationer, plus individuelle abonnementsovertrædelser.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Vi har tilføjet indstillingerne **Svarnotifikationsfrekvens** og **Administratornotifikationsfrekvens**, der styrer, hvor ofte du modtager e-mailnotifikationer for henholdsvis svar og nye kommentarer. De tre muligheder for hver er:

- **Hvert minut** - modtag en e-mail, så snart nye kommentarer ankommer (tjekket hvert minut).
- **Timevis opsummering** - modtag en samlet oversigt over nye kommentarer én gang i timen.
- **Daglig opsummering** - modtag en samlet oversigt over nye kommentarer én gang om dagen.

Svarnotifikationsfrekvens er tilgængelig for alle brugere og er som standard indstillet til **Hvert minut**. Administratornotifikationsfrekvens er tilgængelig for webstedets administratorer og er som standard indstillet til **Timevis opsummering**. Bemærk, at @mention-notifikationer altid sendes med det samme uanset disse indstillinger.

Du kan også tilsidesætte frekvensen for hvert abonnement i Abonnements-tabellen for mere detaljeret kontrol over individuelle sider.

### Sådan konfigureres det

1. Gå til dine [Notifikationsindstillinger](https://fastcomments.com/auth/my-account/edit-notifications).
2. Brug dropdown-menuerne **Svarnotifikationsfrekvens** og **Administratornotifikationsfrekvens** til at indstille dine foretrukne frekvenser.
3. Tilsidesæt eventuelt frekvensen for individuelle abonnementer i Abonnements-tabellen.
4. Klik på **Gem ændringer**.

### API Support

`notificationFrequency`-feltet på brugerobjektet styrer svarnotifikationsfrekvens, og `adminNotificationFrequency`-feltet styrer administratornotifikationsfrekvens. Tilsidesættelser pr. abonnement kan indstilles via abonnements `notificationFrequency`-felt. Se [API-dokumentationen](https://docs.fastcomments.com/guide-api.html) for detaljer.

### Afslutning

Dette giver brugerne kontrol over deres indbakke uden at skulle melde sig helt ud fra sider.

Lad os vide nedenfor, hvis du har feedback!

Skål!

{{/isPost}}

---