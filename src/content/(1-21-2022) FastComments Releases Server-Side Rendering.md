###### [postdate]
# [postlink]FastComments Releases Server-Side Rendering[/postlink]

{{#unless isPost}}
Add commenting to your site without the use of JavaScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

## What's New

Since launch in early 2020, FastComments has exclusively used JavaScript to render the comment widget.

What if we told you could have almost all the same essential functionality, but without using JS?

<div class="text-center">
    <div class="sm">This is a screenshot, stop trying to click it.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

The above screenshot is the FastComments commenting widget, without JavaScript. [You can view this page, without JavaScript, here.](https://fastcomments.com/ssr/comments?tenantId=nYrnfYEv&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DnYrnfYEv%26urlId%3Dssr-test)

## How to Use It

If you're using WordPress, the FastComments plugin version 3.10.1 automatically adds support for SSR as a fallback for your users that browse with JS disabled.

For custom implementations, fetch the UI for a comment thread, simply call the `/ssr/comments` for that page:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Where `$urlId` is the url, or id, of the page. Documentation on this is [here](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

For example, with PHP we can send an iframe to the page that renders the comment thread inside:

<div class="code"><div class="title">PHP-Based SSR Example</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

We could also make an API call to get the HTML for a comment thread, and render, or store it.

Complete documentation is available in the [SSR Docs at docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Because we love enterprise-sounding acronyms, don't worry, SSR supports SSO. [An example of Single-Sign-On with SSR is here.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Localization

The SSR-based endpoint automatically localizes the response based on the language related headers the browser sends. It can also use the same localization
overrides as the JavaScript based widget.

## Why This Was Built

One of the main complaints about services like FastComments is that they require JS. We already make our comment widget slim as possible, and ensure we meet
our API call SLAs of < 20ms, but many smaller communities won't pick such a solution if it means adding JS to their site.

This also opens up the opportunity to use rendering engines that don't have access to JavaScript.

## The Technology

FastComments uses its own small microframework for rendering the UI. This framework uses a similar approach to React, except that manual dom manipulations
outside the initial render are allowed.

The core comment widget library has a single entry point - it takes a set of state and creates resulting HTML and CSS to be rendered. We simply call this on the
server, too. When the user interacts with the page, the state is changed and the latest HTML fetched. This was built as a result of a hackathon that took place as part of the new year.

## Live Commenting

Since the UI is rendered by the server, one time, live commenting features are not available.

Additionally, the notifications bell is not currently available. We will be open to adding this feature in the future.

## Performance

The server-rendered UI uses the same storage optimizations and rendering engine as the JavaScript based widget. For small comment threads, performance
is actually better, as the user does not have to download a script that then fetches the comments and renders the UI.

## Crawlers and SEO

FastComments already works well with web crawlers; if SEO is a concern, using SSR is not required.

## Future Applications

We plan on launching a Forum solution in the future. Traditionally, forums are paginated, and server-side rendered. Modern Forum solutions step away from this
norm by using infinite scrolling and client side rendering. We don't think this has to be the only option for using a third party Forum solution.

## In Conclusion

We hope you've found this guide helpful and easy to read. Feel free to comment below with any questions.

Cheers!

<style>/*

Monokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #23241f;
}

.hljs,
.hljs-tag,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2;
}

.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff;
}

.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672;
}

.hljs-symbol,
.hljs-attribute {
  color: #66d9ef;
}

.hljs-params,
.hljs-class .hljs-title {
  color: #f8f8f2;
}

.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}
</style>

{{/isPost}}
