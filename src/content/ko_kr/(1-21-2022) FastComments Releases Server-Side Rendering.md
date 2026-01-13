---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments 서버 사이드 렌더링 출시[/postlink]

{{#unless isPost}}
JavaScript를 사용하지 않고 사이트에 댓글 기능을 추가하세요.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 기사에는 기술 용어가 포함되어 있습니다.

## 새 소식

2020년 초 런칭 이후, FastComments는 댓글 위젯을 렌더링하는 데 오로지 JavaScript만 사용해 왔습니다.

JavaScript를 사용하지 않고도 거의 모든 필수 기능을 사용할 수 있다면 어떨까요?

<div class="text-center">
    <div class="sm">이것은 스크린샷입니다. 클릭하지 마세요.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

위 스크린샷은 JavaScript 없이 FastComments 댓글 위젯입니다. [JavaScript 없이 이 페이지를 볼 수 있습니다.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## 사용 방법

WordPress를 사용 중이라면, FastComments 플러그인 버전 3.10.1이 자동으로 JS가 비활성화된 사용자를 위한 SSR을 지원합니다.

사용자 지정 구현의 경우, 댓글 스레드의 UI를 가져오려면 해당 페이지의 `/ssr/comments`를 호출하면 됩니다:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

여기서 `$urlId`는 페이지의 url 또는 id입니다. 이에 대한 문서는 [여기](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id)에 있습니다.

예를 들어, PHP를 사용하여 댓글 스레드를 뒤에 렌더링하는 iframe을 페이지에 보낼 수 있습니다:

<div class="code"><div class="title">PHP 기반 SSR 예제</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

API 호출을 통해 댓글 스레드의 HTML을 가져와서 렌더링하거나 저장할 수도 있습니다.

완전한 문서는 [SSR 문서 docs.fastcomments.com에서 확인할 수 있습니다](https://docs.fastcomments.com/guide-ssr.html).

## SSO

기업 느낌의 약어를 좋아하니 걱정하지 마세요, SSR은 SSO를 지원합니다. [SSR을 통한 Single-Sign-On의 예는 여기 있습니다.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## 현지화

SSR 기반 엔드포인트는 브라우저가 보내는 언어 관련 헤더를 기반으로 응답을 자동으로 지역화합니다. JavaScript 기반 위젯과 동일한 지역화 오버라이드를 사용할 수도 있습니다.

## 이 기능이 구축된 이유

FastComments와 같은 서비스에 대한 주요 불만 중 하나는 JavaScript가 필요하다는 것입니다. 우리는 이미 댓글 위젯을 가능한 한 슬림하게 만들고, < 20ms의 API 호출 SLA를 충족하도록 노력하고 있지만, 많은 작은 커뮤니티는 사이트에 JS를 추가해야 한다면 그러한 솔루션을 선택하지 않을 것입니다.

이것은 또한 JavaScript에 접근할 수 없는 렌더링 엔진을 사용할 기회를 엽니다.

## 기술

FastComments는 UI 렌더링을 위해 자체 소형 마이크로프레임워크를 사용합니다. 이 프레임워크는 React와 유사한 접근 방식을 사용하지만 초기 렌더링 외부에서의 수동 DOM 조작이 허용됩니다.

핵심 댓글 위젯 라이브러리는 단일 진입점을 가지고 있습니다 - 상태 세트를 받아들이고 렌더링될 HTML 및 CSS를 생성합니다. 우리는 이것을 서버에서도 호출합니다. 사용자가 페이지와 상호작용할 때, 상태가 변경되고 최신 HTML이 가져와집니다. 이것은 새해의 일환으로 열린 해커톤의 결과로 개발되었습니다.

## 실시간 댓글

UI가 서버에 의해 한 번 렌더링되기 때문에 실시간 댓글 기능은 현재 사용할 수 없습니다.

또한, 알림 벨도 현재 사용할 수 없습니다. 우리는 미래에 이 기능을 추가하는 것을 열려 있습니다.

## 성능

서버 렌더링된 UI는 JavaScript 기반 위젯과 동일한 저장 최적화 및 렌더링 엔진을 사용합니다. 작은 댓글 스레드의 경우, 사용자가 댓글을 가져오고 UI를 렌더링하는 스크립트를 다운로드할 필요가 없기 때문에 실제로 성능이 더 좋습니다.

## 크롤러와 SEO

FastComments는 이미 웹 크롤러와 잘 작동합니다; SEO가 걱정된다면 SSR을 사용할 필요는 없습니다.

## 미래 응용

미래에 포럼 솔루션을 출시할 예정입니다. 전통적으로 포럼은 페이지 나누기가 있으며 서버 측 렌더링됩니다. 현대 포럼 솔루션은 무한 스크롤과 클라이언트 측 렌더링을 사용하여 이 규범에서 벗어납니다. 우리는 제3자 포럼 솔루션을 사용하는 유일한 선택이 되어서는 안 된다고 생각합니다.

## 결론

이 가이드가 유용하고 읽기 쉬웠기를 바랍니다. 질문이 있으시면 아래에 댓글을 남겨주세요.

감사합니다!

<style>/*

Monokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #23241f;
}

.hljs,
.hljs-tag,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2;
}

.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff;
}

.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672;
}

.hljs-symbol,
.hljs-attribute {
  color: #66d9ef;
}

.hljs-params,
.hljs-class .hljs-title {
  color: #f8f8f2;
}

.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}
</style>

{{/isPost}}

---