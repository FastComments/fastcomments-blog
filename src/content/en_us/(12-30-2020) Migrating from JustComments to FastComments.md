---
[category:Migration]
###### [postdate]
# [postlink]Migrating From JustComments To FastComments[/postlink]

{{#unless isPost}}
Read this post to learn how to fully migrate from JustComments to FastComments.

It's typically a matter of removing the small snippet they provide and replacing it with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">our own</a>.
You can even run JustComments and FastComments on the same site temporarily to test and adjust the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can assist with that</a>.
{{/unless}}

{{#isPost}}

As of 2021, JustComments will be shutting down. At FastComments, we’ve made it simple for you to switch to our platform.

You’ll find that FastComments offers many of the same features you're familiar with, and more.

## Pricing Differences

While JustComments operates on a credit-based system, FastComments uses a tiered model with three tiers available. With FastComments, our $5/mo plan
supports you up to 1M page loads a month. Beyond that are the Pro and Enterprise plans, which you can check out on our <a href="https://fastcomments.com/traffic-pricing" target="_blank">pricing page</a>.

## If You're on WordPress

FastComments has a dedicated WordPress plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

The plugin simplifies the installation, setup, and syncing process. However, JustComments does not sync your comments back into your WordPress installation like FastComments
does. This means after syncing you'll need to follow the exporting and importing steps below.

## Export Your Existing Comments

The FastComments importer will transfer your comments, usernames, user avatars, and inline images. We’ll move the images to our servers seamlessly.

To download your comment data from JustComments, go to your Account page.

## Import Into The FastComments Admin

Don’t worry about opening the resulting file from JustComments.

If you're logged in, you can go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">here to import the file</a>.

Select JustComments from the dropdown and upload your file.

### Page Identifiers

When importing, you will see the option to choose Page URL or "Item ID". If you are uncertain which to select, choose Page URL. If you have an integration with JustComments
where you specify the Item ID in the widget configuration, select Item ID.

### Wait a few minutes

The FastComments import is "asynchronous". This means that uploading the file and processing it are two separate steps.

Therefore, depending on your file size, you might receive the success message immediately. On the import page at the bottom, there's a table - each row represents an import attempt.
You can safely refresh this page to check the status of your import and how many rows have been imported so far.

### When it's done

You'll receive an email when the import is complete - regardless of whether it succeeds or fails. You can close the page after the file upload is successful and you see your import in the Imports page. It will display a status like "Requested" and when it starts, the status will be "Running".

It's safe to reimport as many times as needed - however, if your import fails then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contact us</a> so we can assist.

### Replace the JustComments Code with FastComments

If you're not using the JustComments WordPress plugin, then it's simply a matter of removing the small snippet they provide and replacing it with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">our own</a>.
You can even run JustComments and FastComments on the same site temporarily to test and adjust the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can assist with that</a>.

### Migrating URLs at the same time

The comments themselves are linked to the "pageUrl" fields by default in the JustComments export, so as long as your URLs don't change, the transition is straightforward. If you want to migrate URLs and keep your
comments, then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a> by sending us the old and new URLs. The help page allows uploading small text files, so if
you are migrating more than just a couple of URLs, create an Excel sheet.

## Recap

1. Export your data
2. Import into FastComments
3. If not on WordPress, swap the JustComments JavaScript snippet with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

{{/isPost}}

---