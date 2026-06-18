---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]리액트 네이티브 댓글 시스템 SDK 업데이트[/postlink]

{{#unless isPost}}
우리는 fastcomments-react-native-sdk를 처음부터 다시 구축했습니다: 새로운, 더 효율적인 상태 관리, 디자인 토큰을 사용한 재설계, 전용 라이브 채팅 위젯, 그리고 일급 웹 지원.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 기사에는 기술 용어가 포함되어 있습니다

### 새 소식

우리는 `fastcomments-react-native-sdk`의 5.1 버전을 출시했습니다. 이 라이브러리는 실시간으로 댓글과 채팅을 렌더링하는 리액트 네이티브 라이브러리로, WebView 대신 실제 네이티브 컴포넌트를 사용합니다.

우리는 내부 구조를 다시 작성하고, 전체적인 디자인을 재설계하고, 라이브 채팅 위젯을 추가하고, SDK를 웹으로 가져왔으며, 이를 최신 리액트 네이티브와 리액트로 업그레이드했습니다.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, light theme" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, dark theme" title="FastComments React Native SDK, dark theme" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### 왜 두 개의 리액트 네이티브 라이브러리인가요?

이 질문을 자주 받기 때문에 간단히 설명하겠습니다. 우리는 두 가지 옵션을 제공합니다:

- `fastcomments-react-native`는 웹 위젯의 얇은 래퍼로, WebView에서 실행됩니다. 이것은 모든 기능을 즉시 이용할 수 있는 가장 빠른 방법이며, 웹 수정 사항이 자동으로 적용됩니다.
- `fastcomments-react-native-sdk` (이것)가 UI를 웹뷰 없이 네이티브 리액트 네이티브 컴포넌트로 렌더링합니다. 이 라이브러리는 더 유연하고, 완전히 테마화 가능하며, 네이티브이기 때문에 네이티브처럼 느껴집니다.

최고의 경험을 위해 우리는 SDK를 추천합니다. 이 게시물의 나머지 부분은 5.0에서 변경된 내용에 관한 것입니다.

### 새로운 상태 관리

이 변경의 주요 동기는 우리의 라이브러리가 우리의 이름에 충실하고 빠르게 유지되도록 하는 것입니다. 몇몇 고객들이 성능에 대해 불만을 제기했기에 이제 해결되었습니다.

SDK는 원래 Hookstate에서 댓글 트리를 유지했습니다. 작동했지만, 스레드와 실시간 업데이트가 증가함에 따라 속도가 느려지기 시작했습니다.

우리는 Hookstate를 Zustand와 평면 인덱스 스토어로 교체했습니다. 이제 댓글은 상태 내부의 트리 대신 `byId` 맵과 `childrenByParent`, `rootOrder`, `pinnedIds` 인덱스에 존재합니다.

그 결과:

- 실시간 이벤트(새 댓글, 투표, 편집)가 트리를 탐색하고 복제하는 대신 O(1) 변이가 되었습니다.
- 매번 가져오는 동안 실행되었던 두 개의 전체 트리 JSON 깊은 복제를 제거했습니다.
- 컴포넌트는 읽는 슬라이스에 정확히 구독하므로, 한 댓글에 대한 투표는 그 댓글 하나만 터치합니다.

마지막 포인트는 생각보다 중요합니다. 선택자 기반 구독을 사용하면, 행은 자신의 데이터가 변경될 때만 다시 렌더링됩니다.

### 토큰 기반 재설계

이전 디자인은 하드코딩된 스타일의 무더기였습니다. 새로운 기본 디자인은 일련의 의미론적 디자인 토큰(`FastCommentsTheme`)에서 생성됩니다: 색상, 여백, 반지름, 글꼴 크기, 글꼴 두께, 아바타 크기 등. 전체 스타일 트리는 이러한 토큰에서 파생됩니다.

즉, 재스타일링은 하나의 prop으로 가능합니다:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

다크 모드는 하나의 토큰 세트로 가능합니다:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

재설계 자체는 더욱 깔끔하고 현대적인 중립적 외관입니다: 아주 얇은 구분선, 알약 투표 버튼 및 칩, 채워진 기본 버튼, 둥근 아바타, 일관된 글꼴 크기 조정. `styles` prop은 여전히 존재하여 세밀한 오버라이드를 허용하므로 기존 통합이 계속 작동합니다.

### 전용 라이브 채팅 위젯

우리는 `FastCommentsLiveChat`를 추가했습니다. 이 채팅 프리셋은 Android SDK의 채팅 뷰를 미러링하는 동일한 엔진에서 작동합니다: 가장 최근의 메시지가 아래에 표시되는 연대기 메시지, 목록 아래의 작성기, 연결 점과 사용자 수가 포함된 실시간 헤더 스트립, 오래된 메시지를 읽는 동안 일시 정지하는 자동 스크롤, 그리고 위로 스크롤할 때 무한 기록. 모든 프리셋은 `config`를 통해 오버라이드 할 수 있습니다.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### 웹에서도 이제 사용 가능

동일한 SDK가 `react-native-web`를 통해 웹에서도 실행됩니다. 리치 텍스트 작성기(`react-native-enriched`)는 iOS, Android 및 브라우저 모두에서 동일하게 렌더링되어, 편집 경험이 하나의 구현으로 모든 곳에서 일관되게 유지됩니다. 댓글 목록에서 잘릴 수 있는 오버레이(메뉴, GIF 선택기, 알림 목록 등)는 웹 빌드에서 그 트리거 바로 아래에 고정됩니다.

실시간 <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">컴포넌트 브라우저</a>에서 모든 위젯을 직접 체험해 볼 수 있으며, 이는 `react-native-web`를 통해 브라우저에서 실행되는 이 SDK입니다.

### 리액트 네이티브와 함께 최신 유지

5.0은 리액트 네이티브 0.81 및 리액트 19에 대해 빌드 및 테스트되었으며, 새로운 아키텍처(Fabric)를 타겟으로 하여, 네이티브 리치 텍스트 편집기에 필요합니다. 이곳에서 최신 상태를 유지하는 것은 바쁜 일이 아닙니다: 편집기, 제스처 처리, 렌더링 모두가 리액트 네이티브가 발전함에 따라 더 빠르고 정확해지며, 우리는 그런 업그레이드를 점진적으로 받아들이고 싶습니다.

### 결론

이번 재작성은 리액트 네이티브 SDK에 우리 다른 라이브러리들과 동등한 일급 기반을 제공하는 것이었습니다: 빠르고 예측 가능한 데이터 모델, 하나의 prop으로 테마화할 수 있는 모습, 채팅 위젯, 웹 지원 등 모두 최신 리액트 네이티브 기반 위에 이루어졌습니다.

SDK는 <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>에서 찾을 수 있으며, 예제가 있는 소스는 <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>에서 찾을 수 있으며, 모든 위젯이 <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">컴포넌트 브라우저</a>에서 실시간으로 실행되고 있습니다. 문제가 발생하면 아래에 알려주세요.

건배!

{{/isPost}}

---