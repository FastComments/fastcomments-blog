---
[category:Moderation]
[category:Features]

###### [postdate]
# [postlink]Moderation Comment Search Update[/postlink]

{{#unless isPost}}
FastComments artık yorum moderasyon sayfasında sayfa ve kullanıcıya göre arama yapmanıza olanak tanıyor.
{{/unless}}

{{#isPost}}

### Yenilikler

Daha önce FastComments, yorum moderasyon sayfasında ifadelerle veya tam string eşleşmesiyle arama yapmanıza izin veriyordu.

Artık yorumları aşağıdaki yollarla arayabilirsiniz:

- Bulanık kelime araması: **cats love**
- Tam ifade eşleşmesi: **"I love cats."**
- **_Yeni!_** Sayfa Başlığı ile: **page:"Sayfa Başlığı"**
  - Otomatik tamamlama destekleniyor.
  - Otomatik tamamlama öneri listesinde her sayfa için yorum sayısını gösterir.
- **_Yeni!_** Sayfa URL'si ile: **page:"https://example.com/some-page"**
  - Otomatik tamamlama destekleniyor.
  - Otomatik tamamlama öneri listesinde her sayfa için yorum sayısını gösterir.
- **_Yeni!_** Kullanıcı ile: **user:"Bob"**
  - Otomatik tamamlama destekleniyor.

Arama sonuçlarını diğer moderatörler veya yöneticilerle paylaşabilirsiniz; bunu moderasyon sayfasından sayfa URL'sini paylaşarak yapabilirsiniz. Arama alanı
değeriniz, "Git" tuşuna bastıktan sonra tarayıcınızdaki URL'ye dahil edilecektir.

### Nasıl Alınır

Bu özellik tüm müşterilere sunulmuştur!

### Dokümantasyon

Dokümantasyon sitesi güncellenmiştir ve bu özellik için özel dokümantasyon [burada korunacaktır](https://docs.fastcomments.com/guide-moderation.html#search).

### Sonuç Olarak

Tüm büyük sürümler gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorunla karşılaşırsanız bize bildirin. 

Şerefe!

{{/isPost}}

---