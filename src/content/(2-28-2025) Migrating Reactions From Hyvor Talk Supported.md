###### [postdate]
# [postlink]Migrating Reactions From Hyvor Talk Is Now Supported[/postlink]

{{#unless isPost}}
When you import your data export from Hyvor Talk, we can now migrate your page-level reactions.
{{/unless}}

{{#isPost}}

### What's New

When you import comments to migrate them from Hyvor Talk, FastComments can now import your page reacts. Additionally, we'll detect if
comment threads on pages are closed or not, and migrate that status as well.

Re-running the import will not cause counts to duplicate or lose any reaction values from before the import.

### How to Set Up Reactions

Page reacts showing is not automatic. To get started, you'll have to update your widget configuration:

<div class="code">
```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Star-Struck
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Red Heart
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Face with Open Mouth
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Crying Face
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Face with Tears of Joy
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Angry Face
            ]
        }
    });
</script>
```
</div>

The ids must match the ones from the Hyvor Talk export. This example uses the correct values.

You'll have to source your own reaction images. They can be any format, including gifs. The above example uses some from the OpenMoji project.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
