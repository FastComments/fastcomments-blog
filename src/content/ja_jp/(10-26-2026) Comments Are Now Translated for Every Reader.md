[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]コメントがすべての読者向けに翻訳されました[/postlink]

{{#unless isPost}}
FastCommentsは、ウィジェットだけでなく、コメント自体も翻訳できるようになりました。サイト単位またはページ単位で有効にでき、 自動または「Translate」ボタンで切り替えられ、すべての読者は自分の言語で会話を閲覧でき、元のコメントはワンクリックで確認できます。
{{/unless}}

{{#isPost}}

### What's New

FastCommentsはすでに28言語に翻訳されており、ボタンやラベル、メールは読者の言語で表示されます。  
しかしコメントは翻訳されていませんでした。  
英語ページ上のスペイン語のコメントはスペイン語のままで、読めない人はスクロールして読み飛ばしていました。

このリリースでは**Comment Translation**が追加されました。  
有効にすると、読者の言語とは異なる言語で書かれたコメントが翻訳されて表示され、下部に出典を示す小さな行と、実際に書かれた内容を確認できる**Show original**リンクが付きます。

<img src="images/fc-comment-translation-auto.png" alt="An English reader seeing a Spanish comment translated, with a Translated from Spanish line and a Show original link under it" title="Automatic Comment Translation" class="lozad" />

### 2 つのモード

**Automatic**は事前に翻訳します。  
他言語のコメントはすべて翻訳された状態で表示され、読者が必要なら元のコメントに切り替えることができます。  
これは、実際に2言語以上で書き込みを行い、すべての人が同じ会話を読むことを望むコミュニティ向けのモードです。

**Manual**は各コメントに**Translate**リンクを追加し、クリックされるまで何もしません。  
読者が翻訳したいコメントを選び、誰も求めていないコメントには費用がかかりません。  
読者の言語ですでに書かれているコメントは、翻訳しようとせずにその旨が表示されます。

<img src="images/fc-comment-translation-manual.png" alt="Manual mode, where a Spanish comment has been translated on click and an English comment reports it is already in the reader's language" title="Manual Comment Translation" class="lozad" />

どちらのモードでも、読者の言語はウィジェットが現在表示している言語、すなわちカスタマイズルールで設定した**Locale / Language**、または設定していない場合は訪問者のブラウザ言語です。  
訪問者がインストールしたり、サインアップしたり、設定したりする必要はありません。  
ウィジェットがページに埋め込まれている場合でも、Google Sites のようなサイトビルダー内でも、単独の FastComments コメントページでも同様に機能します。

### 有効化

<a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a> を開き、  
**Locale / Language** のすぐ下にある **Comment Translation** を見つけ、Automatic または Manual を選択します。デフォルトではオフです。

カスタマイズルールに基づく設定なので、サイト全体、ドメイン単位、または閲覧者が混在していることが分かっている単一ページなど、好きな範囲で有効化できます。サーバー側の設定であるため、ウィジェットの JavaScript 設定だけでオンにすることはできません。

### 費用について

Translations are produced by a language model and billed as LLM tokens, the same meter as
[AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html). Any plan can turn it on.

各コメントは言語ごとに一度だけ翻訳され、その翻訳はコメントと共に保存されます。  
たとえば、千人のスペイン語読者が同じ英語スレッドを開いても、翻訳は一度だけ行われます。  
一般的なコメントは数百トークンで、Flex 料金で換算すると約0.5セントです。  
作者やモデレーターがコメントを編集すると、保存された翻訳は破棄され、次回表示時に再度翻訳されるため、存在しなくなったテキストの翻訳を読むことはありません。

Manual モードは、誰かがクリックするまで費用がかかりません。

### 詳細

翻訳されたテキストは、誰かが直接入力したコメントと同様に扱われます。  
元のコメントと同じサニタイズとリンクのルールが適用されるため、翻訳が元のコメントにない情報を含むことはありません。  
メンションやハッシュタグはフォーマットが保持されます。

非常に長いコメントや、言語が確実に判別できないコメントは、推測せずにそのまま表示されます。  
翻訳されたコメントの下に表示される言語行も読者の言語で表示されるため、英語コメントを読むスペイン語の読者は「Traducido del inglés」や「Mostrar original」と見えます。

### オーバーヘッド

この新機能のコードは有効化されていない限り読み込まれないため、他のユーザーのコメントウィジェットの速度低下を招きません。

### ドキュメント

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">Comment Translation ガイド</a>
covers both modes, the rule setting, and billing.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">locale ガイド</a>
covers how the widget's language is chosen in the first place.

### 結論

この機能は、住民が英語とスペイン語でコメントし、両方のグループが同じスレッドを閲覧できるようにしたいという、ある地域団体からの要望で実装されました。ブラウザ拡張機能のインストールや登録を求めることはありません。

複数言語で書き込むコミュニティを運営している場合は、機能を有効にし、翻訳結果について下にご意見をお聞かせください。

よろしくお願いします！

{{/isPost}}