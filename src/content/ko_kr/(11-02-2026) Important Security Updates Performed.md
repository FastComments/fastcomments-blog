[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]중요한 보안 업데이트 수행[/postlink]

{{#unless isPost}}
우리는 최근 Linux TCP 취약점을 해결하기 위해 모든 서버의 운영 체제를 패치했으며, Node.js를 최신 10월 보안 릴리스로 업데이트했습니다. 귀하 측에서 별도의 조치는 필요하지 않습니다.
{{/unless}}

{{#isPost}}

### 새로운 내용

우리는 최근 FastComments 인프라 전반에 걸쳐 두 가지 보안 업데이트를 완료했습니다: Linux 커널의 TCP 코드 취약점을 해결하기 위한 운영 체제 업데이트와 최신 보안 릴리스를 적용한 Node.js 업데이트.

### Linux Kernel

모든 서버가 패치되어 이제 <a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a>에 대한 수정이 포함된 커널을 실행하고 있습니다.

이는 커널의 IPv4 TCP 코드에서 발생하는 use-after-free 버그입니다. 커널은 연결에 부착된 IP 옵션을 다른 CPU가 아직 읽고 있는 동안 해제할 수 있었으며, 예를 들어 TCP 핸드셰이크 중 SYNACK 응답을 구성할 때 발생할 수 있습니다. 이 수정은 메모리를 해제하기 전에 모든 CPU가 해당 메모리를 더 이상 읽고 있지 않음을 확인합니다.

### Node.js

FastComments는 Node.js 위에서 실행되며, 우리는 24.x 라인에 대한 패치된 릴리스인 버전 24.22.1로 업데이트했습니다. 이는 <a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">2026년 10월 Node.js 보안 릴리스</a>에서 제공됩니다.

이 릴리스는 지원되는 Node.js 버전 전반에 걸쳐 10개의 취약점을 수정합니다. 그 중 8개는 24.x 라인에 영향을 미치며, 그 중 4개는 높은 등급으로 평가됩니다: IP 주소에 대한 TLS 검증 두 개, DNS 이름 처리 하나, Brotli 디코더 하나. 또한 OpenSSL, c-ares, Undici, CA 인증서 번들 등 번들된 종속성도 업데이트합니다.

### 해야 할 일

없습니다. 이 업데이트는 모두 당사 측에서 진행되므로 귀하의 위젯, API 통합 및 SSO 구성에 변경이 필요하지 않습니다.

### 결론

우리 인프라를 지속적으로 패치하는 것은 FastComments 운영의 일환이며, 이러한 업데이트가 발표되는 대로 계속 적용할 것입니다. 질문이 있으면 아래에 알려 주세요.

감사합니다!

{{/isPost}}

---