---
[category:Tutorials]
###### [postdate]
# [postlink]Debugging Your FastComments Installation Made Easier[/postlink]

{{#unless isPost}}
Kommentare werden nicht angezeigt? Einstellungen scheinen nicht angewendet zu werden? Das Herausfinden wurde gerade erheblich erleichtert.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technischen Jargon

#### Was gibt's Neues

Bei <a href="https://fastcomments.com">FastComments</a> haben wir gerade eine Browser-Erweiterung für Google Chrome veröffentlicht. Diese Erweiterung hilft Ihnen zu verstehen, welche Konfiguration
das Kommentarfeld erhält und warum es möglicherweise nicht angezeigt wird.

Sie finden die Erweiterung hier: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Wie man sie benutzt

Wenn Sie feststellen, dass das Kommentarfeld nicht geladen wird oder eine von Ihnen definierte Konfiguration nicht angezeigt wird, versuchen Sie, <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">die Erweiterung</a> zu installieren
und sie auf der betreffenden Seite zu öffnen. Um das Symbol in Ihrer Symbolleiste zu sehen, müssen Sie möglicherweise das Puzzlestück oben rechts anklicken, um es anzupinnen, wie gezeigt:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Wie man die Erweiterung anpinnt" title="Wie man die Erweiterung anpinnt" class="lozad" />
</div>

Die Erweiterung kann bei der Fehlersuche in zwei Kategorien von Fehlern helfen. Die erste, wenn das Widget überhaupt nicht auf der Seite enthalten ist oder ein schwerwiegender Tippfehler im Skript vorliegt.

Die zweite Kategorie ist, wenn eine Konfiguration nicht zu wirken scheint.

Um beide zu debuggen, klicken Sie einfach auf das Symbol.

Wenn das Tool das Kommentarfeld auf der Seite nicht findet, erhalten Sie eine große rote Fehlermeldung:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Beispiel: Embed.js nicht gefunden" title="Beispiel: Embed.js nicht gefunden" class="lozad" />
</div>

Wenn eine oder mehrere Instanzen des Widgets gefunden wurden, sehen Sie deren Konfigurationen separat angezeigt:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Beispiel für mehrere Konfigurationen" title="Beispiel für mehrere Konfigurationen" class="lozad" />
</div>

Darüber hinaus zeigt der FastComments Debugger auch Warnungen für häufige Probleme an – wie das Nichtanzeigen des Widgets im Nur-Lese-Modus, wenn keine Kommentare verfügbar sind.

#### "Endgültige" Instanz-Einstellungen?

Sie werden möglicherweise sehen, dass der Debugger zwei Sätze von Konfigurationen anzeigt - eine mit "An Widget übergeben" und eine mit "Endgültig".

Die Konfiguration "An Widget übergeben" ist, wie Sie vielleicht erraten, die Konfiguration, die Sie an das Widget übergeben. Einige Werte werden implizit über embed.js übergeben, wie die URL oder der Seitentitel - und diese sind enthalten.

Die "Endgültige" Konfiguration ist alles, was das Widget zum Rendern verwendet. Das kann selbst ausgefüllte Werte (wie Instanz-ID) oder <b>Werte von der Admin-Seite zur Widget-Anpassung</b> bedeuten.

#### Wie es funktioniert

Das Kommentarfeld speichert seine Konfiguration an einem Ort, den der Debugger finden kann, und der Debugger durchsucht die aktuelle Seite, auf der Sie sich befinden, nach Instanzen des Widgets und lädt diese in den Speicher.

#### Welche Informationen sammelt diese Erweiterung?

Das FastComments Debug Tool telefoniert nicht nach Hause und kommuniziert nicht mit irgendwelchen FastComments-Servern. In der Tat wird das Widget nicht einmal den Inhalt der Seite überprüfen, auf der Sie sich befinden,
es sei denn, Sie öffnen es.

#### Fazit

Wir hoffen, dass die Bereitstellung von mehr Werkzeugen wie diesem die Einrichtung von FastComments für jeden Typ von Kunden einfacher macht. Lassen Sie uns im Kommentarfeld unten wissen,
wie das für Sie funktioniert hat.

Wir wissen, dass Sie in einigen Fällen möglicherweise eine helfende Hand benötigen - und dafür gibt es immer noch die <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Support-Seite</a>.

Prost!

{{/isPost}}