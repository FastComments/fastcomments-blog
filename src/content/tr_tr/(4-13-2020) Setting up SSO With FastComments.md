---
[category:API & Development]

###### [postdate]
# [postlink]FastComments ile SSO Kurulumu[/postlink]

{{#unless isPost}}
FastComments, çeşitli platformlar ve özel entegrasyonlar için SSO çözümleri sunmaktadır.
{{/unless}}

{{#isPost}}

# Genel Bakış

## SSO Nedir?

SSO, veya tek oturum açma, sizin veya kullanıcılarınızın başka bir hesap oluşturmadan FastComments kullanabilmesini sağlayan bir dizi kuraldır.

Anonim yorum yapmaya izin vermediğinizi varsayarsak, FastComments ile yorum yapabilmek için bir hesap gereklidir. Bu kayıt sürecini çok kolay hale getiriyoruz - kullanıcı sadece yorum yaparken e-posta adresini bırakır. Ancak, bazı sitelerin kaçınmak istediği ekstra bir sürtüşme olduğunu anlıyoruz.

## Nasıl alabilirim?

Tüm hesap türleri şu anda SSO'ya ve destek erişimine sahiptir. Ancak, SSO kullanıcı sayısı paketlerinize göre değişecektir.

### WordPress Kullanıcıları

Eğer <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a> eklentimizi kullanıyorsanız, herhangi bir kod yazmanıza gerek yok! Sadece eklentinin Yönetici sayfasına gidin, SSO Ayarları'na tıklayın ve ardından Etkinleştir'i seçin.

Bu, API anahtarınızı oluşturacak, WordPress kurulumunuza gönderecek ve SSO'yu etkinleştirecek tek düğme tıklama sihirbazına sizi götürecektir. Bunu sizin için tek düğme tıpkı tıklamasıyla birleştirdik. 

Eklentiyi ilk kez kuruyorsanız, SSO Ayarları düğmesini görene kadar kurulum sürecini takip etmeniz gerekecektir.

### Özel Entegrasyonlar

FastComments SSO, SSO’yu uygulamak için HMAC-SHA256 şifrelemesini kullanır. Öncelikle genel mimariyi gözden geçireceğiz, örnekler vereceğiz ve detaylı adımlar sunacağız. Ancak bu makalenin sonunda **Disqus ve Commento'dan geçiş yapma** talimatları bulunmaktadır.

Akış şöyle görünür:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO Diyagramı" title="FastComments SSO Diyagramı" class="lozad" />
</div>

FastComments SSO ile yeni API uç noktaları yazmanız gerekmez. Kullanıcının bilgilerini gizli anahtarınızla şifreleyin ve yükü yorum widget'ına iletin.

NodeJS, Java/Spring ve vanilla PHP de dahil olmak üzere çeşitli dillerde/çalışma zamanlarında tamamen işlevsel kod örnekleri sağlıyoruz. NodeJS örneğinde ExpressJS kullanıyor olsak da ve Java örneğinde Spring kullansak da, FastComments SSO'yu uygulamak için bu çalışma zamanlarında herhangi bir çerçeve/kütüphane gerekli değildir - yerel kripto paketleri çalışmaktadır.

Kod örneği deposunu buradan bulabilirsiniz:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">FastComments SSO Kod Örnekleri</a>

#### API Gizli Anahtarınızı Alın

API Gizliniz <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">bu sayfadan</a> alınabilir. Bu sayfayı ayrıca Hesabım bölümüne giderek, API/SSO kutucuğuna tıklayarak ve ardından "API Gizli Anahtarını Al" seçeneğine tıklayarak bulabilirsiniz.

#### Yorum Widget'ı Parametreleri

Yorum widget'ı için yüksek düzeyde API belgeleri <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">burada</a> bulunmaktadır, "Gelişmiş Seçenekleri Göster" seçeneğine tıklayın. Sayfada SSO'yu arayın.

Bu parametrelerin ne anlama geldiğine daha ayrıntılı bakalım.

Yorum widget'ı bir yapılandırma nesnesi alır - müşteri kimliğinizi (tenantId olarak adlandırılır) iletmeniz durumunda zaten bunu iletmiş oluyorsunuz.

SSO'yu etkinleştirmek için yeni bir "sso" nesnesi iletmeniz gerekir; bu nesnenin aşağıdaki parametreleri içermesi zorunludur. Değerler **sunucu tarafında** oluşturulmalıdır.

- userDataJSONBase64: Kullanıcının JSON formatındaki verisi, ardından Base64 kodlanmış.
- verificationHash: UNIX_TIME + userDataJSONBase64'dan oluşturulan HMAC-SHA256 hash'i.
- timestamp: Mevcut unix zamanı. **Gelecekte olmamalı veya geçmişte üç saatten daha fazla olmamalıdır.**
- loginURL: Yorum widget'ının kullanıcıyı oturum açması için gösterebileceği bir URL.
- logoutURL: Yorum widget'ının kullanıcıyı oturum kapatması için gösterebileceği bir URL.
- loginCallback: Oturum açma URL'si yerine sağlandığında, yorum widget'ının oturum açma düğmesine tıkladığınızda çağıracağı bir işlev.
- logoutCallback: Oturum kapatma URL'si yerine sağlandığında, yorum widget'ının oturum kapatma düğmesine tıkladığınızda çağıracağı bir işlev.

#### Kullanıcı Nesnesi 

Kullanıcı nesnesi aşağıdaki şemayı içerir:

- id (string, zorunlu) (1k karakter maks)
- email (string, zorunlu) (1k karakter maks). Not: Benzersiz olmalıdır.
- username (string, zorunlu) (1k karakter maks). Not: Kullanıcı adı bir e-posta olamaz. Benzersiz olması gerekmez.
- avatar (string, isteğe bağlı) (3k karakter maks)
- optedInNotifications (boolean, isteğe bağlı)
- displayLabel (string, isteğe bağlı, 100 karakter maks). Bu etiket, adı yanında gösterilecektir.
- websiteUrl (string, isteğe bağlı, 2000 karakter maks). Kullanıcının adı buna bağlanacaktır.

#### Bildirimler

Bildirimleri etkinleştirmek veya devre dışı bırakmak için optedInNotifications değerini sırasıyla true veya false olarak ayarlayın. Kullanıcı, bu değeri içeren SSO yüküyle sayfayı ilk kez yüklediğinde, bildirim ayarları güncellenecektir.

#### VIP Kullanıcılar ve Özel Etiketler

Kullanıcının adının yanında özel bir etiket göstermek için isteğe bağlı "displayLabel" alanını kullanabilirsiniz.

#### Kimlik Doğrulaması Olmayan Kullanıcılar

Kimlik doğrulaması yapılmamış bir kullanıcıyı temsil etmek için userDataJSONBase64, verificationHash veya timestamp değerlerini doldurmayın. Bir loginURL sağlayın.

#### Kullanıcı Verilerini Seri Hale Getirme ve Hashleme için Doğrudan Örnekler

Daha fazla detay ve örnekler için <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">burada (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">burada (java)</a> ve
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">burada (php)</a>.

### Disqus SSO'dan Geçiş Yapma

Disqus ile FastComments SSO arasındaki en büyük fark, Disqus'un şifreleme için SHA1 kullanmasıdır, biz ise SHA256 kullanıyoruz.
Bu, Disqus'tan geçiş yapmayı kolaylaştırır - kullanılan hashing algoritmasını SHA1'den SHA256'ya değiştirin ve UI'ye iletilen özellik adlarını güncelleyin.

### Commento SSO'dan Geçiş Yapma

Commento, tamamen farklı bir SSO yaklaşımı kullanır - onların, kullanıcıyı kimlik doğrulamak için çağırdıkları bir uç noktaya sahip olmanızı gerektirir. FastComments tam tersidir - sadece kullanıcının bilgilerini gizli anahtarınızla kodlayın ve hashleyin ve iletin.

Herhangi bir entegrasyonun karmaşık ve acı veren bir süreç olabileceğini anlıyoruz. Temsilcinizle iletişime geçmekten veya <a href="https://fastcomments.com/auth/my-account/help" target="_blank">destek sayfasını</a> kullanmaktan çekinmeyin.

{{/isPost}}

---