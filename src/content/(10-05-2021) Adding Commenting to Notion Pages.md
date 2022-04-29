###### [postdate]
# [postlink]Adding Commenting to Notion Pages[/postlink]

{{#unless isPost}}
Want to add comments to your Notion pages? We have you covered.
{{/unless}}

{{#isPost}}

### What's New

FastComments is now an embed.ly provider, and as such provides APIs and services that allow comment threads
to be embedded into applications that support [oEmbed](https://oembed.com).

### How to Use It - A Quick Demo

When logged in to your tenant, you may simply visit [fastcomments.com/create](https://fastcomments.com/create) to create a conversation link that then
can be added to your Notion page, or any application that integrates with embed.ly.

You can try it yourself using your demo embed link, [fastcomments.com/c/demo](https://fastcomments.com/c/demo):

<video src="images/fastcomments-notion.mp4" controls alt="FastComments and Notion Demo" title="FastComments and Notion Demo"></video>

The embedded commenting widget can then be customized just like any other instance of FastComments.

For example, as shown in the above video, we can customize the comment widget so that the user only has to enter their name, and not their email, to comment or vote.

### Google Sites

Google Sites is also supported, and the flow is similar.

1. [Create a conversation to embed.](https://fastcomments.com/create)
2. When editing your Google Site, navigate to `Insert` -> `Embed`. Select `By URL`.
3. Paste the URL from Step 1.
4. Hit `Insert`. Done!

#### Adding The Embed Link

<div class="text-center">
    <img src="/images/google-sites-howto.png" title="How to add FastComments to a Google Site" alt="How to add FastComments to a Google Site" />
</div>

#### Commenting Added to Your Google Site!

<div class="text-center">
    <img src="/images/google-sites-howto-done.png" title="Done!" alt="Done!" />
</div>

### Who Gets It

All current and new FastComments customers, on all tiers, now have access to oEmbed support.

### Embedding an Existing Conversation

To embed an existing conversation, simply enter the value of the <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID</a> passed to the commenting widget
into the Create a Conversation page as the conversation name.

### In Conclusion

Like the rest of FastComments, we hope that you find this feature fast and easy to use.

Cheers!

{{/isPost}}
