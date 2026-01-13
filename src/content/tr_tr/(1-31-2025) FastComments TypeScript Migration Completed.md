---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]FastComments TypeScript Göçü Tamamlandı[/postlink]

{{#unless isPost}}
Gelecek on yılın geliştirilmesine hazırlık olarak, FastComments'ın en büyük bileşenlerinden birini TypeScript'e göç ettirdik.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makalede Teknik Terimler Bulunmaktadır

### Yenilikler

FastComments'ta statik olarak tiplenmiş dillerin değerini biliyoruz. Daha spesifik olmak gerekirse, hızlı derleyicilere sahip sağlam tip sistemlerini seviyorum. FastComments başlangıçta ikincisiyle - ya da
derleyicisiz - başladı. İlk yılda modern Java ile yazılmış iki hizmetimiz olmasına rağmen, ana arka uç ve ön uç kütüphaneleri, Node üzerinde çalışan CJS JS ile yazılmıştı.

Gelecek on yılın geliştirilmesine hazırlık olarak, FastComments'ın en büyük bileşenlerini TypeScript'e göç ettirdik.

Bu işlem, 1441 dosya arasında 130 bin satır kodun (100 bin bunu arka uç) göç ettirilmesini ve 8000'den fazla derleme hatasının düzeltilmesini kapsıyordu.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="GitHub Ekran Görüntüsü" title="GitHub Ekran Görüntüsü" />
</div>

Bu işlem iki hafta sürdü.

### Kod Dondurma - Teşekkürler

Bu yükseltmeyi tamamlamak için iki haftalık bir kod dondurma süreci yaşadığımız için, geciken bug düzeltmeleri veya özellik yayınları için müşterilerimize teşekkür etmek istiyorum. Teşekkür ederiz!

### Hatalar Düzeltildi

Tahmin edebileceğiniz gibi, birçok hatayı düzelttik. Bu hatalar çoğunlukla spam tespiti ve önbellekleme ile ilgiliydi.

### Yıkıcı Değişiklikler

- Tüm API uç noktaları artık "başarısız" ve "başarısızlık" karışımı yerine "başarısız" olarak döner. "başarı" değişmeden kalır.
- Eşleşme olmadığında artık ilk widget yapılandırmasına varsayılan olarak geçmeyeceğiz, bunun yerine varsayılan sistem yapılandırmasını döndüreceğiz.

### Nasıldı?

Her zamanki gibi, bu görevi yerine getirmeye yardımcı olabilecek NPM ekosistemindeki pek çok aracın çok iyi çalışmadığını gördük. Bu yüzden, işin büyük bir kısmını yapmak için LLM'leri kullandık. Örneğin, JSDoc'u yoğun şekilde kullandık, böylece JSDoc'u alıp TypeScript arabirimleri ve tip tanımları haline dönüştüren betikler yazabildik ve işlev argümanları ile dönüş türlerini uygun şekilde not edebildik. CJS'den ESM'ye geçiş için de bu betikleri kullandık; bu, `__dirname` gibi yaygın çalışma zamanı sorunlarını tespit etmeyi ve içe aktarmaları, dışa aktarmaları yeniden yazmayı içeriyordu.

Çalışma zamanı sorunlarından bahsettim mi?

### 2025'te TypeScript Nasıl?

TypeScript, iş mantığı yazmak için güzel bir dildir. Ancak, Java hala daha iyi bir Geliştirici Deneyimi sunuyor. Java, Go veya Rust derlendiğinde, büyük olasılıkla çalışacaktır. TypeScript ile şunu yapabilirim:

    console.log(__dirname);

... ve bu derlenecektir.

Ama çalışmayacak, modern ES modülleri ile. IDE'niz `__dirname`'i otomatik olarak tamamlayabilir ve sonra çalışma zamanında patlayacaktır. Bu, daha kötü bir Spring DI gibi hissediliyor.

Ayrıca şunu da yapabilirsiniz:

    context.someImportantMethodToCall;

Şimdi, bu bir "ifade". Geçerli bir "ifade". İlk bakışta `someImportantMethodToCall`'u çağırdığımızı düşünebilirsiniz, ama aslında öyle değil! En azından benim IDE'm bu konuda uyarıda bulunmuyor, derleyici de. Kod hiçbir şey yapmayacak (eğer `someImportantMethodToCall` bir sınıf `getter`'ı ise o zaman örtük olarak çağrılması durumu var...)

Düzeltme şu:

    context.someImportantMethodToCall();

Bunu "no no side-effects" kuralı gibi bir şey ile eslint ile belirleyebilirim sanırım, ancak o zaman güncel tutulması gereken başka bir büyük kütüphane setini devreye alıyorsunuz ve ardından eslint her derlemede tüm kod tabanınızı analiz etmek zorunda kalıyor, araçlar yavaş çalışıyor, vb. - hayır, teşekkürler. Yavaş araçlarla başa çıkmanın üretkenlik etkisi, geçmiş iş deneyimlerimde ürettiğim "artış"tan daha belirgin oldu. Şimdi daha hızlı alternatifler çıkıyor, bu harika.

TypeScript, `Pick<User, 'username', 'email'>` gibi dil özellikleri sayesinde gerçekten güzel. Bu, tip çıkarımı ile bir araya geldiğinde, her şekil için bir sınıf tanımlama gerektirmeden daha büyük nesnelerin alt kümesi için tip güvenli sorgu sonuçları sağlama yolunu sunuyor. `Pick`'in Scala'da olmaması beni şaşırtıyor. Tip Birleşimleri de gerçekten güzel.

Artımlı derlemeler de makul bir şekilde çalışıyor, CI'deki derleme sürelerimizi ortalama 5 - 10 saniye kadar artırdık, paylaşılan kütüphane, ön uç ve arka uç için.

### Geliştirme Zaman Çizelgesi

Merak edenler için, ilerlememizin nasıl göründüğü:

- Birinci Gün: 362 dosyada 5564 hata bulundu.
- İkinci Gün: 239 dosyada 4034 hata bulundu.
- Üçüncü Gün: 191 dosyada 3784 hata bulundu.
- Dördüncü Gün: 169 dosyada 2974 hata bulundu.
- Beşinci Gün: 171 dosyada 3000 hata bulundu.
- Altıncı Gün: 165 dosyada 2916 hata bulundu.
- Yedinci Gün: 157 dosyada 2618 hata bulundu.
- Sekizinci Gün: 109 dosyada 2253 hata bulundu.
- Dokuzuncu Gün: 69 dosyada 1605 hata bulundu.
- Onuncu Gün: 53 dosyada 686 hata bulundu.
- On Birinci Gün: Arka uç Birim Testleri Geçti
- On İkinci Gün: Ön uçu göç etmeye başla, 3118 hata.
- On Üçüncü Gün: 2172 hata bulundu.
- On Dördüncü Gün: 1224 hata bulundu.
- On Beşinci Gün: 498 hata bulundu.
- On Altıncı Gün: Tüm derleme hataları düzeltildi.
- On Yedinci Gün: Yayınlandı. E2E testleri geçti. Beklenmeyen çalışma zamanı sorunları sırasında 30 dakika kesinti. :)

### Gelecek

Bunu, gelecek on yıl için geliştirmeyi desteklemek amacıyla yaptık. Sistem artık o kadar büyük ki, bir tip sistemi ile geliştirmek, bir tip sistemi olmadan geliştirmekten daha hızlı.

TypeScript kütüphanemizin NPM'de iyileşmesini de bekleyebilirsiniz, çünkü bu kütüphaneyi artık sunucu ve istemci kodumuzda kullanıyoruz.

Ayrıca, bu çabanın ana motivasyonu olan, sunucu kodundan doğrudan üretilmiş istemci SDK'larını da yakında yayınlayacağız.

### Sonuç Olarak

Tüm büyük sürümlerde olduğu gibi, bu değişiklikleri optimize etmek, test etmek ve doğru bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorun keşfederseniz bize bildirin.

Şerefe!

{{/isPost}}

---