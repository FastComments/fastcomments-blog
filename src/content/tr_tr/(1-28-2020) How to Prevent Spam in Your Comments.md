---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]Yorumlarınızda Spam'ı Nasıl Önleyebilirsiniz[/postlink]

Spam ile %100 mücadele etmenin bir yolu yoktur. Ancak FastComments, bu konuda yardımcı olmak için bir dizi önlem alır.

{{#isPost}}

## Site Yönetici Belgeleri

FastComments'ın varsayılan kurulumu hem Spam hem de Küfür filtrelemesini etkinleştirmiştir.

Bu varsayılan ayarlar, spamı önlemek ile çoğu topluluk için fazla müdahaleci olmamak arasında bir denge sağlar.

[Modere etme kılavuzuna göz atmak isteyebilirsiniz](https://docs.fastcomments.com/guide-moderation.html).

## Nasıl Çalışır

Spam filtremiz, spam'i tanımlamak için bir [Naive Bayes sınıflandırıcısı](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) kullanır.

Zamanla, yöneticilerin spam olarak işaretlediği ve spam olmayan olarak işaretlediği verilere dayalı olarak eğitilir.

FastComments, sitenizde bir iframe içinde çalışır. Bu, otomatik spam botlarının yorum bölümünü hedef almasını daha zor hale getirir. Ancak, eğer yaparlarsa
ve sınıflandırıcımız, yorumlarını "spam" olarak belirlerse, bu yorumlar kullanıcılarınızdan gizlenecektir. Diğer tüm yorumlar gibi, bunlar da
gözden geçirme gerektirmekte olarak [moderasyon sayfasında](https://fastcomments.com/auth/my-account/moderate-comments) işaretlenir.

Küfür filtrelemesi ise varsayılan olarak gizli yorumlara neden olmaz. Sadece "kötü kelimeleri" yıldızlarla maskelemektedir.

## Spam'ı Tamamen Engelleme

Varsayılan olarak, FastComments spamı kabul eder, ancak gizler ve inceleme için işaretler.

Eğer kullanıcıya yorumunun spam olarak tespit edildiğini bildirmek ve revize etmesini istemek isterseniz, bu 
[Moderasyon Ayarları](https://fastcomments.com/auth/my-account/moderate-comments/settings) üzerinden `Spam Blokla` ayarını etkinleştirerek yapılabilir.

## Küfürlü Yorumları Gizleme

Küfürlü yorumlar, [Moderasyon Ayarları](https://fastcomments.com/auth/my-account/moderate-comments/settings) içinde `Küfürlü Yorumları Spam'a Automatik Olarak Gönder` ayarını etkinleştirerek gizlenebilir.

## Ayarlar

Hem Küfür hem de Spam filtrelemesi, [Moderasyon Ayarları](https://fastcomments.com/auth/my-account/moderate-comments/settings) sayfasında ayrı ayrı kapatılabilir.

## Yorum Doğrulaması

FastComments, varsayılan olarak, [doğrulanmamış yorumları](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) tüm kullanıcılar için bu şekilde işaretleyen bir doğrulama sistemi kullanır.

Kullanıcıların tam olarak oturum açmadan yorum yapmalarına izin verilmesi, bir tartışmaya katılma engelini düşürmektedir. Doğrulanmamış etiketi, özelleştirme kuralları aracılığıyla gizlenebilir.

Doğrulanmamış yorumlar varsayılan olarak gösterilir, ancak e-posta ile doğrulanana kadar gizlenebilir; `Sadece Oto Onaylı Doğrulanmış Yorumları` etkinleştirerek.

SSO ile, tüm yorumlar her zaman doğrulanır. Bir kullanıcı doğrulanmış bir oturumda oturum açtığında, yorumları daima doğrulanmış olacaktır.

Doğrulanmamış yorumlar aynı zamanda kaldırılmak üzere planlanabilir.

## Yorum Yapanlar İçin

Eğer yorumunuz spam olarak tespit edilirse, hemen bir mesaj göreceksiniz. Bu, yorumun başkalarına görünmeden önce gözden geçirilmesi gerektiğini belirtmek içindir. Spam tespiti %100 doğru olamaz, bu yüzden bazı hayal kırıklıkları yaşarsanız anlıyoruz. Eğer yorumunuz geçerliyse, site yöneticisinin bunu fark edip yorumunuzu spam olarak işaretlememesi gerekir.

{{/isPost}}