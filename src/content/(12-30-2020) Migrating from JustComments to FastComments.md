###### [postdate]
# [postlink]Migrating From JustComments To FastComments[/postlink]

{{#unless isPost}}
Read this post to see how to fully migrate from JustComments to FastComments.

It's usually a matter of removing the small snippet they give you and replacing it with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">our own</a>.
You can even run JustComments and FastComments on the same site temporarily to test and tweak the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can help with that</a>.
{{/unless}}

{{#isPost}}

Starting 2021, JustComments will be shutting down. At FastComments we've made it easy for you to switch to our platform.

You'll find that FastComments provides many of the same features you're used to, and more.

## Pricing Differences

While JustComments uses a credit based system, FastComments uses a tiered model with three tiers available. With FastComments, our $5/mo plan
covers you up to 1M page loads a month. Beyond that are the Pro and Enterprise plans, which you can view on our <a href="https://fastcomments.com/traffic-pricing" target="_blank">pricing page</a>.

## If You're on WordPress

FastComments has a dedicated WordPress plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

The plugin makes the installation, setup, and sync very easy. However, JustComments does not sync your comments back into your WordPress installation like FastComments
does. This means after the sync you'll have to follow the exporting and importing steps below.

## Export Your Existing Comments

The FastComments importer will migrate your comments, user names, user avatars, and inline images. We'll move the images to our servers seamlessly.

To download your comment data from JustComments, go to your Account page.

## Import Into The FastComments Admin

Don't worry about opening the resulting file from JustComments.

If you're logged in you can go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">here to import the file</a>.

Select JustComments from the dropdown and upload your file.

### Page Identifiers

When importing, you will see the option of choosing Page URL or "Item ID". If you are unsure which to pick, pick Page URL. If you have an integration with JustComments
where you specify the Item ID in the widget configuration, select Item ID.

### Wait a few minutes

The FastComments import is "asynchronous". This means that uploading the file and processing it are separate steps.

So, depending on your file size you might get the success message right away. On the import page at the bottom there's a table - each row represents an import attempt.
You can safely refresh this page to see the status of your import and how many rows have been imported thus far.

### When it's done

You'll receive an email when the import is done - whether it succeeds or not. You can close the page after the file upload succeeds and you see your import in the Imports page. It will have a status like "Requested" and when it starts the status will be "Running".

It's safe to reimport as many times as required - however if your import fails then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a> so we can help.

### Replace the JustComments Code with FastComments

If you're not using the JustComments WordPress plugin then it's simply a matter of removing the small snippet they give you and replacing it with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">our own</a>.
You can even run JustComments and FastComments on the same site temporarily to test and tweak the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can help with that</a>.

### Migrating URLs at the same time

The comments themselves are tied to the "pageUrl" fields by default in the JustComments export so as long as your URLs don't change the switch is easy. If you want to migrate URLs and keep your
comments then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a> by sending us the old and new URLs. The help page allows uploading small text files so if
you are migrating more than just a couple urls create an Excel sheet.

## Recap

1. Export your data
2. Import into FastComments
3. If not on WordPress, Swap JustComments JavaScript snippet with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

{{/isPost}}

