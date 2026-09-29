[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]Arabisch und Rechts-nach-Links-Sprachen werden jetzt unterstützt[/postlink]

{{#unless isPost}}
FastComments unterstützt jetzt Arabisch, und jeder Teil von FastComments wird für Arabisch und Hebräisch von rechts nach links dargestellt. Zählungen wie „3 Kommentare“ verwenden jetzt ebenfalls die korrekte Pluralform in jeder Sprache.
{{/unless}}

{{#isPost}}

### Was ist neu

Arabisch ist jetzt eine unterstützte Sprache, mit dem Locale-Code `ar`. Das Kommentar-Widget, die anderen einbettbaren Widgets, E‑Mails, das Dashboard und die Marketing‑Website sind alle übersetzt.

Arabisch wird zudem von rechts nach links geschrieben, sodass das Hinzufügen bedeutete, FastComments das Layout in beide Richtungen zu ermöglichen. Diese Anpassung gilt auch für Hebräisch.

### Rechts-nach-Links-Layout

Wenn das Locale Arabisch oder Hebräisch ist, wird die gesamte Benutzeroberfläche gespiegelt. Das Avatar, der Name und die Antwort‑Steuerungen eines Kommentars tauschen die Seiten, Menüs und Dropdowns öffnen sich zur richtigen Kante, und Pfeile zeigen in die Lesrichtung. Dies gilt für das Kommentar‑Widget und seine Erweiterungen wie Live‑Chat und Umfragen, das Ticket‑System, den Kollaborations‑Chat und die Review‑Zusammenfassungs‑Widgets, E‑Mails und das Dashboard.

Es gibt nichts zu konfigurieren, außer das Locale bei Bedarf manuell für Ihren Benutzer festzulegen.

### Kommentare behalten ihre eigene Richtung

Manchmal ist ein Kommentarbereich in mehreren Sprachen. Ein englischer Kommentar auf einer arabischen Seite oder ein arabischer Kommentar auf einer englischen Seite sollte dennoch natürlich lesbar sein.

Jeder Kommentar und Benutzername folgt der Schreibrichtung seines eigenen Textes. Auf einer englischen Seite wird eine arabische Antwort von rechts nach links angezeigt, während die umliegenden Kommentare von links nach rechts gelesen werden; das Gegenteil gilt auf einer arabischen Seite. Code‑Blöcke innerhalb von Kommentaren werden immer von links nach rechts gelesen, da Code das so macht.

### Festlegen des Locale

Standardmäßig übernimmt das Widget das Locale aus dem Browser des Besuchers, sodass arabischsprachige Nutzer automatisch Arabisch erhalten. Um es zu erzwingen, setzen Sie das Locale auf der Widget‑Anpassungsseite unter „Locale / Language“ oder im Code:

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

Wenn Sie SSO verwenden, übergeben Sie `locale: 'ar'` im Benutzerobjekt, damit deren E‑Mails ebenfalls auf Arabisch erfolgen.

### Pluralformen, korrekt umgesetzt

Englisch hat zwei Formen für eine Zählung: „1 Kommentar“ und „2 Kommentare“. Arabisch hat separate Formen für eins, zwei, drei bis zehn und elf bis neunundneunzig und verwendet für hundert wieder die Einzahl. Russisch, Ukrainisch, Polnisch, Kroatisch, Serbisch, Slowenisch und Hebräisch haben jeweils eigene Regeln.

Bisher kannte FastComments nur „eins“ und „alles andere“, sodass ein russischer Leser die falsche Substantivform für 2 oder 5 Kommentare sehen konnte. Jeder String mit einer Zählung wählt jetzt die korrekte Form für seine Sprache, im Widget, in E‑Mails und im Dashboard.

Während wir dabei waren, haben wir jeden Zähl‑String in jeder Sprache überprüft. Dabei wurden einige ältere Fehlübersetzungen gefunden, die nun korrigiert sind. Zum Beispiel war in einigen Sprachen das Wort für eine Antwort das Verb „to reply“, sodass ein Kommentar „1 Reply“ als Äquivalent zu „1 To reply“ zeigte.

Wenn Sie den Text einer Zählung angepasst haben, z. B. das Label „comments“, wird Ihr Text weiterhin für jede Zählung verwendet.

### Ihre Sprache finden

Die Sprachwahl im Dashboard zeigt jetzt neben dem englischen Namen den jeweiligen Eigennamen der Sprache, z. B. „Arabic (العربية)“ und „German (Germany) (Deutsch)“. Wenn jemand in der falschen Sprache landet, kann er trotzdem seine eigene finden.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">Der Leitfaden zu unterstützten Sprachen</a> listet jeden Locale-Code auf und behandelt das Rechts-nach-Links‑Verhalten. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Die Locale‑Option</a> erklärt, wie man ein Locale im Widget erzwingt.

Dies baut auf [unserer ersten Lokalisierungsveröffentlichung](/(2-05-2020)-fastcomments-gets-localized.html) von 2020 auf, die mit drei Sprachen begann. Wir haben jetzt achtundzwanzig Locales.

### Fazit

Wir freuen uns, FastComments arabischsprachigen Nutzern zur Verfügung zu stellen und das Erlebnis für hebräischsprachige Nutzer zu verbessern. Wenn Ihnen eine Übersetzung in Ihrer Sprache falsch erscheint, lassen Sie es uns unten wissen und wir werden sie korrigieren.

Viele Grüße!

{{/isPost}}

---