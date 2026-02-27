---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Yeni IP Giriş Uyarıları[/postlink]

{{#unless isPost}}
FastComments, bir yeni IP adresinden giriş tespit edildiğinde, kullanıcıların yetkisiz erişimi tespit etmelerine yardımcı olmak için yaklaşık konumu içeren bir güvenlik uyarı e-postası gönderiyor.
{{/unless}}

{{#isPost}}

### Yenilikler

FastComments, hesabınıza daha önce görmediğimiz bir IP adresinden giriş yaptığınızda otomatik olarak bir güvenlik uyarı e-postası gönderiyor. E-posta, şunları içerir:

- Girişin **yaklaşık konumu** (şehir ve ülke).
- Kullanılan **IP adresi**.
- Girişin **zamanı**.
- Girişin sizden gelmediği durumlarda **şifrenizi değiştirmek** için doğrudan bir bağlantı.

Bu, tüm giriş yöntemleri için geçerlidir: şifre ile giriş, sihirli bağlantılar ve iki faktörlü kimlik doğrulama akışları.

### Gizlilik

Ham IP adresinizi saklamıyoruz. Sadece güvenlik karşılaştırma amaçları için obfuscate edilmiş bir formunu saklıyoruz. Yaklaşık konum, giriş anında belirlenir ve saklanmaz.

**IP'niz, konumu belirlemek için üçüncü şahıslarla paylaşılmıyor.** Yaklaşık konumu MaxMind veritabanının (her hafta güncellenen) bir kopyasından çıkartan kendi hizmetimizi barındırıyoruz.

### Uyarıların Ne Zaman Gönderileceği

Bir uyarı, **tüm** aşağıdakiler doğru olduğunda gönderilir:

- Giriş başarılı oldu.
- Bu, kullanıcının ilk girişi değil.
- IP adresi, o hesap için önceki başarılı bir girişte görülmemiştir.

Bu, ilk girişinizde bir uyarı almayacağınız ve aynı IP için tekrar tekrar uyarı almayacağınız anlamına gelir.

### Sonuç Olarak

Bu, hesabınızı güvende tutmak için bir adım daha. Tanımadığınız bir uyarı alırsanız, hemen şifrenizi değiştirmenizi öneririz.

Aşağıda herhangi bir geri bildiriminizi bizimle paylaşın!

Sağlıklı günler!

{{/isPost}}

---