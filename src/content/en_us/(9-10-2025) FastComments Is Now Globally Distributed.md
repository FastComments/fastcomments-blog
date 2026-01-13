---
[category:Announcements]
[category:Performance]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Is Now Globally Distributed[/postlink]

{{#unless isPost}}
FastComments has transitioned to a new architecture for improved global performance.
{{/unless}}

{{#isPost}}

### What's New

Previously, FastComments operated on a very traditional architecture for a web application. We had our app servers, databases, and some other services. This was
duplicated across two regions (us-west and eu). If you were in France and wanted to view a comment thread for a customer hosted in our
global datacenter, your requests would have to go all the way to us-west for the comment data.

Not anymore! Now comment data and all media assets are replicated globally for customers in our global deployment, and for customers
in our EU deployment, we have three points of presence in the EU where data is replicated. Your requests go to the closest node in the
EU.

### How it Used To Work

Except for databases which had several live replicas across regions and cloud providers, all services were deployed on one instance per service type.
This meant for each region we had one app server, one pubsub server, and one media server. The plan was to vertically scale as long as we could
since this kept things simple. Writing code was easy - you always knew you could "read your own writes" when hitting the database. Infrastructure was straightforward,
apart from security updates which would take a minute of downtime.

### The Problem

The issue became apparent when we'd hit capacity. So we'd optimize, and then eventually have to increase the instance size for that service.

This started to become cost prohibitive on Linode, where a $144 instance is about equivalent, based on our passmark testing, of a $20 OVH node, and even if
we switched hosting providers we'd have single points of failures all over the place - and providers like OVH tend to have longer resolution times than Linode
for maintenance issues.

### RiR :)

For the initial few years, the PubSub and Media services at FastComments were written in Java. Java was chosen for being relatively high performance for the effort
put in, and after years of tuning the GC, trying G1GC, Shenandoah, and Z1, we decided it was time to move away from Java. The memory usage overhead was simply too much, and since these
services were very stable once complete, the benefits of Java faded. Additionally, these services often faced the "thundering herd" problem, which meant
the JVM was trying to handle peak traffic when the JIT had not even started. These services were prime candidates to switch to C++ or Rust.

Rust was chosen since we are not C++ experts, and making a mistake in network code could expose one customer's data to another. Rust helps us prevent these kinds of issues.

We wanted to consolidate these services anyway, so while we could have made *another* pass optimizing them perhaps with GraalVM, we decided to transition to Rust and be done with it.

The migration was not without challenges. These services have to terminate SSL, support HTTP 1.1, HTTP/2, and other protocols. They handle many streams of data concurrently,
reading media from an edge on-disk LRU cache, S3, databases, and communicating in a mesh. The Java ecosystem, Vertx, and Netty, were very effective for these purposes. We are pushing the library ecosystem to its limits, and our lack of experience with the Rust libraries led to
some trial and error. This caused some downtime, and we apologize for that.

We also experimented with different memory managers, ultimately settling on mimalloc for our custom DNS servers and libc for the transport layer. We don't run Nginx or Apache; instead,
we use our own combination of a custom DNS server that routes clients globally based on an in-memory index rebuilt weekly from Maxmind and our transport layer in Rust, which maintains a mesh
with the other transport instances. The transport terminates SSL, handles the pubsub tasks, and serves as our CDN. The advantage is less overhead when transferring data between
services, and reduced infrastructure overhead/abstraction. The downside is visibility, so good metrics are crucial.

In terms of resulting performance, the Rust services utilized about 10-30% of the memory used by the Java services, despite all our efforts. I read books like Java Concurrency in Practice for enjoyment, so
while not an expert, I know a thing or two about writing efficient JVM services, and it was significantly easier to achieve this with Rust. Moreover, spikes of messages to large numbers
of subscribers would barely register on CPU usage, while JVM services would spend 40% of their time in GC, despite writing our code more like a game engine and less
like your typical server. I can't say I'm a huge Rust fan, but for services that do a lot of work and don't change much after initial development, it's ideal. Our main business logic
remains in TypeScript.

### The New Architecture

The new architecture eliminates "pet" nodes. Instead, each server is a complete clone with all the same services and nearly identical configurations. They each run
the transport, DNS, application server, and a copy of the database. All nodes maintain Full Disk Encryption with automatic unlocking using Dropbear.

Each server runs the routing transport, which terminates requests and manages them as either a websocket, HTTP stream, or CDN request. These servers connect to each
other, and any given server provides a mapping of the global network to its local DNS server to inform the DNS in real-time where each live node resides globally.

One benefit of the new architecture is redundancy. If a customer in one region overwhelms us, the other regions stay online.

The application code must now be very aware of which queries can hit the nearest node or which have to go to the primary database, which may be far away. Making a mistake
can drastically reduce performance. This also means writes from certain regions may be slow, necessitating careful tuning and optimization. We now adhere to an internal
pattern in the code where all methods that interact with the database accept a readPreference argument, so that callers all the way to the top must explicitly decide how to query.

The advantage is very effective horizontal scaling for reads. FastComments is very read-heavy, but we must not overlook our moderators! Moderators work tirelessly around the world,
and we want their experience to remain positive. As part of this rollout, we've been collaborating with some of them to ensure that the moderation tools remain responsive.

We can also hand-select hardware, which is enjoyable and rewarding. The new servers are a mix of i5-13500 and Ryzen 5 5600X machines, while the EU is using some older Xeons. In our benchmarks, all of these
outperformed the more expensive servers we were considering from other providers. The drawback is more setup work, but we have automated this, along with SMART disk monitoring for failures, and so on.

Doing these kinds of things enables us to continue offering competitive pricing.

### The Rollout

The rollout over the past couple of months as we rewrite the services and transition to new hosting providers has been uneven; we thank you for your patience.

During the initial rollout, our metrics indicated an increase in requests taking over 100ms. We strive not to allow many requests to take this long for anything.

<div class="text-center">
    <div class="sm">Gradual Progress</div>
    <img src="images/slow-reqs.png" alt="Slow Requests" title="Slow Requests" />
</div>

We are still making gradual progress in improving performance for some regions. Thanks to everyone who has provided feedback thus far.

### Considerations When Using The API

The API remains strongly consistent - you can read your own writes - to maintain backwards compatibility and keep things simple for developers. To allow
developers to prioritize performance over consistency, we plan to expose the readPreference parameter. The benefit is we may also offer a credits discount for
these API calls.

All the public endpoints, like for serving the public comment widget, always read from the nearest (local) database on that node.

### Why Not Just Use a Regular CDN

Comment threads are not static; they are live, and applying a live stream over stale static data does not work since when you view a thread as
an anonymous user, you get an "anonymous session." In this anonymous session, you can do things like block and flag other users, and you must display
if the anonymous user liked a given comment, and so on. Comment threads can also be restricted behind SSO, authentication, or user groups.

Finally, the type of "progressive enhancement" where dynamic data is matched to static data from the CDN creates a poor experience where content jumps around or changes after a few seconds.
We prefer not to implement that.

### Who Has My Data Now

Your data is no longer stored on Linode. It's replicated live between Hetzner and OVH with full disk encryption, and all communication between backend servers
is conducted using TLS. We maintain a couple of legacy Linode instances for outbound webhook proxies, but no data or media remains stored on Linode.

### In Conclusion

Like all major releases, we're pleased that we could take the time to optimize, test, and properly rollout this change. FastComments should scale better and have
improved uptime in the long run with this effort. Let us know below if you encounter any issues.

{{/isPost}}

---