[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]How to Remove Ads From Disqus Comments[/postlink]

{{#unless isPost}}
On the free Disqus plan, your comment section comes with ads attached. There are two ways to get rid of them. The better one also makes your comments load faster and keeps your readers from being tracked.
{{/unless}}

{{#isPost}}

Disqus pays for its free plan by putting ads in your comment section, right underneath your content, in the same spot your readers go to talk to you. Those ads aren't yours. You don't choose them, and you don't earn a cent from them. That's the trade for the free tier.

There are two real ways to remove them.

## Option 1: Upgrade Your Disqus Plan

The straightforward route is to pay Disqus. Their paid plans turn the ads off. You can find the current options on the <a href="https://disqus.com/pricing/" target="_blank">Disqus pricing page</a>.

This works, but it's worth being clear about what you're buying. You're paying to undo a downside. The ads go away, and the rest of Disqus stays the same: the comment area still loads a heavy bundle of third-party scripts, and your readers are still tracked across the sites that embed it. You're paying to remove the ads, not to make the comment section lighter or more private.

## Option 2: Switch to a Platform That Never Shows Ads

The other way to remove the ads is to use a commenting platform that doesn't run them in the first place. :)

For just $0.99/mo, FastComments provides deep performance-optimized functionality without tracking or ads.

## You Keep Every Comment

The part people worry about most is losing their existing discussion. FastComments has a built-in Disqus importer that brings over your comments, user names, user avatars, inline images, votes, and timestamps. We even move all images to our own CDN for you.

If you want the full, detailed walkthrough, we have a dedicated guide: [Migrating From Disqus To FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). The short version is below.

## How to Switch in Three Steps

### 1. Export your comments from Disqus

Follow <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">Disqus's own export steps</a>. They'll email you a file with a "gz" extension. You don't need to open or unzip it, and a default Windows install can't anyway. Our backend reads that compressed file directly.

### 2. Import the file into FastComments

Once you're logged in, head to the <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">import page</a>, select Disqus from the dropdown, and upload the file as-is. The import runs in the background; the page will auto update as it runs to show you a live count of # of comments discovered and importered. It's safe to re-import as many times as you need.

### 3. Swap the Disqus snippet for ours

Remove the Disqus embed code from your pages and drop in <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">the FastComments snippet</a> instead. As long as your page URLs stay the same, your imported comments line up exactly where they were.

## On WordPress?

If your site runs on WordPress, skip the manual steps and install the <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress plugin</a>. It handles install, setup, and sync for you, and then you can deactivate Disqus.

## Test It Before You Commit

You don't have to flip the switch all at once. You can run Disqus and FastComments on the same page temporarily to compare the look and feel before you fully cut over. If you'd like a hand with any of this, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a> and we'll help you through it.

Not sure what FastComments will cost you? Every plan is ad-free, and you can check your number on the <a href="https://fastcomments.com/pricing-calculator" target="_blank">pricing calculator</a>. If you're in the EU, you can create your account on <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> so your data stays in the EU.

## Recap

1. Export your data from Disqus
2. Import it into FastComments
3. Swap the Disqus snippet for <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

That's it. No ads in your comment section, lighter pages, and every comment you already had.

Cheers!

{{/isPost}}
