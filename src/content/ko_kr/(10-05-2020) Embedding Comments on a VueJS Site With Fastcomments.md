---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]FastComments로 VueJS 사이트에 댓글 임베드하기[/postlink]

{{#unless isPost}}
Vue로 개발된 애플리케이션에 댓글을 임베드해야 하나요? 저희가 도와드리겠습니다.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 글은 기술 전문 용어를 포함하고 있습니다.

#### 새로운 소식

FastComments에는 이제 VanillaJS 위젯과 기능이 동일한 Vue 컴포넌트가 있습니다.

저희는 이 라이브러리를 fastcomments-vue라고 부르기로 했습니다. 소스 코드가 담긴 GitHub 리포지토리를 <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">여기</a>에서 확인하실 수 있습니다.

리포지토리에는 위젯의 예제 사용법도 포함되어 있습니다.

NPM에 등록되어 있으며, <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">여기</a>에서 찾을 수 있습니다.

#### 작동 방식

이 새로운 컴포넌트는 기존 FastComments 위젯을 감싸는 Vue 컴포넌트입니다.

이는 기존 컴포넌트에 기능을 추가하거나 버그를 수정할 경우에도 즉시 혜택을 받을 수 있음을 의미합니다!

#### 새로운 컴포넌트가 필요한 이유는?

FastComments VanillaJS 위젯은 저희 비즈니스의 핵심(핵심 백엔드와 함께)이 되도록 설계되었습니다. 따라서 지금과 같은 방식으로 확장되도록 설계되었습니다.

이 새로운 Vue 라이브러리 없이도 FastComments를 애플리케이션에 통합할 수 있었지만, 이는 Adoption의 주요 장애물이 되었습니다. Vue를 직접 지원함으로써 이러한 유형의 고객이 FastComments를 훨씬 더 쉽게 채택할 수 있도록 합니다.

#### Vue 3.0

Vue 3.0을 위해 특별히 제작된 컴포넌트가 있으며, 이름은 <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>입니다.

#### 단일 페이지 애플리케이션(SPA)?

FastComments는 본질적으로 SPA를 지원합니다. 이 컴포넌트는 config 객체의 변화를 모니터링하므로, 현재 페이지(urlId)를 업데이트하면 위젯이 다시 렌더링됩니다.

#### 기존 고객에게 어떤 변화가 있나요?

기존 고객에게는 아무 변화도 없습니다 - 그리고 새로운 프로젝트에 FastComments의 VanillaJS 버전을 사용하는 것은 **전혀** 문제가 되지 않습니다. fastcomments-vue는 FastComments의 VanillaJS 버전에 의존하며 앞으로도 그럴 것입니다. Angular나 Vue 컴포넌트를 출시할 경우 동일한 모델을 따를 것입니다.

저희 VanillaJS 위젯은 FastComments의 일급 시민입니다. 이 릴리스는 저희 인프라에 완전히 *추가적*입니다.

또한, VanillaJS 위젯은 프레임워크를 사용하지 않는 정적 페이지와 같은 모든 웹 페이지에 댓글을 임베드하는 훌륭한 솔루션으로 여전히 남아 있습니다.

#### 결론

fastcomments-vue 라이브러리와 향후 라이브러리의 출시를 통해 최신 개발 방법론을 사용하면서 개발자들이 FastComments를 더 쉽게 채택할 수 있도록 돕고자 합니다.

건배!

{{/isPost}}