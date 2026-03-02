---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Resmi Laravel Paketi Yayınlandı[/postlink]

{{#unless isPost}}
Resmi Laravel paketimizi drop-in Blade bileşenleri, otomatik SSO ve API entegrasyonu ile yayınladık.
{{/unless}}

{{#isPost}}

### Yenilikler

Resmi Laravel paketimizin, `fastcomments/laravel`, yayınlandığını duyurmaktan heyecan duyuyoruz. Laravel ile çalışıyorsanız ve uygulamanıza yorum yapma, canlı sohbet veya yorum sayıları eklemek istiyorsanız, bunu artık tek bir Composer yüklemesi ve birkaç Blade bileşeni ile yapabilirsiniz.

Paket, PHP 8.1+ üzerinde Laravel 10, 11 ve 12'yi destekler.

### Başlarken

Composer ile yükleyin:

    composer require fastcomments/laravel

Sonra, kiracı kimliğinizi ve API anahtarınızı `.env` dosyanıza ekleyin:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

Hepsi bu kadar. Hizmet sağlayıcı ve facade otomatik olarak keşfedilir - manuel kayıt gerektirmez. Daha fazla özelleştirme için yapılandırma dosyasını yayınlayabilirsiniz:

    php artisan vendor:publish --tag=fastcomments-config

### Drop-In Blade Bileşenleri

Paket, şablonlarınızda doğrudan kullanabileceğiniz üç Blade bileşeni ile birlikte gelir:

**Yorum widget’ı:**

    <x-fastcomments url-id="my-page" />

**Canlı sohbet widget'ı:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Yorum sayısı:**

    <x-fastcomments-comment-count url-id="my-page" />

Her bileşen, `url`, `locale`, `readonly`, `has-dark-background` ve `default-sort-direction` gibi özellikleri destekler. Betikler asenkron olarak yüklenir ve tekrar edenler deduplikasyon edilir, bu sayede aynı sayfada birden fazla widget güvenle yerleştirilebilir.

### Otomatik SSO

SSO, iki ortam değişkeni ile etkinleştirilebilir:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Etkinleştirildiğinde, yorum ve canlı sohbet bileşenleri otomatik olarak `Auth::user()` değerini okur ve imzalı SSO yükünü widget yapılandırmasına enjekte eder. Giriş yapmış kullanıcılar sorunsuz bir şekilde kimlik doğrulaması yapılır. Misafirler, Laravel'iniz için varsayılan `login` ve `logout` adlandırılmış yollarınıza giden giriş ve çıkış bağlantılarını görür.

Kullanıcı modelinizin FastComments kullanıcı verilerine nasıl eşleneceğini kontrol etmenin iki yolu vardır:

**Yapılandırma tabanlı eşleme** - `config/fastcomments.php` dosyasında özellik adlarını (nokta notasyonu dahil) veya callable'ları ayarlayın:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Arayüz tabanlı eşleme** - Kullanıcı modelinizde `MapsToFastCommentsUser` implement ederek tam kontrol sağlayın:

```php
use FastComments\Laravel\SSO\Contracts\MapsToFastCommentsUser;

class User extends Authenticatable implements MapsToFastCommentsUser
{
    public function toFastCommentsUserData(): array
    {
        return [
            'id' => (string) $this->id,
            'email' => $this->email,
            'username' => $this->name,
            'avatar' => $this->avatar_url,
            'is_admin' => $this->hasRole('admin'),
        ];
    }
}
```

Hem Güvenli SSO (HMAC imzalı, üretim için önerilir) hem de Basit SSO modları desteklenir.

### API Entegrasyonu

Paket ayrıca FastComments API'sini bir facade, bağımlılık enjeksiyonu ve doğrudan SDK istemci enjeksiyonu ile sarmalar:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Public API
$counts = FastComments::publicApi()->getCommentCounts(...);

// Özel kullanım için SSO token'ı
$token = FastComments::sso()->tokenFor($user);
```

### AB Veri İkameti

AB bölgesini kullanan müşterilerimiz için, tek bir ortam değişkeni tüm uç noktaları - widgetlar, API çağrıları ve SSO - değiştirir:

    FASTCOMMENTS_REGION=eu

### Sonuç Olarak

Bu paketinin FastComments'ı Laravel uygulamalarınıza eklemeyi kolaylaştırmasını umuyoruz. Şu anda <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>'te mevcut ve kaynak kodu <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>'ta.

Herhangi bir geri bildiriminiz varsa aşağıda bize bildirin!

Şerefe!

{{/isPost}}