[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments가 이제 Zapier에 있습니다[/postlink]

{{#unless isPost}}
공식 FastComments Zapier 앱을 사용하여 댓글을 수천 개의 앱에 연결하세요. 트리거는 댓글이 게시되는 순간 작동하며, 모든 앱이 귀하의 사이트에 댓글, 페이지 및 사용자를 생성할 수 있습니다.
{{/unless}}

{{#isPost}}

### 새로운 소식

There is now an official FastComments app on [Zapier](https://zapier.com). Sign in once from the Zapier editor and you can send every new comment to Slack, log them to a spreadsheet, add commenters to your CRM, or create comments from a form submission, without writing any code.

Before this, wiring FastComments into another tool meant standing up a webhook receiver of your own or writing against the REST API. Both still work. The Zapier app is for the cases where you would rather not run anything.

### 트리거

Three triggers, all instant:

- **New Comment** fires when a comment is posted. By default only approved, non-spam comments trigger, so a Zap that posts to a public channel does not leak things still in the moderation queue. There is a checkbox to include everything.
- **Updated Comment** fires when a comment is edited, approved, voted on, pinned, or otherwise changed. Filter on the approved field and it becomes an "approved comment" trigger.
- **Deleted Comment** fires when a comment is deleted, with the full comment for your records.

Each trigger has an optional domain filter listing the domains configured on your account, so a Zap can watch one site out of many.

The triggers are backed by webhooks, not polling. FastComments delivers the event to Zapier the moment it happens, nothing polls your account while it waits, and waiting costs no API credits.

### 작업 및 검색

Actions call the FastComments API on your behalf:

- **Create Comment** on any page, as a named commenter or an existing SSO user, optionally as a reply.
- **Create Page**, so a page can be listed and restricted to member groups before its first comment.
- **Create SSO User**, so members from your other tools can comment under their own identity.
- **Create Feed Post** and **Create Hash Tag**.
- **Flag Comment** for moderator review.

Searches look things up for later steps: **Find Comment** by id, **Find SSO User** by email, and **Find Page** by URL ID. Pair a search with the matching create in Zapier's "find or create" mode and the missing user or page gets created for you.

### 시작하기 위한 몇 가지 Zap

- New Comment, then Slack "Send Channel Message". Map the commenter name, the comment, and the page URL. Use the domain filter to route each site to its own channel.
- New Comment, then Google Sheets "Create Spreadsheet Row", with Deleted Comment appending a row as a second Zap. The sheet becomes an audit trail.
- Updated Comment filtered on Approved is true, then Gmail "Send Email" to let the author know their comment is live.
- Typeform "New Response", then Create Comment on your testimonials page with Approved left unchecked, so you review each one before it appears.
- WordPress "New Post", then Create Page, so every post is registered before the first comment.

[가이드](https://docs.fastcomments.com/guide-installation-zapier.html) has more, including a workflow for provisioning SSO users from your membership tool.

### 연결 방법

The app uses OAuth. When you add a FastComments step, Zapier asks for your region (United States or EU), sends you to FastComments to sign in, and shows a consent page naming the application, the account it will connect to, and the permissions requested. No API key is copied into Zapier.

The person approving the connection must be an API admin on the account. Account owners have this already and can grant it to other team members on the Users page.

Every connection shows up under **Integrate, then Connected Apps** in your dashboard, marked as an official integration, with when it was last used. Revoking it there disconnects Zapier immediately. Turning a Zap on creates a webhook subscription you can see on the Webhooks page with the source **API**, and turning the Zap off removes it.

### 비용

The app is free on every Zapier plan, including the free one, and FastComments does not charge extra for it. Triggers spend no API credits. Actions and searches spend the same credits a call from your own code would, one per call in most cases.

### 문서

[The Zapier guide](https://docs.fastcomments.com/guide-installation-zapier.html) covers connecting an account, every trigger and action with its fields, example Zaps, and troubleshooting. The integration itself is open source at [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier).

### 결론

Open [fastcomments.com/zapier](https://fastcomments.com/zapier) to find the app, connect your account, and build your first Zap.

As always, let us know below if you run into anything.

감사합니다!

{{/isPost}}

---