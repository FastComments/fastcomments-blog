---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native Kommentarsystem SDK Opdatering[/postlink]

{{#unless isPost}}
Vi har genopbygget fastcomments-react-native-sdk fra grunden: ny, mere effektiv tilstandshåndtering, et redesign ved hjælp af Design Tokens, et dedikeret live chat-widget og førsteklasses websupport.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Teknisk Fagsprog

### Hvad er Nyt

Vi har lige sendt version 5.1 af `fastcomments-react-native-sdk`, vores React Native-bibliotek, der viser kommentarer og chat med ægte native komponenter i stedet for en WebView.

Vi har genkodet internals, redesignede hele udseendet, tilføjet et live chat-widget, bragt SDK'en til weben og opgraderet den til den nyeste React Native og React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, lys tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, mørk tema" title="FastComments React Native SDK, mørk tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Hvorfor To React Native Biblioteker?

Et hurtigt notat, fordi vi får dette spørgsmål. Vi sender to muligheder:

- `fastcomments-react-native` er et tyndt lag omkring vores web-widget, der kører i en WebView. Det er den hurtigste måde at få alle funktioner øjeblikkeligt, og det drager automatisk fordel af webrettelser.
- `fastcomments-react-native-sdk` (denne) renderer UI'en med native React Native komponenter uden en webview. Det er mere fleksibelt, helt tematiserbart og føles native, fordi det er native.

For den bedste oplevelse anbefaler vi SDK'en. Resten af dette indlæg handler om, hvad der ændrede sig i 5.0.

### Ny Tilstandshåndtering

Den primære drivkraft bag denne ændring er at sikre, at vores bibliotek forbliver tro mod vores navn og forbliver Hurtigt. Vi har haft flere kunder, der har klaget over dets ydeevne, så dette er nu rettet.

SDK'en holdt oprindeligt sin kommentartræ i Hookstate. Det fungerede, men som tråde og live opdateringer voksede, begyndte tingene at blive langsommere.

Vi erstattede Hookstate med Zustand og en flad, indekseret butik. Kommentarer lever nu i et `byId` kort ved siden af `childrenByParent`, `rootOrder` og `pinnedIds` indekser, i stedet for et træ indlejret i tilstanden.

Udvindingen:

- Live begivenheder (en ny kommentar, en stemme, en redigering) blev O(1) mutationer i stedet for at gå og klone et træ.
- Vi droppede to fuldt-træ JSON dybdekloner, der plejede at køre ved hver hentning.
- Komponenter abonnerer kun på de skiver, de læser, den standard selector-model, så en stemme på én kommentar berører én kommentar.

Det sidste punkt betyder mere, end det lyder. Med selector-baserede abonnementer, så bliver en række kun genrendret, når dens egne data ændres.

### Et Token-Baseret Redesign

Det gamle udseende var en bunke hardcodede stilarter. Den nye standard genereres fra et sæt semantiske design tokens (`FastCommentsTheme`): farver, spacing, radius, skriftstørrelser, skriftvægte og avatarstørrelser. Hele stiltræet er afledt fra disse tokens.

Det betyder, at genstilning kun er en prop:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Mørkt tema er kun et token-sæt væk:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Redesignet i sig selv har et renere, moderne neutrale udseende: hårde separatorer, pille stemme knapper og chips, fyldte primære knapper, afrundede avatarer og en konsistent typografi skala. `styles`-proppen er stadig der til kirurgiske overskrivninger, så eksisterende integrationer fortsætter med at fungere.

### Et Dedikeret Live Chat Widget

Vi tilføjede `FastCommentsLiveChat`, et chat-setup over den samme motor, der spejler vores Android SDK's chat-visning: kronologiske meddelelser med den nyeste nederst, komponisten under listen, et live header strip med en forbindelsespunkt og brugertælling, auto-scrolling, der pauser, mens du læser ældre beskeder, og ubegribelig historie, efterhånden som du ruller op. Hver preset kan overskrives via `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Nu Også På Web

Det samme SDK kører nu på weben gennem `react-native-web`. Den rige tekstkomponist (drevet af `react-native-enriched`) renderer på samme måde på iOS, Android og browseren, så redigeringsoplevelsen er konsekvent overalt med en enkelt implementering. Overlays, som kommentarliste ellers ville klippe (menuer, GIF-vælgeren, notifikationslisten) er forankret under deres triggere i webbygningen.

Du kan selv prøve hver widget i den live <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">komponentbrowser</a>, som er denne SDK, der kører i browseren via `react-native-web`.

### Holde Aktuel Med React Native

5.0 er bygget og testet mod React Native 0.81 og React 19, og det sigter mod den nye arkitektur (Fabric), som den native rige teksteditor kræver. At holde sig aktuel her er ikke dødt arbejde: editoren, gestusbehandlingen og rendering bliver alle hurtigere og mere korrekte, efterhånden som React Native bevæger sig fremad, og vi ville hellere tage disse opgraderinger stabilt end at komme flere år bagud.

### Afslutning

Denne omskrivning handlede om at give React Native SDK samme førsteklasses grundlag som vores andre biblioteker: en hurtig og forudsigelig datamodel, et udseende, du kan tema i én prop, et chat-widget og websupport, alt på en moderne React Native-basis.

Du kan finde SDK'en på <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, kilden, med eksempler, på <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, og hver widget kørende live i <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">komponentbrowseren</a>. Lad os vide nedenfor, hvis du støder på noget.

Skål!

{{/isPost}}

---