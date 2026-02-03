---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Hackaday.com과 같은 댓글 시스템 만들기[/postlink]

{{#unless isPost}}
여기서는 Hackaday와 유사한 댓글 스레드를 만드는 방법을 탐구할 것입니다.

이 게시물 링크를 클릭하면 전체 페이지 스타일 및 FastComments 블로그가 변경됩니다.

{{/unless}}

{{#isPost}}
###### 2020년 1월 24일
<div class="post-header">
    <div class="by left">작성자: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## 우와, 무슨 일이죠?

이 게시물은 FastComments를 사용하여 https://hackaday.com과 유사한 댓글 시스템을 만드는 데 대한 데모입니다.

우리는 당신이 그것들을 복사하는 것을 추천하지 않습니다. 하지만 이것은 FastComments의 유연성을 보여줍니다.

FastComments를 이렇게 보이도록 만드는 것은 간단합니다!
우리는 이를 위한 UI를 구축했습니다! 예를 들어, 다음은 FastComments가 이 페이지에 맞도록 설정한 구성입니다:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday Settings"
        class='lozad'
        height="850px" />
</div>

코드에서 직접 수행하고 싶다면 동일하게 쉽습니다.

몇 가지 옵션만 설정하면 됩니다. 사실, 일곱 개입니다. 다음은 코드 스니펫입니다(사용자 정의 CSS는 생략됨). 이 방법으로 삽입할 수 있는 CSS는 한정적입니다. CSS 정의를 위해 위의 UI를 사용하는 것을 권장합니다. 또한, 이를 통해 CSS를 압축할 수 있으며, customCSS 속성을 정의하면 압축 최적화가 적용되지 않습니다.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] 댓글 "HACKADAY.COM과 같은 댓글 시스템 만들기"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' 댓글';
        },
        headerHTML: '<h1>답변 남기기</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

각각의 의미는 무엇일까요?
- commentCountFormat = 댓글 스레드 위의 제목 형식입니다. "[count]"는 실제 로컬화된 숫자로 대체됩니다.
- commentCountUpdated = 댓글 수가 변경될 때 호출되는 함수입니다. 이를 사용하여 페이지 상단의 댓글 수를 설정합니다.
- headerHTML = "답변 남기기" 상자 위에 표시되는 HTML입니다. 이 경우 제목 요소를 삽입하는 데 사용합니다.
- hideAvatars = Hackaday에는 아바타가 없습니다. 그래서 우리는 이것을 true로 설정하여 숨깁니다.
- inputAfterComments = 답글 상자를 댓글 피드의 하단으로 재배치합니다.
- absoluteDates = 기본 날짜 형식(예: "11분 전")을 절대 날짜로 변경합니다.
- customCSS = 사용자 정의 스타일링

모든 구성 옵션은 <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">여기</a>에 문서화되어 있습니다.

<style>
    body, .content {
        background: #1a1a1a;
        font-family: "proxima-nova-n7","proxima-nova-n6","proxima-nova",sans-serif;
        color: #fff;
    }
    
    .header {
        color: #fff;
        border: none;
    }
    
    .header .header-inner a {
        display: block;
        padding-top: 35px;
        color: #fff;
        text-align: center;
        font-size: 80px;
    }
    
    .header .header-inner .buttons {
        display: none;
    }
    
    .header .header-inner #watchly-target {
        display: none;
    }
    
    .left-right-art {
        display: none;
    }
    
    .content {
        position: relative;
        max-width: 1128px;
        margin: 57px auto;
        padding: 20px 0 20px 0;
        box-shadow: none;
        border-top: 5px solid #fff;
        box-sizing: border-box;
        font-size: 1rem;
        line-height: 1.4;
    }
    
    .content a {
        color: #f3bf10;
        text-decoration: none;
    }
    
    .content a:hover {
        color: #fddb2f;
    }
    
    .content .posts .post .post-description h1, .content .posts .post .post-description h1 a {
        margin: 0;
        padding: 20px 0 10px;
        font-style: normal;
        font-size: 51px !important;
        font-weight: 800;
        line-height: 1;
        text-transform: uppercase;
        color: #fff !important;
    }
    
    .content h6#jan-24nd-2020-1 {
        position: absolute;
        top: -80px;
        right: 0px;
        font-size: 17px;
        font-weight: 700;
    }
    
    .content .by {
        font-size: 20.4px;
    }
    
    .post-header {
        height: 20px;
    }
    
    .post-header a {
        cursor: pointer;
        font-weight: 600;
    }
    
    .post-header .left {
        float: left;
    }
    
    .post-header .right {
        float: right;
    }
    
    @media(max-width: 1024px) {
        .header {
            padding-top: 0;
        }
        
        .header .header-inner a {
            padding: 0;
            font-size: 40px;
        }
        
        .content {
            margin: 7px auto;
            padding: 8px;
        }
        
        .content h6#jan-24nd-2020-1 {
            top: -38px;
            right: 5px;
        }
        
        .content h1 {
            padding: 0 0 10px;
            font-size: 32px;
        }
    }
</style>
<link rel="stylesheet" href="https://use.typekit.net/dru2dki.css" />

<script>
    window.fcCommentCountUpdated = function(count) {
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' 댓글';
    };
</script>

{{/isPost}}

---