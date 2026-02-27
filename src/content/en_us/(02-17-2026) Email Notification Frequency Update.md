---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Email Notification Frequency Update[/postlink]

{{#unless isPost}}
Users can now control how often they receive email notifications for new comments and replies, every minute, hourly digest, or daily digest, with separate settings for reply and admin notifications, plus per-subscription overrides.
{{/unless}}

{{#isPost}}

### What's New

We've added **Reply Notification Frequency** and **Admin Notification Frequency** settings that control how often you receive email notifications for replies and new comments, respectively. The three options for each are:

- **Every minute** - receive an email as soon as new comments arrive (checked every minute).
- **Hourly digest** - receive a batched summary of new comments once per hour.
- **Daily digest** - receive a batched summary of new comments once per day.

Reply Notification Frequency is available to all users and defaults to **Every minute**. Admin Notification Frequency is available to site admins and defaults to **Hourly digest**. Note that @mention notifications are always sent right away regardless of these settings.

You can also override the frequency on a per-subscription basis in the Subscriptions table, for fine-grained control over individual pages.

### How to Configure It

1. Go to your [Notification Settings](https://fastcomments.com/auth/my-account/edit-notifications).
2. Use the **Reply Notification Frequency** and **Admin Notification Frequency** dropdowns to set your preferred frequencies.
3. Optionally, override the frequency for individual subscriptions in the Subscriptions table.
4. Click **Save Changes**.

### API Support

The `notificationFrequency` field on the user object controls reply notification frequency, and the `adminNotificationFrequency` field controls admin notification frequency. Per-subscription overrides can be set via the subscription's `notificationFrequency` field. See the [API documentation](https://docs.fastcomments.com/guide-api.html) for details.

### In Conclusion

This gives users control over their inbox without having to unsubscribe from pages entirely.

Let us know below if you have any feedback!

Cheers!

{{/isPost}}

---