---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native コメントシステム SDK アップデート[/postlink]

{{#unless isPost}}
私たちは fastcomments-react-native-sdk を一から再構築しました：新しい、より効率的な状態管理、デザイントークンを利用した再設計、専用のライブチャットウィジェット、そして一級のウェブサポート。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事には技術用語が含まれています

### 新機能

私たちは、コメントとチャットを実際のネイティブコンポーネントで表示する React Native ライブラリ `fastcomments-react-native-sdk` のバージョン 5.1 をリリースしました。

内部を再構築し、全体の外観を再設計し、ライブチャットウィジェットを追加し、SDK をウェブに対応させ、最新の React Native と React にアップグレードしました。

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, light theme" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, dark theme" title="FastComments React Native SDK, dark theme" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### なぜ二つの React Native ライブラリ？

この質問をよく受けるので、簡単に説明します。私たちは二つのオプションを提供しています：

- `fastcomments-react-native` は、WebView で実行されるウェブウィジェットの薄いラッパーです。すべての機能を即座に利用できる最も速い方法で、ウェブ修正から自動的に恩恵を受けます。
- `fastcomments-react-native-sdk` （これです）は、WebViewなしでネイティブ React Native コンポーネントを用いて UI をレンダリングします。より柔軟で、完全にテーマ化可能で、ネイティブなのでネイティブな感覚が得られます。

最高の体験のために SDK をお勧めします。この投稿の残りは、5.0 での変更内容についてです。

### 新しい状態管理

この変更の主な目的は、私たちのライブラリが私たちの名前にふさわしく、Fast であり続けることを保証することです。いくつかの顧客からパフォーマンスについて苦情があったため、これが修正されました。

SDK は元々、Hookstate にコメントツリーを保持していました。動作はしていましたが、スレッドやライブ更新が増えるにつれて、物事が遅くなり始めました。

私たちは Hookstate を Zustand とフラットなインデックスストアに置き換えました。コメントは、状態内にネストされたツリーではなく、`byId` マップと `childrenByParent`、`rootOrder`、`pinnedIds` インデックスに存在します。

その結果：

- ライブイベント（新しいコメント、投票、編集）は O(1) 変異になり、ツリーを歩いたり複製したりする必要がなくなりました。
- 従来のすべてのフェッチで実行されていたフルツリー JSON ディープクローンを二つ削除しました。
- コンポーネントは、自分が読むスライスに正確に購読します。標準的なセレクタモデルにより、一つのコメントへの投票が一つのコメントに影響します。

最後のポイントは、思っている以上に重要です。セレクタベースの購読を使用すると、行は自分のデータが変更されたときのみ再レンダリングされます。

### トークンベースの再設計

古い外観はハードコーディングされたスタイルの山でした。新しいデフォルトは、意味のあるデザイントークン（`FastCommentsTheme`）から生成されます：色、スペーシング、半径、フォントサイズ、フォントの太さ、アバターサイズ。スタイルツリー全体がこれらのトークンから導出されています。

つまり、再スタイリングは一つのプロップで行えます：

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

ダークモードは一つのトークンセットで対応できます：

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

再設計自体は、クリーンで現代的なニュートラルな外観です：線状のセパレーター、ピル型の投票ボタンとチップ、塗りつぶされたプライマリボタン、丸みを帯びたアバター、一貫したタイプスケール。`styles` プロップは、手術的なオーバーライドのためにまだ存在しているので、既存の統合はそのまま機能します。

### 専用のライブチャットウィジェット

`FastCommentsLiveChat` を追加しました。これは、私たちの Android SDK のチャットビューを反映したチャットプリセットです：時系列メッセージは最新が下、リストの下に作成フォーム、接続ドットとユーザー数を表示するライブヘッダー、古いメッセージを読む間に一時停止する自動スクロール、上にスクロールする際の無限の履歴です。すべてのプリセットは `config` を通じてオーバーライド可能です。

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### ウェブでも利用可能

同じ SDK が今や `react-native-web` を通じてウェブ上で動作します。リッチテキスト作成ツール（`react-native-enriched` によって強化済み）は、iOS、Android、ブラウザのいずれでも同じようにレンダリングされるため、編集体験が一貫しています。コメントリストが通常はクリップするオーバーレイ（メニュー、GIF ピッカー、通知リスト）は、ウェブビルド上のトリガーの下に固定されています。

ライブでのすべてのウィジェットを試すことができる <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">コンポーネントブラウザ</a> では、この SDK がブラウザ上で `react-native-web` を通じて動作しています。

### React Native に最新情報を保持

5.0 は React Native 0.81 と React 19 に対して構築され、テストされています。そして、ネイティブリッチテキストエディタが必要とする新しいアーキテクチャ（ファブリック）をターゲットにしています。ここで最新の状態を保つことは単なる雑務ではありません：エディタ、ジェスチャー処理、レンダリングはすべて、React Native が進化するにつれて、より速く、より正確になります。そして、私たちは何年も遅れるよりも、着実にそのアップグレードを受け入れたいと考えています。

### 結論

この書き換えは、React Native SDK に私たちの他のライブラリと同様の一流の地位を与えることに関するものでした：速くて予測可能なデータモデル、一つのプロップでテーマ化可能な外観、チャットウィジェット、ウェブサポート、すべてが現代の React Native の基盤の上に存在します。

SDK は <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> で入手可能で、ソースとサンプルは <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a> にあり、すべてのウィジェットは <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">コンポーネントブラウザ</a> でライブ運用中です。何か問題があれば、下にお知らせください。

乾杯！

{{/isPost}}

---