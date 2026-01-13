---
[category:Tutorials]

###### [postdate]
# [postlink]如何在 FastComments 中允許匿名評論[/postlink]

{{#unless isPost}}
預設情況下，如果您未登錄，FastComments 需要電子郵件才能評論。我們使用此電子郵件自動為用戶創建帳戶並讓他們驗證評論。
為了允許匿名評論，您只需創建一個自定義規則。定義您希望允許匿名評論的域名，並可選擇性地指定頁面。
{{/unless}}

{{#isPost}}
預設情況下，如果您未登錄，FastComments 需要電子郵件才能評論。我們使用此電子郵件自動為用戶創建帳戶並讓他們驗證評論。
為了允許匿名評論，您只需創建一個自定義規則。定義您希望允許匿名評論的域名，並可選擇性地指定頁面。

這意味著您可以逐頁控制在哪裡允許匿名評論。

<img 
    src="images/fc-allow-anon.png"
    alt="允許匿名評論"
    class='lozad' />

{{/isPost}}

---