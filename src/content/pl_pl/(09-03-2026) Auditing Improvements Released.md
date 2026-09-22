[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Ulepszenia audytu wydane[/postlink]

{{#unless isPost}}
The audit log now shows who or what each event affected by name, and you can search on it. There's also now date range, sub-tenant search, field-level diffs on updates, and matching API filters.
{{/unless}}

{{#isPost}}

### Co nowego

The audit log has always recorded who performed an action and what it was performed on. This release is about making that
record readable and searchable without leaving the page.

If you wanted to know what happened to a particular moderator, you first had to find their ID, and if that
moderator had since been removed, there was nothing left to look the ID up against. The event said something was deleted,
by whom, and when, but for some reasoures the names were missing.

Now the name is captured alongside the ID at the moment of the event, so it survives the delete and you can search on it.

### Kolumna **Affected**

There's a new **Affected** column in the table showing the person or object the event acted on, by name. For a person it
reads like `jsmith (jsmith@example.com)`. For a widget customization or a moderation group it's the name you gave it. For a
media file it's the filename you uploaded.

Above the table there's a matching search box, **Who or what was changed**. Type a name, an email address, or an ID, and it
finds events affecting that person or object. You don't have to know which of the three you have, and you don't have to look
up an internal ID first.

Events written before this release don't have a name attached, but they still have the ID they always had, so the same
search box finds them by ID.

### Zakres dat

The filter row now has a **Date Range** dropdown with Last 30 Days, Last 90 Days, Last Year, All Time, and **Custom range**,
which reveals From and To date pickers.

A date range is by far the easiest way to narrow a search, and pairing one with the other filters is the fastest way
to find something.

### Konta zarządzane

If your account manages other tenants, there's an **Include sub-tenants** checkbox. Checking it searches your account and
every tenant it manages in one pass, with a **Tenant** column showing which account each event came from.

Until now each tenant's log could only be read on its own, so answering "did anyone touch any of our properties this week"
meant switching into each one in turn.

### Aktualizacje teraz rejestrują, co się zmieniło

Editing a team member used to record the resulting set of permissions. That tells you what the permissions are now, but not
what they were, so "who removed this person's billing access, and when" was unanswerable.

Update events now include a `changes` map of just the fields that actually changed, each with its previous and new value.
Unchanged fields are left out, so a permission change reads as one line rather than a wall of booleans.

### Opisy i urządzenie stojące za zmianą

Destructive events now carry a plain sentence describing what happened, like "Removed user from the account." Page views had
descriptions and deletes did not, which was backwards.

Events that change something also record the browser that made the change. Sessions are recorded as a hash so one person's actions can be
correlated without the log storing anything that could be replayed.

### Inne ulepszenia

- Some fixes with pagination and filter combinations.
- Login events showed a blank **Who** column. The username was in the record the whole time and the page wasn't reading it.
- The action column rendered login events as N/A, because Login was missing from the list of action names.
- Audit log pages could not name SSO users, showing "Missing User" instead. They're now resolved properly.
- The page is much faster on accounts with long histories.

### Dla API

The `/api/v1/audit-logs` endpoint gained matching filters: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target`
for the substring search, and `includeManagedTenants`. Responses now include `targetId`, `targetLabel` and `ua`.

Two changes worth noting if you already call this endpoint. `before` now works on its own, where previously it was ignored
unless you also passed `after`. And `limit` is now capped at 10k, where before it had no ceiling. The default is unchanged
at 1k.

### Dokumentacja

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">Przewodnik po API AuditLogs</a> covers the
new query parameters, and <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">the
AuditLog structure reference</a> covers the new fields.

If you haven't used the audit log before, [the original release post](/(3-21-2022)-audit-log-released.html) walks through
where it lives, who can read it, and how long entries are kept. All of that is unchanged.

### Podsumowanie

We're glad we can continue to improve FastComments.
If you go looking for something in your log and can't find it, tell us below.

Cheers!

{{/isPost}}

---