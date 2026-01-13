---
[category:Features]

###### [postdate]
# [postlink]The FastComments WYSIWYG Editor is Out of Beta[/postlink]

{{#unless isPost}}
Customers can now opt to use the new editor that does not rely on visible anchor tags for formatting.
{{/unless}}

{{#isPost}}

### What's New

Users of FastComment have always had the ability to format their comments with anchor tags like `<b>this</b>`. This is quite familiar to anyone who has used an internet forum in the past or many of our competitors; however, some users and communities expect different functionality.

You can now style text in the comment area without anchor tags, as the text input can be switched to a `contenteditable`.

For demonstration purposes, this has been enabled on this blog.

The advanced editor has the same appearance as the old editor, it simply does not utilize visible anchor tags.

### Turning On Advanced Editing

In Widget Customization, you can easily enable `Advanced Editor` and hit save. Documentation is available [here](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### For Developers & Gotchas

You can find documentation for enabling this in code [here](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg), although we recommend using the Widget Customization UI as it will result in less data sent on each round trip per page load.

The generated HTML from the content editable is slightly different from the old textarea editor, so keep this in mind if you are parsing comments from the API.

### Optimizations

We prevented the comment widget from expanding with this new feature by adding it as an extension that loads in the background when this feature is enabled, which keeps the default comment widget small and lightweight.

### In Conclusion

As with all major releases, we're pleased that we could take the time to optimize, test, and properly release this feature. Let us know below if you find any issues.

Cheers!

{{/isPost}}

---