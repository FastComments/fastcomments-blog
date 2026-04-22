---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]The FastComments Automatic Routing Transport System[/postlink]

{{#unless isPost}}
Introducing The FastComments Automatic Routing Transport System!
{{/unless}}

{{#isPost}}

## Introduction

The FastComments Automatic Routing Transport System (FARTS) is our transport and service layer. FARTS helps to alleviate congestion by routing
traffic based on user location and potentially load in the future. It consists of several different systems: a geo-aware DNS layer, a DB proxy, DB
replication, SSL cert management, reverse proxy, and CDN that employs an on-disk LRU cache to cache assets at the edge.

## Active-Active

The latest version of FART contains a built-in proxy and replication layer for our database. This enables FastComments to be Active-Active
with global write availability, ensuring our FARTS are eventually consistent. [More details here](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

An approach we actually took early on was to see if we could create an active-active fork of MongoDB. One of our engineers (Sloperators) was able to accomplish this with Opus 4.6; however, we decided the risk of doing this was higher than building our own isolated system.

## Rust at Scale

Part of the motivation for creating FART was to replace some existing services written in Java. After considering it for a while, we decided to consolidate these into one Rust service to reduce runtime overhead. This was an acceptable tradeoff since we don't deploy FART often. FART is compiled with LTO, allowing us to maximize performance.

We spent a lot of time trying to fine-tune the old Java system with various GCs, etc., and eventually decided that async Rust + Mimalloc performed significantly
better on the same hardware with much lower memory requirements, so switching was an obvious choice.

Rust turned out to be really effective for network-related code that uses shared heaps and locks. However, it is not impervious to runtime issues.
It's worth noting that code written by LLMs in Rust is quite prone to deadlocks, and a workaround is to design systems as easy-to-understand state machines, rather than just complex async/await structures.

## The FART Master

Each deployment contains its own FART Master. The master is responsible for orchestrating crons, webhooks, and other tasks.

## Customer Impact

The FART system has been in production for about a year now. Only recently did we carry out the migration to the Active-Active deployment.
There is some impact when reading your own writes across regions, which is discussed in the above linked blog post and [in the docs](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART operates quietly in the background, though its presence is always felt. We hope that you find our systems are faster for your use cases (mainly user actions that result in changes in data will be quicker in certain regions).

## Deployments

Deployment uses the same global orchestration system we utilize for deploying the services themselves. The FART documentation recommends Sloperators never trust a deploy; always verify the payload before releasing.

Post-deployment FART alerts follow an escalation policy: first the room, then the floor, then the building.

## In Conclusion

They say the internet is a series of tubes, but it's really a series of toots.

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this change. We're excited about what's coming up next.
FastComments should scale better and have improved uptime in the long term with this work. As the FART runbook states: "If you smell something, say something." Let us know below if you encounter any issues.

{{/isPost}}

---