---
[category:Integrations]
[category:Tutorials]
###### [postdate]
# [postlink]Notionページへのコメント追加[/postlink]

{{#unless isPost}}
Notionページにコメントを追加したいですか？私たちが助けます。
{{/unless}}

{{#isPost}}

## 新機能

FastCommentsは現在embed.lyのプロバイダーであり、コメントスレッドを[oEmbed](https://oembed.com)をサポートするアプリケーションに埋め込むためのAPIやサービスを提供しています。

つまり、Notion、Google Sites、またはNimbus Noteで構築されたサイトに簡単にライブコメントを追加できるようになりました。

## 使い方 - クイックデモ

テナントにログインした状態で、[fastcomments.com/create](https://fastcomments.com/create)にアクセスすると、Notionページやembed.lyと統合された任意のアプリケーションに追加できる会話リンクを作成できます。

デモ埋め込みリンク[fastcomments.com/c/demo](https://fastcomments.com/c/demo)を使用して自分で試すこともできます：

<video src="images/fastcomments-notion.mp4" controls alt="FastCommentsとNotionのデモ" title="FastCommentsとNotionのデモ"></video>

埋め込まれたコメントウィジェットは、他のFastCommentsのインスタンスと同様にカスタマイズできます。

例えば、上記の動画に示されているように、コメントウィジェットをカスタマイズし、ユーザーがコメントや投票をする際に名前だけを入力すれば良いようにすることができます。

## 2023年の更新 - Super.soのサポート

FastCommentsを使用して、Notionドキュメントの上に構築されたSuper.soサイトにもコメントを追加できるようになりました！[こちらでドキュメントを見つけることができます。](https://docs.fastcomments.com/guide-installation-super-so.html)

## Google Sites

Google Sitesもサポートされており、流れは似ています。

1. [埋め込み用の会話を作成します。](https://fastcomments.com/create)
2. Google Siteを編集する際に、`挿入` -> `埋め込み`に移動します。`URLによる`を選択します。
3. ステップ1のURLを貼り付けます。
4. `挿入`をクリックします。完了です！

#### 埋め込みリンクの追加

<div class="text-center">
    <img src="/images/google-sites-howto.png" title="Google SiteにFastCommentsを追加する方法" alt="Google SiteにFastCommentsを追加する方法" />
</div>

#### Google Siteにコメントを追加！

<div class="text-center">
    <img src="/images/google-sites-howto-done.png" title="完了！" alt="完了！" />
</div>

## Nimbus Note

Nimbus Noteもサポートされており、流れは似ています。

1. [埋め込み用の会話を作成します。](https://fastcomments.com/create)
2. ノートを編集する際に、埋め込みブロックを追加します。
3. ステップ1のURLを埋め込むためのURLとして使用します。
4. `挿入`をクリックします。完了です！

### 誰が対象か

すべての現在のおよび新しいFastCommentsの顧客は、すべてのプランでoEmbedサポートにアクセスできます。

### 既存の会話を埋め込む

既存の会話を埋め込むには、コメントウィジェットに渡された<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID</a>の値を、会話名として会話を作成するページに入力します。

### 結論

FastCommentsの残りの機能と同様に、この機能も迅速かつ使いやすいと感じていただけることを願っています。

乾杯！

{{/isPost}}

---