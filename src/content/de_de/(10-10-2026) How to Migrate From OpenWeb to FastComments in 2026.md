[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Wie man von OpenWeb zu FastComments im Jahr 2026 migriert[/postlink]

{{#unless isPost}}
Ein Feature‑für‑Feature Leitfaden für Publisher, die von OpenWeb (ehemals Spot.IM) umziehen: was 1:1 abgebildet wird, was anders ist, wie der CSV‑Import funktioniert, wie sich der SSO‑Handshake ändert und ein Schritt‑für‑Schritt Cutover‑Plan.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technisches Fachjargon

### Warum jetzt

Am 30. September 2026 hat das Bezirksgericht Tel Aviv die Bestellung eines vorläufigen Empfängers über OpenWeb auf Antrag seines Kreditgebers Mars Growth Capital angeordnet, der ein vorrangiges Pfandrecht an den Vermögenswerten und Konten des Unternehmens hält und beabsichtigt, es gegen die israelischen Vermögenswerte, Bankkonten und das geistige Eigentum von OpenWeb durchzusetzen (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Ein vorläufiger Treuhänder, Adv. Ehud Gindes, wurde am folgenden Tag bestellt (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). Früher im Jahr 2026 beendete Microsoft, einer der größten Kunden von OpenWeb, seine Zusammenarbeit und hielt Zahlungen wegen eines Traffic‑Streits zurück, den OpenWeb zurückweist (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb sagt, die Plattform läuft weiter. Gerichtliche Aufsicht, ein Kreditgeber, der Pfandrechte auf das geistige Eigentum Ihres Kommentar‑Widgets durchsetzt, und ein Treuhänder, dessen Aufgabe es ist, den Vermögenswert zu erhalten, sind keine Bedingungen, die Sie als Publisher für eine Kern‑Engagement‑Oberfläche wollen. Wenn Sie noch keinen vollständigen Datenexport durchgeführt haben, tun Sie das zuerst, noch heute, bevor Sie irgendetwas anderes in diesem Leitfaden angehen.

### Was Sie benötigen, bevor Sie beginnen

Sammeln Sie diese Dinge, bevor Sie Code berühren:

- **Ihr OpenWeb‑Kommentar‑Export.** OpenWeb stellt eine Export‑API (v4) bereit, die gezippte CSV‑Dateien erzeugt, höchstens 100 000 Kommentare pro Datei, mit Datums‑Fenstern von bis zu einem Monat und Download‑Links, die nach einer Woche ablaufen (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Fordern Sie jedes benötigte Fenster an und bewahren Sie die Dateien sicher auf. Wenn Ihr OpenWeb‑Kontakt in der Vergangenheit einen Admin‑Panel‑CSV‑Export bereitgestellt hat, behalten Sie diesen ebenfalls. Der FastComments‑Importer liest die OpenWeb‑CSV mit Spalten wie `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` und `url`.
- **Ihre Spot‑ID und die Liste der Beitrags‑IDs.** Jede `data-post-id`, die Sie dem Launcher übergeben, wird zu einer FastComments‑URL‑ID. Wenn Ihre Beitrags‑IDs CMS‑Artikel‑IDs sind, notieren Sie, wie sie generiert werden, damit Sie dieselben Werte auf der FastComments‑Seite ausgeben können.
- **Ihre SSO‑Benutzerliste.** Insbesondere die Werte `primary_key` und `user_name`, die Sie bei OpenWeb registriert haben. Die Autorenschaft von Kommentaren wird beim Import anhand des Benutzernamens abgeglichen, also übergeben Sie dieselben Benutzernamen im FastComments‑SSO‑Payload.
- **Ihre Moderator‑Liste und Rollen.** Admin‑, Moderator‑ und Journalist‑Konten sowie welche Abschnitte jeder moderiert.
- **Ihre Moderations‑Konfiguration.** Seitenweite Richtlinie (alle genehmigen, veröffentlichen und moderieren, Genehmigung erforderlich), pro‑Artikel‑Überschreibungen, eingeschränkte Wortliste, stummgeschaltete und gesperrte Benutzer.
- **Benutzerdefiniertes CSS und Theme‑Einstellungen.** Exportieren Sie alles, was Sie im Admin‑Panel haben, damit Sie es in der FastComments‑Widget‑Anpassungsseite wiederaufbauen können.
- **Wo der Launcher in Ihren Templates lebt**, einschließlich aller Seiten, die Reactions, Topic Tracker, Spotlight, die Notification Bell oder eine Standalone‑Ad ohne Conversation ausführen.

### KI‑unterstützte Migration

FastComments stellt ein [LLM Kit und MCP‑Server bereit, um die Migration zu beschleunigen](https://docs.fastcomments.com/guide-llm-kit.html).

### Wie OpenWeb‑Beitrags‑IDs zu FastComments‑URL‑IDs abgebildet werden

FastComments verknüpft einen Kommentar‑Thread mit einer `urlId`. Standardmäßig ist die URL‑ID die bereinigte Seiten‑URL, aber Sie können sie auf jede Zeichenkette setzen – genau das tut der OpenWeb‑Importer: Er liest die Spalte `post_id` und verwendet sie als FastComments‑URL‑ID für jeden Kommentar zu diesem Artikel. Außerdem speichert er die Spalte `url` als Anzeige‑URL, sodass Moderations‑Links und Benachrichtigungs‑E‑Mails auf die richtige Seite zeigen.

Die Regel für Ihre Templates lautet also: wo Sie `data-post-id="POST_ID"` und `data-post-url="ARTICLE_URL"` an OpenWeb übergeben haben, übergeben Sie `urlId: 'POST_ID'` und `url: 'ARTICLE_URL'` an FastComments. Importierte Threads stimmen exakt mit Live‑Threads überein, ohne Weiterleitungen und ohne URL‑Umschreibung. Siehe <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">die URL‑ID‑Dokumentation</a>.

Wenn Sie künftig Threads lieber nach URL statt nach Beitrags‑ID schlüsseln wollen, importieren Sie zuerst und nutzen dann das Tool „Migrate Comments“ unter „Manage Data“, um Threads in großen Mengen von der Beitrags‑ID zur URL zu verschieben.

### Die Funktions‑Übersicht

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Hinweise |
| --- | --- | --- |
| Konversation mit Echtzeit‑Updates | Kommentar‑Widget mit Live‑Kommentaren | Live standardmäßig. Neue Kommentare werden hinter einem „Show N New Comments“-Button zusammengeklappt, oder erscheinen sofort mit `showLiveRightAway`. |
| Likes und Dislikes bei Kommentaren | Up‑ und Down‑Votes | Import bewahrt `likes_count` und `dislikes_count`. Herz‑Stil und „disable voting“ sind Konfigurations‑Optionen. |
| Reactions (Artikel‑Level‑Icons) | Page Reacts | Konfigurierbares Icon‑Set auf der Seite, pro Nutzer gespeichert. |
| Antworten und Threading | Threaded replies, unbegrenzte Tiefe | `maxReplyDepth` begrenzt die Verschachtelung. |
| Sortierung: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` legt die Vorgabe pro Site oder pro URL‑Muster fest. |
| Nutzerprofile | Nutzerprofile | Avatar, Bio, Badges, Karma, Aktivität, DMs. Funktioniert für SSO‑Nutzer. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, Badges | Im SSO‑Payload setzen. Kein Backend‑Lookup nötig. |
| Angeheftete Live‑Blog‑Updates, hervorgehobene Kommentare | Pin und Unpin bei jedem Kommentar | Moderatoren pinnen aus dem Widget oder Dashboard. Ein KI‑Agent‑Template pinnt top‑votete Kommentare. |
| In‑Conversation‑Umfragen | Umfragen zu Kommentaren | 2‑10 Optionen, Abschlussdaten, Datenschutz‑Modi, Ersteller‑Beschränkungen. |
| Ask Me Anything‑Formate | Kein dediziertes Produkt | Als Thread mit dem SSO‑Nutzer des Autors gekennzeichnet und Frage angeheftet ausführen. |
| Live Blog | Kein 1:1‑Äquivalent | Live‑Chat‑Widget und Chat‑Mode‑Kommentare existieren. Redaktionelles Live‑Blogging bleibt im CMS. |
| Topic Tracker (Themen & Autoren folgen) | Page‑Subscriptions | Nutzer folgen einer Seite, nicht einem Thema oder Autor. Kein cross‑Artikel‑Follow. |
| Notification Bell | Notification‑Bell im Widget | Antworten, Erwähnungen, Thread‑Aktivität, Votes, Subscriptions, Badges, DMs. |
| E‑Mail‑Benachrichtigungen | E‑Mail‑Benachrichtigungen mit Vorlagen | Pro‑Nutzer‑Opt‑In via SSO‑Flags. Eigene Vorlagen, gebrandeter Absender. |
| SSO‑Handshake (codeA/codeB) | Secure SSO (HMAC‑SHA256‑Payload) | Kein register‑user‑Call. Signieren Sie ein Payload serverseitig und übergeben Sie es dem Widget. |
| Drittanbieter‑SSO (Auth0, Gigya, Piano) | Secure SSO nach Authentifizierung Ihres Providers | Gleiches Payload. Ihr Backend signiert es, sobald der Nutzer eingeloggt ist. |
| Identity (OpenWeb‑Registrierungs‑Screens) | Magic‑link‑Login, Simple SSO | Leser loggen sich per E‑Mail‑Link ein. Keine Passwörter. |
| Moderations‑Richtlinie pro Artikel | Anpassungs‑Regeln pro URL‑ID‑Muster | Genehmigungs‑Modus, Spam‑Filter und mehr variieren nach `*/section/*`‑Muster. |
| Aida KI‑Moderation | Spam‑Klassifikatoren, LLM‑basierte Filter, Bild‑Moderation, KI‑Agents | Agents starten im Trockenlauf und können menschliche Genehmigung erfordern. |
| Eingeschränkte Wörter | Wort‑Blacklist anpassbar nach Locale | ~450 Standard‑Phrasen, editierbar. |
| Nutzer‑Stummschaltung | Block User | Pro‑Leser‑Block aus dem Kommentar‑Menü. |
| Sperren | Bans | Permanent, zeitlich, Schatten‑Ban, IP‑gehasht, plus‑Alias‑aware. |
| Moderations‑Panel | Moderate Comments‑Dashboard | Filter, Massen‑Aktionen mit Undo, Moderations‑Gruppen, Digest‑E‑Mails mit 1‑Click‑Approve. |
| Notification Webhook | Webhooks | Kommentar erstellt, aktualisiert, gelöscht. Kein per‑User‑Notification‑Webhook. |
| Engagement‑Dashboard | Analytics | Live‑Nutzer online, Top‑Seiten, Seiten‑Loads, Kommentare, Votes, Accounts pro Tag. Keine Anzeigen‑Umsatz‑Berichte. |
| In‑Conversation‑Ads, Standalone‑Ad | Keine | FastComments schaltet keine Ads. Sie behalten Ihren eigenen Ad‑Stack um das Widget herum. |
| Social Reviews (Sterne‑Bewertungen) | Ratings and Reviews | Separates Produkt im selben Account. |
| Popular in the Community | Recent Discussions und Top‑Pages‑Widgets | Wiederverwendung getrieben durch Kommentar‑Aktivität. |
| Kommentar‑Zähler | Kommentar‑Zähler‑Widgets | Einzel‑ und Massen‑Widgets. |
| Export Comments API | CSV‑Export, API, Webhooks | Export jederzeit vom Dashboard. |
| Export und Delete User Data (GDPR/CCPA) | Konto‑ und Datenlöschung, EU‑Region | eu.fastcomments.com hält Daten in der EU. DPA verfügbar. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | Native UI, SSO, Live‑Updates, Threading, Moderations‑Aktionen. |
| Launcher, Virtual Pages, React SDK | Embed‑Script, `fcConfigs`, React, Vue, Angular, SolidJS‑Bibliotheken | `update()` und `destroy()` für SPAs. |

</div>

Der Rest dieses Abschnitts behandelt jede Gruppe im Detail.

### Konversation, Votes und Reactions

OpenWebs Conversation ist ein Echtzeit‑Thread. Das FastComments‑Kommentar‑Widget ist das ebenfalls: Kommentare, Bearbeitungen, Löschungen, Votes und Moderations‑Aktionen werden an alle gesendet, die den Thread sehen (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Standardmäßig erscheinen neue Kommentare anderer Personen hinter einem „Show 2 New Comments“-Button, damit die Seite nicht unter dem Leser springt. Für Live‑Events setzen Sie `showLiveRightAway`, damit sie sofort gerendert werden, und `newCommentsToBottom`, wenn Sie wollen, dass sie nach unten fließen wie ein Chat.

Likes und Dislikes werden zu Up‑ und Down‑Votes. Der Import bewahrt beide Zähler pro Kommentar. Wenn Ihre Community nur ein Like kennt, wechseln Sie im Widget‑Anpassungs‑Panel zum Herz‑Stil. Voting kann auch komplett deaktiviert werden.

OpenWeb Reactions ist ein separates Widget mit zwei bis vier beschrifteten Icons im Artikel (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). Das FastComments‑Äquivalent heißt Page Reacts: ein konfigurierbares Set von Reaktions‑Bildern, das dem Kommentar‑Widget angehängt ist und pro Seite und pro Nutzer gespeichert wird (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Reaktions‑Zähler sind nicht Teil des OpenWeb‑Kommentar‑Exports, daher starten sie bei Null.

Die Sortierung mappt direkt. OpenWebs `data-sort-by`‑Werte best, newest und oldest entsprechen Most Relevant, Newest First und Oldest First. Setzen Sie die Vorgabe mit `defaultSortDirection` (`MR`, `NF`, `OF`) im Code oder in einer Anpassungs‑Regel. Leser können im Widget umschalten.

`data-read-only="true"` wird zu `readonly: true`, was neue Kommentare, Votes, Bearbeitungen und Löschungen blockiert. `data-post-staleness-days` hat keine direkte Entsprechung, aber eine Anpassungs‑Regel kann `readonly` auf ein URL‑ID‑Muster anwenden, und Sie können es auch aus Ihren Templates basierend auf dem Alter des Artikels umschalten. `data-messages-count` ist die Seitengröße, die im Widget‑Anpassungs‑Panel von 10 bis 200 Kommentaren eingestellt werden kann.

### Antworten und Threading

FastComments unterstützt standardmäßig unbegrenzte Verschachtelung; `maxReplyDepth` begrenzt sie (`1` ergibt eine flache Zweistufen‑Struktur). Die OpenWeb‑CSV enthält die Spalten `parent_id` und `parent_comment_id`. Der Import liest `parent_comment_id` und baut den Antwort‑Baum in voller Tiefe wieder auf, sodass eine Antwort auf eine Antwort unter ihrem direkten Elternteil bleibt, mit Autor, Zeitstempel, Votes, Flag‑Zähler und Genehmigungs‑Status intakt. Antworten werden verknüpft, selbst wenn sie vor ihrem Elternteil in der Datei erscheinen oder wenn der Elternteil aus einem früheren Export‑Fenster importiert wurde. Eine Antwort, deren Elternteil in keinem Export vorkommt, wird zu einem Top‑Level‑Kommentar. Die OpenWeb‑Nachrichten‑ID wird auf jedem Kommentar gespeichert, sodass ein Re‑Import eines älteren flachen Imports den Thread an Ort und Stelle aktualisiert.

### Nutzerprofile und Badges

FastComments‑Nutzer, einschließlich SSO‑Nutzer, erhalten ein Profil mit Avatar, Anzeigenamen, Bio, Social‑Links, Badges, Karma, Kommentar‑Zähler, öffentlichem Aktivitäts‑Feed und Direktnachrichten (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Jeder dieser Bereiche kann pro Nutzer im SSO‑Payload oder global in der Konfiguration deaktiviert werden.

OpenWebs Author Badge erfordert einen Aufruf von `GET /sso/v1/user/{primary_key}` für den Autor und das Platzieren der zurückgegebenen ID in `data-author-id`. In FastComments setzen Sie `displayLabel: 'Author'` (oder ein beliebiges Label bis zu 100 Zeichen) im SSO‑Payload und `isAdmin` bzw. `isModerator` für Team‑Mitglieder. Das Label wird neben dem Namen bei jedem Kommentar angezeigt. Für ein umfangreicheres System konfigurieren Sie Badges unter **Customize → Badges**: Bild‑ oder Text‑Badges, die automatisch bei Erreichen von Schwellen (Kommentar‑Zähler, Up‑Votes, angeheftete Kommentare, Veteran‑Status, Antwort‑Geschwindigkeit) vergeben werden oder manuell, und per SSO‑Payload mit `badgeConfig` zuweisbar (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Angeheftete Kommentare, Umfragen und Q&A

Jeder Moderator kann einen Kommentar aus dem Kommentar‑Menü im Widget oder im Moderations‑Dashboard anheften oder lösen. Angeheftete Kommentare werden live an alle im Thread gesendet. Wenn Sie das automatisieren wollen, liefert das AI‑Agents‑Feature ein „Top Comment Pinner“‑Template, das einen Top‑Level‑Kommentar anheftet, sobald er einen Vote‑Schwellenwert überschreitet (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWebs In‑Conversation‑Umfragen erlauben es, einem Top‑Level‑Kommentar eine 2‑bis‑4‑Option‑Umfrage anzuhängen. FastComments‑Umfragen hängen ebenfalls an einen Kommentar, mit 2‑10 Optionen, optionalem Abschlussdatum, Ergebnis‑Privatsphäre (anonym, nur Admins, alle) und einem „Vote to see results“-Modus. Sie wählen, wer Umfragen erstellen darf (deaktiviert, Admins & Moderatoren, alle) und ob anonyme Leser abstimmen können. Umfragen werden auch über die öffentliche API für die Erstellung aus Ihrem CMS bereitgestellt.

OpenWeb hat Ask‑Me‑Anything‑Formate angeboten. FastComments hat kein separates Q&A‑Produkt. Der praktische Ersatz ist ein normaler Thread auf einer dedizierten URL‑ID: Der SSO‑Nutzer des Gastes trägt ein `displayLabel`, Sie heften den Intro‑Kommentar an, Leser stellen Fragen in Top‑Level‑Kommentaren, der Gast antwortet im Thread, und Erwähnungs‑ und Antwort‑Benachrichtigungen ziehen die Beteiligten zurück. Setzen Sie `noNewRootComments` nach Schließung des Fensters, sodass nur noch Antworten weitergehen.

Community Spotlight (OpenWebs E‑Mail‑Collector, Counter und Redirect‑Cards) hat kein Äquivalent. Das Widget unterstützt benutzerdefiniertes Header‑HTML über `headerHTML`, das einen Call‑to‑Action bietet, aber kein E‑Mail‑Capture‑Formular.

### Live Blog

Ein FastComments‑Live‑Blog gibt es nicht. OpenWebs Live‑Blog ist ein redaktionelles Produkt: Reporter, die im Admin‑Panel Updates mit eingebetteten Links, Tweets und Videos posten, und Leser folgen dem Verlauf (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Was FastComments für Live‑Berichterstattung bietet, ist die Leser‑Seite: ein Live‑Chat‑Widget (`embed-live-chat.min.js`) für Streaming‑Chat und das Kommentar‑Widget im Chat‑Modus (`showLiveRightAway` plus `newCommentsToBottom`) neben Ihrer Live‑Berichterstattung. Für die redaktionellen Updates selbst behalten Publisher, die von OpenWeb wegziehen, diese in ihrem CMS oder einem dedizierten Live‑Blog‑Tool und betten FastComments darunter für Diskussionen ein. Medien‑Embeds (YouTube, SoundCloud und andere) werden in Kommentaren unterstützt, sodass redaktionelle Updates als Kommentare reichhaltige Medien enthalten können.

### Topic Tracker, Benachrichtigungen und E‑Mail

OpenWebs Topic Tracker lässt einen Leser Themen und Autoren, die aus Seiten‑Metadaten gezogen werden, folgen und benachrichtigt werden, wenn neue Artikel passen (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments hat kein Themen‑ oder Autoren‑Follow über Artikel hinweg. Leser abonnieren eine Seite über die Notification‑Bell und erhalten Updates für diesen Thread, mit einer Frequenz, die pro Abonnement gewählt wird: jede Minute, stündlicher Digest oder täglicher Digest. Wenn ein cross‑Artikel‑Follow für Ihre Retentions‑Zahlen wichtig ist, lassen Sie es uns wissen – dieses Feature steht auf unserer Roadmap.

Alles andere in der Notification‑Bell mappt. Das Widget hat eine Glocke, die rot leuchtet mit der ungelesenen Anzahl und listet: Antworten an Sie, Antworten in einem Thread, in dem Sie kommentiert haben, Erwähnungen, Up‑Votes auf Ihre Kommentare, Aktivitäten auf abonnierten Seiten, Badge‑Auszeichnungen und Direktnachrichten (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). In‑App‑Benachrichtigungen sind Echtzeit über einen WebSocket. Antwort‑ und Erwähnungs‑E‑Mails gehen jede Minute nur für genehmigte Kommentare raus.

Für SSO‑Nutzer übergeben Sie `optedInNotifications` und `optedInSubscriptionNotifications` im Payload, und FastComments aktualisiert deren Präferenzen beim nächsten Seiten‑Load. E‑Mails benötigen eine E‑Mail‑Adresse im Payload. E‑Mail‑Vorlagen sind pro Typ und pro Locale editierbar unter **Customize → Email Templates**, und das Senden von Ihrer eigenen Domain mit DKIM wird unterstützt. Moderatoren und Admins erhalten einen täglichen, wöchentlichen oder monatlichen Digest mit 1‑Click‑Approve, Antworten und Spam‑Links.

OpenWebs Notification‑Webhook postet per‑User‑Benachrichtigungs‑Events (`replied-message`, `liked-message`, `topic-by-keyword` usw.) an Ihren Endpunkt. FastComments‑Webhooks decken das Kommentar‑Ressourcen‑Event ab: erstellt, aktualisiert und entfernt, mit beliebig vielen abonnierenden Endpunkten (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Wenn Sie den Notification‑Webhook genutzt haben, um Ihr eigenes E‑Mail‑System zu füttern, bauen Sie die Logik auf Kommentar‑Events neu auf oder lassen FastComments die E‑Mails senden.

### SSO: Von codeA/codeB zu einem signierten Payload

OpenWebs Handshake hat sechs Schritte: warten auf `spot-im-api-ready`, OpenWeb erzeugt `codeA`, Ihr Client sendet ihn an Ihr Backend, Ihr Backend bestätigt den Nutzer und ruft `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...` auf, OpenWeb gibt `codeB` zurück, und Ihr Client gibt `codeB` zurück an OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Logout ruft `window.SPOTIM.logout()` auf.

FastComments Secure SSO hat keinen Round‑Trip und keinen neuen Endpunkt auf Ihrer Seite. Wenn Sie die Seite für einen eingeloggten Nutzer rendern, serialisiert Ihr Backend den Nutzer, Base64‑kodiert ihn und signiert ihn mit HMAC‑SHA256 unter Verwendung Ihres API‑Secrets. Das Widget sendet das Payload mit seinen Requests und FastComments prüft die Signatur (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). In Node:

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

Der Zeitstempel ist in Millisekunden seit Epoch und wird verworfen, wenn er älter als zwei Tage ist. Für einen ausgeloggten Leser lassen Sie die drei signierten Felder weg und übergeben nur `loginURL` (oder eine `loginCallback`‑Funktion); das Widget zeigt stattdessen einen Login‑Prompt anstelle eines Composers. Voll funktionsfähige Beispiele in Node, Java und PHP finden Sie im <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">Code‑Beispiele‑Repository</a>.

Nutzer werden beim ersten Seiten‑Load erstellt. Sie registrieren niemanden im Bulk. Da der OpenWeb‑Importer Kommentar‑Autoren anhand von `user_name` abgleicht, beansprucht ein Nutzer, dessen SSO‑Payload denselben `username` trägt, seine importierten Kommentare beim ersten Laden eines Threads und kann sie anschließend bearbeiten oder löschen. Es gibt zudem eine SSO‑User‑API, falls Sie Nutzer vorab anlegen wollen.

Jedes Mal, wenn das Payload gesendet wird, aktualisiert FastComments den Nutzer‑Datensatz daraus, sodass ein geänderter Anzeigename oder Avatar auf Ihrer Seite beim nächsten Seiten‑Aufruf propagiert wird. Setzen Sie ein Feld auf `null`, um es zu leeren.

Wenn Sie OpenWebs Drittanbieter‑SSO mit Auth0, Gigya oder Piano via `window.SPOTIM.startSSOForProvider` verwendet haben, ist der FastComments‑Flow derselbe: Sobald Ihr Provider den Nutzer authentifiziert hat, baut Ihr Backend das Payload und signiert es. Es gibt keine provider‑spezifische Integration, die auf FastComments‑Seite konfiguriert werden muss.

Zwei weitere Optionen existieren. Simple SSO übergibt das Nutzer‑Objekt unsigned vom Client, für Plattformen ohne Backend, und markiert Aktivitäten als verifiziert, wenn eine E‑Mail vorhanden ist (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 signiert Ihr Personal in das FastComments‑Dashboard selbst über Okta, Azure AD oder ADFS, mit Rollen‑Mapping, und ist auf Enterprise‑Plänen verfügbar (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

OpenWebs per‑Artikel‑Moderations‑Policy‑API hat vier Werte: `spot_policy`, `approve_all`, `publish_and_moderate` und `require_approval`. FastComments konfiguriert dieselben Verhaltensweisen in **Moderation Settings**: automatische Genehmigung an/aus, Genehmigung nur für den ersten Kommentar eines Nutzers, und Auto‑Approve nur für verifizierte (eingeloggte oder SSO) Kommentare. Regeln gelten site‑wide oder für ein URL‑ID‑Muster wie `*/politics/*`, womit Sie Richtlinien pro Abschnitt reproduzieren. Jeder Kommentar, genehmigt oder nicht, landet im **Moderate Comments**‑Dashboard, sodass das Publish‑then‑Review‑Modell die Standard‑Ansicht dort ist (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Der Import trägt den Moderations‑Status mit. OpenWeb `message_status` = `approved` wird als genehmigt importiert; `rejected` wird als Spam importiert; alles andere wird ungeprüft importiert und erscheint in Ihrer Moderations‑Warteschlange. `reports_count` wird zum Flag‑Zähler des Kommentars.

Automatisierte Moderation bei FastComments ist geschichtet, nicht ein einzelnes System wie Aida:

- Ein Spam‑Klassifikator, kontinuierlich trainiert, verfügbar als geteiltes Modell über alle Tenants oder isoliert für Ihren Tenant, mit einem Vertrauens‑Faktor, der das Filtern für langjährige oder häufig angeheftete Nutzer lockert.
- Ein optionaler LLM‑Spam‑Check (Flex‑Abrechnung, offene Gewicht‑Modelle wie GLM‑5.3 verfügbar).
- Bild‑Inhalts‑Moderation bei niedriger, mittlerer oder hoher Empfindlichkeit für hochgeladene Bilder.
- Eine lokalisierte Wort‑Blacklist von ca. 450 Standard‑Phrasen, editierbar, die Treffer mit Sternchen maskiert. Hier kommen Ihre OpenWeb‑eingeschränkten Wörter hin.
- Flag‑Schwellen, die einen Kommentar nach N Reports automatisch ausblenden.
- Wiederholte und fast‑duplizierte Nachrichten‑Verhinderung, immer aktiv.
- AI‑Agents: ereignisgesteuerte Agents mit expliziter Tool‑Allowlist (Mark Spam, Approve, Lock, Pin, Warn via DM, Ban, Award Badge, Reply). Jeder Agent startet im Trockenlauf, sensible Tools können hinter menschlicher Genehmigung liegen, und jede Aktion wird mit Begründung und Confidence‑Score protokolliert.

OpenWebs User‑Muting‑API lässt einen SSO‑Leser einen anderen stummschalten. Das FastComments‑Äquivalent ist **Block User** im Kommentar‑Menü, verfügbar für jeden eingeloggten Leser. Bans sind eine Moderator‑Aktion: permanent oder für eine festgelegte Dauer, optional ein Schatten‑Ban (der Nutzer sieht seinen Kommentar, niemand sonst), optional per gehasht‑IP, plus‑Alias‑aware (eine E‑Mail‑Adresse wird als ein Alias behandelt). Die Liste gesperrter Nutzer ist durchsuchbar nach E‑Mail, Name, Moderator und dem Kommentar, der den Ban ausgelöst hat.

Das **Moderate Comments**‑Dashboard unterstützt Filter (Review nötig, Genehmigung nötig, Spam, gemeldet, von gesperrten Nutzern) und Textsuche, Massen‑Aktionen mit Undo und Pause, „select all matching“ für sehr große Warteschlangen, Moderations‑Gruppen, sodass Ihr Sport‑Desk nur Sport‑Threads sieht, pro‑Kommentar‑Logs, die zeigen, warum eine E‑Mail gesendet wurde oder nicht, und teilbare gefilterte Links. Moderatoren haben nur das Dashboard; sie können keine Einstellungen ändern oder Daten importieren.

### Analytics

FastComments Analytics zeigt gerade online‑Nutzer über Ihre Sites und pro Seite, Top‑Seiten nach Kommentaren oder nach Live‑Nutzern, und Tages‑Serien für Seiten‑Loads, Kommentare, Votes und erstellte Accounts (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Moderator‑Statistiken sind separat. Zähler sind nahezu Echtzeit, verzögert um höchstens eine Minute, und jeder Seiten‑Load wird gezählt, nicht gestichprobenartig.

Was Sie nicht finden, ist irgendetwas zu Anzeigen‑Füllung, CPM oder Umsatz, weil es keine Ads gibt. Wenn OpenWebs Dashboard Ihre Quelle für Engagement‑zu‑Umsatz‑Berichte war, verschiebt sich dieser Bericht zu Ihrem eigenen Ad‑Stack.

### Monetarisierung

OpenWeb platziert Ads innerhalb und um die Conversation und bietet ein Standalone‑Ad‑Unit, mit Kampagnen, die über Ihren OpenWeb‑Kontakt eingerichtet werden (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments schaltet keine Ads im Widget, teilt keinen Umsatz und lädt keine Drittanbieter‑Ad‑ oder Tracking‑Skripte. Das Widget ist ein iframe, das Sie einbetten; die Ad‑Slots darüber und darunter gehören Ihnen und laufen über das, was Sie bereits nutzen.

Der Trade‑off ist explizit: Sie verlieren, was OpenWeb Ihnen gezahlt hat, und erhalten dafür feste, vorhersehbare Kosten und ein Widget, das keine Ad‑Requests zu Ihrer Seite hinzufügt. Branding wird bei Flex‑ und Pro‑Plänen entfernt, und White‑Labeling ist bei Pro‑ und Enterprise‑Plänen verfügbar.

### Datenexport und Datenschutz

Alle Kommentar‑Daten können jederzeit aus dem FastComments‑Dashboard als CSV exportiert werden, mit Datumsangaben im UTC‑ISO‑Format, und dieselben Daten stehen über die API zur Verfügung. Webhooks decken die fortlaufende Synchronisation ab. Import‑Dateien werden von FastComments gelöscht, sobald der Import abgeschlossen ist.

Für GDPR und CCPA bietet OpenWeb eine Export‑ und Delete‑API, bei der gelöschte Nutzer‑Kommentare an ein zufälliges Gast‑Konto angehängt bleiben (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments unterstützt Datenexport‑ und Lösch‑Anfragen, bietet ein Data Processing Agreement und betreibt eine separate EU‑Deployment unter <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> mit Daten, die ausschließlich innerhalb der EU repliziert werden. Erstellen Sie dort Ihr Konto, wenn Ihre Leser in Europa sind. In der EU‑Region erfordern AI‑Agent‑Bans immer eine menschliche Genehmigung, um DSA‑Artikel 17 zu erfüllen.

Kommentar‑Daten in der globalen Deployment werden über Regionen hinweg repliziert, inklusive eines Singapore‑Nodes, und das Widget wird von FastComments eigenem DNS und CDN ausgeliefert. Das Embed‑Script ist etwa 35 KB komprimiert im Wire.

### Mobile SDKs

OpenWeb liefert Android, iOS und React Native‑SDKs mit Conversation, Articles, Authentication, Notifications, Reactions und In‑Conversation‑Polls. FastComments liefert native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> und <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a>‑Bibliotheken mit Threaded‑Comments, Live‑Updates über WebSocket, Secure SSO, Voting, Mentions, Bild‑Uploads, Moderations‑Aktionen (Flag, Pin, Lock, Block), Theming, Live‑Chat‑Modus und einem Social‑Feed‑Component. Die EU‑Region ist ein Konfigurations‑Flag. Es gibt kein separates Ad‑SDK, weil es keine Ads gibt.

### Einbetten und SPA‑Integration

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

Ihre Tenant‑ID finden Sie auf der <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">Credentials‑Seite</a>, sobald Sie ein Konto haben. `data-article-tags` hat keine Entsprechung, da es kein Topic‑Following gibt; Hashtags in Kommentaren sind ein separates Feature.

Für Infinite‑Scroll und Single‑Page‑Apps ist OpenWebs Virtual‑Pages‑Ansatz ein Container pro Artikel. In FastComments rufen Sie `FastCommentsUI(element, config)` pro Thread auf und später `instance.update(newConfig)`, um die URL‑ID zu wechseln, oder `instance.destroy()`, um sie zu entfernen (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). Die React‑, Vue‑, Angular‑ und SolidJS‑Bibliotheken übernehmen das, wenn sich das Config‑Prop ändert. Lifecycle‑Callbacks (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) ersetzen die `spot-im-*`‑DOM‑Events, die Sie zuvor abgehört haben.

Kommentar‑Zähler auf Index‑Seiten nutzen das Kommentar‑Zähler‑Widget, einzeln oder im Bulk. Für SEO werden Kommentare direkt in die Seite gerendert für Suchmaschinen‑Crawler, nicht im iframe, sodass es keinen SEO‑API‑Call zur Konfiguration gibt.

### Schritt‑für‑Schritt Cutover

**1. Erstellen Sie das Konto und konfigurieren Sie die Grundlagen.** Registrieren Sie sich auf fastcomments.com oder eu.fastcomments.com. Setzen Sie Ihre Moderations‑Einstellungen, Wort‑Blacklist, Vote‑Stil, Standard‑Sortierung und benutzerdefiniertes CSS auf der Widget‑Anpassungsseite. Fügen Sie Moderatoren und Moderations‑Gruppen hinzu. Wenn Sie viele Admin‑Nutzer haben, unterstützen wir den Import für Sie.

**2. Führen Sie den ersten Import aus.** Gehen Sie zu <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, wählen Sie OpenWeb (.csv) und laden Sie die Datei hoch. Der Import läuft als Hintergrund‑Job; die Seite zeigt Zeilen‑Zähler und Status, und Sie erhalten eine E‑Mail, wenn er fertig ist (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Jeder Kommentar behält seine OpenWeb‑Message‑ID als externe ID, sodass ein erneuter Import die bestehenden Kommentare aktualisiert statt Duplikate zu erzeugen.

**3. Verifizieren Sie die Zähler.** Vergleichen Sie den Zeilen‑Zähler des Jobs mit Ihrem Export. Öffnen Sie ein paar hoch‑traffic‑URL‑IDs im Moderations‑Dashboard und prüfen Sie Stichproben von Autoren, Daten, Vote‑Summen und Genehmigungs‑Status. Bestätigen Sie, dass abgelehnte Kommentare als Spam angezeigt werden und ausstehende in der Warteschlange liegen.

**4. Bauen Sie das SSO‑Payload.** Implementieren Sie den Signatur‑Code oben in Ihrem Backend, mit demselben `id` und `username`, die Sie bei OpenWeb verwendet haben. Testen Sie mit einem Staff‑Konto auf einer Staging‑Seite: die importierten Kommentare des Nutzers erscheinen als seine, und Bearbeiten/Löschen erscheinen im Kommentar‑Menü.

**5. Tauschen Sie das Embed in einer Staging‑Template aus.** Ersetzen Sie den Launcher und Container durch das FastComments‑Snippet, mappt `data-post-id` zu `urlId` und `data-post-url` zu `url`. Entfernen Sie `window.SPOTIM.logout()` und `spot-im-*`‑Listener, oder mappt sie zu den Callbacks. Setzen Sie Ihr CSS in einer Anpassungs‑Regel statt im Code, sodass es bei jedem FastComments‑Release getestet wird.

**6. Parallelbetrieb.** Setzen Sie FastComments auf einem Abschnitt oder einem Prozentsatz der Artikel ein, während OpenWeb auf dem Rest bleibt. Auf der OpenWeb‑Seite muss sich nichts ändern. Beobachten Sie die Moderations‑Warteschlange und die Analytics‑Seite. Kommentare, die während dieses Fensters auf FastComments‑Seiten geschrieben werden, sind nicht in Ihrem OpenWeb‑Export, also planen Sie den finalen Import, bevor sie beginnen, nicht danach.

**7. CSP und DNS.** Wenn Sie eine Content‑Security‑Policy betreiben, erlauben Sie `cdn.fastcomments.com` und `fastcomments.com` (oder `eu.fastcomments.com`) für `script-src`, `frame-src` und `connect-src`, und entfernen Sie die `spot.im`‑ und `openweb.com`‑Einträge, sobald der Launcher weg ist. An Ihrem eigenen DNS ändert sich nichts. Weiterleitungen sind nicht nötig, weil die URL‑IDs übereinstimmen.

**8. Finaler Import und Live‑Schaltung.** Holen Sie einen letzten OpenWeb‑Export, der das Parallel‑Run‑Fenster abdeckt, laden Sie ihn hoch (Re‑Import ist sicher), dann deployen Sie die Template‑Änderung auf allen Seiten und entfernen den Launcher, Reactions, Topic Tracker, Spotlight, Bell und Ad‑Container.

**9. Go‑Live‑Checkliste.**

- Live‑Commenting sichtbar auf einem Produktions‑Artikel in zwei Browsern.
- SSO‑Login, Logout und ein Kommentar unter einem echten Abonnenten‑Konto.
- Moderatoren erhalten den Digest und können daraus genehmigen.
- Antwort‑ und Erwähnungs‑E‑Mails kommen und verlinken zur richtigen Seite.
- Ban‑Liste und Wort‑Blacklist gefüllt.
- Page Reacts und Kommentar‑Zähler rendern dort, wo früher Reactions und der Counter waren.
- CSP‑Reports sauber.
- Letzter Kommentar‑Zähler‑Vergleich zwischen Ihrem Export und dem Dashboard.

### Was Sie verlieren und was anders ist

Direkt die Lücken benennen:

- **Live Blog.** Kein Äquivalent. Behalten Sie ihn in Ihrem CMS oder einem Live‑Blog‑Tool und setzen Sie FastComments darunter.
- **Topic Tracker.** Kein cross‑Artikel‑Themen‑ oder Autoren‑Follow. Nur Page‑Subscriptions.
- **Community Spotlight.** Kein CTA‑Card‑Produkt. `headerHTML` gibt Ihnen eine Nachricht über dem Composer, aber kein E‑Mail‑Capture.
- **Ad‑Umsatz.** Keiner. Das Widget ist von Grund auf werbefrei.
- **Notification‑Webhook.** Webhooks betreffen Kommentar‑Events, nicht per‑User‑Notification‑Events.
- **Reactions‑Historie.** Artikel‑Level‑Reaktions‑Zähler sind nicht im Kommentar‑Export und starten bei Null. Wir können diese gelegentlich von Ihrer Seite scrapen.
- **Umfragen‑Historie.** Umfrage‑Definitionen und Votes sind nicht im Kommentar‑Export; der Umfrage‑Kommentar‑Text wird importiert, die Umfrage selbst nicht. Wir können diese gelegentlich von Ihrer Seite scrapen.
- **Login‑Modell.** Leser ohne SSO loggen sich per Magic‑Link ein, nicht per Passwort oder Social‑Login‑Button.
- **Menschliche Moderations‑Mitarbeiter.** OpenWeb liefert ein Moderations‑Team mit Aida. FastComments liefert Werkzeuge, Klassifikatoren und Agents; die Menschen sind bei Ihnen.

Was Sie gewinnen, im gleichen Geist: ein Widget, das nur ein kleines Skript hinzufügt und keine Ad‑Requests, Moderation, die eine Person für eine große Site mit Massen‑Aktionen und Agents betreiben kann, SSO, das eine Signatur‑Funktion statt eines Protokolls ist, und ein Anbieter, der nicht unter gerichtlicher Aufsicht steht.

### Zeitplan und das kostenlose Import‑Angebot

Planen Sie ein bis zwei Wochen für einen Publisher mit einer SSO‑Integration und ein paar hunderttausend Kommentaren: ein bis zwei Tage für den Export und den ersten Import, ein paar Tage für SSO und Templates, ein Parallel‑Run‑Fenster, dann den finalen Import und den Switch. Die Plattform hat diese Skalierung bereits: United Cloud betreibt mehr als zehn Portale und Millionen Kommentare auf FastComments, und itsfoss.com hat eine Historie von 88 000 Kommentaren von einem anderen Anbieter über denselben Self‑Service‑Importer migriert.

FastComments importiert Ihren OpenWeb‑CSV‑Export kostenlos, hilft Ihnen, OpenWeb und FastComments parallel während des Cutovers zu betreiben, und unterstützt Sie bei der Migration selbst, inklusive Thread‑Aufbau und Nutzer‑Abgleichs‑Fragen. Enterprise‑Pläne beinhalten ein 99,99 % SLA und Support‑Antworten innerhalb einer Stunde während der Geschäftszeiten. Flex‑Nutzungs‑basierte Preisgestaltung ist für Sites verfügbar, die ohne Vertrag starten wollen.

<a href="https://fastcomments.com/contact-us">Write to us</a> mit Ihrer Export‑Größe und Ihrer SSO‑Konfiguration und wir kommen mit einem Plan zurück.

### Fazit

Ziehen Sie noch heute Ihren Export. Denken Sie daran: dieselben Beitrags‑IDs werden zu URL‑IDs, der Moderations‑Status wird übernommen, und das Embed ist ein direkter Austausch. Die Stellen, an denen FastComments abweicht, sind oben aufgelistet, sodass Sie mit den Fakten entscheiden können. :)

Cheers!

{{/isPost}}

---