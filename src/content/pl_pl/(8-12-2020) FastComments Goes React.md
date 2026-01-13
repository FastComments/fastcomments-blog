---
[category:API & Development]
###### [postdate]
# [postlink]FastComments z React[/postlink]

{{#unless isPost}}
Potrzebujesz osadzić komentarze w aplikacji stworzonej przy użyciu React? Mamy to!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera terminologię techniczną

#### Co nowego

FastComments ma teraz komponent React, który jest równy funkcjonalnością naszemu widgetowi VanillaJS.

Zdecydowaliśmy się nazwać bibliotekę fastcomments-react. Możesz znaleźć repozytorium GitHub z kodem źródłowym <a href="https://github.com/FastComments/fastcomments-react" target="_blank">tutaj</a>.

Repozytorium zawiera również przykładowe użycie widgetu.

Jest dostępne na NPM, który możesz znaleźć <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">tutaj</a>.

#### Jak to działa

Nowy komponent działa w ten sposób, że komponent React jest wrapperem wokół istniejącego widgetu FastComments.

Oznacza to, że jeśli dodamy funkcje do naszych istniejących komponentów lub naprawimy błędy, od razu będziesz miał z tego korzyści!

#### Dlaczego nowy komponent?

Napisaliśmy widget FastComments VanillaJS, aby był rdzeniem naszego biznesu (obok rdzenia backendu). Oznacza to, że zaprojektowaliśmy go tak, aby można go było rozszerzać tak, jak to robimy teraz.

Chociaż bez tej nowej biblioteki React, mogłeś zintegrować FastComments w swojej aplikacji, pisząc własną bibliotekę, byłoby to dużą przeszkodą we wdrażaniu. Wspierając React bezpośrednio, ułatwiamy przyjęcie FastComments dla tego typu klientów.

#### Aplikacje jednostronicowe?

FastComments wspiera SPA w swoim rdzeniu. Komponent monitoruje zmiany w obiekcie konfiguracyjnym - więc jeśli zaktualizujesz bieżącą stronę (nazywaną urlId), widget
zostanie ponownie wyrenderowany.

#### Co zmienia się dla istniejących klientów

Nic się nie zmienia dla istniejących klientów - i **nie ma** nic złego w używaniu wersji VanillaJS FastComments w nowych projektach. fastcomments-react zależy od wersji VanillaJS
FastComments i zawsze będzie. Jeśli wydamy komponenty Angular lub Vue, będziemy stosować ten sam model.

Nasz widget VanillaJS jest obywatel pierwszej klasy FastComments. To wydanie jest całkowicie *dodatkowe* w stosunku do naszej infrastruktury.

Dodatkowo, widget VanillaJS wciąż pozostaje doskonałym rozwiązaniem do osadzania komentarzy w każdej stronie internetowej, która nie korzysta z frameworka, jak na przykład strona statyczna.

#### Na zakończenie

Wydając bibliotekę fastcomments-react i przyszłe biblioteki, mamy nadzieję, że ułatwimy deweloperom przyjęcie FastComments przy użyciu nowoczesnych metodologii rozwoju.

Na zdrowie!

{{/isPost}}

---