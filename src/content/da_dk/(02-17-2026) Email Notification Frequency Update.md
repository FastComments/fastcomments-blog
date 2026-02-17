---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Opdatering af E-mail Notifikationsfrekvens[/postlink]

{{#unless isPost}}
Brugere kan nu styre, hvor ofte de modtager e-mail notifikationer for nye kommentarer og svar, hver minut, timelig opsummering eller daglig opsummering, med en enkelt delt indstilling, plus individuelle abonnementsoverride.
{{/unless}}

{{#isPost}}

### Hvad er Nyt

Vi har tilføjet en **Frekvens for Notifikationer om Nye Kommentarer** indstilling, der styrer, hvor ofte du modtager e-mail notifikationer for både svarnotifikationer og lejer (ny kommentar) notifikationer. De tre muligheder er:

- **Hver minut** - modtag en e-mail så snart nye kommentarer ankommer (tjekkes hver minut).
- **Timelig opsummering** - modtag en samlet oversigt over nye kommentarer en gang i timen.
- **Daglig opsummering** - modtag en samlet oversigt over nye kommentarer en gang om dagen.

Denne indstilling er tilgængelig for både lejeradministratorer og kommentatorer, og gælder for alle kommentarnotifikations-e-mails. Bemærk, at @mention notifikationer altid sendes med det samme uanset denne indstilling.

Du kan også overstyre frekvensen på et per-abonnement basis i abonnementstabellen, for finere kontrol over individuelle sider.

### Hvordan Man Konfigurerer Det

1. Gå til dine [Notifikationsindstillinger](https://fastcomments.com/auth/my-account/edit-notifications).
2. Brug dropdown-menuen **Frekvens for Notifikationer om Nye Kommentarer** til at indstille din foretrukne frekvens.
3. Valgfrit, overstyr frekvensen for individuelle abonnementer i abonnementstabellen.
4. Klik på **Gem Ændringer**.

Standard er **Hver minut**, hvilket svarer til den tidligere adfærd.

### API Support

Notifikationsfrekvensen er også tilgængelig via API'en. Bruger-niveau indstillingen er `notificationFrequency` feltet, og per-abonnement overrides kan indstilles via abonnementets `notificationFrequency` felt. Se [API dokumentationen](https://docs.fastcomments.com/guide-api.html) for detaljer.

### Afslutningsvis

Dette giver brugerne kontrol over deres indbakke uden at skulle afmelde sig fra sider helt. Én indstilling dækker nu både svar- og lejernotifikationer, hvilket gør det enklere at administrere.

Lad os vide nedenfor, hvis du har nogen feedback!

Skål!

{{/isPost}}

---