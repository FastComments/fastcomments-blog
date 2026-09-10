[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]금지된 사용자를 이제 검색할 수 있습니다[/postlink]

{{#unless isPost}}
금지된 사용자 페이지에 이제 검색 행이 추가되어 이메일, 이름, 차단을 수행한 사람, 또는 차단을 일으킨 댓글을 통해 차단을 찾을 수 있습니다.
{{/unless}}

{{#isPost}}

### 새로운 기능

The Banned Users page under Moderate Comments now has a search row above the table. Until now the only way through that
list was the Page and Count Per Page controls, which is fine when you have a dozen bans and painful when you have a few thousand.

There are three controls: **Search By** picks the field, **Match** picks Contains or Equals, and **Value** is what you're looking for.

### 검색할 수 있는 항목

**Search By** offers five options:

- **Any Field** - searches everything below at once
- **Email** - the banned address
- **Name** - the commenter's name
- **Banned By** - the moderator who issued the ban
- **Banned For Saying** - the text of the comment that got the user banned

The last four line up with the columns of the same name in the table, so the dropdown reads the same as the thing it filters.

### Contains와 Equals

**Contains** finds your value anywhere in the field. **Equals** matches the whole field.

Contains is the one you want most of the time. Searching `bademail.com` finds every ban on that domain, including the
wildcard `*@bademail.com` ban, because wildcard bans are stored with their asterisk intact.

Equals is for when you have the exact value and don't want near misses. Searching Email for `spammer@example.com` with
Equals returns that one ban and nothing else.

Both are case-insensitive on every field. This matters more than it sounds like it should: when a ban is created from a
comment, only the domain half of the address gets lowercased, so a ban can genuinely be stored as `MixedCase@Example.com`.
Searching for `mixedcase@example.com` finds it.

### 알아두면 좋은 두 가지 검색

**Banned For Saying** searches the comment text that triggered the ban. If a particular phrase or link has been going
around, you can pull up everyone who was banned over it in one query.

**Banned By** searches the moderator who issued the ban. If you want to review a specific moderator's decisions, or you're
onboarding someone and want to see what they've been doing, that's one search away.

### 페이지네이션 및 공유와 함께 작동

The search lives in the page URL, so paging through results keeps it applied and you can send a filtered list to another
moderator by copying the URL, the same way you already share moderation links. Starting a new search takes you back to the
first page, and **Clear** drops you back to the full list.

### 문서

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">모더레이션 가이드의 사용자 차단 섹션</a> covers the search row in detail.

### 결론

This one came out of watching how the page actually gets used. Bans accumulate quietly for years, and then one day you need
to find a specific one and there's no way to do it. Now there is.

Let us know below if there's a field you'd like to be able to search that isn't in the list.

감사합니다!

{{/isPost}}

---