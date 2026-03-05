---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]Self-Service Email Suppression Management[/postlink]

{{#unless isPost}}
Tenant admins can now view and remove email suppressions directly from the FastComments dashboard, without needing to contact support.
{{/unless}}

{{#isPost}}

### What's New

When an email bounces or a recipient marks it as spam, email providers block future messages to that address. Until now, resolving these suppressions required contacting FastComments support. Now, tenant admins can manage suppressions themselves from a new **Suppressed Emails** page in the account dashboard.

### Why This Matters

A suppressed email means a user or moderator is no longer receiving any notifications from FastComments - reply alerts, mention notifications, admin digests, none of it. Often the person affected doesn't even realize it. With the new self-service page, admins have visibility into which addresses are blocked and can take action immediately.

### How It Works

Navigate to **Suppressed Emails** in the account sidebar. You'll see a table of all suppressed addresses associated with your tenant's users, moderators, and commenters. Each entry shows the email address, suppression type, reason, and date.

To remove a suppression, click **Remove**, review the details on the confirmation page, and confirm. FastComments will contact the email provider to unblock the address and clear the suppression flag from all associated records.

Removals are rate limited to prevent abuse - one removal per email address every 30 days, and five removals per tenant per calendar month.

Suppressed users and moderators are also now flagged with a red **Email Suppressed** badge on the Users and Moderators admin pages, linking directly to the suppression management page for that address.

### In Conclusion

We hope this gives admins the visibility and control they need to keep their communities connected. If a user reports missing notifications, the answer is now just a few clicks away.

Let us know below if you have any questions!

Cheers!

{{/isPost}}