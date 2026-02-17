---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Update E-mailnotificatiefrequentie[/postlink]

{{#unless isPost}}
Gebruikers kunnen nu controleren hoe vaak ze e-mailnotificaties ontvangen voor nieuwe reacties en opmerkingen, elk minuut, een uurlijkse samenvatting of een dagelijkse samenvatting, met een enkele gedeelde instelling, plus per-abonnement overrides.
{{/unless}}

{{#isPost}}

### Wat is Nieuw

We hebben een **Nieuwe Reactie Notificatiefrequentie** instelling toegevoegd die bepaalt hoe vaak je e-mailnotificaties ontvangt voor zowel reactie-notificaties als tenant (nieuwe reactie) notificaties. De drie opties zijn:

- **Elke minuut** - ontvang een e-mail zodra er nieuwe reacties binnenkomen (elk minuut gecontroleerd).
- **Uurlijke samenvatting** - ontvang een gebundelde samenvatting van nieuwe reacties eenmaal per uur.
- **Dagelijkse samenvatting** - ontvang een gebundelde samenvatting van nieuwe reacties eenmaal per dag.

Deze instelling is beschikbaar voor zowel tenant-beheerders als commentatoren en is van toepassing op alle e-mailnotificaties voor opmerkingen. Merk op dat @vermeldingen altijd meteen worden verzonden ongeacht deze instelling.

Je kunt ook de frequentie per abonnement overschrijven in de Abonnements tabel, voor fijne afstemming over individuele pagina's.

### Hoe het te Configureren

1. Ga naar je [Notificatie-instellingen](https://fastcomments.com/auth/my-account/edit-notifications).
2. Gebruik de **Nieuwe Reactie Notificatiefrequentie** dropdown om je voorkeurfrequentie in te stellen.
3. Optioneel, overschrijf de frequentie voor individuele abonnementen in de Abonnements tabel.
4. Klik op **Wijzigingen opslaan**.

De standaard is **Elke minuut**, wat overeenkomt met het eerdere gedrag.

### API Ondersteuning

De notificatiefrequentie is ook beschikbaar via de API. De gebruikersinstelling is het `notificationFrequency` veld, en per-abonnement overrides kunnen worden ingesteld via het `notificationFrequency` veld van het abonnement. Zie de [API documentatie](https://docs.fastcomments.com/guide-api.html) voor details.

### Conclusie

Dit geeft gebruikers controle over hun inbox zonder dat ze zich volledig van pagina's hoeven af te melden. Eén instelling dekt nu zowel reactie- als tenant-notificaties, wat het beheren eenvoudiger maakt.

Laat ons hieronder weten als je feedback hebt!

Proost!

{{/isPost}}

---