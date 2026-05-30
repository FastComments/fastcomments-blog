[category:Migration]  
[category:Tutorials]  
###### [postdate]  
# [postlink]Wie man Werbung aus Disqus-Kommentaren entfernt[/postlink]  

{{#unless isPost}}  
Im kostenlosen Disqus-Plan kommt Ihr Kommentarfeld mit Werbung. Es gibt zwei Möglichkeiten, diese loszuwerden. Die bessere ermöglicht es außerdem, dass Ihre Kommentare schneller geladen werden und verhindert, dass Ihre Leser verfolgt werden.  
{{/unless}}  

{{#isPost}}  

Disqus finanziert seinen kostenlosen Plan, indem es Werbung in Ihrem Kommentarfeld platziert, direkt unter Ihrem Inhalt, an der Stelle, an der Ihre Leser mit Ihnen sprechen. Diese Werbung gehört Ihnen nicht. Sie wählen sie nicht aus und verdienen keinen Cent daran. Das ist der Preis für die kostenlose Stufe.  

Es gibt zwei echte Möglichkeiten, sie zu entfernen.  

## Option 1: Upgrade Ihres Disqus-Plans  

Der einfachste Weg ist, Disqus zu bezahlen. Ihre kostenpflichtigen Pläne schalten die Werbung ab. Sie finden die aktuellen Optionen auf der <a href="https://disqus.com/pricing/" target="_blank">Disqus-Preisseite</a>.  

Das funktioniert, aber es ist wichtig, klarzustellen, was Sie kaufen. Sie zahlen, um einen Nachteil rückgängig zu machen. Die Werbung verschwindet, und der Rest von Disqus bleibt gleich: Der Kommentarbereich lädt immer noch ein schweres Bündel von Drittanbieter-Skripten, und Ihre Leser werden immer noch über die Sites hinweg verfolgt, die es einbetten. Sie zahlen, um die Werbung zu entfernen, nicht um den Kommentarteil leichter oder privater zu machen.  

## Option 2: Wechseln Sie zu einer Plattform, die nie Werbung zeigt  

Der andere Weg, die Werbung zu entfernen, besteht darin, eine Kommentierungsplattform zu verwenden, die sie von vornherein nicht anbietet. :)  

Für nur 0,99 $/Monat bietet FastComments tief optimierte Funktionalität ohne Verfolgung oder Werbung.  

## Sie behalten jeden Kommentar  

Der Teil, um den sich die Leute am meisten sorgen, ist, ihre bestehenden Diskussionen zu verlieren. FastComments hat einen integrierten Disqus-Importeur, der Ihre Kommentare, Benutzernamen, Benutzer-Avatare, Inline-Bilder, Stimmen und Zeitstempel mitbringt. Wir verschieben sogar alle Bilder auf unser eigenes CDN für Sie.  

Wenn Sie die vollständige, detaillierte Anleitung möchten, haben wir einen speziellen Leitfaden: [Migrating From Disqus To FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). Die kurze Version finden Sie unten.  

## So wechseln Sie in drei Schritten  

### 1. Exportieren Sie Ihre Kommentare von Disqus  

Befolgen Sie die <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">eigenen Export Schritte von Disqus</a>. Sie werden Ihnen eine Datei mit der Erweiterung "gz" per E-Mail zusenden. Sie müssen diese nicht öffnen oder entpacken, und eine Standard-Windows-Installation kann dies auch gar nicht. Unser Backend liest diese komprimierte Datei direkt.  

### 2. Importieren Sie die Datei in FastComments  

Sobald Sie angemeldet sind, gehen Sie zur <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Importseite</a>, wählen Sie Disqus aus dem Dropdown-Menü und laden Sie die Datei so hoch, wie sie ist. Der Import läuft im Hintergrund; die Seite wird automatisch aktualisiert, während der Vorgang läuft, um Ihnen eine Live-Zählung der entdeckten und importierten Kommentare zu zeigen. Es ist sicher, so oft zu re-importieren, wie Sie möchten.  

### 3. Ersetzen Sie den Disqus-Snippet durch unseren  

Entfernen Sie den Disqus-Einbettungscode von Ihren Seiten und fügen Sie stattdessen <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">den FastComments-Snippet</a> ein. Sofern Ihre Seiten-URLs gleich bleiben, reiht sich Ihre importierten Kommentare genau dort ein, wo sie waren.  

## Auf WordPress?  

Wenn Ihre Seite auf WordPress läuft, überspringen Sie die manuellen Schritte und installieren Sie das <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress-Plugin</a>. Es übernimmt die Installation, Einrichtung und Synchronisierung für Sie, und dann können Sie Disqus deaktivieren.  

## Testen Sie es, bevor Sie sich festlegen  

Sie müssen den Schalter nicht auf einmal umlegen. Sie können Disqus und FastComments vorübergehend auf derselben Seite ausführen, um das Aussehen und das Gefühl zu vergleichen, bevor Sie vollständig umsteigen. Wenn Sie dabei Hilfe benötigen, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktieren Sie uns</a>, und wir helfen Ihnen dabei.  

Sind Sie sich nicht sicher, was FastComments Sie kosten wird? Jeder Plan ist werbefrei, und Sie können Ihre Zahl auf dem <a href="https://fastcomments.com/pricing-calculator" target="_blank">Preiskalkulator</a> überprüfen. Wenn Sie in der EU sind, können Sie Ihr Konto auf <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> erstellen, damit Ihre Daten in der EU bleiben.  

## Zusammenfassung  

1. Exportieren Sie Ihre Daten von Disqus  
2. Importieren Sie sie in FastComments  
3. Ersetzen Sie den Disqus-Snippet durch <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>  

Das ist alles. Keine Werbung in Ihrem Kommentarfeld, leichtere Seiten und jeder Kommentar, den Sie bereits hatten.  

Prost!  

{{/isPost}}