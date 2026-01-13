---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments erhält einen neuen Look[/postlink]

{{#unless isPost}} FastComments wurde aktualisiert. Erfahren Sie mehr über das Update und wie Sie es erhalten können. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technische Fachbegriffe

### Ein neuer Look

Bis heute hat sich das Aussehen und das Gefühl des FastComments Kommentar-Widgets nur schrittweise entwickelt. Heute veröffentlichen wir
eine ganz neue Version!

Sehen Sie sich den Vergleich unten an (ziehen Sie den Schieberegler, um zu vergleichen):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Bestehende Kunden

Da ein großer Teil unserer Nutzer das Kommentar-Widget anpasst, haben wir die neue Benutzeroberfläche vollständig separat gehalten. Sie sollten keine
Änderungen sehen, bis Sie migriert sind.

### Wer es erhält

Neue Kunden, die sich ab heute anmelden, erhalten automatisch das neue Design. Alle unsere Frameworks, Bibliotheken und
Plugins haben Updates erhalten, um die neue Version des FastComments Kommentar-Widgets zu integrieren.

### Lebenszyklus der vorherigen Version

Wir setzen derzeit kein Enddatum für die vorherige Version des Kommentar-Widgets fest. Das bedeutet jedoch nicht, dass wir in Zukunft kein
solches ankündigen werden. Wenn wir dies tun, werden wir einen angemessenen Zeitraum (6 - 12 Monate von der Ankündigung bis zur Stilllegung) einräumen.

Unser automatisiertes Testsystem wurde aktualisiert, um verschiedene Versionen des Kommentar-Widgets zu unterstützen, sodass die vorherige Version
weiterhin kontinuierlich automatisiert getestet wird.

### Dunkelmodus & andere Funktionen

Das neue Design unterstützt den Dunkelmodus, genau wie das ursprüngliche Kommentar-Widget. Alle Feature-Flags und Einstellungen wurden migriert.

Was den Dunkelmodus betrifft, so waren bei der alten Kommentar-Benutzeroberfläche die Ressourcen für den Dunkelmodus immer beim Laden der Seite enthalten, selbst wenn sie
nicht verwendet wurden. Dies waren etwa 2kb, die immer an den Client heruntergeladen wurden – auch wenn sie nicht benötigt wurden.

Die neue Version des Kommentar-Widgets holt sich diese Ressourcen, einschließlich Styling, nur, wenn sie benötigt werden.

### Standard-Avatar

Der in der neuen Benutzeroberfläche verwendete Standard-Avatar ist anders. Bei der Migration wird der Standard-Avatar, der im gesamten Produkt im Admin-
Dashboard und in allen Benachrichtigungs-E-Mails verwendet wird, ebenfalls aktualisiert.

### Auswirkungen der Anpassungsregeln

Wir sind uns bewusst, dass wir, wenn wir Styling-Änderungen am öffentlich sichtbaren Kommentar-Widget vornehmen, die Anpassungen unserer Kunden
beeinträchtigen können. Keine Sorge, wir haben alles abgedeckt und haben jeden benutzerdefinierten Widget-Stil überprüft, um sicherzustellen, dass er
nicht zurückgegangen ist. Wenn Sie jedoch Probleme feststellen, lassen Sie es uns wissen.

### Leistungsauswirkungen

Die Gesamgröße des Kommentar-Widgets ist von 15.4kb auf 17.4kb gestiegen. Während wir denken, dass eine leichte Erhöhung der Bundle-Größe
für das verbesserte Aussehen der Benutzeroberfläche gerechtfertigt ist, haben wir Maßnahmen geplant, um diese wieder zu reduzieren.

Insgesamt lädt die neue Benutzeroberfläche schneller, da jetzt mehr Ressourcen gebündelt sind und somit weniger Anfragen resultieren.

### So migrieren Sie

#### Über den Support

Wenden Sie sich einfach an Ihren Supportmitarbeiter oder starten Sie das Gespräch [hier](https://fastcomments.com/auth/my-account/help).

#### WordPress

Wenn Sie **WordPress** verwenden, aktualisieren Sie einfach auf die neueste Version und aktualisieren Sie alle benutzerdefinierten Stile, die Sie möglicherweise haben.

#### Benutzerdefinierte Integrationen

Wenn Sie das **VanillaJS** Kommentar-Widget verwenden, ändern Sie einfach:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

In:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Wenn Sie die **React-, Angular- oder Vue**-Bibliotheken verwenden, aktualisieren Sie einfach auf Version 2.

### Einige nerdige Statistiken

Von der Idee über das Design bis zur Implementierung war dies ein zweimonatiges Projekt, das über **100+ Dateien** umfasste und über **neuntausend Zeilen Code** änderte.

Wir haben auch unser Build-System vollständig überarbeitet, um eine gemeinsame Codebasis zwischen den Versionen des Kommentar-
Widgets zu haben. Dieses System ermöglicht es uns, zu Kompilierungszeit Ausdrücke zu verwenden, um nur den Code für die entsprechende Version der
Benutzeroberfläche einzuschließen, wodurch die Größe des Widget-Bundles verringert wird.

### Zukunftsorientiertes Denken

Das vorherige Design hielt von 2019 bis Mitte 2021. Wir hoffen, dass dieser neue Look uns weiter in die Zukunft trägt und unsere
neue Infrastruktur zur Verwaltung mehrerer Versionen der Kommentar-Benutzeroberfläche es FastComments ermöglicht, ohne Unterbrechungen für unsere
Kunden im Laufe der Zeit zu wachsen.

Viel Spaß beim Kommentieren!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---