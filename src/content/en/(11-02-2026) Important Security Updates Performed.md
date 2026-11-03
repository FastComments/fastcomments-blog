[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]Important Security Updates Performed[/postlink]

{{#unless isPost}}
We patched the operating system on all of our servers to fix a recent Linux TCP vulnerability, and updated Node.js to pick up its October security release. No action is needed on your side.
{{/unless}}

{{#isPost}}

### What's New

We recently completed two security updates across the FastComments infrastructure: an operating system update to fix a
vulnerability in the Linux kernel's TCP code, and a Node.js update to pick up the latest security release.

### Linux Kernel

All of our servers have been patched and now run a kernel that includes the fix for
<a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a>.

This is a use-after-free in the kernel's IPv4 TCP code. The kernel could free the IP options attached to a connection while
another CPU was still reading them, for example while building the SYNACK reply during a TCP handshake. The fix waits until
no CPU can still be reading that memory before freeing it.

### Node.js

FastComments runs on Node.js, and we have updated to version 24.22.1, the patched release for the 24.x line from the
<a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">October 2026 Node.js security release</a>.

That release fixes 10 vulnerabilities across the supported Node.js versions. 8 of them affect the 24.x line, and 4 of those
are rated high: two in TLS validation of IP addresses, one in DNS name handling, and one in the Brotli decoder. It also
updates bundled dependencies including OpenSSL, c-ares, Undici, and the CA certificate bundle.

### What You Need To Do

Nothing. These updates are all on our side, so your widgets, API integrations, and SSO configurations do not need any changes.

### In Conclusion

Keeping our infrastructure patched is an ongoing part of running FastComments, and we'll continue to apply updates like these
as they are released. If you have any questions, let us know below.

Cheers!

{{/isPost}}
