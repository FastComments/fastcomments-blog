---
[category:API & Development]
###### [postdate]
# [postlink]FastComments가 React로 전환되었습니다[/postlink]

{{#unless isPost}}
React로 개발된 애플리케이션에 댓글을 삽입해야 하나요? 저희가 도와드리겠습니다.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 글에는 기술 용어가 포함되어 있습니다

#### 새로운 기능

FastComments는 이제 VanillaJS 위젯과 기능적으로 동등한 React 컴포넌트를 갖추었습니다.

우리는 이 라이브러리를 fastcomments-react라고 부르기로 했습니다. 소스 코드를 포함한 GitHub 저장소는 <a href="https://github.com/FastComments/fastcomments-react" target="_blank">여기</a>에서 확인할 수 있습니다.

저장소에는 위젯 사용 예제도 포함되어 있습니다.

NPM에 있으며, <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">여기</a>에서 찾을 수 있습니다.

#### 작동 방식

이 새로운 컴포넌트의 작동 방식은 React 컴포넌트가 기존 FastComments 위젯의 래퍼 역할을 한다는 것입니다.

따라서 기존 컴포넌트에 기능을 추가하거나 버그를 수정하면 즉시 이점을 누릴 수 있습니다!

#### 새로운 컴포넌트가 필요한 이유는?

우리는 FastComments VanillaJS 위젯을 비즈니스의 핵심으로 만들기 위해 (핵심 백엔드와 함께) 설계했습니다. 즉, 지금처럼 확장할 수 있도록 설계한 것입니다.

이 새로운 React 라이브러리 없이도 FastComments를 애플리케이션에 통합할 수 있었지만, 이는 채택하는 데 큰 장애물이 될 수 있습니다. React를 직접 지원함으로써 이러한 유형의 고객에게 FastComments 채택을 더욱 쉽게 만듭니다.

#### 단일 페이지 애플리케이션(SPA)?

FastComments는 본질적으로 SPA를 지원합니다. 컴포넌트는 config 객체의 변화를 모니터링하므로 현재 페이지(urlId라 불리는)를 업데이트하면 위젯이 다시 렌더링됩니다.

#### 기존 고객에게 변경되는 사항

기존 고객에게는 아무 변경 사항이 없습니다 - 그리고 새로운 프로젝트에 대해 FastComments의 VanillaJS 버전을 사용하는 데 **문제가** 없습니다. fastcomments-react는 항상 FastComments의 VanillaJS 버전에 의존하게 됩니다. Angular 또는 Vue 컴포넌트를 출시하면 동일한 모델을 따를 것입니다.

우리의 VanillaJS 위젯은 FastComments의 일급 시민입니다. 이번 릴리스는 우리의 인프라에 *추가적인* 것입니다.

또한, VanillaJS 위젯은 프레임워크를 사용하지 않는 정적 페이지와 같은 모든 웹 페이지에 임베드 댓글을 삽입하는 훌륭한 솔루션으로 남아 있습니다.

#### 결론

fastcomments-react 라이브러리와 미래의 라이브러리를 출시함으로써, 우리는 개발자들이 현대 개발 방법론을 사용하면서 FastComments를 더 쉽게 채택할 수 있도록 하기를 희망합니다.

감사합니다!

{{/isPost}}

---