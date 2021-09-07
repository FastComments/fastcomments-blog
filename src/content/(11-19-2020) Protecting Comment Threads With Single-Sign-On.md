###### [postdate]
# [postlink]Protecting Comment Threads With Single-Sign-On[/postlink]

{{#unless isPost}}
Don't consider your comment threads public? Have SSO setup for authentication? This might be for you.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

#### Introduction

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(details here)</a> provides your users with a way
to comment without having to log in to another platform.

However, this alone doesn't secure your comment threads, since by default comment data is publicly available information - anybody that can view
the page can view the comments. However, this release changes that.

#### No-Code Setup

We can prevent viewing and interacting with our comment threads, when SSO is set up, by creating a <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">customization rule</a>.

When doing so, search for SSO, and you will find this option:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Configuration Option for Locking Down Comments via SSO" alt="Configuration Option for Locking Down Comments via SSO" class="lozad" />
</div>

Enable it and save the customization rule.

#### Only Protect a Certain Domain or Page

To only protect a certain Domain or Page, we'll simply configure the customization rule to do so.

At the top of the customization UI, we'll find two inputs, Domain and URL ID.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Configuration Option By Page or Domain" alt="Configuration Option By Page or Domain" class="lozad" />
</div>

To just protect a particular domain, enter the domain in question into the "domain" field.

To protect a particular page, enter a page URL in the "URL ID" field. If you have a custom integration with FastComments, you may enter a type of ID here
instead of a URL.

#### Protection Beyond Reading

Enabling this option will protect the page or domain from being commented on unless the user is logged in via SSO. 

#### Gotchas

Any users that created comments before your SSO integration will not be able to see them, unless they log in via your SSO integration.

#### In Conclusion

We hope you've found this guide helpful and easy to read. Feel free to comment below with any questions.

Cheers!

{{/isPost}}
