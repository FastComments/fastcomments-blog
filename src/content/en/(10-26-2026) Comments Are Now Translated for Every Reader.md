[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]Comments Are Now Translated for Every Reader[/postlink]

{{#unless isPost}}
FastComments can now translate the comments themselves, not just the widget around them. Turn it on per site or per page, automatically or with a Translate button, and every reader sees the conversation in their own language with the original one click away.
{{/unless}}

{{#isPost}}

### What's New

FastComments has been translated into twenty-eight languages for a while, so the buttons, labels, and emails already show up in a
reader's language. The comments did not. A Spanish comment on an English page stayed Spanish, and anyone who didn't read it
scrolled past.

This release adds **Comment Translation**. When it's on, a comment written in a language other than the reader's is shown
translated, with a small line underneath saying where it came from and a **Show original** link to see what was actually
written.

<img src="images/fc-comment-translation-auto.png" alt="An English reader seeing a Spanish comment translated, with a Translated from Spanish line and a Show original link under it" title="Automatic Comment Translation" class="lozad" />

### Two Modes

**Automatic** translates up front. Every comment in another language arrives translated, and the reader toggles to the
original if they want it. This is the mode for a community that genuinely writes in two or more languages and wants
everyone reading the same conversation.

**Manual** adds a **Translate** link to each comment and does nothing until it's clicked. The reader decides which
comments are worth translating, and nothing is spent on the ones nobody asks about. A comment that's already in the
reader's language says so instead of pretending to translate it.

<img src="images/fc-comment-translation-manual.png" alt="Manual mode, where a Spanish comment has been translated on click and an English comment reports it is already in the reader's language" title="Manual Comment Translation" class="lozad" />

In both modes the reader's language is whatever the widget is already showing: the **Locale / Language** you set on the
customization rule, or the visitor's browser language if you haven't set one. There's nothing for the visitor to install,
sign up for, or configure. It works the same whether the widget is embedded in your page, inside a site builder like
Google Sites, or on a standalone FastComments comment page.

### Turning It On

Open your <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,
find **Comment Translation** right under **Locale / Language**, and pick Automatic or Manual. It's off by default.

Because it lives on a customization rule, you can scope it however you like: your whole site, one domain, or a single
page where you know the audience is mixed. It's a server-side setting, so it can't be switched on from the widget's
JavaScript config alone.

### What It Costs

Translations are produced by a language model and billed as LLM tokens, the same meter as
[AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html). Any plan can turn it on.

Each comment is translated once per language and the translation is stored with the comment. If a thousand Spanish readers
open the same English thread, the translation work happens once. A typical comment is a few hundred tokens, which at Flex
rates is about half a cent. If the author or a moderator edits a comment, the stored translation is thrown away and the
comment is translated fresh on the next view, so nobody reads a translation of text that no longer exists.

Manual mode costs nothing until someone clicks.

### The Details

The translated text is treated exactly like a comment someone typed. It goes through the same sanitization and link rules
as the original, so a translation can't carry anything the original couldn't. Mentions and hashtags keep their formatting.

Comments that are very long, or whose language can't be detected with confidence, are left as written rather than guessed
at. The language line under a translated comment is in the reader's language too, so a Spanish reader of an English
comment sees "Traducido del inglés" and "Mostrar original".

### Overhead

The code for this new feature isn't loaded unless it's enabled, so it doesn't slow down the comment widget for our other users.

### Documentation

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">The Comment Translation guide</a>
covers both modes, the rule setting, and billing.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">The locale guide</a>
covers how the widget's language is chosen in the first place.

### In Conclusion

This one came from a neighborhood association whose residents comment in English and Spanish, and who wanted both groups
reading the same thread without asking anyone to install a browser extension or register for anything.

If you run a community that writes in more than one language, turn it on and tell us below how the translations read.

Cheers!

{{/isPost}}
