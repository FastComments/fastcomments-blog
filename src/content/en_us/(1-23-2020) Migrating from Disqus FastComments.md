---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migrating From Disqus To FastComments[/postlink]

{{#unless isPost}}
Read this post to learn how to fully migrate from Disqus to FastComments.

If you're using the Generic Site Integration with Disqus, then it's simply a matter of removing the small snippet they provide and replacing it with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">our own</a>.
You can even run Disqus and FastComments on the same site temporarily to test and adjust the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can assist with that</a>.

If you're not using the Generic Site Integration, then the instructions will vary based on your platform - again, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a>.
{{/unless}}

{{#isPost}}
There are many things Disqus does well, but where they fall short is where FastComments comes in.

## If You're on WordPress

FastComments has a dedicated WordPress plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

The plugin simplifies the installation, setup, and sync process. If you choose this route, you can disregard the rest of the instructions here.

## Manual, Generic Install

### Export Your Existing Comments

The FastComments importer will transfer your comments, user names, user avatars, and inline images. We'll move the images to our servers seamlessly.

One thing Disqus gets right is how they handle data exporting. You'll notice, after following the steps in their guide <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">here</a>, that the resulting
file you receive via email has a mysterious "gz" file extension. If you're somewhat technically savvy, you might know this stands for "gzip" and is a popular and efficient way to compress files.

### Don't open the "gz" file

A default Windows 10 installation will not be able to open the file from Disqus. That's fine because you don't need to with FastComments. Our backend understands
this compressed file, so all you have to do is follow their instructions <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">here to obtain that file</a>.

After that, if you're logged in, you can go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">here to import the file</a>. Select Disqus from the dropdown and upload your file.

### Wait a few minutes

The FastComments import is "asynchronous." This means that uploading the file and processing it are separate steps.

So, depending on your file size, you might receive the success message right away. On the import page, at the bottom, there's a table - each row represents an import attempt.
You can safely refresh this page to check the status of your import and how many rows have been imported thus far.

### When it's done

You'll receive an email when the import is complete - whether it succeeds or not. You can close the page after the file upload succeeds and you see your import in the Imports page. It will have a status like "Requested," and when it starts, the status will be "Running."

It's safe to reimport as many times as necessary - however, if your import fails, then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a> so we can assist.

### Replace the Disqus Code with FastComments

If you're using the Generic Site Integration with Disqus, then it's simply a matter of removing the small snippet they provide and replacing it with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">our own</a>.
You can even run Disqus and FastComments on the same site temporarily to test and adjust the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can assist with that</a>.

If you're not using the Generic Site Integration, then the instructions will vary based on your platform - again, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a>.

### Migrating URLs at the same time

The comments themselves are tied to the "link" fields in the Disqus export, so as long as your URLs don't change, the switch is easy. If you want to migrate URLs and keep your
comments, then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a> by sending us the old and new URLs. The help page allows uploading small text files, so if
you're migrating more than just a couple of URLs, create an Excel sheet.

### Recap

1. Export your data
2. Import into FastComments
3. Swap the Disqus JavaScript snippet with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Why Won't Disqus Send Me My File?
For larger sites, Disqus might not be able to create the exported file due to technical limitations on their end. We have the capability to scrape your existing site and retrieve the comments from it; however, this can be
fairly custom and due to the time involved will require you to have the Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">You can request assistance with this here</a>.
{{/isPost}}