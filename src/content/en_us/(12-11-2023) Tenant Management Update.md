---
[category:Features]
###### [postdate]
# [postlink]Tenant Management Update[/postlink]

{{#unless isPost}}
FastComments has improved the interaction for managing your tenants!
{{/unless}}

{{#isPost}}

### What's New

As of December 11th, 2023, FastComments now features the ability to switch tenants without impersonating other tenant users.

### Target Audience

This update is not intended for commenters or site administrators who operate a single site. This benefits admins who manage multiple sites or tenants only.

### Impact to Admins

Previously, creating tenants and switching users was cumbersome. Some common pain points were:

1. You had to create a user when setting up your tenant, as that user "owned" the tenant.
2. This meant you needed to use a different email for every site, even if you wanted to utilize one email/account for several sub-tenants.
3. Switching tenants required impersonation, which meant that your users had to be replicated across all tenants, with the same permissions, and so on.

Now:

1. No user creation is necessary when creating a tenant.
2. Any Super Admin user with the right permissions has the same permissions in all sub-tenants.
3. There is a `Switch` button in the tenants list that retains your current user and permissions but changes the tenant you are logged into.
4. If you're an administrator of a parent tenant, you have moderator permissions in sub-tenants when using the comment widget. 

Events are still logged in the Audit Log for the tenant you have switched to.

### Impersonation

You can still impersonate users. Switch to a tenant and go to the `Users` page.

### For Developers & Gotchas

When using the `POST /tenants` API, the `email` field is now optional. The documentation has been updated.

### Future Updates

In the future, there will be additional administrative actions in the tenants list, such as deleting tenants and more.

### In Conclusion

Like all major releases, we're pleased that we could take the time to optimize, test, and properly launch this feature. Let us know below if you encounter any issues.

Cheers!

{{/isPost}}

---