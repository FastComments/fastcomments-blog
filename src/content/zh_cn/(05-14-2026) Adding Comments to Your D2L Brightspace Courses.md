---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]将评论添加到您的 D2L Brightspace 课程中[/postlink]

{{#unless isPost}}
FastComments 现在通过 LTI 1.3 动态注册以单个步骤安装到 D2L Brightspace 中，并为每个课程单元提供自动 SSO、线程评论和协作聊天。
{{/unless}}

{{#isPost}}

### 新功能

FastComments 现在通过 IMS LTI 1.3 优势标准支持 D2L Brightspace，包括动态注册。
这意味着无需安装插件，无需协调密钥交换，也无需逐课程接线。您的 Brightspace
管理员只需将一个 URL 粘贴到 LTI 优势注册屏幕中，FastComments 和 Brightspace 会自动完成
握手。然后，讲师可以以与添加其他外部工具相同的方式将 FastComments 添加到任何单元，学生在课程内容中看到嵌入的线程评论。

<div class="text-center">
    <div class="sm">作为 Brightspace 单元内主题嵌入的线程评论</div>
    <img src="images/d2l-course-comments.png" alt="FastComments 在 D2L Brightspace 单元中运行" title="FastComments 在 Brightspace 单元上" />
</div>

### 开始使用

在您的 FastComments 仪表板中，打开 [LTI 1.3 配置页面](https://fastcomments.com/auth/my-account/lti-config)，
从平台下拉菜单中选择 **D2L Brightspace**，然后点击 **生成 URL**。您将获得一个有效期为 30 分钟的一次性注册 URL。

在 Brightspace 中，您的管理员打开 **管理员工具 > 管理扩展性 > LTI 优势 > 注册工具**，将
该 URL 粘贴到 **工具初始化注册端点** 字段中，然后提交。Brightspace 与 FastComments 完成注册握手，
交换签名密钥，并创建工具条目。完成后弹窗自动关闭。

注册后，管理员启用该工具并创建一个针对应有访问权限的组织单元的部署。从此，FastComments 会出现在每个课程的内容选择器下的 **添加现有** 选项中。

### 添加到课程

在任何课程单元内，讲师点击 **添加现有**，从活动列表中选择 **FastComments**，并将该工具放置为单元中的主题。重命名该主题、重新排序、限制为特定组或发布条件，以及切换可见性，都使用标准的 Brightspace 控件。没有单独的 FastComments 设置屏幕供讲师学习。

对于内嵌，Brightspace HTML 编辑器的 **插入内容** 对话框下同样可以使用 FastComments 工具，选择 **LTI 优势**。这使用 LTI 深度链接流将评论线程直接放置在阅读材料、测验说明或任何其他 HTML 主题内部，因此讨论内容紧邻其相关内容。

### 自动 SSO

学生从未看到登录屏幕。LTI 1.3 启动会传递学生的 Brightspace 身份（`sub`、`name`、`email` 和 `picture`），由 Brightspace 的私钥签名。FastComments 根据 Brightspace 发布的 JWKS 验证签名，为用户创建安全的 SSO 会话，并呈现评论小部件。评论归属于学生的 Brightspace 帐户，讲师也使用他们的 Brightspace 身份进行审核。

角色映射是自动的。Brightspace 的 **管理员** 用户以 FastComments 管理员的身份进入，**讲师** 用户作为审核员，而其他用户则作为普通评论者。FastComments 端没有单独的用户列表需要维护 - 它遵循 Brightspace 的任何说法。

### 线程作用域

每个评论线程都绑定到三元组：Brightspace 主机、课程和资源链接。这意味着使用相同“阅读反思”主题的两个课程各自会有自己的讨论。如果讲师在同一课程中两次添加 FastComments（例如，一次作为单元主题，一次作为内嵌在 HTML 页面内） - 每个放置都是独立的线程。

主机部分有意成为线程标识符的一部分。如果您的机构在一个 FastComments 帐户下运行多个 Brightspace 实例，即使课程 ID 冲突，谈话仍会保持隔离。

### 总结

如果您正在使用 D2L Brightspace，您可以在一个下午内轻松启用 FastComments：生成 URL，将其粘贴到 Brightspace 中，让讲师将该工具放置到他们的单元中。有关完整的逐步设置，包括故障排除和每页截图，请参见
[LTI 1.3 安装指南](https://docs.fastcomments.com/guide-installation-lti-1p3.html)。同样的集成也覆盖 Moodle、Blackboard、Sakai、Schoology 以及任何其他 LTI 1.3 优势平台，但 Brightspace 是我们的首个目标，该流程在这里非常稳定。

干杯！

{{/isPost}}

---