---
[category:API & Development]
###### [postdate]
# [postlink]VanillaJS 단일 페이지 애플리케이션에서 FastComments 사용하기[/postlink]

{{#unless isPost}}
우리는 전용 React 및 VueJS 컴포넌트를 제공하지만, 기본 위젯은 단일 페이지 애플리케이션에서도 사용할 수 있습니다.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 기사는 기술 용어를 포함합니다

#### 대상 청중

이 기사는 개발자를 대상으로 하고 있습니다.

#### 소개

FastComments VanillaJS 위젯의 대부분의 예시 사용법은 현재 페이지 URL에 대한 댓글 스레드를 로드하는 매우 간단한 코드 조각입니다. 이는
대부분의 고객들이 이러한 사용 사례를 가지고 있기 때문이지만, 최근에는 SPA를 구축하고 FastComments를 사용하는 개발자들이 많이 늘었습니다.

먼저, FastComments는 전용 <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> 및 <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> 컴포넌트를 제공하므로,
이 라이브러리를 사용 중이라면 직접 FastComments 주위에 래퍼를 만들 필요가 없습니다.

하지만 VanillaJS를 사용하여 애플리케이션을 구축하는 경우, 댓글 위젯을 동적으로 인스턴스화하고 업데이트할 수 있습니다.

#### 먼저, URL 및 URL ID

FastComments는 댓글 스레드와 연결된 페이지 또는 기사의 두 가지 식별자를 가지고 있습니다. 구성 객체에서 이들은 "url" 및 "urlId" 속성입니다.

URL은 댓글 위젯의 URL입니다. 이상적으로, 이 URL은 애플리케이션 바깥에서 방문할 수 있어야 합니다. 알림 이메일 및
관리자 도구에서 링크로 노출됩니다.

URL ID는 문자열로 URL이거나 ID입니다 - 현재 페이지를 나타내기만 하면 됩니다. 게시물, 기사 또는 페이지 ID가 있는 경우 이 값에 대한 페이지 URL 대신 사용할 수 있습니다. URL ID가 별도로 있는 이유는 URL에 페이지에 고유하지 않은 추가 정보를 저장하고 싶을 수 있기 때문입니다.

이 위젯이 지원하는 전체 구성에 대한 문서는 TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">GitHub에서</a> 문서화되어 있습니다.

#### 세부 사항 및 실제 데모

위젯이 인스턴스화될 때, 일반적으로 호출하는 FastCommentsUI 함수의 결과를 캡처합니다:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

그런 다음, 인스턴스 객체에서 "update" 메서드를 호출하여 구성을 업데이트할 수 있습니다. 이렇게 하면 구성 요소가 새로 고쳐집니다:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

작동하는 예시를 <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">이 피들</a>에서 확인할 수 있습니다.

이 예제에서는 document.getElementById를 사용하지만, 원하는 메커니즘을 사용하여 대상 요소를 가져올 수 있습니다.

#### 주의사항

" urlId"를 업데이트하는 것만으로도 작동하지만, 링크가 알림 이메일 및
중재 도구에서 작동할 수 있도록 "urlId"와 "url" 둘 다 업데이트해야 합니다. "url"만 업데이트하면 작동하지 않습니다 - 댓글은 "urlId"에 연결되어 있습니다.

#### 결론

이 가이드가 도움이 되셨기를 바랍니다. 질문이 있으시면 아래에 댓글을 달아주세요.

감사합니다!

{{/isPost}}

---