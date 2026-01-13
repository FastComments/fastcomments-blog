---
[category:Security]

###### [postdate]
# [postlink]Audit Log Released[/postlink]

{{#unless isPost}}FastComments now offers a detailed log of all changes made through the platform.{{/unless}}

{{#isPost}}

### What's New

As of March, FastComments now features detailed auditing with the Pro plan, available to all current enterprise customers.

All administrative actions, whether it's accessing data, modifying a comment, or unbanning a user, are tracked and indexed in the audit log.

### How to Use It

The Audit Log can be accessed by navigating to `Manage Data` and then `Audit Logs`. A direct link is [here](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

To start, you'll see a page like the following:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Audit Log" />
</div>

From here, you can search by username, IP address, type of action, or the resource.

For example, filtering by resource:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Audit Log Resource Selection" />
</div>

We can also examine the details of an entry in the audit log and even see the related object that was changed.

For example, we can look into an entry for banning a user:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Audit Log Entry Details" />
</div>

Here we can see who banned the user (a user with the username `winrid`). We can see that it's a permanent ban, and we also have the user ID and email that were banned, along with the text
for which they were banned.

We can see the IP that initiated the ban, but the original commenter's IP is purposely omitted for their privacy.

To view all events from `winrid`, we can simply click the filter icon on the right, next to their username.

### Restricting Access

Data in the audit log can only be accessed by users with the `Manage Data` permission.

### Retention

All entries in the audit log are retained for two years. However, the audit log is cleared when your account is deleted.

### API Access

[Documentation for the Audit Log API is here.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) You'll find that the audit log can be
sorted and paginated in several different ways depending on your use case.

### Existing Customers

If you are on the Pro or equivalent plan, you'll find the audit log has been automatically enabled! If you'd like to get access, please contact your support
representative.

### What's Omitted

The only changes that are omitted are actual comments and their votes. This is because we have found our customers are mostly interested in the administrative
aspects when auditing, rather than what people comment. These types of actions also create considerable noise in the log.

However, if this is a requirement, reach out, and we can discuss enabling this for you.

### In Conclusion

We hope you find this aspect of our offering to be useful, the UI easy to use, and the API fast. 

Cheers!

{{/isPost}}

---