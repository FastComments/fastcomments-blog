---
[category:API & Development]

###### [postdate]
# [postlink]FastComments Geht auf Angular[/postlink]

{{#unless isPost}}
Müssen Sie Kommentare in eine mit Angular entwickelte Anwendung einbetten? Wir helfen Ihnen dabei.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel Enthält Technisches Fachjargon

#### Was ist Neu

FastComments hat jetzt eine Angular-Komponente, die funktional mit unserem VanillaJS-Widget gleichwertig ist.

Wir haben beschlossen, die Bibliothek ngx-fastcomments zu nennen. Sie können das GitHub-Repository mit dem Quellcode <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">hier</a> finden.

Das Repository enthält auch Beispielanwendungen des Widgets in Form eines Angular-Arbeitsbereichs.

Sie können es auf NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">hier</a> finden.

#### Wie es Funktioniert

Die neue Komponente funktioniert so, dass die Angular-Komponente ein Wrapper um das bestehende FastComments-Widget ist.

Das bedeutet, dass, wenn wir Funktionen zu unseren bestehenden Komponenten hinzufügen oder Fehler beheben, Sie sofort davon profitieren!

#### Warum Die Neue Komponente?

Wir haben das FastComments VanillaJS-Widget geschrieben, um das Kernstück unseres Geschäfts (neben dem Kern-Backend) zu sein. Das bedeutet, wir haben es so entworfen, dass es genau so erweitert werden kann, wie wir es jetzt tun.

Ohne diese neue Angular-Bibliothek hätten Sie FastComments in Ihre Anwendung integrieren können, indem Sie Ihre eigene Bibliothek schreiben, aber es wäre ein großes Hindernis für die Akzeptanz gewesen. Durch die direkte Unterstützung von Angular erleichtern wir die Einführung von FastComments für diese Art von Kunden.

#### Single Page Anwendungen?

FastComments unterstützt SPAs im Kern. Die Komponente überwacht Änderungen am Konfigurationsobjekt mithilfe der Änderungsdetektion. Wenn Sie beispielsweise die aktuelle Seite (genannt urlId) aktualisieren, wird das Widget neu gerendert. Dies macht Anwendungsfälle wie das Umschalten in den Dunkelmodus oder das Hinzufügen von Seitenzahlen einfach umsetzbar.

#### Was Ändert Sich Für Bestehende Kunden

Für bestehende Kunden ändert sich nichts - und es ist **nichts** falsch daran, die VanillaJS-Version von FastComments für neue Projekte zu verwenden. ngx-fastcomments hängt von der VanillaJS-Version von FastComments ab und wird es immer tun. Wenn wir neue Komponenten veröffentlichen, werden wir dasselbe Modell befolgen.

Unser VanillaJS-Widget ist ein erstklassiger Teil von FastComments. Diese Veröffentlichung ist vollständig *erweiternd* für unsere Infrastruktur.

Zusätzlich bleibt das VanillaJS-Widget eine großartige Lösung, um eingebettete Kommentare in jede Webseite einzufügen, die kein Framework verwendet, wie eine statische Seite.

#### Fazit

Durch die Veröffentlichung der ngx-fastcomments-Bibliothek und zukünftiger Bibliotheken hoffen wir, dass wir es Entwicklern erleichtern können, FastComments unter Verwendung moderner Entwicklungsmethodologien zu übernehmen. 

Prost!

{{/isPost}}

---