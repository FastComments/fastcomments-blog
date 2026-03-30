[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments is Ready for Space![/postlink]

{{#unless isPost}}
We've completed our active-active database migration, bringing true multi-region redundancy to FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

Each FastComments [point-of-presence](https://sophon.fastcomments.com/) now takes writes locally and asynchronously replicates them
to all other nodes. This will provide increased durability over the previous system, along with making the moderation tools faster
for users in some regions, with some trade-offs.

"Ready for Space" is a bit optimistic, but the idea is that we could deploy FastComments to different planets and eventually the system would end up in sync. Users on Pluto, however, would have to wait about a day to see changes reflect on their upcoming invoice page, as only one
master per region can currently aggregate billing information.

### Some History, Why The Change

When FastComments originally launched we had a very typical architecture. We had a proxy layer, an app layer, a database, some replicas, then later replicas across regions and cloud providers for extra redundancy.

Eventually we moved the DB replicas to all zones where most of our users are and also deployed the app there, and created our own DNS and proxy system (described in a later blog post) to route requests to the nearest app node. This makes reads fast, but writes slower, as now instead of waiting for one HTTP round trip to the backend, you wait for an HTTP round trip to a near node, and that node might make multiple database writes back to the primary. No good!

So to combat this we re-structured many areas of the application to take a `readPreference` in function arguments, so callers can decide how
stale they are okay with their reads being, and on top of this made more writes (like writing moderator stats on moderator actions) fire-and-forget. Not ideal, but it sped up things significantly.

One problem we ran into running Mongo globally are network splits. If enough nodes get cut off, reads stop as each node becomes uncertain if
it's acceptable to serve reads. There are some ways around this, but the edge cases get messy. This is not a theoretical issue - it happened enough times causing 3AM pages that we got sick of it, even trying to tune Mongo to be okay with replicaset election uncertainty up to a minute apart. Sadly the networks for Sao Paulo to Falkenstein, for example, just were not very good across some of our hosting providers. Tuning congestion control and such helped but did not solve the problem.

The holy grail solution, assuming you're okay with certain trade offs, is the ability to accept the writes locally at that node (which has decent hardware, RAID, etc, that is unlikely to blow up) and tell the user their data is saved. You can also in that point-of-presence still have a second node as a hot replica for durability.

So this is what we ended up at. Oregon, Virginia, Falkenstein, Sao Paulo, Singapore, are all their own replicasets and accept writes. The EU
deployment (although only three PoPs) has the same behavior.

### How It Works

Some of this is covered in the previous section, but the TL;DR is it's CRDT-lite. We created a proxy (in Rust, because of course) that sits between the application and Mongo and makes it multi-master. The proxy is peer-aware, manages checkpoints, replication, monitoring, and initial sync. It is a multi-master replacement for Mongo's replication system, including for some DDL commands.

**The difference from other tools** is that this **does not tail the oplog**. Tailing the oplog, or using change streams, would not work, because they only show you the final state of the object after the write making it impossible to handle conflicts. You need to capture
each `$set`, `$inc` operation and replicate that operation itself.

This is a domain-specific solution. It would not work for all products. You could say it's domain-driven design :). It works for us because we from the beginning very carefully only `$set` the fields we change on documents - we never use Mongo's `replaceOne`, for example. Same with counters. You **never** do `SET VOTES = 5`. Instead, you would write `INCREMENT VOTES BY 5`, as this allows eventual consistency. Distributed locks are handled by **don't**. Only one node
per cluster has a flag set to run crons. While this may seem limited, we can buy servers with terabytes of RAM, so we can take this tradeoff to lower risk and complexity.

### Reading Your Own Writes

For developers using the API, you should be able to read your own writes just as before (make an API call to create a comment, then list comments and see the new entry in that list). **The caveat** is that you can't do this across regions. If your backend runs in just one region,
like us-west, then you should be able to read your own writes except in the event that between your write and your read, that node goes down **and** your
DNS cache updates to point to the next nearest node. Provided this does not happen, reading your own writes is dependable.

[You can also pin which point-of-presence you hit. More information here.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Testing & The Migration

About half the code in the system is the test harness, framework, and tests. Still, the release was a bit bumpy, taking longer downtime (1hr for EU and 20mins for us-global) than desired, but we are glad that we passed this milestone and thank you for your patience!

### In Conclusion & What This Means for You

FastComments should now be faster and more durable than ever, and now we can go back to working on features :)

Cheers!

{{/isPost}}
