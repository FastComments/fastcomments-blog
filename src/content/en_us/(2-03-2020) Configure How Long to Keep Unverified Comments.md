---
[category:Tutorials]

###### [postdate]
# [postlink]Configure How Long to Keep Unverified Comments[/postlink]

By default, FastComments keeps your unverified comments for three days.

### What does "unverified" mean?

When a user comments and provides their email, FastComments sends them an email asking them to verify their comment. This helps combat spam and highlights the comments that the authors genuinely want to be displayed.

If you enable <a href="https://blog.fastcomments.com/(2-01-2020)-how-to-allow-anonymous-comments-with-fastcomments.html" target="_blank">Anonymous Commenting</a>, they won't even need to provide their email!

Now you can configure how long to keep these comments - perhaps you don't want to automatically remove them at all! This is all configurable via Moderate Comments -> Edit Moderation Settings.

{{#isPost}}

By default, the Comment Moderation Settings might look like this for you, with automatic removal enabled and the time-to-live set to three days:

<img 
    src="images/fc-unverified-comments-expiration.png"
    alt="Comment Moderation UI"
    title="Comment Moderation UI"
    class='lozad' />
    
If we wanted to set the duration for these unverified comments to 300 days, we just drag the slider like this:
    
<img 
    src="images/fc-unverified-comments-expiration02.png"
    alt="Comment Moderation UI"
    title="Comment Moderation UI"
    class='lozad' />

... and hit save.

That's all there is to it. Happy commenting.
{{/isPost}}

---