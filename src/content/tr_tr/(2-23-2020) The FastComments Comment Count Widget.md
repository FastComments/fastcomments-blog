---
[category:Özellikler]

###### [postdate]
# [postlink]FastComments Yorum Sayısı Widget'ı[/postlink]

Bir kullanıcı tıklamadan önce bir sayfadaki yorum sayısını göstermek mi istiyorsunuz? FastComments ile hiçbir sorun yok.

{{#isPost}}
Gelecek birçok özelliğin ilki - FastComments artık yorum sayısı widget'larını destekliyor.

Örneğin, bu sayfada <b><span id="fastcomments-widget-comment-count"></span></b> var. Bu sayı widget aracılığıyla ekleniyor! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

Bu, 60 saniyelik bir önbellekle birlikte canlı bir sayıdır; bu, çok popüler sayfalara daha hızlı hizmet etmek için yardımcı olur. Bu, canlı sayının, yorumlarınızın sayısını bir dakikada bir geriden takip edebileceği anlamına geliyor, ancak bu, FastComments'in adını hak etmesini sağlamak içindir.

Daha iyi bir örnek blog yazılarının bir listesi olabilir, örneğin:

### Yazı #1
##### 64 Yorum


### Yazı #2
##### 128 Yorum


### Yazı #3
##### 256 Yorum

Bunun canlı bir örneğini blogun <a href="https://blog.fastcomments.com" target="_blank">ana sayfasında</a> görebilirsiniz.

Yorum Sayısı widget'ı bir iframe içinde render edilmez, bu nedenle tamamen CSS ile özelleştirilebilir. Sayfanızın stilini - fontlar, renkler, satır yükseklikleri gibi - otomatik olarak devralacaktır.

Hesabınız için Yorum Sayısı widget koduna erişmek için sadece <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">buraya</a> gidin.

Bunu kullanıcı arayüzü aracılığıyla hesap sayfasında bulabilir, ardından Widget Kodunu Al seçeneğine tıklayarak Diğer Widget'lar kısmından devam edebilirsiniz.

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