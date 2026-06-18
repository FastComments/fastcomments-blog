---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Aktualizacja SDK systemu komentarzy React Native[/postlink]

{{#unless isPost}}
Przebudowaliśmy fastcomments-react-native-sdk od podstaw: nowa, bardziej efektywna obsługa stanu, redesign z użyciem tokenów projektu, dedykowany widget czatu na żywo oraz wsparcie dla sieci na najwyższym poziomie.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera terminologię techniczną

### Co nowego

Właśnie wypuściliśmy wersję 5.1 `fastcomments-react-native-sdk`, naszej biblioteki React Native, która renderuje komentarze i czat za pomocą prawdziwych komponentów natywnych zamiast WebView.

Przepisaliśmy wewnętrzną logikę, zaprojektowaliśmy cały wygląd na nowo, dodaliśmy widget czatu na żywo, przenieśliśmy SDK do sieci i zaktualizowaliśmy do najnowszego React Native oraz React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, jasny temat" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, ciemny temat" title="FastComments React Native SDK, ciemny temat" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Dlaczego dwie biblioteki React Native?

Szybka uwaga, ponieważ otrzymujemy to pytanie. Wydajemy dwie opcje:

- `fastcomments-react-native` to cienki wrapper wokół naszego widgetu internetowego działającego w WebView. To najszybszy sposób na natychmiastowe uzyskanie wszystkich funkcji i automatyczne korzystanie z poprawek internetowych.
- `fastcomments-react-native-sdk` (ten) renderuje UI za pomocą natywnych komponentów React Native bez WebView. Jest bardziej elastyczny, w pełni konfigurowalny i działa natywnie, ponieważ jest natywny.

Dla najlepszych wrażeń polecamy SDK. Reszta tego wpisu dotyczy zmian w wersji 5.0.

### Nowe zarządzanie stanem

Głównym celem tej zmiany jest upewnienie się, że nasza biblioteka pozostaje wierna naszej nazwie i pozostaje szybka. Mieliśmy kilku klientów, którzy skarżyli się na jej wydajność, więc teraz to zostało naprawione.

SDK początkowo przechowywało drzewo komentarzy w Hookstate. Działało, ale gdy wątki i aktualizacje na żywo rosły, sprawy zaczęły zwalniać.

Zastąpiliśmy Hookstate Zustand oraz płaskim, indeksowanym magazynem. Komentarze teraz znajdują się w mapie `byId` obok indeksów `childrenByParent`, `rootOrder` i `pinnedIds`, zamiast w drzewie zagnieżdżonym w stanie.

Zysk:

- Wydarzenia na żywo (nowy komentarz, głosowanie, edytowanie) stały się mutacjami O(1) zamiast przechodzenia i klonowania drzewa.
- Zredukowaliśmy dwa pełne klony JSON głębokiego drzewa, które działały przy każdym pobraniu.
- Komponenty subskrybują dokładnie te fragmenty, które czytają, zgodnie z standardowym modelem selektora, więc głosowanie na jeden komentarz dotyka jednego komentarza.

Ostatni punkt ma większe znaczenie, niż się wydaje. Dzięki subskrypcjom opartym na selektorach, wiersz ponownie renderuje się tylko wtedy, gdy zmieniają się jego dane.

### Redesign oparty na tokenach

Stary wygląd to był zbiór zakodowanych stylów. Nowy domyślny styl jest generowany z zestawu semantycznych tokenów projektowych (`FastCommentsTheme`): kolory, odstępy, promienie, rozmiary czcionek, wagi czcionek i rozmiary awatarów. Całe drzewo stylów pochodzi z tych tokenów.

Oznacza to, że zmiana stylu to jedna właściwość:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Ciemny tryb jest o jeden zestaw tokenów dalej:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Redesign sam w sobie to czystszy, nowoczesny wygląd neutralny: cienkie separatory, przyciski głosowania i chipy w kształcie pigułki, wypełnione główne przyciski, zaokrąglone awatary oraz spójna skala typograficzna. Właściwość `styles` nadal istnieje dla precyzyjnych nadpisań, więc istniejące integracje działają.

### Dedykowany widget czatu na żywo

Dodaliśmy `FastCommentsLiveChat`, preset czatu oparty na tym samym silniku, który odzwierciedla widok czatu naszego SDK na Androida: chronologiczne wiadomości z najnowszymi na dole, kompozytor poniżej listy, pasek nagłówka na żywo z kropką połączenia i liczbą użytkowników, automatyczne przewijanie, które zatrzymuje się podczas czytania starszych wiadomości, i nieskończona historia podczas przewijania w górę. Każdy preset można nadpisać przez `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Teraz także w sieci

To samo SDK teraz działa w sieci poprzez `react-native-web`. Edytor tekstu (zasilany przez `react-native-enriched`) renderuje się w ten sam sposób na iOS, Androidzie i w przeglądarce, więc doświadczenie edytorskie jest spójne wszędzie dzięki jednej implementacji. Nakładki, które w przeciwnym razie zostałyby przycięte przez listę komentarzy (menu, wybór GIF-ów, lista powiadomień) są zakotwiczone pod ich wyzwalaczami w wersji webowej.

Możesz samodzielnie wypróbować każdy widget w na żywo <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">przeglądarki komponentów</a>, co jest tym SDK działającym w przeglądarce za pośrednictwem `react-native-web`.

### Utrzymywanie aktualności z React Native

5.0 jest zbudowane i testowane z React Native 0.81 i React 19, a jego celem jest Nowa Architektura (Fabric), której wymaga natywny edytor tekstu. Utrzymywanie aktualności nie jest pracą bez celu: edytor, obsługa gestów i renderowanie stają się szybsze i bardziej poprawne, gdy React Native się rozwija, a my wolimy stopniowo wprowadzać te aktualizacje niż zostać w tyle na lata.

### Podsumowanie

Ta przeróbka miała na celu zapewnienie SDK React Native takiego samego pierwszorzędnego statusu jak nasze inne biblioteki: szybki i przewidywalny model danych, wygląd, który można stylizować jedną właściwością, widget czatu oraz wsparcie dla sieci, wszystko na nowoczesnej bazie React Native.

Możesz znaleźć SDK na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, źródło, z przykładami, na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHubie</a>, a każdy widget działa na żywo w <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">przeglądarce komponentów</a>. Daj nam znać poniżej, jeśli napotkasz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---