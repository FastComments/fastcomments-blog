---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Osadzanie komentarzy na stronie VueJS z FastComments[/postlink]

{{#unless isPost}}
Potrzebujesz osadzić komentarze w aplikacji stworzonej z Vue? Mamy to.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera terminologię techniczną

#### Co nowego

FastComments ma teraz komponent Vue, który jest na równi funkcjonalny z naszym widżetem VanillaJS.

Postanowiliśmy nazwać bibliotekę fastcomments-vue. Możesz znaleźć repozytorium GitHub z kodem źródłowym <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">tutaj</a>.

Repozytorium zawiera również przykładowe użycie widżetu.

Jest dostępne na NPM, które możesz znaleźć <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">tutaj</a>.

#### Jak to działa

Nowy komponent działa w ten sposób, że komponent Vue jest opakowaniem wokół istniejącego widżetu FastComments. 

To oznacza, że jeśli dodamy funkcje do naszych istniejących komponentów lub naprawimy błędy, od razu będziesz z tego korzystać!

#### Dlaczego nowy komponent?

Napisaliśmy widżet FastComments VanillaJS, aby był rdzeniem naszego biznesu (obok rdzenia backendu). Oznacza to, że zaprojektowaliśmy go tak, aby można go było rozszerzać tak, jak robimy to teraz.

Chociaż bez tej nowej biblioteki Vue, mogłeś zintegrować FastComments w swojej aplikacji, pisząc swoją własną bibliotekę, byłoby to dużym utrudnieniem w adoptowaniu. Obsługując Vue bezpośrednio, ułatwiamy klientom tego typu adopcję FastComments.

#### Vue 3.0

Mamy komponent stworzony specjalnie dla Vue 3.0 o nazwie <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Aplikacje jednolitych stron?

FastComments wspiera SPAs w swoim rdzeniu. Komponent monitoruje zmiany w obiekcie konfiguracyjnym - więc jeśli zaktualizujesz bieżącą stronę (nazywaną urlId), widżet zostanie ponownie wyrenderowany.

#### Co się zmienia dla istniejących klientów

Nic się nie zmienia dla istniejących klientów - i **nie ma** nic złego w używaniu wersji VanillaJS FastComments dla nowych projektów. fastcomments-vue zależy od wersji VanillaJS FastComments i zawsze będzie. Jeśli wydamy komponenty Angular lub Vue, będziemy się trzymać tego samego modelu.

Nasz widżet VanillaJS jest obywatel pierwszej klasy FastComments. To wydanie jest całkowicie *dodatkowe* dla naszej infrastruktury.

Dodatkowo, widżet VanillaJS nadal pozostaje świetnym rozwiązaniem do dodawania osadzonych komentarzy na dowolnej stronie internetowej, która nie używa frameworka, jak strona statyczna.

#### Podsumowując

Wydając bibliotekę fastcomments-vue oraz przyszłe biblioteki, mamy nadzieję, że ułatwimy programistom adoptowanie FastComments podczas korzystania z nowoczesnych metodologii rozwoju.

Na zdrowie!

{{/isPost}}

---