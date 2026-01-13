---
[category:API & Development]

###### [postdate]
# [postlink]FastComments White Labeling[/postlink]

{{#unless isPost}}
White Labeling, with complete API integration and automation tools, is now available on FastComments.
{{/unless}}

{{#isPost}}

## What's New

FastComments can now connect with other applications and third-party resellers through White Labeling. White Labeling allows you to create FastComments accounts (referred to as tenants), users, moderators, and more.

We now provide a [comprehensive API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) to automate the integration
with third parties.

You can now, through the API:

- Create customers (child tenants) that are managed by your tenant.
- Manage the packages available to your customers and determine your billing approach.
- Add and manage users in your managed tenants.
- Add and manage moderators in your managed tenants.
- Invite moderators and send login links to tenant users.

## Billing

For billing, there are two options:

1. With FastComments Flex, the usage of your child tenants is automatically summarized and billed to the parent tenant. This can be monitored via the [Billing Analytics Page](https://fastcomments.com/auth/my-account/analytics/billing).
2. With FastComments Pro, you gain the ability to create a fixed number of child tenants for a set monthly fee.

## Debranding

Managed tenants can enable debranding, which removes our logos from the comment widget.

## How to Get White Labeling

Currently, the FastComments Flex and Pro plans provide access to the White Labeling API.

## Scripts and Examples

A sample script that uses the API to set up a tenant with users and moderators [is available here](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Comprehensive Validation

Each API resource includes extensive validations and restrictions, along with helpful error messages, to assist you in using them correctly.

<div class="code"><div class="title">Detailed Error Example</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "A user with that id does not exist in this tenant. Create the user first and then make them a moderator.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Other Use Cases

The [tenant users](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) and [moderators](https://docs.fastcomments.com/guide-api.html#moderator-structure) APIs can also be utilized to
add and manage these resources in your own tenant, regardless of white labeling.

## Documentation

You can find complete documentation on White Labeling and how to use the API [here](https://docs.fastcomments.com/guide-white-labeling.html).

## In Conclusion

We hope you found this update and its documentation helpful. Happy integrating!

{{/isPost}}

---