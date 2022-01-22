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
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

The above screenshot is the FastComments commenting widget, without JavaScript. [You can view this page, without JavaScript, here.](https://fastcomments.com/ssr/comments?tenantId=nYrnfYEv&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DnYrnfYEv%26urlId%3Dssr-test)

## How to Use It

If you're using WordPress, the FastComments plugin 3.10.1 automatically adds support for SSR as a fallback for your users that browse with JS disabled.

For custom implementations, fetch the UI for a comment thread, simply call the `/ssr/comments` for that page:

    https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url

Where `$urlId` is the url, or id, of the page. Documentation on this is [here](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

For example, with PHP we can send an iframe to the page that renders the comment thread inside:

    <?php
    $tenantId = rawurlencode("my-tenant-id");
    $urlId = rawurlencode("my-page-url-article-id");
    $url = rawurlencode("my-page-url");
    $fastcomments_url = "https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url";
    ?>
    <iframe
        src="<?php echo $fastcomments_url; ?>"
        horizontalscrolling="no"
        allowtransparency="true"
        frameborder="0"
        title="FastComments"
        width="100%"
        height="1500px"
        style= "width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"
    ></iframe>

We could also make an API call to get the HTML for a comment thread, and render, or store it.

Complete documentation is available in the [SSR Docs at docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

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

{{/isPost}}
