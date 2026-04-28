---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]FastComments Otomatik Yönlendirme Taşıma Sistemi[/postlink]

{{#unless isPost}}
FastComments Otomatik Yönlendirme Taşıma Sistemi'ni Tanıtıyoruz!
{{/unless}}

{{#isPost}}

## Giriş

FastComments Otomatik Yönlendirme Taşıma Sistemi (FARTS), taşımacılık ve hizmet katmanımızdır. FARTS, gelecekte kullanıcı konumuna ve olası yüküne dayalı olarak trafiği yönlendirme konusunda yardımcı olur. Bir geolocation-aware DNS katmanı, bir DB proxy, DB replikasyonu, SSL sertifika yönetimi, ters proxy ve varlıkları kenarda önbelleğe almak için disk üzerindeki LRU önbellek kullanan bir CDN'den oluşmaktadır.

## Aktif-Aktif

FART'ın en son sürümü, veritabanımız için yerleşik bir proxy ve replikasyon katmanı içermektedir. Bu, FastComments'ın küresel yazma erişimi ile Aktif-Aktif olmasını sağlar ve FARTS'in nihayetinde tutarlı olmasını garanti eder. [Buradan daha fazla detay](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Erken dönemlerde aldığımız bir yaklaşım, MongoDB'nin aktif-aktif bir çatalını oluşturup oluşturamayacağımızı görmekti. Mühendislerimizden biri (Sloperators) bunu aslında Opus 4.6 ile başarmayı başardı, ancak bunu yapmanın riskinin kendi izolasyon sistemimizi inşa etmekten daha yüksek olduğuna karar verdik.

## Ölçeklenebilir Rust

FART'ı oluşturmanın motivasyonlarından biri, mevcut bazı Java ile yazılmış hizmetleri değiştirmekti. Bir süre bekledikten sonra, çalışma zamanı yükünü azaltmak için bunları tek bir Rust hizmetinde birleştirmeye karar verdik. Sıklıkla FART dağıtımı yapmadığımız için bu kabul edilebilir bir takas oldu. FART, LTO ile derlenmiştir, bu yüzden gerçekten hızlanmasına izin verebiliriz.

Eski Java sistemini farklı GC'ler ile ayarlamak için çok fazla zaman harcamıştık ve sonunda asenkron Rust + Mimalloc'un aynı donanımda çok daha düşük bellek gereksinimleri ile önemli ölçüde daha iyi performans gösterdiğine karar verdik, bu yüzden geçiş yapmak mantıklıydı.

Rust, paylaşılan yığınlar ve kilitler kullanan ağ ile ilgili kodlar için gerçekten harika olduğu ortaya çıktı. Ancak, çalışma zamanı sorunlarına karşı dayanıklı değildir. LLM'ler tarafından Rust'ta yazılan kodların genellikle kilitlenmelere eğilimli olduğunu belirtmekte fayda var ve bunun üstesinden gelmenin bir yolu, sistemleri sadece asenkron/await yığınları yerine anlaşılması kolay durum makineleri olarak tasarlamaktır.

## FART Üst Düzey

Her dağıtım kendi FART Master'ını içerir. Master, cron'ları, web kancalarını ve benzeri işlemleri yönetmekten sorumludur.

## Müşteri Etkisi

FART sistemi yaklaşık bir yıldır üretimde. Yakın zamanda Aktif-Aktif dağıtımına geçiş yaptık. Bölgeler arasında kendi yazımlarınızı okuma konusunda bazı etkiler var, bu, yukarıda bağlantısı verilen blog yazısında ve [belgelere](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes) bakılarak incelenebilir.

FART sessizce arka planda çalışmaktadır, ancak varlığı her zaman hissedilmektedir. Sistemlerimizin kullanım durumlarınız için daha hızlı olduğunu umuyoruz (çoğunlukla veri değişikliklerine neden olan kullanıcı eylemleri bazı bölgelerde daha hızlı olacaktır).

## Dağıtımlar

Dağıtım, hizmetlerin kendilerini dağıtmak için kullandığımız aynı küresel orkestrasyon sistemini kullanır. FART belgeleri, Sloperators'ın asla bir dağıtıma güvenmemesini, her zaman yayınlamadan önce yükü doğrulamasını önerir.

Dağıtım sonrası FART uyarıları, bir yükseltme politikası izler: önce oda, sonra kat, ardından bina.

## Sonuç

İnternetin bir dizi boru olduğu söyleniyor, ama aslında bir dizi toot'dur.

Tüm büyük sürümlerde olduğu gibi, bu değişikliği optimize etmek, test etmek ve düzgün bir şekilde yayımlamak için zaman ayırabildiğimiz için mutluyuz. Gelecekte nelerin gelecek olduğunu sabırsızlıkla bekliyoruz. FastComments bu çalışma ile uzun vadede daha iyi ölçeklenmeli ve daha iyi süreklilik sağlamalıdır. FART çalışma kitabında dediği gibi: "Bir şey kokuyorsa, bir şey söyle." Aşağıda herhangi bir sorunla karşılaşırsanız bize bildirin.

{{/isPost}}