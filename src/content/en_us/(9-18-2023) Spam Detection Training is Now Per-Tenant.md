---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Spam Detection Training is Now Per-Tenant[/postlink]

{{#unless isPost}}
FastComments has been training its spam prevention classifier for years. Now, training
capabilities have been upgraded.
{{/unless}}

{{#isPost}}

### What's New

When you mark a comment as spam or not spam, FastComments learns from this for future
spam detection.

However, this learning occurred in the same place for everyone. This means another tenant's
spam training impacted yours. There are advantages and disadvantages to this. First, you automatically
gain from what other moderators consider spam. The downside is that if they make a mistake, or if
they manage content that differs from yours.

For instance, if another tenant has an audience focused on racing simulators, they might frequently
mark comments with "crypto spam" as spam. Consequently, the classifier starts to
associate crypto-related text with spam.

But, let’s say you run a site that is crypto-oriented. Now many of your comments begin to be
labeled as spam when they aren’t. Some of them may justifiably be spam, but many may not.

### Isolated Training

When a new tenant joins FastComments, by default their spam detection will be trained on
the past contributions of other tenants.

As you start to mark comments as spam/not spam, the system will shift to using your
own training set.

### Update Sept 20 2023

We discovered that this setup was not ideal for everyone by default. Isolated Spam Training is not opt-in
only. You can activate this in the Moderation Settings page by selecting "Isolated" in the "Spam Filter" option.

The default is now reverted to "Shared" training.

### Live

The training set for your tenant is now consistently rebuilt whenever you mark a comment as spam or not spam.

Previously, the system would rebuild the spam index at intervals. This was done to protect the system against
heavy load. After a couple of years, we've found the load from ongoing training to not be very high, so we've
modified the system to automatically update the index every time you make a change.

These indexes are stored at the edge in our application servers, and they all independently update to
keep the system fast and responsive.

### How to Get It

This feature has been rolled out to all customers!

### In Conclusion

Like all major releases, we're pleased that we could take the time to optimize, test, and properly release this feature. Let us know
below if you encounter any issues.

Cheers!

{{/isPost}}