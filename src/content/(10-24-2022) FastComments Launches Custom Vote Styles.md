###### [postdate]
# [postlink]FastComments Launches Custom Vote Styles[/postlink]

{{#unless isPost}}
Ever wanted to switch from the default up/down voting style to just a plain heart icon? Now you can.
{{/unless}}

{{#isPost}}

### What's New

Previously to customize the voting bar, custom code and CSS had to be written. This also meant that if you wanted to do something like, enable anonymous voting, but disable down votes,
this not only required custom code but the vote requests could not be validated server side. This meant that people could still down vote anonymously by calling the server directly, which happened
in some communities.

We have now introduced the concept of `voteStyle` into the platform, with the first new vote style being the heart icon many have requested.

When defined via the widget customization UI this also adds validation to the platform, which prevents down-voting altogether, so that hackers can no longer bypass the UI and down vote a user into oblivion,
as could happen if anonymous voting was enabled. 

### How to Use It

Go the [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) and select `Heart` under `Vote Style`.

### Documentation

Official docs for this feature are [available on docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Who Gets It

All current and new FastComments customers, on all tiers, now have access to custom vote styles. This feature is only supported by v2 of the comment widget and onwards.

### Optimizations

The code for the different vote styles are not included in the client download of the widget unless enabled, to prevent bloat of the product.

### Looking Ahead

We now have the capacity to add different types of voting and reactions, which we may do in the future.

### In Conclusion

Like the rest of FastComments, we hope that you find this feature fast and easy to use.

Cheers!

{{/isPost}}
