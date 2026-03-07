[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Keyboard Shortcuts for Comment Moderation[/postlink]

{{#unless isPost}}
Power users can now moderate comments entirely from the keyboard with a full set of shortcuts for navigation, actions, and more.
{{/unless}}

{{#isPost}}

### What's New

The Comment Moderation page now supports comprehensive keyboard shortcuts. Navigate between comments, approve, delete, ban,
mark as spam, toggle context, view logs, and more - all without touching the mouse.

This is a big deal for teams moderating high volumes of comments. Every action that previously required moving the mouse and clicking a button
is now a single keypress away.

### Example Flow

Say you have a queue of comments to review. Press **j** to focus the first comment. Press **c** to expand its
context and see the surrounding thread. Looks good, so press **c** again to collapse context, then **a** to approve it.
Press **j** to move to the next comment and repeat. If something looks off, press **s** to mark it as spam or **d** to
delete it. You can work through an entire page of comments without ever reaching for the mouse.

### Navigation

Press **j** to move focus to the next comment and **k** to move to the previous one. The focused comment is highlighted
with a blue outline to distinguish it from selected (checked) comments.

Press **x** or **Enter** to toggle selection on the focused comment. Hold **Shift** and press **j** or **k** to select
the current comment and move focus in one motion - useful for quickly selecting a run of comments.

### Actions

With a comment focused, single-key shortcuts trigger the same actions as the toolbar buttons:

- **a** - Toggle approve / unapprove
- **s** - Toggle spam / not spam
- **d** - Delete
- **u** - Undelete
- **r** - Toggle reviewed / not reviewed
- **e** - Edit
- **b** - Ban / manage ban
- **p** - Toggle pin / unpin
- **f** - Unflag
- **i** - View all from IP
- **t** - Set trust factor
- **m** - Manage badges
- **l** - View logs
- **c** - Toggle context

### Global Shortcuts

A few shortcuts work regardless of whether a comment is focused:

- **Ctrl+a** - Select all comments
- **Ctrl+z** - Undo the last action
- **/** - Focus the search input
- **[** and **]** - Navigate to the previous or next page

### Help and Guiders

Press **?** at any time to open a help dialog listing every available shortcut.

Press **g** to toggle "guiders" mode, which overlays small badges on the focused comment's action buttons showing
the corresponding shortcut key. This is handy while learning the shortcuts.

All shortcuts are suppressed when typing in the search box or any other input field, and when a dialog is open.
Press **Escape** to blur a focused input and return to shortcut mode.

### Documentation

For a full reference, see the <a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">Moderation Guide</a>.

### In Conclusion

We hope keyboard shortcuts make high-volume moderation faster and more comfortable. The shortcuts follow conventions
familiar to users of tools like Gmail and GitHub, so they should feel natural right away.

Let us know below if you have any questions or feedback!

Cheers!

{{/isPost}}
