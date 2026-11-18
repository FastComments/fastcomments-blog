[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]FastCommentsでコメントにライブ投票を追加[/postlink]

{{#unless isPost}}
コメントにライブ投票が追加されました！読者はスレッド内で投票し、結果はページ上の全員にリアルタイムで更新され、投票はウェブウィジェットと iOS、Android、React Native SDK でも動作します。
{{/unless}}

{{#isPost}}

### 新機能

このリリースでは **Live Polls** を追加しました。投票はコメントに添付され、コメント内に表示されます。読者はスレッドを離れることなくオプションをクリックして投票し、投票が入るたびにページを閲覧している全員に結果がリアルタイムで更新されます。リフレッシュは不要で、返信を手作業で集計する必要もありません。

<img src="images/fc-live-polls.png" alt="A comment with a poll asking what format the next meetup should be, showing In person at 34%, Online at 21%, and Hybrid at 45%, with 53 responses" title="Live Polls" class="lozad" />

投票はコメントであるため、会話はそれに付随したままです。人々は投票し、なぜ投票したかを返信で説明します。

### 投票の作成

投票が有効になると、コメントエディタに投票ボタンが表示されます。クリックするとテキスト入力の下に投票エディタが開き、以下を設定します：

- **質問**、最大200文字。
- **選択肢**、2〜10個。
- **締め切り**: なし、または1日後、3日後、1週間後。締め切られた投票は最終結果を表示し、投票を受け付けなくなります。
- **プライバシー**: 匿名、管理者に表示、または公開。
- **結果を見るには投票が必要**、投票または投票の締め切りまで各閲覧者に結果を非表示にします。

その後、通常通りコメントを書いて投稿してください。投票は新しいコメントと返信の両方で機能します。

### 投票

各ユーザーは投票ごとに1票を持ち、投票が開いている間は変更可能です。投票が先に必要とされていない限り、読者は **Show results** をクリックして投票結果を確認できます。

プライバシーは投票ごとに設定され、選択肢のすぐ下に表示されるため、投票者は投票前に誰が自分の投票を見ることができるかを知ることができます。匿名投票（デフォルト）は合計数のみを表示し、管理者を含む誰も誰が何に投票したかを見ることはできません。管理者が閲覧できる投票では、管理者とモデレーターが **See who voted** を開くことができます。公開投票では、誰でも見ることができます。

### 有効化

投票はデフォルトで無効です。<a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a> を開き、**Enable Polls** にチェックし、作成できるユーザーを選択してください：

- **Admins/Moderators Only**（デフォルト）: 自分で投票を実施したい場合。
- **Everyone**: コミュニティ全体に投票させたい場合。

投票はデフォルトでログインユーザーが必要です。**Allow Anonymous Poll Votes** にチェックすると誰でも投票できるようになります。公平性を保つため、匿名投票は IP アドレスごとに投票あたり1時間に3回までに制限されます。

他のカスタマイズルールと同様に、サイト全体、ドメイン、または単一ページに適用できます。

### 通知

投票の作成者は、投票が入るたびに通知で回答を受け取ります：多数の人が同時に投票した場合はまとめられ、投票がその日に新しい回答を得た場合は日次メールが送信されます。最初の投票のみが回答としてカウントされるため、投票を変更しても追加通知は送信されません。通知は投票のプライバシー設定に従い、匿名投票の場合は新しい回答数のみが示され、投票者は表示されません。

### ネイティブモバイル SDK

投票はウェブウィジェットだけでなく、ネイティブ SDK でも利用できます。ネイティブ SDK は投票カード、投票エディタ、ライブ結果、投票者リストを実際のネイティブコンポーネントで描画し、ダッシュボードの同じウィジェット設定を読み取ります。一度投票を有効にすれば、サイトとアプリの両方に表示されます。

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0、Swift Package Manager 経由で。
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0、`com.fastcomments:android-sdk:2.1.0` として。
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0、NPM で。

iOS と Android の SDK は、独自の UI から投票を投稿することもできます。iOS の例は次の通りです：

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

iOS と Android の READMEs、そして React Native の changelog は、詳細をカバーしており、投票の色をアプリに合わせて再スタイルする方法も含まれています。

### API

投票は REST API でも利用可能です。`poll` を `POST /api/v1/comments` に渡すことでコメントと同時に投票を作成できます。また、後で `/api/v1/polls/:commentId` を使用して追加、編集、締め切り、削除が可能です。投票は `/api/v1/poll-votes` で一覧取得、投票、削除ができ、結果をスプレッドシートや独自 CMS にエクスポートするのが簡単です。API はウィジェットと同じ設定に従い、匿名投票の個別投票は取得できません。

### オーバーヘッド

投票コードは投票が有効な場合にのみロードされるため、他のユーザーのコメントウィジェットの速度を低下させません。

### ドキュメント

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">Live Polls ガイド</a> では、投票の有効化、作成者の設定、匿名投票、投票者のプライバシー、通知、API について説明しています。

### 試してみる

<a href="https://fastcomments.com/product/live-polls" target="_blank">Live Polls デモ</a> にライブ投票があります。投票してみて、別タブでページを開き、結果が変化する様子を確認してください。自分の投票もそこに投稿できます。

### 結論

スレッドが人数集計に変わってしまう場合は、投票を試してみて、次に何を見たいかを下に教えてください。

よろしくお願いします！

{{/isPost}}

---