---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments on Mobile - Less Whitespace More Content[/postlink]

{{#unless isPost}}
우리는 모바일에서 FastComments의 가독성 및 외관을 개선했습니다.
{{/unless}}

{{#isPost}}
#### 문제

FastComments를 처음 출시했을 때, 우리는 모바일과 데스크탑 브라우저에서 잘 작동하는 세련된 디자인을 원했습니다. 그러나 기능을 추가하고 사용자가 FastComments와 상호작용하는 것을 보면서, "예쁘게" 만들려고 하다 보니 모바일 UI에서 화면 공간을 낭비하고 있다는 것을 깨달았습니다.

그래서 우리는 타협점을 찾아냈습니다.

#### 해결책

여기에서 보기에는, 우리는 공간을 매우 효율적으로 사용하지 않았습니다.

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="Mobile Version Before"
        title="Mobile Version Before"
        class='lozad' />
</div>

이제 우리는 수직 화면 공간을 수평 화면 공간으로 교환했습니다.

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="Mobile Version After"
        title="Mobile Version After"
        class='lozad' />
</div>

    
#### 사용자 정의 규칙의 의미

우리는 공개-facing 댓글 위젯에 스타일 변경을 할 때, 고객의 사용자 정의가 깨질 수 있다는 것을 알고 있습니다. 걱정하지 마세요, 우리는 모두의 사용자 정의 위젯 스타일을 검토하여 깨지지 않았는지 확인했습니다. 그러나 문제가 발생하고 있다면 알려주세요.

#### 성능의 의미

이 변경으로 위젯 크기가 약 300바이트 증가하여 총 10.1kb가 되었습니다. 위젯의 크기를 증가시키는 모든 릴리스와 마찬가지로, 우리는 다시 크기를 줄일 방법을 찾고 있습니다.

즐거운 댓글 작성하세요!

{{/isPost}}