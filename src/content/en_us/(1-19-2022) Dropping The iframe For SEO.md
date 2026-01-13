---
[category:Performance]
[category:Features]
###### [postdate]
# [postlink]Dropping The iframe for SEO[/postlink]

{{#unless isPost}}
We've enhanced the visibility of your comments to search engines, increasing the chances that the content will be credited to your site.
{{/unless}}

{{#isPost}}

## What's New

Previously, FastComments would display your comment threads in an iframe when crawled by search engines. This is necessary because the application relies on iframes to manage cookies for your user's sessions.

However, this creates a problem for search engines, as they do not guarantee that the content within the iframe will be associated with your site.

Now, when rendering comments, the embed script will determine if the page is being accessed by a crawler. If it is, it will not use an iframe!

## How Many Comments Are Shown

Up to 2,000 comments will be displayed to search engines for a page. They will be organized according to your default configured sort order.

## The Testing We Did

We made sure that search engines can now see the complete comment thread for a page, and we evaluated the performance of loading entire comment threads at once.

## Impact to Existing Customers

If you are an existing customer utilizing FastComments, the change has already been implemented in your account, and no additional action is needed. Once search engines re-index your pages, all comments on those pages should be indexed.

## In Conclusion

We hope you found this update and its documentation beneficial. Happy commenting!

{{/isPost}}