---
[category:Features]
###### [postdate]
# [postlink]使用FastComments排序评论线程[/postlink]

{{#unless isPost}}
自推出以来，FastComments不允许您更改评论线程的排序顺序。这个版本改变了这一点！
{{/unless}}

{{#isPost}}

#### 目标受众

本文的目标受众包括管理员和评论者。

#### 介绍

评论一直是根据它们的年龄和声望（赞成票 + 反对票）进行排序的。到目前为止，这是唯一允许的排序方向。

#### 新的排序方向

FastComments评论小部件现在额外支持按最新和最旧优先排序。

#### 更改排序方向

当顶级评论的数量大于一个时，将出现一个新的下拉菜单以允许更改排序方向。

<div class="text-center">
    <img src="images/fc-sort-dropdown.png" alt="排序选择下拉菜单" title="排序选择下拉菜单" />
</div>

选择最新或最旧优先时，我们不考虑评论的声望。

#### 更改默认排序方向

虽然默认排序方向是最相关，但可以通过创建一个<a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">自定义规则</a>轻松地进行自定义。

#### 保持快速

为了让FastComments继续名副其实，已经投入相当多的时间来确保各类排序得到了良好优化。评论在发布时即被排序，因此在加载页面时不会实际进行排序。这确保了加载评论小部件和更改排序方向的速度，无论您有多少条评论。

#### 总结

我们希望您发现此更新有帮助。如有任何问题，请随时在下方评论。

干杯！

{{/isPost}}

---