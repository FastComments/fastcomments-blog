[category:Performance]
###### [postdate]
# [postlink]FastComments Upgraded to HTTP/2[/postlink]

{{#unless isPost}}
We've made some infrastructure upgrades that improves the performance of FastComments even more!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

Since launch FastComments has been on HTTP/1.1. Recently, we've switched our entire infrastructure
in all regions to HTTP/2.

### Impact

This update keeps FastComments up to date with modern standards while providing some
performance improvements. The downside is some older browsers are no longer supported.

### Deprecated Browsers and Clients

You can find [unsupported browsers here](https://caniuse.com/http2). The main issue will be IE11 which
only has partial support, however these users should be switching to Edge.

Chrome, Firefox, and others have supported HTTP/2 for years, so we find it safe to make this change.

### Performance Benefits

FastComments is already fairly optimized in terms of assets served and their order. For example,
the comment widget only serves a few requests to load - the initial iframe, then the script which includes styling to reduce number of requests, and then
the request to the API to get all needed information. Compared to many other services it's fairly compact.

So, this isn't one case where HTTP/2 really helps much. The main benefit with HTTP/2 is making concurrent requests.

However, HTTP/2 does help us with compression! Headers are now sent in a binary protocol which
is more compact, and certain plugins with lots of assets will load much faster as the requests
can be pipelined in parallel.

### In Conclusion

Thanks to our customers with their patience rolling out these changes. We hope you
continue to love FastComments.

Cheers!

{{/isPost}}
