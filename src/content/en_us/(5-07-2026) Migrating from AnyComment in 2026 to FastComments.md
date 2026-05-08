---
[category:Migration]
###### [postdate]
# [postlink]Migrating From AnyComment in 2026 To FastComments[/postlink]

{{#unless isPost}}
Read this post to learn how to fully migrate from AnyComment to FastComments in 2026.
{{/unless}}

{{#isPost}}

We've had several customers inquire about migrating from AnyComment in 2026.

## AnyComment Lives Inside WordPress

AnyComment is a WordPress plugin. Unlike standalone platforms like Disqus or Hyvor Talk, it doesn't operate its own backend - your comments are stored directly in your WordPress database, in the same `wp_comments` table that core WordPress uses. This is excellent news for migration: there's no separate AnyComment export to manage, and no third-party server to coordinate with. Your data is already on your own server.

This means the standard FastComments WordPress migration flow accommodates AnyComment without any additional steps.

## Option 1: The FastComments WordPress Plugin (Recommended)

The simplest route is to install the <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress plugin</a>. The plugin guides you through linking your WordPress installation with FastComments, and it automatically copies your existing comment data over. There's nothing to download or upload manually. The data is transferred from your WordPress database to our servers, reducing the load on your servers once the migration is complete.

Most migrations wrap up in just a couple of minutes.

Once the data is transferred, deactivate AnyComment. Comments will continue to be served by FastComments, and the plugin keeps your WordPress database synchronized as a backup (if you enable that feature), so you always retain ownership of your data.

## Option 2: WordPress XML Export

If you prefer to migrate manually, or if you've already transitioned away from WordPress and only have a backup XML, utilize WordPress's built-in export feature.

1. In your WordPress admin, navigate to **Tools -> Export** and download the XML file.
2. Log in to your FastComments dashboard and go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">here to import the file</a>.
3. Select **WordPress (.xml)** from the dropdown and upload your file.

Since AnyComment writes to `wp_comments`, every AnyComment thread is included in that XML along with your other WordPress comments. The importer automatically matches them to the corresponding post.

## Replacing The AnyComment Widget

If you used Option 1, the FastComments WordPress plugin has already replaced AnyComment on your site - just deactivate AnyComment after the migration is complete.

If you opted for Option 2 and are keeping your WordPress installation, install the FastComments plugin afterward to manage widget rendering and ongoing synchronization. If you're moving away from WordPress entirely, include our <a href="https://fastcomments.com/install-wizard" target="_blank">install snippet</a> on your new site - we support many front-end frameworks which <a href="https://fastcomments.com/install-wizard" target="_blank">you can explore here</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can assist with that</a>.

## EU

If you're in the EU, you'll likely want to create your account on <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> so that your customer data remains within the EU.

## Recap

1. Install the FastComments WordPress plugin and allow it to copy your data over, **or** export from WordPress as XML and upload it on the import page
2. Deactivate AnyComment
3. If you're leaving WordPress too, replace the widget code on your new site

{{/isPost}}

---