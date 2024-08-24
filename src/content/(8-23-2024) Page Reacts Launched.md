
###### [postdate]
# [postlink]Page Reacts Launched[/postlink]

{{#unless isPost}}
FastComments now supports displaying page-reactions along with counts above the comment widget.
{{/unless}}

{{#isPost}}

### What's New

FastComments had already supported what we call our Feedback module, where you could display a start rating, NPS, or other question above the comment area.

However, many users want something simpler - to show some icons with some reactions above the comment widget, to be able to customize those icons, maybe customize
the options per-user, and so on.

As of today we have launched this feature.

All FastComments plans now have access to Page Reacts.

### Live Demo

We've enabled a demo Page Reacts config for this blog post specifically, you can find it below!

### Documentation

[You can find the developer documentation for setting up Page Reacts here.](https://docs.fastcomments.com/guide-page-reacts)

### In Conclusion

We thank our customers that give us continuous feedback so that we can think of ideas like this and also give us the time to launch well optimized features. We hope you
continue to love FastComments.

Cheers!

<script>
    window.demoOverrides = {
        pageReactConfig: {
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
