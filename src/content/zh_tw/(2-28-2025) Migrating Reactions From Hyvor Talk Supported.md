---
[category:Migration]

###### [postdate]
# [postlink]現在支援從 Hyvor Talk 遷移反應[/postlink]

{{#unless isPost}}
當您從 Hyvor Talk 匯入數據導出時，我們現在可以遷移您的頁面級反應。
{{/unless}}

{{#isPost}}

### 新聞動態

當您匯入評論以從 Hyvor Talk 遷移時，FastComments 現在可以匯入您的頁面反應。此外，我們還會檢測評論線程在頁面上是否為關閉狀態，並遷移該狀態。

重新運行匯入不會導致計數重複或丟失匯入前的任何反應值。

### 如何設置反應

頁面反應的顯示不是自動的。要開始使用，您需要更新您的小部件配置：

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // 驚艷
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // 紅心
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // 張嘴的臉
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // 哭泣的臉
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // 泣不成聲的臉
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // 生氣的臉
            ]
        }
    });
</script>
```

這些 id 必須與 Hyvor Talk 匯出中的一致。這個例子使用了正確的值。

您需要自行獲取反應圖片。它們可以是任何格式，包括 GIF。上述例子使用了一些來自 OpenMoji 項目的圖片。

### 總結

就像所有主要版本一樣，我們很高興能夠花時間優化、測試並妥善發佈此功能。如果您發現任何問題，請在下方告訴我們。

乾杯！

{{/isPost}}

---