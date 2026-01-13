---
[category:Features]

###### [postdate]
# [postlink]FastComments Widget broja komentara[/postlink]

Želite prikazati broj komentara na stranici prije nego što korisnik klikne? Nema problema s FastComments.

{{#isPost}}
Prvi od mnogih koji dolaze - FastComments sada podržava widgete za broj komentara.

Na primjer, ova stranica ima <b><span id="fastcomments-widget-comment-count"></span></b>. Taj broj se umetne putem widgeta! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

To je uživo brojanje, s 60 sekundi keša kako bi se pomoćno brže učitale vrlo popularne stranice. To znači da možete vidjeti da uživo brojanje kasni za brojem
vaših komentara za minutu, ali to je kako bi se osiguralo da FastComments opravda svoje ime.

Bolji primjer može biti lista blog postova, na primjer:

### Post #1
##### 64 Komentara

### Post #2
##### 128 Komentara

### Post #3
##### 256 Komentara

Također možete vidjeti uživo primjer ovoga na blogu <a href="https://blog.fastcomments.com" target="_blank">početnoj stranici</a>.

Widget za broj komentara se ne prikazuje unutar iframe-a, tako da je potpuno prilagodljiv putem CSS-a. Automatski će naslijediti stilove vaše stranice - fontove, boje, visine redaka, i tako dalje.

Da biste dobili pristup kodu widgeta za broj komentara za vaš račun, jednostavno idite <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">ovdje</a>.

Možete ga pronaći putem korisničkog sučelja na stranici računa, a zatim kliknuti na Dobij kod widgeta i zatim Ostali widgeti.

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