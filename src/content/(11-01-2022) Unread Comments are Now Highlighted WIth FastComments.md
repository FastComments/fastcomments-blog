###### [postdate]
# [postlink]Unread Comments are Now Highlighted With FastComments[/postlink]

{{#unless isPost}}
Ever come back to a page and want to resume reading the comment section where you left off? FastComments now styles comments
you missed, making this easy.
{{/unless}}

{{#isPost}}

### What's New

Ever come back to a page and want to resume reading the comment section where you left off? FastComments now styles comments
you missed, making this easy.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar in new comment highlighted." />
</div>

### How to Get It

Any comment that triggered an in-app notification (replies, replies in same thread, or comments on a page
that you're subscribed to), will automatically be highlighted with the user's avatar glowing slightly. The color can be customized via CSS
using the `is-unread` class. The default styling also supports dark mode.

Additionally, a new `24hr` CSS class has been added to comment elements posted within the last 24 hours. You may use this to style
comments as well.

### Why Highlight The Avatar?

We recognize that it may be preferable to highlight the whole comment. However, this has readability and styling concerns with
our customers that have customized the platform to match their product. We found that highlighting the avatar slightly is a rather unobtrusive
change in most cases. If desired, the glow can be removed, and changed using widget customization rules.

### In Conclusion

We know this feature has been long awaited by some. We spent time picking styling that was not too obtrusive but still helpful, and we may
make further adjustments based on feedback.

Cheers!

{{/isPost}}
