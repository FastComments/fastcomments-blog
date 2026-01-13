---
[category:UI & Customization]

###### [postdate]
# [postlink]自訂預設頭像[/postlink]

{{#unless isPost}}
預設頭像圖片現在可以自訂了。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

#### 介紹

自從 FastComments 啟動以來，預設圖示一直沒有改變。請看這個預設個人資料圖示的壯麗。

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Default Profile Icon" alt="Default Profile Icon" />
</div>

但是現在，您可以自訂它。

#### 不用程式碼

首先，<a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">添加或編輯自訂規則</a>。自訂規則可以
應用於單一頁面、一個域名或整個帳戶。如果您想全域更改頭像，則可以將 URL ID 欄位留空。

向下滾動到「預設頭像」區域。

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday Settings"
    class='lozad' />
    
點擊按鈕上傳大小最多為 20mb 的 JPG、PNG 或 GIF。它將被調整為 100px 的正方形。

#### 使用程式碼

如果您希望托管預設頭像，並且您已經有一個公開的 URL，則可以在程式碼中定義它，如下例所示。

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

圖片應為正方形，大小應為 100px 的正方形。遵循這些限制將確保最佳體驗。

#### 注意事項

1. 自訂預設個人資料圖片僅影響您的網站。它不會影響通知電子郵件或用戶帳戶的任何部分。
2. 在此更改之前創建的評論可能仍會顯示舊的個人資料圖片。如果您調整了預設個人資料圖示並注意到您的網站上有許多使用舊個人資料圖示的評論，<a href="https://fastcomments.com/auth/my-account/help" target="_blank">請告訴我們</a>。

#### 總結

我們希望您覺得這個指南有幫助且易於閱讀。隨時在下方留言提出任何問題。

乾杯！

{{/isPost}}

---