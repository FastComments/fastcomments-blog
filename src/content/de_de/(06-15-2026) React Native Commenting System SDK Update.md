---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native Kommentar-System SDK Update[/postlink]

{{#unless isPost}}
Wir haben fastcomments-react-native-sdk von Grund auf neu aufgebaut: neues, effizienteres State-Management, ein Redesign mit Design Tokens, ein dediziertes Live-Chat-Widget und erstklassige Webunterstützung.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technische Begriffe

### Was ist neu

Wir haben Version 5.1 von `fastcomments-react-native-sdk` veröffentlicht, unserer React Native-Bibliothek, die Kommentare und Chats mit echten nativen Komponenten anzeigt, statt mit einem WebView.

Wir haben die interne Architektur neu geschrieben, das gesamte Design überarbeitet, ein Live-Chat-Widget hinzugefügt, das SDK ins Web gebracht und es auf die neueste Version von React Native und React aktualisiert.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, helles Thema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, dunkles Thema" title="FastComments React Native SDK, dunkles Thema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Warum zwei React Native-Bibliotheken?

Eine kurze Anmerkung, weil wir diese Frage oft bekommen. Wir bieten zwei Optionen an:

- `fastcomments-react-native` ist eine schlanke Hülle um unser Web-Widget, das in einem WebView läuft. Es ist der schnellste Weg, um sofort auf alle Features zuzugreifen, und profitiert automatisch von Web-Fixes.
- `fastcomments-react-native-sdk` (dies hier) rendert die UI mit nativen React Native-Komponenten ohne einen WebView. Es ist flexibler, vollständig thematisierbar und fühlt sich nativ an, weil es nativ ist.

Für die beste Erfahrung empfehlen wir das SDK. Der Rest dieses Beitrags befasst sich mit den Änderungen in 5.0.

### Neues State-Management

Der Hauptgrund für diese Änderung ist, sicherzustellen, dass unsere Bibliothek ihrem Namen treu bleibt und schnell bleibt. Wir hatten mehrere Kunden, die sich über die Leistung beschwert haben, und das ist jetzt behoben.

Ursprünglich hielt das SDK seinen Kommentarbaum in Hookstate. Es funktionierte, aber als die Threads und Live-Updates zunahmen, begann alles langsamer zu werden.

Wir haben Hookstate durch Zustand und einen flachen, indizierten Speicher ersetzt. Kommentare leben jetzt in einer `byId`-Karte neben `childrenByParent`, `rootOrder` und `pinnedIds`-Indizes, anstatt in einem Baum, der im State genestet ist.

Der Vorteil:

- Live-Ereignisse (ein neuer Kommentar, eine Abstimmung, eine Bearbeitung) wurden O(1)-Mutationen, anstatt einen Baum zu durchlaufen und zu klonen.
- Wir haben zwei vollständige Baum-JSON-Tiefenkopien entfernt, die bei jedem Abruf liefen.
- Komponenten abonnieren genau die Teile, die sie lesen, das Standard-Selectorsystem, sodass eine Abstimmung für einen Kommentar nur diesen einen Kommentar betrifft.

Dieser letzte Punkt ist wichtiger, als er klingt. Mit selectorbasierten Abonnements wird eine Zeile nur neu gerendert, wenn ihre eigenen Daten sich ändern.

### Ein tokenbasiertes Redesign

Das alte Aussehen war ein Haufen fest codierter Stile. Das neue Standarddesign wird aus einer Menge semantischer Design-Tokens (`FastCommentsTheme`) generiert: Farben, Abstände, Ränder, Schriftgrößen, Schriftgewichte und Avatar-Größen. Der gesamte Stilbaum leitet sich aus diesen Tokens ab.

Das bedeutet, dass das Neugestalten nur ein Prop benötigt:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Der Dunkelmodus ist nur einen Token-Satz entfernt:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Das Redesign selbst ist ein klareres, modern-neutrales Erscheinungsbild: dünne Trennlinien, Pillenabstimmungstasten und Chips, ausgefüllte Primärtasten, abgerundete Avatare und eine konsistente Schriftgröße. Das `styles`-Prop ist weiterhin für gezielte Überschreibungen vorhanden, sodass bestehende Integrationen weiterhin funktionieren.

### Ein dediziertes Live-Chat-Widget

Wir haben `FastCommentsLiveChat`, ein Chat-Vorgabe über denselben Motor, hinzugefügt, der die Chatansicht unseres Android SDKs spiegelt: chronologische Nachrichten mit den neuesten am Ende, der Composer unter der Liste, ein lebendiger Header-Streifen mit einem Verbindungspunkt und Benutzeranzahl, Auto-Scroll, das pausiert, während Sie ältere Nachrichten lesen, und unendliche Historie, wenn Sie nach oben scrollen. Jede Vorgabe kann über `config` überschrieben werden.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Jetzt auch im Web

Dasselbe SDK läuft jetzt über `react-native-web` im Web. Der Rich-Text-Composer (betrieben von `react-native-enriched`) rendert auf iOS, Android und im Browser auf die gleiche Weise, sodass die Bearbeitungserfahrung überall mit einer einzigen Implementierung konsistent ist. Überlagerungen, die die Kommentarliste sonst abschneiden würde (Menüs, der GIF-Auswähler, die Benachrichtigenliste), sind im Web-Build unter ihren Auslösern verankert.

Sie können jedes Widget selbst im <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">komponentenbrowser</a> ausprobieren, der dieses SDK im Browser über `react-native-web` ausführt.

### Aktuell bleiben mit React Native

5.0 ist gebaut und getestet mit React Native 0.81 und React 19 und zielt auf die neue Architektur (Fabric) ab, die der native Rich-Text-Editor benötigt. Aktuell zu bleiben ist hier nicht bloße Beschäftigung: der Editor, die Gestensteuerung und das Rendering werden schneller und korrekt, während React Native voranschreitet, und wir würden diese Upgrades lieber stetig durchführen, als Jahre zurückzufallen.

### Fazit

Diese Neuschreibung diente dazu, dem React Native SDK die gleiche erstklassige Basis wie unseren anderen Bibliotheken zu geben: ein schnelles und vorhersehbares Datenmodell, ein Aussehen, das Sie mit einem Prop thematisieren können, ein Chat-Widget und Webunterstützung, alles auf einer modernen React Native-Basis.

Sie finden das SDK auf <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, den Quellcode mit Beispielen auf <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a> und jedes Widget live im <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">komponentenbrowser</a>. Lassen Sie es uns wissen, wenn Sie auf etwas stoßen.

Prost!

{{/isPost}}

---