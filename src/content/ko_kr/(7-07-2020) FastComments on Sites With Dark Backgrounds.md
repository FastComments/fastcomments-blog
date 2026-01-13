---
[category:UI & Customization]
###### [postdate]
# [postlink]다크 배경을 가진 사이트에서의 FastComments[/postlink]

FastComments는 이제 사이트의 테마에 맞춰 조정됩니다. 밝거나 어두운 테마 모두 지원합니다.

{{#isPost}}
#### 무엇을, 어떻게?
우리의 댓글 위젯은 댓글 영역이 위치한 페이지의 영역과 모든 감싸는 요소들을 확인하여 댓글 영역 뒤의 지역이 얼마나 "어두운지"를 찾습니다.

#### 개발자를 위한 정보
FastComments를 웹 페이지에 설치하는 것은 작은 코드 스니펫을 삽입하는 것만으로 충분합니다. FastComments는 설치된 페이지의 영역의 "휘도"를 자동으로 계산하여 어두운 테마 또는 밝은 테마로 렌더링할지를 결정하려고 시도합니다.

#### 데모
놀랍게도, 이 페이지가 데모입니다!

#### 만약 모든 방법이 실패한다면...
브라우저는 매우 복잡한 환경입니다. 모든 FastComments 기능이 그러하듯이, 우리는 속도와 정확성 사이의 균형을 맞춰야 합니다. 감지에서 잘못된 결과가 나올 수 있는 경우도 있습니다. 이 경우, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리에게 알려주시면</a> 위젯을 당신의 사이트에 맞게 수동으로 조정할 수 있도록 도와드리겠습니다.

#### 설정
특별한 사항은 없습니다 - 다른 사이트나 플랫폼처럼 FastComments를 설치하면 됩니다.

#### 결론
우리는 이 사이트의 검은 배경에서 아래의 위젯을 작동시키기 위해 특별한 스타일링이나 구성을 사용하지 않았습니다.

FastComments가 빠르고 사용하기 쉽기를 바랍니다 - 건배!

<style>
body, .content, .content .posts .post .post-description h1 a, .header, .header a, .content a {
    background: #000;
    color: #fff;
    border-color: #fff;
}
</style>

{{/isPost}}

---