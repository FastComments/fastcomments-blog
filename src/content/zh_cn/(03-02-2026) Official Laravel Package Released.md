---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]官方 Laravel 包已发布[/postlink]

{{#unless isPost}}
我们发布了一个官方的 Laravel 包，包含即插即用的 Blade 组件、自动单点登录和 API 集成。
{{/unless}}

{{#isPost}}

### 新特性

我们很高兴地宣布我们官方 Laravel 包 `fastcomments/laravel` 的发布。如果您正在使用 Laravel 并希望为您的应用程序添加
评论、实时聊天或评论计数，现在可以通过一次 Composer 安装和一些 Blade 组件来实现。

该包支持 PHP 8.1+ 并兼容 Laravel 10、11 和 12。

### 入门指南

使用 Composer 安装：

    composer require fastcomments/laravel

然后将您的租户 ID 和 API 密钥添加到您的 `.env` 文件中：

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

就这样。服务提供者和门面会自动发现 - 无需手动注册。您可以发布配置文件以进行进一步自定义：

    php artisan vendor:publish --tag=fastcomments-config

### 即插即用的 Blade 组件

该包附带三个 Blade 组件，您可以直接在模板中使用：

**评论小组件：**

    <x-fastcomments url-id="my-page" />

**实时聊天小组件：**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**评论计数：**

    <x-fastcomments-comment-count url-id="my-page" />

每个组件支持 `url`、`locale`、`readonly`、`has-dark-background` 和 `default-sort-direction` 等属性。脚本是异步加载和去重的，因此您可以安全地在同一页面上放置多个小组件。

### 自动单点登录

通过两个环境变量可以启用 SSO：

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

启用后，评论和实时聊天组件会自动读取 `Auth::user()` 并将签名的 SSO 负载注入小组件配置中。
已登录用户会无缝认证。访客会看到登录和注销链接，默认指向您的 Laravel `login` 和 `logout` 命名路由。

有两种方式来控制您的用户模型如何映射到 FastComments 用户数据：

**基于配置的映射** - 在 `config/fastcomments.php` 中设置属性名称（包括点表示法）或可调用项：

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**基于接口的映射** - 在用户模型上实现 `MapsToFastCommentsUser` 以获得完全控制：

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

支持安全单点登录（HMAC 签名，推荐用于生产）和简单单点登录模式。

### API 集成

该包还通过门面、依赖注入和直接 SDK 客户端注入包装了 FastComments API：

```php
use FastComments\Laravel\Facades\FastComments;

// 管理员 API
$comments = FastComments::admin()->getComments(...);

// 公共 API
$counts = FastComments::publicApi()->getCommentCounts(...);

// 用于自定义用途的 SSO 令牌
$token = FastComments::sso()->tokenFor($user);
```

### 欧盟数据驻留

对于使用我们欧盟地区的客户，单个环境变量可切换所有端点 - 小组件、API 调用和 SSO：

    FASTCOMMENTS_REGION=eu

### 结论

我们希望这个包能让您轻松地将 FastComments 添加到您的 Laravel 应用程序中。现在可以在 <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a> 上获得，源代码在 <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a> 上。

如果您有任何反馈，请在下面告诉我们！

干杯！

{{/isPost}}

---