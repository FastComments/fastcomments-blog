---
[category:Integrations]
###### [postdate]
# [postlink]Embedding Comments on a GatsbyJS Site with FastComments[/postlink]

{{#unless isPost}}
You can now use FastComments to embed comments into a site built with Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

#### What's New

We've recently launched our <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React component</a> for FastComments.

This opens up a lot of opportunities - including integrating FastComments with Gatsby.

#### If You Wrote Your Own Wrapper

If you wrote your own React wrapper for FastComments - consider replacing it with our new one. We'll maintain this abstraction for you - and it includes many
great features like <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">auto reload on config changes</a>.

#### How it Works

Since FastComments has a React component as a wrapper around our core widget - it's just a matter of using our React library to instantiate the widget client-side.

We fully support this component and will keep it updated.

#### Examples?

We've started to set up examples, which you can find <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">here</a>.

#### Night Mode

One of the examples we have is "night mode" - rendering FastComments on a site with a black (or very dark) background: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Additionally, since the widget responds to configuration changes this means you can have a mode to toggle your site's theme and easily tell fastcomments-react to update.

#### In Conclusion

We hope you find integrating FastComments into your Gatsby site quick and easy.

Cheers!

{{/isPost}}

---