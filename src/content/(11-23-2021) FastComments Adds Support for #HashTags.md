###### [postdate]
# [postlink]FastComments Adds Support for #HashTags[/postlink]

{{#unless isPost}}
Ever wanted to #tag a topic or piece of information? Now you can.
{{/unless}}

{{#isPost}}

### What's New

When commenting, users can now enter one or more `#hashtags`. Upon clicking a `#hashtag` in a comment will take you to a view with other comments
with the hashtag shown.

Additionally, `#hashtags` can be used to link to external pieces of content. Along with this release we've launched our [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)
which allows pre-population of hashtags in your account.

When pre-populating hashtags, we can define a URL for each tag. This means that `#hashtags` can also be used to link to, for example, a ticket number, or
a document in a CRM.

The `#` symbol can be customized as well, on request.

### How to Use It

When typing `#`, and then the start of a hashtag, a list of search results will appear.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="HashTags Usage" title="#hashtags Demo" />
</div>

Simply click the hashtag you wish to add.

Additionally, you can use the up and down arrow keys to navigate this list, and hit enter to select, or escape to leave.

We know that you may want to use the `#` symbol without adding a hashtag. FastComments will detect this and not intrude on your typing experience.

### Adding Hash Tags

If the hashtag you want to use is not in the list of suggestions - FastComments will simply auto-create the hashtag behind the scenes.

Automatic `#hashtag` creation can be disabled as per the documentation [here](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Who Gets It

All current and new FastComments customers, on all tiers, now have access to `#hashtags`. `#hashtags` have been back-ported to earlier versions of the
comment widget, as well.

### How the Autocomplete Works

The tags shown in the autocompleted list are only from your account. HashTags are not shared across FastComments tenants.

### Documentation

There is dedicated documentation for `#hashtags`. See here: https://docs.fastcomments.com/guide-hashtags.html

### In Conclusion

Like the rest of FastComments, we hope that you find this feature fast and easy to use.

Cheers!

{{/isPost}}
