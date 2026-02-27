---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]E-mailnotificatiefrequentie-update[/postlink]

{{#unless isPost}}
Gebruikers kunnen nu bepalen hoe vaak ze e-mailnotificaties ontvangen voor nieuwe opmerkingen en reacties, elke minuut, een uurlijke samenvatting of dagelijkse samenvatting, met aparte instellingen voor reactie- en adminnotificaties, plus per-abonnement uitzonderingen.
{{/unless}}

{{#isPost}}

### Wat is er nieuw

We hebben **Reactie-notificatiefrequentie** en **Admin-notificatiefrequentie** instellingen toegevoegd die bepalen hoe vaak je e-mailnotificaties ontvangt voor reacties en nieuwe opmerkingen, respectievelijk. De drie opties voor elk zijn:

- **Elke minuut** - ontvang een e-mail zodra er nieuwe opmerkingen binnenkomen (elk minuut gecontroleerd).
- **Uurlijke samenvatting** - ontvang een samenvatting van nieuwe opmerkingen eenmaal per uur.
- **Dagelijkse samenvatting** - ontvang een samenvatting van nieuwe opmerkingen eenmaal per dag.

Reactie-notificatiefrequentie is beschikbaar voor alle gebruikers en is standaard ingesteld op **Elke minuut**. Admin-notificatiefrequentie is beschikbaar voor sitebeheerders en is standaard ingesteld op **Uurlijke samenvatting**. Merk op dat @mention-notificaties altijd onmiddellijk worden verzonden, ongeacht deze instellingen.

Je kunt de frequentie ook per abonnement overschrijven in de abonnements tabel, voor fijnmazige controle over individuele pagina's.

### Hoe het te configureren

1. Ga naar je [Notificatie-instellingen](https://fastcomments.com/auth/my-account/edit-notifications).
2. Gebruik de dropdowns **Reactie-notificatiefrequentie** en **Admin-notificatiefrequentie** om je voorkeursfrequenties in te stellen.
3. Optioneel, overschrijf de frequentie voor individuele abonnementen in de abonnements tabel.
4. Klik op **Wijzigingen opslaan**.

### API-ondersteuning

Het `notificationFrequency` veld op het gebruikersobject controleert de reactie-notificatiefrequentie, en het `adminNotificationFrequency` veld controleert de admin-notificatiefrequentie. Per-abonnement uitzonderingen kunnen worden ingesteld via het `notificationFrequency` veld van het abonnement. Zie de [API-documentatie](https://docs.fastcomments.com/guide-api.html) voor meer details.

### Ter conclusie

Dit geeft gebruikers controle over hun inbox zonder dat ze zich helemaal van pagina's hoeven af te melden.

Laat het ons hieronder weten als je feedback hebt!

Proost!

{{/isPost}}

---