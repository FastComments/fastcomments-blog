---
[category:Features]

###### [postdate]
# [postlink]Il Widget di Conteggio Commenti di FastComments[/postlink]

Vuoi mostrare il numero di commenti su una pagina prima che un utente faccia clic? Nessun problema con FastComments.

{{#isPost}}
Il primo di molti a venire - FastComments ora supporta widget per il conteggio dei commenti.

Ad esempio, questa pagina ha <b><span id="fastcomments-widget-comment-count"></span></b>. Quel numero è inserito tramite il widget! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

È un conteggio dal vivo, con una cache di 60 secondi per aiutare a servire pagine molto popolari più velocemente. Questo significa che potresti vedere il conteggio dal vivo in ritardo rispetto al conteggio dei tuoi commenti di un minuto, ma questo è per garantire che FastComments mantenga la sua promessa.

Un esempio migliore potrebbe essere un elenco di post del blog, ad esempio:

### Post #1
##### 64 Commenti


### Post #2
##### 128 Commenti


### Post #3
##### 256 Commenti

Puoi anche vedere un esempio dal vivo di questo sulla <a href="https://blog.fastcomments.com" target="_blank">homepage</a> del blog.

Il widget di conteggio commenti non viene visualizzato in un iframe, quindi è completamente personalizzabile tramite CSS. Erediterà automaticamente lo stile della tua pagina - caratteri, colori, altezze delle righe, e così via.

Per accedere al codice del widget di conteggio commenti per il tuo account vai semplicemente <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">qui</a>.

Puoi trovarlo tramite l'interfaccia utente nella pagina dell'account, quindi cliccando su Ottieni Codice del Widget e poi Altri Widget.

<style>
.content #post-1, .content #post-2, .content #post-3 {
    margin-bottom: 0;
}
.content h5[id="64-comments"], .content h5[id="128-comments"], .content h5[id="256-comments"] {
    margin-top: 0;
}
</style>
{{/isPost}}

---