---
[category:API & Development]  
[category:Performance]  
[category:Announcements]  

###### [postdate]  
# [postlink]React Native Kommentare System SDK Update[/postlink]  

{{#unless isPost}}  
Wir haben das fastcomments-react-native-sdk von Grund auf neu aufgebaut: neues, effizienteres State-Management, ein Redesign mit Design Tokens, ein dediziertes Live-Chat-Widget und erstklassige Web-Unterstützung.  
{{/unless}}  

{{#isPost}}  

### <i class="circle">!</i> Dieser Artikel enthält technische Fachbegriffe  

### Was ist Neu  

Wir haben Version 5.1 von `fastcomments-react-native-sdk` veröffentlicht, unserer React Native-Bibliothek, die Kommentare und Chats mit echten nativen Komponenten anzeigt, anstatt mit einem WebView.  

Wir haben die internen Abläufe neu geschrieben, das gesamte Design überarbeitet, ein Live-Chat-Widget hinzugefügt, das SDK in das Web gebracht und auf die neueste Version von React Native und React aktualisiert.  

<div class="text-center">  
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, Helles Thema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />  
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, Dunkles Thema" title="FastComments React Native SDK, Dunkles Thema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />  
</div>  

### Warum zwei React Native Bibliotheken?  

Eine kurze Notiz, da wir diese Frage oft erhalten. Wir bieten zwei Optionen an:  

- `fastcomments-react-native` ist ein dünner Wrapper um unser Web-Widget, das in einem WebView läuft. Es ist der schnellste Weg, um sofort auf jede Funktion zuzugreifen, und profitiert automatisch von Webfixes.  
- `fastcomments-react-native-sdk` (dieses hier) rendert die UI mit nativen React Native-Komponenten ohne WebView. Es ist flexibler, vollständig anpassbar und fühlt sich nativ an, weil es nativ ist.  

Für die beste Erfahrung empfehlen wir das SDK. Der Rest dieses Beitrags handelt von den Änderungen in 5.0.  

### Neues State-Management  

Der Hauptgrund für diese Änderung ist, sicherzustellen, dass unsere Bibliothek unserem Namen treu bleibt und schnell bleibt. Wir hatten mehrere Kunden, die sich über die Leistung beschwerten, also wurde dies jetzt behoben.  

Das SDK hielt ursprünglich seinen Kommentarbaum in Hookstate. Es funktionierte, aber als die Threads und Live-Updates wuchsen, begannen die Dinge langsamer zu werden.  

Wir haben Hookstate durch Zustand und einen flachen, indizierten Speicher ersetzt. Kommentare existieren nun in einer `byId`-Map zusammen mit `childrenByParent`, `rootOrder` und `pinnedIds`-Indizes, anstatt in einem Baum, der innerhalb des States geschachtelt ist.  

Die Vorteile:  

- Live-Events (ein neuer Kommentar, eine Abstimmung, eine Bearbeitung) wurden zu O(1) Mutationen anstatt einen Baum durchlaufen und klonen zu müssen.  
- Wir haben zwei vollständige JSON-Tiefenkopien des Baumes fallen gelassen, die bei jedem Abruf durchgeführt wurden.  
- Komponenten abonnieren genau die Teile, die sie lesen, das standardmäßige Selektorenmodell, sodass eine Abstimmung zu einem Kommentar nur diesen einen Kommentar berührt.  

Dieser letzte Punkt ist wichtiger, als es klingt. Mit selektorbasierten Abonnements rendert eine Zeile nur neu, wenn ihre eigenen Daten sich ändern.  

### Ein tokenbasierte Neugestaltung  

Das alte Aussehen war ein Haufen harter Stile. Das neue Standarddesign wird aus einer Reihe von semantischen Design-Tokens (`FastCommentsTheme`) generiert: Farben, Abstände, Radien, Schriftgrößen, Schriftstärken und Avatargrößen. Der gesamte Stilbaum wird aus diesen Tokens abgeleitet.  

Das bedeutet, dass das Neugestalten nur ein Prop ist:  

```tsx  
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>  
```  

Der Dunkelmodus ist nur ein Token-Set entfernt:  

```tsx  
import { getDarkTheme } from 'fastcomments-react-native-sdk';  

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>  
```  

Die Neugestaltung selbst hat ein saubereres, modern-neutrales Aussehen: feine Trennlinien, Pillen-Abstimmungsknöpfe und Chips, gefüllte primäre Knöpfe, abgerundete Avatare und eine konsistente Typografie. Das `styles` Prop ist weiterhin vorhanden für gezielte Überschreibungen, sodass bestehende Integrationen weiter funktionieren.  

### Ein dediziertes Live-Chat-Widget  

Wir haben `FastCommentsLiveChat` hinzugefügt, ein Chat-Preset über demselben Engine, das unsere Android-SDK-Chatansicht spiegelt: chronologische Nachrichten mit den neuesten unten, der Composer unter der Liste, ein Live-Kopfzeilen-Streifen mit einem Verbindungspunkt und Benutzeranzahl, Auto-Scroll, das pausiert, während du ältere Nachrichten liest, und unendliche Historie, während du nach oben scrollst. Jedes Preset ist durch `config` überschreibbar.  

```tsx  
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>  
```  

### Jetzt auch im Web  

Dasselbe SDK läuft jetzt im Web durch `react-native-web`. Der Rich-Text-Composer (betrieben von `react-native-enriched`) rendert auf iOS, Android und im Browser gleich, sodass das Bearbeitungserlebnis überall konsistent ist mit einer einzigen Implementierung. Überlagerungen, die die KommentarListe anderenfalls clippen würden (Menüs, der GIF-Auswähler, die Benachrichtigenliste), sind im Web-Build unter ihren Auslösern verankert.  

### Aktuell mit React Native  

5.0 ist gebaut und getestet mit React Native 0.81 und React 19, und es zielt auf die neue Architektur (Fabric), die der native Rich-Text-Editor benötigt. Aktuell zu bleiben ist hier keine Arbeit: der Editor, das Gestenhandling und das Rendern werden schneller und korrekter, während React Native voranschreitet, und wir ziehen es vor, diese Upgrades kontinuierlich zu erhalten, als Jahre hinterherzufallen.  

### Fazit  

Dieses Rewrite drehte sich darum, dem React Native SDK das gleiche erstklassige Standing wie unseren anderen Bibliotheken zu geben: ein schnelles und vorhersehbares Datenmodell, ein Aussehen, das man mit einem Prop anpassen kann, ein Chat-Widget und Webunterstützung, alles auf einem modernen React Native Fundament.  

Sie finden das SDK auf <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> und den Quellcode mit Beispielen auf <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Lassen Sie uns unten wissen, wenn Sie auf irgendetwas stoßen.  

Prost!  

{{/isPost}}  

---