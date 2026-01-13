---
[category:Moderation]

###### [postdate]
# [postlink]すべてのコメントに承認を必要とする方法[/postlink]

デフォルトでは、FastCommentsでは承認プロセスは必要ありません。ユーザーはコメントをし、そのコメントはすぐにインターネット全体に表示されます（ログインしていない場合は未確認タグが付くことになります）。では、すべてのコメントを手動でモデレートし、承認したい場合はどうすればよいでしょうか？

{{#isPost}}

自動コメント承認を無効にすると、あなたまたはあなたのモデレーターが、公開される前にすべてのコメントを承認する必要があります。

まず、Moderation Settingsページに移動し、Moderate Comments -> Edit Moderation Settingsを選択してください。

このページには「自動的にコメントを承認する」というオプションがあります。それをチェックを外し、保存をクリックします。

これで完了です。すべてのコメントは承認が必要になります。

<img 
    src="images/fc-auto-approval.png"
    alt="自動承認設定"
    title="自動承認設定"
    class='lozad' />

コメントを承認するためには、必要に応じてフィルタをかけ、「承認済みとしてマーク」オプションをクリックします。オプションが「承認されていないとしてマーク」に切り替わった場合、それが保存されたことを意味します。

<img 
    src="images/fc-mark-approved.png"
    alt="コメントを承認済みとしてマークする方法"
    title="コメントを承認済みとしてマークする方法"
    class='lozad' />

モデレーターが承認したコメントの数は、Moderatorsページで確認できます：

<img 
    src="images/fc-moderator-stats.png"
    alt="モデレーター設定と統計"
    title="モデレーター設定と統計"
    class='lozad' />

{{/isPost}}

---