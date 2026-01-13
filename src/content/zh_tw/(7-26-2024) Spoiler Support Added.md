---
[category:Features]
###### [postdate]
# [postlink]增加了劇透支持[/postlink]

{{#unless isPost}}
用戶現在可以在評論中添加劇透，這些劇透會在鼠標懸停時顯示。
{{/unless}}

{{#isPost}}

### 新功能
FastComments 的用戶現在可以點擊「劇透」按鈕在評論中添加劇透。如果需要，也可以直接寫入 `<spoiler>一些文字</spoiler>` 標籤。
請注意，劇透的工具欄選項默認是禁用的。

### 啟用劇透

在小部件自訂中，您可以簡單地啟用 `Spoilers` 選項並保存。文檔請參見 [這裡](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-spoilers)。
我們已經為這篇博客文章啟用了這個功能以示範。

### 對於開發者和注意事項

默認的劇透樣式支持亮色和暗色模式。如果您為遮蔽文本編寫自定義 CSS，請記住如果您的網站支持暗色模式也要進行覆蓋。

### 總結

與所有主要版本一樣，我們很高興能花時間優化、測試並妥善發布這個功能。請在下面告訴我們如果您發現任何問題。

乾杯！

{{/isPost}}

---