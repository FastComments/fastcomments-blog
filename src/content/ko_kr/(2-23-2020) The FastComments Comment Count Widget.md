---
[category:Features]

###### [postdate]
# [postlink]패스트코멘트 댓글 수 위젯[/postlink]

사용자가 클릭하기 전에 페이지에 댓글 수를 보여주고 싶으신가요? FastComments가 해결해 드립니다.

{{#isPost}}
많은 것 중 첫 번째 - FastComments는 이제 댓글 수 위젯을 지원합니다.

예를 들어, 이 페이지에는 <b><span id="fastcomments-widget-comment-count"></span></b>가 있습니다. 이 숫자는 위젯을 통해 삽입됩니다! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

실시간 카운트로, 매우 인기 있는 페이지를 더 빠르게 제공하기 위해 60초 캐시가 적용됩니다. 이는 댓글 수의 실시간 카운트가 분 단위로 늦어질 수 있음을 의미하지만, FastComments가 이름에 걸맞게 동작할 수 있도록 보장합니다.

더 나은 예는 블로그 게시물 목록일 수 있습니다. 예를 들어:

### 게시물 #1
##### 64 댓글


### 게시물 #2
##### 128 댓글


### 게시물 #3
##### 256 댓글

블로그 <a href="https://blog.fastcomments.com" target="_blank">홈페이지</a>에서 이 실시간 예제를 확인하실 수 있습니다.

댓글 수 위젯은 iframe 내에서 렌더링되지 않으므로 CSS를 통해 완전히 사용자화 가능합니다. 페이지의 스타일 - 글꼴, 색상, 줄 높이 등을 자동으로 상속받습니다.

귀하의 계정에 대한 댓글 수 위젯 코드에 접근하려면 <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">여기</a>로 가십시오.

UI를 통해 계정 페이지에서 찾을 수 있으며, '위젯 코드 가져오기'를 클릭한 다음 '기타 위젯'을 클릭하면 됩니다.

<style>
.content #post-1, .content #post-2, .content #post-3 {
    margin-bottom: 0;
}
.content h5[id="64-comments"], .content h5[id="128-comments"], .content h5[id="256-comments"] {
    margin-top: 0;
}
</style>
{{/isPost}}

---