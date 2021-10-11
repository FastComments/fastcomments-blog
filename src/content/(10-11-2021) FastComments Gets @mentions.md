###### [postdate]
# [postlink]FastComments Gets @mentions[/postlink]

{{#unless isPost}}
Ever wanted to @mention one or more users in a comment? Now you can.
{{/unless}}

{{#isPost}}

### What's New

While previously FastComments would notify users if you replied to their comments, there was no way to tag multiple people in a single comment. Also, these
notifications were sent in batches every hour. With `@mentions`, it's now possible to tag one or more users and FastComments will notify them right away via email.

### How to Use It

When typing `@`, and then the start of a user's name, a list of search results will appear.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Mentions Usage" title="@mentions Demo" />
</div>

Simply click the user's name you wish to tag.

Additionally, you can use the up and down arrow keys to navigate this list, and hit enter to select, or escape to leave.

We know that you may want to use the `@` symbol without tagging a user. FastComments will detect this and not intrude on your typing experience.

### Who Gets It

All current and new FastComments customers, on all tiers, now have access to `@mentions`. `@mentions` have been back-ported to earlier versions of the
comment widget, as well.

### How the Autocomplete Works

The users shown in the autocompleted list is determined by:

- Users that have commented on the same page or thread.
- Users that have created their FastComments accounts through the same site.
- Moderators of the current site.
- SSO users that belong to the current tenant.

### Editing Comments

Mentions can be added to existing comments by editing them. However, the `Moderate Comments` application does not currently autocomplete `@mentions`.

### Future Considerations

In the future, users that have FastComments open in a browser window will get a ping when they are mentioned, if they are opted into notifications.

### In Conclusion

Like the rest of FastComments, we hope that you find this feature fast and easy to use.

Cheers!

{{/isPost}}
