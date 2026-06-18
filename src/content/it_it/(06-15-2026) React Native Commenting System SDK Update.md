---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Aggiornamento SDK del sistema di commento React Native[/postlink]

{{#unless isPost}}
Abbiamo ricostruito fastcomments-react-native-sdk da zero: nuova gestione dello stato più efficiente, un redesign utilizzando Design Tokens, un widget di chat dal vivo dedicato e supporto web di prima classe.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo articolo contiene gergo tecnico

### Novità

Abbiamo appena rilasciato la versione 5.1 di `fastcomments-react-native-sdk`, la nostra libreria React Native che visualizza commenti e chat con componenti nativi reali invece di un WebView.

Abbiamo riscritto gli interni, ridisegnato completamente l’aspetto, aggiunto un widget di chat dal vivo, portato l'SDK sul web e aggiornato all’ultima versione di React Native e React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, tema chiaro" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tema scuro" title="FastComments React Native SDK, tema scuro" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Perché due librerie React Native?

Una breve nota, perché riceviamo spesso questa domanda. Offriamo due opzioni:

- `fastcomments-react-native` è un sottile wrapper attorno al nostro widget web che gira in un WebView. È il modo più veloce per ottenere ogni funzionalità all'istante e beneficia automaticamente delle correzioni web.
- `fastcomments-react-native-sdk` (questo) rende l'interfaccia utente con componenti React Native nativi senza un webview. È più flessibile, completamente tematizzabile e sembra nativa perché è nativa.

Per la migliore esperienza ti consigliamo l'SDK. Il resto di questo post parla di cosa è cambiato nella versione 5.0.

### Nuova gestione dello stato

Il principale obiettivo di questo cambiamento è assicurarci che la nostra libreria rimanga fedele al nostro nome e rimanga veloce. Abbiamo ricevuto diverse lamentele dai clienti riguardo alle sue prestazioni, quindi ora questo problema è risolto.

Originariamente, l’SdK manteneva il suo albero di commenti in Hookstate. Funzionava, ma man mano che i thread e gli aggiornamenti dal vivo aumentavano, le cose iniziavano a rallentare.

Abbiamo sostituito Hookstate con Zustand e uno store piatto indicizzato. I commenti ora vivono in una mappa `byId` accanto agli indici `childrenByParent`, `rootOrder` e `pinnedIds`, invece di un albero annidato all’interno dello stato.

Il risultato:

- Gli eventi dal vivo (un nuovo commento, un voto, una modifica) sono diventate mutazioni O(1) invece di attraversare e clonare un albero.
- Abbiamo eliminato due deep-clone JSON di alberi completi che venivano eseguiti ad ogni fetch.
- I componenti si abbonano esattamente alle fette che leggono, il modello standard di selezione, quindi un voto su un commento tocca un solo commento.

Quel punto finale è più importante di quanto sembri. Con le sottoscrizioni basate su selettori, una riga si ridisegna solo quando i propri dati cambiano.

### Un redesign basato su token

Il vecchio aspetto era un accumulo di stili hardcoded. Il nuovo default è generato da un insieme di token di design semantici (`FastCommentsTheme`): colori, spaziature, raggi, dimensioni dei font, pesi dei font e dimensioni degli avatar. L'intero albero di stili è derivato da quei token.

Ciò significa che il restyling è un solo prop:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

La modalità scura è a un set di token di distanza:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Il redesign stesso è un aspetto più pulito e moderno-neutro: separatori sottili, pulsanti e chips per le votazioni a forma di pillola, pulsanti primari riempiti, avatar arrotondati e una scala tipografica consistente. Il prop `styles` è ancora presente per sovrascritture chirurgiche, quindi le integrazioni esistenti continuano a funzionare.

### Un widget di chat dal vivo dedicato

Abbiamo aggiunto `FastCommentsLiveChat`, un preset di chat sullo stesso motore che rispecchia la vista chat del nostro SDK Android: messaggi cronologici con i più recenti in basso, il compositore sotto l’elenco, una striscia di intestazione dal vivo con un punto di connessione e conteggio utenti, auto-scroll che si interrompe mentre leggi messaggi più vecchi, e storia infinita mentre scorri verso l'alto. Ogni preset è sovrascrivibile tramite `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Ora anche sul web

Lo stesso SDK ora gira sul web tramite `react-native-web`. Il compositore di testo ricco (alimentato da `react-native-enriched`) si rende nello stesso modo su iOS, Android e nel browser, quindi l'esperienza di editing è consistente ovunque con un'unica implementazione. Gli overlay che altrimenti verrebbero ritagliati dalla lista di commenti (menu, selettore GIF, lista notifiche) sono ancorati sotto i loro trigger nella build web.

Puoi provare ogni widget tu stesso nel vivo <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">browser dei componenti</a>, che è questo SDK in esecuzione nel browser tramite `react-native-web`.

### Rimanere aggiornati con React Native

La versione 5.0 è costruita e testata contro React Native 0.81 e React 19 e mira alla Nuova Architettura (Fabric), che l'editor di testo ricco nativo richiede. Rimanere aggiornati qui non è un lavoro noioso: l'editor, la gestione delle gesture e il rendering diventano tutti più veloci e più corretti man mano che React Native avanza, e preferiremmo prendere quegli aggiornamenti in modo costante piuttosto che rimanere indietro di anni.

### In conclusione

Questa riscrittura riguardava il dare all'SDK React Native la stessa base di prima classe delle nostre altre librerie: un modello di dati veloce e prevedibile, un aspetto che puoi tematizzare in un prop, un widget di chat e supporto web, il tutto su una moderna base React Native.

Puoi trovare l'SDK su <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, il codice sorgente, con esempi, su <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, e ogni widget in esecuzione dal vivo nel <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">browser dei componenti</a>. Facci sapere qui sotto se trovi qualcosa.

Saluti!

{{/isPost}}

---