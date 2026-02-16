---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
As teased in our TypeScript migration post, we've released generated, type-safe client SDKs for ten programming languages.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

In our [TypeScript migration post](/blog/fastcomments-typescript-migration-completed), we mentioned that generated client SDKs were on the way. They're here.

FastComments now includes official, type-safe SDKs for **ten languages**:

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Each SDK is generated from the same OpenAPI specification that our server produces. Types, method signatures, and request/response models stay in sync with the actual API automatically. Your compiler identifies field name typos and missing parameters before your code ever makes a network request.

### How It Works

The TypeScript migration was a prerequisite for this. Now that our server code is fully typed, we use [our fork of TSOA](https://github.com/FastComments/tsoa) to generate an OpenAPI 3.0 spec directly from our route controllers. That spec is fed into [OpenAPI Generator](https://openapi-generator.tech/) to produce client libraries for each language.

When the API changes, our tooling detects the difference in the spec, regenerates the affected SDKs, runs tests for each language, and opens pull requests automatically. We built a small manager tool in Nim that orchestrates the update-test-release cycle across all ten repositories.

### What's in Each SDK

Each SDK provides two API classes:

- **`DefaultApi`**: authenticated endpoints that require your API key. Use these server-side for moderation, user management, analytics, and bulk operations.
- **`PublicApi`**: unauthenticated endpoints safe to call from browsers and mobile apps. These cover fetching comments, posting, voting, and other client-facing operations.

All SDKs also include SSO utilities for integrating with your existing authentication system. The TypeScript SDK additionally provides real-time event subscriptions for live commenting.

### Documentation

Full API documentation is available at [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Each SDK repository also includes generated docs covering every available method and model.

For SSO integration, see our [SSO guide](https://docs.fastcomments.com/guide-sso.html). All ten SDKs include SSO helpers using their native cryptography libraries.

### In Conclusion

Having a fully typed server made it straightforward to generate a reliable OpenAPI spec, and from there, generating clients for ten (and someday more!) languages was mostly a matter of building the automation and improving our type definitions so they can be consumable, without adding too much abstraction that would slow down FastComments!

Like all major releases, we're pleased that we could take the time to optimize, test, and properly release these SDKs. Let us know below if you have any feedback or if there's a language you'd like us to add.

Cheers!

{{/isPost}}

---

---