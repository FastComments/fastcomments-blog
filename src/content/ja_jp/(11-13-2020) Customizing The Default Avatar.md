---
[category:UI & Customization]

###### [postdate]
# [postlink]デフォルトアバターのカスタマイズ[/postlink]

{{#unless isPost}}
デフォルトのアバター画像は、カスタマイズできるようになりました。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事には専門用語が含まれています

#### はじめに

デフォルトのアイコンは、FastCommentsが開始して以来同じままでした。デフォルトのプロフィールアイコンの栄光をご覧ください。

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Default Profile Icon" alt="Default Profile Icon" />
</div>

しかし、今ではカスタマイズすることができます。

#### コードなしで

まず、<a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">カスタマイズルールを追加または編集</a>します。カスタマイズルールは、ページ単位、ドメイン単位、またはアカウント全体に適用できます。プロフィール画像をグローバルに変更したい場合は、URL IDフィールドを空白のままにしておくことができます。

「デフォルトアバター」セクションまでスクロールします。

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday Settings"
    class='lozad' />
    
ボタンをクリックして、最大20MBのJPG、PNG、またはGIFをアップロードします。画像は100pxの正方形にリサイズされます。

#### コードで

デフォルトアバターをホストしたい場合で、すでに公開URLがある場合は、次の例のようにコードで定義できます。

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

画像は正方形である必要があり、そのサイズは100pxの正方形であるべきです。これらの制約に従うことで、最良の体験が得られます。

#### 注意点

1. デフォルトのプロフィール画像をカスタマイズしても、あなたのサイトにのみ影響があります。通知メールやユーザーアカウントには一切影響しません。
2. この変更の前に作成されたコメントは、古いプロフィール画像が表示されることがあります。デフォルトのプロフィールアイコンを調整した後、サイト上で古いプロフィールアイコンを使用しているコメントがたくさんある場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">お知らせください</a>。

#### 結論

このガイドが役に立ち、読みやすいことを願っています。質問がある場合は、下にコメントしてお気軽にお知らせください。

乾杯！

{{/isPost}}

---