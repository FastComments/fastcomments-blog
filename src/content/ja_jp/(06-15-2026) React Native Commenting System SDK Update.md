---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native コメントシステム SDK のアップデート[/postlink]

{{#unless isPost}}
私たちは fastcomments-react-native-sdk をゼロから再構築しました：新しく、より効率的なステート管理、デザイントークンを使用した再設計、専用のライブチャットウィジェット、そして一流のウェブサポートです。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事には専門用語が含まれています

### 新機能

私たちは、コメントやチャットをリアルネイティブコンポーネントでレンダリングする React Native ライブラリ `fastcomments-react-native-sdk` のバージョン 5.1 を出荷しました。

内部を再構築し、全体の見た目を再デザインし、ライブチャットウィジェットを追加し、SDK をウェブに持ち込み、最新の React Native と React にアップグレードしました。

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, light theme" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, dark theme" title="FastComments React Native SDK, dark theme" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### なぜ2つのReact Nativeライブラリがあるのか？

この質問を受けることが多いので、お知らせします。私たちは2つのオプションを提供しています：

- `fastcomments-react-native` は、ウェブウィジェットを WebView で実行するための薄いラッパーです。これがすべての機能を瞬時に得る最速の方法であり、自動的にウェブの修正を享受できます。
- `fastcomments-react-native-sdk`（これです）は、WebViewなしでネイティブの React Native コンポーネントで UI をレンダリングします。より柔軟で、テーマ設定が可能で、ネイティブであるため、ネイティブのように感じます。

最高の体験のために SDK を推奨します。この投稿の残りは、5.0 での変更点についてです。

### 新しいステート管理

この変更の主な理由は、私たちのライブラリが名前に忠実であり続け、高速であることです。いくつかの顧客がそのパフォーマンスについて不満を述べたので、これが修正されました。

SDK は元々、Hookstate にコメントツリーを保持していました。動作はしましたが、スレッドやライブアップデートが増えると、物事が遅くなり始めました。

私たちは Hookstate を Zustand とフラットなインデックス付きストアに置き換えました。コメントは現在、ステートに入ったツリーの中にネストされるのではなく、`byId` マップと `childrenByParent`、`rootOrder`、および `pinnedIds` インデックスの横に存在します。

その結果：

- ライブイベント（新しいコメント、投票、編集）は、ツリーを歩いて複製するのではなく O(1) の突然変異になりました。
- 毎回のフェッチで実行されていた2つのフルツリー JSON 深いクローンを削除しました。
- コンポーネントは、標準的なセレクターモデルとして、読み取るスライスに正確にサブスクライブします。したがって、1つのコメントへの投票は、1つのコメントにのみ影響を与えます。

最後のポイントは、それほど単純ではありません。セレクターベースのサブスクリプションでは、行は自身のデータが変更されたときのみ再描画されます。

### トークンベースの再設計

古い見た目は、ハードコードされたスタイルの山でした。新しいデフォルトは、セマンティックデザイントークンのセット（`FastCommentsTheme`）から生成されます：色、間隔、半径、フォントサイズ、フォントウェイト、およびアバターサイズ。スタイルツリー全体はこれらのトークンから導かれます。

つまり、スタイル変更は1つのプロップで行えます：

```tsx
<FastCommentsLiveCommenting config={config} theme={{ colors: { primary: '#FF5500' } }}/>
```

ダークモードは1つのトークンセットで実現できます：

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

再設計自体は、よりクリーンで現代的な中立的な見た目になります：細いセパレーター、ピル型の投票ボタンとチップ、満たされたプライマリボタン、丸みを帯びたアバター、一貫したタイポグラフィスケール。`styles` プロップは、外科的なオーバーライドのためにまだ存在しており、既存の統合は引き続き機能します。

### 専用のライブチャットウィジェット

私たちは `FastCommentsLiveChat` を追加しました。同じエンジン上のチャットプリセットで、Android SDK のチャットビューを反映します：最新のメッセージが下部にある時間順のメッセージ、リストの下に作成者、接続ドットとユーザー数を示すライブヘッダー、古いメッセージを読む間に一時停止する自動スクロール、スクロールアップ中の無限履歴。すべてのプリセットは `config` を通じてオーバーライド可能です。

```tsx
<FastCommentsLiveChat config={{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### ウェブでも利用可能

同じ SDK が `react-native-web` を通じてウェブ上で動作します。リッチテキストコンポーザー（`react-native-enriched` によって駆動）は、iOS、Android、およびブラウザで同じようにレンダリングされるため、編集体験は一貫しており、単一の実装で整えられています。コメントリストがクリップするようなオーバーレイ（メニュー、GIF ピッカー、通知リスト）は、ウェブビルドでトリガーの下に配置されています。

### React Native に追いつく

5.0 は React Native 0.81 と React 19 に対してビルドおよびテストされており、ネイティブリッチテキストエディタが必要とする新しいアーキテクチャ（Fabric）をターゲットにしています。ここで最新の状態を維持することは単なる作業ではありません：エディタ、ジェスチャ処理、レンダリングはすべて、React Native が前進するにつれてより高速かつ正確になります。私たちは、何年も遅れを取るよりも、これらのアップグレードを着実に受け取る方が良いと考えています。

### 結論

この書き換えは、React Native SDK に他のライブラリと同じ一流の地位を与えることを目的としていました：迅速で予測可能なデータモデル、1つのプロップでテーマ設定できる外観、チャットウィジェット、そしてウェブサポート、すべて現代の React Native 基盤の上にあります。

SDK は <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> で見つけることができ、例と共にソースは <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a> で入手できます。問題があれば、下記でお知らせください。

乾杯！

{{/isPost}}