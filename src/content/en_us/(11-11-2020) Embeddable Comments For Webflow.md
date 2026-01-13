---
[category:Integrations]

###### [postdate]
# [postlink]Embeddable Comments For Webflow[/postlink]

{{#unless isPost}}
Instructions, including a video, on installing FastComments on a Webflow.io site.
{{/unless}}

{{#isPost}}

#### Target Audience

This article targets anyone who wants to add commenting support to their Webflow site.

#### Introduction

Installing FastComments on a Webflow site is just as simple as installing it on any other site—there's only one unique caveat for hosting providers like Webflow.

#### The Steps

1. Add your Webflow site's domain to your account—the widget will not load without it. This is the domain used when you click "Publish" in Webflow, for example, "https://your-superb-project.webflow.io".
2. In Design mode, go to "Add Elements" in the top left, then scroll all the way down to "Components". Click "Embed"—add the FastComments code snippet which you can find <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">here</a>.

#### A Video

Here is a video detailing the installation, which starts with us in the Webflow designer and ends with the embedded comment widget functioning on our site.

<div class="text-center">
    <video src="images/fc-webflow-install.mp4" controls alt="Webflow Installation Instructional Video" title="Webflow Installation Instructional Video"></video>
</div>

#### Gotchas

FastComments secures your installation by validating requests by domain name. If you want the comment widget to show for your Webflow site before you have a dedicated domain name, **you'll need to add "webflow.io" as a domain to your account <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">here</a>.**

For increased security, you can specify the whole domain name, for example, "your-awesome-site.webflow.io".

#### In Conclusion

We hope you've found this guide helpful and easy to follow. Feel free to comment below with any questions.

Cheers!

{{/isPost}}

---