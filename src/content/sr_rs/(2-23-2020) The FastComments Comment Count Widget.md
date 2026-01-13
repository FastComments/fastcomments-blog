[category:Features]

###### [postdate]
# [postlink]FastComments Widget za Broj Komentara[/postlink]

Želite da prikažete broj komentara na stranici pre nego što korisnik klikne? Nema problema sa FastComments.

{{#isPost}}
Prvi od mnogih koji dolaze - FastComments sada podržava widgete za broj komentara.

Na primer, ova stranica ima <b><span id="fastcomments-widget-comment-count"></span></b>. Taj broj se umetne putem widgeta! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

To je živopravi broj, sa keširanjem od 60 sekundi kako bi se brže posluživale veoma popularne stranice. To znači da možete videti kako živopravi broj kasni u odnosu na broj vaših komentara za minut, ali to je kako bi osigurali da FastComments opravda svoje ime.

Bolji primer može biti lista blog postova, na primer:

### Post #1
##### 64 Komentara


### Post #2
##### 128 Komentara


### Post #3
##### 256 Komentara

Takođe možete videti živi primer ovoga na blogu <a href="https://blog.fastcomments.com" target="_blank">početnoj strani</a>.

Widget za Broj Komentara se ne prikazuje u iframe-u, tako da je u potpunosti prilagodljiv putem CSS-a. Automatski će naslediti stil vaših stranica - fontove, boje, visine linija i tako dalje.

Da biste dobili pristup kodu za widget za broj komentara za vaš račun, jednostavno idite <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">ovde</a>.

Možete ga pronaći putem UI-a na stranici računa, zatim kliknite na Dobi Kod Widgeta, a zatim na Ostali Widgeti.

<style>
.content #post-1, .content #post-2, .content #post-3 {
    margin-bottom: 0;
}
.content h5[id="64-comments"], .content h5[id="128-comments"], .content h5[id="256-comments"] {
    margin-top: 0;
}
</style>
{{/isPost}}