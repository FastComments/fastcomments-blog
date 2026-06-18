---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native Commenting System SDK Update[/postlink]

{{#unless isPost}}
We hebben fastcomments-react-native-sdk vanaf de grond opnieuw opgebouwd: nieuw, efficiënter state management, een herontwerp met Design Tokens, een speciaal live chat-widgets en eersteklas webondersteuning.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Jargon

### Wat Is Nieuw

We hebben versie 5.1 van `fastcomments-react-native-sdk` uitgebracht, onze React Native-bibliotheek die opmerkingen en chat weergeeft met echte native componenten in plaats van een WebView.

We hebben de interne werking herschreven, de hele uitstraling opnieuw ontworpen, een live chat-widget toegevoegd, de SDK naar het web gebracht en deze geüpgraded naar de nieuwste React Native en React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, lichte thema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, donkere thema" title="FastComments React Native SDK, donkere thema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Waarom Twee React Native Bibliotheken?

Een korte opmerking, omdat we deze vraag krijgen. We bieden twee opties:

- `fastcomments-react-native` is een dunne wrapper om onze webwidget die draait in een WebView. Het is de snelste manier om elke functie onmiddellijk te krijgen en profiteert automatisch van weboplossingen.
- `fastcomments-react-native-sdk` (deze) rendert de UI met native React Native-componenten zonder een webview. Het is flexibeler, volledig te thematiseren en voelt native aan omdat het native is.

Voor de beste ervaring raden we de SDK aan. De rest van deze post gaat over wat er veranderd is in 5.0.

### Nieuw State Management

De belangrijkste drijfveer achter deze wijziging is ervoor te zorgen dat onze bibliotheek trouw blijft aan onze naam en snel blijft. We hadden verschillende klanten die zich beklagden over de prestaties, dus dit is nu opgelost.

De SDK bewaarde oorspronkelijk zijn commentaarboom in Hookstate. Het werkte, maar naarmate threads en live-updates toenamen, begon het langzaam te worden.

We hebben Hookstate vervangen door Zustand en een platte, geïndexeerde opslag. Opmerkingen leven nu in een `byId`-map naast `childrenByParent`, `rootOrder` en `pinnedIds`-indexen, in plaats van in een geneste boom binnen de staat.

De winst:

- Live evenementen (een nieuwe opmerking, een stem, een bewerking) werden O(1) mutaties in plaats van het doorlopen en klonen van een boom.
- We hebben twee volledige boom JSON-deep-clones verwijderd die bij elke fetch werden uitgevoerd.
- Componenten abonneren zich op precies de slices die ze lezen, het standaard selector-model, zodat een stem op één opmerking slechts één opmerking aanraakt.

Dat laatste punt is belangrijker dan het lijkt. Met selectorgebaseerde abonnementen wordt een rij alleen opnieuw gerenderd wanneer de eigen gegevens veranderen.

### Een Token-gebaseerd Herontwerp

De oude uitstraling was een hoop hardcoded stijlen. De nieuwe standaard wordt gegenereerd uit een set semantische ontwerp tokens (`FastCommentsTheme`): kleuren, ruimte, radius, lettergroottes, lettergewichten en avatar grootte. De gehele stijlboom is afgeleid van die tokens.

Dat betekent dat opnieuw stijlen één prop is:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Donkere modus is één tokenset verwijderd:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Het herontwerp zelf heeft een schonere, moderne neutrale uitstraling: haarlijn scheidingslijnen, pill stemknoppen en chips, gevulde primaire knoppen, afgeronde avatars en een consistente typografie schaal. De `styles` prop is er nog steeds voor chirurgische overrides, zodat bestaande integraties blijven functioneren.

### Een Toegewijde Live Chat Widget

We hebben `FastCommentsLiveChat` toegevoegd, een chat preset over dezelfde engine die overeenkomt met het chatvenster van onze Android SDK: chronologische berichten met de nieuwste onderaan, de composer onder de lijst, een live headerstrip met een verbindingspunt en het aantal gebruikers, auto-scroll dat pauzeert terwijl je oudere berichten leest, en oneindige geschiedenis terwijl je omhoog scrollt. Elke preset kan worden overschreven via `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Nu Ook op het Web

Dezelfde SDK draait nu op het web via `react-native-web`. De rijke tekst composer (aangedreven door `react-native-enriched`) rendert op dezelfde manier op iOS, Android en de browser, zodat de bewerkingservaring overal consistent is met één implementatie. Overlays die de opmerkingenlijst anders zou clippen (menu's, de GIF-picker, de notificatielijst) zijn verankerd onder hun triggers op de webversie.

Je kunt zelf elk widget uitproberen in de live <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">componentenbrowser</a>, wat deze SDK in de browser via `react-native-web` is.

### Bijblijven Met React Native

5.0 is gebouwd en getest tegen React Native 0.81 en React 19, en het richt zich op de Nieuwe Architectuur (Fabric), die de native rijke teksteditor vereist. Bijblijven hier is geen overbodige klus: de editor, de gebaarverwerking en de rendering worden allemaal sneller en correcter naarmate React Native verder ontwikkelt, en we geven er de voorkeur aan om die upgrades geleidelijk toe te passen dan jaren achter te blijven.

### Conclusie

Deze herschrijving was bedoeld om de React Native SDK dezelfde eersteklas positie te geven als onze andere bibliotheken: een snel en voorspelbaar datamodel, een uiterlijk dat je in één prop kunt thematiseren, een chatwidget en webondersteuning, allemaal op een moderne React Native basis.

Je kunt de SDK vinden op <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, de bron, met voorbeelden, op <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, en elk widget dat live draait in de <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">componentenbrowser</a>. Laat het ons weten hieronder als je ergens tegenaan loopt.

Proost!

{{/isPost}}

---