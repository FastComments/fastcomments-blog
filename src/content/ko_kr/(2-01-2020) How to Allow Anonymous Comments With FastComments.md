---
[category:Tutorials]

###### [postdate]
# [postlink]FastComments로 익명 댓글을 허용하는 방법[/postlink]

{{#unless isPost}}
기본적으로 FastComments는 로그인이 되어 있지 않은 경우 댓글을 달기 위해 이메일을 요구합니다. 이 이메일을 사용하여 사용자 계정을 자동으로 생성하고 댓글을 인증할 수 있게 합니다.  
익명 댓글을 허용하려면 사용자 정의 규칙을 생성하기만 하면 됩니다. 익명 댓글을 허용하려는 도메인과 선택적으로 페이지를 정의하세요.  
{{/unless}}

{{#isPost}}
기본적으로 FastComments는 로그인이 되어 있지 않은 경우 댓글을 달기 위해 이메일을 요구합니다. 이 이메일을 사용하여 사용자 계정을 자동으로 생성하고 댓글을 인증할 수 있게 합니다.  
익명 댓글을 허용하려면 사용자 정의 규칙을 생성하기만 하면 됩니다. 익명 댓글을 허용하려는 도메인과 선택적으로 페이지를 정의하세요.  

이는 페이지별로 익명 댓글을 허용할 위치를 제어할 수 있음을 의미합니다.

<img 
    src="images/fc-allow-anon.png"
    alt="Allow Anonymous Comments"
    class='lozad' />

{{/isPost}}

---