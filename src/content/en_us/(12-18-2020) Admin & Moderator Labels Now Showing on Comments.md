---
[category:Features]
###### [postdate]
# [postlink]Admin & Moderator Labels Now Showing on Comments[/postlink]

{{#unless isPost}}
A small change that simplifies interacting with your community.
{{/unless}}

{{#isPost}}

#### The Change

As of today, labels indicating whether the comment was left by an administrator or a moderator have been added to the comment widget.

#### Custom Styling & Translations

Custom styling can be applied to the new label. The text of the label itself can be customized as well via the widget customization administration page, just like any other area of the comment widget.

With any functionality change, we test with our customers' styling and have found this change to have a high level of compatibility with existing customizations.

#### Who Gets The Labels

If a user is an Account Owner or a Super Admin, the "Administrator" (localized by region) label is displayed.

If the user is a moderator or is a user on the tenant that doesn’t have the above administrator permissions but has the comment moderation permission, then the "Moderator" label is displayed.

#### Performance

Part of keeping FastComments fast is ensuring that each feature is only released once it performs well, and this release is no exception.

#### In Conclusion

We hope you've found this guide helpful and easy to read. Feel free to comment below with any questions.

Cheers!

{{/isPost}}

---