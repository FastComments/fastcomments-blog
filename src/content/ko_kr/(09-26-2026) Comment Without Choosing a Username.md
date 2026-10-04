[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]사용자 이름을 선택하지 않고 댓글 달기[/postlink]

{{#unless isPost}}
FastComments는 이제 각 새로운 방문자에게 고유하고 중립적인 사용자 이름을 제공하여 사용자가 직접 만들 필요가 없게 되었습니다. 공유된 Default Username도 더 이상 첫 번째 사용자가 사용함으로써 "taken" 상태가 되지 않습니다.
{{/unless}}

{{#isPost}}

### 새 기능

사이트에 로그인 기능이 없을 경우, 댓글을 남기고자 하는 방문자는 이메일과 사용자 이름 두 가지를 입력하도록 요청받았습니다. 이메일은 간단하지만, 사용자 이름은 고유해야 하고 공개되며, 즉시 생각해내야 합니다.

이번 릴리스에서는 그 단계를 제거합니다. 위젯 커스터마이징에서 **Generate Usernames Automatically**를 켜면, 각 새로운 방문자는 `BraveOtter4172`와 같은 이름이 미리 채워진 상태로 도착합니다. 사용자는 이를 유지하거나 직접 입력할 수 있습니다. 어느 쪽이든 댓글 입력란에 더 빨리 도달할 수 있습니다.

### 활성화 방법

Open your <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">위젯 커스터마이징</a>, find the **Anonymization** section, and check **Generate Usernames Automatically**. There's nothing else to configure.

It works with or without **Allow Anonymous Comments**. If you still want an email from every commenter, leave anonymous commenting off. Visitors enter their email, the username is handled for them, and that's it. If you don't need an email, turn anonymous commenting on and a visitor can comment with no typing beyond the comment itself.

### 방문자가 보는 화면

The username field is prefilled with the generated name. It is an ordinary input, so anyone who wants to be known as something else just replaces it. Nothing is hidden and nothing is forced.

The names are two words and a number, so they're readable and neutral. Nobody ends up as `user_83729`.

### 모든 이름은 고유합니다

A generated name is checked against existing accounts before it's offered, and it's reserved for that visitor's browser session so the next visitor isn't offered the same one. Logged in users, SSO users, and visitors who have already commented are never given a new name. They keep the one they have.

A returning visitor who enters an email they've used before is matched to their existing account, so a second visit doesn't create a second identity even if the browser was cleared in between.

### 버그 수정 - Default Username이 이제 실제로 공유됩니다

Some of you have been using **Default Username** with a value like "Anonymous" to get most of the way here. That had a catch. Usernames are unique, so the first visitor to comment as "Anonymous" with their email owned the name, and the next visitor with a different email was told the username was taken.

This is fixed. The default username is now treated as a shared display name rather than an identity. Every visitor who keeps it gets their own account behind the scenes, and all of them show as "Anonymous". Usernames that visitors type themselves still have to be unique, as before.

If you set both, the generated name wins.

### 문서

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">Generate Usernames Automatically 가이드</a>
covers the option and how it interacts with the other anonymous commenting settings.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">Default Username 가이드</a>
covers the shared-name behavior.

### 결론

This one came from a customer running a site where visitors are patients who may only ever leave one piece of feedback. Asking them for an email and a unique username was one question too many. If a setting is standing between your readers and the comment box, let us know below.

감사합니다!

{{/isPost}}