###### [postdate]
# How to Prevent Spam in Your Comments [postlink]

There's no way to 100% combat spam. But FastComments helps a lot.

{{#isPost}}

## For Site Admins

A default installation of FastComments has both Spam and Profanity filtering enabled.

Our spam filter uses a <a href="https://en.wikipedia.org/wiki/Naive_Bayes_classifier">Naive Bayes classifier</a> to identify spam.

FastComments runs in an iframe on your site. This makes it harder for automated spam bots to target your comment section. However, if they do
and our classifier figures out that their comments are "spammy" they will be hidden from your users. Like all other comments they are also marked as
"needs review" in the <a href="https://fastcomments.com/auth/my-account/moderate-comments">moderation page</a> of the dashboard.

Profanity filtering however does not result in hidden comments. It will just mask the ******* "bad words".

### Settings

Both Profanity and Spam filtering can be individually toggled off in the <a href="https://fastcomments.com/auth/my-account/moderate-comments/settings">Moderation Settings</a> page.

## For Commenters

If your comment is detected as spam you will see a message above the input area right away. This is to let you know the comment will have to be reviewed
before it shows to others. Spam detection can't be 100% accurate so we understand if you experience some frustration. If your comment is legitimate the
site admin should be able to recognize that and mark your comment as not-spam.

{{/isPost}}
