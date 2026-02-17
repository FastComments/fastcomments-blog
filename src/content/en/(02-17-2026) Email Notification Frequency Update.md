[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Email Notification Frequency Update[/postlink]

{{#unless isPost}}
Users can now control how often they receive email notifications for new comments and replies — every minute, hourly digest, or daily digest — with a single shared setting, plus per-subscription overrides.
{{/unless}}

{{#isPost}}

### What's New

We've added a **New Comment Notification Frequency** setting that controls how often you receive email notifications for both reply notifications and tenant (new comment) notifications. The three options are:

- **Every minute** - receive an email as soon as new comments arrive (checked every minute).
- **Hourly digest** - receive a batched summary of new comments once per hour.
- **Daily digest** - receive a batched summary of new comments once per day.

This setting is available to both tenant admins and commenters, and applies to all comment notification emails. Note that @mention notifications are always sent right away regardless of this setting.

You can also override the frequency on a per-subscription basis in the Subscriptions table, for fine-grained control over individual pages.

### How to Configure It

1. Go to your [Notification Settings](https://fastcomments.com/auth/my-account/edit-notifications).
2. Use the **New Comment Notification Frequency** dropdown to set your preferred frequency.
3. Optionally, override the frequency for individual subscriptions in the Subscriptions table.
4. Click **Save Changes**.

The default is **Every minute**, which matches the previous behavior.

### API Support

The notification frequency is also available via the API. The user-level setting is the <div class="code">notificationFrequency</div> field, and per-subscription overrides can be set via the subscription's <div class="code">notificationFrequency</div> field. See the [API documentation](https://docs.fastcomments.com/guide-api.html) for details.

### In Conclusion

This gives users control over their inbox without having to unsubscribe from pages entirely. One setting now covers both reply and tenant notifications, making it simpler to manage.

Let us know below if you have any feedback!

Cheers!

{{/isPost}}

---
