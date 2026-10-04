[category:Features]
[category:Performance]

###### [postdate]
# [postlink]FastComments is Now Even Faster[/postlink]

{{#unless isPost}}
We've removed one network request when loading the comment widget, lowering load times even more.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

How FastComments has worked for the past five years or so is we load a small script, the iframe loads, then the script that includes its styling, and then a request to the API for everything needed to draw the comments. While this sounds like a lot, this is very compact compared to most systems!

However, it's now even one less request. The iframe response that delivers the widget also carries the comments and all data the user needs initially, so the last API request is gone.

The API remains maintained for backwards compatibility for anyone that depends on it.

### Nothing to Configure

There is no setting for this and no version to upgrade to. If you embed FastComments with our script, you have it already.

Your own page is unaffected either way. The widget still loads in an iframe and still doesn't block your content, exactly as
before.

### Where It Doesn't Apply

A few paths don't use this, and they behave exactly as they always have:

- Search engine crawlers, which already render comments directly into the page rather than in an iframe
- User activity feeds and hash tag filtering, which read from different endpoints

### In Conclusion

We hope you continue to enjoy using our platform and hope that the improvements we make add value. :)

Cheers!

{{/isPost}}
