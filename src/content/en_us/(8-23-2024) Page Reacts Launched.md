---

[category:Features]
###### [postdate]
# [postlink]Page Reacts Launched[/postlink]

{{#unless isPost}}
FastComments now supports displaying page reactions along with counts above the comment widget.
{{/unless}}

{{#isPost}}

### What's New

FastComments previously supported what we refer to as our Feedback module, where you could display a star rating, NPS, or other questions above the comment area.

However, many users prefer something simpler - to display some icons with various reactions above the comment widget, to customize those icons, perhaps customize the options per user, and so on.

As of today, we have launched this feature.

All FastComments plans now have access to Page Reacts.

### Live Demo

We've enabled a demo Page Reacts configuration for this blog post specifically; you can find it below!

### Documentation

[You can find the developer documentation for setting up Page Reacts here.](https://docs.fastcomments.com/guide-page-reacts.html)

### React User List

Page Reacts can also be configured to show a tooltip that displays the list of users who left a specific reaction.

### In Conclusion

We appreciate our customers who provide us continuous feedback so that we can develop ideas like this and also give us the time to launch well-optimized features. We hope you continue to enjoy FastComments.

Cheers!

<script>
    window.demoOverrides = {
        pageReactConfig: {
            showUsers: true,
            reacts: [
                {id: 'droll', src: 'https://docs.fastcomments.com/images/emojis/droll.png'},
                {id: 'he', src: 'https://docs.fastcomments.com/images/emojis/heart-eyes.png'},
                {id: 'laugh', src: 'https://docs.fastcomments.com/images/emojis/laugh.png'},
                {
                    id: 'puke',
                    src: 'https://docs.fastcomments.com/images/emojis/puke.png',
                    selectedSrc: 'https://docs.fastcomments.com/images/emojis/puke-bw.png'
                },
                {id: 'rofl', src: 'https://docs.fastcomments.com/images/emojis/rofl.png'},
            ]
        }
    }
</script>

{{/isPost}}

---