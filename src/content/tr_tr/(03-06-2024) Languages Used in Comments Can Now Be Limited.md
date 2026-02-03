---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Yorumlarda Kullanılan Diller Artık Sınırlanabilir[/postlink]

{{#unless isPost}}
Bazı topluluklar kullanılan dilleri kısıtlamak istiyor. Bu artık FastComments ile yapılabilir.
{{/unless}}

{{#isPost}}

### Yenilikler

FastComments her zaman mümkün olan en fazla dil ve yerel ayarı desteklemeye çalıştı.

Ancak, bazı topluluklar iletişim kurmak ve yorum yazmak için kullanılan dilleri sınırlamak istiyor.

Bunu bir kural olarak dayatmak ve potansiyel olarak kullanıcıları yasaklamak yerine, artık platformda açıkça yapılandırılabiliyor.

### Ayarlama Nasıl Yapılır

Muhtemelen aşina olduğunuz Widget Özelleştirme UI'sında, yorumların yazılabileceği bir veya daha fazla dili seçebilirsiniz.

Platform, yorum gönderimi sırasında yorumun dilini gerçek zamanlı olarak belirlemeye çalışacaktır. Belirlenen dilin güven derecesi
%70'in üzerindeyse ve izin verilen dillerle eşleşiyorsa, yorum kabul edilir.

Eğer yazılan yorum, yapılandırmanızda tanımlı bir dilde değilse, kullanıcı kendi dilinde bir hata mesajı gösterilecektir.

### Geliştirici Etkisi

Bu yapılandırma API aracılığıyla kaydedilen yorumları da etkileyecektir.

Aşağıdaki gibi bir hata alacaksınız:

            status: 'failed',
            reason: `Yorum bu dillerden birine benziyor: [es], ancak yalnızca [en,fr] izin veriliyor.`,
            code: 'language-not-allowed',
            translatedError: "Kullanıcının dilinde bir hata mesajı."

### Sonuç Olarak

Tüm büyük sürümler gibi, bu özelliği optimize etmek, test etmek ve doğru şekilde yayımlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorun keşfederseniz bize bildirin.

Şerefe!

{{/isPost}}

---