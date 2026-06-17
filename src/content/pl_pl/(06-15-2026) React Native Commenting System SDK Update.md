---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Aktualizacja SDK systemu komentarzy React Native[/postlink]

{{#unless isPost}}
Przebudowaliśmy fastcomments-react-native-sdk od podstaw: nowe, bardziej wydajne zarządzanie stanem, nowy design wykorzystujący Design Tokens, dedykowany widget czatu na żywo oraz wsparcie dla przeglądarki na najwyższym poziomie.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera techniczne żargon

### Co Nowego

Właśnie wydaliśmy wersję 5.1 `fastcomments-react-native-sdk`, naszej biblioteki React Native, która renderuje komentarze i czat za pomocą prawdziwych komponentów natywnych zamiast WebView.

Przepisaśmy wnętrzności, zredesignowaliśmy cały wygląd, dodaliśmy widget czatu na żywo, wprowadziliśmy SDK do sieci i zaktualizowaliśmy go do najnowszego React Native i React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, jasny motyw" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, ciemny motyw" title="FastComments React Native SDK, ciemny motyw" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Dlaczego Dwie Biblioteki React Native?

Krótka uwaga, ponieważ zadawano nam to pytanie. Wydajemy dwie opcje:

- `fastcomments-react-native` to cienki wrapper wokół naszego widgetu webowego działającego w WebView. To najszybszy sposób na uzyskanie każdej funkcji natychmiastowo, a także korzysta z poprawek webowych automatycznie.
- `fastcomments-react-native-sdk` (ten) renderuje interfejs użytkownika za pomocą natywnych komponentów React Native bez WebView. Jest bardziej elastyczny, w pełni dostosowywalny do stylów i działa natywnie, ponieważ jest natywny.

Dla najlepszych doświadczeń zalecamy SDK. Reszta tego posta dotyczy zmian w wersji 5.0.

### Nowe Zarządzanie Stanem

Głównym celem tej zmiany jest upewnienie się, że nasza biblioteka pozostaje wierna naszej nazwie i pozostaje szybka. Mieliśmy kilka skarg od klientów dotyczących jej wydajności, więc to teraz naprawiliśmy.

SDK pierwotnie przechowywało swoje drzewo komentarzy w Hookstate. Działało, ale w miarę wzrostu liczby wątków i aktualizacji na żywo zaczęło zwalniać.

Zamieniliśmy Hookstate na Zustand i płaski, indeksowy magazyn. Komentarze teraz żyją w mapie `byId` razem z indeksami `childrenByParent`, `rootOrder` i `pinnedIds`, zamiast w drzewie zagnieżdżonym wewnątrz stanu.

Korzyści:

- Wydarzenia na żywo (nowy komentarz, głos, edycja) stały się mutacjami O(1) zamiast przechodzić przez drzewo i klonować je.
- Porzuciliśmy dwa pełne klony JSON drzewa, które uruchamiały się przy każdym pobraniu.
- Komponenty subskrybują dokładnie te fragmenty, które odczytują, według standardowego modelu selektora, więc głos na jednym komentarzu dotyczy tylko jednego komentarza.

Ten ostatni punkt ma większe znaczenie, niż się wydaje. Dzięki subskrypcjom opartym na selektorach, wiersz jest ponownie renderowany tylko wtedy, gdy zmieniają się jego własne dane.

### Redesign oparty na Tokenach

Stary wygląd był zbiorem twardo zakodowanych stylów. Nowy domyślny styl jest generowany z zestawu semantycznych tokenów projektowych (`FastCommentsTheme`): kolory, odstępy, promienie, rozmiary czcionek, wagi czcionek oraz rozmiary awatarów. Całe drzewo stylów pochodzi z tych tokenów.

Oznacza to, że stylizacja jest jednym atrybutem:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Tryb ciemny jest tylko jedną parą tokenów od:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Sam redesign to czystszy, nowoczesny neutralny wygląd: cienkie separatory, przyciski głosów w kształcie pigułek i chipów, wypełnione przyciski główne, zaokrąglone awatary i spójny rozmiar czcionki. Atrybut `styles` wciąż tam jest do precyzyjnych nadpisań, więc istniejące integracje wciąż działają.

### Dedykowany Widget Czatowy na Żywo

Dodaliśmy `FastCommentsLiveChat`, preset czatu działający na tym samym silniku, co nasz widok czatu SDK dla Androida: chronologiczne wiadomości z najnowszymi na dole, kompozytor poniżej listy, pasek nagłówka na żywo z punktem połączenia i liczbą użytkowników, automatyczne przewijanie, które zatrzymuje się podczas czytania starszych wiadomości, oraz nieskończona historia podczas przewijania w górę. Każdy preset jest możliwy do nadpisania przez `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Teraz także w Sieci

To samo SDK działa teraz w przeglądarce dzięki `react-native-web`. Kompozytor tekstu bogatego (napędzany przez `react-native-enriched`) renderuje się w ten sam sposób na iOS, Androidzie i w przeglądarce, więc doświadczenie edycji jest spójne wszędzie z jedną implementacją. Nakładki, które w przeciwnym razie przycinają listę komentarzy (menu, wybór GIF-ów, lista powiadomień) są zakotwiczone pod swoimi wyzwalaczami w wersji sieciowej.

### Utrzymywanie Aktualności z React Native

Wersja 5.0 jest zbudowana i testowana na React Native 0.81 i React 19, i jest ukierunkowana na Nową Architekturę (Fabric), którą wymaga natywny edytor tekstu wzbogaconego. Utrzymywanie aktualności w tym zakresie nie jest bezsensowne: edytor, obsługa gestów i renderowanie stają się szybsze i bardziej poprawne w miarę postępu React Native, i wolimy podejmować te aktualizacje stopniowo, niż ugrzęznąć z latami w tyle.

### Podsumowanie

To przepisywanie miało na celu zapewnienie SDK React Native tego samego pierwszorzędnego statusu, co nasze inne biblioteki: szybki i przewidywalny model danych, wygląd, który można dostosować w jednym atrybucie, widget czatu i wsparcie dla sieci, wszystko na nowoczesnej podstawie React Native.

Możesz znaleźć SDK na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> oraz kod źródłowy z przykładami na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Daj nam znać poniżej, jeśli napotykasz na jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---