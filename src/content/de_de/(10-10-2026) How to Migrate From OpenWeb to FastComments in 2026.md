[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Wie man von OpenWeb zu FastComments im Jahr 2026 migriert[/postlink]

{{#unless isPost}}
Ein Feature‑für‑Feature‑Leitfaden für Publisher, die von OpenWeb (ehemals Spot.IM) umziehen: was 1:1 abgebildet wird, was anders ist, wie der CSV‑Import funktioniert, wie sich der SSO‑Handshake ändert und ein Schritt‑für‑Schritt‑Cutover‑Plan.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technisches Fachvokabular

Dieser Leitfaden richtet sich an Produkt‑ und Engineering‑Leads sowie Community‑Manager, die heute OpenWeb betreiben und einen Migrationsplan benötigen. Er geht jede OpenWeb‑Oberfläche durch, nennt das FastComments‑Äquivalent und sagt klar, wo es keine 1:1‑Übereinstimmung gibt.

### Warum jetzt

Am 30. September 2026 ordnete das Bezirksgericht Tel‑Aviv die Ernennung eines vorläufigen Empfängers für OpenWeb auf Antrag seines Kreditgebers Mars Growth Capital an, der ein vorrangiges Pfandrecht an den Vermögenswerten und Konten des Unternehmens hält und diese gegen die israelischen Vermögenswerte, Bankkonten und das geistige Eigentum von OpenWeb durchsetzen will (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Einen Tag später wurde ein vorläufiger Treuhänder, Adv. Ehud Gindes, ernannt (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). Anfang 2026 beendete Microsoft, einer der größten Kunden von OpenWeb, seine Zusammenarbeit und hielt Zahlungen wegen eines Traffic‑Streits zurück, den OpenWeb zurückweist (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb sagt, die Plattform sei weiterhin betriebsbereit. Gerichtliche Aufsicht, ein Kreditgeber, der Pfandrechte auf das IP, von dem Ihr Kommentar‑Widget abhängt, durchsetzt, und ein Treuhänder, dessen Aufgabe es ist, den Vermögenswert zu erhalten, sind keine Bedingungen, die ein Publisher unter einer Kern‑Engagement‑Oberfläche wünscht. Wenn Sie noch keinen vollständigen Datenexport durchgeführt haben, tun Sie das zuerst, noch heute, bevor Sie mit dem Rest dieses Leitfadens fortfahren.

### Was Sie benötigen, bevor Sie beginnen

Sammeln Sie diese Dinge, bevor Sie Code berühren:

- **Ihr OpenWeb‑Kommentar‑Export.** OpenWeb stellt eine Export‑API (v4) bereit, die gezippte CSV‑Dateien erzeugt, maximal 100 000 Kommentare pro Datei, mit Datumsfenstern von bis zu einem Monat und Download‑Links, die nach einer Woche ablaufen (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb‑Docs</a>). Fordern Sie jedes benötigte Fenster an und bewahren Sie die Dateien sicher auf. Wenn Ihr OpenWeb‑Kontakt in der Vergangenheit einen Admin‑Panel‑CSV‑Export bereitgestellt hat, behalten Sie diesen ebenfalls. Der FastComments‑Importer liest die OpenWeb‑CSV mit Spalten wie `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` und `url`.
- **Ihre Spot‑ID und die Liste der Beitrags‑IDs.** Jede `data-post-id`, die Sie dem Launcher übergeben, wird zu einer FastComments‑URL‑ID. Wenn Ihre Beitrags‑IDs CMS‑Artikel‑IDs sind, notieren Sie, wie sie generiert werden, damit Sie dieselben Werte auf der FastComments‑Seite ausgeben können.
- **Ihre SSO‑Benutzerliste.** Insbesondere die Werte `primary_key` und `user_name`, die Sie bei OpenWeb registriert haben. Die Autorenschaft von Kommentaren wird beim Import anhand des Benutzernamens abgeglichen, also sollten Sie dieselben Benutzernamen im FastComments‑SSO‑Payload übergeben.
- **Ihre Moderator‑Liste und Rollen.** Admin‑, Moderator‑ und Journalist‑Konten sowie welche Abschnitte jeder moderiert.
- **Ihre Moderations‑Konfiguration.** Site‑weite Richtlinie (alle genehmigen, veröffentlichen und moderieren, Genehmigung erforderlich), pro‑Artikel‑Überschreibungen, gesperrte Wortliste, stummgeschaltete und gesperrte Nutzer.
- **Benutzerdefiniertes CSS und Theme‑Einstellungen.** Exportieren Sie alles, was Sie im Admin‑Panel haben, damit Sie es in der FastComments‑Widget‑Anpassungsseite wiederaufbauen können.
- **Wo der Launcher in Ihren Templates lebt**, einschließlich aller Seiten, die Reactions, Topic Tracker, Spotlight, die Notification Bell oder eine Standalone‑Ad ohne Conversation ausführen.

### Wie OpenWeb‑Beitrags‑IDs zu FastComments‑URL‑IDs abgebildet werden

FastComments verknüpft einen Kommentar‑Thread mit einer `urlId`. Standardmäßig ist die URL‑ID die bereinigte Seiten‑URL, aber Sie können sie auf jede Zeichenkette setzen – genau das tut der OpenWeb‑Importer: Er liest die Spalte `post_id` und verwendet sie als FastComments‑URL‑ID für jeden Kommentar zu diesem Artikel. Außerdem speichert er die Spalte `url` als Anzeige‑URL, sodass Moderations‑Links und Benachrichtigungs‑E‑Mails auf die richtige Seite zeigen.

Die Regel für Ihre Templates lautet also: wo immer Sie `data-post-id="POST_ID"` und `data-post-url="ARTICLE_URL"` an OpenWeb übergeben haben, übergeben Sie `urlId: 'POST_ID'` und `url: 'ARTICLE_URL'` an FastComments. Importierte Threads stimmen exakt mit Live‑Threads überein, ohne Weiterleitungen und ohne URL‑Umschreibung. Siehe <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">die URL‑ID‑Dokumentation</a>.

Wenn Sie künftig Threads lieber nach URL statt nach Beitrags‑ID schlüsseln möchten, importieren Sie zuerst und nutzen dann das Tool „Migrate Comments“ unter „Manage Data“, um Threads in großen Mengen von der Beitrags‑ID zur URL zu verschieben.

### Die Feature‑Map

| OpenWeb | FastComments | Hinweise |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | Live by default. New comments collapse behind a "Show N New Comments" button, or appear instantly with `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | Import preserves `likes_count` and `dislikes_count`. Heart style and "disable voting" are config options. |
| Reactions (article-level icons) | Page Reacts | Configurable icon set on the page, remembered per user. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` caps nesting. See the import note on threads below. |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` sets the default per site or per URL pattern. |
| User profiles | User profiles | Avatar, bio, badges, karma, activity, DMs. Works for SSO users. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | Set in the SSO payload. No backend lookup call needed. |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | Moderators pin from the widget or dashboard. An AI agent template pins top-voted comments. |
| In Conversation Polls | Polls on comments | 2 to 10 options, close dates, privacy modes, creator restrictions. |
| Ask Me Anything formats | No dedicated product | Run as a thread with the author's SSO user labeled and the question pinned. |
| Live Blog | No 1:1 equivalent | Live Chat widget and chat-mode comments exist. Editorial live blogging stays in your CMS. |
| Topic Tracker (follow topics and authors) | Page subscriptions | Users follow a page, not a topic or author. No cross-article follow. |
| Notification Bell | Notification bell in the widget | Replies, mentions, thread activity, votes, subscriptions, badges, DMs. |
| Email notifications | Email notifications with templates | Per-user opt-in via SSO flags. Custom templates, branded sender. |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC-SHA256 payload) | No register-user call. Sign a payload server-side, pass it to the widget. |
| Third-party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | Same payload. Your backend signs it once the user is logged in. |
| Identity (OpenWeb registration screens) | Magic-link login, Simple SSO | Readers log in with an email link. No passwords. |
| Moderation policy per article | Customization rules per URL ID pattern | Approval mode, spam filter and more vary by `*/section/*` patterns. |
| Aida AI moderation | Spam classifiers, ChatGPT 4 option, image moderation, AI Agents | Agents start in dry run and can require human approval. |
| Restricted words | Word blacklist | ~450 default phrases, editable. |
| User muting | Block User | Per-reader block from the comment menu. |
| Bans | Bans | Permanent, timed, shadow, IP-hashed, plus-alias aware. |
| Moderation Panel | Moderate Comments dashboard | Filters, bulk actions with undo, moderation groups, digest emails with one-click approve. |
| Notification Webhook | Webhooks | Comment created, updated, deleted. No per-user notification webhook. |
| Engagement dashboard | Analytics | Live users online, top pages, page loads, comments, votes, accounts by day. No ad revenue reporting. |
| In-conversation ads, Standalone Ad | None | FastComments runs no ads. You keep your own ad stack around the widget. |
| Social Reviews (star ratings) | Ratings and Reviews | Separate product on the same account. |
| Popular in the Community | Recent Discussions and Top Pages widgets | Recirculation driven by comment activity. |
| Comment Counter | Comment count widgets | Single and bulk. |
| Export Comments API | CSV export, API, webhooks | Export from the dashboard any time. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com keeps data in the EU. DPA available. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | Native UI, SSO, live updates, threading, moderation actions. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` and `destroy()` for SPAs. |

Der Rest dieses Abschnitts geht jede Gruppe im Detail durch.

### Conversation, Votes and Reactions

OpenWebs Conversation ist ein Echtzeit‑Thread. Das FastComments‑Kommentar‑Widget ist das ebenfalls: Kommentare, Bearbeitungen, Löschungen, Stimmen und Moderations‑Aktionen werden an alle gesendet, die den Thread sehen (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">Docs</a>). Standardmäßig erscheinen neue Kommentare anderer Personen hinter einem „Show 2 New Comments“-Button, damit die Seite nicht unter dem Leser springt. Für Live‑Events setzen Sie `showLiveRightAway`, damit sie sofort gerendert werden, und `newCommentsToBottom`, wenn Sie möchten, dass sie wie ein Chat nach unten fließen.

Likes und Dislikes werden zu Up‑ und Down‑Votes. Der Import bewahrt beide Zähler pro Kommentar. Wenn Ihre Community nur ein einzelnes Like kennt, wechseln Sie im Widget‑Anpassungsmenü zum Herz‑Stil. Das Voting kann auch komplett deaktiviert werden.

OpenWeb Reactions ist ein separates Widget mit zwei bis vier beschrifteten Icons im Artikel (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb‑Docs</a>). Das FastComments‑Äquivalent heißt Page Reacts: ein konfigurierbarer Satz von Reaktions‑Bildern, die dem Kommentar‑Widget zugeordnet und pro Seite sowie pro Nutzer gespeichert werden (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">Docs</a>). Reaktions‑Zähler sind nicht Teil des OpenWeb‑Kommentar‑Exports, daher starten sie bei Null.

Sorting wird direkt abgebildet. OpenWebs `data-sort-by`‑Werte best, newest und oldest entsprechen Most Relevant, Newest First und Oldest First. Setzen Sie den Standard mit `defaultSortDirection` (`MR`, `NF`, `OF`) im Code oder in einer Anpassungs‑Regel. Leser können im Widget umschalten.

`data-read-only="true"` wird zu `readonly: true`, was neue Kommentare, Stimmen, Bearbeitungen und Löschungen blockiert. `data-post-staleness-days` hat keine direkte Entsprechung, aber eine Anpassungs‑Regel kann `readonly` auf ein URL‑ID‑Muster anwenden, und Sie können es auch basierend auf dem Alter des Artikels in Ihren Templates umschalten. `data-messages-count` ist die Seitengröße, die Sie in der Widget‑Anpassung von 10 bis 200 Kommentaren einstellen können.

### Replies and Threading

FastComments unterstützt standardmäßig unbegrenzte Verschachtelung; `maxReplyDepth` begrenzt sie (`1` ergibt eine flache Zweistufen‑Struktur). Die OpenWeb‑CSV enthält die Spalten `parent_id` und `parent_comment_id`. Der aktuelle Importer importiert jede Zeile als Top‑Level‑Kommentar auf seiner Seite, in chronologischer Reihenfolge, mit Autor, Zeitstempel, Stimmen, Meldungs‑Zähler und Genehmigungs‑Status intakt. Er baut den Eltern‑Kind‑Baum nicht wieder auf. Wenn Ihre Threads stark reply‑lastig sind, teilen Sie uns das beim Export mit – wir können das Threading beim Import erledigen, anstatt Ihnen einen abgeflachten Thread zu hinterlassen.

### User Profiles and Badges

FastComments‑Nutzer, einschließlich SSO‑Nutzer, erhalten ein Profil mit Avatar, Anzeigenamen, Bio, sozialen Links, Badges, Karma, Kommentar‑Zähler, öffentlichem Aktivitäts‑Feed und Direktnachrichten (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">Docs</a>). Jede dieser Oberflächen kann pro Nutzer im SSO‑Payload oder global in der Konfiguration deaktiviert werden.

OpenWebs Author Badge erfordert einen Aufruf von `GET /sso/v1/user/{primary_key}` für den Autor und das Einfügen der zurückgegebenen ID in `data-author-id`. In FastComments setzen Sie `displayLabel: 'Author'` (oder ein beliebiges Label bis zu 100 Zeichen) im SSO‑Payload und `isAdmin` bzw. `isModerator` für Teammitglieder. Das Label wird neben dem Namen bei jedem Kommentar angezeigt. Für ein umfangreicheres System konfigurieren Sie Badges unter „Customize → Badges“: Bild‑ oder Text‑Badges, die automatisch bei Erreichen von Schwellen (Kommentar‑Zähler, Up‑Votes, gepinnte Kommentare, Veteran‑Status, Antwort‑Geschwindigkeit) vergeben werden oder manuell, und per SSO‑Payload mit `badgeConfig` zuweisbar (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">Docs</a>).

### Pinned Comments, Polls and Q&A

Jeder Moderator kann einen Kommentar über das Kommentar‑Menü im Widget oder im Moderations‑Dashboard anpinnen oder loslösen. Angepinnte Kommentare werden live an alle im Thread gesendet. Wenn Sie das automatisieren wollen, liefert das AI‑Agents‑Feature eine „Top Comment Pinner“-Vorlage, die einen Top‑Level‑Kommentar anpinnt, sobald er einen Stimmen‑Schwellenwert überschreitet (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">Docs</a>).

OpenWebs In‑Conversation‑Polls erlauben es, einem Top‑Level‑Kommentar eine 2‑ bis 4‑Option‑Umfrage anzuhängen. FastComments‑Umfragen hängen ebenfalls an einen Kommentar, mit 2‑ bis 10‑Optionen, optionalem Enddatum, Ergebnis‑Privatsphäre (anonym, nur Admins, alle) und einem „Vote to see results“-Modus. Sie wählen, wer Umfragen erstellen darf (deaktiviert, Admins & Moderatoren, alle) und ob anonyme Leser abstimmen können. Umfragen werden auch über die öffentliche API bereitgestellt, um sie aus Ihrem CMS zu erzeugen.

OpenWeb hat Ask‑Me‑Anything‑Formate angeboten. FastComments hat kein separates Q&A‑Produkt. Der praktische Ersatz ist ein normaler Thread auf einer dedizierten URL‑ID: Der Gast‑SSO‑Nutzer trägt ein `displayLabel`, Sie pinnen den Einleitungs‑Kommentar, Leser stellen Fragen in Top‑Level‑Kommentaren, der Gast antwortet im Thread, und Erwähnungs‑ und Antwort‑Benachrichtigungen ziehen die Beteiligten zurück. Setzen Sie `noNewRootComments` nach Schließung des Fensters, sodass nur Antworten weitergehen.

Community Spotlight (OpenWebs E‑Mail‑Collector, Counter und Redirect‑Karten) hat kein Äquivalent. Das Widget unterstützt benutzerdefiniertes Header‑HTML über `headerHTML`, das einen Call‑to‑Action bietet, aber kein E‑Mail‑Capture‑Formular.

### Live Blog

Ein FastComments‑Live‑Blog gibt es nicht. OpenWebs Live‑Blog ist ein redaktionelles Produkt: Reporter, die im Admin‑Panel zugewiesen sind, posten Updates mit eingebetteten Links, Tweets und Videos, und Leser folgen dem Verlauf (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb‑Docs</a>).

Was FastComments für Live‑Berichterstattung bietet, ist die Leser‑Seite: ein Live‑Chat‑Widget (`embed-live-chat.min.js`) für Streaming‑Chat und das Kommentar‑Widget im Chat‑Modus (`showLiveRightAway` plus `newCommentsToBottom`) neben Ihrer Live‑Berichterstattung. Für die redaktionellen Updates selbst behalten Publisher, die von OpenWeb wegziehen, diese in ihrem CMS oder einem dedizierten Live‑Blog‑Tool und betten FastComments darunter für Diskussionen ein. Medien‑Embeds (YouTube, SoundCloud und andere) werden in Kommentaren unterstützt, sodass von Redakteuren gepostete Kommentare reichhaltige Medien enthalten können.

### Topic Tracker, Notifications and Email

OpenWebs Topic Tracker lässt einen Leser Themen und Autoren, die aus Seiten‑Metadaten gezogen werden, folgen und benachrichtigt werden, wenn neue Artikel passen (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb‑Docs</a>). FastComments hat kein Themen‑ oder Autoren‑Follow über Artikel hinweg. Leser abonnieren eine Seite über die Notification Bell und erhalten Updates für diesen Thread, mit einer Frequenz, die pro Abonnement gewählt wird: jede Minute, stündliche Zusammenfassung oder tägliche Zusammenfassung. Wenn Ihnen das cross‑article‑Following wichtig ist, verlieren Sie diese Funktion.

Alles andere in der Notification Bell wird abgebildet. Das Widget hat eine Glocke, die rot leuchtet mit der ungelesenen Anzahl und listet auf: Antworten an Sie, Antworten in einem Thread, in dem Sie kommentiert haben, Erwähnungen, Up‑Votes auf Ihre Kommentare, Aktivitäten auf abonnierten Seiten, Badge‑Auszeichnungen und Direktnachrichten (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">Docs</a>). In‑App‑Benachrichtigungen sind Echtzeit über WebSocket. Antwort‑ und Erwähnungs‑E‑Mails werden jede Minute für genehmigte Kommentare verschickt.

Für SSO‑Nutzer übergeben Sie `optedInNotifications` und `optedInSubscriptionNotifications` im Payload, und FastComments aktualisiert deren Präferenzen beim nächsten Seiten‑Load. E‑Mails benötigen eine E‑Mail‑Adresse im Payload. E‑Mail‑Vorlagen sind pro Typ und pro Locale editierbar unter „Customize → Email Templates“, und das Versenden von Ihrer eigenen Domain mit DKIM wird unterstützt. Moderatoren und Admins erhalten eine tägliche, wöchentliche oder monatliche Zusammenfassung mit Ein‑Klick‑Genehmigung, Antwort‑ und Spam‑Links.

OpenWebs Notification Webhook postet pro‑Nutzer‑Benachrichtigungs‑Events (`replied-message`, `liked-message`, `topic-by-keyword` usw.) zu Ihrem Endpunkt. FastComments‑Webhooks decken die Kommentar‑Ressource ab: erstellt, aktualisiert und entfernt, mit beliebig vielen abonnierenden Endpunkten (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">Docs</a>). Wenn Sie den Notification Webhook genutzt haben, um Ihr eigenes E‑Mail‑System zu speisen, bauen Sie die Logik auf Kommentar‑Events um oder lassen FastComments die E‑Mails senden.

### SSO: From codeA/codeB to a Signed Payload

OpenWebs Handshake besteht aus sechs Schritten: warten auf `spot-im-api-ready`, OpenWeb erzeugt `codeA`, Ihr Client sendet ihn an Ihr Backend, Ihr Backend bestätigt den Nutzer und ruft `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...` auf, OpenWeb gibt `codeB` zurück, und Ihr Client gibt `codeB` zurück an OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb‑Docs</a>). Logout ruft `window.SPOTIM.logout()` auf.

FastComments Secure SSO hat keinen Round‑Trip und keinen neuen Endpunkt auf Ihrer Seite. Wenn Sie die Seite für einen eingeloggten Nutzer rendern, serialisiert Ihr Backend den Nutzer, Base64‑kodiert ihn und signiert ihn mit HMAC‑SHA256 unter Verwendung Ihres API‑Secrets. Das Widget sendet das Payload mit seinen Anfragen und FastComments prüft die Signatur (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">Docs</a>). In Node:

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // same value you used as primary_key with OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // same user_name you registered with OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // optional, replaces the Author Badge lookup
        optedInNotifications: true
    };
    const userDataJSONBase64 = Buffer.from(JSON.stringify(user)).toString('base64');
    const timestamp = Date.now();
    const verificationHash = crypto
        .createHmac('sha256', process.env.FASTCOMMENTS_API_SECRET)
        .update(timestamp + userDataJSONBase64)
        .digest('hex');
    // Render into the page config:
    // sso: { userDataJSONBase64, verificationHash, timestamp,
    //        loginURL: 'https://example.com/login', logoutURL: 'https://example.com/logout' }
</div>

Der Zeitstempel ist in Millisekunden seit Epoch und wird verworfen, wenn er älter als zwei Tage ist. Für einen ausgeloggten Leser lassen Sie die drei signierten Felder weg und übergeben nur `loginURL` (oder eine `loginCallback`‑Funktion); das Widget zeigt stattdessen eine Login‑Aufforderung anstelle eines Editors. Voll funktionsfähige Beispiele in Node, Java und PHP finden Sie im <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">Code‑Beispiele‑Repository</a>.

Nutzer werden beim ersten Laden einer Seite erstellt. Sie registrieren niemanden im Batch. Da der OpenWeb‑Importer Kommentar‑Autoren anhand von `user_name` abgleicht, beansprucht ein Nutzer, dessen SSO‑Payload denselben `username` trägt, seine importierten Kommentare beim ersten Laden eines Threads und kann sie anschließend bearbeiten oder löschen. Es gibt zudem eine SSO‑User‑API, falls Sie Nutzer vorab anlegen wollen.

Jedes Mal, wenn das Payload gesendet wird, aktualisiert FastComments den Nutzer‑Datensatz daraus, sodass ein geänderter Anzeigename oder Avatar auf Ihrer Seite beim nächsten Seiten‑View erscheint. Setzen Sie ein Feld auf `null`, um es zu leeren.

Wenn Sie OpenWebs Drittanbieter‑SSO mit Auth0, Gigya oder Piano via `window.SPOTIM.startSSOForProvider` verwendet haben, ist der FastComments‑Flow derselbe wie oben: Sobald Ihr Provider den Nutzer authentifiziert hat, baut Ihr Backend das Payload und signiert es. Es gibt keine provider‑spezifische Integration, die auf der FastComments‑Seite konfiguriert werden muss.

Zwei weitere Optionen existieren. Simple SSO übergibt das Nutzer‑Objekt unsigniert vom Client, für Plattformen ohne Backend, und markiert Aktivitäten als verifiziert, wenn eine E‑Mail vorhanden ist (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">Docs</a>). SAML 2.0 signiert Ihr Personal im FastComments‑Dashboard selbst über Okta, Azure AD oder ADFS, mit Rollen‑Mapping, und ist in Enterprise‑Plänen verfügbar (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">Docs</a>).

### Moderation

OpenWebs per‑Artikel‑Moderations‑Policy‑API hat vier Werte: `spot_policy`, `approve_all`, `publish_and_moderate` und `require_approval`. FastComments konfiguriert das gleiche Verhalten in den Moderations‑Einstellungen: automatische Genehmigung an/aus, Genehmigung nur für den ersten Kommentar eines Nutzers, und Auto‑Genehmigung nur für verifizierte (eingeloggte oder SSO) Kommentare. Regeln gelten site‑weit oder für ein URL‑ID‑Muster wie `*/politics/*`, womit Sie Richtlinien pro Abschnitt reproduzieren. Jeder Kommentar, genehmigt oder nicht, landet im „Moderate Comments“-Dashboard, sodass das Publish‑then‑Review‑Modell die Standard‑Ansicht dort ist (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">Docs</a>).

Der Import übernimmt den Moderations‑Status. OpenWeb `message_status` von `approved` wird als genehmigt importiert, `rejected` als Spam und geprüft; alles andere wird ungeprüft importiert und erscheint in Ihrer Moderations‑Warteschlange. `reports_count` wird zum Meldungs‑Zähler des Kommentars.

Automatisierte Moderation bei FastComments ist geschichtet, nicht ein einzelnes System wie Aida:

- Ein Spam‑Classifier, kontinuierlich trainiert, verfügbar als gemeinsames Modell für alle Mandanten oder isoliert für Ihren Mandanten, mit einem Vertrauens‑Faktor, der das Filtern für langjährige oder häufig gepinnte Nutzer lockert.
- Optionaler ChatGPT 4‑Spam‑Check bei Flex‑Abrechnung.
- Bild‑Inhalts‑Moderation bei niedriger, mittlerer oder hoher Empfindlichkeit für hochgeladene Bilder.
- Eine Wort‑Blacklist von etwa 450 Standard‑Phrasen, editierbar, die Treffer mit Sternchen maskiert. Hier kommen Ihre OpenWeb‑eingeschränkten Wörter hin.
- Meldungs‑Schwellen, die einen Kommentar nach N Meldungen automatisch ausblenden.
- Wiederholungs‑ und Near‑Duplicate‑Nachrichten‑Verhinderung, immer aktiv.
- AI‑Agents: ereignisgesteuerte Agenten mit expliziter Tool‑Allowlist (Mark Spam, Approve, Lock, Pin, Warn via DM, Ban, Award Badge, Reply). Jeder Agent startet im Dry‑Run, sensible Tools können hinter menschlicher Genehmigung liegen, und jede Aktion wird mit Begründung und Vertrauens‑Score protokolliert.

OpenWebs User‑Muting‑API lässt einen SSO‑Leser einen anderen stummschalten. Das FastComments‑Äquivalent ist „Block User“ im Kommentar‑Menü, verfügbar für jeden eingeloggten Leser. Bans sind eine Moderator‑Aktion: permanent oder für eine festgelegte Dauer, optional ein Shadow‑Ban (der Nutzer sieht seinen Kommentar, niemand sonst), optional nach gehashtem IP, plus‑Alias‑aware (eine E‑Mail‑Adresse wird als ein Alias behandelt). Die Liste gesperrter Nutzer ist durchsuchbar nach E‑Mail, Name, Moderator und dem Kommentar, der den Ban ausgelöst hat.

Das „Moderate Comments“-Dashboard unterstützt Filter (Review nötig, Genehmigung nötig, Spam, gemeldet, von gesperrten Nutzern) und Textsuche, Bulk‑Aktionen mit Undo und Pause, „Select all matching“ für sehr große Warteschlangen, Moderations‑Gruppen, sodass Ihr Sport‑Desk nur Sport‑Threads sieht, pro‑Kommentar‑Logs, die zeigen, warum eine E‑Mail gesendet wurde oder nicht, und teilbare gefilterte Links. Moderatoren haben nur das Dashboard; sie können keine Einstellungen ändern oder Daten importieren.

### Analytics

FastComments‑Analytics zeigt Nutzer, die gerade online sind, über Ihre Sites und pro Seite, Top‑Seiten nach Kommentaren oder nach Live‑Lesern, und Tages‑Serien für Seiten‑Aufrufe, Kommentare, Stimmen und erstellte Konten (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">Docs</a>). Moderator‑Statistiken sind separat. Zähler sind nahezu Echtzeit, maximal eine Minute verzögert, und jeder Seiten‑Aufruf wird gezählt, nicht gestichprobenartig.

Was Sie nicht finden, sind Angaben zu Anzeigen‑Füllrate, CPM oder Umsatz, weil es keine Anzeigen gibt. Wenn das OpenWeb‑Dashboard Ihre Quelle für Engagement‑zu‑Umsatz‑Berichte war, verlagert sich diese Berichterstattung zu Ihrem eigenen Ad‑Stack.

### Monetization

OpenWeb platziert Anzeigen innerhalb und um die Conversation und bietet ein Standalone‑Ad‑Element, mit Kampagnen, die über Ihren OpenWeb‑Kontakt eingerichtet werden (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb‑Docs</a>). FastComments schaltet keine Anzeigen im Widget, teilt keinen Umsatz und lädt keine Drittanbieter‑Ad‑ oder Tracking‑Skripte. Das Widget ist ein iframe, das Sie einbetten; die Anzeigen‑Slots darüber und darunter gehören Ihnen und laufen über das, was Sie bereits nutzen.

Der Trade‑off ist klar: Sie verlieren, was OpenWeb Ihnen gezahlt hat, und erhalten dafür feste, vorhersehbare Kosten und ein Widget, das keine Anzeigen‑Requests zu Ihrer Seite hinzufügt. Branding wird bei Flex‑ und Pro‑Plänen entfernt, und White‑Label‑Optionen gibt es bei Pro‑ und Enterprise‑Plänen.

### Data Export and Privacy

Alle Kommentar‑Daten können jederzeit aus dem FastComments‑Dashboard als CSV exportiert werden, mit Datumsangaben im UTC‑ISO‑Format, und dieselben Daten stehen über die API zur Verfügung. Webhooks decken die fortlaufende Synchronisation ab. Import‑Dateien werden aus FastComments gelöscht, sobald der Import abgeschlossen ist.

Für GDPR und CCPA bietet OpenWeb eine Export‑ und Delete‑API, bei der gelöschte Nutzer‑Kommentare an ein zufälliges Gast‑Konto angehängt bleiben (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb‑Docs</a>). FastComments unterstützt Datenexport‑ und Lösch‑Anfragen, bietet ein Data Processing Agreement und betreibt eine separate EU‑Bereitstellung unter <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> mit Daten, die ausschließlich innerhalb der EU‑Points‑of‑Presence repliziert werden. Erstellen Sie dort Ihr Konto, wenn Ihre Leser in Europa sind. In der EU‑Region erfordern AI‑Agent‑Bans immer eine menschliche Genehmigung, um DSA‑Artikel 17 zu erfüllen.

Kommentar‑Daten in der globalen Bereitstellung werden über Regionen hinweg repliziert, inklusive eines Singapore‑Knotens, und das Widget wird von FastComments eigenem DNS und CDN ausgeliefert. Das Embed‑Script ist unter 30 KB auf der Festplatte und etwa 6 KB komprimiert im Transfer.

### Mobile SDKs

OpenWeb liefert Android, iOS und React Native‑SDKs mit Conversation, Articles, Authentication, Notifications, Reactions und In‑Conversation‑Polls. FastComments liefert native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>-, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a>- und <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a>-Bibliotheken mit verschachtelten Kommentaren, Live‑Updates über WebSocket, Secure SSO, Voting, Mentions, Bild‑Uploads, Moderations‑Aktionen (Flag, Pin, Lock, Block), Theming, einem Live‑Chat‑Modus und einer Social‑Feed‑Komponente. Die EU‑Region ist ein Konfigurations‑Flag. Es gibt kein separates Ad‑SDK, weil es keine Anzeigen gibt.

### Embed and SPA Integration

Der OpenWeb‑Launcher und Container:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

Das FastComments‑Äquivalent:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID',
            urlId: 'POST_ID',        // was data-post-id
            url: 'ARTICLE_URL',      // was data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

Ihre Tenant‑ID finden Sie auf der <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">Embed‑Code‑Seite</a>, sobald Sie ein Konto haben. `data-article-tags` hat keine Entsprechung, da es kein Topic‑Following gibt; Hashtags in Kommentaren sind ein separates Feature.

Für Infinite‑Scroll und Single‑Page‑Apps ist OpenWebs Virtual‑Pages‑Ansatz ein Container pro Artikel. In FastComments rufen Sie `FastCommentsUI(element, config)` pro Thread auf und später `instance.update(newConfig)`, um die URL‑ID zu wechseln, oder `instance.destroy()`, um sie zu entfernen (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">Docs</a>). Die React‑, Vue‑, Angular‑ und SolidJS‑Bibliotheken übernehmen das, wenn sich das Config‑Prop ändert. Lifecycle‑Callbacks (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) ersetzen die `spot-im-*`‑DOM‑Events, die Sie zuvor abgehört haben.

Kommentar‑Zähler auf Index‑Seiten nutzen das Kommentar‑Zähler‑Widget, einzeln oder im Batch. Für SEO werden Kommentare direkt in die Seite gerendert für Suchmaschinen‑Crawler, nicht im iframe, sodass es keinen SEO‑API‑Aufruf zur Konfiguration gibt.

### Step-by-Step Cutover

**1. Erstellen Sie das Konto und konfigurieren Sie die Grundlagen.** Registrieren Sie sich auf fastcomments.com oder eu.fastcomments.com. Legen Sie Ihre Moderations‑Einstellungen, Wort‑Blacklist, Vote‑Stil, Standard‑Sortierung und benutzerdefiniertes CSS in der Widget‑Anpassungsseite fest. Fügen Sie Moderatoren und Moderations‑Gruppen hinzu. Wenn Sie viele Admin‑Nutzer haben, unterstützen wir den Import für Sie.

**2. Führen Sie den ersten Import aus.** Gehen Sie zu <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, wählen Sie OpenWeb (.csv) und laden Sie die Datei hoch. Der Import läuft als Hintergrund‑Job; die Seite zeigt Zeilen‑Zähler und Status, und Sie erhalten eine E‑Mail, wenn er fertig ist (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">Docs</a>). Jede OpenWeb‑Message‑ID wird zur FastComments‑Kommentar‑ID, sodass ein erneuter Import keine Duplikate erzeugt.

**3. Verifizieren Sie die Zähler.** Vergleichen Sie den Zeilen‑Zähler des Jobs mit Ihrem Export. Öffnen Sie ein paar hoch‑frequentierte URL‑IDs im Moderations‑Dashboard und prüfen Sie Stichproben von Autoren, Daten, Stimmen‑Summen und Genehmigungs‑Status. Bestätigen Sie, dass abgelehnte Kommentare als Spam angezeigt werden und ausstehende in der Warteschlange liegen.

**4. Bauen Sie das SSO‑Payload.** Implementieren Sie den Signatur‑Code oben in Ihrem Backend, mit demselben `id` und `username`, das Sie bei OpenWeb verwendet haben. Testen Sie mit einem Staff‑Konto auf einer Staging‑Seite: die importierten Kommentare erscheinen als deren eigene, und Bearbeiten/Löschen erscheinen im Kommentar‑Menü.

**5. Tauschen Sie das Embed in einer Staging‑Template aus.** Ersetzen Sie den Launcher und Container durch das FastComments‑Snippet, map `data-post-id` zu `urlId` und `data-post-url` zu `url`. Entfernen Sie `window.SPOTIM.logout()` und `spot-im-*`‑Listener oder map‑en Sie sie zu den Callbacks. Setzen Sie Ihr CSS in einer Anpassungs‑Regel statt im Code, damit es bei jedem FastComments‑Release getestet wird.

**6. Parallelbetrieb.** Setzen Sie FastComments auf einem Abschnitt oder einem Prozentsatz der Artikel ein, während OpenWeb den Rest bedient. Auf der OpenWeb‑Seite muss nichts geändert werden. Beobachten Sie die Moderations‑Warteschlange und die Analytics‑Seite. Kommentare, die während dieses Fensters auf FastComments‑Seiten geschrieben werden, sind nicht in Ihrem OpenWeb‑Export, also planen Sie den finalen Import, bevor sie beginnen, nicht danach.

**7. CSP und DNS.** Wenn Sie eine Content‑Security‑Policy nutzen, erlauben Sie `cdn.fastcomments.com` und `fastcomments.com` (oder `eu.fastcomments.com`) für `script-src`, `frame-src` und `connect-src`, und entfernen Sie die `spot.im`‑ und `openweb.com`‑Einträge, sobald der Launcher weg ist. An Ihrem eigenen DNS ändert sich nichts. Weiterleitungen sind nicht nötig, weil die URL‑IDs übereinstimmen.

**8. Finaler Import und Go‑Live.** Holen Sie einen letzten OpenWeb‑Export, der das Parallel‑Run‑Fenster abdeckt, laden Sie ihn hoch (Re‑Import ist sicher), dann deployen Sie die Template‑Änderung auf allen Seiten und entfernen den Launcher, Reactions, Topic Tracker, Spotlight, Bell und Ad‑Container.

**9. Go‑Live‑Checkliste.**

- Live‑Commenting auf einem Produktions‑Artikel in zwei Browsern sichtbar.
- SSO‑Login, Logout und ein Kommentar unter einem echten Abonnenten‑Konto.
- Moderatoren erhalten die Digest und können daraus genehmigen.
- Antwort‑ und Erwähnungs‑E‑Mails kommen an und verlinken zur richtigen Seite.
- Ban‑Liste und Wort‑Blacklist gefüllt.
- Page Reacts und Kommentar‑Zähler rendern dort, wo früher Reactions und der Counter waren.
- CSP‑Reports sauber.
- Letzter Kommentar‑Zähler‑Vergleich zwischen Ihrem Export und dem Dashboard.

### What You Lose and What Is Different

Direkt zu den Lücken:

- **Live Blog.** Keine Entsprechung. Behalten Sie ihn in Ihrem CMS oder einem Live‑Blog‑Tool und betten Sie FastComments darunter ein.
- **Topic Tracker.** Kein cross‑article Topic‑ oder Author‑Following. Nur Page‑Subscriptions.
- **Community Spotlight.** Kein CTA‑Karten‑Produkt. `headerHTML` gibt Ihnen eine Nachricht über dem Composer, aber kein E‑Mail‑Capture.
- **Ad revenue.** Keine. Das Widget ist von Grund auf werbefrei.
- **Notification webhook.** Webhooks betreffen Kommentar‑Events, nicht per‑User‑Benachrichtigungs‑Events.
- **Threading on import.** Der aktuelle Importer flacht Replies zu Top‑Level‑Kommentaren auf derselben Seite ab. Sagen Sie uns Bescheid, wenn Sie den Baum wiederaufbauen wollen.
- **Reactions history.** Artikel‑level‑Reaktions‑Zähler sind nicht im Kommentar‑Export und starten bei Null.
- **Polls history.** Umfrage‑Definitionen und Stimmen sind nicht im Kommentar‑Export; der Umfrage‑Kommentar‑Text wird importiert, die Umfrage selbst nicht.
- **Login model.** Leser ohne SSO loggen sich per Magic‑Link ein, nicht per Passwort oder Social‑Login‑Button.
- **Human moderation staff.** OpenWeb liefert ein Moderations‑Team mit Aida. FastComments stellt Werkzeuge, Klassifizierer und Agenten bereit; die Menschen sind bei Ihnen.

Was Sie gewinnen, im gleichen Geist: ein Widget, das nur ein kleines Skript hinzufügt und keine Werbeanfragen, Moderation, die eine Person für eine große Site mit Bulk‑Aktionen und Agenten betreiben kann, SSO, das eine Signatur‑Funktion statt eines Protokolls ist, und ein Anbieter, der nicht unter gerichtlicher Aufsicht steht.

### Timeline and the Free Import Offer

Planen Sie ein bis zwei Wochen für einen Publisher mit einer SSO‑Integration und ein paar hunderttausend Kommentaren: ein bis zwei Tage für den Export und den ersten Import, ein paar Tage für SSO und Templates, ein Parallel‑Run‑Fenster, dann der finale Import und Switch. Die Plattform hat dieses Maß bereits: United Cloud betreibt mehr als zehn Portale und Millionen von Kommentaren mit FastComments, und itsfoss.com migrierte eine 88 000‑Kommentar‑Historie von einem anderen Anbieter über denselben Self‑Service‑Importer.

FastComments importiert Ihren OpenWeb‑CSV‑Export kostenlos, hilft Ihnen, OpenWeb und FastComments parallel während des Cutovers zu betreiben, und unterstützt Sie bei der Migration selbst, inklusive Threading‑ und Nutzer‑Matching‑Fragen. Enterprise‑Pläne beinhalten ein SLA, Support‑Antworten innerhalb einer Stunde während der Geschäftszeiten, und die Option einer Isolated‑Cloud‑Bereitstellung in Ihrem eigenen Cloud‑Account (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">Docs</a>). Flex‑Nutzungs‑basierte Preisgestaltung ist für Sites verfügbar, die ohne Vertrag starten wollen.

Schreiben Sie an <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> mit Ihrer Export‑Größe und Ihrer SSO‑Konfiguration, und wir kommen mit einem Plan zurück.

### In Conclusion

Ziehen Sie noch heute Ihren Export. Der Rest der Migration ist mechanisch: dieselben Beitrags‑IDs werden zu URL‑IDs, dieselben Benutzernamen beanspruchen ihre Kommentare über SSO, der Moderations‑Status wird übernommen, und das Embed ist ein direkter Austausch. Die Stellen, an denen FastComments abweicht, sind oben aufgelistet, sodass Sie mit Fakten entscheiden können.

Cheers!{{/isPost}}

---