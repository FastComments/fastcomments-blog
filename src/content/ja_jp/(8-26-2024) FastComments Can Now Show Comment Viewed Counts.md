---
[category:Analytics]
###### [postdate]
# [postlink]FastCommentsはコメントの閲覧数を表示できるようになりました[/postlink]

{{#unless isPost}}
FastCommentsは、各コメントの隣にカウントを表示する機能をサポートしています。これは、ユーザーがコメントを閲覧するたびにリアルタイムで増加します。
{{/unless}}

{{#isPost}}

### 新機能

FastCommentsは、各コメントの隣にカウントを表示する機能をサポートしています。コメントが閲覧されたかどうかは、ユーザーのアカウントまたは匿名セッションによって決まります。SSO（Secure SSOおよびSimple SSOの両方）をサポートしています。

### ライブデモ

このブログ投稿のために、コメント閲覧数を有効にしました！各コメントの目の横にあるカウントを確認してください！

### ドキュメント

[こちらで閲覧数を設定するための開発者ドキュメントを見つけることができます。](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### パフォーマンス

カウントは即座には更新されません。カウントが集計され、ネットワーク経由で送信されるまでに小さな遅延（最大3秒）が発生します。これは最適化の一環であり、例えばライブイベントがあり、数千人がページ上で平均して10件のコメントを閲覧する場合に、毎ユーザーに対して瞬時に何百万もの更新（`3000 users x 3000 page loads = ~9 million changes`）を送信して、彼らのブラウザを重くしたり、すべてのネットワーク帯域を使用したりしないようにするためです。

### 結論

継続的なフィードバックを寄せてくださるお客様に感謝します。そうすることで、私たちはこのようなアイデアを考えたり、十分に最適化された機能を立ち上げたりする時間をいただけます。今後もFastCommentsを愛していただけることを願っています。

乾杯！

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---