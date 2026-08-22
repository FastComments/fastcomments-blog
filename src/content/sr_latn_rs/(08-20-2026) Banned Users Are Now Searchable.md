[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Zabranjeni korisnici su sada pretraživi[/postlink]

{{#unless isPost}}
Banned Users page sada ima red za pretragu, tako da možete pronaći zabranu po emailu, imenu, ko ju je izdao, ili komentaru koji je izazvao.
{{/unless}}

{{#isPost}}

### Šta je novo

The Banned Users page under Moderate Comments now has a search row above the table. Until now the only way through that
list was the Page and Count Per Page controls, which is fine when you have a dozen bans and painful when you have a few thousand.

There are three controls: **Search By** picks the field, **Match** picks Contains or Equals, and **Value** is what you're looking for.

### Šta možete pretraživati

**Search By** offers five options:

- **Any Field** - searches everything below at once
- **Email** - the banned address
- **Name** - the name recorded on the ban
- **Banned By** - the moderator who issued the ban
- **Banned For Saying** - the text of the comment that got the user banned

The last four line up with the columns of the same name in the table, so the dropdown reads the same as the thing it filters.

### Contains vs Equals

**Contains** finds your value anywhere in the field. **Equals** matches the whole field.

Contains is the one you want most of the time. Searching `bademail.com` finds every ban on that domain, including the
wildcard `*@bademail.com` ban, because wildcard bans are stored with their asterisk intact.

Equals is for when you have the exact value and don't want near misses. Searching Email for `spammer@example.com` with
Equals returns that one ban and nothing else.

Both are case-insensitive on every field. This matters more than it sounds like it should: when a ban is created from a
comment, only the domain half of the address gets lowercased, so a ban can genuinely be stored as `MixedCase@Example.com`.
Searching for `mixedcase@example.com` finds it.

### Dve pretrage koje vredi znati

**Banned For Saying** searches the comment text that triggered the ban. If a particular phrase or link has been going
around, you can pull up everyone who was banned over it in one query.

**Banned By** searches the moderator who issued the ban. If you want to review a specific moderator's decisions, or you're
onboarding someone and want to see what they've been doing, that's one search away.

### Radi sa paginacijom i deljenjem

The search lives in the page URL, so paging through results keeps it applied and you can send a filtered list to another
moderator by copying the URL, the same way you already share moderation links. Starting a new search takes you back to the
first page, and **Clear** drops you back to the full list.

### Pretraga po imenu podudara se sa onim što vidite

A ban stores the name the user had when you banned them, but the table shows the name they have now. Those aren't always
the same, and a ban you created by typing in an email address has no name stored on it at all.

So the Name search resolves the user behind each ban and matches on the name the table is actually showing you. If someone
was banned as "OldHandle" and has since renamed to "NewHandle", both find them. If you banned an address and the table
shows a name for it, searching that name works.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">The Banning Users section of the Moderation Guide</a> covers the search row in detail.

### Zaključak

This one came out of watching how the page actually gets used. Bans accumulate quietly for years, and then one day you need
to find a specific one and there's no way to do it. Now there is.

Let us know below if there's a field you'd like to be able to search that isn't in the list.

Živeli!

{{/isPost}}

---