[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]New IP Login Alerts[/postlink]

{{#unless isPost}}
FastComments now sends a security alert email when a login is detected from a new IP address, including the approximate location, to help users detect unauthorized access.
{{/unless}}

{{#isPost}}

### What's New

FastComments now automatically sends a security alert email when we detect a sign in to your account from an IP address we haven't seen before. The email includes:

- The **approximate location** (city and country) of the login.
- The **IP address** used.
- The **time** of the login.
- A direct link to **change your password** if the login wasn't you.

This applies to all login methods: password-based login, magic links, and two-factor authentication flows.

### Privacy

We do not store your raw IP address. We only store an obfuscated form for security comparison purposes. The approximate location is
determined at the time of login and is not stored.

**Your IP is not shared with a third party** to determine the location. We host our own service that extracts the approximate location
from a (weekly updated) copy of the MaxMind database.

### When Alerts Are Sent

An alert is sent when **all** of the following are true:

- The login was successful.
- It is not the user's first-ever login.
- The IP address has not been seen in a previous successful login for that account.

This means you won't get an alert on your very first login, and you won't get repeated alerts for the same IP.

### In Conclusion

This is one more step toward keeping your account safe. If you receive an alert you don't recognize, we recommend changing
your password immediately.

Let us know below if you have any feedback!

Cheers!

{{/isPost}}

---
