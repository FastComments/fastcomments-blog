---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]如何防止您的評論中出現垃圾信息[/postlink]

沒有辦法完全消除垃圾信息。但 FastComments 採取了一些措施來提供幫助。

{{#isPost}}

## 站點管理員文檔

FastComments 的默認安裝已啟用垃圾信息和粗俗語言過濾。

這些默認設置在防止垃圾信息和對大多數社區不過於干擾之間取得了平衡。

[您可能想查看管理指導](https://docs.fastcomments.com/guide-moderation.html)。

## 工作原理

我們的垃圾信息過濾器使用 [朴素貝葉斯分類器](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) 來識別垃圾信息。

它是根據管理員標記為垃圾信息和非垃圾信息的內容隨時間進行訓練的。

FastComments 在您的網站上以 iframe 方式運行。這使得自動垃圾信息機器人更難針對您的評論區。 不過，如果它們的評論被我們的分類器判斷為“垃圾信息”，這些評論將對您的用戶隱藏。與所有其他評論一樣，它們也在控制面板的 [審核頁面](https://fastcomments.com/auth/my-account/moderate-comments) 中標記為“需要審核”。

然而，粗俗語言過濾默認不會導致評論被隱藏。它只會用星號遮掩“髒話”。

## 完全阻止垃圾信息

默認情況下，FastComments 會允許垃圾信息，但隱藏它並標記為待審核。

如果您希望告知用戶他們的評論被檢測為垃圾信息，並要求他們修訂，可以在 [審核設置](https://fastcomments.com/auth/my-account/moderate-comments/settings) 中啟用 `阻止垃圾信息` 設置來實現。

## 隱藏粗俗評論

通過在 [審核設置](https://fastcomments.com/auth/my-account/moderate-comments/settings) 中啟用 `自動將粗俗評論發送到垃圾信息` 可隱藏粗俗評論。

## 設置

粗俗語言和垃圾信息過濾都可以在 [審核設置](https://fastcomments.com/auth/my-account/moderate-comments/settings) 頁面中單獨關閉。

## 評論驗證

FastComments 實施了一套驗證系統，默認情況下，[未驗證評論](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) 會標記為所有用戶可見。

通過允許用戶在未完全登錄的情況下進行評論，這降低了參與討論的門檻。未驗證標籤可以通過自定義規則隱藏。

未驗證的評論默認顯示，但可以隱藏，直到通過電子郵件驗證，啟用 `僅自動批准已驗證的評論`。

請注意，使用單一登錄 (SSO) 時，所有評論始終是經過驗證的。如果用戶在已驗證的會話中登錄，他們的評論也將始終被驗證。

未驗證的評論也可以安排刪除。

## 對評論者的建議

如果您的評論被檢測為垃圾信息，您會立即看到一條消息。這是為了讓您知道該評論必須在顯示給其他人之前進行審核。垃圾信息檢測不能做到 100% 準確，因此我們理解如果您感到一些挫折。如果您的評論是合法的，網站管理員應該能夠識別並將您的評論標記為非垃圾信息。

{{/isPost}}