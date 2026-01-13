---
[category:Features]

###### [postdate]
# [postlink]FastComments widget za broj komentara[/postlink]

Želite da prikažete broj komentara na strani pre nego što korisnik klikne? Nema problema sa FastComments.

{{#isPost}}
Prvi od mnogih koji dolaze - FastComments sada podržava widgete za broj komentara.

Na primer, ova stranica ima <b><span id="fastcomments-widget-comment-count"></span></b>. Taj broj se unosi putem widgeta! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

To je uživo broj, sa 60 sekundi keša da bi se ubrzalo učitavanje veoma popularnih stranica. To znači da ćete možda videti uživo broj koji zaostaje za brojem
vaših komentara za minutu, ali to je da bi se osiguralo da FastComments opravda svoje ime.

Bolji primer može biti lista blog postova, na primer:

### Post #1
##### 64 Komentara


### Post #2
##### 128 Komentara


### Post #3
##### 256 Komentara

Takođe možete videti uživo primer ovog na blogu <a href="https://blog.fastcomments.com" target="_blank">početnoj strani</a>.

Widget za broj komentara se ne prikazuje u iframe-u, tako da ga je potpuno moguće prilagoditi putem CSS-a. Automatski će naslediti stilizaciju vaše stranice - fontove, boje, visine redova, i tako dalje.

Da biste dobili pristup kodu za widget za broj komentara za vaš nalog, jednostavno idite <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">ovde</a>.

Možete ga pronaći putem UI-a na stranici naloga, kliknite na Dobij kod widgeta, a zatim na Ostali widgeti.

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