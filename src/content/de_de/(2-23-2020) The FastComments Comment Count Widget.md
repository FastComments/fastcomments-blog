---
[category:Features]

###### [postdate]
# [postlink]Das FastComments Kommentaranzahl-Widget[/postlink]

Möchten Sie die Anzahl der Kommentare auf einer Seite anzeigen, bevor ein Benutzer darauf klickt? Kein Problem mit FastComments.

{{#isPost}}
Der erste von vielen, die noch kommen werden - FastComments unterstützt jetzt Kommentaranzahl-Widgets.

Zum Beispiel hat diese Seite <b><span id="fastcomments-widget-comment-count"></span></b>. Diese Zahl wird über das Widget eingefügt! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

Es handelt sich um eine Live-Zahl, mit einem Cache von 60 Sekunden, um sehr beliebten Seiten schneller zu bedienen. Das bedeutet, dass Sie möglicherweise sehen, dass die Live-Zahl hinter der Anzahl Ihrer Kommentare um eine Minute verzögert ist, aber das dient dazu, sicherzustellen, dass FastComments seinem Namen gerecht wird.

Ein besseres Beispiel könnte eine Liste von Blogbeiträgen sein, zum Beispiel:

### Beitrag #1
##### 64 Kommentare


### Beitrag #2
##### 128 Kommentare


### Beitrag #3
##### 256 Kommentare

Sie können auch ein Live-Beispiel davon auf der Blog-<a href="https://blog.fastcomments.com" target="_blank">Startseite</a> sehen.

Das Kommentaranzahl-Widget wird nicht in einem iframe gerendert, sodass es vollständig über CSS anpassbar ist. Es wird automatisch das Styling Ihrer Seite erben - Schriftarten, Farben, Zeilenhöhen und so weiter.

Um Zugriff auf den Kommentaranzahl-Widget-Code für Ihr Konto zu erhalten, gehen Sie einfach <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">hier</a>.

Sie finden es über die Benutzeroberfläche auf der Kontoseite, indem Sie auf Widget-Code abrufen und dann auf Weitere Widgets klicken.

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