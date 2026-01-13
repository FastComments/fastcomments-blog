---
[category:Features]

###### [postdate]
# [postlink]FastComments Now Supports Markdown[/postlink]

A richer commenting experience has arrived at FastComments with the use of Markdown!

{{#isPost}}

Markdown is a set of conventions for styling text. For example, to create a bold word we could **do this**.  
Inserting normal links means just pasting the raw URL, and images work as before.

Here is a Markdown cheatsheet, provided by Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### What Markdown Syntax Does FastComments Support?

We fully support Markdown, except for headings. When defining a heading we simply render it as regular text as they distract from the flow of conversation. Headings  
are for content like blog posts and documents - not conversations.

FastComments has always supported images via the [img]...[/img] syntax. This will continue to be supported as it is easier to understand than Markdown's.

### Mixing content

A single comment can contain all forms of formatting - markdown, links, images, code snippets, and tables.

### Avoiding XSF/XSS Attacks

Previously, FastComments sent plain text over the network and parsed it on the client. Now, HTML gets sent over the network, and we maintain two versions of every comment  
in our database to support functionality like editing comments.

Sending HTML directly to comments has its risks - so all generated comments get parsed and cleaned to prevent cross-site and cross-frame attacks.

### Data Exports

When exporting comments you will get the version that the user saw when they typed their comment. If you want to get the raw HTML, contact us.

### Performance Concerns

Feature creep has a habit of slowing things down. That's not what we want to do at FastComments.  
Adding this feature has **reduced** the size of our client-side widget by ~400 bytes - from 9.53kb to 9.12kb - meaning faster page loads.

While theoretically this feature could slow down the comment-saving mechanism, we haven't seen any performance degradations and as always are monitoring our APIs.

### How do I get it?

Markdown support has been deployed to all our customers automatically. You shouldn't see too many changes in the content posted to your site - except now users can bold, underline, and do some fancy things  
like create simple tables.

As with all feature releases we look forward to feedback and while we have much automated testing... if you see any issues - let us know!

Happy commenting.

{{/isPost}}