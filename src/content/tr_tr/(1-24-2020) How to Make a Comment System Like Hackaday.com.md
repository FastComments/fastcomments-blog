---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Hackaday.com gibi bir yorum sistemi nasıl yapılır?[/postlink]

{{#unless isPost}}
Burada Hackaday'deki gibi görünen bir yorum dizisi oluşturmayı keşfedeceğiz.

Bu gönderinin bağlantısına tıklarsanız, genel sayfa stilinin yanı sıra FastComments Blog da değişecektir.

{{/unless}}

{{#isPost}}
###### 24 Ocak 2020
<div class="post-header">
    <div class="by left">yazan: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## VAAY NE OLDU?

Bu gönderi, FastComments kullanarak https://hackaday.com'a benzeyen bir yorum sistemi yapımını gösteren bir örnektir.

Onları kopyalamanızı önermiyoruz. Ancak bu, FastComments'ın esnekliğini gösteriyor.

FastComments'ı bu şekilde görünmesi için ayarlamak oldukça basit!
Bunun için bir kullanıcı arayüzü oluşturduk! Örneğin, FastComments'ı bu sayfayla eşleşecek şekilde yapılandırmak için kullandığımız ayar burada:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday Ayarları"
        class='lozad'
        height="850px" />
</div>

Bunu kodla yapmak isterseniz, o da en az o kadar kolay.

Sadece birkaç seçeneği ayarlamamız gerekiyor. Yani, yedi. İşte kod parçası (özel CSS hariç). Bu şekilde yalnızca bu kadar CSS eklenebilir. CSS tanımlamak için yukarıdaki UI'yı kullanmanızı öneririz. Bu, sizin için de optimize edilecek, oysa customCSS özelliğini tanımlamak, herhangi bir küçültme optimizasyonu uygulamaz.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] "YORUM HAKKINDA" DÜŞÜNCELER',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Yorum';
        },
        headerHTML: '<h1>Bir Cevap Bırak</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

Peki, bunların her biri ne anlama geliyor?
- commentCountFormat = Yorum dizisinin üstündeki başlığın formatı. "[count]" Gerçek yerelleştirilmiş sayı ile değiştirilir.
- commentCountUpdated = Yorum sayısı değiştiğinde çağrılan bir işlev. Bunu, sayfanın üst kısmındaki yorum sayısını ayarlamak için kullanıyoruz.
- headerHTML = "bir cevap bırak" kutusunun üstünde gösterilen HTML. Bu durumda, bir başlık öğesi eklemek için kullanıyoruz.
- hideAvatars = Hackaday'de avatar yoktur. Bu yüzden bunları gizlemek için true olarak ayarlıyoruz.
- inputAfterComments = Yanıt kutusunu yorum akışının en altına taşır.
- absoluteDates = Varsayılan tarih formatını (yani, "11 Dakika Önce") mutlak bir tarihe değiştirir.
- customCSS = Özel stil

Tüm yapılandırma seçenekleri <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">burada</a> belgelenmiştir.

<style>
    body, .content {
        background: #1a1a1a;
        font-family: "proxima-nova-n7","proxima-nova-n6","proxima-nova",sans-serif;
        color: #fff;
    }
    
    .header {
        color: #fff;
        border: none;
    }
    
    .header .header-inner a {
        display: block;
        padding-top: 35px;
        color: #fff;
        text-align: center;
        font-size: 80px;
    }
    
    .header .header-inner .buttons {
        display: none;
    }
    
    .header .header-inner #watchly-target {
        display: none;
    }
    
    .left-right-art {
        display: none;
    }
    
    .content {
        position: relative;
        max-width: 1128px;
        margin: 57px auto;
        padding: 20px 0 20px 0;
        box-shadow: none;
        border-top: 5px solid #fff;
        box-sizing: border-box;
        font-size: 1rem;
        line-height: 1.4;
    }
    
    .content a {
        color: #f3bf10;
        text-decoration: none;
    }
    
    .content a:hover {
        color: #fddb2f;
    }
    
    .content .posts .post .post-description h1, .content .posts .post .post-description h1 a {
        margin: 0;
        padding: 20px 0 10px;
        font-style: normal;
        font-size: 51px !important;
        font-weight: 800;
        line-height: 1;
        text-transform: uppercase;
        color: #fff !important;
    }
    
    .content h6#jan-24nd-2020-1 {
        position: absolute;
        top: -80px;
        right: 0px;
        font-size: 17px;
        font-weight: 700;
    }
    
    .content .by {
        font-size: 20.4px;
    }
    
    .post-header {
        height: 20px;
    }
    
    .post-header a {
        cursor: pointer;
        font-weight: 600;
    }
    
    .post-header .left {
        float: left;
    }
    
    .post-header .right {
        float: right;
    }
    
    @media(max-width: 1024px) {
        .header {
            padding-top: 0;
        }
        
        .header .header-inner a {
            padding: 0;
            font-size: 40px;
        }
        
        .content {
            margin: 7px auto;
            padding: 8px;
        }
        
        .content h6#jan-24nd-2020-1 {
            top: -38px;
            right: 5px;
        }
        
        .content h1 {
            padding: 0 0 10px;
            font-size: 32px;
        }
    }
</style>
<link rel="stylesheet" href="https://use.typekit.net/dru2dki.css" />

<script>
    window.fcCommentCountUpdated = function(count) {
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Yorum';
    };
</script>

{{/isPost}}

---