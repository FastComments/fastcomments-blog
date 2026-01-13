---
[category:Migration]

###### [postdate]
# [postlink]Migrating From IntenseDebate To FastComments[/postlink]

{{#unless isPost}}
Read this post to show how to fully migrate from IntenseDebate to FastComments.
{{/unless}}

{{#isPost}}
## If You're on WordPress

FastComments has a dedicated WordPress plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

The plugin makes the installation, setup, and synchronization very easy. If you choose this option, you can ignore the rest of the instructions here.

## Manual, Generic Install

### Export Your Existing Comments

To export your site's Comment and User data from IntenseDebate, go to their Admin dashboard and navigate to Sites -> Your Site -> Tools -> XML Export.

You'll notice that the resulting file you receive via email has a mysterious "gz" file extension. If you're somewhat technically savvy, you might know that this stands for "gzip," a popular and efficient method to compress files. 

### Don't open the "gz" file

A default Windows 10 installation will not be able to open the file from IntenseDebate. That's fine because you don’t have to with FastComments. Our backend understands this compressed file.

After that, if you're logged in, you can go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">here to import the file</a>. Select IntenseDebate from the dropdown and upload your file.

### Wait a few minutes

The FastComments import is "asynchronous." This means that uploading the file and processing it are separate steps.

So, depending on your file size, you might receive the success message right away. On the import page, at the bottom, there's a table - each row represents an import attempt. You can safely refresh this page to check the status of your import and how many rows have been imported so far.

### When it's done

You'll receive an email when the import is complete - whether it succeeded or failed. You can close the page after the file upload is successful and you see your import on the Imports page. It will have a status like "Requested," and when it starts, the status will be "Running."

It's safe to reimport as many times as necessary - however, if your import fails, then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a> so we can assist you.

### Replace the IntenseDebate Code with FastComments

It’s simply a matter of removing the small snippet IntenseDebate provides you and replacing it with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">our own</a>. You can even run IntenseDebate and FastComments on the same site temporarily to test and tweak the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can assist with that</a>.

If you're using IntenseDebate widgets and want to replace them, then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contact us here</a>.

### Migrating URLs at the same time

The comments themselves are tied to the "link" fields in the IntenseDebate export, so as long as your URLs don’t change, the switch is straightforward. If you want to migrate URLs and retain your comments, then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a> by sending us the old and new URLs. The help page allows uploading small text files, so if you are migrating more than just a couple of URLs, create an Excel sheet.

### Recap

1. Export your data
2. Import into FastComments
3. Swap IntenseDebate JavaScript snippet with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Why Won't IntenseDebate Send Me My File?

For larger sites, IntenseDebate might not be able to create the exported file due to technical limitations on their end. We have the capability to scrape your existing site and extract the comments from it; however, this can be fairly custom and due to the time involved, will require you to have the Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">You can request help with this here</a>.
{{/isPost}}

---