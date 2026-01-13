---
[category:Tutorials]
###### [postdate]
# [postlink]FastComments 설치 디버깅을 쉽게 만드는 방법[/postlink]

{{#unless isPost}}
댓글이 표시되지 않나요? 설정이 적용되지 않는 것 같나요? 이제 그 문제를 해결하는 것이 훨씬 쉬워졌습니다.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 글에는 기술 용어가 포함되어 있습니다.

#### 새 소식

<a href="https://fastcomments.com">FastComments</a>에서는 Google Chrome을 위한 브라우저 확장 프로그램을 새로 출시했습니다. 이 확장 프로그램은 댓글 위젯이 어떤 설정을 받고 있는지, 그리고 왜 표시되지 않을 수 있는지 이해하는 데 도움을 줄 것입니다.

확장 프로그램은 여기에서 찾을 수 있습니다: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### 사용 방법

댓글 위젯이 로드되지 않거나 정의한 일부 설정이 표시되지 않는 경우 <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">확장 프로그램</a>을 설치하고 문제의 페이지에서 열어보세요. 도구 모음에 아이콘을 보려면 오른쪽 상단의 퍼즐 조각을 클릭하여 고정해야 할 수도 있습니다:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="확장 프로그램 고정하는 방법" title="확장 프로그램 고정하는 방법" class="lozad" />
</div>

이 확장 프로그램은 두 가지 범주의 오류를 디버깅하는 데 도움을 줄 수 있습니다. 첫 번째는 위젯이 페이지에 전혀 포함되지 않았거나 스크립트에 큰 오타가 있는 경우입니다.

두 번째는 일부 설정이 적용되지 않는 것처럼 보이는 경우입니다.

두 경우 모두 아이콘을 클릭해서 시작합니다.

도구가 페이지에서 댓글 위젯을 찾지 못하면 큰 빨간 오류가 표시됩니다:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Embed.js 미발견 예시" title="Embed.js 미발견 예시" class="lozad" />
</div>

하나 이상의 위젯 인스턴스가 발견되면 각 인스턴스의 설정이 별도로 표시됩니다:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="다수의 설정 예시" title="다수의 설정 예시" class="lozad" />
</div>

또한, FastComments 디버거는 위젯이 주석이 없을 때 읽기 전용 모드에서 표시되지 않는 것과 같은 일반적인 함정에 대한 경고도 표시합니다.

#### "최종" 인스턴스 설정?

디버거가 "위젯에 전달된"과 "최종"이라고 레이블이 붙은 두 세트의 설정을 보여줄 수 있습니다.

"위젯에 전달된" 설정은 여러분이 위젯에 전달하는 설정으로, URL이나 페이지 제목과 같은 일부 값은 embed.js에 의해 암묵적으로 전달됩니다 - 그리고 이러한 값들이 포함됩니다.

"최종" 설정은 위젯이 스스로를 렌더링하는 데 사용하는 모든 것입니다. 이는 자기 채워진 값(예: 인스턴스 ID) 또는 <b>위젯 사용자 정의 관리 페이지의 값</b>을 포함할 수 있습니다.

#### 작동 방식

댓글 위젯은 디버거가 찾을 수 있는 위치에 설정을 저장하고, 디버거는 현재 사용자가 보고 있는 페이지에서 위젯 인스턴스를 스캔하고 메모리에 로드합니다.

#### 이 확장 프로그램은 어떤 정보를 수집하나요?

FastComments 디버거 도구는 정보를 전송하거나 FastComments 서버와 통신하지 않습니다. 사실, 위젯은 사용자가 보고 있는 페이지의 내용을 확인하지도 않습니다.
열지 않는 한.

#### 결론

이와 같은 도구를 더 많이 제공함으로써 다양한 고객이 FastComments를 설정하는 데 도움을 주기를 바랍니다. 아래 댓글란에 이 방법이 어떻게 작동했는지 알려주세요.

상황에 따라 여전히 도움이 필요할 수 있다는 것을 알고 있으며, 이를 위해 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">고객 지원 페이지</a>가 여전히 있습니다.

감사합니다!

{{/isPost}}