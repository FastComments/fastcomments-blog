---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]FastComments Otomatik Yönlendirme Taşıma Sistemi[/postlink]

{{#unless isPost}}
FastComments Otomatik Yönlendirme Taşıma Sistemi'ni sunarız!
{{/unless}}

{{#isPost}}

## Giriş

FastComments Otomatik Yönlendirme Taşıma Sistemi (FARTS), taşımacılık ve hizmet katmanımızdır. FARTS, yoğunluğu hafifletmeye, kullanıcı konumuna ve potansiyel yük durumuna göre trafik yönlendirmeye yardımcı olur. Birçok farklı sistemden oluşur; coğrafi farkındalığa sahip bir DNS katmanı, bir DB proxy'si, DB çoğaltma, SSL sertifika yönetimi, ters proxy ve kenarda varlıkları önbelleğe almak için disk üzerinde LRU önbelleği kullanan bir CDN içerir.

## Aktif-Aktif

FART'ın en son sürümü, veritabanımız için yerleşik bir proxy ve çoğaltma katmanı içerir. Bu, FastComments'ın küresel yazma erişilebilirliği ile Aktif-Aktif olmasını sağlar ve FARTS'ımızın nihayetinde tutarlı olmasını garanti eder. [Burada daha fazla ayrıntı](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Başlangıçta benimsediğimiz bir yaklaşım, MongoDB'nin aktif-aktif bir çatalını oluşturup oluşturamayacağımızı görmekti. Mühendislerimizden biri (Sloperators), bunu gerçekten Opus 4.6 ile başarmayı başardı, ancak bunu yapmanın riskinin, kendi izole sistemimizi inşa etmekten daha yüksek olduğuna karar verdik.

## Ölçekle Rust

FART'ı oluşturma motivasyonumuzun bir kısmı, Java'da yazılmış bazı mevcut hizmetleri değiştirmekti. Bir süre üzerinde düşündükten sonra, bunları daha düşük çalışma zamanı yükü sağlamak için tek bir Rust hizmetine birleştirmeye karar verdik. Bu, FART'ı sık sık dağıtmadığımız için kabul edilebilir bir takas oldu. FART, LTO ile derlenmiştir, bu nedenle gerçekten özgürce çalıştırabiliriz.

Eski Java sistemini farklı GC'lerle ayarlamak için çok zaman harcadık ve nihayetinde, async Rust + Mimalloc'ın aynı donanımda çok daha düşük bellek gereksinimleri ile önemli ölçüde daha iyi performans gösterdiğine karar verdik, bu yüzden geçiş yapmak hiç de zor olmadı.

Rust, paylaşılan yığınlar ve kilitler kullanan ağla ilgili kodlar için gerçekten harika oldu. Ancak, çalışma zamanı problemlerine karşı savunmasız değildir. Rust'ta LLM'ler tarafından yazılan kodların deadlock'lara oldukça yatkın olduğunu belirtmekte fayda var ve bunun etrafından dolaşmanın bir yolu, sistemleri yalnızca async/await yığınları yerine, anlaşılması kolay durum makineleri olarak tasarlamaktır.

## FART Master

Her dağıtım kendi FART Master'ını içerir. Master, crons, webhook'lar vb. orchestrate etmekten sorumludur.

## Müşteri Etkisi

FART sistemi yaklaşık bir yıldır üretimde. Sadece yakın zamanda Aktif-Aktif dağıtıma geçiş yaptık. Bölgeler arasında kendi yazımınızı okumanız için bir etki var, bu yukarıda bağlantısı verilen blog yazısında ve [belgelere](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes) detaylandırılmıştır.

FART, her ne kadar arka planda sessiz çalışsa da, varlığı her zaman hissedilir. Sistemlerimizin kullanım senaryolarınız için daha hızlı olmasını umuyoruz (çoğunlukla veri değişikliklerine neden olan kullanıcı hareketlerinin bazı bölgelerde daha hızlı olacağını bekliyoruz).

## Dağıtımlar

Dağıtım, hizmetlerin kendilerini dağıtmak için kullandığımız aynı küresel orkestra sistemini kullanır. FART dokümantasyonu, Sloperators'ın asla bir dağıtıma güvenmemesini, her zaman yayınlamadan önce yükü doğrulamasını önerir.

Dağıtım sonrası FART uyarıları bir yükseltilme politikası izleyecek şekilde sıralanmıştır: önce oda, sonra kat, sonra bina.

## Sonuç Olarak

İnternetin bir dizi borudan oluştuğu söylenir, ama aslında bir dizi gazdır.

Tüm büyük sürümlerde olduğu gibi, bu değişikliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Biz, gelecekte nelerin geleceğini dört gözle bekliyoruz. FastComments, bu çalışma ile daha iyi ölçeklenmeli ve uzun vadede daha iyi çalışma süresine sahip olmalıdır. FART çalışma kitabının dediği gibi: "Eğer bir şeyin kokusunu alıyorsanız, bir şey söyleyin." Herhangi bir sorunla karşılaşırsanız, lütfen aşağıda bize bildirin.

{{/isPost}}