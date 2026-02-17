---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Opdatering af e-mail notifikationsfrekvens[/postlink]

{{#unless isPost}}
Brugere kan nu kontrollere, hvor ofte de modtager e-mail notifikationer for nye kommentarer og svar — hvert minut, timeoversigt eller daglig oversigt — med en enkelt fælles indstilling, plus specifikke overskrivninger pr. abonnement.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Vi har tilføjet en **Ny Kommentar Notifikationsfrekvens** indstilling, der styrer, hvor ofte du modtager e-mail notifikationer for både svarnotifikationer og lejers (ny kommentar) notifikationer. De tre muligheder er:

- **Hvert minut** - modtag en e-mail så snart nye kommentarer ankommer (tjekket hvert minut).
- **Timeoversigt** - modtag et samlet resumé af nye kommentarer én gang i timen.
- **Daglig oversigt** - modtag et samlet resumé af nye kommentarer én gang om dagen.

Denne indstilling er tilgængelig for både lejeradministratorer og kommentatorer og gælder for alle e-mail notifikationer om kommentarer. Bemærk, at @mention notifikationer altid sendes straks uanset denne indstilling.

Du kan også overskrive frekvensen på et pr-abonnement basis i abonnements tabellen for mere præcis kontrol over individuelle sider.

### Sådan konfigureres det

1. Gå til dine [Notifikationsindstillinger](https://fastcomments.com/auth/my-account/edit-notifications).
2. Brug dropdown-menuen **Ny Kommentar Notifikationsfrekvens** til at indstille din foretrukne frekvens.
3. Hvis ønskes, overskriv frekvensen for individuelle abonnementer i abonnements tabellen.
4. Klik på **Gem ændringer**.

Standard er **Hvert minut**, hvilket svarer til den tidligere adfærd.

### API Support

Notifikationsfrekvensen er også tilgængelig via API'en. Brugerindstillingen er feltet <div class="code">notificationFrequency</div>, og overskrivninger pr. abonnement kan indstilles via abonnementets <div class="code">notificationFrequency</div> felt. Se [API-dokumentationen](https://docs.fastcomments.com/guide-api.html) for detaljer.

### Afslutning

Dette giver brugerne kontrol over deres indbakke uden at skulle afmelde sider helt. Én indstilling dækker nu både svar- og lejer-notifikationer, hvilket gør det lettere at administrere.

Lad os vide herunder, hvis du har feedback!

Skål!

{{/isPost}}

---