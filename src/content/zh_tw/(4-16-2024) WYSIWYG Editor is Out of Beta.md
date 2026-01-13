---
[category:Features]

###### [postdate]
# [postlink]FastComments WYSIWYG 編輯器已經脫離測試版[/postlink]

{{#unless isPost}}
客戶現在可以選擇使用不使用可見錨點標籤進行格式化的新編輯器。
{{/unless}}

{{#isPost}}

### 新功能

FastComment 的用戶一直都可以使用像 `<b>這個</b>` 的錨點標籤來格式化他們的評論。這對於任何過去使用過網路論壇的人，或者我們的許多競爭對手來說都是非常熟悉的，然而一些用戶和社區期待不同的行為。

現在您可以在評論區域不使用錨點標籤來樣式化文本，因為文本輸入可以切換為 `contenteditable`。

出於演示目的，這已經在這個博客上啟用了。

進階編輯器的外觀與舊編輯器完全相同，只是它不使用可見的錨點標籤。

### 開啟進階編輯

在小工具自定義中，您只需啟用 `Advanced Editor` 並按保存即可。文檔在 [這裡](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg)。

### 對於開發者 & 注意事項

您可以在代碼中啟用此功能的文檔 [在這裡](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg) 找到，雖然我們建議使用小工具自定義 UI，因為這樣每次頁面加載發送的數據會更少。

內容可編輯所生成的 HTML 與舊的 textarea 編輯器略有不同，因此如果您正在從 API 解析評論，請記住這一點。

### 優化

通過將此功能作為擴展添加，我們保持評論小工具不隨著這一新功能而增長，當這個功能啟用時將在後台加載，這樣可以保持默認的評論小工具小巧輕便。

### 結論

和所有主要版本一樣，我們很高興能夠花時間優化、測試並正確發布這個功能。如果您發現任何問題，請在下面告訴我們。

乾杯！

{{/isPost}}

---