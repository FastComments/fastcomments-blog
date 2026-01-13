---
[category:Analytics]
###### [postdate]
# [postlink]FastComments Can Now Show Comment Viewed Counts[/postlink]

{{#unless isPost}}
FastComments now supports displaying a count next to each comment that increments live as users view comments.
{{/unless}}

{{#isPost}}

### What's New

FastComments now supports displaying a count next to each comment that increments live as users view comments. Whether a comment has been viewed or not is determined by the user's account or anonymous session. It supports SSO (both Secure SSO and Simple SSO).

### Live Demo

We've enabled comment view counts for this blog post specifically! Check the count next to the eye on each comment!

### Documentation

[You can find the developer documentation for setting up View Counts here.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Performance

Counts are not immediately updated; there is a small (up to three seconds) delay as counts are aggregated and then sent over the network. This is an optimization so that if you have a live event, and a few thousand people view about 10 comments on average on the page, we don't instantly send millions of updates (`3000 users x 3000 page loads = ~9 million changes`) to every user and overwhelm their browser or utilize all their network bandwidth.

### In Conclusion

We thank our customers who provide us with continuous feedback so that we can come up with ideas like this and also allow us the time to launch well-optimized features. We hope you continue to enjoy FastComments.

Cheers!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---