---
[category:Features]

###### [postdate]
# [postlink]FastComments vidžet za broj komentara[/postlink]

Želite da prikažete broj komentara na stranici pre nego što korisnik klikne? Nema problema sa FastComments.

{{#isPost}}
Prvi od mnogih koji dolaze - FastComments sada podržava vidžete za broj komentara.

Na primer, ova stranica ima <b><span id="fastcomments-widget-comment-count"></span></b>. Taj broj se ubacuje putem vidžeta! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

To je uživo broj, sa keširanjem od 60 sekundi kako bi se vrlo popularne stranice učitale brže. To znači da možete videti da uživo broj kasni za minut u odnosu na broj vaših komentara, ali to je kako bi se osiguralo da FastComments opravda svoje ime.

Bolji primer može biti lista blog postova, na primer:

### Post #1
##### 64 Komentara


### Post #2
##### 128 Komentara


### Post #3
##### 256 Komentara

Takođe možete videti uživo primer ovog na blogu <a href="https://blog.fastcomments.com" target="_blank">početnoj stranici</a>.

Vidžet za broj komentara se ne prikazuje u iframe-u, tako da je potpuno prilagodljiv putem CSS-a. Automatski će naslijediti stilizaciju vaše stranice - fontove, boje, visine redova, itd.

Da biste dobili pristup kodu vidžeta za broj komentara za vaš nalog jednostavno idite <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">ovde</a>.

Možete ga pronaći putem UI-a preko stranice naloga, a zatim klikom na Dobij kod vidžeta i zatim Ostali vidžeti.

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