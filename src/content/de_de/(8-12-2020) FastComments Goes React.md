---
[category:API & Development]
###### [postdate]
# [postlink]FastComments geht React[/postlink]

{{#unless isPost}}
Müssen Sie Kommentare in eine mit React entwickelte Anwendung einfügen? Wir helfen Ihnen dabei.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technische Fachbegriffe

#### Was gibt's Neues

FastComments hat jetzt eine React-Komponente, die funktional gleichwertig mit unserem VanillaJS-Widget ist.

Wir haben uns entschieden, die Bibliothek fastcomments-react zu nennen. Sie finden das GitHub-Repository mit dem Quellcode <a href="https://github.com/FastComments/fastcomments-react" target="_blank">hier</a>.

Das Repository enthält auch Beispielanwendungen des Widgets.

Es ist auf NPM, das Sie <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">hier</a> finden können.

#### Wie es funktioniert

Die Funktionsweise dieser neuen Komponente besteht darin, dass die React-Komponente eine Wrapper um das bestehende FastComments-Widget ist.

Das bedeutet, wenn wir Funktionen zu unseren bestehenden Komponenten hinzufügen oder Fehler beheben, profitieren Sie sofort davon!

#### Warum die neue Komponente?

Wir haben das FastComments VanillaJS-Widget als Kern unseres Geschäfts (neben dem Backend-Kern) entwickelt. Das bedeutet, wir haben es so konzipiert, dass es genau so erweitert werden kann, wie wir es jetzt tun.

Ohne diese neue React-Bibliothek hätten Sie FastComments in Ihre Anwendung integrieren können, indem Sie Ihre eigene Bibliothek schreiben, aber das hätte eine große Hürde für die Akzeptanz dargestellt. Durch die direkte Unterstützung von React erleichtern wir die Adoption von FastComments für diese Art von Kunden erheblich.

#### Single Page Applications?

FastComments unterstützt SPAs grundlegend. Die Komponente überwacht Änderungen am Konfigurationsobjekt – wenn Sie also die aktuelle Seite (genannt urlId) aktualisieren, wird das Widget neu gerendert.

#### Was ändert sich für bestehende Kunden

Es ändert sich nichts für bestehende Kunden – und es ist **nichts** falsch daran, die VanillaJS-Version von FastComments für neue Projekte zu verwenden. fastcomments-react hängt von der VanillaJS-Version von FastComments ab und wird es immer tun. Wenn wir Angular- oder Vue-Komponenten veröffentlichen, werden wir dasselbe Modell verfolgen.

Unser VanillaJS-Widget ist ein erstklassiges Element von FastComments. Diese Veröffentlichung ist vollständig *additiv* zu unserer Infrastruktur.

Zudem bleibt das VanillaJS-Widget eine großartige Lösung, um eingebettete Kommentare in jede Webseite einzufügen, die kein Framework verwendet, wie z.B. eine statische Seite.

#### Fazit

Mit der Veröffentlichung der fastcomments-react-Bibliothek und zukünftiger Bibliotheken hoffen wir, die Adoption von FastComments für Entwickler zu erleichtern, während sie moderne Entwicklungsmethoden verwenden.

Prost!

{{/isPost}}

---