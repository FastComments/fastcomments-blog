---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Announcing FastComments Trust Factor[/postlink]

{{#unless isPost}}
FastComments now employs more heuristics in determining what qualifies as spam.
{{/unless}}

{{#isPost}}

### What's New

As of November 16th, 2023, FastComments has begun to expand how it assesses the trustworthiness
of users to alleviate frustrations associated with spam filters.

### Impact to Users

If you have been a member of an existing site for a long time and have had your comments flagged
by the spam filter, this change is designed for you.

We've received numerous reports from users on sites that engage in behaviors that spam filters flag, such as sharing multiple links, causing these
comments to end up in spam where they are either blocked or pending moderator approval based on the site's configuration.

### Impact to Site Admins and Moderators

1. You may notice fewer comments being automatically classified as spam from your most active users.
2. This does not alter spam detection based on the word/phrase blacklist. Profanity and filtered phrases will still result in comments being marked as spam if you have this configuration.

The Trust Factor value itself is not currently available to site admins or moderators; however,
this is something we plan to investigate in the future.

### How Trust Factor is Calculated

Trust Factor is a figure ranging from `0` to `100` and is maintained on a per-site basis.

The following variables are used to calculate the trust factor:

- Age of interaction with the site.
- Number of approved comments.
- Number of pinned comments.

If you have been a member of a site for over six months and have left more than 50 approved comments,
you will achieve a perfect trust score of `100`.

Otherwise, the formula is as follows and will evolve over time:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Where:

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

You may notice the `* 20` here—pinned comments carry a significant weight. If moderators are pinning
your comments, you are likely regarded as a fairly trusted user.

### For Developers & Gotchas

In the API, `UserBadgeProgress` now has `autoTrustFactor` and `manualTrustFactor` available.

`autoTrustFactor` is calculated by our system and cannot be modified via the API.

If you'd like to configure the trust factor yourself, you can set `manualTrustFactor`. The system
will then use this value instead, while we will continue to maintain the `autoTrustFactor` value separately.

### Abuse of Trust Factor

As with all things, we expect this to be misused. Individuals will build relationships within a community and then exploit
the account to post spam. However, we believe that with sensible defaults (six months, 50+ comments), we have set the bar
high enough to deter most spammers. Once they start posting spam, their account can be immediately
banned by moderators. In the future, we may also allow moderators to adjust the trust factor.

### In Conclusion

Like all major releases, we are pleased that we could take the time to optimize, test, and properly launch this feature. Let us know
below if you encounter any issues.

Cheers!

{{/isPost}}

---