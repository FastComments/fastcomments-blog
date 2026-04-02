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

The FastComments Automatic Routing Transport System (FARTS) serves as our transport and service layer. FARTS helps with congestion, routing
traffic based on user location and potentially load in the future. It is composed of several different systems, a geo-aware DNS layer, a DB proxy, DB
replication, SSL cert management, reverse proxy, and CDN that utilizes an on-disk LRU cache to store assets at the edge.

## Active-Active

The latest version of FART includes a built-in proxy and replication layer for our database. This allows FastComments to operate in Active-Active mode
with global write availability, ensuring our FARTS are eventually consistent. [More details here](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

An approach we actually took early on was examining if we could create an active-active fork of MongoDB. One of our engineers (Sloperators) successfully accomplished this with Opus 4.6; however, we concluded that the risk involved was greater than building our own isolated system.

## Rust at Scale

Part of the motivation for creating FART was to replace some existing services written in Java. After considering it for a while, we decided to consolidate these into one Rust service to reduce runtime overhead. This was an acceptable tradeoff since we don't deploy FART often. FART is compiled with LTO, allowing us to achieve high performance.

We spent considerable time attempting to tune the old Java system with different garbage collectors, etc., and ultimately decided that async Rust + Mimalloc performed significantly
better on the same hardware with much lower memory requirements, making the switch an easy decision.

Rust has proven to be excellent for network-related code that utilizes shared heaps and locks. However, it is not immune to runtime issues. It is worth noting that code written by LLMs in Rust is fairly susceptible to deadlocks, and a workaround is to design systems as easy-to-understand state machines, rather than mere collections of async/await.

## The FART Master

Each deployment contains its own FART Master. The master is responsible for orchestrating crons, webhooks, and similar tasks.

## Customer Impact

The FART system has been in production for about a year now. Recently, we completed the migration to the Active-Active deployment. 
There is some impact when reading your own writes across regions, which is discussed in the linked blog post above and [in the docs](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART operates quietly in the background, though its effect is always noticeable. We hope that you find our systems are faster for your use cases (generally, user actions that result in changes in data will be faster in certain regions).

## Deployments

Deployment employs the same global orchestration system we use for deploying the services themselves. The FART documentation advises Sloperators to never trust a deploy and to always verify the payload before releasing.

Post-deployment FART alerts follow an escalation policy: first the room, then the floor, then the building.

## In Conclusion

They say the internet is a series of tubes, but it's actually a series of farts.

Like all major releases, we're pleased that we could take the time to optimize, test, and properly release this update. We’re excited about what’s coming up.
FastComments should scale better and have improved uptime in the long run with this effort. As the FART runbook states: "If you smell something, say something." Let us know below if you encounter any issues.

{{/isPost}}

---