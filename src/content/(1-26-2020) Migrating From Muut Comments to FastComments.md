###### Jan 26rd 2020
# Migrating From Muut Comments To FastComments [postlink]

{{#unless isPost}}
Read this post to see how to fully migrate from Muut to FastComments.

It's simply a matter of removing the small snippet Muut gives you and replacing it with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">our own</a>.
You can even run Muut and FastComments on the same site temporarily to test and tweak the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can help with that</a>.
{{/unless}}

{{#isPost}}
### Export Your Existing Comments

In order to export your site's Comment and User data from Muut from their Admin dashboard go to Integrations and then JSON Export.

You'll notice that the resulting file you get via email has a mysterious "gz" file extension. If you're a bit extra technically savvy you might know this stands for "gzip" and is a popular and efficient way to compress files. 

### Don't open the "gz" file

A default Windows 10 installation will not be able to open the file from Muut. That's fine, because you don't have to with FastComments. Our backend understands this compressed file.

After that, if you're logged in you can go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">here to import the file</a>. Select Muut from the dropdown and upload your file.

You'll have to enter the URL of your website. This is because Muut does not give us that information in the export.

### Wait a few minutes

The FastComments import is "asynchronous". This means that uploading the file and processing it are separate steps.

So, depending on your file size you might get the success message right away. On the import page at the bottom there's a table - each row represents an import attempt.
You can safely refresh this page to see the status of your import and how many rows have been imported thus far.

### When it's done

You'll receive an email when the import is done - whether it succeeds or not. You can close the page after the file upload succeeds and you see your import in the Imports page. It will have a status like "Requested" and when it starts the status will be "Running".

It's safe to reimport as many times as required - however if your import fails then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a> so we can help.

### Replace the Muut Code with FastComments

It's simply a matter of removing the small snippet Muut gives you and replacing it with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">our own</a>.
You can even run Muut and FastComments on the same site temporarily to test and tweak the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can help with that</a>.

### Migrating URLs at the same time

The comments themselves are tied to the "link" fields in the Muut export so as long as your URLs don't change the switch is easy. If you want to migrate URLs and keep your
comments then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a> by sending us the old and new URLs. The help page allows uploading small text files so if
you are migrating more than just a couple urls create an Excel sheet.

### Recap

1. Export your data
2. Import into FastComments
3. Swap Muut JavaScript snippet with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Why Won't Muut Won't Send Me My File?
For larger sites Muut might not be able to create the exported file due to technical limitations on their end. We have the ability to scrape your existing site and pull the comments off it, however this can be
fairly custom and due to the time involved will require you to have the Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">You can request help with this here</a>.
{{/isPost}}
