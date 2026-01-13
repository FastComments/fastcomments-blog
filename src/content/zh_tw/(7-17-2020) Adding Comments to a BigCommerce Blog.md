---
[category:Integrations]
###### [postdate]
# [postlink]將評論添加到 BigCommerce 博客[/postlink]

{{#isPost}}

#### 為任何頁面增加觀眾互動
如果您的觀眾可以對您的博客文章進行評論、提問和給予反饋那會怎麼樣？現在他們可以通過 FastComments 實現這一點。

#### 自定義主題
為了將 FastComments 添加到您的 BigCommerce 商店的博客中，您需要編輯主題模板。我們將指導您完成這個過程。

在 BigCommerce 儀表板中，前往 Storefront -> My Themes。

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="商店連結" title="商店連結" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="我的主題連結" title="我的主題連結" class="lozad" />
</div>

在「當前主題」下，您將會看到一個標有「高級」的下拉選單。

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="主題高級下拉選單" title="主題高級下拉選單" class="lozad" />
</div>

在此下拉選單中，第一個選項是「編輯主題文件」。如果此選項無法點擊，您將需要先通過「製作副本」來複製主題。

一旦您可以打開模板編輯器，您會在瀏覽器的左側看到一個文件瀏覽器。這是您主題中模板的文件瀏覽器。

您需要導航到表示博客文章的 HTML 模板。它位於 templates/components/blog/post.html，如下圖所示：

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="編輯器文章文件位置" title="編輯器文章文件位置" class="lozad" />
</div>

您的 FastComments 代碼片段，您可以從 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">這裡</a> 獲取，應該在第 48 行之後粘貼，該行的文本為 "&#123;{>components/common/share}&#125;"。

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="插入 FastComments 的位置" title="插入 FastComments 的位置" class="lozad" />
</div>

#### 記住！
您需要將商店的域名添加到 FastComments，您可以<a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">在這裡</a>進行此操作。

#### 總結
這是 FastComments 在您的 BigCommerce 博客上的樣子。乾杯！

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastComments 在 BigCommerce 博客上" title="FastComments 在 BigCommerce 博客上" class="lozad" />
</div>

{{/isPost}}

---