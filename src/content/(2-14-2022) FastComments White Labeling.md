[category:API & Development]

###### [postdate]
# [postlink]FastComments White Labeling[/postlink]

{{#unless isPost}}
White Labeling, with full API integration and automation tools, comes to FastComments.
{{/unless}}

{{#isPost}}

## What's New

FastComments can now integrate with other applications and third-party resellers via White Labeling. White Labeling allows you to create FastComments accounts (called tenants), users, moderators, and more.

We now offer a [comprehensive API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) to automate the integration
with third parties.

You can now, via the API:

- Create customers (child tenants) that are managed by your tenant.
- Manage the packages available to your customers and how you will handle billing.
- Add and manage users in your managed tenants.
- Add and manage moderators in your managed tenants.
- Invite moderators and send login links to tenant users.

## Billing

With billing, there are two options:

1. Via FastComments Flex, the usage of your child tenants is automatically wrapped up and billed to the parent tenant. This can be monitored via the [Billing Analytics Page](https://fastcomments.com/auth/my-account/analytics/billing).
2. Via FastComments Pro, you get access to create a fixed number of child tenants for a fixed monthly price.

## Debranding

Managed tenants can have debranding enabled, which removes our logos from the comment widget.

## How to Get White Labeling

Currently, the FastComments Flex and Pro plans offer access to the White Labeling API.

## Scripts and Examples

An example script which uses the API to setup a tenant with users and moderators [is available here](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Comprehensive Validation

Each API resource contains comprehensive validations and restrictions, with helpful error messages, to guide you through using them correctly.

<div class="code"><div class="title">Detailed Error Example</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "A user with that id does not exist in this tenant. Create the user first and then make them a moderator.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Other Use Cases

The [tenant users](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) and [moderators](https://docs.fastcomments.com/guide-api.html#moderator-structure) APIs can also be used to
add and manage these resources in your own tenant, regardless of white labeling.

## Documentation

You can find full documentation of White Labeling and how to use the API [here](https://docs.fastcomments.com/guide-white-labeling.html).

## In Conclusion

We hope you found this update and its documentation useful. Happy integrating!

{{/isPost}}

