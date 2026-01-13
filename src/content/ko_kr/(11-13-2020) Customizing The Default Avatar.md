---
[category:UI & Customization]

###### [postdate]
# [postlink]기본 아바타 사용자 정의하기[/postlink]

{{#unless isPost}}
기본 아바타 이미지를 이제 사용자 정의할 수 있습니다.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 글에는 기술 용어가 포함되어 있습니다

#### 소개

기본 아이콘은 FastComments가 출시된 이후로 동일했습니다. 기본 프로필 아이콘의 위엄을 보십시오.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="기본 프로필 아이콘" alt="기본 프로필 아이콘" />
</div>

하지만 이제 사용자 정의할 수 있습니다.

#### 코드 없이

먼저, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">사용자 정의 규칙을 추가하거나 수정</a>하십시오. 사용자 정의 규칙은 특정 페이지, 도메인 또는 전체 계정에 적용할 수 있습니다. 프로필 사진을 전역적으로 변경하려면 URL ID 필드를 비워두면 됩니다.

"기본 아바타" 섹션으로 스크롤합니다.

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday 설정"
    class='lozad' />
    
버튼을 클릭하여 최대 20mb의 JPG, PNG 또는 GIF를 업로드합니다. 100px 정사각형으로 크기가 조정됩니다.

#### 코드에서

기본 아바타를 호스팅하고 이미 공용 URL이 있는 경우, 주어진 예제와 같이 코드에서 정의할 수 있습니다.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

이미지는 정사각형이어야 하며 크기는 100px 정사각형이어야 합니다. 이러한 제약 조건을 준수하면 최고의 경험을 보장할 수 있습니다.

#### 주의 사항

1. 기본 프로필 사진을 사용자 정의하면 귀하의 사이트에만 영향을 미칩니다. 알림 이메일이나 사용자의 계정에는 영향을 미치지 않습니다.
2. 이 변경 전에 생성된 댓글은 여전히 이전 프로필 사진을 표시할 수 있습니다. 기본 프로필 아이콘을 조정하고 사이트에 많은 댓글이 이전 프로필 아이콘을 사용하는 경우, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">알려주십시오</a>.

#### 결론

이 가이드가 도움이 되고 읽기 쉬웠기를 바랍니다. 질문이 있는 경우 아래에 댓글을 남겨주세요.

건배!

{{/isPost}}

---