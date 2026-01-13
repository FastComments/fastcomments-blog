---
[category:Integrations]

###### [postdate]
# [postlink]Webflow에 임베드할 수 있는 댓글[/postlink]

{{#unless isPost}}
FastComments를 Webflow.io 사이트에 설치하는 방법에 대한 비디오를 포함한 지침입니다.
{{/unless}}

{{#isPost}}

#### 타겟 오디언스

이 기사는 Webflow 사이트에 댓글 기능을 추가하고자 하는 모든 사람을 대상으로 합니다.

#### 소개

Webflow 사이트에 FastComments를 설치하는 것은 다른 사이트에 설치하는 것만큼 쉽습니다. 단, Webflow와 같은 호스팅 제공업체에만 해당되는 단점이 하나 있습니다.

#### 단계

1. Webflow 사이트의 도메인을 계정에 추가하세요. 도메인이 없으면 위젯이 로드되지 않습니다. 이는 Webflow에서 "게시"를 클릭할 때 사용하는 도메인으로, 예를 들어 "https://your-superb-project.webflow.io"입니다.
2. 디자인 모드에서 왼쪽 상단의 "요소 추가"로 가고, 아래로 스크롤하여 "구성 요소"까지 가세요. "임베드"를 클릭하고, 여기에서 찾을 수 있는 FastComments 코드 스니펫을 추가하세요 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">여기</a>.

#### 비디오

설치 과정을 상세히 설명하는 비디오가 있습니다. 이 비디오는 Webflow 디자이너에서 시작하여 임베드된 댓글 위젯이 사이트에서 작동하는 것으로 끝납니다.

<div class="text-center">
    <video src="images/fc-webflow-install.mp4" controls alt="Webflow 설치 교육 비디오" title="Webflow 설치 교육 비디오"></video>
</div>

#### 주의사항

FastComments는 도메인 이름으로 요청을 검증하여 설치를 보호합니다. 전용 도메인 이름을 갖기 전에 Webflow 사이트에 댓글 위젯을 표시하려면, **계정에 "weblfow.io"를 도메인으로 추가해야 합니다 <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">여기</a>**.

보안을 강화하려면 전체 도메인 이름을 정의할 수 있습니다. 예를 들어 "your-awesome-site.webflow.io"와 같습니다.

#### 결론

이 가이드가 유용하고 읽기 쉬웠기를 바랍니다. 질문이 있다면 아래에 댓글을 남겨 주세요.

감사합니다!

{{/isPost}}

---