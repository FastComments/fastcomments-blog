---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native 댓글 시스템 SDK 업데이트[/postlink]

{{#unless isPost}}
fastcomments-react-native-sdk를 처음부터 새로 구축했습니다: 새로운, 더 효율적인 상태 관리, 디자인 토큰을 활용한 리디자인, 전용 실시간 채팅 위젯, 그리고 1급 웹 지원.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 문서에는 기술 용어가 포함되어 있습니다

### 새로운 기능

`fastcomments-react-native-sdk`의 5.1 버전을 출시했습니다. 이는 WebView 대신 실제 네이티브 구성 요소로 댓글과 채팅을 렌더링하는 React Native 라이브러리입니다.

저희는 내부 구조를 다시 작성하고, 전체적인 디자인을 리뉴얼하며, 실시간 채팅 위젯을 추가하고, SDK를 웹으로 가져왔으며, 최신 React Native와 React로 업그레이드했습니다.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, 라이트 테마" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, 다크 테마" title="FastComments React Native SDK, 다크 테마" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### 두 개의 React Native 라이브러리는 왜 필요한가요?

이 질문을 많이 받기 때문에 간단히 설명하겠습니다. 저희는 두 가지 옵션을 제공합니다:

- `fastcomments-react-native`는 WebView에서 실행되는 웹 위젯에 대한 얇은 래퍼입니다. 이는 모든 기능을 즉시 사용할 수 있는 가장 빠른 방법이며, 웹 수정 사항을 자동으로 적용받습니다.
- `fastcomments-react-native-sdk` (이 라이브러리)는 웹뷰 없이 네이티브 React Native 구성 요소로 UI를 렌더링합니다. 이는 더 유연하고, 완전히 테마화 가능하며, 네이티브이기 때문에 네이티브처럼 느껴집니다.

최상의 경험을 위해 SDK를 추천합니다. 이 게시물의 나머지는 5.0에서 변경된 내용을 다룹니다.

### 새로운 상태 관리

이 변경의 주요 원동력은 저희 라이브러리가 저희 이름에 충실하고 Fast로 유지되도록 하는 것입니다. 여러 고객이 성능에 대해 불만을 제기하여 이제 그것이 수정되었습니다.

SDK는 원래 Hookstate에서 댓글 트리를 보관했습니다. 작동했지만, 스레드와 실시간 업데이트가 증가하면서 성능이 저하되기 시작했습니다.

우리는 Hookstate를 Zustand와 평면 인덱스 저장소로 교체했습니다. 댓글은 이제 상태 내의 트리 대신 `byId` 맵과 `childrenByParent`, `rootOrder`, `pinnedIds` 인덱스에 저장됩니다.

그로 인한 이점:

- 실시간 이벤트(새 댓글, 투표, 편집)는 트리를 걷고 복제하는 대신 O(1) 변형이 되었습니다.
- 매 fetch마다 실행되던 두 개의 전체 트리 JSON 깊은 복사본을 제거했습니다.
- 구성 요소는 읽는 슬라이스에만 구독하여, 표준 선택자 모델을 적용하므로 하나의 댓글에 대한 투표는 그 댓글에만 영향을 미칩니다.

마지막 포인트는 생각보다 중요합니다. 선택자 기반 구독으로 인해 행은 자신의 데이터가 변경될 때만 다시 렌더링됩니다.

### 토큰 기반 리디자인

구식 디자인은 하드코딩된 스타일의 집합이었습니다. 새로운 기본 디자인은 의미 기반 디자인 토큰(`FastCommentsTheme`) 세트에서 생성됩니다: 색상, 공간, 반경, 글꼴 크기, 글꼴 두께, 아바타 크기. 전체 스타일 트리는 이러한 토큰에서 파생됩니다.

즉, 스타일 변경은 하나의 prop로 가능합니다:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

다크 모드는 하나의 토큰 세트만 변경하면 됩니다:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

리디자인 자체는 더 깨끗하고 현대적이며 중립적인 모습입니다: 미세한 경계선, 알약 모양의 투표 버튼과 칩, 채워진 기본 버튼, 둥근 아바타, 일관된 글자 크기. `styles` prop은 아직도 있어 기존 통합이 작동하도록 수술적 오버라이드를 가능하게 합니다.

### 전용 실시간 채팅 위젯

우리는 `FastCommentsLiveChat`를 추가했습니다. 이는 저희 Android SDK의 채팅 뷰를 반영하는 채팅 프리셋입니다: 시간 순서에 따른 메시지, 가장 최근 메시지가 아래, 목록 아래의 작성기, 연결 점과 사용자 수가 있는 실시간 헤더 스트립, 사용자가 이전 메시지를 읽는 동안 일시 정지하는 자동 스크롤, 스크롤을 위로 올리면 무한한 히스토리. 모든 프리셋은 `config`를 통해 오버라이드할 수 있습니다.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### 이제 웹에서도 사용 가능

같은 SDK가 이제 `react-native-web`를 통해 웹에서 실행됩니다. 풍부한 텍스트 작성기( `react-native-enriched` 기반)는 iOS, Android 및 브라우저에서 동일하게 렌더링되므로 편집 경험이 어디서나 일관되며 단일 구현으로 가능합니다. 댓글 목록이 잘릴 수 있는 오버레이(메뉴, GIF 선택기, 알림 목록)는 웹 빌드에서 해당 트리거 아래에 고정됩니다.

### React Native와 함께 최신 상태 유지

5.0은 React Native 0.81 및 React 19에 대해 빌드되고 테스트되었으며, 네이티브 풍부한 텍스트 편집기에 필요한 새로운 아키텍처(패브릭)를 목표로 하고 있습니다. 여기에서 최신 상태를 유지하는 것은 단순한 작업이 아닙니다: 편집기, 제스처 처리 및 렌더링 모두 React Native가 발전하면서 더 빠르고 정확해지며, 우리는 그러한 업그레이드를 꾸준히 받아들이고 싶습니다.

### 결론

이 재작성은 React Native SDK에 저희 다른 라이브러리와 동급의 1급 기반을 제공하는 것이었습니다: 빠르고 예측 가능한 데이터 모델, 하나의 prop로 테마화할 수 있는 모습, 채팅 위젯, 웹 지원 모두 현대적인 React Native 기반 위에 있습니다.

SDK는 <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>에서 찾을 수 있으며, 소스 및 예제는 <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>에서 확인할 수 있습니다. 문제에 직면하시면 아래에 알려주세요.

감사합니다!

{{/isPost}}

---