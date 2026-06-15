---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Aggiornamento del SDK del sistema di commenti React Native[/postlink]

{{#unless isPost}}
Abbiamo ricostruito fastcomments-react-native-sdk da zero: nuova gestione dello stato più efficiente, un redesign utilizzando Design Tokens, un widget di chat dal vivo dedicato e supporto web di prima classe.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo articolo contiene gergo tecnico

### Novità

Abbiamo appena rilasciato la versione 5.1 di `fastcomments-react-native-sdk`, la nostra libreria React Native che visualizza commenti e chat con veri componenti nativi invece di una WebView.

Abbiamo riscritto le parti interne, ridisegnato completamente l'aspetto, aggiunto un widget di chat dal vivo, portato l'SDK sul web e aggiornato all'ultima versione di React Native e React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, tema chiaro" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tema scuro" title="FastComments React Native SDK, tema scuro" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Perché due librerie React Native?

Una nota veloce, perché ci viene spesso posta questa domanda. Offriamo due opzioni:

- `fastcomments-react-native` è un sottile wrapper attorno al nostro widget web che funziona in una WebView. È il modo più veloce per ottenere ogni funzionalità immediatamente, e beneficia automaticamente delle correzioni web.
- `fastcomments-react-native-sdk` (questo) rende l'interfaccia utente con componenti nativi React Native senza una WebView. È più flessibile, completamente tematizzabile e ha un aspetto nativo perché è nativo.

Per la migliore esperienza, raccomandiamo l'SDK. Il resto di questo post riguarda ciò che è cambiato nella versione 5.0.

### Nuova gestione dello stato

Il principale obiettivo di questo cambiamento è assicurarsi che la nostra libreria rimanga fedele al nostro nome e rimanga veloce. Abbiamo ricevuto lamentele da diversi clienti
sulle sue performance, quindi questo è stato ora risolto.

L'SDK manteneva originariamente il suo albero di commenti in Hookstate. Funzionava, ma con l'aumento dei thread e degli aggiornamenti in tempo reale, le cose hanno cominciato a rallentare.

Abbiamo sostituito Hookstate con Zustand e un negozio flat indicizzato. I commenti ora vivono in una mappa `byId` insieme agli indici `childrenByParent`, `rootOrder` e `pinnedIds`, invece di un albero annidato nello stato.

Il risultato:

- Gli eventi in tempo reale (un nuovo commento, un voto, una modifica) sono diventate mutazioni O(1) invece di dover percorrere e clonare un albero.
- Abbiamo eliminato due profondi clonazioni JSON di albero completo che venivano eseguite ad ogni fetch.
- I componenti si iscrivono esattamente alle fette che leggono, il modello di selettore standard, quindi un voto su un commento tocca solo quel commento.

Quest'ultimo punto è più importante di quanto sembri. Con le iscrizioni basate su selettori, una riga si ri-renderizza solo quando i suoi dati cambiano.

### Un redesign basato su token

Il vecchio aspetto era un accumulo di stili hardcoded. Il nuovo predefinito è generato da un insieme di token di design semantici (`FastCommentsTheme`): colori, spaziature, raggi, dimensioni dei font, pesi dei font e dimensioni degli avatar. L'intero albero di stile deriva da quei token.

Ciò significa che il restyling è un solo prop:

```tsx
<FastCommentsLiveCommenting config={config} theme={{ colors: { primary: '#FF5500' } }}/>
```

La modalità scura è a un set di token di distanza:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Il redesign stesso ha un aspetto più pulito e neutro: separatori sottili, pulsanti di voto a pillola e chip, pulsanti primari riempiti, avatar arrotondati e una scala tipografica coerente. Il prop `styles` è ancora lì per sovrascritture chirurgiche, così le integrazioni esistenti continuano a funzionare.

### Un widget di chat dal vivo dedicato

Abbiamo aggiunto `FastCommentsLiveChat`, un preset di chat che utilizza lo stesso motore che rispecchia la vista chat del nostro SDK Android: messaggi cronologici con i più recenti in fondo, il compositore sotto l'elenco, una striscia di intestazione dal vivo con un punto di connessione e conteggio utenti, scorrimento automatico che si ferma mentre leggi messaggi più vecchi, e storia infinita mentre scorri verso l'alto. Ogni preset è sovrascrivibile tramite `config`.

```tsx
<FastCommentsLiveChat config={{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Ora anche sul web

Lo stesso SDK ora funziona sul web attraverso `react-native-web`. Il compositore di testo arricchito (alimentato da `react-native-enriched`) si rende allo stesso modo su iOS, Android e nel browser, quindi l'esperienza di editing è coerente ovunque con un'unica implementazione. Le sovrapposizioni che altrimenti verrebbero tagliate dall'elenco commenti (menu, selettore di GIF, elenco notifiche) sono ancorate sotto i loro trigger nella build web.

### Rimanere aggiornati con React Native

La versione 5.0 è costruita e testata su React Native 0.81 e React 19, e ha come obiettivo la Nuova Architettura (Fabric), di cui l'editor di testo arricchito ha bisogno. Restare aggiornati qui non è un lavoro inutile: l'editor, la gestione dei gesti e il rendering diventano sempre più veloci e corretti man mano che React Native avanza, e preferiremmo fare questi aggiornamenti gradualmente piuttosto che rimanere indietro di anni.

### In conclusione

Questa riscrittura riguardava dare all'SDK React Native la stessa parità di prima classe delle nostre altre librerie: un modello di dati veloce e prevedibile, un aspetto che puoi tematizzare in un solo prop, un widget di chat e supporto web, tutto su una base moderna React Native.

Puoi trovare l'SDK su <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> e il codice sorgente, con esempi, su <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Faccelo sapere qui sotto se incontri problemi.

Saluti!

{{/isPost}}

---