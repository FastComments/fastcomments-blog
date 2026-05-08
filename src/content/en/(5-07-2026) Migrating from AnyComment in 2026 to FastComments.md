[category:Migration]
###### [postdate]
# [postlink]Migrating From AnyComment in 2026 To FastComments[/postlink]

{{#unless isPost}}
Read this post to see how to fully migrate from AnyComment to FastComments in 2026.
{{/unless}}

{{#isPost}}

We've had a number of customers ask about migrating from AnyComment in 2026.

## AnyComment Lives Inside WordPress

AnyComment is a WordPress plugin. Unlike standalone platforms like Disqus or Hyvor Talk, it doesn't run its own backend - your comments are stored directly in your WordPress database, in the same `wp_comments` table that core WordPress uses. This is great news for migration: there's no separate AnyComment export to wrangle, and no third-party server to coordinate with. Your data is already on your own server.

That means the standard FastComments WordPress migration flow handles AnyComment without any extra steps.

## Option 1: The FastComments WordPress Plugin (Recommended)

The easiest path is to install the <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress plugin</a>. The plugin guides you through linking your WordPress installation with FastComments, and it copies your existing comment data over automatically. There's nothing to download or upload manually. The data is copied from your wordpress database to our servers, so this will also offload
load from your servers once the migration is complete.

Most migrations finish in a couple of minutes.

After the data is across, deactivate AnyComment. Comments will continue to be served by FastComments, and the plugin keeps your WordPress database in sync as a backup (if you enable that feature), so you always own your data.

## Option 2: WordPress XML Export

If you'd rather migrate manually, or you've already moved off WordPress and just have a backup XML, use WordPress's built-in export.

1. In your WordPress admin, go to **Tools -> Export** and download the XML file.
2. Log in to your FastComments dashboard and go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">here to import the file</a>.
3. Select **WordPress (.xml)** from the dropdown and upload your file.

Since AnyComment writes to `wp_comments`, every AnyComment thread is in that XML alongside your other WordPress comments. The importer matches them to the right post automatically.

## Replacing The AnyComment Widget

If you used Option 1, the FastComments WordPress plugin already replaces AnyComment on your site - just deactivate AnyComment after the migration finishes.

If you used Option 2 and you're keeping your WordPress install, install the FastComments plugin afterwards to handle widget rendering and ongoing sync. If you're moving off WordPress entirely, drop in our <a href="https://fastcomments.com/install-wizard" target="_blank">install snippet</a> on your new site - we support many front end frameworks which <a href="https://fastcomments.com/install-wizard" target="_blank">you can find here</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can help with that</a>.

## EU

If you're in the EU, you'll probably want to create your account on <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> so that your customer data stays in the EU.

## Recap

1. Install the FastComments WordPress plugin and let it copy your data over, **or** export from WordPress as XML and upload it on the import page
2. Deactivate AnyComment
3. If you're leaving WordPress as well, swap the widget code on your new site

{{/isPost}}
