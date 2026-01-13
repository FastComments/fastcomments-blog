---
[category:Integrations]
###### [postdate]
# [postlink]BigCommerce 블로그에 댓글 추가하기[/postlink]

{{#isPost}}

#### 모든 페이지에 사용자 참여 추가
귀하의 청중이 블로그 게시물에 댓글을 달고 질문을 하며 피드백을 줄 수 있다면 어떨까요? 이제 FastComments로 가능합니다.

#### 맞춤형 테마
BigCommerce 스토어의 블로그에 FastComments를 추가하려면 테마 템플레이트를 수정해야 합니다. 방법을 안내해 드리겠습니다.

BigCommerce 대시보드에서 Storefront -> My Themes로 이동합니다.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Store Link" title="Store Link" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="My Themes Link" title="My Themes Link" class="lozad" />
</div>

"Current Theme" 아래에는 "Advanced"라는 레이블이 있는 드롭다운이 표시됩니다.

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Theme Advanced Dropdown" title="Theme Advanced Dropdown" class="lozad" />
</div>

이 드롭다운에서 첫 번째 옵션은 "Edit Theme Files"입니다. 이 옵션이 클릭할 수 없는 경우, 먼저 "Make a Copy"를 통해 테마를 복사해야 합니다.

템플릿 편집기를 열 수 있게 되면 브라우저의 왼쪽에 파일 브라우저가 표시됩니다. 이는 테마의 템플릿에 대한 파일 브라우저입니다.

블로그 게시물을 나타내는 HTML 템플릿으로 이동해야 합니다. 위치는 templates/components/blog/post.html입니다:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Editor Post File Location" title="Editor Post File Location" class="lozad" />
</div>

FastComments 코드 스니펫은 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">여기</a>에서 가져올 수 있으며, 텍스트 "&#123;{>components/common/share}&#125;"가 있는 48행 바로 뒤에 붙여넣어야 합니다.

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Place to insert FastComments" title="Place to insert FastComments" class="lozad" />
</div>

#### 잊지 마세요!
귀하의 스토어 도메인을 FastComments에 추가해야 하며, 이를 <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">여기</a>에서 할 수 있습니다.

#### 결론
이것이 BigCommerce 블로그에서 FastComments의 모습입니다. 건배!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence on a BigCommerce Blog" title="FastCommence on a BigCommerce Blog" class="lozad" />
</div>

{{/isPost}}

---