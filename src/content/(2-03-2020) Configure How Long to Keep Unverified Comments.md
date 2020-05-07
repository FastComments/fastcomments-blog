###### [postdate]
# [postlink]Configure How Long to Keep Unverified Comments[/postlink]

By default FastComments will keep your unverified comments for three days.

### What does "unverified" mean?

When a user comments and leaves their email FastComments will send them an email asking them to verify their comment.
This helps fight spam, and highlights the comments that their authors really want shown.

If you enable <a href="https://blog.fastcomments.com/(2-01-2020)-how-to-allow-anonymous-comments-with-fastcomments.html" target="_blank">Anonymous Commenting</a>
they won't even have to leave their email!

But now you can configure how long to keep these comments - maybe you don't even want to automatically remove them! This is all configurable ia Moderate Comments -> Edit Moderation Settings

{{#isPost}}

By default the Comment Moderation Settings might look like this for you, with automatic removal enabled and the time-to-live to three days:

<img 
    data-src="images/fc-unverified-comments-expiration.png"
    alt="Comment Moderation UI"
    title="Comment Moderation UI"
    class='lozad' />
    
If we wanted to set the time for these unverified comments to live to 300 days, we just drag the slider like this:
    
<img 
    data-src="images/fc-unverified-comments-expiration02.png"
    alt="Comment Moderation UI"
    title="Comment Moderation UI"
    class='lozad' />

... and hit save.

That's all there is too it. Happy commenting.
{{/isPost}}
