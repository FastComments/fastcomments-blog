[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migrating From Disqus To FastComments[/postlink]

{{#unless isPost}}
Read this post to see how to fully migrate from Disqus to FastComments.

If you're using the Generic Site Integration with Disqus then it's simply a matter of removing the small snippet they give you and replacing it with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">our own</a>.
You can even run Disqus and FastComments on the same site temporarily to test and tweak the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can help with that</a>.

If you're not using the Generic Site Integration then the instructions will vary based on your platform - again <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a>.
{{/unless}}

{{#isPost}}
There are a lot of things Disqus gets right, but where they fall short is where FastComments steps in.

## If You're on WordPress

FastComments has a dedicated WordPress plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

The plugin makes the installation, setup, and sync very easy. If you go this route you can ignore the rest of the instructions here.

## Manual, Generic Install

### Export Your Existing Comments

The FastComments importer will migrate your comments, user names, user avatars, and inline images. We'll move the images to our servers seamlessly.

One thing Disqus gets right is how they handle exporting data. You'll notice after following the steps in their guide <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">here</a> that the resulting
file you get via email has a mysterious "gz" file extension. If you're a bit extra technically savvy you might know this stands for "gzip" and is a popular and efficient way to compress files. 

### Don't open the "gz" file

A default Windows 10 installation will not be able to open the file from Disqus. That's fine, because you don't have to with FastComments. Our backend understands
this compressed file so all you have to do is follow their instructions <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">here to get said file</a>.

After that, if you're logged in you can go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">here to import the file</a>. Select Disqus from the dropdown and upload your file.

### Wait a few minutes

The FastComments import is "asynchronous". This means that uploading the file and processing it are separate steps.

So, depending on your file size you might get the success message right away. On the import page at the bottom there's a table - each row represents an import attempt.
You can safely refresh this page to see the status of your import and how many rows have been imported thus far.

### When it's done

You'll receive an email when the import is done - whether it succeeds or not. You can close the page after the file upload succeeds and you see your import in the Imports page. It will have a status like "Requested" and when it starts the status will be "Running".

It's safe to reimport as many times as required - however if your import fails then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a> so we can help.

### Replace the Disqus Code with FastComments

If you're using the Generic Site Integration with Disqus then it's simply a matter of removing the small snippet they give you and replacing it with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">our own</a>.
You can even run Disqus and FastComments on the same site temporarily to test and tweak the look and feel. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can help with that</a>.

If you're not using the Generic Site Integration then the instructions will vary based on your platform - again <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a>.

### Migrating URLs at the same time

The comments themselves are tied to the "link" fields in the Disqus export so as long as your URLs don't change the switch is easy. If you want to migrate URLs and keep your
comments then <a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a> by sending us the old and new URLs. The help page allows uploading small text files so if
you are migrating more than just a couple urls create an Excel sheet.

### Recap

1. Export your data
2. Import into FastComments
3. Swap Disqus JavaScript snippet with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Why Won't Disqus Won't Send Me My File?
For larger sites Disqus might not be able to create the exported file due to technical limitations on their end. We have the ability to scrape your existing site and pull the comments off it, however this can be
fairly custom and due to the time involved will require you to have the Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">You can request help with this here</a>.
{{/isPost}}

