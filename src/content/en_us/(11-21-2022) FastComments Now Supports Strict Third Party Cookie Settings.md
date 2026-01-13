---
[category:Security]

###### [postdate]
# [postlink]FastComments Now Supports Strict Third Party Cookie Settings[/postlink]

{{#unless isPost}}
Until now, FastComments required third-party cookies to be enabled to function fully. This is no longer the case!
{{/unless}}

{{#isPost}}

### What's New

Disabling third-party cookies by default is becoming common in privacy-focused browsers. An example of this is Apple's Safari on iOS, where
if you leave your email to comment with FastComments, verify that comment, and then return to that page to leave another comment, or reply
to someone, you'll find that any subsequent comments you leave will be marked as unverified.

This will only happen with the default setup that displays an `Unverified` label on comments. However, this can impact other features like automatic approvals
if auto approvals are only enabled for verified comments.

As you can imagine, this can lead to frustrating scenarios where a user verifies their comment, clicks "Keep Me Logged In", and they are
still not logged in when they visit your site or application. Note that this does not apply to SSO integrations, as SSO does not depend
on cookies.

Now, with a new setting that can be activated called `Enable Third-Party Cookie Popup` in widget settings, this problem is resolved by
opening a popup that retrieves the user's cookie. For now, this only occurs if they interact with the comment widget, but the outcome is that
the comment will be posted from their FastComments.com session, marking their comment as verified, and so forth.

### How to Get It & Documentation

All FastComments customers across all tiers now have access to this feature. Check out [the documentation](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) to learn how to enable the third
party cookie bypass.

### In Conclusion

Like all major releases, we're pleased that we could take the time to optimize, test, and properly release this feature. Let us know
below if you encounter any issues.

Cheers!

{{/isPost}}

---