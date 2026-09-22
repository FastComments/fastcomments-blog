[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Audit-Verbesserungen veröffentlicht[/postlink]

{{#unless isPost}}
Das Audit‑Log zeigt jetzt, wer oder was jedes Ereignis betroffen hat, nach Namen, und Sie können danach suchen. Es gibt jetzt auch Datumsbereich, Sub‑Mandanten‑Suche, Feld‑Level‑Diffs bei Updates und passende API‑Filter.
{{/unless}}

{{#isPost}}

### Was ist neu

Das Audit‑Log hat immer aufgezeichnet, wer eine Aktion durchgeführt hat und worauf sie sich bezog. Diese Version macht diesen Eintrag lesbar und durchsuchbar, ohne die Seite zu verlassen.

Wenn Sie wissen wollten, was mit einem bestimmten Moderator geschehen ist, mussten Sie zuerst seine ID finden, und wenn dieser Moderator inzwischen entfernt wurde, gab es nichts mehr, woran Sie die ID abgleichen konnten. Das Ereignis zeigte an, dass etwas gelöscht wurde, von wem und wann, aber aus manchen Gründen fehlten die Namen.

Jetzt wird der Name zusammen mit der ID zum Zeitpunkt des Ereignisses erfasst, sodass er das Löschen überlebt und Sie danach suchen können.

### Die betroffene Spalte

Es gibt eine neue **Affected**‑Spalte in der Tabelle, die die Person oder das Objekt, auf das das Ereignis wirkte, nach Namen anzeigt. Bei einer Person erscheint sie etwa so `jsmith (jsmith@example.com)`. Bei einer Widget‑Anpassung oder einer Moderationsgruppe ist es der von Ihnen vergebene Name. Bei einer Mediendatei ist es der von Ihnen hochgeladene Dateiname.

Über der Tabelle befindet sich ein entsprechendes Suchfeld, **Who or what was changed**. Geben Sie einen Namen, eine E‑Mail‑Adresse oder eine ID ein, und es findet Ereignisse, die diese Person oder dieses Objekt betreffen. Sie müssen nicht wissen, welches der drei Sie haben, und Sie müssen nicht zuerst eine interne ID nachschlagen.

Ereignisse, die vor dieser Version erstellt wurden, haben keinen Namen, aber sie besitzen weiterhin die stets vorhandene ID, sodass das gleiche Suchfeld sie über die ID findet.

### Datumsbereich

Die Filterzeile hat jetzt ein **Date Range**‑Dropdown mit Letzten 30 Tagen, Letzten 90 Tagen, Letztem Jahr, Gesamter Zeit und **Custom range**, das die Datumsfelder Von und Bis anzeigt.

Ein Datumsbereich ist bei weitem die einfachste Möglichkeit, eine Suche einzugrenzen, und die Kombination damit und den anderen Filtern ist der schnellste Weg, etwas zu finden.

### Verwaltete Konten

Wenn Ihr Konto andere Mandanten verwaltet, gibt es ein Kontrollkästchen **Include sub-tenants**. Wenn Sie es aktivieren, wird Ihr Konto und jeder von ihm verwaltete Mandant in einem Durchlauf durchsucht, wobei eine **Tenant**‑Spalte anzeigt, von welchem Konto jedes Ereignis stammt.

Bisher konnte das Log jedes Mandanten nur separat gelesen werden, sodass die Frage „Hat jemand diese Woche an irgendeiner unserer Eigenschaften etwas geändert?“ bedeutete, nacheinander in jeden Mandanten zu wechseln.

### Updates zeichnen jetzt auf, was geändert wurde

Das Bearbeiten eines Teammitglieds hat früher den resultierenden Satz von Berechtigungen aufgezeichnet. Das zeigt, welche Berechtigungen jetzt gelten, aber nicht, welche es vorher waren, sodass „Wer hat den Abrechnungszugriff dieser Person entfernt und wann“ nicht beantwortet werden konnte.

Update‑Ereignisse enthalten jetzt eine `changes`‑Karte nur der Felder, die tatsächlich geändert wurden, jeweils mit vorherigem und neuem Wert. Unveränderte Felder werden weggelassen, sodass eine Berechtigungsänderung als eine Zeile statt einer Wand von Booleans erscheint.

### Beschreibungen und das Gerät hinter einer Änderung

Destruktive Ereignisse enthalten jetzt einen einfachen Satz, der beschreibt, was geschehen ist, z. B. „Removed user from the account.“ Seitenaufrufe hatten Beschreibungen, Löschungen jedoch nicht, was umgekehrt war.

Ereignisse, die etwas ändern, protokollieren außerdem den Browser, der die Änderung vorgenommen hat. Sitzungen werden als Hash gespeichert, sodass die Aktionen einer Person korreliert werden können, ohne dass das Log etwas speichert, das wiederholt werden könnte.

### Weitere Verbesserungen

- Einige Fehlerbehebungen bei Paginierung und Filterkombinationen.
- Login‑Ereignisse zeigten eine leere **Who**‑Spalte. Der Benutzername war die ganze Zeit im Eintrag vorhanden, aber die Seite hat ihn nicht ausgelesen.
- Die Aktionsspalte stellte Login‑Ereignisse als N/A dar, weil Login in der Liste der Aktionsnamen fehlte.
- Audit‑Log‑Seiten konnten SSO‑Benutzer nicht benennen und zeigten stattdessen „Missing User“. Sie werden jetzt korrekt aufgelöst.
- Die Seite ist bei Konten mit langen Historien deutlich schneller.

### Für die API

Der Endpunkt `/api/v1/audit-logs` erhielt passende Filter: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` für die Teilstringsuche und `includeManagedTenants`. Antworten enthalten jetzt `targetId`, `targetLabel` und `ua`.

Zwei Änderungen, die erwähnenswert sind, wenn Sie diesen Endpunkt bereits aufrufen. `before` funktioniert jetzt eigenständig, vorher wurde es ignoriert, sofern nicht auch `after` übergeben wurde. Und `limit` ist jetzt auf 10 k begrenzt, vorher gab es keine Obergrenze. Der Standardwert bleibt bei 1 k.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">The AuditLogs API guide</a> covers the new query parameters, and <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">the AuditLog structure reference</a> covers the new fields.

Wenn Sie das Audit‑Log noch nicht verwendet haben, führt [the original release post](/(3-21-2022)-audit-log-released.html) Sie durch dessen Speicherort, wer es lesen kann und wie lange Einträge aufbewahrt werden. All das bleibt unverändert.

### Fazit

Wir freuen uns, dass wir FastComments weiter verbessern können. Wenn Sie in Ihrem Log nach etwas suchen und es nicht finden, teilen Sie uns das unten mit.

Prost!

{{/isPost}}

---