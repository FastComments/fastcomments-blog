---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Disqus에서 광고 제거하는 방법[/postlink]

{{#unless isPost}}
무료 Disqus 요금제를 사용하면 댓글 섹션에 광고가 붙어 있습니다. 이를 제거하는 방법은 두 가지가 있습니다. 더 나은 방법은 댓글이 더 빠르게 로드되게 하고 독자들이 추적되는 것을 방지합니다.
{{/unless}}

{{#isPost}}

Disqus는 무료 요금제를 제공하기 위해 댓글 섹션에 광고를 게재합니다. 이 광고는 여러분의 콘텐츠 바로 아래, 독자들이 여러분과 소통하는 동일한 위치에 나타납니다. 그 광고는 여러분의 것이 아닙니다. 여러분은 그것을 선택하지 않으며, 그로 인해 한 푼도 벌지 않습니다. 이것이 무료 요금제를 사용하는 대가입니다.

이를 제거하는 실질적인 방법은 두 가지가 있습니다.

## 옵션 1: Disqus 요금제 업그레이드

간단한 방법은 Disqus에 비용을 지불하는 것입니다. 유료 요금제를 이용하면 광고가 꺼집니다. 현재 옵션은 <a href="https://disqus.com/pricing/" target="_blank">Disqus 요금제 페이지</a>에서 확인할 수 있습니다.

이 방법은 효과가 있지만, 무엇을 구입하는지 명확히 할 필요가 있습니다. 여러분은 단점을 제거하기 위해 비용을 지불하는 것입니다. 광고는 사라지지만 Disqus의 나머지 기능은 그대로입니다: 댓글 영역은 여전히 많은 서드파티 스크립트를 로드하며, 독자들은 이를 포함하는 사이트들 간에 여전히 추적됩니다. 여러분은 광고를 제거하기 위해 비용을 지불하고 있으며, 댓글 섹션을 더 가볍거나 더 개인적으로 만드는 것이 아닙니다.

## 옵션 2: 광고가 전혀 없는 플랫폼으로 전환

광고를 제거하는 또 다른 방법은 처음부터 광고를 운영하지 않는 댓글 플랫폼을 사용하는 것입니다. :)

월 $0.99에 FastComments는 추적이나 광고 없이 깊이 최적화된 기능을 제공합니니다.

## 모든 댓글을 보존합니다

사람들이 가장 걱정하는 부분은 기존의 논의가 사라지는 것입니다. FastComments는 댓글, 사용자 이름, 사용자 아바타, 인라인 이미지, 투표 및 타임스탬프를 가져오는 내장 Disqus 가져오기 도구를 제공합니다. 우리는 모든 이미지를 CDN으로 이동해 드립니다.

전체 세부 정보를 원하신다면 전용 가이드가 있습니다: [Disqus에서 FastComments로 마이그레이션하기](/(1-23-2020)-migrating-from-disqus-fastcomments.html). 간단한 버전은 아래에 있습니다.

## 세 단계로 전환하는 방법

### 1. Disqus에서 댓글 내보내기

<a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">Disqus의 내보내기 단계</a>를 따르세요. 그러면 "gz" 확장자를 가진 파일이 이메일로 전송됩니다. 이 파일을 열거나 압축을 풀 필요는 없으며, 기본 Windows 설치로는 그렇지 못합니다. 우리 백엔드는 그 압축 파일을 직접 읽습니다.

### 2. FastComments에 파일 가져오기

로그인한 후 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">가져오기 페이지</a>로 이동하여 드롭다운에서 Disqus를 선택하고 파일을 그대로 업로드하세요. 가져오기는 백그라운드에서 실행되며, 이 과정에서 댓글 발견 수와 가져온 수를 실시간으로 보여주는 페이지가 자동으로 업데이트됩니다. 필요할 만큼 여러 번 다시 가져오는 것도 안전합니다.

### 3. Disqus 스니펫을 우리의 것으로 교체

페이지에서 Disqus 임베드 코드를 제거하고 <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">FastComments 스니펫</a>을 대신 삽입하세요. 페이지 URL이 동일하게 유지된다면, 가져온 댓글은 원래 있던 위치에 정확히 정렬됩니다.

## WordPress를 사용하고 계신가요?

사이트가 WordPress에서 운영된다면 수동 단계를 생략하고 <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress 플러그인</a>을 설치하세요. 이 플러그인이 설치, 설정 및 동기화를 처리해 주며, 이후 Disqus를 비활성화할 수 있습니다.

## 실행하기 전에 테스트해보세요

한 번에 모든 전환을 할 필요는 없습니다. Disqus와 FastComments를 같은 페이지에서 일시적으로 운영하여 전체적인 디자인과 느낌을 비교해 볼 수 있습니다. 이와 관련하여 도움이 필요하다면, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">저희에게 연락해 주세요</a>, 도움을 드리겠습니다.

FastComments의 비용이 궁금하신가요? 모든 요금제가 광고 없이 제공되며, <a href="https://fastcomments.com/pricing-calculator" target="_blank">가격 계산기</a>에서 귀하의 요금을 확인할 수 있습니다. EU에 계신 경우 <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>에서 계정을 생성하시면 데이터가 EU 내에 유지됩니다.

## 요약

1. Disqus에서 데이터를 내보내세요
2. FastComments로 가져오세요
3. Disqus 스니펫을 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments의</a> 것으로 교체하세요

그게 전부입니다. 댓글 섹션에 광고가 없고, 페이지가 더 가벼우며 이미 있던 모든 댓글이 보존됩니다.

건배!

{{/isPost}}

---