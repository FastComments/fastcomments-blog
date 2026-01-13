---
[category:Integrations]
[category:Tutorials]
###### [postdate]
# [postlink]Notion 페이지에 댓글 추가하기[/postlink]

{{#unless isPost}}
Notion 페이지에 댓글을 추가하고 싶으신가요? 저희가 도와드릴 수 있습니다.
{{/unless}}

{{#isPost}}

## 새로운 소식

FastComments는 이제 embed.ly 공급자가 되었으며, 그에 따라 댓글 스레드를 [oEmbed](https://oembed.com)를 지원하는 애플리케이션에 통합할 수 있는 API와 서비스를 제공합니다.

즉, 이제 Notion, Google Sites 또는 Nimbus Note로 구축된 사이트에 실시간 댓글 기능을 쉽게 추가할 수 있습니다.

## 사용 방법 - 간단한 데모

테넌트에 로그인한 후, [fastcomments.com/create](https://fastcomments.com/create)를 방문하여 대화 링크를 생성하고, 이를 Notion 페이지나 embed.ly와 통합된 기타 애플리케이션에 추가할 수 있습니다.

데모 임베드 링크인 [fastcomments.com/c/demo](https://fastcomments.com/c/demo)를 사용하여 직접 시도해 볼 수 있습니다:

<video src="images/fastcomments-notion.mp4" controls alt="FastComments와 Notion 데모" title="FastComments와 Notion 데모"></video>

임베드된 댓글 위젯은 FastComments의 다른 인스턴스처럼 사용자에 맞게 커스터마이즈할 수 있습니다.

예를 들어, 위의 비디오에서 볼 수 있듯이, 사용자가 댓글이나 투표를 하기 위해 이메일이 아닌 이름만 입력하면 되도록 댓글 위젯을 커스터마이즈할 수 있습니다.

## 2023년 업데이트 - Super.so 지원

이제 FastComments를 사용하여 Notion 문서 위에 구축된 Super.so 사이트에 댓글을 추가할 수 있습니다! [문서는 여기에서 확인할 수 있습니다.](https://docs.fastcomments.com/guide-installation-super-so.html)

## Google Sites

Google Sites도 지원되며, 흐름은 유사합니다.

1. [임베드할 대화 생성.](https://fastcomments.com/create)
2. Google Site 편집 시, `삽입` -> `임베드`로 이동합니다. `URL로` 선택합니다.
3. 1단계에서 복사한 URL을 붙여넣습니다.
4. `삽입`을 클릭합니다. 완료!

#### 임베드 링크 추가하기

<div class="text-center">
    <img src="/images/google-sites-howto.png" title="Google Site에 FastComments 추가하는 방법" alt="Google Site에 FastComments 추가하는 방법" />
</div>

#### Google Site에 댓글 추가 완료!

<div class="text-center">
    <img src="/images/google-sites-howto-done.png" title="완료!" alt="완료!" />
</div>

## Nimbus Note

Nimbus Note도 지원되며, 흐름은 유사합니다.

1. [임베드할 대화 생성.](https://fastcomments.com/create)
2. 노트를 편집할 때 임베드 블록을 추가합니다.
3. 1단계에서 복사한 URL을 임베드할 URL로 사용합니다.
4. `삽입`을 클릭합니다. 완료!

### 누구에게 제공되나요

모든 현재 및 신규 FastComments 고객은 모든 요금제가 oEmbed 지원을 이용할 수 있습니다.

### 기존 대화 임베드하기

기존 대화를 임베드하려면, 댓글 위젯에 전달된 <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID</a> 값을 대화 이름으로 대화 생성 페이지에 입력하면 됩니다.

### 결론

FastComments의 나머지 기능들과 마찬가지로, 이 기능이 빠르고 쉽게 사용할 수 있기를 바랍니다.

건배!

{{/isPost}}

---