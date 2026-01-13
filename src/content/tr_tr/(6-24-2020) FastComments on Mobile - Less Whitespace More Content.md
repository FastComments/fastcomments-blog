---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments Mobil - Daha Az Boşluk Daha Fazla İçerik[/postlink]

{{#unless isPost}}
FastComments'ın mobildeki okunabilirliğini ve görünümünü geliştirdik.
{{/unless}}

{{#isPost}}
#### Sorun

FastComments'ı ilk piyasaya sürdüğümüzde, hem mobil hem de masaüstü tarayıcılarında iyi çalışan şık bir tasarım istiyorduk. Ancak, daha fazla özellik ekledikçe ve kullanıcıların FastComments ile etkileşimde bulunduğunu gördükçe, mobil kullanıcı arayüzümüzde "güzel" görünmeye çalışırken ekran alanını boşa harcadığımızı fark ettik.

Bu nedenle bir uzlaşma geliştirdik.

#### Çözüm

Burada daha önceki durumu görebilirsiniz, alanı çok verimli bir şekilde kullanmıyorduk.

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="Mobil Versiyon Önce"
        title="Mobil Versiyon Önce"
        class='lozad' />
</div>

Artık dikey ekran alanını yatay ekran alanıyla değiştirdik.

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="Mobil Versiyon Sonra"
        title="Mobil Versiyon Sonra"
        class='lozad' />
</div>

    
#### Özelleştirme Kuralı Etkileri

Halkın kullanımına açık yorum widget'ında stil değişiklikleri yaptığımızda, müşterilerimizin özelleştirmelerini bozabileceğimizi biliyoruz. Endişelenmeyin, sizleri temin ediyoruz ve herkesin özel widget stillerini gözden geçirip bozulmadıklarından emin olduk. Ancak, sorunlar görüyorsanız lütfen bize bildirin.

#### Performans Etkileri

Bu değişiklik, widget boyutunu yaklaşık 300 bayt artırarak toplamda 10.1kb'ye çıkardı. Widget boyutunu artıran tüm sürümlerde olduğu gibi, bunu geri düşürmenin yollarını arayacağız.

Yorum yapmaktan keyif alın! 

{{/isPost}}

---