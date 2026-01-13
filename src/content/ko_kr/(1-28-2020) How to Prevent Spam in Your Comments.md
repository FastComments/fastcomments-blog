---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]댓글에서 스팸을 방지하는 방법[/postlink]

스팸을 100% 차단하는 방법은 없습니다. 하지만 FastComments는 이를 도와줄 여러 가지 조치를 시행합니다.

{{#isPost}}

## 사이트 관리자 문서

FastComments의 기본 설치에서는 스팸 및 부적절한 언어 필터링이 활성화되어 있습니다.

이 기본 설정은 스팸을 방지하면서 대부분의 커뮤니티에 지나치게 방해가 되지 않도록 균형을 맞춥니다.

[중재 가이드를 확인해 보시기 바랍니다](https://docs.fastcomments.com/guide-moderation.html).

## 작동 방식

우리의 스팸 필터는 [Naive Bayes 분류기](https://en.wikipedia.org/wiki/Naive_Bayes_classifier)를 사용하여 스팸을 식별합니다.

이는 관리자가 스팸으로 표시한 내용과 스팸이 아닌 내용을 기반으로 시간이 지남에 따라 학습됩니다.

FastComments는 귀하의 사이트에서 iframe으로 실행됩니다. 이는 자동화된 스팸 봇이 귀하의 댓글 섹션을 타겟팅하기 어렵게 만듭니다. 그러나 만약 그들이 댓글을 남기고 우리의 분류기가 그들의 댓글을 "스팸성"으로 판단하면, 해당 댓글은 귀하의 사용자에게 숨겨집니다. 다른 모든 댓글과 마찬가지로, 이는 대시보드의 [중재 페이지](https://fastcomments.com/auth/my-account/moderate-comments)에서 "검토 필요"로 표시됩니다.

그러나 부적절한 언어 필터링은 기본적으로 숨겨진 댓글을 생성하지 않습니다. 대신 "나쁜 단어"는 별표로 표시됩니다.

## 스팸 완전 차단

기본적으로 FastComments는 스팸을 허용하지만, 숨기고 검토를 위해 표시합니다.

사용자에게 그들의 댓글이 스팸으로 감지되었다고 알리고 이를 수정해 줄 것을 요청하고 싶다면, [중재 설정](https://fastcomments.com/auth/my-account/moderate-comments/settings)에서 `스팸 차단` 설정을 활성화하면 됩니다.

## 부적절한 댓글 숨기기

부적절한 댓글은 [중재 설정](https://fastcomments.com/auth/my-account/moderate-comments/settings)에서 `부적절한 댓글을 자동으로 스팸으로 보내기`를 활성화하여 숨길 수 있습니다.

## 설정

부적절한 언어와 스팸 필터링은 [중재 설정](https://fastcomments.com/auth/my-account/moderate-comments/settings) 페이지에서 각각 개별적으로 끌 수 있습니다.

## 댓글 검증

FastComments는 기본적으로 모든 사용자가 볼 수 있도록 [검증되지 않은 댓글](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments)을 표시하는 검증 시스템을 사용합니다.

사용자가 완전히 로그인하지 않고도 댓글을 남길 수 있도록 허용하면, 논의에 참여하는 장벽이 낮아집니다. 검증되지 않은 레이블은 사용자 정의 규칙을 통해 숨길 수 있습니다.

검증되지 않은 댓글은 기본적으로 표시되지만, 이메일을 통해 검증될 때까지 숨길 수 있으며, 이를 위해 `검증된 댓글만 자동 승인`을 활성화하면 됩니다.

SSO가 적용된 경우, 모든 댓글은 항상 검증됩니다. 사용자가 검증된 세션에 로그인하면, 그들의 댓글도 항상 검증됩니다.

검증되지 않은 댓글은 삭제를 위해 예약될 수도 있습니다.

## 댓글 작성자를 위하여

귀하의 댓글이 스팸으로 감지되면 즉시 메시지를 보게 됩니다. 이는 다른 사용자에게 표시되기 전에 댓글을 검토해야 한다는 것을 알려주기 위함입니다. 스팸 감지는 100% 정확할 수 없으므로, 약간의 불편함을 느낄 수 있는 점 이해합니다. 귀하의 댓글이 정당하다면 사이트 관리자가 이를 인식하고 귀하의 댓글을 스팸이 아니라고 표시할 수 있어야 합니다.

{{/isPost}}