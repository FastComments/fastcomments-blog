[category:Features]
[category:Performance]

###### [postdate]
# [postlink]FastComments è ora ancora più veloce[/postlink]

{{#unless isPost}}
Abbiamo rimosso una richiesta di rete durante il caricamento del widget dei commenti, riducendo ulteriormente i tempi di caricamento.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo articolo contiene gergo tecnico

### Novità

Come FastComments ha funzionato negli ultimi cinque anni circa è che carichiamo un piccolo script, l'iframe si carica, poi lo script che include lo stile, e infine una richiesta all'API per tutto il necessario a visualizzare i commenti. Anche se sembra molto, è molto compatto rispetto alla maggior parte dei sistemi!

Tuttavia, ora è una richiesta in meno. La risposta dell'iframe che fornisce il widget trasporta anche i commenti e tutti i dati di cui l'utente ha bisogno inizialmente, quindi l'ultima richiesta all'API è scomparsa.

L'API rimane mantenuta per compatibilità retroattiva per chiunque ne dipenda.

### Nessuna configurazione necessaria

Non esiste alcuna impostazione per questo e nessuna versione da aggiornare. Se integri FastComments con il nostro script, lo hai già.

La tua pagina non è influenzata in entrambi i casi. Il widget si carica ancora in un iframe e non blocca più il tuo contenuto, esattamente come
prima.

### Dove non si applica

Alcuni percorsi non utilizzano questa funzionalità e si comportano esattamente come sempre:

- I crawler dei motori di ricerca, che già rendono i commenti direttamente nella pagina anziché in un iframe
- Feed di attività degli utenti e filtraggio di hashtag, che leggono da endpoint diversi

### In conclusione

Speriamo che continui a godere della nostra piattaforma e speriamo che i miglioramenti che apportiamo aggiungano valore. :)

Saluti!

{{/isPost}}