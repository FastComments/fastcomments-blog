###### [postdate]
# [postlink]Easy Code Snippet Support With FastComments[/postlink]

Some of our customers have software-development related sites and blogs. In these communities it's common to share code snippets. Here's how FastComments makes that easy.

{{#isPost}}

FastComments allows sharing code simply by pasting it into the comment box. It can be mixed in with other text and images, and doesn't require you to manually add any sort of "code" tags
to add the formatting. Simply paste!

Here's a quick demo showing it in action.

<video src="images/fc-code-snippet-demo.mp4" autoplay="true" controls="true" loop=true alt="Code Snippet Sharing Demo" title="Code Snippet Sharing Demo"></video>

### Performance Implications

Adding this feature has added only ~150 bytes to the client-side widget as most of the functionality handled server side. In fact, if you bundle this in with the recent Markdown
features added the widget size actually has gone down with these recent features!

### Things to Note

If you have a community heavily sharing code, you should consider increasing the max comment size to make sharing code snippets easier. This is done via the "Customize" tab
of the admin dashboard.

### Code Detection

In order to keep the client-side widget size down, we'll only auto detect pasted code for C and Python-like languages (Java, JavaScript, CSS, C++, for example) that either use "{" or spaces for control flow.
If you're commonly using a language that is not being auto detected, reach out to us.

To manually insert a block of code, write a comment like: ```<code>(defun someLispCode(1, 2, 3))</code>```. We can auto detect around 150 languages. 

### Migrating Existing Comments

If you'd like to migrate to FastComments and have a lot of comments that have code snippets that you'd like formatted correctly, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">we can help</a>.

### In Conclusion

That's it! We've rolled this out to all online communities on FastComments.

Happy commenting!

{{/isPost}}

