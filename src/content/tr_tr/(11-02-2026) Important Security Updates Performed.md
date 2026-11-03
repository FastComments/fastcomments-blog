[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]Önemli Güvenlik Güncellemeleri Gerçekleştirildi[/postlink]

{{#unless isPost}}
Tüm sunucularımızda işletim sistemini, son bir Linux TCP güvenlik açığını düzeltmek için yamaladık ve Node.js'i Ekim güvenlik sürümünü alacak şekilde güncelledik. Tarafınızdan herhangi bir işlem yapmanız gerekmiyor.
{{/unless}}

{{#isPost}}

### What's New

FastComments altyapısında yakın zamanda iki güvenlik güncellemesi tamamladık: Linux çekirdeğinin TCP kodundaki bir güvenlik açığını düzeltmek için bir işletim sistemi güncellemesi ve en son güvenlik sürümünü alacak bir Node.js güncellemesi.

### Linux Kernel

Tüm sunucularımız yamalandı ve artık <a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a> için düzeltmeyi içeren bir çekirdek çalıştırıyor.

Bu, çekirdeğin IPv4 TCP kodundaki bir use-after-free (kullanım sonrası serbest bırakma) hatasıdır. Çekirdek, bir bağlantıya eklenen IP seçeneklerini, başka bir CPU hâlâ okurken serbest bırakabilir; örneğin bir TCP el sıkışması sırasında SYNACK yanıtı oluşturulurken. Düzeltme, bu bellek hâlâ okunurken serbest bırakılmasını önlemek için hiçbir CPU'nun o belleği okumasını bekler.

### Node.js

FastComments Node.js üzerinde çalışıyor ve <a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">Ekim 2026 Node.js güvenlik sürümü</a>nden 24.x serisi için yamalanmış sürüm olan 24.22.1 sürümüne güncelledik.

Bu sürüm, desteklenen Node.js sürümlerindeki 10 güvenlik açığını düzeltir. Bunların 8'i 24.x serisini etkiler ve bu 4'ü yüksek olarak derecelendirilmiştir: IP adreslerinin TLS doğrulamasında iki, DNS adı işleme bir ve Brotli çözücüsünde bir. Ayrıca OpenSSL, c-ares, Undici ve CA sertifika paketi dahil olmak üzere paketlenmiş bağımlılıkları da günceller.

### What You Need To Do

Hiçbir şey. Bu güncellemeler tamamen bizim tarafımızda yapıldı, bu yüzden widget'larınız, API entegrasyonlarınız ve SSO yapılandırmalarınız herhangi bir değişiklik gerektirmiyor.

### In Conclusion

Altyapımızı güncel tutmak, FastComments çalıştırmanın sürekli bir parçasıdır ve bu tür güncellemeleri yayınlandıkça uygulamaya devam edeceğiz. Herhangi bir **herhangi bir** sorunuz olursa, aşağıda bize bildirin.

Sağlıklı günler!

{{/isPost}}