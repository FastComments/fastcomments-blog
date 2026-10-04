[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Kommentar ohne Auswahl eines Benutzernamens[/postlink]

{{#unless isPost}}
FastComments kann jetzt jedem neuen Besucher einen eindeutigen, neutralen Benutzernamen zuweisen, sodass sie nie einen eigenen erfinden müssen. Der geteilte Standardbenutzername wird zudem nicht mehr vom ersten Nutzer „besetzt“, der ihn verwendet.
{{/unless}}

{{#isPost}}

### Was ist neu

Wenn Ihre Seite keine Anmeldung hat, wurde ein Besucher, der einen Kommentar hinterlassen möchte, nach zwei Dingen gefragt: einer E‑Mail-Adresse und einem Benutzernamen.
Die E‑Mail ist einfach, aber der Benutzername muss eindeutig sein, er wird öffentlich angezeigt und sie müssen ihn sofort überlegen.

Dieses Release entfernt diesen Schritt. Aktivieren Sie **Generate Usernames Automatically** in Ihrer Widget‑Anpassung, und jeder neue
Besucher erscheint mit einem Namen wie `BraveOtter4172`, der bereits ausgefüllt ist. Sie können ihn behalten oder überschreiben. So oder so,
kommen sie schneller zum Kommentarfeld.

### So aktivieren Sie es

Öffnen Sie Ihre <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget-Anpassung</a>,
finden Sie den Abschnitt **Anonymization** und aktivieren Sie **Generate Usernames Automatically**. Es gibt nichts Weiteres zu konfigurieren.

Es funktioniert mit oder ohne **Allow Anonymous Comments**. Wenn Sie weiterhin von jedem Kommentator eine E‑Mail erhalten möchten, deaktivieren Sie das anonyme
Kommentieren. Besucher geben ihre E‑Mail ein, der Benutzername wird für sie verwaltet, und das war's. Wenn Sie keine E‑Mail benötigen,
aktivieren Sie das anonyme Kommentieren und ein Besucher kann kommentieren, ohne mehr zu tippen als den eigentlichen Kommentar.

### Was Besucher sehen

Das Feld für den Benutzernamen ist bereits mit dem generierten Namen ausgefüllt. Es ist ein normales Eingabefeld, sodass jeder, der unter einem anderen Namen bekannt sein möchte,
es einfach ersetzt. Nichts wird verborgen und nichts wird erzwungen.

Die Namen bestehen aus zwei Wörtern und einer Zahl, sodass sie lesbar und neutral sind. Niemand endet als `user_83729`.

### Jeder Name ist eindeutig

Ein generierter Name wird vor dem Angebot gegen bestehende Konten geprüft und für die Browsersitzung dieses Besuchers reserviert, sodass der nächste Besucher nicht denselben Namen erhält. Angemeldete Nutzer, SSO‑Nutzer und Besucher, die bereits kommentiert haben, erhalten niemals einen neuen Namen. Sie behalten den, den sie bereits haben.

Ein wiederkehrender Besucher, der eine bereits zuvor verwendete E‑Mail eingibt, wird seinem bestehenden Konto zugeordnet, sodass ein zweiter Besuch keine zweite Identität erzeugt, selbst wenn der Browser dazwischen geleert wurde.

### Fehlerbehebung – Der Standardbenutzername ist jetzt wirklich geteilt

Einige von Ihnen haben **Default Username** mit einem Wert wie „Anonymous“ verwendet, um fast das Ziel zu erreichen. Das hatte eine
Fallstrick. Benutzernamen sind eindeutig, sodass der erste Besucher, der als „Anonymous“ mit seiner E‑Mail kommentierte, den Namen besaß, und der
nächste Besucher mit einer anderen E‑Mail die Meldung erhielt, der Benutzername sei bereits vergeben.

Das ist jetzt behoben. Der Standardbenutzername wird nun als gemeinsamer Anzeigename statt als Identität behandelt. Jeder Besucher, der ihn beibehält, erhält im Hintergrund ein eigenes Konto, und alle werden als „Anonymous“ angezeigt. Benutzernamen, die Besucher selbst eingeben, müssen weiterhin eindeutig sein, wie zuvor.

Wenn Sie beide Optionen setzen, hat der generierte Name Vorrang.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">Der Leitfaden „Generate Usernames Automatically“</a>
beschreibt die Option und wie sie mit den anderen Einstellungen für anonymes Kommentieren interagiert.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">Der Leitfaden „Default Username“</a>
erklärt das Verhalten des geteilten Namens.

### Fazit

Dieses Feature stammt von einem Kunden, der eine Seite betreibt, auf der Besucher Patienten sind, die möglicherweise nur ein einziges Stück
Feedback hinterlassen. Sie nach einer E‑Mail und einem eindeutigen Benutzernamen zu fragen, war eine Frage zu viel. Wenn eine Einstellung zwischen
Ihren Lesern und dem Kommentarfeld steht, lassen Sie es uns unten wissen.

Prost!

{{/isPost}}