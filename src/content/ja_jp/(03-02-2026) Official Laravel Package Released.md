---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]公式Laravelパッケージがリリースされました[/postlink]

{{#unless isPost}}
私たちは、ドロップインBladesコンポーネント、自動SSO、およびAPI統合を備えた公式のLaravelパッケージをリリースしました。
{{/unless}}

{{#isPost}}

### 新機能

私たちは、公式のLaravelパッケージ `fastcomments/laravel` のリリースを発表できることを嬉しく思います。Laravelを使用してアプリケーションを構築している場合は、コメント、ライブチャット、またはコメント数をアプリケーションに追加することが、単一のComposerインストールといくつかのBladeコンポーネントで可能になりました。

このパッケージは、PHP 8.1+のLaravel 10、11、および12をサポートしています。

### 始め方

Composerでインストールします：

    composer require fastcomments/laravel

次に、あなたのテナントIDとAPIキーを`.env`に追加します：

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

これで完了です。サービスプロバイダーとファサードは自動的に発見されます - 手動での登録は必要ありません。さらにカスタマイズするために設定ファイルを公開できます：

    php artisan vendor:publish --tag=fastcomments-config

### ドロップインBladeコンポーネント

このパッケージには、テンプレートで直接使用できる3つのBladeコンポーネントが含まれています：

**コメントウィジェット:**

    <x-fastcomments url-id="my-page" />

**ライブチャットウィジェット:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**コメント数:**

    <x-fastcomments-comment-count url-id="my-page" />

各コンポーネントは、`url`、`locale`、`readonly`、`has-dark-background`、および`default-sort-direction`のようなプロップをサポートしています。スクリプトは非同期に読み込まれ、重複排除されるため、同じページに複数のウィジェットを安全に配置できます。

### 自動SSO

SSOは2つの環境変数で有効にできます：

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

有効にすると、コメントおよびライブチャットコンポーネントは自動的に`Auth::user()`を読み取って、サインされたSSOペイロードをウィジェット設定に注入します。
ログインユーザーはシームレスに認証されます。ゲストは、デフォルトでLaravelの`login`および`logout`に設定されたログインとログアウトのリンクが表示されます。

あなたのUserモデルがFastCommentsのユーザーデータにどのようにマッピングされるかを制御する方法は2つあります：

**設定ベースのマッピング** - 属性名（ドット表記を含む）または`config/fastcomments.php`の呼び出し可能な関数を設定します：

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**インターフェースベースのマッピング** - フルコントロールのために、Userモデルに`MapsToFastCommentsUser`を実装します：

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

セキュアSSO（HMAC署名、推奨は本番環境）とシンプルSSOモードの両方がサポートされています。

### API統合

このパッケージは、ファサード、依存性注入、および直接SDKクライアント注入でFastComments APIをラップしています：

```php
use FastComments\Laravel\Facades\FastComments;

// 管理者API
$comments = FastComments::admin()->getComments(...);

// パブリックAPI
$counts = FastComments::publicApi()->getCommentCounts(...);

// カスタム使用のSSOトークン
$token = FastComments::sso()->tokenFor($user);
```

### EUデータ居住

EU地域を利用している顧客向けに、単一の環境変数で全てのエンドポイント（ウィジェット、API呼び出し、SSO）を切り替えます：

    FASTCOMMENTS_REGION=eu

### まとめ

このパッケージがFastCommentsをLaravelアプリケーションに追加するのを簡単にすることを願っています。現在、<a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>で入手可能で、
ソースは<a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>にあります。

ご意見があれば、下にご記入ください！

よろしくお願いします！

{{/isPost}}