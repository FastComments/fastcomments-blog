###### [postdate]
# [postlink]Moderation Comment Search Update[/postlink]

{{#unless isPost}}
FastComments now lets you search by page and user in the comment moderation page.
{{/unless}}

{{#isPost}}

### What's New

Previously FastComments would let you search by phrases, or exact string match, in the comment moderation page.

Now you can search for comments in the following ways:

- Fuzzy word search: **cats love**
- Exact phrase match: **"I love cats."**
- **_New!_** By Page Title: **page:"Page Title"**
  - Supports autocomplete.
  - Shows number of comments for each page in the autocomplete suggestion list.
- **_New!_** By Page URL: **page:"https://example.com/some-page"**
  - Supports autocomplete.
  - Shows number of comments for each page in the autocomplete suggestion list.
- **_New!_** By User: **user:"Bob"**
  - Supports autocomplete.

You can share search results with other moderators or administrators by sharing the page URL from the moderation page. The search field
value will be included in the URL in your browser after you hit "Go".

### How to Get It

This feature has been rolled out to all customers!

### Documentation

The documentation site has been updated, and dedicated documentation for this feature [will be maintained here](https://docs.fastcomments.com/guide-moderation.html#search).

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
