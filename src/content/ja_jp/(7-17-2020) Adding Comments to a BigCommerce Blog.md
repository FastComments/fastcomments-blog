---
[category:Integrations]
###### [postdate]
# [postlink]BigCommerceブログへのコメント追加[/postlink]

{{#isPost}}

#### どのページにもオーディエンスエンゲージメントを追加
あなたのオーディエンスがブログ投稿にコメントしたり、質問したり、フィードバックを提供したりできるとしたらどうでしょうか？FastCommentsを使用すれば、それが可能になります。

#### カスタムテーマ
FastCommentsをあなたのBigCommerceストアのブログに追加するには、テーマテンプレートを編集する必要があります。その手順を説明します。

BigCommerceのダッシュボードで、Storefront -> My Themesに移動します。

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Store Link" title="Store Link" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="My Themes Link" title="My Themes Link" class="lozad" />
</div>

「Current Theme」の下に「Advanced」というラベルのドロップダウンが表示されます。

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Theme Advanced Dropdown" title="Theme Advanced Dropdown" class="lozad" />
</div>

このドロップダウンの最初のオプションは「Edit Theme Files」です。このオプションがクリックできない場合は、まず「Make a Copy」を使用してテーマをコピーする必要があります。

テンプレートエディタが開けたら、ブラウザの左側にファイルブラウザが表示されます。これは、あなたのテーマ内のテンプレート用のファイルブラウザです。

ブログ投稿を表すHTMLテンプレートに移動する必要があります。これはtemplates/components/blog/post.htmlにあります。以下のように示されています：

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Editor Post File Location" title="Editor Post File Location" class="lozad" />
</div>

あなたのFastCommentsコードスニペットは、<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">こちら</a>から入手でき、48行目の「&#123;{>components/common/share}&#125;」の直後に貼り付ける必要があります。

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Place to insert FastComments" title="Place to insert FastComments" class="lozad" />
</div>

#### 忘れないでください！
あなたのストアのドメインをFastCommentsに追加する必要があります。これは<a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">こちら</a>で行えます。

#### 結論
これがあなたのBigCommerceブログでのFastCommentsの外観です。乾杯！

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence on a BigCommerce Blog" title="FastCommence on a BigCommerce Blog" class="lozad" />
</div>

{{/isPost}}

---