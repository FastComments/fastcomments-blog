---
[category:Features]
###### [postdate]
# [postlink]Spoiler Support Added[/postlink]

{{#unless isPost}}
Users can now include spoilers in their comments, which are hidden until hovered over with the mouse.
{{/unless}}

{{#isPost}}

### What's New
Users of FastComments can now click a "SPOILER" button to include spoilers in their comments. They can also write `<spoiler>some text</spoiler>` tags directly if they prefer.
Note that the toolbar option for spoilers is disabled by default.

### Turning On Spoilers

In Widget Customization, you can easily enable the `Spoilers` option and click save. Documentation is [here](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-spoilers).
We've enabled them for this blog post to demo the feature.

### For Developers & Gotchas

The default spoiler styling supports light and dark modes. If you write custom CSS for masked text, remember to accommodate
dark mode as well if your site supports it.

### In Conclusion

Like all major releases, we're pleased that we could take the time to optimize, test, and properly release this feature. Let us know
below if you encounter any issues.

Cheers!

{{/isPost}}

---