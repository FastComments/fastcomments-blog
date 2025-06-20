[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Languages Used in Comments Can Now Be Limited[/postlink]

{{#unless isPost}}
Some communities want to restrict the languages used. This can now be done with FastComments.
{{/unless}}

{{#isPost}}

### What's New

FastComments has always tried to support as many languages and locales as possible.

However, some communities want to limit the languages used to communicate and write comments.

Instead of enforcing this as a rule, and potentially banning users, it can now be explicitly configured in the platform.

### How to Set it Up

In the same Widget Customization UI you are probably familiar with, you can now select one or more languages that comments can be written in.

The platform will, upon comment submission, attempt to determine the comment language in real time. If the confidence of the determined language is
over 70%, and it matches with an allowed language, then the comment is allowed.

If the written comment is not in a language defined by your configuration, the user will be shown an error message in their own language.

### Developer Impact

This configuration will impact comments saved via the API as well.

You will receive an error like the following:

            status: 'failed',
            reason: `Comment looks like it's one of these languages: [es], but only [en,fr] are allowed.`,
            code: 'language-not-allowed',
            translatedError: "An error message in the user's language."

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
