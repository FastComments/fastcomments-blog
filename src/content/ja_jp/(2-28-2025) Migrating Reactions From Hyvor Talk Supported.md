---
[category:Migration]

###### [postdate]
# [postlink]Hyvor Talkからのリアクションの移行がサポートされるようになりました[/postlink]

{{#unless isPost}}
Hyvor Talkからのデータエクスポートをインポートする際に、ページレベルのリアクションを移行できるようになりました。
{{/unless}}

{{#isPost}}

### 新機能

Hyvor Talkからコメントを移行するためにインポートする際に、FastCommentsはページリアクションをインポートできるようになりました。また、ページ上のコメントスレッドが閉じているかどうかを検出し、そのステータスも移行します。

インポートを再実行しても、カウントが重複したり、インポート前のリアクション値が失われたりすることはありません。

### リアクションの設定方法

ページリアクションの表示は自動ではありません。まず、ウィジェットの設定を更新する必要があります：

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // 驚き
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // 赤いハート
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // 開いた口の顔
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // 泣いている顔
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // 喜びの涙の顔
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // 怒った顔
            ]
        }
    });
</script>
```

idはHyvor Talkのエクスポートのものと一致しなければなりません。この例では正しい値を使用しています。

自身でリアクション画像を用意する必要があります。フォーマットはgifを含む任意のものを使用できます。上記の例はOpenMojiプロジェクトのものを使用しています。

### 結論

すべての主要なリリースと同様に、この機能を最適化し、テストし、適切にリリースできたことを嬉しく思います。何か問題を発見した場合は、下記でお知らせください。

よろしくお願いします！

{{/isPost}}

---