[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]阿拉伯語與從右至左語言現在已支援[/postlink]

{{#unless isPost}}
FastComments 現在支援阿拉伯語，且 FastComments 的每個部分都會為阿拉伯語和希伯來語以從右至左的方式排版。像「3 comments」這樣的計數現在也會在每種語言中使用正確的複數形式。
{{/unless}}

{{#isPost}}

### What's New

阿拉伯語現在已成為受支援的語言，語系代碼為 `ar`。評論小工具、其他可嵌入的小工具、電子郵件、儀表板以及行銷網站皆已完成翻譯。

阿拉伯語也是從右至左書寫的，因此加入它意味著要教導 FastComments 以雙向方式排版。此修正同樣適用於希伯來語。

### 從右至左版面配置

當語系為阿拉伯語或希伯來語時，整個介面會鏡像顯示。評論中的頭像、名稱與回覆控制項會交換位置，選單與下拉式選單會向正確的邊緣開啟，箭頭則指向閱讀方向。此行為涵蓋評論小工具及其擴充功能，如即時聊天與投票、工單、協作聊天與評論摘要小工具、電子郵件以及儀表板。

不需要任何設定，除非您想手動為使用者設定語系。

### 評論保留各自的方向

有時評論區會包含多種語言。英文評論出現在阿拉伯語頁面，或阿拉伯語評論出現在英文頁面，都應該自然閱讀。

每則評論與使用者名稱皆遵循其文字的方向。在英文頁面上，阿拉伯語回覆會以從右至左顯示，而其周圍的評論則以從左至右顯示；在阿拉伯語頁面則相反。評論內的程式碼區塊始終以從左至右顯示，因為程式碼本身就是如此。

### 設定語系

預設情況下，小工具會從訪客的瀏覽器取得語系，因此阿拉伯語使用者會自動顯示阿拉伯語。若要強制設定，可在小工具自訂頁面的「Locale / Language」下設定語系，或在程式碼中設定：

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

如果您使用 SSO，請在使用者物件上傳遞 `locale: 'ar'`，以便他們的電子郵件也以阿拉伯語發送。

### 複數形式，正確處理

英文對於計數有兩種形式：「1 comment」與「2 comments」。阿拉伯語則有針對一、二、三至十，以及十一至九十九的不同形式，且在一百時再次使用單數。俄羅斯語、烏克蘭語、波蘭語、克羅埃西亞語、塞爾維亞語、斯洛文尼亞語與希伯來語也各自有其規則。

直到現在，FastComments 只辨識「單數」與「其他」兩種情況，導致俄羅斯語讀者在看到 2 或 5 則評論時會出現錯誤的名詞形式。現在，所有帶計數的字串皆會根據其語言選擇正確的形式，無論在小工具、電子郵件或儀表板中。

在此過程中，我們檢視了每種語言的所有計數字串，發現並修正了多項舊有的錯譯。例如，在少數語言中，「回覆」的字詞被翻譯為動詞「to reply」，導致評論顯示「1 Reply」相當於「1 To reply」。

如果您自行客製化了計數文字，例如「comments」標籤，您的文字仍會在所有計數中使用。

### 尋找您的語言

儀表板中的語言選擇器現在會在英文名稱旁顯示各語言的本名，例如「Arabic (العربية)」與「German (Germany) (Deutsch)」。若使用者誤選了語言，仍可自行找回正確語言。

### 文件說明

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">支援語言指南</a> 列出
每個語系代碼並說明從右至左的行為。 <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">locale 選項</a>
說明如何在小工具中強制設定語系。

此功能建立在 [our first localization release](/(2-05-2020)-fastcomments-gets-localized.html) 於 2020 年的基礎上，當時僅支援三種語言。現在已達二十八個語系。

### 總結

我們很高興能將 FastComments 帶給阿拉伯語使用者，並為希伯來語使用者提供更好的體驗。如果您發現您的語言有翻譯錯誤，請在下方告訴我們，我們會進行修正。

敬上！

{{/isPost}}

---