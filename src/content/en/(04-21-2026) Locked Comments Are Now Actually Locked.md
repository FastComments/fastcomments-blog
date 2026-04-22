[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Locked Comments Are Now Actually Locked[/postlink]

{{#unless isPost}}
The lock icon finally shows up on locked comments, and locked comments can no longer be edited or deleted until an admin unlocks them.
{{/unless}}

{{#isPost}}

### What's New

Moderators have been able to lock comments for a long time. Locking a comment prevents new replies, which is handy when a thread has run its course or a sub-conversation goes off the rails.

The problem was that "locked" did not have much weight. Readers had no visual indication that a comment was locked. And even though new replies were blocked, the original author or anyone with edit access could still edit or delete the comment. That is not really locked. This update fixes both of those.

### The Lock Icon

When a moderator locks a comment, a small padlock now appears in the top-right corner of the comment, right next to the pin icon. It shows for every reader - not just moderators. Unlocking the comment removes it.

The icon honors light and dark mode, same as the pin icon.

### Edit and Delete Are Blocked

A locked comment cannot be edited or deleted by anyone, including admins and moderators. If you want to edit or remove a locked comment, unlock it first, make the change, then re-lock if you want to.

This applies across every path that touches a comment:

- The user-facing widget hides the Edit and Delete menu entries on locked comments.
- The public API PATCH and DELETE endpoints return a `locked` error if the target comment is locked.
- The admin moderation UI surfaces the locked error if you try to delete without unlocking first.

### Exceptions

A handful of paths intentionally bypass the lock so they can do their job:

- Account deletion. If a user deletes their FastComments account, their comments get cleaned up regardless of lock state.
- Tenant / SSO user cleanup. Same idea for tenant-level user removal.
- Scheduled auto-delete. If you scheduled a comment to be deleted at a specific time, the scheduler does not need to care about locks.
- Duplicate cleanup. The dedupe tool removes locked duplicates without ceremony.
- Moderator bans with "delete all comments from this user". Banning a user and sweeping their history is a single intentional action, so it clears locks too.

Everything else - the widget, the moderation UI, the public API, external callers - respects the lock.

### API Error Shape

If you call the public API to edit or delete a locked comment, you will get a response like:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Comment is locked.",
    "translatedError": "This comment is locked and cannot be edited or deleted. Unlock it first."
}</div>

The HTTP status is 401. The `translatedError` field uses your tenant's configured locale and any custom translation you have set up.

### In Conclusion

Small change, but it closes a gap that had been open for a while. Locked now means locked.

Cheers!

{{/isPost}}
