[category:Announcements]

###### [postdate]
# [postlink]FastComments Is Now Backed Up Across Multiple Cloud Providers[/postlink]

{{#unless isPost}}
As of April 2023, the FastComments databases are now stored in multiple cloud providers for extra caution.
{{/unless}}

{{#isPost}}

### What's New

Previously FastComments had live database backups on multiple servers, but in the same cloud provider.

FastComments primarily uses Linode for the US-West and EU regions, as separate database and application deployments.

Each region previously had its own replica for the database as a live backup. If the primary database was ever lost, for any reason, 
the live backup would be available to take its place. Snapshots of the database are also performed on these backups.

We have now added backups on another cloud provider, so that the data in each region is not isolated to one datacenter per-region.

The new database topology is:

- US-West
  - One database cluster on Linode in California.
  - **NEW** One live replica on Hetzner in Oregon.
- EU
  - One database cluster on Linode in Frankfurt.
  - **NEW** One live replica on Hetzner in Falkenstein.

These replicas are live, they always have the latest version of the database. 

### In Conclusion

Like all major releases, we're glad that we could take the time to optimize, test, and properly release this feature. Let us know
below if you discover any issues.

Cheers!

{{/isPost}}
