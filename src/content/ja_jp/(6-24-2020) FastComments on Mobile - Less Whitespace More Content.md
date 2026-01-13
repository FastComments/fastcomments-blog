---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments on Mobile - Less Whitespace More Content[/postlink]

{{#unless isPost}}
私たちは、モバイルでのFastCommentsの可読性と外観を改善しました。
{{/unless}}

{{#isPost}}
#### 問題

最初にFastCommentsをリリースしたとき、私たちはモバイルとデスクトップブラウザの両方でうまく機能する洗練されたデザインを望んでいました。しかし、より多くの機能を追加し、ユーザーがFastCommentsとやり取りするのを見たとき、私たちは「きれい」に見せようとしてモバイルUIで画面スペースを無駄にしていることに気付きました。

そこで、妥協案を考え出しました。

#### 解決策

こちらが以前の状態です。私たちはスペースを非常に効率的に使用していませんでした。

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="Mobile Version Before"
        title="Mobile Version Before"
        class='lozad' />
</div>

現在、私たちは垂直の画面スペースを水平の画面スペースと交換しました。

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="Mobile Version After"
        title="Mobile Version After"
        class='lozad' />
</div>

    
#### カスタマイズルールの影響

私たちは、公開向けのコメントウィジェットにスタイリング変更を加えると、顧客のカスタマイズが壊れる可能性があることを認識しています。心配しないでください、私たちはそれをカバーしており、すべてのカスタムウィジェットスタイリングを確認して、壊れていないことを確認しました。ただし、問題が発生している場合は、お知らせください。

#### パフォーマンスの影響

この変更により、ウィジェットのサイズが約300バイト増加し、合計で10.1kbになりました。ウィジェットのサイズが増加するリリースに関しては、そのサイズを再び下げる方法を検討します。

楽しいコメントをお楽しみください！

{{/isPost}}

---