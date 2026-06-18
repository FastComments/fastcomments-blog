---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]Embed YouTube, SoundCloud, and More in Comments[/postlink]

{{#unless isPost}}
Commenters can now paste an embed code and have the video or player render right inside the comment. It is off by default, opt-in per site, and restricted to trusted providers.
{{/unless}}

{{#isPost}}

### What's New

People enjoy sharing a video or a track in a discussion. Until now, pasting a YouTube or SoundCloud embed into a comment did not do much. The raw `<iframe>` was stripped out for security, or it got wrapped up as a code block.

You can now enable media embeds for your site. When it is on, a commenter can paste the embed code straight from the provider and it renders inline, just like it would on any other page.

Here is the kind of snippet people copy from a "Share" or "Embed" button:

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>

Paste that into a comment with embeds enabled and you get the actual player.

### Trusted Providers Only

Allowing arbitrary iframes onto your page is a real security risk, so we did not just open the gate. Embeds are restricted to a built-in list of trusted providers, including YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch, and Dailymotion.

If a comment contains an iframe pointing anywhere else, the iframe is removed when the comment is saved. The same sanitization that protects against `<script>` tags and `onload=` tricks still runs on every comment. Embeds are just an additional, carefully scoped allowance on top of that.

### Adding Your Own Providers

If you use a provider that is not on the built-in list, you can allow it. There is an "Additional Embed Domains" field where you can list extra hostnames to trust, in addition to the built-in providers.

Matching is by exact hostname, so add the full host the embed loads from, for example `player.example.com`. Anything you do not list remains blocked.

### How to Enable It

It is a per-site setting on the widget customization page, right next to the image upload options. Check "Allow Media Embeds?" and save. No code or redeploy needed.

Like our other content settings, this is per customization rule, so you can enable embeds on one site or one set of pages and leave it off elsewhere.

### Works in Both Editors

Pasting works in both the plain comment box and the WYSIWYG editor. In the plain box, the embed code goes in as text and becomes a player on submission. In the WYSIWYG editor, the embed shows up as a block right away, with a small remove button in the corner so it is easy to delete if it was a mistake.

### In Conclusion

Embeds are off by default, so nothing changes for your site unless you decide to turn them on. When you do, your commenters get a better way to share videos and tracks, and you maintain the same security guarantees you already had.

Turn it on, paste a video, and let us know what you think below.

Cheers!

{{/isPost}}

---