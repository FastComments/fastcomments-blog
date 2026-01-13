---
[category:API & Development]
###### [postdate]
# [postlink]FastComments in VanillaJS Einzelanwendungen verwenden[/postlink]

{{#unless isPost}}
Während wir dedizierte React- und VueJS-Komponenten haben, kann das Vanilla-Widget auch in Einzelanwendungen verwendet werden.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technisches Fachvokabular

#### Zielgruppe

Dieser Artikel richtet sich an Entwickler.

#### Einführung

Die meisten Beispielverwendungen des FastComments VanillaJS-Widgets sind sehr einfache Code-Snippets, die den Kommentarthread für die aktuelle Seiten-URL laden. Das liegt daran, dass
dies der Anwendungsfall für die überwältigende Mehrheit unserer Kunden ist, aber in letzter Zeit haben wir einen Zustrom von Entwicklern gesehen, die SPAs erstellen und FastComments verwenden.

Zuerst beachten Sie, dass FastComments dedizierte <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> und <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> Komponenten hat, werfen Sie also einen Blick darauf,
wenn Sie diese Bibliotheken verwenden, damit Sie Ihren eigenen Wrapper um FastComments nicht erstellen müssen.

Wenn Sie Ihre Anwendung jedoch mit VanillaJS erstellen, können Sie das Kommentar-Widget dynamisch instanziieren und aktualisieren.

#### Zuerst, die URL und die URL-ID

FastComments hat zwei Identifikatoren für die Seite oder den Artikel, an den der Kommentarthread gebunden ist. Im Konfigurationsobjekt sind dies die "url"- und "urlId"-Eigenschaften.

Die URL ist die URL zum Kommentar-Widget. Idealerweise sollten Sie in der Lage sein, diese URL von außerhalb Ihrer Anwendung aufzurufen. Sie wird als Link in Benachrichtigungs-E-Mails und in
Administrator-Tools angezeigt.

Die URL-ID ist eine Zeichenkette, die entweder eine URL oder eine ID ist – sie kann jeden Wert haben, solange sie die aktuelle Seite darstellt. Wenn Sie eine Beitrags-, Artikel- oder Seiten-ID haben, können Sie diese anstelle der Seiten-URL für diesen Wert verwenden. Der Grund, warum die URL-ID separat ist, liegt darin, dass Sie möglicherweise zusätzliche Informationen in der URL speichern möchten, die die URL nicht einzigartig für die Seite machen würden.

Bitte beachten Sie, dass wir die vollständige Konfiguration, die das Widget in TypeScript unterstützt, <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">auf GitHub</a> dokumentiert haben.

#### Spezifitäten und ein echtes Demo

Wenn das Widget instanziiert wird, erfassen Sie das Ergebnis der FastCommentsUI-Funktion, die Sie normalerweise aufrufen würden:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Dann können Sie eine "update"-Methode auf dem Instanzobjekt aufrufen, um die Konfiguration zu aktualisieren. Dadurch wird die Komponente aktualisiert:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Sie können ein funktionierendes Beispiel <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">mit diesem Fiddle</a> sehen.

Bitte beachten Sie, dass wir in diesem Beispiel document.getElementById verwenden, aber Sie können jeden beliebigen Mechanismus verwenden, um das Ziel-Element abzurufen.

#### Fallstricke

Während es funktioniert, nur "urlId" zu aktualisieren, sollten Sie sowohl "urlId" als auch "url" aktualisieren, auch wenn sie gleich sind, damit die Links aus Benachrichtigungs-E-Mails und
den Moderationstools funktionieren. Nur die "url" zu aktualisieren funktioniert nicht – Kommentare sind an die "urlId" gebunden.

#### Fazit

Wir hoffen, dass Sie diesen Leitfaden hilfreich fanden. Fühlen Sie sich frei, unten mit Fragen zu kommentieren.

Prost!

{{/isPost}}

---