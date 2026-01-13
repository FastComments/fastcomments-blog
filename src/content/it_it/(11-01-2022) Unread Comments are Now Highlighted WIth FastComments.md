---
[category:UI & Customization]
###### [postdate]
# [postlink]I commenti non letti ora sono evidenziati con FastComments[/postlink]

{{#unless isPost}}
Ti è mai capitato di tornare su una pagina e voler riprendere la lettura della sezione commenti da dove avevi interrotto? FastComments ora evidenzia i commenti
che hai saltato, rendendo questo facile.
{{/unless}}

{{#isPost}}

### Novità

Ti è mai capitato di tornare su una pagina e voler riprendere la lettura della sezione commenti da dove avevi interrotto? FastComments ora evidenzia i commenti
che hai saltato, rendendo questo facile.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar nel nuovo commento evidenziato." />
</div>

### Come Ottenerlo

Qualsiasi commento che ha attivato una notifica in-app (risposte, risposte nella stessa conversazione o commenti su una pagina
alla quale sei iscritto), sarà automaticamente evidenziato con l'avatar dell'utente che brilla leggermente. Il colore può essere personalizzato tramite CSS
utilizzando la classe `is-unread`. Lo stile predefinito supporta anche la modalità scura.

Inoltre, è stata aggiunta una nuova classe CSS `24hr` agli elementi commento pubblicati nelle ultime 24 ore. Puoi usare questo per stilizzare
anche i commenti.

### Perché Evidenziare L'Avatar?

Riconosciamo che potrebbe essere preferibile evidenziare l'intero commento. Tuttavia, questo presenta preoccupazioni di leggibilità e stile con
i nostri clienti che hanno personalizzato la piattaforma per adattarla al loro prodotto. Abbiamo scoperto che evidenziare leggermente l'avatar è un cambiamento piuttosto poco invadente
nella maggior parte dei casi. Se desiderato, il bagliore può essere rimosso e cambiato utilizzando le regole di personalizzazione del widget.

### In Conclusione

Sappiamo che questa funzionalità è stata attesa a lungo da alcuni. Abbiamo dedicato tempo a scegliere uno stile che non fosse troppo invadente ma comunque utile, e potremmo
apportare ulteriori aggiustamenti basati sul feedback.

Saluti!

{{/isPost}}

---