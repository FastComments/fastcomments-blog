[category:Announcements]
[category:Performance]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Is Now Globally Distributed[/postlink]

{{#unless isPost}}
FastComments has transitioned to a new architecture for better global performance.
{{/unless}}

{{#isPost}}

### What's New

Previously FastComments had a very traditional architecture for a web application. We had our app servers, databases, and some other services. This was
duplicated across two regions (us-west and eu). If you were in France and wanted to view a comment thread for a customer hosted in our
global datacenter, your requests would have to go all the way to us-west for the comment data.

Not anymore! Now comment data and all media assets are replicated globally for customers in our global deployment, and for customers
in our EU deployment we have three points of presence in the EU where data is replicated. Your requests go to the closest node in the
EU.

### How it Used To Work

Except for databases which had several live replicas across regions and cloud providers, all services were deployed on one instance per service type.
This meant for each region we had one app server, one pubsub server, and one media server. The plan was to vertically scale while we could
as this kept things simple. Writing code was easy - you always knew you could "read your own writes" when hitting the database. Infra was easy,
with the exception of security updates which would take a minute of downtime.

### The Problem

The problem began obviously when we'd hit capacity. So we'd optimize, and then eventually have to go up and instance size for that service.

This started to become cost prohibitive on Linode, where a $144 instance is about equivalent, based on our passmark testing, of a $20 OVH node, and even if
we switched hosting providers we'd have single points of failures all over the place - and providers like OVH tend to have longer resolution times than Linode
for maintenance trouble.

### RiR :)

For the initial few years the PubSub and Media services at FastComments were written in Java. Java was picked for being relatively high performance for the effort
put in, and after years of tuning the GC, trying G1GC, Shenandoah, and Z1, we decided no more Java. The memory usage overhead was simply too much and since these
services were very stagnant once complete, the benefits of Java wore off. Also, these services tended to have to deal with the "thundering hurd" problem, which meant
the JVM was trying to handle peak traffic when the JIT had not even kicked in yet. These services were prime candidates to switch to C++ or Rust.

Rust was picked since we are not C++ experts and making a mistake in net code could expose one customer's data to another. Rust helps us prevent these kinds of problems.

We wanted to consolidate these services anyway, so while we could have made *another* pass optimizing them perhaps with GraalVM, we decided to move to Rust and be done with it.

The migration was not without trouble. These services have to terminate SSL, support HTTP 1.1, HTTP/2, and so on. They do things like manage many streams of data concurrently,
reading media from an edge on-disk lru cache, S3, databases, and communicating in a mesh. The Java ecosystem, Vertx and Netty, were very good for these things. We are pushing the library ecosystem to its limit, and not having a ton of experience with the Rust libraries meant we had
some trial and error. This caused some downtime, and we apologize for that.

We also experimented with different memory managers, settling on mimalloc for our custom DNS servers and libc for the transport layer. We don't run Nginx or Apache, instead
using our own combination of a custom DNS server which routes clients globally based an in-memory index rebuilt weekly from Maxmind and our transport layer in Rust which maintains a mesh
with the other transport instances. The transport terminates SSL, handles the pubsub work, and is our CDN. The benefit of this is less overhead when moving things between
services, and less infrastructure overhead/abstraction. The downside is visibility, so good metrics are important.

In terms of resulting performance, the Rust services used about 10-30% of the memory of the Java ones, despite all of our work. I read books like Java Concurrency in Practice for fun, so
while not an expert I know a thing or two about writing fast JVM services, and it was a lot easier to accomplish this with Rust. Additionally, spikes of messages to large numbers
of subscribers would barely register on CPU usage when the JVM services would be spending 40% of their time in GC, despite writing our code more like a game engine and less
like your typical server. I can't say I'm a huge Rust fan, but for services that do a lot of work and don't change much after initial development, it's perfect. Our main business logic
remains in TypeScript.

### The New Architecture

The new architecture has no more "pet" nodes. Instead, each server is a complete clone with all the same services and almost identical configuration. They each run
the transport, DNS, the application server, and a copy of the database. All nodes maintain Full Disk Encryption with automatic unlocking with Dropbear.

Each server runs the routing transport which terminates requests and handles them as either a websocket, http stream, or cdn request. These servers connect to each
other and any given one provide a mapping of the global network to its local DNS server to tell the DNS in real-time where each live node is globally.

One benefit of the new architecture is redundancy. If a customer in one region hits us really hard, the other regions remain online.

The application code now has to be very aware of which queries can hit the nearest node or which have to go to the database primary, which may be far away. Making a mistake
can drastically decrease performance. This also means writes from some regions can be slow, and this requires careful tuning and optimization. We now follow a pattern internally
in the code where all methods that hit the database take a readPreference argument, so that callers all the way to the top have to explicitly decide how to query.

The benefit is very good horizontal scaling for reads. FastComments is very read heavy, but we must not forget our moderators! Moderators work day in and day out across the globe
and we want their experience to remain good. As part of this rollout we've been working with a few of them to ensure the moderation tools remain fast.

We can also hand-select hardware, which is fun and rewarding. The new servers are a mix of i5-13500 and Ryzen 5 5600X boxes, and EU is on some older Xeons. In our benchmarks all of these
were much faster than the more expensive servers we were exploring on other providers. The downside is more setup work, but we have automated this, along with SMART disk monitoring for failures and so on.

Doing these kinds of things means we can continue to offer competitive pricing.

### The Rollout

The rollout over the past couple months as we rewrite the services and move to new hosting providers has been bumpy, we thank you for your patience.

On the initial rollout our metrics showed us an increase in requests taking > 100ms. We try not to have many requests taking this long for anything.

<div class="text-center">
    <div class="sm">Gradual Progress</div>
    <img src="images/slow-reqs.png" alt="Slow Requests" title="Slow Requests" />
</div>

We are still making gradual progress improving performance for some regions. Thanks to everyone which has provided feedback thus far.

### Considerations When Using The API

The API remains strongly consistent - you can read your own writes - to maintain backwards compatibility and keep things simple for developers. To allow
developers to choose performance over consistency we plan to expose the readPreference parameter. The benefit is we may also offer a credits discount for
these API calls.

All the public endpoints, like for serving the public comment widget, always read from the nearest (local) database on that node.

### Why Not Just Use a Regular CDN

The comment thread are not static, they are live, and applying a live stream over the stale static data also does not work as when you view a thread as
an anonymous user you get an "anonymous session". In this anonymous session you can do things like block and flag other users, and you have to show
if the anon user liked a given comment, and so on. Comment threads can also be locked behind SSO, authentication, or user groups. 

Finally, the kind of "progressive enhancement" where the dynamic data is mapped to the static data from the CDN gives you a bad experience where content jumps around or changes after a few seconds.
We would prefer not to do that.

### Who Has My Data Now

Your data is no longer stored on Linode. It's replicated live between Hetzner and OVH with full disk encryption, and all communication between backend servers
is done with TLS. We maintain a couple legacy Linode instances for outbound webhook proxies, but no data or media remains stored on Linode.

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this change. FastComments should scale better and have
better uptime in the long run with this work. Let us know below if you discover any issues.

{{/isPost}}
