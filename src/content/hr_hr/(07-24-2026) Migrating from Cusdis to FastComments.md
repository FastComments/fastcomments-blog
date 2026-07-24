[category:Migration]
###### [postdate]
# [postlink]Migrating From Cusdis To FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post kako biste vidjeli kako potpuno migrirati s Cusdis-a na FastComments, uključujući vaše teme, status moderacije i URL-ove stranica.
{{/unless}}

{{#isPost}}

Cusdis je lagani, open-source sustav za komentare. Ako ste ga nadmašili i želite značajke poput filtriranja spama, glasanja, reakcija, obavijesti, SSO-a i potpunog nadzornog panela, FastComments sada izravno uvozi vaše Cusdis podatke.

## Export Your Existing Comments

Sa svog Cusdis nadzorne ploče zatražite potpuni izvoz podataka. Cusdis vam daje jedan JSON datoteku koja sadrži vaše projekte, stranice i svaki komentar, zajedno s njihovim nitima i statusom odobrenja. Ovisno o vašem Cusdis postavu, izvoz se šalje e‑mailom ili se odmah preuzima.

There's nothing to edit or unzip. Keep the ".json" file as-is, and our backend reads it directly.

## Import Into FastComments

Once you're logged in, go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">here to import the file</a>. Select **Cusdis (.json)** from the dropdown and upload your file.

### Wait a few minutes

The FastComments import is "asynchronous". Uploading the file and processing it are separate steps. For a small file the success message appears right away. At the bottom of the import page there's a table, and each row is an import attempt. Refresh the page to watch the status and how many comments have been imported so far.

### When it's done

You'll receive an email when the import finishes, whether it succeeds or not. It's safe to close the page after the upload succeeds and you see your import listed with a status of "Requested" or "Running".

Re-importing is safe. FastComments matches each comment by its original Cusdis id, so running the import again updates your existing comments instead of creating duplicates. If an import fails, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">reach out to us</a> and we'll help.

## What is Imported

- **Threaded replies.** Cusdis ugnijezdi odgovore na nekoliko razina, a FastComments ponovno gradi cijelu strukturu roditelja i djece.
- **Moderation status.** Odobreni komentari ostaju odobreni. Komentari koji još čekaju odobrenje završavaju u vašem FastComments redu za moderaciju kako biste ih mogli pregledati.
- **Authors.** Ime i e‑mail svakog komentatora prenose se, a registrirani FastComments korisnici podudaraju se prema e‑mailu.
- **Formatting.** Cusdis komentari su napisani u Markdownu. FastComments prikazuje isti Markdown, uključujući poveznice, slike i prijelome redaka, tako da vaše teme izgledaju točno kao i prije.

Comments that were deleted in Cusdis are left behind, so your imported threads stay clean.

## Replace the Cusdis Widget

Once your data is across, remove the small Cusdis snippet from your site and drop in <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">our own</a>. You can run Cusdis and FastComments side by side for a while to test the look and feel first. We support many front end frameworks, which <a href="https://fastcomments.com/install-wizard" target="_blank">you can find here</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We can help with that</a>.

### Migrating URLs at the same time

Cusdis ties each comment to its page URL, so as long as your URLs don't change the switch is easy. If your URLs are changing too, import your Cusdis data first, then use the built-in <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> tool under Manage Data to move your comments to the new locations. You can enter a whole domain, a full URL, or a URL ID for both the old and new location, so a single "from" and "to" pair moves every matching page at once. It runs as a background job and emails you when it finishes.

If you'd rather we handle it (if you have many pages), <a href="https://fastcomments.com/auth/my-account/help" target="_blank">let us know</a> the old and new URLs.

## EU

If you're in the EU, you'll probably want to create your account on <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> so that your customer data stays in the EU.

## Recap

1. Export your data from Cusdis as JSON
2. Upload it on the FastComments import page and select **Cusdis (.json)**
3. Swap the Cusdis snippet with <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

{{/isPost}}

---