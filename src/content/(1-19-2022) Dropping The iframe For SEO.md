###### [postdate]
# [postlink]Dropping The iframe for SEO[/postlink]

{{#unless isPost}}
We've improved the visibility of your comments to search engines, and increased the likelihood the content will be attributed to your site.
{{/unless}}

{{#isPost}}

## What's New

Previously, FastComments would render your comment threads in an iframe when crawled by search engines. This is because the application requires the use of iframes
for how we use cookies for your user's sessions.

However, this presents an issue with search engines, as they do not guarantee that the content in the iframe will be attributed to your site.

Now, when rendering comments, the embed script will check if the page is being loaded by a crawler. If so, it will not use an iframe!

## How Many Comments Are Shown

Up to 2,000 comments will be shown to search engines for a page. They will be sorted based on your default configured sort order.

## The Testing We Did

We ensured that search engines now see the entire comment thread for a page, and we tested the performance of loading entire comment threads at once.

## Impact to Existing Customers

If you're an existing customer using FastComments, the change has already been applied to your account, and no further action is required. Once search engines re-index your pages
all comments on those pages should be indexed.

## In Conclusion

We hope you found this update and its documentation useful. Happy commenting!

{{/isPost}}

