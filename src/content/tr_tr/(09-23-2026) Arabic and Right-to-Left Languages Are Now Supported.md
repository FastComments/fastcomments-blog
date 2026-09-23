[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]Arapça ve Sağdan Sola Diller Artık Destekleniyor[/postlink]

{{#unless isPost}}
FastComments artık Arapça konuşuyor ve FastComments'ın her bölümü Arapça ve İbranice için sağdan sola düzenleniyor. "3 yorum" gibi sayımlar artık her dilde doğru çoğul biçimini kullanıyor.
{{/unless}}

{{#isPost}}

### Yeni Neler

Arapça artık desteklenen bir dil ve yerel kodu `ar`. Yorum widget'ı, diğer gömülebilir widget'lar, e-postalar, kontrol paneli ve pazarlama sitesi tamamen çevrildi.

Arapça ayrıca sağdan sola yazılır, bu yüzden eklemek FastComments'ın kendisini her iki yönde de düzenlemesini öğretmek anlamına geldi. Bu düzeltme aynı zamanda İbranice için de geçerlidir.

### Sağdan Sola Düzen

Yerel kod Arapça veya İbranice olduğunda, tüm arayüz yansıtılır. Bir yorumdaki avatar, isim ve yanıt kontrolleri yer değiştirir, menüler ve açılır listeler doğru kenara doğru açılır ve oklar okuduğunuz yönü gösterir. Bu, yorum widget'ı ve canlı sohbet ve anketler gibi uzantılarını, biletleme, iş birliği sohbeti ve inceleme özeti widget'larını, e-postaları ve kontrol panelini kapsar.

Yapılandırılacak bir şey yok, sadece isterseniz kullanıcınız için yerel kodu manuel olarak ayarlamanız yeterlidir.

### Yorumlar Kendi Yönlerini Korur

Bazen bir yorum bölümü birden fazla dilde olur. Arapça bir sayfada İngilizce bir yorum ya da İngilizce bir sayfada Arapça bir yorum, yine de doğal bir şekilde okunmalıdır.

Her yorum ve kullanıcı adı kendi metninin yönünü izler. İngilizce bir sayfada, Arapça bir yanıt sağdan sola okunurken, çevresindeki yorumlar soldan sağa okunur; aynı durum Arapça bir sayfada tersine geçerlidir. Yorum içindeki kod blokları her zaman soldan sağa okunur, çünkü kod böyle okunur.

### Yerel Kodu Ayarlama

Varsayılan olarak widget, ziyaretçinin tarayıcısından yerel kodu alır, böylece Arapça konuşanlar otomatik olarak Arapça alır. Bunu zorlamak için, widget özelleştirme sayfasında "Locale / Language" altında yerel kodu ayarlayın veya kod içinde:

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

SSO kullanıyorsanız, kullanıcı nesnesinde `locale: 'ar'` geçirin, böylece e-postaları da Arapça olur.

### Çoğullar, Doğru Şekilde

İngilizce bir sayım için iki biçim vardır: "1 yorum" ve "2 yorum". Arapça bir, iki, üçten ona, on birden doksan dokuza kadar ayrı biçimler kullanır ve yüz için tekrar tekil kullanır. Rusça, Ukraynaca, Lehçe, Hırvatça, Sırpça, Slovence ve İbranice de kendi kurallarına sahiptir.

Şimdiye kadar FastComments sadece "bir" ve "diğer tüm" biçimlerini biliyordu, bu yüzden bir Rus okuyucu 2 veya 5 yorum için yanlış isim biçimini görebilirdi. Artık sayımlı her dize, widget'ta, e-postalarda ve kontrol panelinde, diline uygun doğru biçimi seçiyor.

Orada çalışırken, her dildeki tüm sayım dizelerini gözden geçirdik. Bu, şimdi düzeltilen bir dizi eski çeviri hatasını ortaya çıkardı. Örneğin, birkaç dilde yanıt kelimesi "yanıtlamak" fiili olarak çevrilmişti, bu yüzden bir yorum "1 Reply"yi "1 To reply"nin eşdeğeri olarak gösteriyordu.

Eğer bir sayımın metnini, örneğin "comments" etiketini özelleştirdiyseniz, metniniz hâlâ her sayım için kullanılır.

### Dilinizi Bulma

Kontrol panelindeki dil seçiciler artık her dilin kendi adını İngilizce adının yanında gösterir, örneğin "Arabic (العربية)" ve "German (Germany) (Deutsch)". Birisi yanlış dilde açılırsa, yine de kendi dilini bulabilir.

### Dokümantasyon

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">Desteklenen Diller rehberi</a> her yerel kodu listeler ve sağdan sola davranışı açıklar. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Yerel kod seçeneği</a> widget'ta bir yerel kodu zorlamayı açıklar.

Bu, 2020'deki [ilk yerelleştirme sürümümüz](/(2-05-2020)-fastcomments-gets-localized.html) üzerine inşa edilmiştir ve o zaman üç dil ile başlamıştı. Şu anda yirmi sekiz yerel kodumuz var.

### Sonuç

FastComments'ı Arapça konuşanlara sunabildiğimiz ve İbranice konuşanlar için daha iyi bir deneyim haline getirebildiğimiz için mutluyuz. Dilinizde yanlış okunan bir çeviri fark ederseniz, aşağıda bize bildirin, düzeltiriz.

Şerefe!

{{/isPost}}

---