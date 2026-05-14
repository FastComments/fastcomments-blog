---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]D2L Brightspace コースへのコメント追加[/postlink]

{{#unless isPost}}
FastCommentsは、LTI 1.3 ダイナミック登録を介して、D2L Brightspace にワンステップでインストールできるようになりました。これにより、すべてのコースユニットで自動SSO、スレッド形式のコメント、共同チャットが利用可能になります。
{{/unless}}

{{#isPost}}

### 新機能

FastCommentsは、IMS LTI 1.3 アドバンテージ標準を介してD2L Brightspaceをサポートするようになりました。これにはダイナミック登録が含まれます。
これにより、プラグインのインストールや、キー交換の調整、コースごとの配線が不要になります。Brightspaceの
管理者がLTIアドバンテージ登録画面に単一のURLを貼り付けると、FastCommentsとBrightspaceが自動的にハンドシェイクを完了します。講師は、他の外部ツールと同じ方法で、任意のユニットにFastCommentsを追加でき、学生はコースコンテンツ内に埋め込まれたスレッド形式のコメントを見ることができます。

<div class="text-center">
    <div class="sm">Brightspaceユニット内にトピックとして埋め込まれたスレッド形式のコメント</div>
    <img src="images/d2l-course-comments.png" alt="D2L Brightspaceユニット内で動作しているFastComments" title="BrightspaceユニットのFastComments" />
</div>

### 始め方

FastCommentsダッシュボードから、[LTI 1.3設定ページ](https://fastcomments.com/auth/my-account/lti-config)を開き、プラットフォームのドロップダウンから**D2L Brightspace**を選択し、**URLを生成**をクリックします。30分間有効な一回限りの登録URLが生成されます。

Brightspaceでは、管理者が**管理ツール > エクステンシビリティ管理 > LTIアドバンテージ > ツール登録**を開き、**ツール初期化登録エンドポイント**フィールドにURLを貼り付けて送信します。Brightspace は FastComments との登録ハンドシェイクを行い、署名キーを交換し、ツールエントリを作成します。完了するとポップアップは自動的に閉じます。

登録後、管理者はツールを有効にし、アクセスを持つべき組織単位にスコープを絞ったデプロイメントを作成します。その時点から、FastCommentsは各コースのコンテンツピッカーに**既存の追加**の下に表示されます。

### コースへの追加

任意のコースユニット内で、講師は**既存の追加**をクリックし、アクティビティリストから**FastComments**を選択します。ツールはユニット内のトピックとして配置されます。トピックの名前変更、ユニット内での順序変更、特定のグループやリリース条件への制限、可視性の切り替えは、すべて標準のBrightspaceコントロールを使用します。講師が学ぶための別個のFastComments設定画面はありません。

インライン埋め込み用には、Brightspace HTMLエディタの**挿入項目**ダイアログの**LTIアドバンテージ**からも同じFastCommentsツールを利用できます。これにより、LTIディープリンクフローを使用して、リーディングやクイズの指示、その他のHTMLトピックの中に直接コメントスレッドを挿入できるため、内容の隣に議論が存在します。

### 自動SSO

学生はログイン画面を一度も見ることはありません。LTI 1.3の発行には、Brightspaceのプライベートキーで署名された学生のBrightspace ID（`sub`、`name`、`email`、および`picture`）が含まれています。FastComments は、Brightspace が公開した JWKS に対して署名を確認し、ユーザーのために安全なSSOセッションを生成し、コメントウィジェットを表示します。コメントは学生のBrightspaceアカウントに帰属し、講師もBrightspace IDを使用してモデレートします。

役割のマッピングは自動です。Brightspaceの**管理者**ユーザーはFastComments管理者として、**講師**ユーザーはモデレーターとして、その他のすべてのユーザーは標準のコメント者として扱われます。FastComments側で維持する別のユーザーリストは必要ありません - Brightspace の指示に従います。

### スレッドスコーピング

各コメントスレッドは、Brightspace ホスト、コース、およびリソースリンクの三重で結びついています。つまり、両方のコースが「リーディングリフレクション」トピックを使用している場合、それぞれが独自の議論を持ちます。同じコース内で講師がFastCommentsを2回追加した場合（例えば、1回はユニットトピックとして、もう1回はHTMLページ内にインライン埋め込みとして）も同様です - 各配置はそれぞれ独自のスレッドになります。

ホスト部分は意図的にスレッド識別子の一部です。あなたの機関が1つのFastCommentsアカウントの下で複数のBrightspaceインスタンスを運営している場合、コースIDが衝突しても会話は各インスタンスに隔離されたままです。

### 結論

D2L Brightspaceを運営している場合、その日の午後にはFastCommentsをライブにすることができます：URLを生成し、それをBrightspaceに貼り付け、講師が自分のユニットにツールを追加できるようにします。トラブルシューティングやページごとのスクリーンショットを含む完全なステップバイステップのセットアップについては、[LTI 1.3インストールガイド](https://docs.fastcomments.com/guide-installation-lti-1p3.html)をご覧ください。同じ統合はMoodle、Blackboard、Sakai、Schoology、その他のLTI 1.3アドバンテージプラットフォームにも対応していますが、Brightspaceは私たちの最初のターゲットであり、フローは非常に安定しています。

よろしくお願いします！

{{/isPost}}

---