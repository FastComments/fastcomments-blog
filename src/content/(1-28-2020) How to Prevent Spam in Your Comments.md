[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]How to Prevent Spam in Your Comments[/postlink]

There's no way to 100% combat spam. But FastComments deploys a number of measures to help.

{{#isPost}}

## Site Admin Documentation

A default installation of FastComments has both Spam and Profanity filtering enabled.

These default settings strike a balance between preventing spam and not being too intrusive for most communities.

[You might want to checkout the moderation guide](https://docs.fastcomments.com/guide-moderation.html).

## How it Works

Our spam filter uses a [Naive Bayes classifier](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) to identify spam.

It is trained over time based on what admins mark as spam and not spam.

FastComments runs in an iframe on your site. This makes it harder for automated spam bots to target your comment section. However, if they do
and our classifier figures out that their comments are "spammy" they will be hidden from your users. Like all other comments they are also marked as
"needs review" in the [moderation page](https://fastcomments.com/auth/my-account/moderate-comments) of the dashboard.

Profanity filtering however does not result in hidden comments by default. It will just mask the "bad words" with asterisks.

## Blocking Spam Completely

By default, FastComments will allow the spam, but hide it and mark it for review.

If you'd like to tell the user their comment was detected as spam, and ask them to revise it, this can be done in [Moderation Settings](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
by enabling the `Block Spam` setting.

## Hiding Profane Comments

Profane comments can be hidden by enabling `Automatically Send Profane Comments to Spam` in [Moderation Settings](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Settings

Both Profanity and Spam filtering can be individually toggled off in the [Moderation Settings](https://fastcomments.com/auth/my-account/moderate-comments/settings) page.

## Comment Verification

FastComments employs a verification system where, by default, [unverified comments](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) are marked as such for all users to see.

By allowing users to comment without being fully logged in, this lowers the barrier to entry to enter a discussion. The unverified label can be hidden via customization rules.

Unverified comments are shown by default, but they can be hidden until verified via email, by turning on `Only Auto Approve Verified Comments`.

Note that with SSO, all comments are always verified. If a user is logged in a verified session, their comments will also always be verified.

Unverified comments can also be scheduled for removal.

## For Commenters

If your comment is detected as spam you will see a message right away. This is to let you know the comment will have to be reviewed
before it shows to others. Spam detection can't be 100% accurate, so we understand if you experience some frustration. If your comment is legitimate the
site admin should be able to recognize that and mark your comment as not-spam.

{{/isPost}}
