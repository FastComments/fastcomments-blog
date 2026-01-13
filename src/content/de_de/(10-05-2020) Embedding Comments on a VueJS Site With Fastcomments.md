---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Kommentare auf einer VueJS-Seite mit FastComments einbetten[/postlink]

{{#unless isPost}}
Müssen Sie Kommentare in eine mit Vue entwickelte Anwendung einbetten? Wir haben die Lösung.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält Fachbegriffe

#### Was gibt's Neues

FastComments hat jetzt eine Vue-Komponente, die mit unserem VanillaJS-Widget gleichwertig ist.

Wir haben beschlossen, die Bibliothek fastcomments-vue zu nennen. Sie können das GitHub-Repository mit dem Quellcode <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">hier</a> finden.

Das Repository enthält auch Beispiele zur Nutzung des Widgets.

Es ist auf NPM, das Sie <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">hier</a> finden können.

#### Wie es funktioniert

Die Funktionsweise dieser neuen Komponente ist die, dass die Vue-Komponente ein Wrapper um das bestehende FastComments-Widget ist.

Das bedeutet, dass Sie sofort profitieren, wenn wir Funktionen zu unseren bestehenden Komponenten hinzufügen oder Fehler beheben!

#### Warum die neue Komponente?

Wir haben das FastComments VanillaJS-Widget als Kern unseres Geschäfts (neben dem Backend) entwickelt. Das bedeutet, wir haben es so entworfen, dass es genau so erweitert werden kann, wie wir es jetzt tun.

Ohne diese neue Vue-Bibliothek hätten Sie FastComments möglicherweise durch das Schreiben Ihrer eigenen Bibliothek in Ihre Anwendung integriert, aber das wäre eine große Hürde für die Akzeptanz gewesen. Durch die direkte Unterstützung von Vue erleichtern wir es diesen Kundentypen, FastComments zu übernehmen.

#### Vue 3.0

Wir haben eine speziell für Vue 3.0 entwickelte Komponente namens <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Single Page Applications?

FastComments unterstützt SPAs von Grund auf. Die Komponente überwacht Änderungen am Config-Objekt - wenn Sie also die aktuelle Seite (genannt urlId) aktualisieren, wird das Widget neu gerendert.

#### Was ändert sich für bestehende Kunden

Für bestehende Kunden ändert sich nichts - und es ist **nichts** falsch daran, die VanillaJS-Version von FastComments für neue Projekte zu verwenden. fastcomments-vue hängt von der VanillaJS-Version von FastComments ab und wird es immer tun. Wenn wir Angular- oder Vue-Komponenten veröffentlichen, werden wir das gleiche Modell verfolgen.

Unser VanillaJS-Widget ist ein erstklassiger Bürger von FastComments. Diese Veröffentlichung ist vollständig *additiv* zu unserer Infrastruktur.

Darüber hinaus bleibt das VanillaJS-Widget eine großartige Lösung, um eingebettete Kommentare in jede Webseite zu integrieren, die kein Framework verwendet, wie eine statische Seite.

#### Fazit

Durch die Veröffentlichung der Bibliothek fastcomments-vue und zukünftiger Bibliotheken hoffen wir, es Entwicklern zu erleichtern, FastComments unter Verwendung moderner Entwicklungsmethodologien zu übernehmen.

Prost!

{{/isPost}}