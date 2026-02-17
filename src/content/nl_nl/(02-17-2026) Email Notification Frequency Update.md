---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Update van de E-mailmeldfrequentie[/postlink]

{{#unless isPost}}
Gebruikers kunnen nu zelf bepalen hoe vaak ze e-mailmeldingen voor nieuwe opmerkingen en antwoorden ontvangen — elke minuut, per uursamenvatting, of per dagsamenvatting — met een enkele gedeelde instelling, plus per-abonnement overrides.
{{/unless}}

{{#isPost}}

### Wat is nieuw

We hebben een **Instelling voor de Frequentie van Nieuwe Opmerking Meldingen** toegevoegd die bepaalt hoe vaak je e-mailmeldingen ontvangt voor zowel antwoordmeldingen als huurder (nieuwe opmerking) meldingen. De drie opties zijn:

- **Elke minuut** - ontvang een e-mail zodra nieuwe opmerkingen binnenkomen (elke minuut gecontroleerd).
- **Uursamenvatting** - ontvang een gebundelde samenvatting van nieuwe opmerkingen één keer per uur.
- **Dagsamenvatting** - ontvang een gebundelde samenvatting van nieuwe opmerkingen één keer per dag.

Deze instelling is beschikbaar voor zowel huurderbeheerders als commentatoren, en is van toepassing op alle e-mailmeldingen voor opmerkingen. Houd er rekening mee dat @vermelding meldingen altijd meteen worden verzonden, ongeacht deze instelling.

Je kunt ook de frequentie per abonnement aanpassen in de abonnemententabel, voor fijnere controle over individuele pagina's.

### Hoe het te configureren

1. Ga naar je [Meldinstellingen](https://fastcomments.com/auth/my-account/edit-notifications).
2. Gebruik de dropdown voor **Frequentie van Nieuwe Opmerking Meldingen** om je voorkeurfrequentie in te stellen.
3. Optioneel, pas de frequentie aan voor individuele abonnementen in de abonnemententabel.
4. Klik op **Wijzigingen Opslaan**.

De standaardinstelling is **Elke minuut**, wat overeenkomt met het eerdere gedrag.

### API-ondersteuning

De meldfrequentie is ook beschikbaar via de API. De gebruikersniveau-instelling is het <div class="code">notificationFrequency</div> veld, en per-abonnement overrides kunnen worden ingesteld via het <div class="code">notificationFrequency</div> veld van het abonnement. Zie de [API-documentatie](https://docs.fastcomments.com/guide-api.html) voor details.

### Ter conclusie

Dit geeft gebruikers controle over hun inbox zonder zich volledig van pagina's te hoeven afmelden. Één instelling dekt nu zowel antwoord- als huurdermeldingen, waardoor het eenvoudiger wordt om te beheren.

Laat ons hieronder weten als je feedback hebt!

Proost!

{{/isPost}}

--- 

---