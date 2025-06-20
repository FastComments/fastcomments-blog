[category:Moderation]

###### [postdate]

# [postlink]Hiding Flagged Comments with FastComments[/postlink]

{{#unless isPost}}Flagging has been added to FastComments. Additionally, comments can be hidden based on the number of times they are flagged.{{/unless}}

{{#isPost}}

### What's New

User can now flag comments with comment threads hosted by FastComments. Moderators can filter by Flagged comments as well as see how many times they were flagged.

The platform can also be configured to automatically hide comments when they have been flagged a certain number of times.

### The Commenter's Perspective

When a user has a valid session, they can flag comments via the comment edit menu. 

This is compatible with the following session types:

- Anonymous sessions
- FastComments.com User Session (Using 3rd Party Cookies)
- Secure SSO
- Simple SSO

Flagged comments will continue to be shown, until the configured flagged threshold is reached.

### For Moderators

Moderators can see flagged comments by using the `Flagged` filter, also available directly [here](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

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
