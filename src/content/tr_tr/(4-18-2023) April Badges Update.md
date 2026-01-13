---
[category:Features]

###### [postdate]

# [postlink]Nisan Rozetleri Güncellemesi[/postlink]

{{#unless isPost}}Rozetlerde bazı değişiklikler yapıldı, bazı özellikler eklendi ve rozetlerin yeniden işlenme sırasında kaybolmasını önlemek için iyileştirmeler eklendi.{{/unless}}

{{#isPost}}

### Yenilikler - Rozet Yığınlama

Dünden önce, topluluğunuzda aşağıdaki gibi bir rozet setine sahip olduğunuzda:

- Yeni Yorumcu (1 yorum)
- Topluluk Üyesi (50 yorum)
- Uzman (500 yorum)

... bir kullanıcı 500 yorum yaptığında, yorumlarında şu şekilde rozetler gösterilecekti:

    [Yeni Yorumcu] [Topluluk Üyesi] [Uzman]

Bu özel senaryoda, muhtemelen yalnızca `Uzman` rozetinin gösterilmesini istiyoruz. Aslında çoğu müşterimiz bunu istiyor, ama hepsi değil. Tüm kiracılarımızın aynı kuruluma sahip olmadığını kabul ediyoruz.

Ancak, yukarıdaki desenleri izleyen topluluklar için, ki bunların çoğu, yorumlarının en prestijli rozeti göstermesini istiyorlar.

Bu kullanım durumunu yönetmek için bir rozeti **değiştiren** başka bir rozet kavramını ekledik. Bunu yaparak, bir kullanıcının kazanabileceği rozet akışını oluşturabiliyoruz:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Rozet Yığınlama" title="Rozet Yığınlama" />
</div>

Dahili olarak, buna *rozet yığınlama* diyoruz. Yeni rozet, eski rozetin üzerine "yığılır".

Bunu, bir rozeti düzenleyip başka bir rozetin yerini aldığını belirterek yapılandırabiliriz:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Rozet Yığınlama Ayarı" title="Rozet Yığınlama Ayarı" />
</div>

Açıkçası, bunu takip etmek zorlaşabilir, bu nedenle rozet listesi, hangi rozetin neyi değiştirdiği gibi daha fazla bilgi sağlamak için güncellenmiştir.

### Yenilikler - Yeniden İşleme İyileştirmeleri

Bir rozette değişiklik yaptığınızda, tüm kullanıcılarınızı gözden geçirip, hala o rozeti "kazanıp kazanmadıklarını" belirlememiz ve görünen tüm rozet stillerini ile önbellekleri güncelleyerek en son versiyonun görüntülenmesini sağlamamız gerekir.

Yeniden işleme, artık bir kullanıcıdan bir rozeti kaydettiğinizde kaldırmaz, kullanıcı kriterleri artık karşılanmıyor olsa bile **ayarlanmış kriterler değişmedikçe**.

Yönetici notu - Bir rozet için eşik kriterlerini, o rozeti kaldırmadan azaltabilirsiniz. Yalnızca eşik değerini **arttırmak** bazı durumlarda rozeti kaldıracak bir yeniden işleme tetikleyecektir.

Daha fazla bilgi için *Yorumcunun Perspektifi* bölümünü okuyun.

### Yorumcunun Perspektifi

Rozetleri yeniden işlemenin büyük bir riski vardır çünkü kullanıcılar rozetrerini sever - bunu kabul ediyoruz! Kullanıcının, yorumlarına 100 kullanıcının yanıt vermesi nedeniyle Yanıt rozetini kazanmasını sağlamak ve daha sonra 10 kullanıcının yorumlarını silmesi veya moderatörler tarafından kaldırılması durumunda rozetini almak istemiyoruz.

Rozet kalmalı ve kalıyor, sadece...

Yeniden işleme sırasında, bu önceki yorumların var olup olmadığını bilemiyoruz, bu nedenle bir rozet düzenlenirse, örneğin stil güncellendiğinde veya rozet yığınlama ayarlandığında bazı kullanıcılardan rozet kaldırılabilir.

Bu, 17 Nisan 2023'te *Rozet Yığınlama* özelliğini sunduğumuzda ve bazı topluluklar bu özelliği etkinleştirdiğinde oldu.

İki senaryo gözlemlendi:

1. Kullanıcılar, bazı rozetlerinin kaldırıldığını fark ettiler. Gerçekte olan, en prestijli rozetler dışındaki tüm rozetlerin gizlenmesiydi.
   - **Tüm rozetlerinizi gösterebilirsiniz.** Profilinizin sağ üst köşesindeki üç noktalı menüye tıklayın ve `Rozetleri Yönet` e tıklayın.
2. Bazı rozetler, yukarıdaki Yanıt rozet örneğinde olduğu gibi bazı kullanıcılar için gerçekten kaldırıldı. Bunun gelecekte olmasını önlemek için, 
   yeniden işleme sistemini geliştirdik, böylece rozet kaldırılmayacak, yalnızca rozet kriterleri değiştiğinde ve artık kriterleri karşılamıyorsanız, ancak
   yeniden işleme yapmamak için topluluk yöneticileri bu eylemi gerçekleştirmemeleri önerilir çünkü, yine kullanıcılar rozetlerini sever.

### Moderatörler için

Bir moderatörün perspektifinde herhangi bir değişiklik yok, yalnızca çoğu durumda daha az rozet görüntülenecek. Bunun yerine, sizin ve topluluk üyelerinizin en prestijli rozetlerini görüntüleyeceksiniz.

### Mevcut Müşteriler

Bu özelliğin tüm mevcut müşterilere, tüm seviyelerde uygulanmasını tamamladık! Rozet yığınlama varsayılan olarak etkin değildir ve manuel olarak yapılandırılması gerekmektedir.

### Sonuç

Bu yeni özellikler ve düzeltmeler setini faydalı ve kullanımı kolay bulmanızı umuyoruz.

Şerefe!

{{/isPost}}

---