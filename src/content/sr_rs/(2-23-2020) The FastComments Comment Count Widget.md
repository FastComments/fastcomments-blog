[category:Features]

###### [postdate]
# [postlink]FastComments виџет за број коментара[/postlink]

Желите ли да прикажете број коментара на страници пре него што корисник кликне? Нема проблема са FastComments.

{{#isPost}}
Први од многих који долазе – FastComments сада подржава виџете за број коментара.

На пример, ова страница има <b><span id="fastcomments-widget-comment-count"></span></b>. Тај број се убацује преко виџета! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

То је живи број, са кешем од 60 секунди који помаже у бржем служењу веома популарних страница. Ово значи да можете видети да живи број заостаје за укупним бројем ваших коментара за минут, али то је да би FastComments живео својим именом.

Бољи пример може бити листа блог постова, на пример:

### Пост #1
##### 64 коментара


### Пост #2
##### 128 коментара


### Пост #3
##### 256 коментара

Можете такође видети живи пример овога на <a href="https://blog.fastcomments.com" target="_blank">почетној страници</a> блога.

Виџет за број коментара не рендерује у iframe-у, тако да је у потпуности прилагодљив преко CSS-а. Аутоматски ће наследити стилизовање ваше странице – фонтове, боје, висине линија и сл.

Да бисте добили приступ коду виџета за број коментара за ваш налог, једноставно идите <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">овде</a>.

Можете га пронаћи у UI-ју на страници налога, затим кликнути на Get Widget Code и после Other Widgets.

<style>
.content #post-1, .content #post-2, .content #post-3 {
    margin-bottom: 0;
}
.content h5[id="64-comments"], .content h5[id="128-comments"], .content h5[id="256-comments"] {
    margin-top: 0;
}
</style>
{{/isPost}}