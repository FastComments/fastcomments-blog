---
[category:API & Development]
###### [postdate]
# [postlink]Comment Menu Update[/postlink]

{{#unless isPost}}
This update is primarily for developers who customize FastComments. We've implemented some API changes and made several optimizations.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

Some FastComments tenants customize the comment widget. This creates a contract
between your customizations and our implementation. We do our best to uphold this
contract, but as part of this announcement, we have a minor breaking change.

### For Developers

A CSS selector for the comment menu has been updated.

Old:

    .comment .menu .menu-content

New:

    .menu-content

### Existing Tenants

If you're already using the "menu-content" selector - congratulations! We’ve reviewed all our
tenants using this selector and updated their widget configurations to avoid any breakages.

Please let us know if you encounter any issues.

### Reasoning

Since the comment widget was created, the comment menu has been solely a CSS-driven dropdown. This
is a simple, efficient way to implement a dropdown menu that also requires minimal code - a design
goal of FastComments.

However, over the years, issues have arisen.

For one, when the comment area has a defined height and is scrollable, such as with Streaming Chat,
accessing the menu towards the bottom can be challenging as the menu attempts to extend beyond
the scrollable content area. This makes part of the menu invisible and necessitates
moving your mouse and re-hovering over the menu to accomplish tasks. We found
this to be frustrating for users.

Some workarounds were attempted, such as flipping the menu direction **up**,
but this does not work if the widget height is insufficient and there are many action
items in the menu - particularly for administrators. In this case, it would be ideal to drop the menu down
below the scrollable content area.

### Size Benefits

One advantage of this change is that we could abstract a significant amount of code into an asynchronously-loading
module. This will enable us to expand the actions you can perform on comment data without bloating
the initial load of the widget. This introduces a network call the first time you hover
over the edit menu, but the initial bundle is minimal (< 1kb) so this should not be very noticeable.

It is quite challenging to continue evolving software while also reducing its size over time. Typically, software
starts out fast and becomes slower over time. Thus, we’re always eager to keep improving FastComments' speed:

    Before: 28.76kb gzipped (108.02kb total)
    After: 28.39kb gzipped (105.79kb total)

Less code also means less code for your browser to parse during page load. The impact of this will grow as more features are added.

### Performance Benefits

The old menu rendered all menu items, loaded all extensions to check if the extensions
had items to add, and rendered those as well - for every comment - to ensure the content was ready for interaction.

There are typically 30 - 100 objects, so this usually isn't a significant problem, but the impact was increasing. The new system alleviates this concern
as the menu is now only rendered on demand.

The trade-off is that the new menu is positioned and rendered using JS to achieve the desired functionality. We will
continue optimizing it as we can; however, it currently performs well.

### In Conclusion

Thank you to our customers for their patience during the rollout of these changes. We hope you
continue to enjoy FastComments.

Cheers!

{{/isPost}}

---