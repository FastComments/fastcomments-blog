---
[category:API & Development]

###### [postdate]
# [postlink]Webhook 结构变更[/postlink]

{{#unless isPost}}
我们对 webhook 结构进行了某些行为相关的更改。
{{/unless}}

{{#isPost}}

### 新变化

在 2023 年 11 月 14 日之前，我们对 webhook 做了以下更改：

#### 更新 Webhooks

**之前**，更新将包含评论的最新版本。如果两个用户快速连续地对评论投票，这将触发两个 webhook。然而，可能会出现第一个 webhook 事件包含 **最新版本** 的情况，从而导致两个相同的 webhook 事件：

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**从 11 月 14 日起**，每个 webhook 事件是幂等的，并包含更改时的评论对象。在上述示例中，您现在将获得两个事件：

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### 删除 Webhooks

**之前**，删除的 webhook 仅包含评论 ID。这是一个类似于 `{ id: string }` 的对象。

**从 11 月 14 日起**，删除的 webhook 将包含移除时的 **整个** 评论对象。

### 总结

像所有主要版本一样，我们很高兴能够花时间优化、测试并正确发布此功能。如果您发现任何问题，请在下面告诉我们。

干杯！

{{/isPost}}

---