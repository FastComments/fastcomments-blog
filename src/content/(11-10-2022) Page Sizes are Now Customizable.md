###### [postdate]
# [postlink]Page Sizes are Now Customizable[/postlink]

{{#unless isPost}}
FastComments has had a fixed page size of 30 comments since launch. This is now customizable!
{{/unless}}

{{#isPost}}

### What's New

Your comment threads can now have varying pagination sizes, and this can now be customized globally across your account, or at a
site, or even page level. This can be desirable if you want certain pages to have less or more comments shown before the user
has to paginate.

This also affects infinite scrolling, and any frameworks or integrations rendering comments from FastComments.

Page sizes can range from `10` all the way up to `200`. The default remains at `30`.

### How to Get It

Simply head over to the trusty [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) and define
your page size.

Note that FastComments pre-calculates the comments shown on each page, so changing this parameter will trigger our system
to recalculate all of your comment threads. This won't cause any downtime, but it may take a few minutes for the change to show up.

### Documentation

Updated documentation on page sizes can be found on [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Breaking Changes

As part of this change, two translations defined in the comment widget have been renamed. `PREV_30` and `NEXT_30` are now
`PREV` and `NEXT`, respectively, and contain a `[count]` variable.

If you've defined translations for the pagination buttons via the Widget Customization UI, then we have already migrated
these for you. If you're passing the translations in some sort of integration via code, you'll have to update these:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
