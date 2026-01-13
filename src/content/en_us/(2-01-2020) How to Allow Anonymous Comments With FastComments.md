---
[category:Tutorials]

###### [postdate]
# [postlink]How to Allow Anonymous Comments With FastComments[/postlink]

{{#unless isPost}}
By default, FastComments requires an email to comment if you are not logged in. We use this email to automatically create an account for the user and allow them to verify their comment.
To enable anonymous commenting, you simply need to create a customization rule. Define the domain, and optionally the page, where you want
to allow anonymous commenting.
{{/unless}}

{{#isPost}}
By default, FastComments requires an email to comment if you are not logged in. We use this email to automatically create an account for the user and allow them to verify their comment.
To enable anonymous commenting, you simply need to create a customization rule. Define the domain, and optionally the page, where you want
to allow anonymous commenting.

This means that you can control on a page-by-page basis where you allow anonymous comments.

<img 
    src="images/fc-allow-anon.png"
    alt="Allow Anonymous Comments"
    class='lozad' />

{{/isPost}}

---