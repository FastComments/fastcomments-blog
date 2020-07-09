###### [postdate]
# [postlink]Comments For The Jamstack[/postlink]

{{#unless isPost}}
What's old is new again. Pre-rendering and serving sites from a CDN is now called the "JamStack" - but they don't have to be completely static!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

<a href="https://jamstack.org/" target="_blank">The Jamstack</a> is a way to write a website that doesn't depend on a traditional web server. Instead, they are
served off of servers we call a "CDN" for the best user experience (they load very fast). Performance is a huge priority for sites written with the Jamstack - just like
FastComments.

#### Why FastComments Works With The Jamstack

FastComments only requires a small (< 11kb currently) code snippet at the bottom of the static page you want to add comments to. Thus, installing FastComments on a typical
Jamstack site only takes a few seconds just like any static site.

#### Potential Issues

We understand Jamstack sites do not always start as something static. They may be made with Preact, React, or Vue for example. Written in vanilla JS, we built the FastComments widget
for maximum interoperability to work with all major frameworks. However, if you encounter issues with FastComments and your framework of choice then
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a>.

#### In Conclusion

We hope that you find FastComments allows your users to interact with your site, give feedback, and leave comments in ways that they normally couldn't on a static site.
For example, this page is pre-rendered just like a traditional Jamstack site, and you can see FastComments happily working at the bottom.

Cheers!

{{/isPost}}
