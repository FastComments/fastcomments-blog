---
[category:Features]

###### [postdate]
# [postlink]Widget za števec komentarjev FastComments[/postlink]

Želite prikazati število komentarjev na strani, preden uporabnik klikne? Ni problema s FastComments.

{{#isPost}}
Prvi od mnogih, ki prihajajo - FastComments zdaj podpira widgete za števec komentarjev.

Na primer, ta stran ima <b><span id="fastcomments-widget-comment-count"></span></b>. To število je vdelano preko widgeta!
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

To je živ števec, s 60-sekundnim predpomnilnikom, da omogoči hitrejše nalaganje zelo priljubljenih strani. To pomeni, da lahko vidite, da živ števec zaostaja za številom vaših komentarjev za minuto, vendar je to zato, da se zagotovi, da FastComments izpolnjuje svoje ime.

Boljši primer bi bila seznam blog objav, na primer:

### Objave #1
##### 64 komentarjev


### Objave #2
##### 128 komentarjev


### Objave #3
##### 256 komentarjev

Živ primer tega lahko tudi vidite na blogu <a href="https://blog.fastcomments.com" target="_blank">domači strani</a>.

Widget za števec komentarjev se ne prikazuje v iframe-u, zato je popolnoma prilagodljiv preko CSS. Samodejno bo podedoval stil vaše strani - pisave, barve, višine vrstic in tako naprej.

Za dostop do kode widgeta za števec komentarjev za vaš račun preprosto pojdite <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">tukaj</a>.

Najdete ga lahko preko uporabniškega vmesnika na strani računa, nato kliknite Pridobi kodo widgeta in nato Drugi widgeti.

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