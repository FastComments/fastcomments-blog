###### [postdate]
# [postlink]Indexing Your Comment Threads in Search Engines[/postlink]

{{#unless isPost}}
We've improved the information that search engines see when crawling your site with FastComments.
{{/unless}}

{{#isPost}}

## What's New

Previously, when search engines crawled websites with FastComments installed, they would only index the first page (top 30) comments.

This was because previously the search engines saw the same thing you did when visiting your site.

Now, when a search engine visits your site, all comments will be loaded.

## Impacts to Page Rank

Modern search engines take many things into account when ranking a page, including the relevance of the content on the page compared to what you're searching for, and even things like
the page load time of that page.

This change will mean that the full content of your comment threads are available for indexing, potentially increasing the relevance of searches. It also shows engagement, which
is something the search engine may use to rank.

A possible detractor is performance, since now we are loading more comments, however in our testing we found that it would take many hundreds, if not thousands of comments
in a thread to slow down FastComments to where this would impact your page load times to cause a rank change.

For example, our demo page with over 100 comments, still <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">gets a 99/100 score from Google's PageSpeed Insights</a>.

## The Testing We Did

We ensured that search engines now see the entire comment thread for a page, and we tested the performance of loading entire comment threads at once.

## Impact to Existing Customers

If you're an existing customer using FastComments, the change has already been applied to your account, and no further action is required. Once search engines re-index your pages
all comments on those pages should be indexed.

## In Conclusion

We hope you found this update and its documentation useful. Happy commenting!

{{/isPost}}

