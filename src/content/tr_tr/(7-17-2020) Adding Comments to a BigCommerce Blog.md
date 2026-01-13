---
[category:Integrations]
###### [postdate]
# [postlink]BüyükCommerce Blog'una Yorum Ekleme[/postlink]

{{#isPost}}

#### Herhangi Bir Sayfada Hedef Kitle Etkileşimi Ekleyin
Hedef kitleniz blog yazılarınıza yorum yapabilse, sorular sorabilse ve geri bildirim verebilseydi ne olurdu? Artık bunu FastComments ile yapabilirler.

#### Özelleştirilmiş Temalar
FastComments'ı BigCommerce mağazanızın bloguna eklemek için tema şablonlarınızı düzenlemeniz gerekecek. Size adım adım göstereceğiz.

BigCommerce kontrol panelinde Mağaza -> Temalarım bölümüne gidin.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Mağaza Linki" title="Mağaza Linki" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Temalarım Linki" title="Temalarım Linki" class="lozad" />
</div>

"Mevcut Tema" altında "Gelişmiş" etiketiyle bir açılır menü göreceksiniz.

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Tema Gelişmiş Açılır Menüsü" title="Tema Gelişmiş Açılır Menüsü" class="lozad" />
</div>

Bu açılır menüdeki ilk seçenek "Tema Dosyalarını Düzenle"dir. Eğer bu seçenek tıklanabilir değilse, önce temayı "Kopyasını Oluştur" seçeneği ile kopyalamanız gerekecek.

Şablon düzenleyicisini açtıktan sonra, tarayıcınızın sol tarafında bir dosya tarayıcısı göreceksiniz. Bu, temanızdaki şablonlar için bir dosya tarayıcısıdır.

Bir blog yazısını temsil eden HTML şablonuna gitmek isteyeceksiniz. Bu, templates/components/blog/post.html adresindedir, aşağıda gösterildiği gibi:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Düzenleyici Yazı Dosyası Konumu" title="Düzenleyici Yazı Dosyası Konumu" class="lozad" />
</div>

FastComments kod parçacığınızı, <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">buradan</a> alabilirsiniz ve bunu "&#123;{>components/common/share}&#125;" metninin bulunduğu 48. satırdan hemen sonra yapıştırmalısınız.

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="FastComments'ı eklemek için yer" title="FastComments'ı eklemek için yer" class="lozad" />
</div>

#### Unutmayın!
FastComments'a mağazanız için alan adı eklemeniz gerekecek, bunu <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">buradan</a> yapabilirsiniz.

#### Sonuç Olarak
FastComments'ın BigCommerce blogunuzda böyle görünmesi gerekiyor. Şerefe!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="BüyükCommerce Blog'unda FastComments" title="BüyükCommerce Blog'unda FastComments" class="lozad" />
</div>

{{/isPost}}

---