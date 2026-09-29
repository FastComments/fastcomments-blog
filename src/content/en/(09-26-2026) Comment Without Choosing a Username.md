[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Comment Without Choosing a Username[/postlink]

{{#unless isPost}}
FastComments can now hand each new visitor a unique, neutral username so they never have to invent one. The shared Default Username also no longer gets "taken" by the first person to use it.
{{/unless}}

{{#isPost}}

### What's New

If your site has no login, a visitor who wants to leave a comment has been asked for two things: an email and a username.
The email is easy, but for the username it has to be unique, it will be public, and they have to think of it right now.

This release removes that step. Turn on **Generate Usernames Automatically** in your widget customization, and each new
visitor arrives with a name like `BraveOtter4172` already filled in. They can keep it or type over it. Either way, they
get to the comment box faster.

### Turning It On

Open your <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,
find the **Anonymization** section, and check **Generate Usernames Automatically**. There's nothing else to configure.

It works with or without **Allow Anonymous Comments**. If you still want an email from every commenter, leave anonymous
commenting off. Visitors enter their email, the username is handled for them, and that's it. If you don't need an email,
turn anonymous commenting on and a visitor can comment with no typing beyond the comment itself.

### What Visitors See

The username field is prefilled with the generated name. It is an ordinary input, so anyone who wants to be known as
something else just replaces it. Nothing is hidden and nothing is forced.

The names are two words and a number, so they're readable and neutral. Nobody ends up as `user_83729`.

### Every Name Is Unique

A generated name is checked against existing accounts before it's offered, and it's reserved for that visitor's browser
session so the next visitor isn't offered the same one. Logged in users, SSO users, and visitors who have already
commented are never given a new name. They keep the one they have.

A returning visitor who enters an email they've used before is matched to their existing account, so a second visit
doesn't create a second identity even if the browser was cleared in between.

### Bugfix - The Default Username Is Now Truly Shared

Some of you have been using **Default Username** with a value like "Anonymous" to get most of the way here. That had a
catch. Usernames are unique, so the first visitor to comment as "Anonymous" with their email owned the name, and the
next visitor with a different email was told the username was taken.

That's fixed. The default username is now treated as a shared display name rather than an identity. Every visitor who
keeps it gets their own account behind the scenes, and all of them show as "Anonymous". Usernames that visitors type
themselves still have to be unique, as before.

If you set both, the generated name wins.

### Documentation

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">The Generate Usernames Automatically guide</a>
covers the option and how it interacts with the other anonymous commenting settings.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">The Default Username guide</a>
covers the shared-name behavior.

### In Conclusion

This one came from a customer running a site where visitors are patients who may only ever leave one piece of
feedback. Asking them for an email and a unique username was one question too many. If a setting is standing between
your readers and the comment box, let us know below.

Cheers!

{{/isPost}}
