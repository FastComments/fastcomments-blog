[category:Migration]  
[category:Tutorials]  
###### [postdate]  
# [postlink]Disqus Yorumlarından Reklamları Nasıl Kaldırırsınız?[/postlink]  

{{#unless isPost}}  
Ücretsiz Disqus planında, yorum bölümünüzde ekli reklamlar bulunmaktadır. Onlardan kurtulmanın iki yolu vardır. Daha iyi olanı, yorumlarınızın daha hızlı yüklenmesini sağlarken okuyucularınızın takip edilmesini engeller.  
{{/unless}}  

{{#isPost}}  

Disqus, ücretsiz planı için yorum bölümünüzde, içeriğinizin hemen altında, okuyucularınızın sizinle iletişim kurmak için gittiği alanda reklamlar göstererek para kazanıyor. O reklamlar sizin değil. Onları seçmiyorsunuz ve onlardan bir kuruş kazanıyorsunuz. Bu, ücretsiz katmanın bir bedeli.  

Onları kaldırmanın iki gerçek yolu vardır.  

## Seçenek 1: Disqus Planınızı Yükseltin  

Doğrudan yol, Disqus'a ödeme yapmaktır. Onların ücretli planları reklamları kapatır. Mevcut seçenekleri <a href="https://disqus.com/pricing/" target="_blank">Disqus fiyatlandırma sayfasında</a> bulabilirsiniz.  

Bu çalışır, ancak ne satın aldığınızı netleştirmek önemlidir. Bir dezavantajı düzeltmek için ödeme yapıyorsunuz. Reklamlar kaybolur ve Disqus'ın geri kalanı aynı kalır: yorum alanı hala ağır bir üçüncü taraf script paketi yükler ve okuyucularınız hala bunu gömülü olan sitelerde izlenir. Reklamları kaldırmak için ödeme yapıyorsunuz, yorum bölümünü hafifletmek veya daha özel hale getirmek için değil.  

## Seçenek 2: Asla Reklam Gösterilmeyen Bir Platforma Geçin  

Reklamları kaldırmanın diğer yolu, ilk başta reklam göstermeyen bir yorum platformu kullanmaktır. :)  

Sadece $0.99/ay karşılığında, FastComments, takip olmadan veya reklam olmadan derinlemesine performans optimize edilmiş işlevsellik sunar.  

## Her Yorumunuzu Korursunuz  

İnsanların en çok endişelendiği kısım, mevcut tartışmalarını kaybetmektir. FastComments, yorumlarınızı, kullanıcı adlarınızı, kullanıcı avatarlarınızı, satır içi görüntülerinizi, oylarınızı ve zaman damgalarınızı getiren yerleşik bir Disqus içe aktarıcıya sahiptir. Tüm resimleri sizin için kendi CDN'mize bile taşıyoruz.  

Tam detaylı bir kılavuz isterseniz, özel bir rehberimiz var: [Disqus'tan FastComments'a Geçiş](/(1-23-2020)-migrating-from-disqus-fastcomments.html). Kısa versiyon aşağıdadır.  

## Üç Adımda Geçiş Yapma  

### 1. Yorumlarınızı Disqus'tan Dışa Aktarın  

<a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">Disqus'ın kendi dışa aktarma adımlarını</a> takip edin. Size "gz" uzantılı bir dosya e-posta ile gönderecekler. Onu açmanıza veya çıkarmanıza gerek yoktur ve varsayılan bir Windows kurulumu bunu yapamaz. Arka uç sistemimiz o sıkıştırılmış dosyayı doğrudan okur.  

### 2. Dosyayı FastComments'a Aktarın  

Oturum açtıktan sonra, <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">içe aktarma sayfasına</a> gidin, açılır menüden Disqus'ı seçin ve dosyayı olduğu gibi yükleyin. İçe aktarma arka planda çalışır; sayfa, keşfedilen ve içe aktarılan # yorumun canlı sayısını göstermek için otomatik olarak güncellenecektir. İhtiyacınız olduğu kadar tekrar içe aktarmak güvenlidir.  

### 3. Disqus snippet'ini bizimkiyle değiştirin  

Sayfalarınızdan Disqus gömme kodunu kaldırın ve yerine <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">FastComments snippet'ini</a> yerleştirin. Sayfa URL'leriniz aynı kaldığı sürece, içe aktardığınız yorumlar tam olarak bulundukları yerde hizalanır.  

## WordPress'te mi?  

Eğer siteniz WordPress'te çalışıyorsa, manuel adımları atlayın ve <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress eklentisini</a> yükleyin. Kurulum, yapılandırma ve senkronizasyonu sizin için halleder ve ardından Disqus'ı devre dışı bırakabilirsiniz.  

## Taahhütte Bulunmadan Önce Test Edin  

Anahtarı bir anda çevirmek zorunda değilsiniz. Tamamen geçiş yapmadan önce görünüm ve hissiyatı karşılaştırmak için Disqus ve FastComments'ı aynı sayfada geçici olarak çalıştırabilirsiniz. Eğer bu konuda yardıma ihtiyacınız varsa, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bizimle iletişime geçin</a> ve size yardımcı olalım.  

FastComments'ın size ne kadar mal olacağından emin misiniz? Her plan reklamsızdır ve sayınızı <a href="https://fastcomments.com/pricing-calculator" target="_blank">fiyatlandırma hesaplayıcısında</a> kontrol edebilirsiniz. Eğer AB'de bulunuyorsanız, verilerinizi AB'de tutmak için <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> adresinde hesabınızı oluşturabilirsiniz.  

## Özet  

1. Verilerinizi Disqus'tan dışa aktarın  
2. FastComments'a aktarın  
3. Disqus snippet'ini <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments'ınkilerle</a> değiştirin  

Hepsi bu kadar. Yorum bölümünüzde reklam yok, daha hafif sayfalar ve zaten sahip olduğunuz her yorum.  

Şerefe!  

{{/isPost}}