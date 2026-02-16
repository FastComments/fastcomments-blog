# fastcomments-blog

## Adding a Blog Post

New posts go in `src/content/en/`. This is the default locale and source of truth -- the translation system reads from this directory and generates translations for all other locales (including `en_us/`).

**Do not add posts to `en_us/` or other locale directories directly.** Those are populated by the automated translation pipeline.

### File Naming

Files are named `(MM-DD-YYYY) Post Title Here.md`. The date in parentheses determines the post date and sort order.

Example: `(02-16-2026) Generated Type-Safe Client SDKs Released.md`

### Post Format

```markdown
---
[category:Category Name]
[category:Another Category]

###### [postdate]
# [postlink]Post Title Here[/postlink]

{{#unless isPost}}
Short preview text shown on the index/listing page.
{{/unless}}

{{#isPost}}

### What's New

Full post content goes here.

### In Conclusion

Closing remarks.

Cheers!

{{/isPost}}

---
```

### Tags and Placeholders

- `[category:Name]` -- Assign categories (use existing categories when possible)
- `[postlink]...[/postlink]` -- Wraps the post title as a link
- `[postdate]` -- Replaced with the formatted date and comment count
- `[filesize]` -- Content and media size
- `[readtime]` -- Estimated reading time
- `{{#unless isPost}}...{{/unless}}` -- Preview text shown on listing pages only
- `{{#isPost}}...{{/isPost}}` -- Full post content shown on the post page only
- `<div class="code">...</div>` -- Code blocks
- `### <i class="circle">!</i> This Article Contains Technical Jargon` -- Technical jargon warning

### Existing Categories

Check recent posts in `src/content/en/` for the current set of categories. Common ones include Features, Security, API & Development, Announcements, Moderation, Analytics.

## Building

```bash
# Full build (checks translations, auto-translates, generates HTML)
bash build.sh

# Partial build (skip translation checks -- useful for quick iteration)
PARTIAL_BUILD=true bash build.sh
```

## Development

```bash
npm run serve    # Serve the generated site locally
npm run watch-posix  # Watch for changes and rebuild (Linux/macOS)
```

## Translation

The build automatically detects missing translations and runs GPT-based translation. To manually check or translate:

```bash
node src/check-translations.js   # Check for missing translations
node src/translate-with-gpt.js   # Auto-translate missing posts
node src/check-categories.js     # Validate categories in translated posts
```
