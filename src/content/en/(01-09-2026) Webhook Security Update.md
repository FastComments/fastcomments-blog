[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Webhook Security Update[/postlink]

{{#unless isPost}}
FastComments webhooks now include HMAC-SHA256 signatures for payload verification, plus new HTTP method selection.
{{/unless}}

{{#isPost}}

### What's New

Previously there was extra friction for setting up Webhooks compared to other platforms. We considered this a good thing
due to the extra security measures required, however we have recently settled on a mechanism that is just as secure
but that security is opt-in.

### Previous Behavior

Previously, the system would pass your API key in payloads and expect you to validate it. If you didn't return a 401
for an invalid api key, the system would not allow setup.

### New Behavior

Now, the system will not pass an API key for new webhook configurations. Instead, for new and existing integrations
a signed HMAC signature is included. You may or may not want to validate this signature, depending on your level
of security required.

Existing configurations will continue to pass the API key - you can now request to turn this off via a support ticket.

### HMAC Signature Verification

FastComments now sends the following headers with every webhook request:

| Header | Description |
|--------|-------------|
| `X-FastComments-Timestamp` | Unix timestamp (seconds) when the request was signed |
| `X-FastComments-Signature` | HMAC-SHA256 signature in format `sha256=<hex>` |
| `token` | Your API Secret (kept for backwards compatibility) |

#### How the Signature is Computed

1. Concatenate: `timestamp + "." + JSON_payload_body`
2. Compute HMAC-SHA256 using your API Secret as the key
3. Hex-encode the result

#### Example Verification (Python)

```python
import hmac
import hashlib
import time
import json

def verify_webhook_signature(headers, body, api_secret):
    timestamp = headers.get('X-FastComments-Timestamp')
    signature = headers.get('X-FastComments-Signature')

    if not timestamp or not signature:
        return False

    # Verify timestamp is recent
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Verify signature
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### HTTP Method Selection

Additionally, included with this update - you can now configure the HTTP method for each webhook event type:

- **Create Event**: POST or PUT (default: PUT)
- **Update Event**: POST or PUT (default: PUT)
- **Delete Event**: DELETE, POST, or PUT (default: DELETE)

### Security Benefits

The new system has a few benefits:

- Protection against man-in-the-middle attacks
- Replay attack prevention via timestamp verification
- Payload tampering detection

### Backwards Compatibility

The `token` header containing your API Secret is still sent with every request. Existing integrations will continue to work without modification, and as
previously mentioned you can request to turn the old behavior off via support.

### Documentation

For complete documentation, see our [Webhooks Guide](https://docs.fastcomments.com/guide-webhooks.html).

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release these changes. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
