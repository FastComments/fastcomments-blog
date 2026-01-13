---
[category:Migration]

###### [postdate]
# [postlink]La Migrazione delle Reazioni da Hyvor Talk è Ora Supportata[/postlink]

{{#unless isPost}}
Quando importi il tuo esportazione dei dati da Hyvor Talk, possiamo ora migrare le tue reazioni a livello di pagina.
{{/unless}}

{{#isPost}}

### Novità

Quando importi i commenti per migrarli da Hyvor Talk, FastComments può ora importare le tue reazioni a pagina. Inoltre, rileveremo se
i thread dei commenti sulle pagine sono chiusi o meno, e migreremo anche quello stato.

Ripetere l'importazione non comporterà duplicazioni nei conteggi né perderà valori di reazione precedenti all'importazione.

### Come Configurare le Reazioni

La visualizzazione delle reazioni della pagina non è automatica. Per iniziare, dovrai aggiornare la configurazione del tuo widget:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Star-Struck
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Red Heart
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Face with Open Mouth
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Crying Face
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Face with Tears of Joy
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Angry Face
            ]
        }
    });
</script>
```

Gli id devono corrispondere a quelli dell'esportazione di Hyvor Talk. Questo esempio utilizza i valori corretti.

Dovrai procurarti le tue immagini per le reazioni. Possono essere in qualsiasi formato, inclusi i gif. L'esempio sopra utilizza alcune del progetto OpenMoji.

### In Conclusione

Come per tutte le versioni principali, siamo felici di aver avuto il tempo di ottimizzare, testare e rilasciare correttamente questa funzionalità. Facci sapere 
qui sotto se scopri problemi.

Saluti!

{{/isPost}}

---