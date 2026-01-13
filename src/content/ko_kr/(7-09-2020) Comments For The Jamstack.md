---
[category:Integrations]
###### [postdate]
# [postlink]Jamstack을 위한 댓글[/postlink]

{{#unless isPost}}
오래된 것이 다시 새롭게 돌아온 것입니다. 사전 렌더링하고 CDN에서 사이트를 제공하는 것은 이제 "JamStack"이라고 불리지만, 완전히 정적일 필요는 없습니다!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 기사에는 기술 전문 용어가 포함되어 있습니다

<a href="https://jamstack.org/" target="_blank">Jamstack</a>은 전통적인 웹 서버에 의존하지 않고 웹사이트를 구축하는 방법입니다. 대신, 최상의 사용자 경험을 위해 "CDN"이라고 부르는 서버에서 제공됩니다(매우 빠르게 로드됩니다). 성능은 Jamstack으로 작성된 사이트에서 큰 우선 사항입니다 - FastComments와 마찬가지로요.

#### FastComments가 Jamstack과 연동되는 이유

FastComments는 댓글을 추가하려는 정적 페이지 하단에 작은(< 11kb 현재) 코드 스니펫만 필요합니다. 따라서 일반적인 Jamstack 사이트에 FastComments를 설치하는 것은 정적 사이트처럼 몇 초밖에 걸리지 않습니다.

#### 잠재적인 문제

Jamstack 사이트가 항상 정적으로 시작되는 것은 아니라는 점을 이해합니다. 예를 들어 Preact, React 또는 Vue로 만들어질 수 있습니다. 우리는 최대의 상호운용성을 위해 바닐라 JS로 FastComments 위젯을 구축했습니다. 그러나 FastComments와 선택한 프레임워크에서 문제가 발생하면
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">알려주십시오</a>.

#### 결론

FastComments가 사용자들이 귀하의 사이트와 상호작용하고 피드백을 제공하며 정적 사이트에서는 일반적으로 할 수 없는 방식으로 댓글을 남기도록 허용한다고 생각하길 바랍니다. 예를 들어, 이 페이지는 전통적인 Jamstack 사이트처럼 사전 렌더링되며, 하단에서 FastComments가 행복하게 작동하는 것을 볼 수 있습니다.

감사합니다!

{{/isPost}}

---