[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]Арабски и езици отдясно наляво вече се поддържат[/postlink]

{{#unless isPost}}
FastComments вече поддържа арабски и всеки елемент на FastComments се подрежда отдясно наляво за арабски и иврит. Броячи като "3 comments" също вече използват правилната форма за множествено число на всеки език.
{{/unless}}

{{#isPost}}

### Какво ново

Arabic is now a supported language, with the locale code `ar`. The comment widget, the other embeddable widgets, emails, the
dashboard, and the marketing site are all translated.

Arabic is also written right-to-left, so adding it meant teaching FastComments to lay itself out in both directions. That
fix applies to Hebrew too.

### Оформление отдясно наляво

When the locale is Arabic or Hebrew, the whole interface mirrors. The avatar, name, and reply controls on a comment swap
sides, menus and dropdowns open toward the correct edge, and arrows point the way you're reading. This covers the comment
widget and its extensions like live chat and polls, the ticketing, collab chat, and review summary widgets, emails, and
the dashboard.

There's nothing to configure, except setting your locale manually for your user if desired.

### Коментарите запазват собствената си посока

Sometimes a comment section is in multiple languages. An English comment on an Arabic page, or an Arabic comment on an English page,
should still read naturally.

Each comment and username follows the direction of its own text. On an English page, an Arabic reply reads right-to-left
while the comments around it read left-to-right, and the reverse holds on an Arabic page. Code blocks inside comments always
read left-to-right, since code does.

### Задаване на локала

By default the widget picks the locale from the visitor's browser, so Arabic speakers get Arabic automatically. To force it,
set the locale in the widget customization page under "Locale / Language", or in code:

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

If you use SSO, pass `locale: 'ar'` on the user object so their emails come in Arabic too.

### Множествено число, правилно реализирано

English has two forms for a count: "1 comment" and "2 comments". Arabic has separate forms for one, two, three to ten, and
eleven to ninety-nine, and uses the singular again for a hundred. Russian, Ukrainian, Polish, Croatian, Serbian, Slovenian,
and Hebrew each have their own rules too.

Until now FastComments only knew "one" and "everything else", so a Russian reader could see the wrong noun form for 2 or 5
comments. Every string with a count now picks the correct form for its language, in the widget, emails, and the dashboard.

While we were in there, we had every count string reviewed in every language. That turned up a number of older
mistranslations that are now fixed. For example, in a few languages the word for a reply was the verb "to reply", so a
comment showed "1 Reply" as the equivalent of "1 To reply".

If you've customized the text of a count, like the "comments" label, your text is still used for every count.

### Намиране на вашия език

The language pickers in the dashboard now show each language's own name next to the English one, like
"Arabic (العربية)" and "German (Germany) (Deutsch)". If someone lands in the wrong language, they can still find theirs.

### Документация

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">Ръководството за поддържани езици</a> lists
every locale code and covers right-to-left behavior. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">The locale option</a>
covers forcing a locale in the widget.

This builds on [our first localization release](/(2-05-2020)-fastcomments-gets-localized.html) back in 2020, which started
with three languages. We're at twenty-eight locales now.

### В заключение

We're glad we can bring FastComments to Arabic speakers, and to make it a better experience for Hebrew speakers.
If you spot a translation that reads wrong in your language, let us know below and we'll fix it.

Cheers!

{{/isPost}}