###### [postdate]
# [postlink]Password Authentication is Now Supported[/postlink]

{{#unless isPost}}
With this update FastComments now supports traditional password-based authentication in addition to the existing email based system.
{{/unless}}

{{#isPost}}

### What's New

Since launch FastComments authenticated via magic email links. This was because we could consolidate our login mechanisms into the same system used
for when a user leaves their first comment and verifies/logins via an email-based link. However, not all email servers are the same, and sometimes
receiving a link could take minutes. This was very frustrating for some of our users.

As of late 2023 FastComments now supports authenticating via passwords! On the login page there are now two tabs - one for logging in via email and one for via
password.

### How to Set a Password

You can set a password by going to [My Account -> Account Details -> Change Password](https://fastcomments.com/auth/my-account/edit-details/change-password).

Simply request a reset link. A link will be sent to your email, and upon clicking this you will be able to set a new password. The link only works once and expires if not used.

### Password Storage & Security

Password are not stored. Rather, passwords are hashed with an 11-round salt using bcrypt. Concurrency to the password based system is limited
and monitored to prevent various types of password related attacks.

### The Future

In the future we plan to support 2FA as well.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
