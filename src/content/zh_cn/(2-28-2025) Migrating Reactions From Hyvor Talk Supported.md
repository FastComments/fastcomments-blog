---
[category:Migration]

###### [postdate]
# [postlink]支持从 Hyvor Talk 迁移反应[/postlink]

{{#unless isPost}}
当您从 Hyvor Talk 导入数据导出时，我们现在可以迁移您的页面级反应。
{{/unless}}

{{#isPost}}

### 新功能

当您导入评论以从 Hyvor Talk 迁移时，FastComments 现在可以导入您的页面反应。此外，我们会检测页面上的评论线程是否已关闭，并迁移该状态。

重新运行导入将不会导致计数重复或丢失导入前的任何反应值。

### 如何设置反应

页面反应的显示不是自动的。要开始，您需要更新您的小部件配置：

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // 星星眼
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // 红心
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // 张嘴的脸
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // 哭泣的脸
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // 喜极而泣的脸
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // 生气的脸
            ]
        }
    });
</script>
```

这些 ID 必须与 Hyvor Talk 导出的 ID 匹配。这个示例使用了正确的值。

您需要自己提供反应图像。可以使用任何格式，包括 gif。上述示例使用了一些来自 OpenMoji 项目的反应图像。

### 总结

像所有重大版本一样，我们很高兴能花时间来优化、测试并妥善发布此功能。如果您发现任何问题，请在下方告知我们。

干杯！

{{/isPost}}