---
[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Webhook Security Update[/postlink]

{{#unless isPost}}
FastComments webhooks now include HMAC-SHA256 signatures for payload verification, along with new HTTP method options.
{{/unless}}

{{#isPost}}

### What's New

Previously, there was more friction when setting up Webhooks compared to other platforms. We viewed this positively
due to the additional security measures required; however, we have recently chosen a method that is equally secure
but offers optional security.

### Previous Behavior

In the past, the system would send your API key in payloads and expect you to validate it. If you didn’t return a 401
for an invalid API key, the system wouldn’t allow setup.

### New Behavior

Now, the system will not send an API key for new webhook configurations. Instead, a signed HMAC signature is included for both new and existing integrations. You may choose to validate this signature based on your required level of security.

Existing configurations will continue to send the API key - you can now request to disable this feature via a support ticket.

### HMAC Signature Verification

FastComments now sends the following headers with each webhook request:

| Header | Description |
|--------|-------------|
| `X-FastComments-Timestamp` | Unix timestamp (seconds) when the request was signed |
| `X-FastComments-Signature` | HMAC-SHA256 signature in format `sha256=<hex>` |
| `token` | Your API Secret (included for backwards compatibility) |

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

Additionally, with this update, you can now configure the HTTP method for each webhook event type:

- **Create Event**: POST or PUT (default: PUT)
- **Update Event**: POST or PUT (default: PUT)
- **Delete Event**: DELETE, POST, or PUT (default: DELETE)

### Security Benefits

The new system offers several benefits:

- Protection against man-in-the-middle attacks
- Replay attack prevention through timestamp verification
- Detection of payload tampering

### Backwards Compatibility

The `token` header containing your API Secret is still included with every request. Existing integrations will continue to function without changes, and as mentioned earlier, you can request to turn off the old behavior via support.

### Documentation

For complete documentation, see our [Webhooks Guide](https://docs.fastcomments.com/guide-webhooks.html).

### In Conclusion

As with all major releases, we are pleased that we could take the time to optimize, test, and properly implement these changes. Let us know
below if you encounter any issues.

Cheers!

{{/isPost}}

---