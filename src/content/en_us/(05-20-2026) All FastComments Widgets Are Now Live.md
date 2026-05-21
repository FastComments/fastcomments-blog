---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]All FastComments Widgets Are Now Live[/postlink]

{{#unless isPost}}
Every embedded FastComments widget (comment counts, recent comments, top pages, recent discussions, reviews summary, floating likes) now updates in real time.
{{/unless}}

{{#isPost}}

### What's New

The main comment widget has been live since day one. The smaller embedded widgets, however, were not. Comment counts, "recent comments" or "top pages" widgets, etc., would happily display a number that was up to a minute outdated.

Now every widget FastComments ships now subscribes to live updates and refreshes immediately :) This includes review summaries as well!

### Which Widgets

All of them. Specifically:

- `FastCommentsCommentCount` - the per-page comment count
- `FastCommentsCommentCountBulk` - the bulk version that updates many counts on a list/archive page
- `FastCommentsRecentComments` and `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` and `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` (the floating comment-count badge)
- `FastCommentsEmbedPageLikesFloating` (the floating likes + comment count)

### What You Need To Do

Nothing. If you already have any of these embedded, refresh the page once. The next time a comment is posted, edited, deleted, or someone reacts to a page, the widget will update.

The old `isLive: true` config flag on the comment-count widgets is now unnecessary - widgets are always live.

If you load the widget JS from our CDN, you have the new version, including if you use one of our wrapper libraries (React, Vue, etc).

### Likes Are Live Too

The floating likes widget also responds to like and reaction events now. Click the heart on a page, and other open tabs see the count change.

### How It Works

Every widget opens a single WebSocket connection. Widgets that show data for one specific page (`comment-count` (including bulk), `reviews-summary`, `embed-page-likes-floating`) subscribe to that page's event stream. Widgets that show data spanning a tenant (`recent-comments`, `top-pages`, `recent-discussions`) subscribe to a slim per-tenant pulse stream that fires a signal whenever anything in that tenant changes.

The result is that an idle widget costs effectively nothing, and an active widget shows a fresh number within a second or two of the underlying change.

### Cache Coherence

The server-side caches that back these widgets used to expire on a 60-second TTL. They now invalidate the moment a relevant comment or reaction event occurs, so the first request after a change returns fresh data, not the cached version.

### In Conclusion

We're glad we could take the time to test and optimize this change so our customers can enjoy it at the same pricing as always. We think the
live review summaries are an especially cool differentiator for us.

Let us know below if you spot anything off.

Cheers!

{{/isPost}}