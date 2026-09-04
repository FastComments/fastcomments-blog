[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]被封鎖的使用者現在可搜尋[/postlink]

{{#unless isPost}}
被封鎖的使用者頁面現在有搜尋列，讓您可以依電子郵件、名稱、執行者或導致封鎖的評論來尋找封鎖紀錄。
{{/unless}}

{{#isPost}}

### 新功能

在「Moderate Comments」下的被封鎖使用者頁面現在在表格上方有搜尋列。直到現在，唯一瀏覽該清單的方式是「頁面」與「每頁顯示數」控制，當只有十幾筆封鎖時還算可行，但若有數千筆則相當痛苦。

共有三個控制項：**Search By** 選擇欄位，**Match** 選擇「Contains」或「Equals」，**Value** 為您要搜尋的內容。

### 可搜尋的項目

**Search By** 提供五個選項：

- **Any Field** - 同時搜尋以下所有欄位
- **Email** - 被封鎖的電子郵件地址
- **Name** - 留言者的名稱
- **Banned By** - 執行封鎖的審核員
- **Banned For Saying** - 觸發封鎖的評論文字

最後四個選項與表格中同名的欄位相對應，以下拉選單的文字與其過濾的欄位名稱相同。

### Contains 與 Equals 的比較

**Contains** 會在欄位的任何位置尋找您的值。**Equals** 必須完全符合整個欄位。

大多數情況下您會想使用 Contains。搜尋 `bademail.com` 會找到該網域下的所有封鎖，包括通配符 `*@bademail.com` 的封鎖，因為通配符封鎖會保留星號。

Equals 用於您擁有精確值且不想要近似結果的情況。以 Equals 在 Email 欄位搜尋 `spammer@example.com` 只會回傳那一筆封鎖，其他皆不會出現。

兩者在所有欄位皆不區分大小寫。這點比看起來更重要：當封鎖是從評論產生時，僅有地址的網域部分會被轉為小寫，因此封鎖紀錄可能真的以 `MixedCase@Example.com` 形式儲存。搜尋 `mixedcase@example.com` 仍能找到它。

### 兩個值得了解的搜尋方式

**Banned For Saying** 會搜尋觸發封鎖的評論文字。若有特定的片語或連結在流傳，您可以一次查詢出所有因該內容被封鎖的使用者。

**Banned By** 會搜尋執行封鎖的審核員。若您想檢視特定審核員的決策，或在新人培訓時想了解他們的操作情形，只需一次搜尋即可。

### 支援分頁與分享

搜尋條件會寫入頁面 URL，因此在分頁瀏覽結果時仍會保留搜尋條件，您也可以透過複製 URL 將過濾後的清單傳給其他審核員，就像您目前分享審核連結的方式。重新開始搜尋會回到第一頁，**Clear** 則會回到完整清單。

### 文件說明

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">《審核指南》中的「封鎖使用者」章節</a> covers the search row in detail.

### 結論

此功能源自於觀察頁面實際的使用情況。封鎖會在多年內悄悄累積，直到有一天您需要找出特定的封鎖卻無從下手。現在已經可以做到。

如果您希望能搜尋列表中未包含的欄位，請在下方告訴我們。

敬上！

{{/isPost}}

---