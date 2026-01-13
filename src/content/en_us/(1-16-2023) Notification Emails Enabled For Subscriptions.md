---
[category:Features]
###### [postdate]
# [postlink]Notification Emails Enabled For Subscriptions[/postlink]

{{#unless isPost}}
FastComments now sends emails to users for pages they are subscribed to.
{{/unless}}

{{#isPost}}

### What's New

With FastComments users can click the bell icon on a comment widget to subscribe to that page. We'll notify them
when new comments are left on that page, or when there is a new comment in a reply thread they are part of.

We have done this for years; however, we did not send emails for these notifications - they were only visible in our dashboard.

We will now send emails for these notifications.

### New Email Types

We now send two new types of emails. The first is when you only have a couple notifications. We will simply list
the new comments in the email for you.

The second type of email you will receive contains links to each page you received notifications for. This is sent
when you receive many notifications.

These notification emails are only for new comments on pages you're subscribed to.

### Email Notification Schedule

Notification emails are sent every hour to prevent excessive emails. The exception is if the page in question has over ten thousand
comments, in which case we will only send notifications for that page once a day.

### For Site Owners - Customizing The Emails

A new `New Subscription Comments` email template will soon be available to customize.

### For Developers & Gotchas

For SSO Users, we will not send the notification emails by default. You will have to pass a new flag: `optedInSubscriptionNotifications: true` in the user object, or
in the payload to the comment widget, to enable these new notifications.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}