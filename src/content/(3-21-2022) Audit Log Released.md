[category:Security]

###### [postdate]
# [postlink]Audit Log Released[/postlink]

{{#unless isPost}}FastComments now provides a detailed log of all modifications made via the platform.{{/unless}}

{{#isPost}}

### What's New

As of March, FastComments now includes detailed auditing with the Pro plan, and for all existing enterprise customers.

All administrative actions, whether it's data access, modifying a comment, or unbanning a user, are tracked and indexed in the audit log.

### How to Use It

The Audit Log can be accessed by going to `Manage Data` and then `Audit Logs`. A direct link is [here](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

To start, you'll see a page like the following:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Audit Log" />
</div>

From here, you can search by username, ip address, type of action, or the resource.

For example, filtering by resource:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Audit Log Resource Selection" />
</div>

We can also dive into the details of an entry in the audit log, and even see the related object that was changed.

For example, we can dive into an entry for banning a user:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Audit Log Entry Details" />
</div>

Here we can see who banned the user (a user with the username `winrid`). We can see that it's a permanent ban, and we also have the user id and email banned, along with the text
they were banned for.

We can see the IP that created the ban, but the original commenter's IP is intentionally omitted for their privacy.

To see all events from `winrid`, we can simply click the filter icon on the right, next to their username.

### Restricting Access

Data in the audit log can only be accessed by users with the `Manage Data` permission.

### Retention

All entries in the audit log are retained for two years. However, the audit log is cleared when your account is deleted.

### API Access

[Documentation for the Audit Log API is here.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) You'll find that the audit log can be
sorted and paginated a couple different ways depending on your use case.

### Existing Customers

If you are on the Pro or equivalent plan, you'll find the audit log has been automatically enabled! If you'd like to get access, please reach out to your support
representative.

### What's Omitted

The only type of changes that are omitted are actual comments and their votes. This is because we have found our customers are mainly interested in the administrative
side when auditing, and not necessarily interested in auditing what people comment. These types of actions also add considerable noise to the log.

However, if this is a requirement, reach out, and we can discuss enabling this for you.

### In Conclusion

We hope that you find this area of our offering to be useful, the UI easy to use, and the API fast. 

Cheers!

{{/isPost}}
