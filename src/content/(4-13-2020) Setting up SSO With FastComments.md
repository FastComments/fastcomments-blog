###### [postdate]
# [postlink]Setting up SSO With FastComments[/postlink]

{{#unless isPost}}
FastComments provides SSO solutions for various platforms and custom integrations.
{{/unless}}

{{#isPost}}

## Overview

### What is SSO?

SSO, or single-sign-on, is a set of conventions used to allow you or your users use FastComments without having to create another account.

Assuming you don't allow anonymous commenting, an account is required to comment with FastComments. We make this sign up process very easy - the user just leaves
their email when they comment. However, we understand that even that is extra friction some sites want to avoid.

### How do I get it?

All account types - from the $4.99/mo plan to the $350/mo plan - get access to SSO as well as support.

#### WordPress Users

If you're using our <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a> plugin then there is no code to write! Simply go to the plugin's Admin page, click SSO Settings, and then Enable.

This will take you to a single-button click wizard which will create your API key, send it over to your WordPress install and turn SSO on. We've consolidated this into a single button click for you.

Note that if you are installing the plugin for the first time you will have to follow up the setup process before you see the admin page with the SSO Settings button.

#### Custom Integrations

FastComments SSO uses HMAC-SHA256 encryption as the mechanism to implement SSO. First we'll go over the overall architecture, provide examples, and detailed steps. However at the end
of this article there are instructions for **migrating from Disqus and Commento**.

The flow looks like this:

<img data-src="/images/sso-diagram.png" alt="FastComments SSO Diagram" title="FastComments SSO Diagram" class="lozad" />

You don't have to write any new API endpoints with FastComments SSO. Simply encrypt the user's info using your secret key and pass the payload to the comment widget.

We provide fully functional code examples in several languages/run-times including NodeJS, Java/Spring, and vanilla PHP. Although we use ExpressJS in the NodeJS example
and Spring in the Java example there are no frameworks/libraries required in these run-times to implement FastComments SSO - the native crypto packages work.

You can find the code example repository here:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">FastComments SSO Code Examples</a>

##### Get Your API Secret Key

Your API Secret can be retrieved from <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">this page</a>. You can find this page also by going to My Account,
clicking the API/SSO tile, and then clicking "Get API Secret Key".

##### Comment Widget Parameters

High-level API documentation for the comment widget can be found <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">here</a> and clicking "Show Advanced Options". Search for SSO on the page.

Let's go into more detail of what these parameters mean.

The comment widget takes a configuration object - you already pass this if you're using FastComments to pass your customer id (called tenantId).

To enable SSO, pass a new "sso" object, which must have the following parameters. The values should be generated **server side**.

- userDataJSONBase64: The user's data in JSON format, which is then Base64 encoded.
- verificationHash: The HMAC-SHA256 hash created from UNIX_TIME + userDataJSONBase64.
- timestamp: The current unix time. **Must not be in the future, or more than three hours in the past.**
- loginURL: A URL that the comment widget can show to log the user in.
- logoutURL: A URL that the comment widget can show to log the user out.
- loginCallback: When provided instead of the login URL, a function that the comment widget will invoke when clicking the login button.
- logoutCallback: When provided instead of the logout URL, a function that the comment widget will invoke when clicking the logout button.

##### The User Object 

The User object contains the following schema:

- id (string, required) (1k characters max)
- email (string, required) (1k characters max). Note: Must be unique.
- username (string, required) (1k characters max). Note: The username cannot be an email. Does not have to be unique.
- avatar (string, optional) (3k characters max)
- optedInNotifications (boolean, optional)

##### Notifications

To enable or disable notifications, set the value of optedInNotifications to true or false respectively. The first time the user loads the page with this value in the SSO payload,
their notification settings will be updated.

##### Unauthenticated users

To represent an unauthenticated user, simply do not populate userDataJSONBase64, verificationHash, or timestamp. Provide a loginURL.

##### Direct Examples for Serializing and Hashing User Data

More details as an examples <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">here (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">here (java)</a> and
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">here (php)</a>.


#### Migrating from Disqus SSO

The biggest differences between Disqus and FastComments SSO is that Disqus uses SHA1 for encryption while we use SHA256.
This means migrating from Disqus is easy - change the hashing algorithm used from SHA1 to SHA256 and update the property names passed to the UI.

#### Migrating from Commento SSO

Commento uses a drastically different SSO approach - they require you to have an endpoint that they invoke to authenticate the user. FastComments is the other way around - 
simply encode and hash the user's information using your secret key and pass it along.

We understand that any integration can be a complicated and painful process. Don't hesitate to reach out to your representative or use the <a href="https://fastcomments.com/auth/my-account/help" target="_blank">support page</a>.

{{/isPost}}
