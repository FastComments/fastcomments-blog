###### [postdate]
# [postlink]FastComments Now Supports Strict Third Party Cookie Settings[/postlink]

{{#unless isPost}}
Up until now, FastComments required third party cookies to be enabled to fully function. This is no longer the case!
{{/unless}}

{{#isPost}}

### What's New

Disabling third-party cookies by default is becoming the norm in privacy-focused browsers. An example of this is Apple's Safari on iOS, where
if you leave your email to comment with FastComments, verify that comment, and then come back to that page to leave another comment, or reply
to someone, you'll find that any further comments you leave will be marked as unverified.

This is with the default setup that shows an `Unverified` label on comments. However, this can impact other things like automatic approvals
if auto approvals are only enabled for verified comments.

As you can imagine, this can result in frustrating behavior where a user verifies their comment, clicks "Keep Me Logged In", and they are
still not logged in when they visit your site or application. Note that this does not apply to SSO integrations, as SSO does not depend
on cookies.

Now, with a new setting that can be enabled called `Enable Third-Party Cookie Popup` in widget settings, this problem is solved by
opening a popup that fetches the user's cookie. For now this only occurs if they interact with the comment widget, but the result is that
the comment will be posted from their FastComments.com session, marking their comment verified, and so on.

### How to Get It & Documentation

All FastComments customers on all tiers now have access to this feature. Checkout [the documentation](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) to learn how to enable the third
party cookie bypass.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
