[category:Features]
###### [postdate]
# [postlink]Tenant Management Update[/postlink]

{{#unless isPost}}
FastComments has improved the interaction for managing your tenants!
{{/unless}}

{{#isPost}}

### What's New

As of December 11th 2023 FastComments now features the ability to switch tenants without impersonating other tenant users.

### Target Audience

This update is not for commenters or site administrators that run a single site. This benefits admins that run many sites or tenants only.

### Impact to Admins

Previously, creating tenants and switching users was a pain. Some common pain points where:

1. You had to create a user when creating your tenant, as that user "owned" the tenant.
2. This meant you had to use a new email for every site, even if you wanted to use one email/account for many sub-tenants.
3. Switching tenants required impersonation, meaning that your users had to be duplicated across all tenants, with the same permissions, and so on.

Now:

1. No user creation is required when creating a tenant.
2. Any Super Admin user with the appropriate permissions has the same permissions in all sub-tenants.
3. There is a `Switch` button in the tenants list which retains your current user and permissions, but changes what tenant you are logged in to.
4. If you're an administrator of a parent tenant, you have moderator permissions in sub-tenants when using the comment widget. 

Events are still logged in Audit Log for the tenant you are switched to.

### Impersonation

You can still impersonate users. Switch to a tenant and go to the `Users` page.

### For Developers & Gotchas

When using the `POST /tenants` API, the `email` field is now optional. The documentation has been updated.

### Future Updates

In the future there will be some more administrative actions in the tenants list, like deleting tenants and so on.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
