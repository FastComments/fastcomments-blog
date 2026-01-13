[category:AI & Machine Learning]
###### [postdate]
# [postlink]Spam Detection Training is Now Per-Tenant[/postlink]

{{#unless isPost}}
FastComments has been training its spam prevention classifier for years. Now, training
capabilities have been upgraded.
{{/unless}}

{{#isPost}}

### What's New

When you mark a comment spam, or not spam, FastComments learns from this for future
spam detection.

However, this learning happened in the same place for everyone. Meaning, another tenant's
spam training affected yours. There are upsides and downsides to this. First, you automatically
benefit from what other moderators deem to be spam. The downside is if they make a mistake, or if
they have content that is different from yours.

For example, if another tenant has an audience which is about racing simulators, they might be
marking comments with "crypto spam" as spam, a lot. As a result, the classifier begins to
relate crypto related text as spam.

But, lets say you have a site which is crypto oriented. Now many of your comments begin to be
marked as spam when they are not. Some of them might justifiably be spam, but many might not.

### Isolated Training

When a new tenant joins FastComments by default their spam detection will be trained on
the past work of other tenants.

As you begin to mark comments as spam/not spam, the system will transition over to use your
own training set.

### Update Sept 20 2023

We found this setup was not ideal for everyone by default. Isolated Spam Training is not opt-in
only. You can enable this in the Moderation Settings page by selecting "Isolated" in the "Spam Filter" option.

The default is now back to "Shared" training.

### Live

The training set for your tenant is now always rebuilt any time you mark a comment as spam or not spam.

Previously the system would rebuild the spam index periodically. This was done to protect the system against
excessive load. After a couple of years we've found the load from continuous training to not be very high, so we've
updated the system to automatically update the index every time you make a change.

These indexes are stored on the edge in our application servers, and they all independently update so that
to keep the system fast and responsive.

### How to Get It

This feature has been rolled out to all customers!

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
