---
[category:Features]

###### [postdate]

# [postlink]Profile, Badges und Direktnachrichten[/postlink]

{{#unless isPost}}In diesem Release haben wir viele Funktionen, die Gemeinschaften belohnen, die FastComments nutzen, und ihnen helfen, zu kommunizieren.{{/unless}}

{{#isPost}}

### Neuigkeiten
FastComments hat offiziell Benutzerprofile und verwandte Funktionen veröffentlicht.

### Benutzerprofile

Das Profil eines Benutzers besteht aus seinem Namen, ob er online ist, seiner letzten Aktivität und einem Ort, um auf seinem Profil zu kommentieren.

Seine Abzeichen und der Fortschritt beim Verdienen von Abzeichen werden ebenfalls hier angezeigt.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="FastComments Benutzerprofil" title="FastComments Benutzerprofil"></video>
</div>

Benutzer können ihr eigenes Profil sehen, indem sie auf ihr Avatar in einem Kommentarthread klicken oder [zu ihrer Kontoseite gehen](https://fastcomments.com/auth/my-account).

Darüber hinaus können Sie einem Benutzer direkt von seinem Profil aus eine Nachricht senden.

### Benutzerprofil-Modale
Wenn das Avatar eines Benutzers ausgewählt wird, öffnet sich das Profil-Modale. Dies wurde auch für Moderatoren auf der Seite zur Kommentarmoderation hinzugefügt.

### Benutzer mit Abzeichen belohnen

Abzeichen sind eine weitere jüngste Ergänzung zu FastComments, die es Ihnen ermöglichen, Benutzer Ihrer Gemeinschaft zu belohnen. Ein Abzeichen zu erstellen ist einfach:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Abzeichen erstellen" title="Abzeichen erstellen" />
</div>

Abzeichen können basierend auf den folgenden Bedingungen vergeben werden:

- Anzahl der hinterlassenen Kommentare
- Anzahl der erhaltenen Upvotes
- Anzahl der erhaltenen Antworten
- Anzahl der anghefteten Kommentare
- Veteran (Zeit seit dem ersten Kommentar)
- Kommentare spät in der Nacht
- Schnelle Antwortzeit
- Antwort auf eine bestimmte Seite
- Moderatoren - Anzahl der gelöschten Kommentare
- Moderatoren - Anzahl der genehmigten Kommentare
- Moderatoren - Anzahl der nicht genehmigten Kommentare
- Moderatoren - Anzahl der überprüften Kommentare
- Moderatoren - Anzahl der als Spam markierten Kommentare
- Moderatoren - Anzahl der nicht als Spam markierten Kommentare

Wie Sie sehen können, gibt es viele Arten von Situationen, für die wir Benutzer belohnen können.

Wir können mehrere *Stufen* von Abzeichen definieren. Zum Beispiel könnten wir `Kommentaranzahl`-Abzeichen mit Schwellenwerten von 10, 100 und 1000 hinterlassenen Kommentaren hinzufügen. Wenn Benutzer in Ihrer Gemeinschaft interagieren, werden die verdienten Abzeichen im Laufe der Zeit **aufgestapelt**.

Lassen Sie uns die *Moderatoren* nicht vergessen. In vielen Gemeinschaften ist dies ein undankbarer Job. Geben Sie Ihren Moderatoren etwas, das sie stolz zeigen können, indem Sie Moderator-Abzeichen für sie konfigurieren.

Wir unterstützen auch einige einzigartige Fälle, wie die Abzeichen `Nachtaktive` und `Schnelle Antwortzeit`, um Mitglieder zu erkennen, die spät in der Nacht aktiv sind oder schnell antworten. `Schnelle Antwortzeit` funktioniert am besten, wenn die Live-Funktionen von FastComments genutzt werden.

Wenn neue Abzeichen erstellt werden, werden diese automatisch bestehenden Mitgliedern Ihrer Gemeinschaft, die qualifiziert sind, hinzugefügt.

### Direktnachrichten

Kunden haben seit der Einführung von FastComments nach der Möglichkeit gefragt, Benutzern Direktnachrichten zu senden. Zwei Jahre später freuen wir uns, diese Funktion endlich anzukündigen und danken denen, die geduldig gewartet haben.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="FastComments Direktnachrichten" title="FastComments Direktnachrichten"></video>
</div>

Direktnachrichten ermöglichen Mitgliedern einer Gemeinschaft, sich privat miteinander auszutauschen, dienen aber auch als nützliches Werkzeug für Moderatoren und Administratoren, um sich an Kommentatoren zu wenden.

Wie der Großteil von FastComments sind alle Funktionen für Direktnachrichten live.

#### Asynchrone Direktnachrichten

Wenn Sie einen Benutzer anschreiben, könnte er offline sein. In diesem Fall senden wir dem Benutzer eine E-Mail, um ihn darüber zu informieren, dass er eine neue Nachricht hat.

#### Direktnachrichten via E-Mail

Wenn ein Benutzer eine Nachricht per E-Mail erhält, hat er die Möglichkeit, auf diese E-Mail zu antworten.

<div class="text-center">
    <img src="/images/email-dm.png" alt="DM E-Mail" title="DM E-Mail" />
</div>

Wenn er dies tut, wird seine Antwort **live** für den anderen Benutzer im Nachrichten-Tab seines Profils angezeigt.

### Sicheres SSO

FastComments Benutzerprofile sind vollständig mit bestehenden sicheren SSO-Installationen kompatibel.

Dinge wie die Datenschutzeinstellungen des Benutzers können auch über das `isProfileActivityPrivate`-Flag im SSO-Payload konfiguriert werden.

Standardmäßig ist `isProfileActivityPrivate` wahr.

### Bestehende Kunden

Wir haben die Einführung dieser Funktion für alle bestehenden Kunden auf allen Stufen abgeschlossen.

### Konfiguration der Privatsphäre

Durch das Anzeigen Ihres Profils stehen Optionen zur Verfügung, um:

- Kommentieren auf Ihrem Profil zu deaktivieren.
- Zu verhindern, dass Ihre Aktivitäten von anderen eingesehen werden.
- Zu verhindern, dass andere Ihnen Direktnachrichten senden.

### Erhobene Daten

Benutzerprofile werden auf Grundlage der Daten erstellt, die wir heute haben, wie z.B. ihrem Namen, welchen Kommentar sie kürzlich hinterlassen haben, und so weiter.

Wir werden keine zusätzlichen Daten erheben, um die Profile der Benutzer zu erweitern. Wir betrachten Benutzerprofile eher wie ein typisches Benutzerprofil in einem Forum.

### Fazit

Wir glauben, dass diese Funktionen FastComments als Plattform erheblich erweitern, und hoffen, dass Sie sie nützlich und einfach zu bedienen finden.

Prost!

{{/isPost}}

---