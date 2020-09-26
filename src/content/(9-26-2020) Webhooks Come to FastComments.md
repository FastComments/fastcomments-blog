###### [postdate]
# [postlink]Webhooks Come to FastComments[/postlink]

{{#unless isPost}}
FastComments can now call your API for comment creation, updates, and removal.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

#### What's New

With FastComments it's now possible to invoke an API endpoint whenever a comment gets added, updated, or removed from our system. 

We accomplish this with asynchronous webhooks over HTTP/HTTPS.

#### How To Use It

First, navigate to the <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks admin</a>. This is accessible via Manage Data -> Webhooks.

From there you can specify endpoints for each type of comment event.

For each type of event, be sure to click **Send Test Payload** to ensure you've setup your integration correctly. See the next section, "Testing", for details.

<div class="text-center">
    <img data-src="images/fc-webhooks-test-verified.png" alt="Webhooks Setup Example" title="Webhooks Setup Example" class="lozad" />
</div>

#### Testing

In the <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks admin</a> there are "Send Test Payload" buttons for each
event type (Create, Update, Delete). The Create and Update events send a dummy WebhookComment object, while testing Delete will send a dummy request body with just an ID.

The test will make two calls to verify the response code for "happy" (correct API Key) and "sad" (invalid API key) scenarios.

When the test sends an invalid API key you should return a status code of 401 for the test to pass completely. If you don't correctly check the value of the token, you'll
see an error like:

<div class="text-center">
    <img data-src="images/fc-webhooks-test-expected-401.png" alt="Webhooks Authentication Test Failure" title="Webhooks Authentication Test Failure" class="lozad" />
</div>

#### The Comment Object Structure
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### The "Create" Event Structure

The "create" event request body is a WebhookComment object.

#### The "Update" Event Structure

The "update" event request body is a WebhookComment object.

#### The "Delete" Event Structure

The "delete" event request body is a WebhookComment object, **but only containing the id**.

#### Why do Create and Update both use HTTP PUT and not POST?

**Since all of our requests contain an ID**, repeating the same Create or Update request **should not create new objects on your side**. This means that these calls are idempotent and should be
PUT events as per the HTTP specification.

#### How It Works

All changes to the Comment object in the system fire an event which ends up on a queue. You can monitor this queue in the <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks admin</a> in the event
that your API goes down. If a request to your API fails, we'll re-queue it on a schedule. That schedule is 1 Minute * the retry count. If the call fails once, it'll try again in a minute. If it fails twice, it'll then wait two minutes, and so on.
This is so that we don't overload your API if you are going down to load related reasons.

#### Security & API Token

In the request header we'll pass your <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> in the parameter called "token".

If you do not properly check this parameter, your integration will not be marked Verified. This is a safeguard to ensure any integrations with FastComments are secure.

#### In Conclusion

We hope you find the FastComments Webhook integration easy to understand and fast to setup.

If you have further questions, feel free to reach out to the <a href="https://fastcomments.com/auth/my-account/help" target="_blank">customer support page</a>.

Cheers!

{{/isPost}}
