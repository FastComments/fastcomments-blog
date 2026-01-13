---
[category:Features]
###### [postdate]
# [postlink]介紹評論者連結[/postlink]

{{#unless isPost}}
我們2021年的第一次發布帶來了這個功能（如果在租戶層級啟用），用戶在評論時可以添加他們的博客連結。
{{/unless}}

{{#isPost}}

## 新功能

我們2021年的第一次發布帶來了這個功能（如果在租戶層級啟用），用戶在評論時可以添加他們的博客連結。

## 什麼是評論者連結？

正如我們在這個非常有趣的交流中所見，其中一位用戶的用戶名被下劃線以表示這是一個連結：

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="評論者連結" title="評論者連結示範" />
</div>

這是因為該網站已配置其FastComments安裝，以允許在評論時填寫一個新字段，供用戶留下連結：

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="評論者連結輸入" title="評論者連結輸入" />
</div>

這個連結也可以通過編輯您的 <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">帳戶詳情</a> 來自定義。

## 啟用評論者連結

通過創建一個 <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">自定義規則</a> 我們可以啟用新的輸入字段。只需啟用選項「啟用評論者連結」。

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="啟用評論者連結" title="博客連結" />
</div>

## 覆蓋輸入字段文本

默認情況下，評論者連結字段的佔位符是「您的博客URL。」。這可以通過您用於啟用該功能的相同自定義規則來覆蓋，方法是點擊「顯示自定義文本」。

## 改善垃圾郵件分類

這個功能有一個副作用，就是減少那些可能不是垃圾郵件的內容被標記為垃圾郵件的情況。帶有少量文本和連結的評論更容易被分類為垃圾郵件。然而，評論者連結不會影響評論是否被視為垃圾郵件的分類。這意味著用戶可以在評論中添加他們的博客連結，且被標記為垃圾郵件的風險大大降低。

基於這些原因，高垃圾郵件量的網站可能不希望啟用此功能，然而那些不這樣做的網站，卻會在面對特定受眾時發現使用這個功能的價值。

## 對現有客戶的影響

如果您是現有的FastComments客戶，除非您啟用此功能，否則您的用戶將不會體驗到功能的變化。新客戶也是如此 - 您會發現此功能默認為關閉。

## 總結

我們希望這個功能是比去年更好的新年開始。祝評論愉快！

{{/isPost}}