---
[category:API & Development]
###### [postdate]
# [postlink]Aggiornamento del Menu Commenti[/postlink]

{{#unless isPost}}
Questo aggiornamento è principalmente per gli sviluppatori che personalizzano FastComments. Abbiamo apportato alcune modifiche all'API e alcune ottimizzazioni.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Terminologia Tecnica

### Novità

Alcuni tenant di FastComments personalizzano il widget dei commenti. Questo crea un contratto
tra le tue personalizzazioni e la nostra implementazione. Facciamo del nostro meglio per non rompere questo
contratto, ma come parte di questo annuncio abbiamo una piccola modifica di rottura.

### Per gli Sviluppatori

Un selettore CSS per il menu commenti è stato cambiato.

Vecchio:

    .comment .menu .menu-content

Nuovo:

    .menu-content

### Tenant Esistenti

Se stai già utilizzando il selettore "menu-content" - congratulazioni! Abbiamo esaminato tutti i nostri
tenant che utilizzano questo selettore e aggiornato le loro configurazioni del widget per prevenire rotture.

Fateci sapere se avete problemi.

### Motivazione

Da quando è stato creato il widget dei commenti, il menu commenti era puramente un menu a discesa gestito da CSS. Questo
è un modo semplice e veloce per implementare un menu a discesa che non richiede molto codice - un obiettivo
di design di FastComments.

Tuttavia, nel corso degli anni ha accumulato problemi.

Da un lato, quando l'area commenti ha un'altezza specifica ed è scorrevole, come con Streaming Chat,
accedere al menu verso il basso è difficile poiché il menu tenterà di andare oltre
l'area di contenuto scorrevole. Ciò rende parte del menu invisibile e ti costringe a
muovere il mouse e ripassare sopra il menu per completare qualsiasi operazione che stavi cercando di fare. Abbiamo ritenuto
che fosse frustrante da usare.

Sono state trovate alcune soluzioni, come invertire la direzione del menu **verso l'alto**,
ma questo non funziona neanche se l'altezza del widget non è abbastanza alta e ci sono molti elementi
di azione nel menu - come per gli amministratori. In questo caso sarebbe ideale far cadere il menu
oltre l'area di contenuto scorrevole.

### Vantaggi di Dimensione

Un vantaggio di questo cambiamento è che siamo stati in grado di astrare molto codice in un 
modulo che si carica in modo asincrono. Questo ci permetterà di espandere le azioni che puoi compiere sui dati dei commenti senza rendere
il caricamento iniziale del widget sovraccarico. Questo introduce una chiamata di rete la prima volta che passi
sopra il menu di modifica, ma il pacchetto iniziale è molto piccolo (< 1kb) quindi non dovrebbe essere molto
percepibile.

È molto difficile continuare a far evolvere il software e anche ridurne le dimensioni nel tempo. Di solito il software
inizia veloce e diventa lento. Quindi, siamo sempre felici di continuare a mantenere FastComments veloce:

    Prima: 28.76kb gzipped (108.02kb totale)
    Dopo: 28.39kb gzipped (105.79kb totale)

Meno codice significa anche meno codice che il tuo browser deve analizzare al caricamento della pagina. L'impatto di questo aumenterà man mano che verranno aggiunte più funzionalità.

### Vantaggi delle Prestazioni

Il vecchio menu rendeva tutti gli elementi del menu e caricava tutte le estensioni per vedere se le estensioni
avevano elementi da aggiungere, e li rendeva anche - per ogni commento - in modo che il contenuto fosse pronto per il tuo mouse.

Ci sono solitamente solo 30 - 100 oggetti quindi questo tende a non essere un grosso problema, ma l'impatto stava crescendo. Il nuovo sistema rimuove questa preoccupazione
poiché il menu è ora reso solo su richiesta.

Il compromesso è che il nuovo menu è posizionato e reso utilizzando JS per realizzare ciò che vogliamo. Continueremo
a ottimizzarlo se possibile, tuttavia attualmente funziona bene.

### In Conclusione

Grazie ai nostri clienti per la loro pazienza nell'implementare questi cambiamenti. Speriamo che tu
continui ad amare FastComments.

Saluti!

{{/isPost}}

---