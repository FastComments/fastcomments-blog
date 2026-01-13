---
[category:Features]

###### [postdate]
# [postlink]Witryna Zliczania Komentarzy FastComments[/postlink]

Chcesz pokazać liczbę komentarzy na stronie przed tym, jak użytkownik kliknie? Żaden problem z FastComments.

{{#isPost}}
Pierwszy z wielu, które nadchodzą - FastComments teraz obsługuje widgety zliczające komentarze.

Na przykład, ta strona ma <b><span id="fastcomments-widget-comment-count"></span></b>. Ta liczba jest wstawiana przez widget! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

To jest zliczanie na żywo, z 60-sekundową pamięcią podręczną, aby pomóc szybko obsługiwać bardzo popularne strony. To oznacza, że możesz zobaczyć, że liczba na żywo opóźnia się w porównaniu do liczby
twoich komentarzy o minutę, ale to ma na celu zapewnienie, że FastComments spełnia swoją nazwę.

Lepszym przykładem może być lista postów blogowych, na przykład:

### Post #1
##### 64 Komentarze


### Post #2
##### 128 Komentarzy


### Post #3
##### 256 Komentarzy

Możesz również zobaczyć przykład na żywo na <a href="https://blog.fastcomments.com" target="_blank">stronie głównej</a> bloga.

Witryna Zliczania Komentarzy nie renderuje się w iframe, więc jest w pełni dostosowywalna za pomocą CSS. Automatycznie dziedziczy style twojej strony - czcionki, kolory, wysokości linii itd.

Aby uzyskać dostęp do kodu widgetu Zliczania Komentarzy dla swojego konta, po prostu idź <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">tutaj</a>.

Możesz znaleźć to w interfejsie użytkownika na stronie konta, klikając Uzyskaj Kod Widgetu, a następnie Inne Widgety.

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