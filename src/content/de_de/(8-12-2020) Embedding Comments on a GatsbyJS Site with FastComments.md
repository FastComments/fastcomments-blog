---
[category:Integrations]
###### [postdate]
# [postlink]Kommentare auf einer GatsbyJS-Website mit FastComments einbetten[/postlink]

{{#unless isPost}}
Jetzt kannst du FastComments verwenden, um Kommentare in eine mit Gatsby erstellte Website einzubetten!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält Fachbegriffe

#### Neuigkeiten

Wir haben kürzlich unser <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React-Komponente</a> für FastComments gestartet.

Das eröffnet viele Möglichkeiten - einschließlich der Integration von FastComments mit Gatsby.

#### Wenn du deinen eigenen Wrapper geschrieben hast

Wenn du deinen eigenen React-Wrapper für FastComments geschrieben hast - ziehe in Betracht, ihn durch unseren neuen zu ersetzen. Wir werden diese Abstraktion für dich pflegen - und sie enthält viele
nützliche Dinge wie <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">automatische Aktualisierung bei Konfigurationsänderungen</a>.

#### So funktioniert es

Da FastComments eine React-Komponente als Wrapper um unser Kern-Widget hat - ist es nur eine Frage, unsere React-Bibliothek zu verwenden, um das Widget clientseitig zu instanziieren.

Wir unterstützen diese Komponente vollständig und werden sie aktualisiert halten.

#### Beispiele?

Wir haben damit begonnen, Beispiele einzurichten, die du <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">hier</a> finden kannst.

#### Nachtmodus

Eines der Beispiele, das wir haben, ist der "Nachtmodus" - Rendering von FastComments auf einer Website mit einem schwarzen (oder sehr dunklen) Hintergrund: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Zusätzlich, da das Widget auf Änderungen der Konfiguration reagiert, bedeutet dies, dass du einen Modus haben kannst, um das Thema deiner Website umzuschalten und fastcomments-react leicht zu sagen, dass es aktualisiert werden soll.

#### Zum Schluss

Wir hoffen, dass du die Integration von FastComments in deine Gatsby-Website schnell und einfach findest.

Prost!

{{/isPost}}

---