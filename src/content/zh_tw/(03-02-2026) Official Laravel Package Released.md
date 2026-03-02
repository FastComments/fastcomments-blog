---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]官方Laravel套件發布[/postlink]

{{#unless isPost}}
我們發布了一個官方Laravel套件，包含即插即用的Blade元件、自動SSO和API整合。
{{/unless}}

{{#isPost}}

### 新聞資訊

我們很高興地宣布我們的官方Laravel套件 `fastcomments/laravel` 已經發布。如果您正在使用Laravel並希望在您的應用程序中添加評論、即時聊天或評論計數，您現在可以通過一個Composer安裝和幾個Blade元件來完成。

該套件支持Laravel 10、11和12，需使用PHP 8.1以上版本。

### 開始使用

使用Composer安裝：

    composer require fastcomments/laravel

然後將您的租戶ID和API密鑰添加到您的 `.env` 文件中：

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

完成了。服務提供者和門面會自動發現 - 無需手動註冊。您可以發布配置文件以進行進一步的自定義：

    php artisan vendor:publish --tag=fastcomments-config

### 即插即用的Blade元件

該套件附帶三個Blade元件，您可以在模板中直接使用：

**評論小工具：**

    <x-fastcomments url-id="my-page" />

**即時聊天小工具：**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**評論計數：**

    <x-fastcomments-comment-count url-id="my-page" />

每個元件都支持 `url`、`locale`、`readonly`、`has-dark-background` 和 `default-sort-direction` 等屬性。腳本異步加載並去重，因此您可以安全地在同一頁面上放置多個小工具。

### 自動SSO

可以通過兩個環境變量啟用SSO：

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

一旦啟用，評論和即時聊天元件會自動讀取 `Auth::user()` 並將簽名的SSO有效負載注入小工具配置中。已登入的用戶無縫驗證。訪客則看到默認指向您的Laravel `login` 和 `logout` 命名路由的登錄和登出連結。

有兩種方法控制您的用戶模型如何映射到FastComments用戶數據：

**基於配置的映射** - 在 `config/fastcomments.php` 中設置屬性名稱（包括點表示法）或可調用對象：

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**基於介面的映射** - 在您的用戶模型上實現 `MapsToFastCommentsUser` 以實現完全控制：

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

支持安全的SSO（HMAC簽名，推薦用於生產環境）和簡單的SSO模式。

### API整合

該套件還用一個門面、依賴注入和直接的SDK客戶端注入來包裝FastComments API：

```php
use FastComments\Laravel\Facades\FastComments;

// 管理API
$comments = FastComments::admin()->getComments(...);

// 公共API
$counts = FastComments::publicApi()->getCommentCounts(...);

// 用於自定義使用的SSO令牌
$token = FastComments::sso()->tokenFor($user);
```

### 歐盟數據駐留

對於使用我們的歐盟區域的客戶，只需一個環境變量即可切換所有端點 - 小工具、API調用和SSO：

    FASTCOMMENTS_REGION=eu

### 總結

我們希望這個套件能使您能輕鬆地將FastComments添加到您的Laravel應用程序中。它現在已經在<a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>上可用，並且源代碼在<a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>上。

如果您有任何反饋，請在下方告訴我們！

祝好！

{{/isPost}}

---