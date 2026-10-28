[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]Kommentare werden jetzt für jeden Leser übersetzt[/postlink]

{{#unless isPost}}
FastComments kann jetzt die Kommentare selbst übersetzen, nicht nur das Widget darum herum. Aktivieren Sie es pro Seite oder pro Website, automatisch oder mit einem Übersetzen‑Button, und jeder Leser sieht die Unterhaltung in seiner eigenen Sprache, wobei das Original nur einen Klick entfernt ist.
{{/unless}}

{{#isPost}}

### Was gibt es Neues

FastComments ist bereits seit einiger Zeit in achtundzwanzig Sprachen übersetzt, sodass die Schaltflächen, Beschriftungen und E‑Mails bereits in der Sprache des Lesers angezeigt werden. Die Kommentare wurden das nicht. Ein spanischer Kommentar auf einer englischen Seite blieb auf Spanisch, und jeder, der ihn nicht lesen konnte, scrollte einfach weiter.

Dieses Release fügt **Comment Translation** hinzu. Wenn es aktiviert ist, wird ein in einer anderen Sprache als der des Lesers verfasster Kommentar übersetzt angezeigt, mit einer kleinen Zeile darunter, die angibt, woher er stammt, und einem **Show original**‑Link, um zu sehen, was tatsächlich geschrieben wurde.

<img src="images/fc-comment-translation-auto.png" alt="Ein englischer Leser sieht einen spanischen Kommentar übersetzt, mit einer Zeile „Übersetzt aus Spanisch“ und einem Show original‑Link darunter" title="Automatische Kommentarübersetzung" class="lozad" />

### Zwei Modi

**Automatic** übersetzt sofort. Jeder Kommentar in einer anderen Sprache wird übersetzt angezeigt, und der Leser kann bei Bedarf zum Original wechseln. Dies ist der Modus für eine Community, die tatsächlich in zwei oder mehr Sprachen schreibt und möchte, dass alle dieselbe Unterhaltung lesen.

**Manual** fügt jedem Kommentar einen **Translate**‑Link hinzu und tut nichts, bis er angeklickt wird. Der Leser entscheidet, welche Kommentare übersetzt werden sollen, und es wird nichts für Kommentare ausgegeben, die niemand anfordert. Ein Kommentar, der bereits in der Sprache des Lesers verfasst ist, wird entsprechend gekennzeichnet, anstatt vorzugeben, ihn zu übersetzen.

<img src="images/fc-comment-translation-manual.png" alt="Manueller Modus, bei dem ein spanischer Kommentar nach einem Klick übersetzt wurde und ein englischer Kommentar anzeigt, dass er bereits in der Sprache des Lesers vorliegt" title="Manuelle Kommentarübersetzung" class="lozad" />

In beiden Modi ist die Sprache des Lesers diejenige, die das Widget bereits anzeigt: das **Locale / Language**, das Sie in der Anpassungsregel festgelegt haben, oder die Browsersprache des Besuchers, falls Sie keine festgelegt haben. Es gibt nichts, das der Besucher installieren, sich anmelden oder konfigurieren muss. Es funktioniert gleichermaßen, ob das Widget in Ihre Seite eingebettet ist, in einem Site‑Builder wie Google Sites oder auf einer eigenständigen FastComments‑Kommentarseite.

### Aktivieren

Öffnen Sie Ihre <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget‑Anpassung</a>, finden Sie **Comment Translation** direkt unter **Locale / Language** und wählen Sie Automatic oder Manual. Standardmäßig ist es deaktiviert.

Da es auf einer Anpassungsregel basiert, können Sie es nach Belieben einschränken: Ihre gesamte Website, eine Domain oder eine einzelne Seite, bei der Sie wissen, dass das Publikum gemischt ist. Es ist eine serverseitige Einstellung, sodass sie nicht allein über die JavaScript‑Konfiguration des Widgets aktiviert werden kann.

### Kosten

Übersetzungen werden von einem Sprachmodell erzeugt und als LLM‑Token abgerechnet, dieselbe Einheit wie bei [AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html). Jeder Plan kann sie aktivieren.

Jeder Kommentar wird einmal pro Sprache übersetzt und die Übersetzung zusammen mit dem Kommentar gespeichert. Wenn tausend spanische Leser denselben englischen Thread öffnen, wird die Übersetzungsarbeit nur einmal durchgeführt. Ein typischer Kommentar umfasst ein paar hundert Token, was bei Flex‑Tarifen etwa einen halben Cent entspricht. Wenn der Autor oder ein Moderator einen Kommentar bearbeitet, wird die gespeicherte Übersetzung verworfen und der Kommentar bei der nächsten Ansicht neu übersetzt, sodass niemand eine Übersetzung eines Textes liest, der nicht mehr existiert.

Der manuelle Modus kostet nichts, bis jemand klickt.

### Details

Der übersetzte Text wird genau wie ein von jemandem geschriebener Kommentar behandelt. Er durchläuft dieselben Bereinigungs‑ und Linkregeln wie das Original, sodass eine Übersetzung nichts enthalten kann, was das Original nicht enthalten könnte. Erwähnungen und Hashtags behalten ihre Formatierung bei.

Kommentare, die sehr lang sind oder deren Sprache nicht mit Sicherheit erkannt werden kann, bleiben unverändert, anstatt geraten zu werden. Die Sprachzeile unter einem übersetzten Kommentar ist ebenfalls in der Sprache des Lesers, sodass ein spanischer Leser eines englischen Kommentars „Traducido del inglés“ und „Mostrar original“ sieht.

### Overhead

Der Code für diese neue Funktion wird nur geladen, wenn sie aktiviert ist, sodass er das Kommentar‑Widget für unsere anderen Nutzer nicht verlangsamt.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">Der Comment Translation‑Leitfaden</a>
covers both modes, the rule setting, and billing.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Der Locale‑Leitfaden</a>
covers how the widget's language is chosen in the first place.

### Fazit

Dieses Feature stammt von einer Nachbarschaftsvereinigung, deren Bewohner auf Englisch und Spanisch kommentieren und die wollte, dass beide Gruppen denselben Thread lesen, ohne jemanden zu bitten, eine Browser‑Erweiterung zu installieren oder sich für etwas zu registrieren.

Wenn Sie eine Community betreiben, die in mehr als einer Sprache schreibt, aktivieren Sie sie und teilen Sie uns unten mit, wie die Übersetzungen gelesen werden.

Viele Grüße!

{{/isPost}}

---