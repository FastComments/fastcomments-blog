---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Dodaj Czaty na Żywo do Aplikacji Natywnych z FastComments React Native[/postlink]

{{#unless isPost}}
Po miesiącach pracy z przyjemnością ogłaszamy, że fastcomments-react-native-sdk jest teraz dostępny w wersji 1.0 do ogólnego użytku.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten Artykuł Zawiera Terminologię Techniczną

### Co Nowego

W FastComments uruchomiliśmy nowy sposób budowania aplikacji React Native z FastComments. Wcześniej używałeś naszego opakowania react-native wokół biblioteki VanillaJS. To wprowadzało kilka problemów związanych z pamięcią i opóźnieniem z powodu konieczności używania widoku internetowego - przeglądarki w twojej aplikacji - tylko po to, aby załadować naszą bibliotekę.

Teraz **całkowicie** przenieśliśmy FastComments do React Native i napisaliśmy nasz własny edytor WYSIWYG, aby całkowicie wyeliminować potrzebę widoków internetowych.

Biblioteka obsługuje różne skórki i układy. Na przykład, oto skórka Erebus, która jest ciemną skórką w stylu czatu na żywo:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Skórka Erebus" title="Skórka Erebus" />
</div>

Biblioteka jest dostępna [na GitHubie pod adresem FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) oraz
[na NPM](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Możliwość Dostosowania

Nowa biblioteka natywna została zaprojektowana tak, aby była dostosowywalna, tak jak istniejąca biblioteka webowa.

Możesz:

- Dostosować wszystkie zasoby i ikony używane przez bibliotekę.
- Dostosować stylizację każdego komponentu w bibliotece, przekazując obiekt Styles od góry.
- Dostosować wszystkie tłumaczenia.
- Użyć jednej z wcześniej zdefiniowanych lub opracowanych przez społeczność skórek.
- Użyć wielu tych samych opcji konfiguracyjnych, które obsługuje biblioteka webowa.

### Pełna Lista Funkcji

Biblioteka obsługuje wiele rzeczy. Niepełna lista to:

- [x] Blokowanie
- [x] Reakcje Czatów
- [x] Dziecięce Komentarze i Odpowiedzi
- [x] Niestandardowe Style (jako typowany arkusz stylów)
- [x] Emotikony
- [x] Zgłaszanie
- [x] Przeglądarka Gif - Z domyślnym trendowaniem + możliwością wyszukiwania. Obrazy i wyszukiwanie anonimowe przez proxy.
- [x] Komentowanie na żywo
- [x] Wybór i Przesyłanie Mediów
- [x] Natywny edytor WYSIWYG z obsługą obrazów.
- [x] Serwis Powiadomień (pobieranie nieprzeczytanych powiadomień użytkownika w tle, aby je przesłać, itd.)
- [x] Lista Powiadomień (pokazuje przy kliknięciu w dzwonek). Obsługuje subskrypcje.
- [x] Stronicowanie (Przyciski)
- [x] Stronicowanie (Nieskończone Przewijanie)
- [x] Przypinanie Komentarzy
- [x] Bezpieczne, Proste SSO i anonimowe komentowanie.
- [x] Kilka wcześniej zdefiniowanych skórek.
- [x] Przełącznik Pokaż/Ukryj Komentarze
- [x] Wątki
- [x] Wskaźniki aktywności użytkowników
- [x] Głosowanie

### Jak To Działa

Biblioteka jest całkowitym przepisaniem klienta FastComments w TypeScript i React Native.

### Plan Długoterminowy

W dłuższej perspektywie będziemy utrzymywać zarówno bibliotekę VanillaJS, jak i bibliotekę react-native w równoległym trybie, a także wszelkie przyszłe natywne biblioteki, które możemy opracować.

### Co Dalej?

Z niecierpliwością czekamy na opinie od użytkowników i społeczności, aby w miarę upływu czasu poprawiać tę bibliotekę, tak jak zrobiliśmy to w ekosystemie webowym.

### Podsumowując

Wiemy, że ta biblioteka była długo oczekiwana przez niektórych. Jak w przypadku wszystkich dużych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wydanie tej biblioteki.

Na zdrowie!

{{/isPost}}

---