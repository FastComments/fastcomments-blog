---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]YouTube, SoundCloud ve Daha Fazlasını Yorumlarda Göm[/postlink]

{{#unless isPost}}
Yorumcular artık bir gömme kodunu yapıştırabilir ve videoyu veya oynatıcıyı doğrudan yorumun içinde görüntüleyebilir. Varsayılan olarak kapalıdır, her site için isteğe bağlıdır ve güvenilir sağlayıcılarla sınırlıdır.
{{/unless}}

{{#isPost}}

### Yenilikler

İnsanlar bir tartışma sırasında bir video veya müzik parçasını paylaşmaktan hoşlanıyor. Şu ana kadar, bir yorumun içine YouTube veya SoundCloud'dan bir gömme kodu yapıştırmak pek bir işe yaramıyordu. Ham `<iframe>` güvenlik nedeniyle kaldırılıyordu ya da bir kod bloğu olarak sarılıyordu.

Artık siteniz için medya gömmelerini açabilirsiniz. Bu açık olduğunda, bir yorumcu sağlayıcıdan gömme kodunu doğrudan yapıştırabilir ve bu, herhangi bir sayfada olduğu gibi çevrimiçi olarak görünür.

İşte insanların "Paylaş" veya "Göm" butonundan kopyaladığı türden bir parça:

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>

Bunu, gömmeler etkinleştirildiğinde bir yoruma yapıştırın ve gerçek oynatıcıyı elde edin.

### Yalnızca Güvenilir Sağlayıcılar

Sayfanıza rastgele iframelerin eklenmesine izin vermek gerçek bir güvenlik riski olduğundan, kapıyı sadece açmadık. Gömme kodları, YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch ve Dailymotion dahil olmak üzere güvenilir sağlayıcıların yerleşik bir listesi ile sınırlıdır.

Bir yorum başka bir yere işaret eden bir iframe içeriyorsa, yorum kaydedildiğinde iframe kaldırılır. `<script>` etiketlerine ve `onload=` numaralarına karşı koruma sağlayan aynı sanitizasyon her yorumda çalışır. Gömme kodları, bunun üzerine dikkatlice tanımlanmış bir ek izin olarak eklenmiştir.

### Kendi Sağlayıcılarınızı Eklemek

Yerleşik listede olmayan bir sağlayıcı kullanıyorsanız, bunu izin verebilirsiniz. Ek güvenilir ana bilgisayar adlarını listeleyeceğiniz "Ek Gömme Alanları" alanı vardır; bu, yerleşik sağlayıcılara ek olarak yapılır.

Eşleşme tam ana bilgisayar adına göre yapılır, bu nedenle gömme kodunun yüklendiği tam ana bilgisayarı ekleyin, örneğin `player.example.com`. Listelemediğiniz herhangi bir şey engelli kalır.

### Nasıl Etkinleştirirsiniz

Bu, widget özelleştirme sayfasında, resim yükleme seçeneklerinin hemen yanında bir site başına ayardır. "Medya Gömmesine İzin Ver?" seçeneğini işaretleyin ve kaydedin. Hiçbir kod veya yeniden dağıtım gereklidir.

Diğer içerik ayarlarımıza benzer şekilde, bu her özelleştirme kuralı için geçerlidir, bu nedenle bir sitede veya bir sayfa setinde gömmeleri etkinleştirebilir ve diğer yerlerde kapalı bırakabilirsiniz.

### Her İki Editörde de Çalışır

Yapıştırma hem düz yorum kutusunda hem de WYSIWYG editöründe çalışır. Düz kutuda gömme kodu metin olarak gider ve gönderildiğinde bir oynatıcıya dönüşür. WYSIWYG editöründe gömme hemen bir blok olarak görünür ve köşede küçük bir kaldırma butonu vardır, böylece bir hata yaptıysanız kolayca silinebilir.

### Sonuç Olarak

Gömme kodları varsayılan olarak kapalıdır, bu nedenle onları açmayı seçmediğiniz sürece siteniz için hiçbir şey değişmez. Açtığınızda, yorumcularınız videoları ve parçaları paylaşmanın daha hoş bir yolunu bulur ve zaten sahip olduğunuz güvenlik garantilerini korursunuz.

Açın, bir video yapıştırın ve aşağıda ne düşündüğünüzü bize bildirin.

Selamlar!

{{/isPost}}

---