---

[category:Features]
###### [postdate]
# [postlink]ページリアクションが開始されました[/postlink]

{{#unless isPost}}
FastCommentsは、コメントウィジェットの上にカウントと共にページリアクションを表示することをサポートしました。
{{/unless}}

{{#isPost}}

### 新機能

FastCommentsはすでに、コメントエリアの上に星評価、NPS、またはその他の質問を表示できるフィードバックモジュールをサポートしていました。

しかし、多くのユーザーはよりシンプルなものを求めています - コメントウィジェットの上にリアクションのアイコンをいくつか表示し、それらのアイコンをカスタマイズでき、ユーザーごとにオプションをカスタマイズできることを望んでいます。

本日、私たちはこの機能を開始しました。

すべてのFastCommentsプランでページリアクションにアクセスできます。

### ライブデモ

このブログ投稿のために特にデモのページリアクション設定を有効にしました。以下をご覧ください！

### ドキュメンテーション

[ページリアクションの設定に関する開発者ドキュ mentationはここにあります。](https://docs.fastcomments.com/guide-page-reacts.html)

### リアクションユーザーリスト

ページリアクションは、特定のリアクションを残したユーザーのリストを表示するツールチップを表示するように設定することも可能です。

### 結論

私たちは、こうしたアイデアを考え出すための継続的なフィードバックを提供してくださるお客様に感謝いたします。また、よく最適化された機能を立ち上げるための時間をいただけることにも感謝しています。引き続きFastCommentsをお楽しみいただければ幸いです。

乾杯！

<script>
    window.demoOverrides = {
        pageReactConfig: {
            showUsers: true,
            reacts: [
                {id: 'droll', src: 'https://docs.fastcomments.com/images/emojis/droll.png'},
                {id: 'he', src: 'https://docs.fastcomments.com/images/emojis/heart-eyes.png'},
                {id: 'laugh', src: 'https://docs.fastcomments.com/images/emojis/laugh.png'},
                {
                    id: 'puke',
                    src: 'https://docs.fastcomments.com/images/emojis/puke.png',
                    selectedSrc: 'https://docs.fastcomments.com/images/emojis/puke-bw.png'
                },
                {id: 'rofl', src: 'https://docs.fastcomments.com/images/emojis/rofl.png'},
            ]
        }
    }
</script>

{{/isPost}}

---