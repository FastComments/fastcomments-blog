---
[category:Integrations]

###### [postdate]
# [postlink]可嵌入的 Webflow 評論[/postlink]

{{#unless isPost}}
包含視頻的 FastComments 安裝說明，適用於 Webflow.io 網站。
{{/unless}}

{{#isPost}}

#### 目標觀眾

本文針對任何希望在其 Webflow 網站上添加評論功能的人。

#### 介紹

在 Webflow 網站上安裝 FastComments 和在其他任何網站上一樣簡單，唯一的注意事項是針對 Webflow 等託管提供商的特定情況。

#### 步驟

1. 將你的 Webflow 網站的域名添加到你的帳戶 - 沒有它小部件將無法加載。這是當你在 Webflow 中點擊「發布」時使用的域名，例如「https://your-superb-project.webflow.io」。
2. 在設計模式下，點擊左上角的「添加元素」，然後向下滾動到「組件」。點擊「嵌入」 - 添加你可以在<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">這裡</a>找到的 FastComments 代碼片段。

#### 影片

這裡有一個詳細說明安裝過程的視頻，從我們在 Webflow 設計器中的操作開始，最後在我們的網站中嵌入的評論小部件運行。

<div class="text-center">
    <video src="images/fc-webflow-install.mp4" controls alt="Webflow 安裝教學視頻" title="Webflow 安裝教學視頻"></video>
</div>

#### 注意事項

FastComments 通過驗證域名請求來保護你的安裝。如果你想在還沒有獨立域名之前讓評論小部件顯示在你的 Webflow 網站上，**你必須將「weblfow.io」添加為你的帳戶的域名<a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">在這裡</a>。**

為了提高安全性，你可以定義整個域名，例如「your-awesome-site.webflow.io」。

#### 總結

我們希望這個指南對你有所幫助且易於閱讀。如有任何問題，請隨時在下方發表評論。

乾杯！

{{/isPost}}

---