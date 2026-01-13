---
[category:Announcements]

###### [postdate]
# [postlink]FastComments Artık Birden Fazla Bulut Sağlayıcısı Tarafından Yedekleniyor[/postlink]

{{#unless isPost}}
Nisan 2023 itibarıyla, FastComments veritabanları artık ekstra önlem amacıyla birden fazla bulut sağlayıcısında saklanmaktadır.
{{/unless}}

{{#isPost}}

### Yenilikler

Daha önce FastComments, birden fazla sunucuda canlı veritabanı yedeklerine sahipti, ancak aynı bulut sağlayıcısında.

FastComments, ABD-Batı ve AB bölgeleri için ayrı veritabanı ve uygulama dağıtımları olarak öncelikle Linode'u kullanıyor.

Her bölge daha önce veritabanı için bir canlı yedek olarak kendi replikasına sahipti. Ana veritabanı herhangi bir nedenle kaybolursa, 
canlı yedek yerine geçmeye hazırdı. Bu yedeklerde veritabanının anlık görüntüleri de alınmaktadır.

Artık başka bir bulut sağlayıcısında yedekleme ekledik, böylece her bölgedeki veriler her bölge için bir veri merkezine izolasyon altında kalmaz.

Yeni veritabanı topolojisi:

- ABD-Batı
  - Kaliforniya'daki Linode'da bir veritabanı kümesi.
  - **YENİ** Oregon'daki Hetzner'de bir canlı replikası.
- AB
  - Frankfurt'taki Linode'da bir veritabanı kümesi.
  - **YENİ** Falkenstein'deki Hetzner'de bir canlı replikası.

Bu replikalar canlıdır, her zaman veritabanının en son sürümüne sahiptir.

### Sonuç Olarak

Tüm büyük sürümler gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorun keşfettiyseniz bize bildirin.

Şerefe!

{{/isPost}}