---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments veröffentlicht serverseitiges Rendering[/postlink]

{{#unless isPost}}
Fügen Sie Ihrer Seite Kommentarfunktionen hinzu, ohne JavaScript zu verwenden.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technische Fachbegriffe

## Was gibt's Neues

Seit dem Start Anfang 2020 hat FastComments ausschließlich JavaScript verwendet, um das Kommentarsystem darzustellen.

Was wäre, wenn wir Ihnen sagen würden, dass Sie fast alle gleichen grundlegenden Funktionen haben könnten, aber ohne JS?

<div class="text-center">
    <div class="sm">Das ist ein Screenshot, versuchen Sie nicht, darauf zu klicken.</div>
    <img src="images/ssr-demo.png" alt="SSR-Demo" title="SSR-Demo" />
</div>

Der obige Screenshot zeigt das FastComments-Kommentarsystem ohne JavaScript. [Sie können diese Seite hier ohne JavaScript anzeigen.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## So verwenden Sie es

Wenn Sie WordPress verwenden, fügt das FastComments-Plugin Version 3.10.1 automatisch Unterstützung für SSR als Rückfalloption für Benutzer hinzu, die mit deaktiviertem JS surfen.

Für benutzerdefinierte Implementierungen holen Sie die Benutzeroberfläche für einen Kommentar-Thread, indem Sie einfach `/ssr/comments` für diese Seite aufrufen:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Wobei `$urlId` die URL oder die ID der Seite ist. Dokumentation dazu finden Sie [hier](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Zum Beispiel können wir mit PHP ein iframe an die Seite senden, das den Kommentar-Thread darin rendert:

<div class="code"><div class="title">PHP-basiertes SSR-Beispiel</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Wir könnten auch einen API-Aufruf machen, um das HTML für einen Kommentar-Thread zu erhalten und es darzustellen oder zu speichern.

Vollständige Dokumentation ist in den [SSR-Dokumenten unter docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html) verfügbar.

## SSO

Weil wir Akronyme mögen, die nach Unternehmen klingen, keine Sorge, SSR unterstützt SSO. [Ein Beispiel für Single-Sign-On mit SSR finden Sie hier.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Lokalisierung

Der SSR-basierte Endpunkt lokalisiert automatisch die Antwort basierend auf den sprachbezogenen Headern, die der Browser sendet. Er kann auch die gleichen Lokalisierungsüberschreibungen verwenden wie das auf JavaScript basierende Widget.

## Warum wurde das gebaut

Eine der häufigsten Beschwerden über Dienste wie FastComments ist, dass sie JS erfordern. Wir machen unser Kommentarsystem so schlank wie möglich und stellen sicher, dass wir unsere API-Aufruf-SLAs von < 20ms einhalten, aber viele kleinere Gemeinschaften werden eine solche Lösung nicht wählen, wenn es bedeutet, dass sie JS zu ihrer Seite hinzufügen müssen.

Das eröffnet auch die Möglichkeit, Rendering-Engines zu verwenden, die keinen Zugriff auf JavaScript haben.

## Die Technologie

FastComments verwendet ein eigenes kleines Mikroframework für das Rendering der UI. Dieses Framework verwendet einen ähnlichen Ansatz wie React, mit der Ausnahme, dass manuelle DOM-Manipulationen außerhalb des ursprünglichen Renderings erlaubt sind.

Die Kernbibliothek des Kommentarsystems hat einen einzigen Einstiegspunkt - sie nimmt einen Satz von Zuständen und erstellt das resultierende HTML und CSS zum Rendern. Wir rufen dies einfach auch auf dem Server auf. Wenn der Benutzer mit der Seite interagiert, ändert sich der Zustand und das neueste HTML wird abgerufen. Dies wurde als Ergebnis eines Hackathons gebaut, der im Rahmen des neuen Jahres stattfand.

## Live-Kommentare

Da die UI vom Server einmalig gerendert wird, sind Live-Kommentarfunktionen nicht verfügbar.

Zusätzlich ist die Benachrichtigungsglocke derzeit nicht verfügbar. Wir sind offen für die Hinzufügung dieser Funktion in der Zukunft.

## Leistung

Die servergerenderte UI nutzt die gleichen Speicheroptimierungen und Rendering-Engines wie das auf JavaScript basierende Widget. Bei kleinen Kommentar-Threads ist die Leistung tatsächlich besser, da der Benutzer kein Skript herunterladen muss, das dann die Kommentare abruft und die UI rendert.

## Crawler und SEO

FastComments funktioniert bereits gut mit Web-Crawlern; wenn SEO ein Anliegen ist, ist die Verwendung von SSR nicht erforderlich.

## Zukünftige Anwendungen

Wir planen, in Zukunft eine Forum-Lösung einzuführen. Traditionell sind Foren paginiert und serverseitig gerendert. Moderne Forum-Lösungen weichen von dieser Norm ab, indem sie unendliches Scrollen und clientseitiges Rendering verwenden. Wir denken nicht, dass dies die einzige Option sein muss, um eine Drittanbieter-Forum-Lösung zu verwenden.

## Fazit

Wir hoffen, dass Sie diesen Leitfaden hilfreich und leicht verständlich fanden. Fühlen Sie sich frei, unten mit Fragen zu kommentieren.

Prost!

<style>/*

Monokai Sublime Stil. Abgeleitet von Monokai von noformnocontent http://nn.mit-license.org/

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #23241f;
}

.hljs,
.hljs-tag,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2;
}

.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff;
}

.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672;
}

.hljs-symbol,
.hljs-attribute {
  color: #66d9ef;
}

.hljs-params,
.hljs-class .hljs-title {
  color: #f8f8f2;
}

.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}
</style>

{{/isPost}}

---