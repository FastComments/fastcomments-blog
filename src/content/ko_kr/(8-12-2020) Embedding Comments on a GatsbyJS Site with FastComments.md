---
[category:Integrations]
###### [postdate]
# [postlink]FastComments로 GatsbyJS 사이트에 댓글 삽입하기[/postlink]

{{#unless isPost}}
이제 FastComments를 사용하여 Gatsby로 만든 사이트에 댓글을 삽입할 수 있습니다!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 글에는 기술적 용어가 포함되어 있습니다

#### 새로운 사항

최근에 FastComments를 위한 <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React 컴포넌트</a>를 출시했습니다.

이로 인해 많은 기회가 열리며 - FastComments와 Gatsby를 통합할 수 있습니다.

#### 자신만의 래퍼를 작성한 경우

FastComments를 위한 자신만의 React 래퍼를 작성한 경우 - 새 래퍼로 교체하는 것을 고려해 보세요. 우리는 이 추상화를 유지해 드리며 - 그리고 <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">구성 변경 시 자동 새로 고침</a>과 같은 많은 유용한 기능을 포함하고 있습니다.

#### 작동 방식

FastComments는 핵심 위젯 주위에 React 컴포넌트를 래퍼로 사용하므로 - 클라이언트 측에서 위젯을 인스턴스화하기 위해 우리의 React 라이브러리를 사용하는 것만으로 충분합니다.

우리는 이 컴포넌트를 완전히 지원하며 지속적으로 업데이트할 것입니다.

#### 예시가 있나요?

우리는 예시를 설정하기 시작했으며, 당신은 <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">여기</a>에서 확인할 수 있습니다.

#### 나이트 모드

우리가 가지고 있는 예시 중 하나는 "나이트 모드"로, 검은색(또는 매우 어두운) 배경을 가진 사이트에 FastComments를 렌더링하는 것입니다: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

또한, 위젯이 구성 변경에 반응하므로 사이트의 테마를 전환할 수 있는 모드를 가질 수 있으며 fastcomments-react에게 쉽게 업데이트하도록 지시할 수 있습니다.

#### 결론

FastComments를 Gatsby 사이트에 통합하는 것이 빠르고 쉬운 것을 발견하시길 바랍니다.

건배!

{{/isPost}}

---