---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]FastComments TypeScript-Migration Abgeschlossen[/postlink]

{{#unless isPost}}
Zur Vorbereitung auf das nächste Jahrzehnt der Entwicklung haben wir eines der größten FastComments-Komponenten auf TypeScript migriert.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel Enthält Technisches Fachvokabular

### Was gibt's Neues

Bei FastComments schätzen wir statisch typisierte Sprachen. Genauer gesagt, ich mag anständige Typsysteme mit schnellen Compilern. FastComments haben wir mit letzterem begonnen - oder
keinem Compiler. Während wir im ersten Jahr zwei Services in modernem Java geschrieben haben, wurden die Hauptbibliotheken für Backend und Frontend in CJS JS, das auf Node läuft, geschrieben.

Zur Vorbereitung auf das nächste Jahrzehnt der Entwicklung haben wir die größten FastComments-Komponenten auf TypeScript migriert.

Dies umfasste die Migration von über 130.000 Zeilen Code (davon 100.000 im Backend) über 1441 Dateien und das Beheben von über 8000 Compilerfehlern.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="GitHub Screenshot" title="GitHub Screenshot" />
</div>

Das wurde über zwei Wochen durchgeführt.

### Code Freeze - Danke

Ich möchte unseren Kunden danken, dass sie eventuelle Verzögerungen bei Bugfixes oder Feature-Veröffentlichungen in Kauf genommen haben, während wir einen zweiwöchigen Code-Freeze gemacht haben, um dieses Upgrade abzuschließen. Vielen Dank!

### Beheizte Bugs

Wie Sie sich vorstellen können, haben wir eine Handvoll Bugs behoben. Diese betrafen hauptsächlich die Spam-Erkennung und das Caching.

### Breaking Changes

- Alle API-Endpunkte geben jetzt den Status: 'failed' zurück, anstatt eine Mischung aus "failed" und "failure" als Statuswerte. "success" bleibt unverändert.
- Wir werden nicht mehr standardmäßig zur ersten Widget-Konfiguration zurückkehren, wenn es keinen Treffer gibt. Stattdessen geben wir die Standard-Systemkonfiguration zurück.

### Wie war es?

Wir haben festgestellt, dass viele der Tools im NPM-Ökosystem, die uns bei dieser Aufgabe helfen sollten, wie üblich nicht sehr gut funktionierten. Daher haben wir LLMs verwendet, um
Skripte zu generieren, die einen Großteil der Arbeit erledigten. Zum Beispiel haben wir intensiv JSDoc verwendet, sodass wir Skripte schreiben konnten, die das JSDoc nehmen und es in TypeScript-Interfaces
und Typdefinitionen umwandeln und die Funktionsargumente sowie Rückgabewerte richtig annotieren. Wir haben auch diese Skripte verwendet, um von CJS auf ESM zu migrieren, wozu das Neuschreiben
von Imports, Exports und das Erkennen von häufigen Laufzeitproblemen wie `__dirname` gehörte.

Habe ich Laufzeitprobleme erwähnt?

### Wie ist TypeScript im Jahr 2025?

TypeScript ist eine schöne Sprache, um Geschäftslogik zu schreiben. Aber Java hat immer noch eine bessere Developer Experience. Wenn Java, Go oder Rust kompiliert, funktioniert es höchstwahrscheinlich. Mit TypeScript
kann ich so etwas tun wie:

    console.log(__dirname);

... und das wird kompiliert.

Aber es wird nicht laufen, mit modernen es-Modulen. Ihre IDE wird sogar `__dirname` automatisch vervollständigen, und dann wird es zur Laufzeit scheitern. Es fühlt sich an wie bei Spring DI, aber noch schlimmer.

Sie können auch Dinge tun wie:

    context.someImportantMethodToCall;

Jetzt ist das eine "Anweisung". Es ist eine gültige "Anweisung". Auf den ersten Blick könnte man denken, wir rufen `someImportantMethodToCall` auf, aber das tun wir nicht! Meine IDE warnt zumindest nicht darüber und auch der Compiler nicht. Der Code wird einfach nichts tun (es sei denn, `someImportantMethodToCall` ist ein Klassen-`getter`, in welchem Fall er implizit aufgerufen wird...)

Die Lösung ist:

    context.someImportantMethodToCall();

Ich denke, Sie könnten das wahrscheinlich mit etwas wie eslint und einer "keine Nebeneffekte"-Regel erkennen, aber dann ziehen Sie ein weiteres großes Set von Bibliotheken herein, um sie aktuell zu halten, und dann muss eslint Ihre gesamte Codebasis bei jedem Build parsen, die Tools sind langsam usw. - nein danke. Der Produktivitätsimpact des Umgangs mit langsamen Tools wie eslint war in meiner Karriere in früheren Jobs bedeutender als der Produktivitäts-"Schub", den ich jemals durch die kleinen Dinge, die eslint löst/verhindert hat, wie Abstände usw. erhalten habe. Es kommen jetzt schnellere Alternativen auf den Markt, was großartig ist.

TypeScript ist wirklich schön wegen Sprachfunktionen wie `Pick<User, 'username', 'email'>`. Dies, kombiniert mit Typinferenz, bietet eine Möglichkeit, typsichere Abfrageergebnisse aus der Datenbank für Teilmengen größerer Objekte zu erhalten, ohne eine Klasse für jede Form definieren zu müssen. `Pick` ist etwas, überrascht, dass Scala nicht hat. Typ-Unionen sind auch wirklich schön.

Inkrementelle Builds funktionieren ebenfalls recht gut, wir haben unsere Build-Zeiten im CI im Durchschnitt nur um etwa 5 - 10 Sekunden für den Bau der gemeinsam genutzten Bibliothek, Frontend und Backend erhöht.

### Entwicklungstimeline

Für die Neugierigen, so sah unser Fortschritt aus:

- Tag Eins: 5564 Fehler in 362 Dateien gefunden.
- Tag Zwei: 4034 Fehler in 239 Dateien gefunden.
- Tag Drei: 3784 Fehler in 191 Dateien gefunden.
- Tag Vier: 2974 Fehler in 169 Dateien gefunden.
- Tag Fünf: 3000 Fehler in 171 Dateien gefunden.
- Tag Sechs: 2916 Fehler in 165 Dateien gefunden.
- Tag Sieben: 2618 Fehler in 157 Dateien gefunden.
- Tag Acht: 2253 Fehler in 109 Dateien gefunden.
- Tag Neun: 1605 Fehler in 69 Dateien gefunden.
- Tag Zehn: 686 Fehler in 53 Dateien gefunden.
- Tag 11: Backend-Einheitstests bestanden
- Tag 12: Beginn der Migration des Frontends, 3118 Fehler.
- Tag 13: 2172 Fehler gefunden.
- Tag 14: 1224 Fehler gefunden.
- Tag 15: 498 Fehler gefunden.
- Tag 16: Alle Compilerfehler behoben.
- Tag 17: Veröffentlicht. E2E-Tests bestanden. 30 Minuten Ausfallzeit während unerwarteter Laufzeitprobleme. :)

### Die Zukunft

Wir haben dies gemacht, um die Entwicklung für das nächste Jahrzehnt zu unterstützen. Das System ist jetzt groß genug, dass es schneller ist, mit einem Typsystem zu entwickeln als ohne.

Sie können auch erwarten, dass unsere TypeScript-Bibliothek auf NPM sich verbessert, da sie bereits begonnen hat, da wir jetzt diese Bibliothek in unserem Server- und Client-Code verwenden.

Wir werden auch bald generierte Client-SDKs direkt aus dem Server-Code veröffentlichen, was eine der Hauptmotivationen für dieses Vorhaben war.

### Fazit

Wie bei allen großen Veröffentlichungen freuen wir uns, dass wir uns die Zeit nehmen konnten, diese Änderungen zu optimieren, zu testen und richtig zu veröffentlichen. Lassen Sie uns wissen,
wenn Sie unten Probleme entdecken.

Prost!

{{/isPost}}

---