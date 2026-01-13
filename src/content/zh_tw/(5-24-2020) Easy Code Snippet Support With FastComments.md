---
[category:Features]

###### [postdate]
# [postlink]輕鬆的程式碼片段支持與 FastComments[/postlink]

我們的一些客戶擁有與軟體開發相關的網站和部落格。在這些社群中，共享程式碼片段是一種常見的做法。以下是 FastComments 如何輕鬆實現這一點。

{{#isPost}}

FastComments 允許通過將程式碼直接貼入評論框來共享程式碼。這可以與其他文本和圖片混合使用，並且不需要手動添加任何“程式碼”標籤來添加格式。只需粘貼即可！

這裡有一個快速演示，展示了它的實際運作。

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="程式碼片段共享演示" title="程式碼片段共享演示"></video>

### 性能影響

添加此功能僅為客戶端小部件增加了約 150 字節，因為大多數功能是在伺服器端處理的。事實上，如果您將此功能與最近增加的 Markdown 功能捆綁在一起，則小部件的大小實際上因這些新功能而減少了！

### 注意事項

如果您的社區經常共享程式碼，您應考慮增加最大評論大小，以便更容易共享程式碼片段。這可以通過管理儀表板的“自訂”選項卡來完成。

### 程式碼檢測

為了保持客戶端小部件的大小，我們僅會自動檢測粘貼的 C 和類 Python 語言（例如 Java、JavaScript、CSS、C++）的程式碼，這些語言使用 "{" 或空格作為控制流。
如果您常用的語言未被自動檢測，請與我們聯繫。

要手動插入一個程式碼塊，請撰寫類似於： ```<code>(defun someLispCode(1, 2, 3))</code>``` 的評論。我們可以自動檢測大約 150 種語言。

### 遷移現有評論

如果您希望遷移到 FastComments 並且擁有很多需要正確格式化的程式碼片段評論，<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以幫助</a>。

### 總結

就是這樣！我們已將此功能推廣到所有使用 FastComments 的線上社區。

祝您評論愉快！

{{/isPost}}