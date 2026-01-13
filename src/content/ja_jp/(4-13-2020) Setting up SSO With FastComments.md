---
[category:API & Development]

###### [postdate]
# [postlink]FastCommentsでのSSOの設定[/postlink]

{{#unless isPost}}
FastCommentsはさまざまなプラットフォームおよびカスタム統合のためのSSOソリューションを提供します。
{{/unless}}

{{#isPost}}

# 概要

## SSOとは？

SSO（シングルサインオン）とは、あなたまたはあなたのユーザーがFastCommentsを別のアカウントを作成せずに使用できるようにするための一連の規則です。

匿名コメントを許可しない場合は、FastCommentsでコメントするためにアカウントが必要です。このサインアッププロセスは非常に簡単にしています - ユーザーはコメントする際にメールアドレスを入力するだけです。しかし、その手順すら避けたいサイトがあることも理解しています。

## どうやって取得するの？

現在、すべてのアカウントタイプにはSSOのアクセスとサポートが提供されています。ただし、SSOユーザーの最大数は、あなたのパッケージによって異なります。

### WordPressユーザー

当社の<a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a>プラグインを使用している場合、コードを書く必要はありません！ プラグインの管理ページに移動し、SSO設定をクリックして、有効にするだけです。

これにより、あなたのAPIキーを作成し、それをWordPressインストールに送信してSSOをオンにするボタンを持つウィザードに案内されます。これを1クリックで簡素化しました。

プラグインを初めてインストールする場合は、SSO設定ボタンのある管理ページが表示される前に、設定プロセスに従う必要がありますのでご注意ください。

### カスタム統合

FastComments SSOは、SSOを実装するためのメカニズムとしてHMAC-SHA256暗号化を使用します。まず、全体のアーキテクチャを説明し、例や詳細な手順を提供します。しかし、この記事の最後には**DisqusおよびCommentoからの移行**に関する指示があります。

フローは次のようになります：

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO Diagram" title="FastComments SSO Diagram" class="lozad" />
</div>

FastComments SSOで新しいAPIエンドポイントを書く必要はありません。ユーザーの情報を秘密鍵で暗号化し、ペイロードをコメントウィジェットに渡すだけです。

NodeJS、Java/Spring、バニラPHPなど、いくつかの言語/ランタイムで完全に機能するコード例を提供しています。NodeJSの例ではExpressJSを使用しており、Javaの例ではSpringを使用していますが、これらのランタイムでFastComments SSOを実装するために必要なフレームワークやライブラリはなく、ネイティブのcryptoパッケージで動作します。

コード例のリポジトリは次のリンクから見つけることができます：

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">FastComments SSOコード例</a>

#### API秘密鍵の取得

あなたのAPI秘密は、<a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">このページ</a>から取得できます。このページには、マイアカウントに移動し、API/SSOタイルをクリックして「API秘密鍵を取得」をクリックすることでもアクセスできます。

#### コメントウィジェットのパラメーター

コメントウィジェットの高レベルAPIドキュメントは、<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">こちら</a>にあり、「詳細オプションを表示」をクリックします。ページ内でSSOを検索します。

これらのパラメーターが何を意味するのか、より詳細に説明します。

コメントウィジェットは設定オブジェクトを受け取ります - これは、FastCommentsを使用して顧客ID（tenantIdと呼ばれる）を渡すときに既に渡されています。

SSOを有効にするには、新しい「sso」オブジェクトを渡します。このオブジェクトには次のパラメーターが必要です。値は**サーバー側**で生成する必要があります。

- userDataJSONBase64: ユーザーのデータをJSON形式で表したもので、Base64エンコードされます。
- verificationHash: UNIX_TIME + userDataJSONBase64から作成されたHMAC-SHA256ハッシュです。
- timestamp: 現在のUnix時間です。**未来の時間や3時間以上前の時間ではあってはなりません。**
- loginURL: コメントウィジェットがユーザーをログインさせるために表示できるURLです。
- logoutURL: コメントウィジェットがユーザーをログアウトさせるために表示できるURLです。
- loginCallback: ログインURLの代わりに提供された場合、ログインボタンをクリックしたときにコメントウィジェットが呼び出す関数です。
- logoutCallback: ログアウトURLの代わりに提供された場合、ログアウトボタンをクリックしたときにコメントウィジェットが呼び出す関数です。

#### ユーザーオブジェクト

ユーザーオブジェクトは次のスキーマを含みます：

- id (string, required) (最大1k文字)
- email (string, required) (最大1k文字)。注: ユニークである必要があります。
- username (string, required) (最大1k文字)。注: ユーザー名はメールアドレスであってはならず、ユニークである必要はありません。
- avatar (string, optional) (最大3k文字)
- optedInNotifications (boolean, optional)
- displayLabel (string, optional, 最大100文字)。このラベルは彼らの名前の横に表示されます。
- websiteUrl (string, optional, 最大2000文字)。ユーザーの名前がこれにリンクされます。

#### 通知

通知を有効または無効にするには、optedInNotificationsの値をそれぞれtrueまたはfalseに設定します。この値がSSOペイロードに含まれている状態でユーザーが初めてページを読み込むと、彼らの通知設定が更新されます。

#### VIPユーザーと特別ラベル

ユーザーの名前の横に特別なラベルを表示するには、オプションの「displayLabel」フィールドを使用します。

#### 認証されていないユーザー

認証されていないユーザーを表すには、単にuserDataJSONBase64、verificationHash、またはtimestampを設定しないでください。loginURLを提供します。

#### ユーザーデータの直列化とハッシュ化の直接例

詳細および例は<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">こちら (js)</a>、
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">こちら (java)</a>および
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">こちら (php)</a>で確認できます。


### Disqus SSOからの移行

DisqusとFastComments SSOの最大の違いは、DisqusがSHA1を暗号化に使用するのに対し、当社はSHA256を使用していることです。
これにより、Disqusからの移行は容易です - ハッシュアルゴリズムをSHA1からSHA256に変更し、UIに渡されるプロパティ名を更新するだけです。

### Commento SSOからの移行

Commentoは、全く異なるSSOアプローチを使用しています - 彼らはユーザーを認証するために呼び出すエンドポイントを必要とします。FastCommentsはその逆であり -
単にユーザーの情報を秘密鍵でエンコードおよびハッシュ化し、それを渡すだけです。

どの統合も複雑で困難なプロセスであることを理解しています。あなたの担当者に連絡するか、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">サポートページ</a>を利用してください。

{{/isPost}}

---