[category:Migration]
###### [postdate]
# [postlink]Migration von AnyComment im Jahr 2026 zu FastComments[/postlink]

{{#unless isPost}}
Lesen Sie diesen Beitrag, um zu erfahren, wie Sie 2026 vollständig von AnyComment zu FastComments migrieren können.
{{/unless}}

{{#isPost}}

Wir haben eine Reihe von Kunden, die nach der Migration von AnyComment im Jahr 2026 gefragt haben.

## AnyComment lebt in WordPress

AnyComment ist ein WordPress-Plugin. Im Gegensatz zu eigenständigen Plattformen wie Disqus oder Hyvor Talk führt es kein eigenes Backend - Ihre Kommentare werden direkt in Ihrer WordPress-Datenbank gespeichert, in derselben `wp_comments`-Tabelle, die das Kern-WP verwendet. Das ist großartige Nachrichten für die Migration: Es gibt keinen separaten AnyComment-Export, den man bewältigen müsste, und keinen Drittanbieter-Server, mit dem man sich koordinieren müsste. Ihre Daten befinden sich bereits auf Ihrem eigenen Server.

Das bedeutet, dass der standardmäßige FastComments WordPress-Migrationsfluss AnyComment ohne zusätzliche Schritte behandelt.

## Option 1: Das FastComments WordPress Plugin (Empfohlen)

Der einfachste Weg ist, das <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress-Plugin</a> zu installieren. Das Plugin leitet Sie durch die Verknüpfung Ihrer WordPress-Installation mit FastComments und kopiert Ihre vorhandenen Kommentardaten automatisch. Es gibt nichts, was man manuell herunterladen oder hochladen müsste. Die Daten werden von Ihrer WordPress-Datenbank auf unsere Server kopiert, sodass dies auch die Last von Ihren Servern verringert, sobald die Migration abgeschlossen ist.

Die meisten Migrationen sind in ein paar Minuten abgeschlossen.

Nachdem die Daten übertragen wurden, deaktivieren Sie AnyComment. Die Kommentare werden weiterhin von FastComments bereitgestellt, und das Plugin hält Ihre WordPress-Datenbank als Backup synchron (wenn Sie diese Funktion aktivieren), sodass Sie immer im Besitz Ihrer Daten sind.

## Option 2: WordPress XML-Export

Wenn Sie lieber manuell migrieren möchten oder bereits von WordPress gewechselt haben und nur eine XML-Sicherung haben, verwenden Sie den integrierten Export von WordPress.

1. Gehen Sie in Ihrem WordPress-Adminbereich zu **Werkzeuge -> Exportieren** und laden Sie die XML-Datei herunter.
2. Melden Sie sich in Ihrem FastComments-Dashboard an und gehen Sie <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hierher, um die Datei zu importieren</a>.
3. Wählen Sie **WordPress (.xml)** aus dem Dropdown-Menü und laden Sie Ihre Datei hoch.

Da AnyComment in `wp_comments` schreibt, befindet sich jeder AnyComment-Thread in dieser XML-Datei zusammen mit Ihren anderen WordPress-Kommentaren. Der Importer ordnet sie automatisch dem richtigen Beitrag zu.

## Ersetzen des AnyComment-Widgets

Wenn Sie Option 1 verwendet haben, ersetzt das FastComments WordPress-Plugin bereits AnyComment auf Ihrer Website - deaktivieren Sie einfach AnyComment, nachdem die Migration abgeschlossen ist.

Wenn Sie Option 2 verwendet haben und Ihre WordPress-Installation beibehalten, installieren Sie anschließend das FastComments-Plugin, um die Widget-Darstellung und die fortlaufende Synchronisierung zu verwalten. Wenn Sie vollständig von WordPress wechseln, fügen Sie unser <a href="https://fastcomments.com/install-wizard" target="_blank">Installationssnippet</a> auf Ihrer neuen Website ein - wir unterstützen viele Front-End-Frameworks, die <a href="https://fastcomments.com/install-wizard" target="_blank">Sie hier finden können</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wir können dabei helfen</a>.

## EU

Wenn Sie in der EU sind, möchten Sie wahrscheinlich Ihr Konto auf <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> erstellen, damit Ihre Kundendaten in der EU bleiben.

## Zusammenfassung

1. Installieren Sie das FastComments WordPress-Plugin und lassen Sie es Ihre Daten übertragen, **oder** exportieren Sie aus WordPress als XML und laden Sie es auf der Importseite hoch.
2. Deaktivieren Sie AnyComment.
3. Wenn Sie auch WordPress verlassen, tauschen Sie den Widget-Code auf Ihrer neuen Website aus.

{{/isPost}}