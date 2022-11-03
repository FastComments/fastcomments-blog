###### [postdate]
# [postlink]Migrating From Hyvor Talk To FastComments[/postlink]

{{#unless isPost}}
Read this post to see how to fully migrate from Hyvor Talk to FastComments.

If you're using the manual code installation with Hyvor Talk then it's simply a matter of removing the small snippet they give you and replacing it with <a href="https://fastcomments.com/install-wizard" target="_blank">our own</a>.
You can even run Hyvor and FastComments on the same site temporarily to test and tweak the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can help with that</a>.

If you're not using the code snippet based installation then the instructions will vary based on your platform - again <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a>.
{{/unless}}

{{#isPost}}

## If You're on WordPress

FastComments has a dedicated WordPress plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

The plugin makes the installation, setup, and sync very easy. If you go this route, you can ignore the rest of the instructions here. Just ensure
that you've synced your Hyvor Talk comments back to your WordPress installation.

If this is not working for you as reported by some of our customers, you may want to use our WordPress plugin, but perform a data import
by exporting from Hyvor Talk manually. You can find data imports in [Manage Data -> Import Comments](https://fastcomments.com/auth/my-account/manage-data/import).

## Manual, Generic Install

### Export Your Existing Comments

The FastComments importer will migrate your comment threads, usernames, user avatars, emojis, and inline images. We'll move the images to our servers seamlessly.

As of 2022 Hyvor Talk does not export emails or up/down votes. If you are able to get an export from them with this information, we can import it.

### Import the .JSON File

After you have the Hyvor export downloaded, log in to your FastComments dashboard and go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">here to import the file</a>. Select Hyvor Talk from the dropdown and upload your file.

### Wait a few minutes

The FastComments import is "asynchronous". This means that uploading the file and processing it are separate steps.

So, depending on your file size you might get the success message right away. On the import page at the bottom there's a table - each row represents an import attempt.
You can safely refresh this page to see the status of your import and how many rows have been imported thus far.

### When it's done

You'll receive an email when the import is done - whether it succeeds or not. You can close the page after the file upload succeeds, and you see your import in the Imports page. It will have a status like "Requested" and when it starts the status will be "Running".

It's safe to reimport as many times as required - however if your import fails then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a> so we can help.

### Replace the Hyvor Talk Code with FastComments

If you're using the code snippet based installation with Hyvor then it's simply a matter of removing the small snippet they give you and replacing it with <a href="https://fastcomments.com/install-wizard" target="_blank">our own</a>.
We also support many front end frameworks which [you can find here](https://fastcomments.com/install-wizard). You can even run Hyvor and FastComments on the same site temporarily to test and tweak the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can help with that</a>.

If you're not using the code snippet based installation then the instructions will vary based on your platform - again <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a>.

We offer a self-service installation wizard [here](https://fastcomments.com/install-wizard).

### Migrating URLs at the same time

The comments themselves are tied to the page id fields in the export so as long as your URLs don't change the switch is easy. If you want to migrate URLs and keep your
comments then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a> by sending us the old and new URLs. The help page allows uploading small text files so if
you are migrating more than just a couple urls create an Excel sheet.

### EU

If you're in the EU, you'll probably want to create your account on [eu.fastcomments.com](https://eu.fastcomments.com) so that your customer data stays in the EU.

### Recap

1. Export your data
2. Import into FastComments
3. Swap Hyvor JavaScript snippet with <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments's</a>

## Why Won't Hyvor Won't Send Me My File?
For larger sites Hyvor might not be able to create the exported file due to technical limitations on their end. We have the ability to scrape your existing site and pull the comments off it, however this can be
fairly custom and due to the time involved will require you to have the Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">You can request help with this here</a>.
{{/isPost}}
