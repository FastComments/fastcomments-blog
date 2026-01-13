---
[category:Features]

###### [postdate]
# [postlink]L'Editor WYSIWYG di FastComments è Fuori dalla Beta[/postlink]

{{#unless isPost}}
I clienti possono ora scegliere di utilizzare il nuovo editor che non utilizza tag di ancoraggio visibili per il formato.
{{/unless}}

{{#isPost}}

### Novità

Gli utenti di FastComment hanno sempre avuto la possibilità di formattare i loro commenti con tag di ancoraggio come `<b>questo</b>`. Questo è molto familiare a chiunque abbia utilizzato un forum internet in passato, o molti dei nostri concorrenti, tuttavia alcuni utenti e comunità si aspettano un comportamento diverso.

Ora puoi stilizzare il testo nell'area dei commenti senza tag di ancoraggio, poiché l'input di testo può essere switchato in `contenteditable`.

Per scopi dimostrativi, questo è stato abilitato su questo blog.

L'editor avanzato ha esattamente lo stesso aspetto dell'antico editor, non utilizza solo tag di ancoraggio visibili.

### Attivazione della Modifica Avanzata

Nella Personalizzazione del Widget puoi semplicemente abilitare `Advanced Editor` e cliccare su salva. I documenti sono [qui](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Per Sviluppatori & Problemi Noti

Puoi trovare la documentazione per abilitare questo nel codice [qui](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg), anche se raccomandiamo di utilizzare l'interfaccia di personalizzazione del widget poiché
risulterà in meno dati inviati per ogni caricamento di pagina.

L'HTML generato da content editable è leggermente diverso da quello dell'antico editor textarea, quindi tienilo a mente
se stai analizzando i commenti dall'API.

### Ottimizzazioni

Abbiamo impedito al widget dei commenti di crescere con questa nuova funzione aggiungendo questa come un'estensione che viene caricata in background
quando questa funzionalità è abilitata, mantenendo il widget dei commenti predefinito piccolo e leggero.

### In Conclusione

Come in tutte le principali versioni, siamo felici di poterci prendere il tempo per ottimizzare, testare e rilasciare questa funzione in modo appropriato. Faccelo sapere
qui sotto se scopri qualche problema.

Saluti!

{{/isPost}}

---