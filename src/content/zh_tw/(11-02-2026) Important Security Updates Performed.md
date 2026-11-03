[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]已執行重要安全更新[/postlink]

{{#unless isPost}}
我們已在所有伺服器上修補作業系統，以修復最近的 Linux TCP 漏洞，並更新 Node.js 以取得其十月的安全發佈。您無需採取任何行動。
{{/unless}}

{{#isPost}}

### 新增內容

我們最近在 FastComments 基礎設施中完成了兩項安全更新：一項作業系統更新以修復 Linux 核心 TCP 程式碼中的漏洞，另一項 Node.js 更新以取得最新的安全發佈。

### Linux 核心

我們所有的伺服器已完成修補，現在執行的核心已包含對 <a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a> 的修正。

這是核心 IPv4 TCP 程式碼中的 use-after-free 漏洞。核心可能在另一個 CPU 仍在讀取 IP 選項時就釋放了連線所附帶的 IP 選項，例如在 TCP 握手期間建立 SYNACK 回覆時。此修正會等到沒有任何 CPU 仍在讀取該記憶體後才釋放它。

### Node.js

FastComments 運行於 Node.js，我們已更新至 24.22.1 版，這是 24.x 系列在 <a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">2026 年十月 Node.js 安全發佈</a>中的修補版本。

該發佈修復了支援的 Node.js 版本中的 10 個漏洞。其中 8 個影響 24.x 系列，且其中 4 個被評為高危險等級：兩個涉及 TLS 對 IP 位址的驗證，一個涉及 DNS 名稱處理，另一個涉及 Brotli 解碼器。它同時更新了捆綁的相依套件，包括 OpenSSL、c-ares、Undici 與 CA 憑證捆綁。

### 您需要做什麼

無需任何操作。這些更新全部由我們端完成，您的小工具、API 整合與 SSO 設定皆不需要變更。

### 總結

保持我們的基礎設施持續更新是運營 FastComments 的持續工作，我們將持續在新發佈時套用此類更新。如有任何問題，請在下方告訴我們。

敬上！

{{/isPost}}