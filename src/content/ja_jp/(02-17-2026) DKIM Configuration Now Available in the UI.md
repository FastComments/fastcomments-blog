---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]DKIMの設定がUIで可能になりました[/postlink]

{{#unless isPost}}
FastCommentsでは、APIを使用せずにメール配信率を向上させるためのDKIM設定用UIを提供するようになりました。
{{/unless}}

{{#isPost}}

### 新機能

カスタムメールドメインのためのDKIM設定が簡単になりました。以前は、DKIMを設定するために
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a>を直接使用する必要がありました。今では、FastCommentsの管理UIから直接DKIMを設定できます。

### DKIMが重要な理由

FastCommentsがあなたの代わりに送信するメールのFromドメインをカスタマイズすると、メールプロバイダーはそのメールが正当であるかを確認する必要があります。DKIM（DomainKeys Identified Mail）は、これを助けるための重要な認証メカニズムの一つです。適切にDKIMが設定されていないと、あなたのドメインを代表して送信されたメールはスパムフォルダに入る可能性が高くなります。

### 設定方法

<a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">My Domains</a>ページに移動し、設定したいドメインの「詳細を表示」をクリックします。そこで、ドメイン名、キーセレクター、および秘密鍵を入力できるDKIM設定が表示されます。

保存後、そのドメインから送信されるすべてのメールにDKIM設定が適用されます。

### APIは引き続き利用可能です

プログラムからDKIM設定を管理したい場合は、従来通り
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a>を使用できます。

### まとめ

これにより、FastCommentsがあなたの代わりに送信するメールをユーザーが受信することを確実にするのが簡単になることを願っています。質問がある場合は、下にお知らせください。

乾杯！

{{/isPost}}

---