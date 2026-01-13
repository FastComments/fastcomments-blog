---
[category:API & Development]
###### [postdate]
# [postlink]FastComments が React に対応しました[/postlink]

{{#unless isPost}}
React で開発されたアプリケーションにコメントを埋め込みたいですか？お任せください。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事には専門用語が含まれています

#### 新機能

FastComments には、VanillaJS ウィジェットと同等の機能を持つ React コンポーネントがあります。

このライブラリを fastcomments-react と呼ぶことにしました。ソースコードの GitHub リポジトリは<a href="https://github.com/FastComments/fastcomments-react" target="_blank">こちら</a>にあります。

リポジトリには、ウィジェットの使用例も含まれています。

NPM にも公開されており、<a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">こちら</a>で見つけることができます。

#### 仕組み

この新しいコンポーネントの仕組みは、React コンポーネントが既存の FastComments ウィジェットをラップしているというものです。

これは、既存のコンポーネントに機能を追加したり、バグを修正した場合でも、すぐに恩恵を受けられることを意味します。

#### 新しいコンポーネントの理由

FastComments VanillaJS ウィジェットは、私たちのビジネスの中心（コアバックエンドとともに）として書かれています。これは、現在のように拡張できるように設計されていることを意味します。

この新しい React ライブラリがない場合でも、自分自身のライブラリを書くことで FastComments をアプリケーションに統合することは可能でしたが、それは導入の大きな障害となっていました。React を直接サポートすることで、このタイプのお客様には FastComments の導入がはるかに簡単になります。

#### シングルページアプリケーション（SPA）？

FastComments は、コアにおいて SPA をサポートしています。コンポーネントは、config オブジェクトの変更を監視しているため、現在のページ（urlId と呼ばれる）を更新するとウィジェットが再描画されます。

#### 既存の顧客への変更点

既存の顧客にとっては何も変更はありません - そして、新しいプロジェクトに FastComments の VanillaJS バージョンを使用することに**問題はありません**。fastcomments-react は常に FastComments の VanillaJS バージョンに依存します。もし Angular や Vue のコンポーネントをリリースする場合も、同じモデルに従いましょう。

私たちの VanillaJS ウィジェットは FastComments の第一級の市民です。このリリースは私たちのインフラストラクチャに完全に *追加的* です。

さらに、VanillaJS ウィジェットは、静的ページのようにフレームワークを使用しない任意のウェブページに埋め込まれたコメントを加えるための優れたソリューションであり続けます。

#### 結論

fastcomments-react ライブラリや将来のライブラリをリリースすることで、私たちは開発者が現代の開発手法を使用しながら FastComments を導入しやすくできることを願っています。

乾杯！

{{/isPost}}

---