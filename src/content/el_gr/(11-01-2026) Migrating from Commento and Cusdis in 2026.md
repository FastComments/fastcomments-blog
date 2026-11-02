[category:Migration]
###### [postdate]
# [postlink]Μεταφορά από το Commento και το Cusdis το 2026[/postlink]

{{#unless isPost}}
The hosted Commento and Cusdis services have stopped responding. Here is how to move to FastComments, and how we can help recover your comments from the Internet Archive if you never exported them.
{{/unless}}

{{#isPost}}

If the comment section on your site has gone blank, this post is for you. It covers what changed, how to import an export if you have one, and how we can help you get your comments back from the Internet Archive if you don't.

## Τι Συμβαίνει

Here is what we see as of November 1, 2026:

- **Commento.** commento.io, its API and its widget script all return a 404. Internet Archive captures show the site working on May 25, 2026 and returning a 404 by June 11, 2026.
- **Cusdis.** cusdis.com and its API return Cloudflare error 521, which means the server behind Cloudflare is down. Captures show it working through August 27, 2026 and returning a 521 by October 16, 2026. The widget script still loads, so your page draws an empty box where the comments were.

We have not found a shutdown notice from either project. If you self-host Commento or Cusdis, your install is not affected by any of this, and you can export from it whenever you are ready to move.

## Βρείτε τα Δεδομένα Σας

Which path you take depends on what you have:

1. **You have an export file.** Search your inbox too, since Commento sent its exports by email as a ".gz" file. Skip ahead to the import steps.
2. **You self-host.** Export from your own dashboard, then follow the import steps.
3. **You used the hosted service and have no export.** The dashboard you would export from is gone. Read the recovery section below.

## Εισαγωγή Αρχείου Εξαγωγής

Once you're logged in, go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">here to import the file</a>. Select **Commento (.gz, .json)** or **Cusdis (.json)** from the dropdown and upload your file. There's no need to unzip a Commento ".gz" file first.

The import runs in the background, and you'll receive an email when it finishes. Re-importing is safe, because each comment is matched by its original id and updated in place.

We have a longer guide for each format: <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> and <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. Their steps for requesting an export from the hosted dashboard no longer apply, but their import details do.

## Ανάκτηση Σχολίων Από το Internet Archive

Commento and Cusdis both load comments with JavaScript from their own servers. When the Internet Archive captures a page with a browser, it can save those responses along with the page. Those saved responses hold the comment threads.

We tested this ourselves. The <a href="https://web.archive.org" target="_blank">Wayback Machine</a> holds more than 12,000 captured Commento comment responses and captures for 448 Cusdis projects, and the most recent are from 2026. We don't have a self-serve tool for this. We run the recovery for you, so <a href="https://fastcomments.com/contact-us" target="_blank">write to us</a> to get started.

### Ελέγξτε Πρώτα τον Ιστότοπό Σας

Open one of your busier posts in the Wayback Machine, replacing the address with your own:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

Scroll to the comment section. If your comments show up, the archive has that thread. If they don't, try a different year using the calendar at the top of the page. A blank result on one post doesn't rule out the rest of your site, so write to us either way.

### Πώς Λειτουργεί η Ανάκτηση

1. **Tell us your domain.** If you used Cusdis, also send your App ID, the `data-app-id` value in the snippet on your site. We'll ask you to show that you control the domain, since these comments belong to your site.
2. **We find your threads.** We collect the captures for your site and check that each one belongs to your domain and page. Commento recoveries take longer, because the archive doesn't index its captures by site and we have to read through all of them.
3. **We show you what we found.** You'll see how many pages and comments came back, and the date of the newest comment, before anything is imported.
4. **We import the threads into your account.** You can then edit or remove any comment from your moderation dashboard.

### Τι Επιστρέφεται

<div class="pretty-table wide-table">

| Δεδομένα | Commento | Cusdis |
| --- | --- | --- |
| Κείμενο σχολίου | Ναι | Ναι |
| Όνομα εμφάνισης συγγραφέα | Ναι | Ναι |
| Ημερομηνία σχολίου | Ναι | Ναι |
| Δημιουργία αλληλουχίας απαντήσεων | Ναι | Ναι |
| Βαθμολογία ψήφων | Ναι | Το Cusdis δεν έχει ψήφους |
| Διεύθυνση σελίδας | Ναι | Ναι, αν και ορισμένοι ιστότοποι αποθήκευαν μόνο ένα μονοπάτι, οπότε χρειαζόμαστε το domain σας |
| Email συγγραφέα | Όχι | Όχι |
| Σχόλια που αναμένουν ακόμη έγκριση | Όχι | Όχι |
| Σχόλια που γράφτηκαν μετά την τελευταία καταγραφή | Όχι | Όχι |
| Σελίδες που το αρχείο δεν κατέγραψε ποτέ | Όχι | Όχι |

</div>

### Τι να Περιμένετε

This is a recovery from snapshots, so plan for gaps. It works best for pages that were popular enough to be captured often and recently.

Two results from our testing show the range. On one blog, 30 lookups returned 810 comments across 19 pages. On another site, which still displays its comments, the newest archived copy stopped at October 2023 while the live page ran through March 2025. Anything written between the last capture and the shutdown is not in the archive.

The missing emails matter too. Recovered comments keep the author's name, but they can't be matched to a FastComments account, and their authors won't get notified about new replies to them.

## Αντικατάσταση του Widget

Whichever path you took, the old snippet needs to come off your site. For Commento, remove this, along with `count.js` if you use comment counts:

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

For Cusdis, remove this:

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

Then add <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">δικό μας</a>:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

We also support many front end frameworks, which <a href="https://fastcomments.com/install-wizard" target="_blank">εδώ</a>. There's no need to wait for a recovery to finish before switching. Your readers can start commenting right away, and recovered threads join the same pages when they're imported.

### Αν Οι URL Σας Αλλάζουν

Imported comments are tied to their page URL, so if your URLs stay the same, the threads line up on their own. If they are changing, import first, then use the <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> tool under Manage Data to move them to the new locations.

## EU

If you're in the EU, you'll probably want to create your account on <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> so that your customer data stays in the EU.

## Ανακεφαλαίωση

1. Look for an export file, including in your email.
2. If you have one, upload it on the <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">import page</a>.
3. If you don't, check your site in the Wayback Machine and <a href="https://fastcomments.com/contact-us" target="_blank">write to us</a> with your domain.
4. Swap the old snippet for <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">δικό μας</a>.

Cheers!

{{/isPost}}

---