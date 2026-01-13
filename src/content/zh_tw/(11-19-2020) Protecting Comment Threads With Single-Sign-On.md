---
[category:Security]

###### [postdate]
# [postlink]使用單一登入保護評論線程[/postlink]

{{#unless isPost}}
不認為您的評論線程是公開的？已設置SSO進行身份驗證？那這可能適合您。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

#### 介紹

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(詳細信息在這裡)</a> 為您的用戶提供了 
不必登錄到其他平台就能評論的方法。

然而，僅此一點無法保護您的評論線程，因為默認情況下評論數據是公開可用的信息 - 任何能夠查看該頁面的人都可以查看評論。然而，這個版本改變了這一點。

#### 無需代碼的設置

當設置了SSO後，我們可以通過創建一個<a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">自定義規則</a>來防止觀看和互動我們的評論線程。

在這樣做時，搜索SSO，您將找到此選項：

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="通過SSO鎖定評論的配置選項" alt="通過SSO鎖定評論的配置選項" class="lozad" />
</div>

啟用它並保存自定義規則。

#### 僅保護特定域或頁面

要僅保護特定域或頁面，我們只需配置自定義規則來實現。

在自定義界面的頂部，我們會看到兩個輸入框，域和URL ID。

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="按頁面或域配置的選項" alt="按頁面或域配置的選項" class="lozad" />
</div>

要僅保護特定域，請在“域”欄位中輸入相關域名。

要保護特定頁面，請在“URL ID”欄位中輸入頁面URL。如果您與FastComments有自定義集成，則可以在這裡輸入一種類型的ID，而不是URL。

#### 超越閱讀的保護

啟用此選項將保護該頁面或域，避免評論除非用戶通過SSO登錄。

#### 注意事項

在您的SSO集成之前創建的任何評論將無法被那些用戶看到，除非他們通過您的SSO集成登錄。

#### 結論

我們希望您覺得這篇指南有幫助且易於閱讀。隨時在下方評論，提出任何問題。

乾杯！

{{/isPost}}

---