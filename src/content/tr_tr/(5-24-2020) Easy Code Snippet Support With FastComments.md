---
[category:Features]

###### [postdate]
# [postlink]FastComments ile Kolay Kod Parçası Desteği[/postlink]

Bazı müşterilerimizin yazılım geliştirme ile ilgili siteleri ve blogları var. Bu topluluklarda kod parçalarını paylaşmak yaygındır. FastComments bunu nasıl kolaylaştırıyor? 

{{#isPost}}

FastComments, kodu basitçe yorum kutusuna yapıştırarak paylaşmanıza olanak tanır. Diğer metinler ve görsellerle karıştırılabilir ve biçimlendirme eklemek için herhangi bir "kod" etiketini manuel olarak eklemenizi gerektirmez. Yapıştırmanız yeterli!

İşte bunu eylemde gösteren hızlı bir demo.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Kod Parçası Paylaşım Demo" title="Kod Parçası Paylaşım Demo"></video>

### Performans Etkileri

Bu özelliğin eklenmesi, çoğu işlevin sunucu tarafında işlendiği için istemci tarafı bileşenine yalnızca ~150 bayt eklemiştir. Aslında, bu özelliği son zamanlarda eklenen Markdown özellikleriyle birleştirirseniz, bileşen boyutu bu yeni özelliklerle gerçekte azalmıştır!

### Dikkat Edilmesi Gerekenler

Kod paylaşan bir topluluğunuz varsa, kod parçalarını paylaşmayı kolaylaştırmak için maksimum yorum boyutunu artırmayı düşünmelisiniz. Bu, yönetici kontrol panelinin "Özelleştir" sekmesi aracılığıyla yapılır.

### Kod Tespiti

İstemci tarafı bileşeninin boyutunu küçük tutmak için, yalnızca "{" veya boşluklar kullanarak kontrol akışı yapan C ve Python benzeri diller için yapıştırılan kodu otomatik olarak tespit edeceğiz (Java, JavaScript, CSS, C++ gibi). Otomatik olarak algılanmayan bir dili sıkça kullanıyorsanız, bizimle iletişime geçin.

Bir kod bloğunu manuel olarak eklemek için, şöyle bir yorum yazın: ```<code>(defun someLispCode(1, 2, 3))</code>```. Yaklaşık 150 dili otomatik olarak tespit edebiliyoruz.

### Mevcut Yorumların Taşınması

FastComments'a geçmek istiyorsanız ve düzgün formatlanması gereken birçok kod parçası içeren yorumunuz varsa, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">size yardımcı olabiliriz</a>.

### Sonuç Olarak

Hepsi bu kadar! Bu özelliği FastComments üzerindeki tüm çevrimiçi topluluklara sunduk.

Keyifli yorumlar!

{{/isPost}}