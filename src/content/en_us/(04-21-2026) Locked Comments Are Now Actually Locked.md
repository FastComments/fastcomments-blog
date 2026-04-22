---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Locked Comments Are Now Actually Locked[/postlink]

{{#unless isPost}}
The lock icon now appears on locked comments, and locked comments can no longer be edited or deleted until an admin unlocks them.
{{/unless}}

{{#isPost}}

### What's New

Moderators have been able to lock comments for quite some time. Locking a comment prevents new replies, which is useful when a thread has run its course or a sub-conversation goes off topic.

The issue was that "locked" did not carry much significance. Readers had no visual indication that a comment was locked. And even though new replies were blocked, the original author or anyone with edit access could still edit or delete the comment. That isn't truly locked. This update addresses both of those concerns.

### The Lock Icon

When a moderator locks a comment, a small padlock now appears in the top-right corner of the comment, right next to the pin icon. It is visible to every reader - not just moderators. Unlocking the comment removes the icon.

The icon adapts to light and dark mode, just like the pin icon.

### Edit and Delete Are Blocked

A locked comment cannot be edited or deleted by anyone, including admins and moderators. If you wish to edit or remove a locked comment, unlock it first, make the change, then re-lock it if desired.

This applies across every path that interacts with a comment:

- The user-facing widget hides the Edit and Delete menu options on locked comments.
- The public API PATCH and DELETE endpoints return a `locked` error if the target comment is locked.
- The admin moderation UI displays the locked error if you try to delete without unlocking first.

### Exceptions

A few paths intentionally bypass the lock so they can perform their functions:

- Account deletion. If a user deletes their FastComments account, their comments are removed regardless of lock state.
- Tenant / SSO user cleanup. The same applies for tenant-level user removal.
- Scheduled auto-delete. If you scheduled a comment for deletion at a specific time, the scheduler does not need to consider locks.
- Duplicate cleanup. The deduplication tool removes locked duplicates without hesitation.
- Moderator bans with "delete all comments from this user". Banning a user and clearing their history is a single intentional action, so it also removes locks.

Everything else - the widget, the moderation UI, the public API, external callers - respects the lock.

### API Error Shape

If you call the public API to edit or delete a locked comment, you will receive a response like:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Comment is locked.",
    "translatedError": "This comment is locked and cannot be edited or deleted. Unlock it first."
}</div>

The HTTP status is 401. The `translatedError` field uses your tenant's configured locale and any custom translation you have set up.

### In Conclusion

It's a small change, but it closes a gap that has existed for a while. Locked now truly means locked.

Cheers!

{{/isPost}}

---