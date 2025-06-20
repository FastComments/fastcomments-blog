[category:Features]
###### [postdate]
# [postlink]Spoiler Support Added[/postlink]

{{#unless isPost}}
Users can now add spoilers in their comments which are hidden until hovered via the mouse.
{{/unless}}

{{#isPost}}

### What's New
Users of FastComments can now click a "SPOILER" button to add spoilers to their comments. They can also write `<spoiler>some text</spoiler>` tags directly if desired.
Note that the toolbar option for spoilers is disabled by default.

### Turning On Spoilers

In Widget Customization you can simply enable the `Spoilers` option and hit save. Docs are [here](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-spoilers).
We've enabled them for this blog post to demo the feature.

### For Developers & Gotchas

The default spoiler styling supports light and dark modes. If you write custom CSS for masked text remember to cover
dark mode as well if your site supports it.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
