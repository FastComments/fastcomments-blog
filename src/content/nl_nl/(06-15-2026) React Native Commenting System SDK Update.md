---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native Commenting System SDK Update[/postlink]

{{#unless isPost}}
We hebben fastcomments-react-native-sdk helemaal opnieuw opgebouwd: nieuwe, efficiëntere state management, een herontwerp met Design Tokens, een speciaal live chat-widget en eersteklas webondersteuning.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit artikel bevat technische jargon

### Wat is nieuw

We hebben versie 5.1 van `fastcomments-react-native-sdk` uitgebracht, onze React Native-bibliotheek die opmerkingen en chat weergeeft met echte native componenten in plaats van een WebView.

We hebben de interne werking herschreven, het hele uiterlijk opnieuw ontworpen, een live chat-widget toegevoegd, de SDK naar het web gebracht en deze geüpgraded naar de nieuwste React Native en React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, lichte thema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, donkere thema" title="FastComments React Native SDK, donkere thema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Waarom twee React Native-bibliotheken?

Een snelle opmerking, omdat we deze vraag vaak krijgen. We brengen twee opties uit:

- `fastcomments-react-native` is een dunne wrapper om onze webwidget die draait in een WebView. Het is de snelste manier om direct elke functie te krijgen, en het profiteert automatisch van webfixes.
- `fastcomments-react-native-sdk` (deze) rendert de UI met native React Native-componenten zonder een webview. Het is flexibeler, volledig themagebiedend en voelt native aan omdat het native is.

Voor de beste ervaring raden we de SDK aan. De rest van dit bericht gaat over wat er is veranderd in 5.0.

### Nieuwe State Management

De belangrijkste drijfveer voor deze wijziging is ervoor te zorgen dat onze bibliotheek trouw blijft aan onze naam en snel blijft. We hebben verschillende klanten gehoord die klaagden over de prestaties, dus dit is nu verholpen.

De SDK hield oorspronkelijk zijn commentaarniveau in Hookstate. Het werkte, maar naarmate de gesprekken en live-updates toenamen, begonnen de dingen trager te worden.

We hebben Hookstate vervangen door Zustand en een platte, genoteerde opslag. Opmerkingen bevinden zich nu in een `byId`-map naast de `childrenByParent`, `rootOrder` en `pinnedIds` indexen, in plaats van in een boom genest binnen de status.

De beloning:

- Live evenementen (een nieuwe opmerking, een stem, een bewerking) werden O(1) mutaties in plaats van het doorlopen en klonen van een boom.
- We hebben twee volledige boom JSON-deep-clones laten vallen die voorheen bij elke opvraging werden uitgevoerd.
- Componenten abonneren zich op precies de segmenten die ze lezen, het standaard selector-model, zodat een stem op één opmerking alleen die opmerking aanraakt.

Dat laatste punt is belangrijker dan het klinkt. Met selector-gebaseerde abonnementen wordt een rij alleen opnieuw weergegeven wanneer de eigen gegevens veranderen.

### Een token-gebaseerd herontwerp

Het oude uiterlijk was een verzameling hardcoded stijlen. De nieuwe standaard wordt gegenereerd vanuit een set semantische design tokens (`FastCommentsTheme`): kleuren, uitlijning, stralingen, lettergroottes, lettergewichten en avatarformaten. De gehele stijlopbouw is afgeleid van die tokens.

Dat betekent dat herstyling met één prop kan:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Donkere modus is één token set verwijderd:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Het herontwerp zelf heeft een schoner, modern-neutraal uiterlijk: hairline scheidingslijnen, pilvormige stemknoppen en chips, gevulde primaire knoppen, ronde avatars en een consistente typografie. De `styles` prop is nog steeds aanwezig voor specifieke overrides, zodat bestaande integraties blijven werken.

### Een speciale live chat-widget

We hebben `FastCommentsLiveChat` toegevoegd, een chatpreset over dezelfde engine die de chatweergave van onze Android SDK spiegelt: chronologische berichten met de nieuwste onderaan, de composer onder de lijst, een live headerstrook met een verbindingspunt en gebruikersaantal, automatische scroll die pauzeert terwijl je oudere berichten leest, en oneindige geschiedenis terwijl je omhoog scrolt. Elke preset is overschrijfbaar via `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Nu ook op het web

Dezelfde SDK draait nu op het web via `react-native-web`. De rich text composer (aangedreven door `react-native-enriched`) rendert dezelfde manier op iOS, Android en de browser, zodat de bewerkingservaring overal consistent is met één implementatie. Overlay's die de opmerkinglijst anders zou knippen (menu's, de GIF-picker, de notificatielijst) zijn verankerd onder hun triggers in de webversie.

### Bijblijven met React Native

5.0 is gebouwd en getest met React Native 0.81 en React 19, en het richt zich op de Nieuwe Architectuur (Fabric), die de native rich text-editor vereist. Actueel blijven hier is geen tijdverspilling: de editor, de gebarenafhandeling en de rendering worden allemaal sneller en correcter naarmate React Native vooruitgaat, en we zouden liever deze upgrades geleidelijk opnemen dan jaren achterop te raken.

### Conclusie

Deze herschrijving ging over het geven van de React Native SDK hetzelfde eersteklas niveau als onze andere bibliotheken: een snel en voorspelbaar datamodel, een uiterlijk dat je in één prop kunt thematiseren, een chatwidget en webondersteuning, allemaal op een moderne React Native basis.

Je kunt de SDK vinden op <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> en de bron, met voorbeelden, op <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Laat het ons weten hieronder als je ergens tegenaan loopt.

Proost!

{{/isPost}}

---