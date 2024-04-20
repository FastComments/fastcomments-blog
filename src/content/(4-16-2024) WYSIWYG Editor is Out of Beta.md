###### [postdate]
# [postlink]The FastComments WYSIWYG Editor is Out of Beta[/postlink]

{{#unless isPost}}
Customers can now opt in to using the new editor which does not use visible anchor tags for formatting.
{{/unless}}

{{#isPost}}

### What's New

Users of FastComment always had the ability to format their comments with anchor tabs like `<b>this</b>`. This is very
familiar to anyone who has used an internet forum in the past, or many of our competitors, however some users and
communities expect different behavior.

You can now style text in the comment area without anchor tags, as the text input can be switched to a `contenteditable`.

For demonstration purposes this has been enabled on this blog.

The advanced editor has the exact same appearance as the old editor, it just doesn't use visible anchor tags.

### Turning On Advanced Editing

In Widget Customization you can simply enable `Advanced Editor` and hit save. Docs are [here](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### For Developers & Gotchas

You can find documentation for enabling this in code [here](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg) although we recommend using the Widget Customization UI as it
will result in less data sent round trip per page load.

The generated HTML from the content editable is slightly different than the old textarea editor, so keep this in mind
if you are parsing comments from the API.

### Optimizations

We kept the comment widget from growing with this new feature by adding this as an extension which is loaded in the background
when this feature is enabled, which keeps the default comment widget small and light.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
