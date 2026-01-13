---
[category:Migration]
###### [postdate]
# [postlink]Migrating From Hyvor Talk To FastComments[/postlink]

{{#unless isPost}}
Read this post to learn how to fully migrate from Hyvor Talk to FastComments.

If you're using the manual code installation with Hyvor Talk, then it's just a matter of removing the small snippet they provide and replacing it with <a href="https://fastcomments.com/install-wizard" target="_blank">our own</a>.
You can even run Hyvor and FastComments on the same site temporarily to test and adjust the appearance. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can assist with that</a>.

If you're not using the code snippet-based installation, then the instructions will differ based on your platform - once again, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a>.
{{/unless}}

{{#isPost}}

## If You're on WordPress

FastComments has a dedicated WordPress plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

The plugin simplifies the installation, setup, and synchronization. If you choose this option, you can ignore the rest of the instructions here. Just make sure
that you've synchronized your Hyvor Talk comments back to your WordPress installation.

If this isn't working for you as reported by some of our clients, you may opt to use our WordPress plugin, but perform a data import
by manually exporting from Hyvor Talk. You can find data imports in [Manage Data -> Import Comments](https://fastcomments.com/auth/my-account/manage-data/import).

## Manual, Generic Install

### Export Your Existing Comments

The FastComments importer will migrate your comment threads, usernames, user avatars, emojis, and inline images. We will seamlessly move the images to our servers.

As of 2022, Hyvor Talk does not export emails or up/down votes. If you can obtain an export from them with this information, we can import it.

### Import the .JSON File

Once you have downloaded the Hyvor export, log in to your FastComments dashboard and go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">here to import the file</a>. Select Hyvor Talk from the dropdown and upload your file.

### Wait a few minutes

The FastComments import is "asynchronous." This means that uploading the file and processing it are separate steps.

So, depending on your file size, you might receive the success message immediately. On the import page at the bottom, there's a table - each row represents an import attempt.
You can safely refresh this page to check the status of your import and how many rows have been imported so far.

### When it's done

You'll receive an email once the import is complete - whether it succeeds or not. You can close the page after the file upload succeeds and you see your import on the Imports page. It will have a status like "Requested," and when it starts, the status will be "Running."

It's safe to reimport as many times as needed - however, if your import fails, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a> so we can assist.

### Replace the Hyvor Talk Code with FastComments

If you're using the code snippet-based installation with Hyvor, then it's simply a matter of removing the small snippet they provide and replacing it with <a href="https://fastcomments.com/install-wizard" target="_blank">our own</a>.
We also support many front-end frameworks which [you can find here](https://fastcomments.com/install-wizard). You can even run Hyvor and FastComments on the same site temporarily to test and adjust the appearance. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can assist with that</a>.

If you're not using the code snippet-based installation, then the instructions will differ based on your platform - once again, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a>.

We offer a self-service installation wizard [here](https://fastcomments.com/install-wizard).

### Migrating URLs at the same time

The comments themselves are linked to the page ID fields in the export, so as long as your URLs don't change, the switch is easy. If you want to migrate URLs while keeping your
comments, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a> by sending us the old and new URLs. The help page allows uploading small text files, so if
you are migrating more than just a couple of URLs, create an Excel sheet.

### EU

If you're in the EU, you'll likely want to create your account on [eu.fastcomments.com](https://eu.fastcomments.com) so that your customer data remains in the EU.

### Recap

1. Export your data
2. Import into FastComments
3. Replace Hyvor JavaScript snippet with <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments's</a>

## Why Won't Hyvor Send Me My File?
For larger sites, Hyvor may not be able to create the exported file due to technical limitations on their side. We have the capability to scrape your existing site and extract the comments, however, this can be
somewhat custom and due to the time involved will require you to have the Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">You can request help with this here</a>.
{{/isPost}}

---