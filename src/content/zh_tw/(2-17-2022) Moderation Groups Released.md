---
[category:Moderation]

###### [postdate]
# [postlink]釋出管理群組[/postlink]

{{#unless isPost}}
有多種不同類型的內容，並希望不同的管理團隊來處理自己的內容？現在，您可以使用 FastComments 來做到這一點！
{{/unless}}

{{#isPost}}

## 新功能

之前，管理者在訪問審核評論頁面時會看到您帳戶中的所有評論。如果您有許多類型的內容，則所有管理者都會看到完全相同的列表。對於較大的網站，這可能會導致某些混淆，讓人不清楚哪些管理者負責哪些內容。

我們現在提供的功能是，根據管理者的群組僅顯示需要審核的評論。

## 如何將評論放入群組

首先，需要設置一個自定義集成，以便在評論被留下時，FastComments 知道該結果評論應該進入哪個群組。

[請參閱這裡以了解如何設置集成。](https://docs.fastcomments.com/guide-customizations-and-configuration.html#moderation-group-ids)

## 添加群組

通過簡單地訪問新的 [管理群組頁面](https://fastcomments.com/auth/my-account/moderate-comments/moderation-groups)，我們可以定義自己名稱的群組，查看集成所需的生成 ID，甚至監控每個群組中的管理者和評論數量。

然後，您可以像平常一樣編輯管理者，並會有一個新的選項可供您選擇其群組。

請注意，管理者和評論都可以屬於多個群組。

有關添加群組的詳細文檔，請 [查看文檔！](https://docs.fastcomments.com/guide-moderation.html#moderation-groups).

## 遷移現有評論

通過支持請求，FastComments.com 可以將您的評論遷移到您希望的群組 - 只需告訴我們即可！

## 驗證集成

您可以通過檢查管理群組頁面中的評論數量來驗證集成是否正確設置。

## 對現有客戶的影響

如果您是使用 FastComments 的現有客戶，該功能已經可用於您的帳戶。

如果您不進行任何更改來使用此功能，您的管理者將不會體驗到他們的工作流程有任何變化。

## 總結

我們希望您覺得這次更新及其文檔有用。祝您評論愉快！

{{/isPost}}