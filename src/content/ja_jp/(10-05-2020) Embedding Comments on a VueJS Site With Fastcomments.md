---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]FastCommentsを使ったVueJSサイトへのコメント埋め込み[/postlink]

{{#unless isPost}}
Vueで開発されたアプリケーションにコメントを埋め込みたいですか？私たちにお任せください。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i>この記事には技術用語が含まれています

#### 新しいこと

FastCommentsには、VanillaJSウィジェットと同等の機能を持つVueコンポーネントが新たに追加されました。

ライブラリの名前はfastcomments-vueとしました。ソースコードのGitHubリポジトリは<a href="https://github.com/FastComments/fastcomments-vue" target="_blank">こちら</a>でご覧いただけます。

リポジトリにはウィジェットの使用例も含まれています。

NPMにも登録されており、<a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">こちら</a>から見つけることができます。

#### 仕組み

この新しいコンポーネントは、既存のFastCommentsウィジェットをラップする形で機能します。

これにより、既存のコンポーネントに新機能を追加したりバグを修正した場合でも、すぐに恩恵を受けることができます！

#### 新しいコンポーネントの理由

私たちは、FastComments VanillaJSウィジェットをビジネスの中心（コアバックエンドとともに）にするために設計しました。つまり、現在のように拡張できるように設計されています。

この新しいVueライブラリがない場合、自分でライブラリを書いてFastCommentsをアプリケーションに統合することは可能でしたが、導入の大きなハードルとなるでしょう。Vueを直接サポートすることで、こうした顧客がFastCommentsを導入しやすくなります。

#### Vue 3.0

Vue 3.0専用に構築されたコンポーネントがあり、これを<a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>と呼んでいます。

#### シングルページアプリケーション？

FastCommentsは、コアの部分でSPAをサポートしています。このコンポーネントは、設定オブジェクトの変更を監視します。つまり、現在のページ（urlIdと呼ばれる）を更新すると、ウィジェットが再レンダリングされます。

#### 既存の顧客への変更点

既存の顧客にとっては何も変更はありません - 新しいプロジェクトでVanillaJSバージョンのFastCommentsを使用することにも**何の問題もありません**。fastcomments-vueはVanillaJSバージョンのFastCommentsに依存しており、今後もそうであり続けます。AngularやVueコンポーネントをリリースする際にも同じモデルに従います。

私たちのVanillaJSウィジェットはFastCommentsのファーストクラス市民です。このリリースは私たちのインフラに完全に*追加*されるものです。

また、VanillaJSウィジェットは、フレームワークを使用していない静的ページなど、任意のウェブページに埋め込まれたコメントを追加するための優れたソリューションとして残ります。

#### 結論

fastcomments-vueライブラリと今後のライブラリをリリースすることで、開発者が現代的な開発手法を使用しながらFastCommentsを導入しやすくなることを願っています。

乾杯！

{{/isPost}}

---