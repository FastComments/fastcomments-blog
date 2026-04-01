---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]FastComments Otomatik Yönlendirme Taşıma Sistemi[/postlink]

{{#unless isPost}}
FastComments Otomatik Yönlendirme Taşıma Sistemi'ni tanıtıyoruz!
{{/unless}}

{{#isPost}}

## Giriş

FastComments Otomatik Yönlendirme Taşıma Sistemi (FARTS), taşıma ve hizmet katmanımızdır. FART'lar, kullanıcı konumuna ve muhtemelen gelecekteki yüküne dayalı olarak trafiği yönlendirmeye yardımcı olur. Birkaç farklı sistemden oluşur: coğrafi farkındalığı olan bir DNS katmanı, bir DB proxy, DB çoğaltma, SSL sertifika yönetimi, ters proxy ve kenarda varlıkları önbelleğe almak için diskte LRU önbelleği kullanan bir CDN. Sistem, hem sessiz hem de gürültülü geçiş modlarını destekler. Üretim ortamında sessiz tercih edilir.

## Aktif-Aktif

FART'ın en son sürümü, veritabanımız için yerleşik bir proxy ve çoğaltma katmanı içerir. Bu, FastComments'ın küresel yazma erişilebilirliği olan Aktif-Aktif olmasını sağlar, bu da FART'larımızın nihayetinde tutarlı olmasına olanak tanır. [Burada daha fazla ayrıntı](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Gerçekten de, başlangıçta aldığımız bir yaklaşım MongoDB'nin bir çatallanmasını yaratmaya çalışmaktı. Mühendislerimizden biri (Sloperators) bunu Opus 4.6 ile başarmayı başardı, ancak böyle yapmanın riskinin kendi izole sistemimizi inşa etmekten daha yüksek olduğuna karar verdik.

FART gibi bir şeyde istemediğiniz son şey, geldiğini bilmek, ancak kaynağını takip edememektir. Aktif-aktif çoğaltmayı ayrıntılı bir seviyede izlemek için izleme ve teşhis ekledik.

## Ölçeklenebilir Rust

FART'ı yaratmanın motivasyonlarından biri, Java'da yazılmış bazı mevcut hizmetleri değiştirmekti. Bir süre düşündükten sonra, çalışma zamanı yükünü azaltmak için bunları tek bir Rust hizmetinde birleştirmeye karar verdik. FART'ı sık sık dağıtmadığımız için bu kabul edilebilir bir takas oldu. FART, LTO ile derlendi, bu nedenle gerçekten hızlandığını görebiliyoruz.

Eski Java sistemini farklı GC'lerle ayarlamak için çok zaman harcadık ve sonunda async Rust + Mimalloc'un aynı donanımda çok daha düşük bellek gereksinimleri ile önemli ölçüde daha iyi performans gösterdiğine karar verdik, bu nedenle geçiş yapmak akıllıca bir hamleydi.

## FART Ustası

Her dağıtım kendi FART Ustası'nı içerir. Usta, crons, webhooks ve benzeri şeylerin orkestrasyonundan sorumludur.

## Müşteri Etkisi

FART sistemi yaklaşık bir yıldır üretimde. Yakın zamanda Aktif-Aktif dağıtımına geçiş yaptık. Yeni sistem, sistem genelinde gecikme ile ilgili arttırılmış görünürlük sağlar ve daha düşük bakım yükü ile şimdi özelliklere daha fazla zaman ayırabiliriz.

FART, arka planda sessizce çalışır, ancak varlığı her zaman hissedilir. Sistemlerimizin kullanım senaryolarınız için daha hızlı olduğunu umuyoruz (özellikle veri değişikliği ile sonuçlanan kullanıcı eylemleri bazı bölgelerde daha hızlı olacaktır).

## Dağıtımlar

Dağıtım, hizmetleri dağıtmak için kullandığımız aynı küresel orkestrasyon sistemini kullanır. FART'lar belgeleri, sloperators'ın asla bir dağıtıma güvenmemesini, her zaman payload'u kontrol etmesini önerir.

Dağıtım sonrası FART uyarıları bir escalasyon politikası izler: önce oda, ardından kat, ardından bina.

## Sonuç Olarak

Tüm büyük sürümlerde olduğu gibi, bu değişikliği optimize etmek, test etmek ve düzgün bir şekilde yayımlamak için zaman ayırabildiğimiz için mutluyuz. Gelecekte neler olacağı konusunda heyecanlıyız. FastComments, bu çalışma ile daha iyi ölçeklenmeli ve uzun vadede daha iyi bir sürekliliğe sahip olmalıdır. FART kılavuz kitapçığının dediği gibi: "Bir şey kokuyorsanız, bir şeyler söyleyin." Aşağıda herhangi bir sorun keşfederseniz bize bildirin.

{{/isPost}}