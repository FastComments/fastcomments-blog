---
[category:Features]

###### [postdate]
# [postlink]FastComments Kommentar Tæller Widget[/postlink]

Vil du vise antallet af kommentarer på en side, før en bruger klikker ind? Intet problem med FastComments.

{{#isPost}}
Den første af mange, der kommer - FastComments understøtter nu kommentar tæller widgets.

For eksempel har denne side <b><span id="fastcomments-widget-comment-count"></span></b>. Det tal indsættes via widget'en! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

Det er et live tæll, med en 60 sekunders cache for at hjælpe med at servere meget populære sider hurtigere. Det betyder, at du måske ser den live tæll forsinke sig bag tælleren for
dine kommentarer med et minut, men det er for at sikre, at FastComments lever op til sit navn.

Et bedre eksempel kunne være en liste over blogindlæg, for eksempel:

### Indlæg #1
##### 64 Kommentarer


### Indlæg #2
##### 128 Kommentarer


### Indlæg #3
##### 256 Kommentarer

Du kan også se et live eksempel på dette på bloggens <a href="https://blog.fastcomments.com" target="_blank">forside</a>.

Kommentar Tæller widget'en vises ikke i en iframe, så den er helt tilpasselig via CSS. Den vil automatisk arve din sides styling - skrifttyper, farver, linjehøjder, og så videre.

For at få adgang til koden til Kommentar Tæller widget'en for din konto, gå venligst <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">her</a>.

Du kan finde den via brugergrænsefladen på kontosiden, hvorefter du klikker på Få Widget Kode og derefter Andre Widgets.

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