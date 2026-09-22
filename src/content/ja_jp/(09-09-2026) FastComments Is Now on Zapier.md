[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments が Zapier に登場[/postlink]

{{#unless isPost}}
Connect your comments to thousands of apps with the official FastComments app for Zapier. Triggers fire the moment a comment is posted, and any app can create comments, pages, and users on your site.
{{/unless}}

{{#isPost}}

### What's New

There is now an official FastComments app on [Zapier](https://zapier.com). Sign in once from the Zapier editor and you can send every new comment to Slack, log them to a spreadsheet, add commenters to your CRM, or create comments from a form submission, without writing any code.

Before this, wiring FastComments into another tool meant standing up a webhook receiver of your own or writing against the REST API. Both still work. The Zapier app is for the cases where you would rather not run anything.

### Triggers

Three triggers, all instant:

- **New Comment** fires when a comment is posted. By default only approved, non-spam comments trigger, so a Zap that posts to a public channel does not leak things still in the moderation queue. There is a checkbox to include everything.
- **Updated Comment** fires when a comment is edited, approved, voted on, pinned, or otherwise changed. Filter on the approved field and it becomes an "approved comment" trigger.
- **Deleted Comment** fires when a comment is deleted, with the full comment for your records.

Each trigger has an optional domain filter listing the domains configured on your account, so a Zap can watch one site out of many.

The triggers are backed by webhooks, not polling. FastComments delivers the event to Zapier the moment it happens, nothing polls your account while it waits, and waiting costs no API credits.

### Actions and Searches

Actions call the FastComments API on your behalf:

- **Create Comment** on any page, as a named commenter or an existing SSO user, optionally as a reply.
- **Create Page**, so a page can be listed and restricted to member groups before its first comment.
- **Create SSO User**, so members from your other tools can comment under their own identity.
- **Create Feed Post** and **Create Hash Tag**.
- **Flag Comment** for moderator review.

Searches look things up for later steps: **Find Comment** by id, **Find SSO User** by email, and **Find Page** by URL ID. Pair a search with the matching create in Zapier's "find or create" mode and the missing user or page gets created for you.

### A Few Zaps to Start With

- New Comment, then Slack "Send Channel Message". Map the commenter name, the comment, and the page URL. Use the domain filter to route each site to its own channel.
- New Comment, then Google Sheets "Create Spreadsheet Row", with Deleted Comment appending a row as a second Zap. The sheet becomes an audit trail.
- Updated Comment filtered on Approved is true, then Gmail "Send Email" to let the author know their comment is live.
- Typeform "New Response", then Create Comment on your testimonials page with Approved left unchecked, so you review each one before it appears.
- WordPress "New Post", then Create Page, so every post is registered before the first comment.

[The guide](https://docs.fastcomments.com/guide-installation-zapier.html) has more, including a workflow for provisioning SSO users from your membership tool.

### How It Connects

The app uses OAuth. When you add a FastComments step, Zapier asks for your region (United States or EU), sends you to FastComments to sign in, and shows a consent page naming the application, the account it will connect to, and the permissions requested. No API key is copied into Zapier.

The person approving the connection must be an API admin on the account. Account owners have this already and can grant it to other team members on the Users page.

Every connection shows up under **Integrate, then Connected Apps** in your dashboard, marked as an official integration, with when it was last used. Revoking it there disconnects Zapier immediately. Turning a Zap on creates a webhook subscription you can see on the Webhooks page with the source **API**, and turning the Zap off removes it.

### What It Costs

The app is free on every Zapier plan, including the free one, and FastComments does not charge extra for it. Triggers spend no API credits. Actions and searches spend the same credits a call from your own code would, one per call in most cases.

### Documentation

[The Zapier guide](https://docs.fastcomments.com/guide-installation-zapier.html) covers connecting an account, every trigger and action with its fields, example Zaps, and troubleshooting. The integration itself is open source at [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier).

### In Conclusion

Open [fastcomments.com/zapier](https://fastcomments.com/zapier) to find the app, connect your account, and build your first Zap.

As always, let us know below if you run into anything.

Cheers!

{{/isPost}}

---