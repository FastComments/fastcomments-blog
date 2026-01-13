---
[category:API & Development]

###### [postdate]
# [postlink]FastCommentsがAngularに対応しました[/postlink]

{{#unless isPost}}
Angularで開発されたアプリケーションにコメントを埋め込む必要がありますか？私たちが対応します。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事には専門用語が含まれています

#### 新機能

FastCommentsには、VanillaJSウィジェットと機能的に同等のAngularコンポーネントが追加されました。

私たちはこのライブラリをngx-fastcommentsと呼ぶことにしました。ソースコードのGitHubリポジトリは<a href="https://github.com/FastComments/fastcomments-angular" target="_blank">こちら</a>で見つけることができます。

このリポジトリには、Angularワークスペースの形でウィジェットの使用例も含まれています。

NPMでは<a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">こちら</a>で入手できます。

#### 仕組み

この新しいコンポーネントの仕組みは、Angularコンポーネントが既存のFastCommentsウィジェットのラッパーであるということです。

これは、既存のコンポーネントに機能を追加したりバグを修正した場合でも、すぐに恩恵を受けることができることを意味します！

#### 新しいコンポーネントの理由

私たちはFastComments VanillaJSウィジェットをビジネスのコア（コアバックエンドとともに）として書きました。これは、私たちが現在行っているのと同様に拡張可能であるように設計されているということです。

この新しいAngularライブラリがなくても、独自のライブラリを作成することでFastCommentsをアプリケーションに統合することは可能でしたが、それは導入の大きなハードルとなっていました。Angularを直接サポートすることにより、これらのタイプの顧客にとってFastCommentsの導入がはるかに容易になります。

#### シングルページアプリケーション（SPA）？

FastCommentsはそのコアでSPAをサポートしています。コンポーネントは、変更検出を使用してconfigオブジェクトの変更を監視します。例えば、現在のページ（urlIdと呼ばれる）を更新すると、ウィジェットが再レンダリングされます。これにより、ダークモードの切り替えやページネーションの追加などのユースケースが簡単に実装できます。

#### 既存の顧客への変更点

既存の顧客には何も変更はありません - 新しいプロジェクトでVanillaJSバージョンのFastCommentsを使用することに**何も**問題はありません。ngx-fastcommentsはVanillaJSバージョンのFastCommentsに依存しており、今後もそうです。新しいコンポーネントをリリースする場合、同じモデルに従います。

私たちのVanillaJSウィジェットは、FastCommentsの第一級の市民です。このリリースは私たちのインフラに完全に*追加*的です。

さらに、VanillaJSウィジェットは、フレームワークを使用していない静的ページのような任意のWebページに埋め込みコメントを追加するための優れたソリューションとして残ります。

#### 結論

ngx-fastcommentsライブラリおよび将来のライブラリをリリースすることで、開発者が現代の開発手法を使用しながらFastCommentsを採用しやすくすることを期待しています。

乾杯！

{{/isPost}}

---