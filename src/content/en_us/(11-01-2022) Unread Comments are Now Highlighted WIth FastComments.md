---
[category:UI & Customization]
###### [postdate]
# [postlink]Unread Comments are Now Highlighted With FastComments[/postlink]

{{#unless isPost}}
Have you ever returned to a page and wanted to pick up reading the comment section where you left off? FastComments now styles comments
that you missed, making this easy.
{{/unless}}

{{#isPost}}

### What's New

Have you ever returned to a page and wanted to pick up reading the comment section where you left off? FastComments now styles comments
that you missed, making this easy.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar in new comment highlighted." />
</div>

### How to Get It

Any comment that triggered an in-app notification (replies, replies in the same thread, or comments on a page
that you're subscribed to) will automatically be highlighted with the user's avatar glowing slightly. The color can be customized via CSS
using the `is-unread` class. The default styling also supports dark mode.

Additionally, a new `24hr` CSS class has been added to comment elements posted within the last 24 hours. You may use this to style
comments as well.

### Why Highlight The Avatar?

We understand that it might be preferable to highlight the entire comment. However, this presents readability and styling challenges with
our customers who have customized the platform to fit their product. We found that highlighting the avatar slightly is a rather unobtrusive
change in most cases. If desired, the glow can be removed and altered using widget customization rules.

### In Conclusion

We know this feature has been eagerly anticipated by some. We took time to select styling that was not too obtrusive but still helpful, and we may
make further adjustments based on feedback.

Cheers!

{{/isPost}}