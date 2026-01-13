---
[category:Analytics]
###### [postdate]
# [postlink]FastComments ora può mostrare i conteggi delle visualizzazioni dei commenti[/postlink]

{{#unless isPost}}
FastComments ora supporta la visualizzazione di un conteggio accanto a ciascun commento che si incrementa in tempo reale man mano che gli utenti visualizzano i commenti.
{{/unless}}

{{#isPost}}

### Novità

FastComments ora supporta la visualizzazione di un conteggio accanto a ciascun commento che si incrementa in tempo reale man mano che gli utenti visualizzano i commenti. Se un commento è stato visualizzato o meno è determinato dall'account dell'utente o dalla sessione anonima. Supporta SSO (sia Secure SSO che Simple SSO).

### Demo dal vivo

Abbiamo abilitato i conteggi delle visualizzazioni dei commenti per questo post del blog in particolare! Controlla il conteggio accanto all'occhio su ciascun commento!

### Documentazione

[Puoi trovare la documentazione per gli sviluppatori per impostare i conteggi delle visualizzazioni qui.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Prestazioni

I conteggi non vengono aggiornati immediatamente, c'è un piccolo ritardo (fino a tre secondi) mentre i conteggi vengono aggregati e poi inviati sulla rete. Questa è un'ottimizzazione in modo che se
hai un evento dal vivo, e qualche migliaio di persone visualizzano in media 10 commenti sulla pagina, non inviamo istantaneamente milioni di aggiornamenti (`3000 utenti x 3000 caricamenti di pagina = ~9 milioni di cambiamenti`) a ogni utente e intasare
il loro browser o utilizzare tutta la loro larghezza di banda di rete.

### In conclusione

Ringraziamo i nostri clienti che ci danno feedback continui in modo da poter pensare a idee come questa e anche darci il tempo per lanciare funzionalità ben ottimizzate. Speriamo che tu
continui ad adorare FastComments.

Saluti!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---