---
[category:API & Development]

###### [postdate]
# [postlink]FastComments가 Angular로 전환됩니다[/postlink]

{{#unless isPost}}
Angular로 개발된 애플리케이션에 댓글을 통합해야 하나요? 저희가 도와드리겠습니다.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 글에는 기술 전문 용어가 포함되어 있습니다

#### 새 소식

FastComments에는 이제 VanillaJS 위젯과 기능이 동등한 Angular 컴포넌트가 생겼습니다.

저희는 이 라이브러리를 ngx-fastcomments라고 부르기로 결정했습니다. 소스 코드를 포함한 GitHub 리포지토리는 <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">여기</a>에서 확인할 수 있습니다.

이 리포지토리에는 Angular 작업 공간 형태로 위젯의 예시 사용법도 포함되어 있습니다.

NPM에서는 <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">여기</a>에서 찾을 수 있습니다.

#### 작동 방식

이 새로운 컴포넌트의 작동 방식은 Angular 컴포넌트가 기존 FastComments 위젯을 감싸고 있다는 것입니다.

즉, 기존 컴포넌트에 기능을 추가하거나 버그를 수정하면 즉시 혜택을 누릴 수 있습니다!

#### 새로운 컴포넌트가 필요한 이유는?

저희는 FastComments VanillaJS 위젯을 비즈니스의 핵심으로 설계했습니다 (핵심 백엔드와 함께). 이는 지금처럼 확장 가능하도록 설계되었다는 의미입니다.

새 Angular 라이브러리 없이도 FastComments를 애플리케이션에 통합할 수 있었지만, 이는 도입에 큰 장애물이 되었을 것입니다. Angular를 직접 지원함으로써, 이러한 유형의 고객들이 FastComments를 훨씬 더 쉽게 채택할 수 있도록 합니다.

#### 단일 페이지 애플리케이션?

FastComments는 핵심적으로 SPA를 지원합니다. 이 컴포넌트는 변경 감지를 통해 config 객체의 변화를 모니터링합니다. 예를 들어, 현재 페이지(urlId)를 업데이트하면 위젯이 다시 렌더링됩니다. 이는 다크 모드를 전환하거나 페이지 매김을 추가하는 등의 사용 사례를 쉽게 구현할 수 있게 합니다.

#### 기존 고객에게는 어떤 변화가 있나요?

기존 고객에게는 아무 변화가 없습니다 - 새로운 프로젝트에 VanillaJS 버전의 FastComments를 사용하는 데 **문제**가 없습니다. ngx-fastcomments는 VanillaJS 버전의 FastComments에 의존하고 항상 그럴 것입니다. 새 컴포넌트를 릴리스할 경우에도 동일한 모델을 따를 것입니다.

저희 VanillaJS 위젯은 FastComments의 1급 시민입니다. 이번 릴리스는 저희 인프라에 완전히 *추가적인* 것입니다.

또한, VanillaJS 위젯은 프레임워크를 사용하지 않는 정적 페이지와 같은 웹 페이지에 댓글을 통합하는 데 여전히 훌륭한 솔루션으로 남아 있습니다.

#### 결론

ngx-fastcomments 라이브러리 및 향후 라이브러리를 출시함으로써, 현대 개발 방법론을 사용하면서 개발자들이 FastComments를 더 쉽게 채택할 수 있도록 하는 것을 희망합니다.

건배!

{{/isPost}}

---