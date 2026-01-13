---
[category:UI & Customization]
###### [postdate]
# [postlink]在移动设备上的FastComments - 更少的空白更多内容[/postlink]

{{#unless isPost}}
我们改善了FastComments在移动设备上的可读性和外观。
{{/unless}}

{{#isPost}}
#### 问题

当我们首次发布FastComments时，我们希望设计既美观又适用于移动端和桌面浏览器。然而，随着我们添加更多功能并观察用户与FastComments的互动，我们意识到在移动UI上浪费了屏幕空间，试图让其“好看”。

因此，我们提出了一个折中方案。

#### 解决方案

在这里你可以看到之前的设计，我们没有有效利用空间。

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="移动版本之前"
        title="移动版本之前"
        class='lozad' />
</div>

现在，我们用水平屏幕空间换取了垂直屏幕空间。

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="移动版本之后"
        title="移动版本之后"
        class='lozad' />
</div>

    
#### 自定义规则的影响

我们意识到，当我们对公共评论小部件进行样式更改时，可能会破坏客户的自定义样式。别担心，我们已经为你考虑周全，并检查了所有人的自定义小部件样式以确保其没有损坏。然而，如果你发现问题，请告诉我们。

#### 性能影响

此更改使小部件的大小增加了约300字节，总计达到10.1kb。与所有增加小部件大小的版本一样，我们将寻找方法将其恢复到更小。

祝你评论愉快！

{{/isPost}}

---