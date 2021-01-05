###### [postdate]
# [postlink]Introducing Commenter Links[/postlink]

{{#unless isPost}}
Our first release of 2021 brings the ability (if enabled at tenant level) for users to add their blog link when commenting.
{{/unless}}

{{#isPost}}

## What's New

Our first release of 2021 brings the ability (if enabled at tenant level) for users to add their blog link when commenting.

## What are Commenter Links?

As we see with this very curious exchange, one of these users has their username underlined to indicate it is a link:

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Commenter Links" title="Commenter Links Demo" />
</div>

This is because the site has configured their FastComments installation to allow filling out a new field when commenting, where the
user can leave a link:

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Commenter Link Input" title="Commenter Link Input" />
</div>

This link can also be customized via editing your <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Account Details</a>.

## Enabling Commenter links

By creating a <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Customization Rule</a> we can enable the new input
field. Simply enable the option "Enable Commenter Links".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Enabling Commenter Links" title="Blog Links" />
</div>

## Improving Spam Classification

This feature has the side effect of reducing content flagged by spam that may not be spam. Comments with little text and a link would normally be classified
as spam. However, the commenter link does not affect the classification of whether the comment is spam or not. This means that a user can comment with their blog link
with a much lower risk of the comment being flagged as spam.

For these reasons, sites with high amounts of spam may not want to enable this feature, however those that don't will find value in using it with certain audiences.

## Impact to Existing Customers

If you're an existing customer using FastComments, your users will experience no change in functionality, unless you turn this feature on. Same goes with new customers - you'll
find that this feature is off by default.

## In Conclusion

We hope that this feature is the start of a better year than last. Happy commenting!

{{/isPost}}

