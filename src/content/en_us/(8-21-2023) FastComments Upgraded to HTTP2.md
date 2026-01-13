---
[category:Performance]
###### [postdate]
# [postlink]FastComments Upgraded to HTTP/2[/postlink]

{{#unless isPost}}
We've made some infrastructure upgrades that enhance the performance of FastComments even further!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

Since launch, FastComments has been using HTTP/1.1. Recently, we've transitioned our entire infrastructure
across all regions to HTTP/2.

### Impact

This update keeps FastComments aligned with modern standards while providing some
performance enhancements. The downside is that some older browsers are no longer supported.

### Deprecated Browsers and Clients

You can find [unsupported browsers here](https://caniuse.com/http2). The main issue will be IE11, which
only has partial support; however, these users should be transitioning to Edge.

Chrome, Firefox, and others have supported HTTP/2 for years, so we believe it's safe to implement this change.

### Performance Benefits

FastComments is already quite optimized in terms of assets served and their order. For instance,
the comment widget only serves a few requests to load - the initial iframe, followed by the script which includes styling to minimize the number of requests, and then
the request to the API to retrieve all necessary information. Compared to many other services, it’s quite compact.

So, this isn't one scenario where HTTP/2 significantly improves performance. The main benefit of HTTP/2 is enabling concurrent requests.

However, HTTP/2 does assist us with compression! Headers are now sent in a binary protocol which
is more compact, and certain plugins with numerous assets will load much faster as the requests
can be pipelined in parallel.

### In Conclusion

Thanks to our customers for their patience during the rollout of these changes. We hope you
continue to enjoy FastComments.

Cheers!

{{/isPost}}

---