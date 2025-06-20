[category:AI & Machine Learning]

###### [postdate]
# [postlink]Announcing FastComments Trust Factor[/postlink]

{{#unless isPost}}
FastComments now uses more heuristics when determining what is and what is not spam.
{{/unless}}

{{#isPost}}

### What's New

As of November 16th 2023 FastComments has begun expanding how it determines the trustworthiness
of users to reduce frustration of dealing with spam filters.

### Impact to Users

If you're a long time member of an existing site, and you have had your comments caught
by the spam filter, this change is for you.

We've had numerous reports of users on sites that do things that spam filters do not like, like sharing lots of links and so on, and these
comments end up in spam and are either blocked or await moderator approval depending on the site setup.

### Impact to Site Admins and Moderators

1. You might see fewer comments automatically marked as spam from your most active users.
2. This does not change spam detection based on the word/phrase blacklist. Profanity and filtered phrases will still cause comments to go to spam if you have this setup.

The Trust Factor number itself is not currently exposed to site admins or moderators, however
this is something we will explore in the future.

### How Trust Factor is Calculated

Trust Factor is a number from `0` to `100` and is maintained on a per-site basis.

The following variables are used to determine trust factor:

- Age of interaction with the site.
- Number of approved comments.
- Number of pinned comments.

If you have been a member of a site for over six months, and you've left over approved 50 comments,
you will have a perfect trust score of `100`.

Otherwise, the formula is as follows and will evolve over time:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Where:

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

You may notice the `* 20` here - pinned comments have a high weight. If moderators are pinning
your comments, you are likely considered a fairly trusted user.

### For Developers & Gotchas

In the API, `UserBadgeProgress` now has `autoTrustFactor` and `manualTrustFactor` exposed.

`autoTrustFactor` is calculated by us and is not writable via the API.

If you'd like to configure trust factor yourself you can define `manualTrustFactor`. The system
will then use this value instead, and we will continue to maintain the `autoTrustFactor` value separately.

### Abuse of Trust Factor

Like all things we expect this to be abused. People will build up relationships with a community and then use
the account to post spam. However, we think with sensible defaults (six months, 50+ comments), we set the bar
high enough to make this not worth it for most spammers. Once they start posting spam their account can be immediately
banned by moderators. In the future we may also let moderators adjust the trust factor.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
