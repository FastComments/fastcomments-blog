---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]將評論添加到您的 D2L Brightspace 課程[/postlink]

{{#unless isPost}}
FastComments 現在可以通過 LTI 1.3 動態註冊在 D2L Brightspace 中一步安裝，為每個課程單元提供自動 SSO、 threaded comments 和協作聊天。
{{/unless}}

{{#isPost}}

### 新功能

FastComments 現在通過 IMS LTI 1.3 Advantage 標準支持 D2L Brightspace，包括動態註冊。
這意味著不需要安裝插件，不需要協調密鑰交換，也無需每個課程的接線。您的 Brightspace
管理員只需將一個 URL 粘貼到 LTI Advantage 註冊屏幕中，FastComments 和 Brightspace 將自動完成
握手。然後，講師以與添加其他外部工具相同的方式將 FastComments 添加到任何單元中，學生可以在課程內容中看到嵌入式的 threaded comments。

<div class="text-center">
    <div class="sm">嵌入 Brightspace 單元內的主題的 threaded comments</div>
    <img src="images/d2l-course-comments.png" alt="FastComments 在 D2L Brightspace 單元中運行" title="FastComments 在 Brightspace 單元上" />
</div>

### 開始使用

從您的 FastComments 儀表板，打開 [LTI 1.3 配置頁面](https://fastcomments.com/auth/my-account/lti-config)，
從平台下拉選單選擇 **D2L Brightspace**，然後點擊 **生成 URL**。您將獲得一個有效期為 30 分鐘的單次使用註冊 URL。

在 Brightspace 中，您的管理員打開 **Admin Tools > Manage Extensibility > LTI Advantage > Register Tool**，將
URL 粘貼到 **Tool initiation registration endpoint** 欄位中並提交。Brightspace 與 FastComments 進行註冊握手，
交換簽名密鑰，並創建工具條目。當完成時，彈出窗口會自動關閉。

註冊後，管理員啟用該工具並創建一個範圍針對應有訪問權限的組織單位的部署。從那時起，FastComments 將在每個課程的內容選擇器中顯示在 **添加現有** 下。

### 添加到課程

在任何課程單元中，講師點擊 **Add Existing**，從活動列表中選擇 **FastComments**，該工具將作為單元中的一個主題進行放置。重新命名主題、在單元內重新排序、對特定組或發布條件進行限制以及切換可見性都使用標準的 Brightspace 控制。對講師來說，沒有單獨的 FastComments 設定屏幕需要學習。

對於內嵌使用，FastComments 工具還可以通過 Brightspace HTML 編輯器的 **Insert Stuff**
對話框中的 **LTI Advantage** 使用。這將使用 LTI 深鏈接流程直接在閱讀、測驗說明或任何其他 HTML 主題內放置一個評論線程，讓討論與其相關內容並排顯示。

### 自動 SSO

學生永遠不會看到登錄屏幕。LTI 1.3 啟動攜帶學生的 Brightspace 身份（`sub`、`name`、`email` 和 `picture`）由 Brightspace 的私鑰簽名。FastComments 對簽名進行驗證，並根據 Brightspace 發佈的 JWKS，為用戶創建安全 SSO 會話並渲染評論小部件。評論歸屬於學生的 Brightspace 帳戶，講師也使用他們的 Brightspace 身份進行審核。

角色映射是自動的。Brightspace **Administrator** 使用者作為 FastComments 管理員進入，**Instructor** 使用者作為審核者，而其他所有人作為標準評論者。在 FastComments 方面無需維護單獨的用戶列表 - 它遵循 Brightspace 的所有說明。

### 線程範圍

每個評論線程都綁定到三個要素：Brightspace 主機、課程和資源鏈接。這意味著兩個都使用 "Reading Reflections" 主題的課程，各自獲得自己的討論。如果講師在同一課程中兩次添加 FastComments（例如，作為單元主題和作為內嵌在 HTML 頁面中的內容） - 每個放置都是自己的線程。

主機部分是線程標識的一部分，這是故意的。如果您的機構在一個 FastComments 帳戶下運行多個 Brightspace 實例，則即使課程 ID 發生衝突，對話仍會保持在每個實例之中隔離。

### 總結

如果您正在運行 D2L Brightspace，您可以在一個下午內啟用 FastComments：生成 URL，將其粘貼到 Brightspace，讓講師將工具放入其單元中。欲查看完整的逐步設置，包括故障排除和每頁截圖，請參見
[LTI 1.3 安裝指南](https://docs.fastcomments.com/guide-installation-lti-1p3.html)。同樣的集成也支持 Moodle、Blackboard、Sakai、Schoology 以及任何其他 LTI 1.3 Advantage 平台，但 Brightspace 是我們的試點目標，該流程在那裡運行穩定。

乾杯！

{{/isPost}}

---