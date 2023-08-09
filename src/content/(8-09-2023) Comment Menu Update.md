###### [postdate]
# [postlink]Comment Menu Update[/postlink]

{{#unless isPost}}
This update is mostly for developers that customize FastComments. We've made some API changes and made some optimizations.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

Some FastComments tenant customize the comment widget. This creates a contract
between your customizations and our implementation. We do our best not to break this
contract, but as part of this announcement we have a small breaking change.

### For Developers

A CSS selector for the comment menu has been changed.

Old:

    .comment .menu .menu-content

New:

    .menu-content

### Existing Tenants

If you're already using the "menu-content" selector - congratulations! We've gone through all our
tenants using this selector and updated it to prevent breakages.

Let us know if you have any issues.

### Reasoning

Since the comment widget has been created the comment menu was purely a CSS-driven dropdown. This
is a nice simple, fast way to implement a dropdown menu that also does not require much code - a design
goal of FastComments.

However, over the years it has picked up problems.

For one, when the comment area has a specific height and is scrollable, like with Streaming Chat,
accessing the menu toward the bottom is difficult as the menu will attempt to go beyond
the scrollable content area. This makes part of the menu invisible and requires you to
move your mouse and re-hover over the menu to do whatever work you were just trying to get done. We felt
that it was frustrating to use.

Some workarounds were made, like flipping the menu direction **up**,
but this also does not work if the widget height is not tall enough and there are many action
items in the menu - like for administrators. In this case it would be ideal to drop the menu down
past the scrollable content area.

### Size Benefits

One benefit of this change is that we were able to abstract much code into an asynchronously-loading
module. This will allow us to expand the actions you can take on comment data without making
the initial load of the widget bloated. This introduces a network call the first time you hover
over the edit menu, but the initial bundle is very tiny (~2kb) so this should not be very noticeable.

It's very hard to continue to evolve software and also decrease its size over time. Usually software
starts fast and gets slow. So, we're always happy to chip away at keeping FastComments fast:

    Before: 28.76kb (108.02kb total)
    After: 28.39kb (105.79kb total)

The impact of this will expand as more features are added.

### Performance Benefits

The old menu rendered all menu items, and loaded all extensions to see if the extensions
had items to add, and rendered those too - for every comment - so that the content was ready for your mouse.

There are only 30 - 100 objects usually so this tends to not be a big deal, but the impact was growing. The new system removes this concern
as the menu is now only rendered on demand.

The trade-off is the new menu is positioned and rendered using JS to accomplish what we want. We will
continue to optimize it as we can, however it currently performs well.

### In Conclusion

Thanks to our customers in their patience with rolling out these changes. We hope you
continue to love FastComments.

Cheers!

{{/isPost}}
