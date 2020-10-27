###### [postdate]
# [postlink]Using FastComments in VanillaJS Single Page Applications[/postlink]

{{#unless isPost}}
While we have dedicated React and VueJS components, the vanilla widget can be used in single page applications too.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

#### Target Audience

This article is targeted toward developers.

#### Introduction

Most example usage of the FastComments VanillaJS widget is a very simple code snippet that loads the comment thread for the current page URL. This is because
this is the use case for the overwhelming majority of our customers, but recently we have seen an influx of developers building SPAs and using FastComments.

First, keep in mind FastComments has dedicated <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> and <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> components, so check those
out if you are using those libraries so you don't have to build your own wrapper around FastComments.

If you're building your application using VanillaJS however, you can instantiate and update the comment widget dynamically.

#### First, the URL and URL ID

FastComments has two identifiers for the page or article the comment thread is tied to. In the configuration object, they are the "url" and "urlId" properties.

The URL is the URL to the comment widget. Ideally, you should be able to visit this URL from outside your application. It will be exposed as a link in notification emails and in
administrator tools.

The URL ID is string that is either a URL or an ID - it can be any value as long as it represents the current page. If you have a post, article, or page id, you may use that
instead of the page URL for this value. The reason that URL ID is separate is that you may want to store extra information in the URL that would make the URL not unique to the page.

Note that we've documented the complete configuration the widget supports in TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">on GitHub</a>.

#### Specifics and a Real Demo

When the widget is instantiated, capture the result from the FastCommentsUI function that you would normally call:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Then, you can invoke an "update" method on the instance object to update the configuration. This will refresh the component:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

You can see a working example <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">with this fiddle</a>.

Note that in this example we use document.getElementById, but you can use whatever mechanism you like to fetch the target element.

#### Gotchas

While just updating "urlId" will work, you should update both "urlId" and "url" even if they are the same so that links from notification emails and
the moderation tools work. Just updating the "url" will not work - comments are tied to "urlId".

#### In Conclusion

We hope you've found this guide helpful. Feel free to comment below with any questions.

Cheers!

{{/isPost}}
