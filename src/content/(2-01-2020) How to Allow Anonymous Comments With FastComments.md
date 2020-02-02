###### [postdate]
# [postlink]How to Allow Anonymous Comments With FastComments[/postlink]

{{#unless isPost}}
By default FastComments requires an email to comment if you are not logged in. We use this email to automatically create an account for the user and let them verify their comment.
In order to allow anonymous commenting you just have to create customization rule. Define the domain, and optionally page, that you want
to allow anonymous commenting on.
{{/unless}}

{{#isPost}}
By default FastComments requires an email to comment if you are not logged in. We use this email to automatically create an account for the user and let them verify their comment.
In order to allow anonymous commenting you just have to create customization rule. Define the domain, and optionally page, that you want
to allow anonymous commenting on.

This means that you can control on a page-by-page basis where you allow anonymous comments.

<img 
    data-src="images/fc-allow-anon.png"
    alt="Allow Anonymous Comments"
    class='lozad' />

{{/isPost}}
