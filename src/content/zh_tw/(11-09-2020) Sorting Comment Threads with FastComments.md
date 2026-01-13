---
[category:Features]
###### [postdate]
# [postlink]使用 FastComments 排序評論串[/postlink]

{{#unless isPost}}
自從推出以來，FastComments 一直不允許您改變評論串的排序方式。這次更新改變了這一點！
{{/unless}}

{{#isPost}}

#### 目標讀者

這篇文章的目標讀者包括管理員和評論者。

#### 介紹

評論一直是根據其年齡和 Karma（上票 + 下票）來排序的。到目前為止，這是唯一允許的排序方向。

#### 新的排序方向

FastComments 評論小工具現在還支持按最新和最舊排序。

#### 更改排序方向

當頂級評論的數量大於一時，將出現一個新下拉菜單以允許更改排序方向。

<div class="text-center">
    <img src="images/fc-sort-dropdown.png" alt="排序選擇下拉菜單" title="排序選擇下拉菜單" />
</div>

當選擇最新或最舊時，我們不考慮評論的 Karma。

#### 更改默認排序方向

雖然默認排序方向為最相關，但可以通過創建<a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">自定義規則</a>輕鬆自定義默認排序方向。

#### 保持快速

為了讓 FastComments 繼續名副其實，我們投入了大量時間確保各種排序方式均已優化。評論在留下時即被排序，因此在加載頁面時不會進行實際排序。這確保了無論您有多少評論，載入評論小工具和更改排序方向的過程都很快。

#### 總結

我們希望您覺得這次更新有所幫助。如有任何問題，歡迎在下方留言。

祝好！

{{/isPost}}

---