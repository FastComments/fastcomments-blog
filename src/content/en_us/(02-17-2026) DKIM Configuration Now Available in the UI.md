---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]DKIM Configuration Now Available in the UI[/postlink]

{{#unless isPost}}
FastComments now offers a user interface for configuring DKIM, making it simpler to enhance email delivery rates without utilizing the API.
{{/unless}}

{{#isPost}}

### What's New

Setting up DKIM for your custom email domain has become simpler. Previously, configuring DKIM required using the
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> directly. Now, you can
configure DKIM directly from the FastComments admin UI.

### Why DKIM Matters

When you customize the From Domain for emails that FastComments sends on your behalf, email providers need to verify that
those emails are legitimate. DKIM (DomainKeys Identified Mail) is one of the essential authentication mechanisms that aids in this process.
Without proper DKIM configuration, emails sent on behalf of your domain are more likely to be directed to spam folders.

### How to Set It Up

Go to the <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">My Domains</a> page and click
"Show Advanced" for the domain you want to configure. You'll find the DKIM settings where you can input your domain name, key selector,
and private key.

After saving, the DKIM configuration will be applied to all emails sent from that domain.

### The API Still Works

If you prefer to manage DKIM configuration programmatically, the
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> continues to function
as it did before.

### In Conclusion

We hope this simplifies the process of ensuring your users receive the emails FastComments sends on your behalf. Let us know
below if you have any questions.

Cheers!

{{/isPost}}

---