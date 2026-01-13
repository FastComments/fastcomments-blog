---
[category:Performance]
###### [postdate]
# [postlink]Indexing Your Comment Threads in Search Engines[/postlink]

{{#unless isPost}}
We've enhanced the information that search engines see when they crawl your site with FastComments.
{{/unless}}

{{#isPost}}

## What's New

Previously, when search engines crawled websites with FastComments installed, they would only index the first page (top 30) comments.

This happened because earlier, search engines saw the same content that you viewed when visiting your site.

Now, when a search engine visits your site, all comments will be loaded.

## Impacts to Page Rank

Modern search engines consider many factors when ranking a page, including the relevance of the content on the page to what you're searching for, and even aspects like
the page load time of that page.

This change means that the full content of your comment threads is available for indexing, which could potentially increase the relevance of searches. It also demonstrates engagement, which
is something the search engine may factor into its ranking.

A potential downside is performance, since we're now loading more comments; however, in our testing, we discovered that it would take many hundreds, if not thousands of comments
in a thread to slow down FastComments enough to impact your page load times and cause a rank change.

For instance, our demo page with over 100 comments still <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">receives a 99/100 score from Google's PageSpeed Insights</a>.

## The Testing We Did

We verified that search engines now see the entire comment thread for a page, and we tested the performance of loading entire comment threads simultaneously.

## Impact to Existing Customers

If you're an existing customer using FastComments, the change has already been made to your account, and no further action is necessary. Once search engines re-index your pages,
all comments on those pages should be indexed.

## In Conclusion

We hope you found this update and its documentation helpful. Happy commenting!

{{/isPost}}