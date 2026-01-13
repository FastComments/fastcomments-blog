---
[category:Features]

###### [postdate]
# [postlink]Releasing Display Names[/postlink]

{{#unless isPost}}
FastComments has always supported display names for SSO users. However, this has never been available to regular commenters. Today changes that!
{{/unless}}

{{#isPost}}

### What's New

FastComments has always supported display names for SSO users. However, this has never been available to regular commenters. Today changes that!

On the [Account Details](https://fastcomments.com/auth/my-account/edit-details) page, you can now fill out a new `Display Name` field. `Display Name` will
be displayed on your comments and your profiles.

### Emojis

In the past, users faced challenges using emojis in usernames since you needed to enter your username to log in. Now, however, `Display Name` may include emojis.

### Uniqueness and Abuse

The idea behind `Display Name` is that it is not unique. If two FastComments.com users, in two very different major communities, have similar names, we want them to be able to set their preferred display name. However, we can't restrict where people comment with their global FastComments account, so this may sometimes lead to confusion.

Having a similar name to another user, or a moderator, by itself does not constitute abuse. However, if you misuse this by intentionally impersonating other users, we may
disable this feature on your account, and you will be limited to using only `username`.

### Logging In

You still use your username to log in - **not your display name!**

### For Developers & Gotchas

The regular `User` objects exposed via the API now include `displayName`.

### In Conclusion

Like all major releases, we're pleased that we could take the time to optimize, test, and properly launch this feature. Let us know
below if you encounter any issues.

Cheers!

{{/isPost}}

---