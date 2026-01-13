---
[category:Moderation]

###### [postdate]
# [postlink]Moderation Groups Released[/postlink]

{{#unless isPost}}
Do you have more than one type of content and want different teams of moderators to handle their own content? Now you can with FastComments!
{{/unless}}

{{#isPost}}

## What's New

Previously, moderators saw all comments in your account when visiting the Moderate Comments page. If you had many types of content, all moderators
would see the exact same list. For larger sites, this could create confusion about which moderators handle what.

We now provide the ability to only show the comments that require moderation based on the moderator's group.

## How Comments Are Placed Into Groups

First, a custom integration has to be set up so that when comments are left, FastComments knows which group the resulting comment should go into.

[See here for how to set up the integration.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#moderation-group-ids)

## Adding Groups

By simply going to the new [Moderation Groups Page](https://fastcomments.com/auth/my-account/moderate-comments/moderation-groups), we can define groups with their own names, see the generated ids required for integration, and even
monitor the number of moderators and comments in each group.

You can then edit a moderator as you would normally do, and a new option will be available to select their groups.

Note that both moderators and comments can belong to more than one group.

For detailed documentation on adding groups, [check out the docs!](https://docs.fastcomments.com/guide-moderation.html#moderation-groups).

## Migrating Existing Comments

Via a support request, FastComments.com can migrate your comments into your desired groups - just let us know!

## Verifying the Integration

You can verify that the integration is properly set up by checking the Comment Count in the Moderation Groups page.

## Impact to Existing Customers

If you're an existing customer using FastComments, the feature has already been made available to your account.

If you don't make any changes to use this feature, your moderators will not experience any changes to their workflow.

## In Conclusion

We hope you find this update and its documentation useful. Happy commenting!

{{/isPost}}