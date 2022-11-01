###### [postdate]
# [postlink]Approvals Can Now be Done Once Per User[/postlink]

{{#unless isPost}}
Previously, if manual approval was enabled, every comment would have to be moderated. Now, if desired, once a user is approved, their
future comments don't require moderation.
{{/unless}}

{{#isPost}}

### What's New

Previously, if manual approval was enabled, every comment would have to be moderated. Now, if ***Only Auto Approve For Approved Users*** is enabled,
a user's comment don't require approval if they have been approved before.

This serves as a sort of gateway into a community, which may be desirable for communities that want to have approvals but don't want to
approve every single comment.

### How to Get It

You can enable this feature via [Comment Moderation Settings](https://fastcomments.com/auth/my-account/moderate-comments/settings), accessible via
`Moderate Comments -> Settings`.

Under `Comment Approval` select `Automatically Approve Comments` and then `Only Auto Approve For Approved Users`.

### Keeping Existing Functionality

If you manually approve every comment today, and you want to continue to do so, simply do nothing. We will not be turning this feature on automatically
or by default.

### In Conclusion

We know this feature has been long awaited by some. Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature.

Cheers!

{{/isPost}}
