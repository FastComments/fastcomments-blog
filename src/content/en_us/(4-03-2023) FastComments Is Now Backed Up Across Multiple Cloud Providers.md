---
[category:Announcements]

###### [postdate]
# [postlink]FastComments Is Now Backed Up Across Multiple Cloud Providers[/postlink]

{{#unless isPost}}
As of April 2023, the FastComments databases are now stored in multiple cloud providers for added safety.
{{/unless}}

{{#isPost}}

### What's New

Previously, FastComments maintained live database backups on multiple servers, but they were all within the same cloud provider.

FastComments primarily uses Linode for the US-West and EU regions, with separate database and application deployments.

Each region previously had its own replica for the database as a live backup. If the primary database was ever lost, for any reason, 
the live backup would be available to take its place. Snapshots of the database are also performed on these backups.

We have now added backups on another cloud provider, ensuring that the data in each region is not confined to one datacenter per region.

The new database topology is:

- US-West
  - One database cluster on Linode in California.
  - **NEW** One live replica on Hetzner in Oregon.
- EU
  - One database cluster on Linode in Frankfurt.
  - **NEW** One live replica on Hetzner in Falkenstein.

These replicas are live; they always have the latest version of the database. 

### In Conclusion

As with all major releases, we're pleased that we could take the time to optimize, test, and properly roll out this feature. Let us know
below if you encounter any issues.

Cheers!

{{/isPost}}