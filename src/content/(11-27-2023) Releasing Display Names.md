###### [postdate]
# [postlink]Releasing Display Names[/postlink]

{{#unless isPost}}
FastComments always supported display names for SSO users. However, this was never exposed to regular commenters. Today changes that!
{{/unless}}

{{#isPost}}

### What's New

FastComments always supported display names for SSO users. However, this was never exposed to regular commenters. Today changes that!

In the [Account Details](https://fastcomments.com/auth/my-account/edit-details) page you can now fill out a new `Display Name` field. `Display Name` will
be shown on your comments and your profiles.

### Emojis

In the past, users had difficulty using emojis in usernames as you need to enter your username to login. However, now `Display Name` may contain emojis.

### Uniqueness and Abuse

The point of `Display Name` is that it is not unique. If two FastComments.com users, on two very different major communities both have similar names, then we'd like
them to just be able to set their preferred display name. However, we can't restrict where people comment with their global FastComments account, so sometimes this may
result in confusion.

Having a similar name to another user, or a moderator, by itself is not a case for abuse. However, if you abuse this by intentionally impersonating other users, we may
disable this feature on your account, and you will be limited to just using `username`.

### Logging In

You still use your username to log in - **not your display name!**

### For Developers & Gotchas

The regular `User` objects exposed via the API now have `displayName`.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
