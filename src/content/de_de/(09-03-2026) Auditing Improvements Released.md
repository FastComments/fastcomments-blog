[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Audit-Verbesserungen veröffentlicht[/postlink]

{{#unless isPost}}
Das Audit‑Log zeigt jetzt, wer oder was jedes Ereignis betroffen hat, und Sie können danach suchen. Es gibt jetzt auch Datumsbereich, Sub‑Mandanten‑Suche, Feld‑Level‑Diffs bei Updates und passende API‑Filter.
{{/unless}}

{{#isPost}}

### What's New

Das Audit‑Log hat immer aufgezeichnet, wer eine Aktion ausgeführt hat und worauf sie ausgeführt wurde. Diese Version geht es darum, diesen Eintrag lesbar und durchsuchbar zu machen, ohne die Seite zu verlassen.

Wenn Sie wissen wollten, was mit einem bestimmten Moderator geschehen ist, mussten Sie zuerst dessen ID finden, und wenn dieser Moderator inzwischen entfernt wurde, gab es nichts mehr, woran Sie die ID abgleichen konnten. Das Ereignis sagte, dass etwas gelöscht wurde, von wem und wann, aber aus manchen Gründen fehlten die Namen.

Jetzt wird der Name zum Zeitpunkt des Ereignisses zusammen mit der ID erfasst, sodass er das Löschen überlebt und Sie danach suchen können.

### The Affected Column

Es gibt eine neue **Affected**‑Spalte in der Tabelle, die die Person oder das Objekt, auf das das Ereignis wirkt, mit Namen anzeigt. Für eine Person wird sie etwa so angezeigt: `jsmith (jsmith@example.com)`. Für eine Widget‑Anpassung oder eine Moderationsgruppe ist es der von Ihnen vergebene Name. Für eine Mediendatei ist es der von Ihnen hochgeladene Dateiname.

Über der Tabelle befindet sich ein passendes Suchfeld, **Who or what was changed**. Geben Sie einen Namen, eine E‑Mail‑Adresse oder eine ID ein, und es findet Ereignisse, die diese Person oder dieses Objekt betreffen. Sie müssen nicht wissen, welches der drei Sie haben, und Sie müssen nicht zuerst eine interne ID nachschlagen.

Ereignisse, die vor dieser Version geschrieben wurden, haben keinen Namen, aber sie besitzen weiterhin die immer vorhandene ID, sodass das gleiche Suchfeld sie über die ID findet.

### Date Range

Die Filterzeile hat jetzt ein **Date Range**‑Dropdown mit Letzten 30 Tagen, Letzten 90 Tagen, Letztem Jahr, Gesamter Historie und **Custom range**, das From‑ und To‑Datumauswähler anzeigt.

Ein Datumsbereich ist bei weitem die einfachste Möglichkeit, eine Suche einzugrenzen, und die Kombination mit den anderen Filtern ist der schnellste Weg, etwas zu finden.

### Managed Accounts

Wenn Ihr Konto andere Mandanten verwaltet, gibt es ein Kontrollkästchen **Include sub-tenants**. Wenn Sie es aktivieren, wird Ihr Konto und jeder von ihm verwaltete Mandant in einem Durchlauf durchsucht, wobei eine **Tenant**‑Spalte anzeigt, von welchem Konto jedes Ereignis stammt.

Bisher konnte das Log jedes Mandanten nur separat gelesen werden, sodass die Frage „Hat jemand diese Woche an irgendeiner unserer Eigenschaften etwas geändert?“ bedeutete, nacheinander in jeden Mandanten zu wechseln.

### Updates Now Record What Changed

Das Bearbeiten eines Teammitglieds hat früher den resultierenden Satz von Berechtigungen aufgezeichnet. Das sagt Ihnen, welche Berechtigungen jetzt gelten, aber nicht, welche es vorher waren, sodass „Wer hat den Abrechnungszugriff dieser Person entfernt und wann“ nicht beantwortet werden konnte.

Update‑Ereignisse enthalten jetzt eine `changes`‑Karte nur der Felder, die tatsächlich geändert wurden, jeweils mit vorherigem und neuem Wert. Unveränderte Felder werden weggelassen, sodass eine Berechtigungsänderung als eine Zeile erscheint statt einer Wand von Booleans.

### Descriptions, and the Device Behind a Change

Destruktive Ereignisse enthalten jetzt einen einfachen Satz, der beschreibt, was passiert ist, z. B. „Removed user from the account.“ Seitenaufrufe hatten Beschreibungen, Löschungen jedoch nicht, was umgekehrt war.

Ereignisse, die etwas ändern, protokollieren außerdem den Browser, der die Änderung vorgenommen hat. Sitzungen werden als Hash aufgezeichnet, sodass die Aktionen einer Person korreliert werden können, ohne dass das Log etwas speichert, das wiederholt werden könnte.

### Other Improvements

- Einige Korrekturen bei Paginierung und Filterkombinationen.
- Login‑Ereignisse zeigten eine leere **Who**‑Spalte. Der Benutzername war die ganze Zeit im Datensatz, aber die Seite hat ihn nicht gelesen.
- Die Aktionsspalte stellte Login‑Ereignisse als N/A dar, weil Login in der Liste der Aktionsnamen fehlte.
- Audit‑Log‑Seiten konnten SSO‑Benutzer nicht benennen und zeigten stattdessen „Missing User“. Sie werden jetzt korrekt aufgelöst.
- Die Seite ist bei Konten mit langen Historien viel schneller.

### For the API

Der Endpunkt `/api/v1/audit-logs` erhielt passende Filter: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` für die Teilstring‑Suche und `includeManagedTenants`. Antworten enthalten jetzt `targetId`, `targetLabel` und `ua`.

Zwei Änderungen, die erwähnenswert sind, wenn Sie diesen Endpunkt bereits aufrufen. `before` funktioniert jetzt eigenständig, vorher wurde er ignoriert, sofern nicht auch `after` übergeben wurde. Und `limit` ist jetzt auf 10 k begrenzt, mit einem Standard von 5 k. Zuvor war es unbegrenzt.

### Documentation

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">Der AuditLogs API‑Leitfaden</a> behandelt die neuen Abfrageparameter, und <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">die AuditLog‑Struktur‑Referenz</a> behandelt die neuen Felder.

Wenn Sie das Audit‑Log noch nicht verwendet haben, [den ursprünglichen Release‑Beitrag](/(3-21-2022)-audit-log-released.html) führt Sie durch, wo es sich befindet, wer es lesen kann und wie lange Einträge aufbewahrt werden. All das bleibt unverändert.

### In Conclusion

Wir freuen uns, dass wir FastComments weiter verbessern können. Wenn Sie in Ihrem Log nach etwas suchen und es nicht finden, teilen Sie es uns unten mit.

Prost!

{{/isPost}}

---