---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native Kommentar System SDK Opdatering[/postlink]

{{#unless isPost}}
Vi har genopbygget fastcomments-react-native-sdk fra bunden: ny, mere effektiv tilstandsmanagement, et redesign ved hjælp af Design Tokens, en dedikeret widget til live chat og førsteklasses websupport.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Teknisk Jargon

### Hvad er Nyt

Vi har lige sendt version 5.1 af `fastcomments-react-native-sdk`, vores React Native-bibliotek, der gengiver kommentarer og chat med ægte native komponenter i stedet for et WebView.

Vi har skrevet internals om, redesignet hele udseendet, tilføjet en widget til live chat, bragt SDK'en til web, og opgraderet den til den nyeste React Native og React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, lys tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, mørk tema" title="FastComments React Native SDK, mørk tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Hvorfor To React Native Biblioteker?

En hurtig bemærkning, fordi vi får dette spørgsmål. Vi leverer to muligheder:

- `fastcomments-react-native` er en tynd wrapper omkring vores webwidget, der kører i et WebView. Det er den hurtigste måde at få alle funktioner straks, og det drager fordel af webrettelser automatisk.
- `fastcomments-react-native-sdk` (denne) gengiver UI'en med native React Native-komponenter uden et webview. Den er mere fleksibel, fuldt tematisk, og føles native, fordi den er native.

For den bedste oplevelse anbefaler vi SDK'en. Resten af dette indlæg handler om, hvad der ændrede sig i 5.0.

### Ny Tilstandsmanagement

Den primære drivkraft bag denne ændring er at sikre, at vores bibliotek forbliver tro mod vores navn og forbliver Hurtigt. Vi havde flere kunder, der klagede over ydeevnen, så dette er nu løst.

SDK'en opbevarede oprindeligt sit kommentartræ i Hookstate. Det fungerede, men efterhånden som tråde og liveopdateringer voksede, begyndte tingene at gå langsommere.

Vi erstattede Hookstate med Zustand og et fladt, indekseret lager. Kommentarer lever nu i et `byId` kort sammen med `childrenByParent`, `rootOrder` og `pinnedIds` indekser i stedet for et træ, der er indlejret i tilstanden.

Udbetalingen:

- Livebegivenheder (en ny kommentar, en stemme, en redigering) blev O(1) mutationer i stedet for at gå og klone et træ.
- Vi droppede to dybe kloner af hele træet i JSON, der plejede at køre ved hver hentning.
- Komponenter abonnerer på præcis de skiver, de læser, den standard selector-model, så en stemme på én kommentar berører én kommentar.

Det sidste punkt betyder mere, end det lyder. Med selector-baserede abonnementer bliver en række kun genrendret, når dens egne data ændres.

### Et Token-Baseret Redesign

Det gamle udseende var en bunke hardkodede stilarter. Den nye standard genereres fra et sæt semantiske designtokens (`FastCommentsTheme`): farver, afstand, radius, skrifttyper, skrifttypernes tykkelse og avatarstørrelser. Hele stiltræet er afledt fra disse tokens.

Det betyder, at omstilning kun er én prop:

```tsx
<FastCommentsLiveCommenting config={config} theme={{ colors: { primary: '#FF5500' } }}/>
```

Mørk tilstand er kun ét tokensæt væk:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Redesignet er selv et renere, moderne neutralt udseende: hårfine separatorer, pille-stemmeknapper og chips, fyldte primære knapper, afrundede avatarer og en konsekvent typografi. `styles`-proppen er stadig der for kirurgiske overrides, så eksisterende integrationer fungerer fortsat.

### En Dedikeret Widget til Live Chat

Vi tilføjede `FastCommentsLiveChat`, et chatprædefineret over samme motor, der spejler vores Android SDK's chatvisning: kronologiske meddelelser med de nyeste nederst, komponisten under listen, et live header-strip med en forbindelsespunkt og brugerantal, auto-scroll der pauser, mens du læser ældre meddelelser, og uendelig historik, når du scroller op. Hver prædefinition kan overskrives gennem `config`.

```tsx
<FastCommentsLiveChat config={{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Nu Også På Web

Den samme SDK kører nu på web gennem `react-native-web`. Den rige tekstkomponist (drevet af `react-native-enriched`) gengiver på samme måde på iOS, Android og browseren, så redigeringsoplevelsen er ensartet overalt med en enkelt implementering. Overlejringer, som kommentarlisterne ellers ville klippe (menuer, GIF-vælgeren, meddelelseslisten) er forankret under deres triggere på webbygningen.

### Holde Sig Aktuel Med React Native

5.0 er bygget og testet mod React Native 0.81 og React 19, og den retter sig mod den nye arkitektur (Fabric), som den native rige teksteditor kræver. At holde sig aktuel her er ikke bare travlhed: editoren, gestusbehandlingen og rendering bliver alle hurtigere og mere korrekte, efterhånden som React Native bevæger sig fremad, og vi ville hellere tage disse opgraderinger jævnt end at falde mange år bagud.

### Afslutningsvis

Denne omskrivning handlede om at give React Native SDK'en samme førsteklasses grundlag som vores andre biblioteker: en hurtig og forudsigelig datamodel, et udseende, du kan tema i én prop, en chat-widget og websupport, alt sammen på en moderne React Native-fundament.

Du kan finde SDK'en på <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> og kilden, med eksempler, på <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Lad os vide nedenfor, hvis du støder på noget.

Skål!

{{/isPost}}

---