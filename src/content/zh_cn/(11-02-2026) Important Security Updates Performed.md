[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]已执行重要安全更新[/postlink]

{{#unless isPost}}
我们已在所有服务器上修补了操作系统，以修复最近的 Linux TCP 漏洞，并更新了 Node.js 以获取其十月安全发布。您无需采取任何操作。
{{/unless}}

{{#isPost}}

### 新内容

我们最近在 FastComments 基础设施中完成了两项安全更新：一次操作系统更新以修复 Linux 内核 TCP 代码中的漏洞，以及一次 Node.js 更新以获取最新的安全发布。

### Linux 内核

我们所有的服务器已完成补丁更新，现在运行的内核已包含对 <a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a> 的修复。

这是一种内核 IPv4 TCP 代码中的使用后释放（use‑after‑free）漏洞。内核可能在另一个 CPU 仍在读取连接附带的 IP 选项时就释放它们，例如在 TCP 握手期间构建 SYNACK 响应时。该修复会等到没有 CPU 仍在读取该内存后才释放它。

### Node.js

FastComments 运行在 Node.js 上，我们已更新至 24.22.1 版本，这是 24.x 系列的已修补发布，来源于 <a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">2026 年十月 Node.js 安全发布</a>。

该发布修复了受支持的 Node.js 版本中的 10 个漏洞。其中 8 个影响 24.x 系列，且其中 4 个被评为高危：两个涉及 TLS 对 IP 地址的验证，一个涉及 DNS 名称处理，另一个涉及 Brotli 解码器。它还更新了捆绑的依赖项，包括 OpenSSL、c-ares、Undici 和 CA 证书捆绑包。

### 您需要做什么

无需操作。这些更新全部在我们这边完成，您的小部件、API 集成和 SSO 配置无需任何更改。

### 结论

保持我们的基础设施及时打补丁是运行 FastComments 的持续工作，我们将继续在发布时应用此类更新。如果您有任何疑问，请在下方告诉我们。

祝好!

{{/isPost}}

---