[category:Migration]
###### [postdate]
# [postlink]Migration von Commento und Cusdis im Jahr 2026[/postlink]

{{#unless isPost}}
Die gehosteten Commento- und Cusdis-Dienste reagieren nicht mehr. Hier erfahren Sie, wie Sie zu FastComments wechseln und wie wir Ihnen helfen können, Ihre Kommentare aus dem Internet Archive wiederherzustellen, falls Sie sie nie exportiert haben.
{{/unless}}

{{#isPost}}

Wenn der Kommentarbereich auf Ihrer Website leer geworden ist, ist dieser Beitrag für Sie. Er behandelt, was sich geändert hat, wie Sie einen Export importieren, falls Sie einen haben, und wie wir Ihnen helfen können, Ihre Kommentare aus dem Internet Archive zurückzuholen, falls Sie keinen haben.

## Was geschehen ist

Hier ist, was wir zum 1. November 2026 sehen:

- **Commento.** commento.io, seine API und sein Widget‑Skript geben alle einen 404 zurück. Aufnahmen des Internet Archive zeigen, dass die Seite am 25. Mai 2026 funktionierte und bis zum 11. Juni 2026 einen 404 zurückgab.
- **Cusdis.** cusdis.com und seine API geben den Cloudflare‑Fehler 521 zurück, was bedeutet, dass der Server hinter Cloudflare ausgefallen ist. Aufnahmen zeigen, dass es bis zum 27. August 2026 funktionierte und bis zum 16. Oktober 2026 einen 521 zurückgab. Das Widget‑Skript wird weiterhin geladen, sodass Ihre Seite ein leeres Feld dort anzeigt, wo die Kommentare waren.

Wir haben keinen Abschiedshinweis von einem der Projekte gefunden. Wenn Sie Commento oder Cusdis selbst hosten, ist Ihre Installation davon nicht betroffen, und Sie können jederzeit exportieren, wenn Sie bereit sind, umzuziehen.

## Finden Sie Ihre Daten

Welchen Weg Sie wählen, hängt davon ab, was Sie haben:

1. **Sie haben eine Exportdatei.** Durchsuchen Sie auch Ihren Posteingang, da Commento seine Exporte per E‑Mail als „.gz“-Datei gesendet hat. Springen Sie zu den Import‑Schritten.
2. **Sie hosten selbst.** Exportieren Sie über Ihr eigenes Dashboard und folgen Sie dann den Import‑Schritten.
3. **Sie haben den gehosteten Dienst genutzt und keinen Export.** Das Dashboard, von dem Sie exportieren würden, ist nicht mehr vorhanden. Lesen Sie den Wiederherstellungs‑Abschnitt unten.

## Importieren einer Exportdatei

Sobald Sie eingeloggt sind, gehen Sie <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier, um die Datei zu importieren</a>. Wählen Sie **Commento (.gz, .json)** oder **Cusdis (.json)** aus dem Dropdown und laden Sie Ihre Datei hoch. Es ist nicht nötig, eine Commento „.gz“-Datei zuerst zu entpacken.

Der Import läuft im Hintergrund und Sie erhalten eine E‑Mail, wenn er fertig ist. Das erneute Importieren ist sicher, da jeder Kommentar anhand seiner ursprünglichen ID abgeglichen und an Ort und Stelle aktualisiert wird.

Wir haben eine ausführlichere Anleitung für jedes Format: <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> und <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. Ihre Schritte zum Anfordern eines Exports vom gehosteten Dashboard gelten nicht mehr, aber die Import‑Details gelten weiterhin.

## Wiederherstellung Ihrer Kommentare aus dem Internet Archive

Commento und Cusdis laden beide Kommentare per JavaScript von ihren eigenen Servern. Wenn das Internet Archive eine Seite mit einem Browser erfasst, kann es diese Antworten zusammen mit der Seite speichern. Diese gespeicherten Antworten enthalten die Kommentar‑Threads.

Wir haben das selbst getestet. Die <a href="https://web.archive.org" target="_blank">Wayback Machine</a> enthält mehr als 12.000 erfasste Commento‑Kommentarantworten und Aufnahmen für 448 Cusdis‑Projekte, und die neuesten stammen aus dem Jahr 2026. Wir haben kein Self‑Service‑Tool dafür. Wir führen die Wiederherstellung für Sie durch, also <a href="https://fastcomments.com/contact-us" target="_blank">schreiben Sie uns</a>, um zu beginnen.

### Überprüfen Sie zuerst Ihre eigene Seite

Öffnen Sie einen Ihrer häufigeren Beiträge in der Wayback Machine und ersetzen Sie die Adresse durch Ihre eigene:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

Scrollen Sie zum Kommentarbereich. Wenn Ihre Kommentare angezeigt werden, hat das Archiv diesen Thread. Wenn nicht, versuchen Sie ein anderes Jahr über den Kalender oben auf der Seite. Ein leeres Ergebnis bei einem Beitrag schließt den Rest Ihrer Seite nicht aus, also schreiben Sie uns in jedem Fall.

### Wie die Wiederherstellung funktioniert

1. **Nennen Sie uns Ihre Domain.** Wenn Sie Cusdis verwendet haben, senden Sie auch Ihre App‑ID, den `data-app-id`‑Wert im Snippet auf Ihrer Seite. Wir werden Sie bitten, zu zeigen, dass Sie die Domain kontrollieren, da diese Kommentare zu Ihrer Seite gehören.
2. **Wir finden Ihre Threads.** Wir sammeln die Aufnahmen Ihrer Seite und prüfen, dass jede zu Ihrer Domain und Seite gehört. Commento‑Wiederherstellungen dauern länger, weil das Archiv seine Aufnahmen nicht nach Site indexiert und wir alle durchgehen müssen.
3. **Wir zeigen Ihnen, was wir gefunden haben.** Sie sehen, wie viele Seiten und Kommentare zurückgekommen sind und das Datum des neuesten Kommentars, bevor etwas importiert wird.
4. **Wir importieren die Threads in Ihr Konto.** Sie können dann jeden Kommentar über Ihr Moderations‑Dashboard bearbeiten oder entfernen.

### Was zurückkommt

| Daten | Commento | Cusdis |
| --- | --- | --- |
| Kommentartext | Ja | Ja |
| Anzeigename des Autors | Ja | Ja |
| Kommentardatum | Ja | Ja |
| Antwort‑Threading | Ja | Ja |
| Bewertungspunktzahl | Ja | Cusdis hat keine Stimmen |
| Seitenadresse | Ja | Ja, obwohl einige Seiten nur einen Pfad gespeichert haben, daher benötigen wir Ihre Domain |
| Autoren‑E‑Mail | Nein | Nein |
| Kommentare, die noch auf Genehmigung warten | Nein | Nein |
| Nach der letzten Erfassung geschriebene Kommentare | Nein | Nein |
| Seiten, die das Archiv nie erfasst hat | Nein | Nein |

### Was Sie erwarten können

Dies ist eine Wiederherstellung aus Schnappschüssen, planen Sie also Lücken ein. Sie funktioniert am besten für Seiten, die populär genug waren, um häufig und kürzlich erfasst zu werden.

Zwei Ergebnisse aus unseren Tests zeigen die Bandbreite. Auf einem Blog lieferten 30 Abfragen 810 Kommentare über 19 Seiten. Auf einer anderen Seite, die ihre Kommentare noch anzeigt, endete die neueste archivierte Kopie im Oktober 2023, während die Live‑Seite bis März 2025 lief. Alles, was zwischen der letzten Erfassung und dem Shutdown geschrieben wurde, ist nicht im Archiv.

Die fehlenden E‑Mails sind ebenfalls wichtig. Wiederhergestellte Kommentare behalten den Namen des Autors, können aber nicht einem FastComments‑Konto zugeordnet werden, und ihre Autoren erhalten keine Benachrichtigung über neue Antworten.

## Ersetzen Sie das Widget

Welchen Weg Sie auch gewählt haben, das alte Snippet muss von Ihrer Seite entfernt werden. Für Commento entfernen Sie dies, zusammen mit `count.js`, wenn Sie Kommentarzahlen verwenden:

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

Für Cusdis entfernen Sie dies:

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

Dann fügen Sie <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">unseres</a> hinzu:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

Wir unterstützen auch viele Front‑End‑Frameworks, die Sie <a href="https://fastcomments.com/install-wizard" target="_blank">hier finden</a>. Es ist nicht nötig, auf das Ende einer Wiederherstellung zu warten, bevor Sie wechseln. Ihre Leser können sofort kommentieren, und wiederhergestellte Threads werden den gleichen Seiten hinzugefügt, wenn sie importiert werden.

### Wenn sich Ihre URLs ändern

Importierte Kommentare sind an die URL ihrer Seite gebunden, sodass bei unveränderten URLs die Threads von selbst passen. Wenn sie sich ändern, importieren Sie zuerst und verwenden dann das <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a>-Werkzeug unter Manage Data, um sie an die neuen Orte zu verschieben.

## EU

Wenn Sie in der EU sind, möchten Sie Ihr Konto wahrscheinlich auf <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> erstellen, damit Ihre Kundendaten in der EU bleiben.

## Zusammenfassung

1. Suchen Sie nach einer Exportdatei, auch in Ihrem E‑Mail‑Postfach.
2. Wenn Sie eine haben, laden Sie sie auf der <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Import‑Seite</a> hoch.
3. Wenn nicht, prüfen Sie Ihre Seite in der Wayback Machine und <a href="https://fastcomments.com/contact-us" target="_blank">schreiben Sie uns</a> mit Ihrer Domain.
4. Ersetzen Sie das alte Snippet durch <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">unseres</a>.

Prost!

{{/isPost}}

---