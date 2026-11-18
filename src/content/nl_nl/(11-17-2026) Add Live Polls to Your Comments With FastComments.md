[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]Voeg Live Polls toe aan je reacties met FastComments[/postlink]

{{#unless isPost}}
Reacties hebben nu live polls! Lezers stemmen in de thread zelf, resultaten worden live bijgewerkt voor iedereen op de pagina, en polls werken in de webwidget en in onze iOS-, Android- en React Native SDK's.
{{/unless}}

{{#isPost}}

### Wat is er nieuw

Deze release voegt **Live Polls** toe. Een poll is gekoppeld aan een reactie en wordt daarin weergegeven. Lezers klikken op een optie om te stemmen,
zonder de thread te verlaten, en de resultaten worden live bijgewerkt voor iedereen die de pagina bekijkt terwijl de stemmen binnenkomen. Geen verversing, en
niemand hoeft handmatig antwoorden te tellen.

<img src="images/fc-live-polls.png" alt="A comment with a poll asking what format the next meetup should be, showing In person at 34%, Online at 21%, and Hybrid at 45%, with 53 responses" title="Live Polls" class="lozad" />

Aangezien de poll een reactie is, blijft het gesprek eraan gekoppeld. Mensen stemmen, en reageren vervolgens om uit te leggen waarom.

### Een poll maken

Wanneer polls zijn ingeschakeld, krijgt de reactie-editor een poll-knop. Klikken opent een poll-editor onder de tekstinvoer, waar je
instelt:

- **De vraag**, tot 200 tekens.
- **De opties**, 2 tot 10.
- **Wanneer deze sluit**: nooit, of na 1 dag, 3 dagen, of 1 week. Een gesloten poll toont de uiteindelijke resultaten en stopt met stemmen.
- **Privacy**: anoniem, zichtbaar voor beheerders, of openbaar.
- **Stem vereist om resultaten te zien**, waardoor de resultaten verborgen blijven voor elke kijker totdat ze stemmen of de poll sluit.

Schrijf vervolgens je reactie en plaats deze zoals gewoonlijk. Polls werken op nieuwe reacties en op antwoorden.

### Stemmen

Iedere persoon krijgt één stem per poll, en kan deze wijzigen terwijl de poll open is. Tenzij de poll eerst een stem vereist,
kunnen lezers op **Resultaten tonen** klikken om te zien hoe de stand is voordat ze kiezen.

Privacy wordt per poll ingesteld en direct onder de opties weergegeven, zodat stemmers weten wie hun stem kan zien voordat ze stemmen.
Anonieme polls (de standaard) tonen alleen totalen, en niemand, inclusief beheerders, kan zien wie waarvoor heeft gestemd. Bij admin‑zichtbare
polls kunnen beheerders en moderators **Wie heeft gestemd** openen. Bij openbare polls kan iedereen dat.

### Inschakelen

Polls staan standaard uit. Open je <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,
vink **Enable Polls** aan, en kies wie ze kan maken:

- **Alleen beheerders/moderators** (de standaard), voor wanneer je de polls zelf wilt uitvoeren.
- **Iedereen**, voor wanneer je wilt dat je community elkaar vraagt.

Stemmen vereist standaard een ingelogde gebruiker. Vink **Allow Anonymous Poll Votes** aan om iedereen te laten stemmen. Om het eerlijk te houden,
zijn anonieme stemmen beperkt tot drie per IP-adres per poll per uur.

Net als elke aanpassingsregel kan dit van toepassing zijn op je hele site, een domein, of een enkele pagina.

### Meldingen

De auteur van een poll ontvangt meldingen over reacties zodra ze binnenkomen: een melding, gegroepeerd wanneer veel mensen
tegelijkertijd stemmen, en een dagelijkse e‑mail wanneer de poll die dag nieuwe reacties kreeg. Alleen de eerste stem telt als een reactie, dus
iemand die van mening verandert stuurt geen extra meldingen. De meldingen volgen de privacy van de poll, dus een anonieme poll
geeft alleen aan hoeveel nieuwe reacties er zijn binnengekomen, nooit wie.

### Native mobiele SDK's

Polls staan niet alleen in de webwidget. Onze native SDK's renderen de poll‑kaart, de poll‑editor, de live‑resultaten en de
stemmerlijst met echte native componenten, en ze lezen dezelfde widget‑instellingen van je dashboard. Schakel polls één keer in
en ze verschijnen op je site en in je apps.

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, via Swift Package Manager.
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, als `com.fastcomments:android-sdk:2.1.0`.
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, op NPM.

De iOS- en Android‑SDK's kunnen ook een poll plaatsen vanuit je eigen UI. Op iOS ziet dat er zo uit:

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

De READMEs voor <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> en
<a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a>, en de
<a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">React Native changelog</a>,
bespreken de details, inclusief hoe je de poll‑kleuren kunt restylen om bij je app te passen.

### De API

Polls staan ook in de REST‑API. Je kunt een poll maken samen met de bijbehorende reactie door `poll` mee te geven aan `POST /api/v1/comments`,
of later een poll toevoegen, bewerken, sluiten en verwijderen met `/api/v1/polls/:commentId`. Stemmen kunnen worden opgehaald, uitgebracht en verwijderd met
`/api/v1/poll-votes`, waardoor het exporteren van resultaten naar een spreadsheet of je eigen CMS eenvoudig is. De API volgt
dezelfde instellingen als de widget, en individuele stemmen op anonieme polls kunnen er niet via worden gelezen.

### Overhead

De poll‑code wordt niet geladen tenzij polls zijn ingeschakeld, zodat het de commentaarwidget voor niemand anders vertraagt.

### Documentatie

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">De Live Polls‑gids</a> behandelt het inschakelen van polls,
wie ze kan maken, anonieme stemmen, stemmerprivacy, meldingen en de API.

### Probeer het

Er is een live poll op de <a href="https://fastcomments.com/product/live-polls" target="_blank">Live Polls‑demo</a>. Stem
erop, open de pagina in een tweede tabblad, en zie de resultaten bewegen. Je kunt daar ook je eigen poll plaatsen.

### Conclusie

Als je threads steeds veranderen in telrondes, probeer dan polls en laat ons hieronder weten wat je hierna graag zou willen zien.

Proost!

{{/isPost}}