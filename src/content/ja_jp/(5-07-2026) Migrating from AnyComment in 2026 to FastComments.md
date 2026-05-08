---
[category:Migration]
###### [postdate]
# [postlink]2026年にAnyCommentからFastCommentsへの移行[/postlink]

{{#unless isPost}}
この投稿を読んで、2026年にAnyCommentからFastCommentsへの完全な移行方法を確認してください。
{{/unless}}

{{#isPost}}

2026年にAnyCommentからの移行について、多くの顧客から問い合わせを受けました。

## AnyCommentはWordPress内にあります

AnyCommentはWordPressプラグインです。DisqusやHyvor Talkのようなスタンドアロンプラットフォームとは異なり、独自のバックエンドを持たず、コメントは直接WordPressのデータベースに保存されます。同じ`wp_comments`テーブルを使用しているため、移行に関しては良いニュースです。特別なAnyCommentのエクスポートを管理する必要もなく、サードパーティのサーバーと調整する必要もありません。データはすでに自分のサーバーにあります。

そのため、標準のFastComments WordPress移行フローは、特別な手順なしでAnyCommentを処理します。

## オプション1: FastComments WordPressプラグイン（推奨）

最も簡単な方法は、<a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPressプラグイン</a>をインストールすることです。このプラグインは、WordPressのインストールをFastCommentsにリンクする手順を案内し、既存のコメントデータを自動的にコピーします。手動でダウンロードやアップロードする必要はありません。データはあなたのWordPressデータベースから私たちのサーバーにコピーされるため、移行が完了するとサーバーの負荷も軽減されます。

ほとんどの移行は数分で完了します。

データが移行されたら、AnyCommentを無効にします。コメントはFastCommentsによって提供され続け、プラグインはバックアップとしてWordPressデータベースを同期のまま保持します（その機能を有効にした場合）、したがって常にデータを所有しています。

## オプション2: WordPress XMLエクスポート

手動で移行したい場合や、すでにWordPressから移動してバックアップXMLしか持っていない場合は、WordPressの組み込みエクスポート機能を使用します。

1. WordPress管理画面で、**ツール -> エクスポート**に移動し、XMLファイルをダウンロードします。
2. FastCommentsダッシュボードにログインし、<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">こちらからファイルをインポートします</a>。
3. ドロップダウンから**WordPress (.xml)**を選択し、ファイルをアップロードします。

AnyCommentは`wp_comments`に書き込むため、すべてのAnyCommentスレッドはXML内の他のWordPressコメントと同じ場所にあります。インポーターはそれらを自動的に正しい投稿にマッチさせます。

## AnyCommentウィジェットの置き換え

オプション1を使用した場合、FastComments WordPressプラグインはすでにサイトでAnyCommentを置き換えています - 移行が完了した後にAnyCommentを無効にするだけです。

オプション2を使用し、WordPressインストールを維持する場合は、その後FastCommentsプラグインをインストールしてウィジェットのレンダリングと継続的な同期を処理します。WordPressから完全に移行する場合は、新しいサイトに私たちの<a href="https://fastcomments.com/install-wizard" target="_blank">インストールスニペット</a>を追加してください - 私たちは多くのフロントエンドフレームワークをサポートしており、<a href="https://fastcomments.com/install-wizard" target="_blank">こちらで見つけることができます</a>。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">お手伝いすることができます</a>。

## EU

EUにいる場合、顧客データがEU内に留まるように<a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>でアカウントを作成することをお勧めします。

## 概要

1. FastComments WordPressプラグインをインストールし、データをコピーさせる、**または**WordPressからXMLとしてエクスポートしてインポートページでアップロードする
2. AnyCommentを無効にする
3. WordPressを離れる場合、新しいサイトでウィジェットコードを交換する

{{/isPost}}

---