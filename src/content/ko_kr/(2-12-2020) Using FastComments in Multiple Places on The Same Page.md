---
[category:Tutorials]

###### [postdate]
# [postlink]페이지 내 여러 위치에서 FastComments 사용하기[/postlink]

FastComments는 유연합니다. 페이지의 일반 요소에 붙여서 모든 웹 프레임워크와 함께 작동합니다.

{{#unless isPost}}
이 게시물을 읽고 동일한 페이지에서 FastComments의 여러 인스턴스 예제를 확인하세요.
{{/unless}}

{{#isPost}}
이는 우리가 페이지에 원하는 만큼의 스레드를 가질 수 있음을 의미합니다. 예를 들어, 두 개의 스레드를 나란히 보여줍니다.

<style>
.content {
    max-width: 1220px;
}

.content .widgets {
    text-align: center;
}

.content .widget {
    display: inline-block;
    width: 49%;
    vertical-align: top;
}

#fastcomments-widget {
    display: none;
}

@media(max-width: 768px) {
    .content .widget {
        display: block;
        width: 100%;
    }
}
</style>

<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div class="widgets">
    <div class="widget left" id="fastcomments-widget2"></div>
    <div class="widget right" id="fastcomments-widget3"></div>
</div>

<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?cats',
        headerHTML: '<h1>고양이에 대한 이야기</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>개에 대한 이야기</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### 작동 원리

이를 가능하게 하는 코드입니다. 각 스레드를 고유하게 만들기 위해 urlId 매개변수를 사용자 정의합니다. 우리는 id를 사용하지만, 원하는 대로 쿼리한 모든 DOM 요소를 전달할 수 있습니다.


<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;고양이에 대한 이야기&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;개에 대한 이야기&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---