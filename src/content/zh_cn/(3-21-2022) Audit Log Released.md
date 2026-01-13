---
[category:Security]

###### [postdate]
# [postlink]审核日志发布[/postlink]

{{#unless isPost}}FastComments 现在提供了通过平台进行的所有修改的详细日志。{{/unless}}

{{#isPost}}

### 新内容

从三月开始，FastComments 新增了审核功能，适用于 Pro 计划和所有现有企业客户。

所有管理操作，无论是数据访问、修改评论还是解禁用户，都在审核日志中被跟踪和索引。

### 如何使用

可以通过前往 `管理数据`，然后选择 `审核日志` 来访问审核日志。直接链接 [在这里](https://fastcomments.com/auth/my-account/manage-data/audit-logs)。

首先，您将看到如下页面：

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="审核日志" />
</div>

在这里，您可以按用户名、IP 地址、操作类型或资源进行搜索。

例如，按资源进行过滤：

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="审核日志资源选择" />
</div>

我们还可以深入审查审核日志中的某个条目的详细信息，甚至看到被更改的相关对象。

例如，我们可以查看一个禁止用户的条目：

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="审核日志条目详情" />
</div>

在这里，我们可以看到是谁禁止了该用户（用户名为 `winrid` 的用户）。我们可以看到这是一个永久禁止，我们还可以看到被禁止的用户 ID 和电子邮件，以及他们被禁止的原因。

我们可以看到创建禁止的 IP，但原评论者的 IP 出于隐私原因被故意省略。

要查看 `winrid` 的所有事件，我们只需点击右侧用户名旁边的过滤图标。

### 限制访问

审核日志中的数据只有具有 `管理数据` 权限的用户才能访问。

### 保留期

审核日志中的所有条目保留两年。但如果您的帐户被删除，审核日志将被清除。

### API 访问

[审核日志 API 的文档在这里。](https://docs.fastcomments.com/guide-api.html#audit-log-structure) 您会发现审核日志可以根据您的使用案例以多种方式进行排序和分页。

### 现有客户

如果您在 Pro 或等效计划中，您会发现审核日志已自动启用！如果您想获取访问权限，请联系您的支持代表。

### 省略的内容

唯一省略的更改类型是实际的评论及其投票。这是因为我们发现客户主要对审核时的管理方面感兴趣，而不一定对审核评论内容感兴趣。这些类型的操作也会给日志增加相当大的噪音。

但是，如果这是一个要求，请联系以便我们可以讨论如何为您启用此功能。

### 总结

我们希望您觉得我们的这一功能有用，用户界面易于使用，API 响应迅速。 

干杯！

{{/isPost}}

---