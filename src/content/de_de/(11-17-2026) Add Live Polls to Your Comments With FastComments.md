[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]Live-Umfragen zu Ihren Kommentaren mit FastComments hinzufügen[/postlink]

{{#unless isPost}}
Kommentare haben jetzt Live‑Umfragen! Leser stimmen direkt im Thread ab, die Ergebnisse werden live für alle auf der Seite aktualisiert, und Umfragen funktionieren sowohl im Web‑Widget als auch in unseren iOS-, Android‑ und React‑Native‑SDKs.
{{/unless}}

{{#isPost}}

### Was ist neu

Dieses Release fügt **Live‑Umfragen** hinzu. Eine Umfrage ist an einen Kommentar angehängt und wird darin gerendert. Leser klicken auf eine Option, um abzustimmen,
ohne den Thread zu verlassen, und die Ergebnisse werden live für alle angezeigt, die die Seite betrachten, sobald Stimmen eingehen. Kein Refresh und
niemand muss Antworten von Hand zählen.

<img src="images/fc-live-polls.png" alt="A comment with a poll asking what format the next meetup should be, showing In person at 34%, Online at 21%, and Hybrid at 45%, with 53 responses" title="Live Polls" class="lozad" />

Da die Umfrage ein Kommentar ist, bleibt die Unterhaltung daran angehängt. Menschen stimmen ab und antworten dann, um zu erklären warum.

### Erstellen einer Umfrage

Wenn Umfragen aktiviert sind, erscheint im Kommentar‑Editor ein Umfrage‑Button. Ein Klick öffnet einen Umfrage‑Editor unter dem Texteingabefeld, wo Sie
folgendes festlegen:

- **Die Frage**, bis zu 200 Zeichen.
- **Die Optionen**, 2 bis 10 Stück.
- **Wann sie schließt**: nie, oder nach 1 Tag, 3 Tagen oder 1 Woche. Eine geschlossene Umfrage zeigt ihre Endergebnisse und nimmt keine Stimmen mehr entgegen.
- **Datenschutz**: anonym, für Admins sichtbar oder öffentlich.
- **Stimme erforderlich, um Ergebnisse zu sehen**, wodurch die Ergebnisse für jeden Betrachter verborgen bleiben, bis sie abstimmen oder die Umfrage geschlossen wird.

Dann schreiben Sie Ihren Kommentar und posten ihn wie gewohnt. Umfragen funktionieren bei neuen Kommentaren und bei Antworten.

### Abstimmung

Jede Person erhält eine Stimme pro Umfrage und kann diese ändern, solange die Umfrage offen ist. Sofern die Umfrage nicht zuerst eine Stimme verlangt,
können Leser auf **Ergebnisse anzeigen** klicken, um zu sehen, wie die Lage steht, bevor sie wählen.

Der Datenschutz wird pro Umfrage festgelegt und direkt unter den Optionen angezeigt, sodass Wähler wissen, wer ihre Stimme sehen kann, bevor sie abstimmen.
Anonyme Umfragen (Standard) zeigen nur Gesamtsummen, und niemand, auch keine Admins, kann sehen, wer für was gestimmt hat. Bei admin‑sichtbaren
Umfragen können Admins und Moderatoren **Wer hat abgestimmt** öffnen. Bei öffentlichen Umfragen kann jeder das tun.

### Aktivieren

Umfragen sind standardmäßig deaktiviert. Öffnen Sie Ihre <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget‑Anpassung</a>,
aktivieren Sie **Umfragen aktivieren** und wählen Sie, wer sie erstellen darf:

- **Nur Admins/Moderatoren** (Standard), wenn Sie die Umfragen selbst durchführen möchten.
- **Jeder**, wenn Ihre Community gegenseitig Fragen stellen soll.

Standardmäßig ist ein eingeloggter Nutzer zum Abstimmen erforderlich. Aktivieren Sie **Anonyme Umfrage‑Stimmen zulassen**, um jedem das Abstimmen zu ermöglichen. Um das fair zu halten,
sind anonyme Stimmen auf drei pro IP‑Adresse pro Umfrage pro Stunde begrenzt.

Wie jede Anpassungsregel kann dies für Ihre gesamte Site, eine Domain oder eine einzelne Seite gelten.

### Benachrichtigungen

Der Autor einer Umfrage erfährt von Antworten, sobald sie eintreffen: eine Benachrichtigung, gruppiert wenn viele Menschen
gleichzeitig abstimmen, und eine tägliche E‑Mail, wenn die Umfrage an diesem Tag neue Antworten erhalten hat. Nur die erste Stimme zählt als Antwort, sodass
jemand, der seine Meinung ändert, keine zusätzlichen Benachrichtigungen auslöst. Die Benachrichtigungen folgen dem Datenschutz der Umfrage, sodass eine anonyme Umfrage
nur sagt, wie viele neue Antworten eingegangen sind, nie wer.

### Native Mobile SDKs

Umfragen gibt es nicht nur im Web‑Widget. Unsere nativen SDKs rendern die Umfrage‑Karte, den Umfrage‑Editor, die Live‑Ergebnisse und die
Wählerliste mit echten nativen Komponenten und lesen dieselben Widget‑Einstellungen von Ihrem Dashboard. Aktivieren Sie Umfragen einmal
und sie erscheinen sowohl auf Ihrer Site als auch in Ihren Apps.

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, über Swift Package Manager.
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, als `com.fastcomments:android-sdk:2.1.0`.
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, auf NPM.

Die iOS‑ und Android‑SDKs können ebenfalls eine Umfrage aus Ihrer eigenen UI posten. Auf iOS sieht das so aus:

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

Die READMEs für <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> und
<a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a>, sowie das
<a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">React Native‑Changelog</a>,
beschreiben die Details, einschließlich wie man die Umfrage‑Farben an die eigene App anpasst.

### Die API

Umfragen sind ebenfalls in der REST‑API enthalten. Sie können eine Umfrage zusammen mit ihrem Kommentar erstellen, indem Sie `poll` an `POST /api/v1/comments` übergeben,
oder später mit `/api/v1/polls/:commentId` hinzufügen, bearbeiten, schließen und entfernen. Stimmen können mit `/api/v1/poll-votes` aufgelistet, abgegeben und entfernt werden, was den Export der Ergebnisse in eine Tabelle oder Ihr eigenes CMS unkompliziert macht. Die API folgt denselben Einstellungen wie das Widget, und einzelne Stimmen bei anonymen Umfragen können darüber nicht ausgelesen werden.

### Overhead

Der Umfrage‑Code wird nur geladen, wenn Umfragen aktiviert sind, sodass er das Kommentar‑Widget für andere nicht verlangsamt.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">Der Live‑Umfragen‑Leitfaden</a> behandelt das Aktivieren von Umfragen,
wer sie erstellen darf, anonyme Stimmen, Wähler‑Datenschutz, Benachrichtigungen und die API.

### Ausprobieren

Es gibt eine Live‑Umfrage im <a href="https://fastcomments.com/product/live-polls" target="_blank">Live‑Umfragen‑Demo</a>. Stimmen Sie
dort ab, öffnen Sie die Seite in einem zweiten Tab und beobachten Sie, wie sich die Ergebnisse bewegen. Sie können dort auch Ihre eigene Umfrage posten.

### Fazit

Wenn Ihre Threads sich ständig in Kopfzählungen verwandeln, probieren Sie Umfragen aus und lassen Sie uns unten wissen, was Sie als Nächstes sehen möchten.

Viele Grüße!

{{/isPost}}

---