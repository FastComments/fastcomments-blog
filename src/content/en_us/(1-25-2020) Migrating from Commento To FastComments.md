---
[category:Migration]
###### [postdate]
# [postlink]Migrating From Commento To FastComments[/postlink]

{{#unless isPost}}
Read this post to see how to fully migrate from Commento to FastComments.

## Gotchas

Commento doesn't provide us with complete URLs. What they offer is just the domain name that a comment thread belongs to - like "fastcomments.com/some-page".
This means that the FastComments importer has to assume what the protocol is, defaulting to https. If you run the import and do not see your data
you may want to ensure that your site is properly secured.
{{/unless}}

{{#isPost}}
### Export Your Existing Comments

To export your site's Comment and User data from Commento, go to General in their Admin dashboard and then select Export Data.

You will notice that the resulting file you receive via email has a mysterious "gz" file extension. If you're a bit more technically savvy, you might know this stands for "gzip" and is a popular and efficient way to compress files. 

### Don't open the "gz" file

A default Windows 10 installation will not be able to open the file from Commento. That's fine, because you don't have to with FastComments. Our backend understands this compressed file.

After that, if you're logged in, you can go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">here to import the file</a>. Select Commento from the dropdown and upload your file.

### Wait a few minutes

The FastComments import is "asynchronous". This means that uploading the file and processing it are two separate steps.

So, depending on your file size, you may receive the success message right away. On the import page at the bottom, there's a table - each row represents an import attempt.
You can safely refresh this page to see the status of your import and how many rows have been imported so far.

### When it's done

You'll receive an email when the import is complete - whether it succeeds or not. You can close the page after the file upload has succeeded and you see your import on the Imports page. It will have a status like "Requested" and when it starts, the status will be "Running".

It's safe to reimport as many times as necessary - however, if your import fails then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a> so we can assist you.

### Replace the Commento Code with FastComments

It's simply a matter of removing the small snippet Commento provides you and replacing it with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">our own</a>.
You can even run Commento and FastComments on the same site temporarily to test and tweak the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can help with that</a>.

### Migrating URLs at the same time

The comments themselves are tied to the "link" fields in the Commento export, so as long as your URLs don’t change, the switch is straightforward. If you want to migrate URLs and keep your
comments, then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a> by sending us the old and new URLs. The help page allows uploading small text files, so if
you are migrating more than just a couple of URLs, create an Excel sheet.

### Recap

1. Export your data
2. Import into FastComments
3. Swap the Commento JavaScript snippet with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Gotchas

Commento doesn't provide us with complete URLs. What they offer is just the domain name that a comment thread belongs to - like "fastcomments.com/some-page".
This means that the FastComments importer has to assume what the protocol is, defaulting to https. If you run the import and do not see your data
you may want to ensure that your site is properly secured.

## Why Won't Commento Send Me My File?
For larger sites, Commento may not be able to create the exported file due to technical limitations on their end. We have the ability to scrape your existing site and extract the comments from it; however, this can be
fairly custom and due to the time involved will require you to have the Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">You can request help with this here</a>.
{{/isPost}}

---