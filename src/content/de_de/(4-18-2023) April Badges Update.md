---
[category:Features]

###### [postdate]

# [postlink]April Badges Update[/postlink]

{{#unless isPost}}Es wurden Änderungen an den Abzeichen vorgenommen, einige Funktionen wurden hinzugefügt, und einige Verbesserungen wurden implementiert, um zu verhindern, dass Abzeichen bei einer Neuberechnung verschwinden.{{/unless}}

{{#isPost}}

### Neu - Abzeichen-Stapelung

Vor gestern, wenn Sie in Ihrer Community eine Reihe von Abzeichen wie die folgenden hatten:

- Neuer Kommentator (1 Kommentar)
- Community-Mitglied (50 Kommentare)
- Experte (500 Kommentare)

... und ein Benutzer 500 Kommentare hat, werden die Abzeichen in seinen Kommentaren wie folgt angezeigt:

    [Neuer Kommentator] [Community-Mitglied] [Experte]

In diesem speziellen Fall möchten wir wahrscheinlich nur das `Experte`-Abzeichen anzeigen. Nun, die meisten unserer Kunden möchten dies, aber nicht alle. Nicht alle unsere Mandanten haben die gleiche Konfiguration, und das erkennen wir an.

Für die Communities, die dem obigen Muster folgen, was die meisten sind, möchten sie, dass in den Kommentaren das prestigeträchtigste Abzeichen angezeigt wird.

Um diesen Anwendungsfall zu behandeln, haben wir das Konzept eines Abzeichens **zum Ersetzen** eines anderen Abzeichens hinzugefügt. Dadurch können wir einen Fluss von Abzeichen erstellen, den ein Benutzer verdienen kann:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Abzeichen-Stapelung" title="Abzeichen-Stapelung" />
</div>

Intern nennen wir dies *Abzeichen-Stapelung*. Das neue Abzeichen "stapelt" sich oben auf das alte.

Wir können dies konfigurieren, indem wir ein Abzeichen bearbeiten und angeben, dass es ein anderes ersetzt:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Abzeichen-Stapelungs-Einrichtung" title="Abzeichen-Stapelungs-Einrichtung" />
</div>

Offensichtlich kann dies schwierig zu verfolgen sein, daher wurde auch die Abzeichenliste aktualisiert, um mehr Informationen bereitzustellen, einschließlich
welches Abzeichen was ersetzt.

### Neu - Verbesserungen bei der Neuberechnung

Wenn Sie eine Änderung an einem Abzeichen vornehmen, müssen wir alle Ihre Benutzer durchgehen und feststellen, ob sie das Abzeichen weiterhin "verdienen" sollten,
und alle angezeigten Abzeichenstile und Caches aktualisieren, damit die neueste Version angezeigt wird.

Die Neuberechnung entfernt kein Abzeichen mehr von einem Benutzer bei der Speicherung, selbst wenn dieser nicht mehr die Kriterien erfüllt **es sei denn, die konfigurierten Kriterien ändern sich**.

Administratoren beachten - Sie können die Schwellenkriterien für ein Abzeichen senken, ohne dass das Abzeichen durch die Neuberechnung entfernt wird. Nur das **Erhöhen** der Schwellenwerte führt zu einer Neuberechnung, die in einigen Fällen das Abzeichen entfernen kann.

Für mehr Informationen lesen Sie weiter in *Die Perspektive des Kommentators*.

### Die Perspektive des Kommentators

Die Neuberechnung von Abzeichen ist sehr riskant, da Benutzer ihre Abzeichen lieben - und das erkennen wir an! Wir möchten einem Benutzer sein Abzeichen nicht wegnehmen, weil
er das Antwort-Abzeichen aufgrund von 100 Benutzern, die auf seine Kommentare geantwortet haben, verdient hat, und dann 10 Benutzer später ihre Kommentare löschen oder von Moderatoren entfernt werden.

Das Abzeichen sollte bleiben, und das tut es, außer...

Bei der Neuberechnung wissen wir nicht, dass diese vorherigen Kommentare existieren, sodass das Abzeichen bei einigen Benutzern entfernt werden könnte, wenn ein Abzeichen bearbeitet wird, z. B. wenn das Design
aktualisiert wird oder wenn die Abzeichen-Stapelung eingerichtet wird.

Das geschah am 17. April 2023, als wir *Abzeichen-Stapelung* eingeführt haben und einige Communities die Funktion aktiviert haben.

Es wurden zwei Szenarien beobachtet:

1. Benutzer stellten fest, dass einige ihrer Abzeichen entfernt erschienen. Was tatsächlich passiert ist, war, dass alle bis auf die prestigeträchtigsten Abzeichen verborgen waren.
   - **Sie können all Ihre Abzeichen anzeigen, wenn Sie möchten.** Klicken Sie einfach auf das Drei-Punkte-Menü oben rechts in Ihrem Profil und klicken Sie auf `Abzeichen verwalten`.
2. Einige Abzeichen wurden tatsächlich für einige Benutzer entfernt, wie im Beispiel des Antwort-Abzeichens oben. Um zu verhindern, dass dies in Zukunft geschieht, 
    haben wir das Neuberechnungssystem verbessert, sodass das Abzeichen nicht entfernt wird, es sei denn, die Abzeichenkriterien selbst ändern sich und Sie erfüllen die Kriterien nicht mehr, jedoch
    raten wir den Community-Administratoren davon ab, dies zu tun, da die Benutzer erneut ihre Abzeichen lieben.

### Für Moderatoren

Es gibt keine Änderungen aus der Perspektive eines Moderators, außer dass in den meisten Fällen weniger Abzeichen angezeigt werden. Stattdessen sehen Sie das prestigeträchtigste
Abzeichen von Ihnen und Ihren Community-Mitgliedern angezeigt.

### Bestehende Kunden

Wir haben die Einführung dieser Funktion für alle bestehenden Kunden in allen Tarifen abgeschlossen! Die Abzeichen-Stapelung ist standardmäßig nicht aktiviert und muss manuell konfiguriert werden.

### Zum Schluss

Wir hoffen, Sie finden dieses neue Set von Funktionen und Verbesserungen nützlich und einfach zu nutzen. 

Prost!

{{/isPost}}