[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Backup Email for Account Recovery[/postlink]

{{#unless isPost}}
FastComments now supports adding a verified backup email to your account, giving you an alternative way to recover access if you lose your primary email.
{{/unless}}

{{#isPost}}

### What's New

You can now add a **backup email** to your FastComments account. If you ever lose access to your primary email, your backup email
can be used to recover your account through any of our existing login flows.

This feature is available to all regular (non-SSO) users.

### How It Works

1. Go to your [Account Details](https://fastcomments.com/auth/my-account/edit-details) page.
2. Click the **Define a Backup Email** link under the email field.
3. Enter your backup email address and submit.
4. Check your inbox for a verification email and click the link to confirm.

Once verified, your backup email is stored and ready to use if you ever need it. You can change or remove it at any time from
the same page.

### How Recovery Works

Your backup email integrates with all existing recovery paths:

- **Forgot Username** - Enter your backup email on the forgot username page and your username will be sent to that address.
- **Magic Link Login** - Enter your backup email as the email address when logging in. A magic link will be sent to your backup email.
- **Password Login** - You can type your backup email in the username/email field to find your account.

No new recovery flow was needed. Your backup email simply works everywhere your primary email does for authentication purposes.

### What It's Not

Your backup email is **only** used for account recovery. It will not receive notifications, digest emails, or any other
communication. It is a safety net, not a second inbox.

### In Conclusion

Losing access to an email account is stressful enough without also losing access to all the services tied to it. We hope
this small addition gives you peace of mind.

Let us know below if you have any feedback!

Cheers!

{{/isPost}}

---
