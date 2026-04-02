[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]The Moderation Page Is Now Live[/postlink]

{{#unless isPost}}
The FastComments moderation page now shows a live notification when new comments arrive that match your current filters.
{{/unless}}

{{#isPost}}

### What's New

The moderation page has always been a powerful tool for managing comments. You could filter by status, search by text, filter by page
or user, and perform bulk actions. But to see new comments you had to refresh the page.

Not anymore! The moderation page now shows when new comments arrive that match your current filters. A banner appears at the top of the comment list telling you how many new comments are waiting, and clicking it loads them inline without a full page refresh.

The "new comments for your filters" message should be near instantaneous in most circumstances.

### Filter Evaluation

The transport layer evaluates all moderation filters server-side. This includes status filters (needs review, needs approval, spam, flagged,
banned), string filters (user ID, page URL, domain), and even text search. Quoted text like <div class="code">"exact phrase"</div> does an
exact case-insensitive substring match, while unquoted terms do fuzzy case-insensitive matching.

This means if you're filtering for spam comments, you won't get notified about approved comments. If you're searching for comments
containing a specific phrase, only matching comments trigger the banner.

### Moderation Groups

If your account uses moderation groups to restrict which moderators can see which comments, these restrictions are fully enforced
for live notifications. The transport layer calls back to the application server to build the filter, which includes group restrictions
based on the moderator's assigned groups. This filter is cached for the duration of the WebSocket connection and updated whenever
the moderator changes filters.

### Missed Events

If a moderator's connection drops temporarily (network issues, laptop sleep, etc), the system catches up automatically on reconnect so
you don't miss any work.

### Performance

We designed this feature to have minimal impact on the moderation page load time.

### Multi-Region

This feature works seamlessly with our globally distributed architecture, so globally distributed moderation teams get the same live view.

### In Conclusion

We hope this feature saves moderators time and makes the moderation experience more responsive. As always, we thank our customers for
their feedback and support.

Cheers!

{{/isPost}}
