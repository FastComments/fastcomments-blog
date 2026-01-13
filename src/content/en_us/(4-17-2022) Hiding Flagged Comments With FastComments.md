---
[category:Moderation]

###### [postdate]

# [postlink]Hiding Flagged Comments with FastComments[/postlink]

{{#unless isPost}}Flagging has been added to FastComments. Additionally, comments can be hidden based on the number of times they are flagged.{{/unless}}

{{#isPost}}

### What's New

Users can now flag comments within comment threads hosted by FastComments. Moderators can filter for flagged comments and see how many times each comment has been flagged.

The platform can also be set up to automatically hide comments after they have been flagged a certain number of times.

### The Commenter's Perspective

When a user has a valid session, they can flag comments through the comment edit menu.

This is compatible with the following session types:

- Anonymous sessions
- FastComments.com User Session (Using 3rd Party Cookies)
- Secure SSO
- Simple SSO

Flagged comments will continue to be visible until the configured flagged threshold is met.

### For Moderators

Moderators can view flagged comments by using the `Flagged` filter, also accessible directly [here](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

Additionally, the number of times a comment has been flagged is visible to Moderators and Administrators.

Note:

- Resetting the flagged count for a comment that was `Un-Approved` via the `Un-Approve Threshold` will `Re-Approve` the comment.
- `Re-Approving` a `Flagged` comment will **reset the flagged count**.
- This is a feature created as a convenience.

### Configuration

Configuring the automatic hiding of flagged comments can be done on the [Comment Moderation Settings Page](https://fastcomments.com/auth/my-account/moderate-comments/settings).

### Existing Customers

We have completed the rollout of this feature to all existing customers on all tiers. Automatic hiding of un-approved comments is not enabled for new or existing customers.

### In Conclusion

We hope you find this new set of features useful and easy to use.

Cheers!

{{/isPost}}