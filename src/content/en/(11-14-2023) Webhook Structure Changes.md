[category:API & Development]

###### [postdate]
# [postlink]Webhook Structure Changes[/postlink]

{{#unless isPost}}
We have made some behavior-related changes to the webhook structures.
{{/unless}}

{{#isPost}}

### What's New

Before November 14th 2023, we have made the following changes to webhooks:

#### Update Webhooks

**Previously**, updates would contain the latest version of a comment. If two users voted a comment in quick succession, this would
trigger two webhooks. However, it was possible for the first webhook event to contain the **latest version**, resulting in two
identical webhook events:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**As of Nov 14th** each webhook event is idempotent and contains the comment object at the time of the change. In the above example you will now get two events:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Delete Webhooks

**Previously**, delete webhooks only contained the comment id. This was an object like `{ id: string }`.

**As of Nov 14th**, delete webhooks will contain the **entire** comment object at the time of removal.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
