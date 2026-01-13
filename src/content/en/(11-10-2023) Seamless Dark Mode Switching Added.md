[category:UI & Customization]

###### [postdate]
# [postlink]Seamless Dark Mode Switching Added[/postlink]

{{#unless isPost}}
FastComments always supported dark mode. However, it used to require a reload of the comment widget to switch to dark mode. This has been fixed.
{{/unless}}

{{#isPost}}

### What's New

FastComments always supported dark mode. However, it used to require a reload of the comment widget to switch to dark mode.

This means that if a site used dark mode, or allowed users to switch back and forth between light and dark modes, we would
completely remove the comment widget from the browser and reload it. This was done for technical reasons to simplify the product
on initial launch since state has to be communicated back and forth between the parent page and the widget's iframe.

In light of spooky season being over - the dark mode switch has been improved. The comment widget now supports seamless transitions between light
and dark modes. However, it still requires passing the `hasDarkBackground` flag when applicable.

### For Developers & Gotchas

To tell the comment widget that your site is in dark mode - or has a dark background applied - you would pass the
`hasDarkBackground` flag. This does not change. However, now when you call `instance.update(newConfig)` (or change state
in one of our libraries like React, Svelte, etc), we will detect if the only changed parameter is `hasDarkBackground` and if so
gracefully update the comment widget. The widget will asynchronously load the dark mode extension in the background and update its styling
if necessary.

One major gotcha is that when you pass `newConfig` - this must be an entirely new object for this feature to work.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
