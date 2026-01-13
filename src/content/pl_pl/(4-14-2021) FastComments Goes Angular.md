---
[category:API & Development]

###### [postdate]
# [postlink]FastComments w Angularze[/postlink]

{{#unless isPost}}
Czy potrzebujesz wstawić komentarze do aplikacji stworzonej w Angularze? Mamy dla Ciebie rozwiązanie.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Artykuł zawiera terminologię techniczną

#### Co nowego

FastComments ma teraz komponent Angularowy, który jest na równi z naszym widżetem VanillaJS.

Postanowiliśmy nazwać bibliotekę ngx-fastcomments. Możesz znaleźć repozytorium GitHub z kodem źródłowym <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">tutaj</a>.

Repozytorium zawiera także przykłady użycia widżetu w formie przestrzeni roboczej Angular.

Możesz go znaleźć w NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">tutaj</a>.

#### Jak to działa

Nowy komponent działa tak, że komponent Angular jest opakowaniem wokół istniejącego widżetu FastComments.
 
To oznacza, że jeśli dodamy funkcje do naszych istniejących komponentów lub naprawimy błędy, natychmiast się o tym dowiesz!

#### Dlaczego nowy komponent?

Napisaliśmy widżet FastComments VanillaJS, aby był rdzeniem naszej działalności (wraz z rdzeniem backendu). To oznacza, że zaprojektowaliśmy go tak, aby można go było rozszerzać, tak jak robimy to teraz.

Bez tej nowej biblioteki Angular, mogłeś zintegrować FastComments ze swoją aplikacją, pisząc własną bibliotekę, ale byłoby to istotną przeszkodą w przyjęciu. Bezpośrednie wsparcie dla Angulara ułatwia przyjęcie FastComments dla tych typów klientów.

#### Aplikacje jednoskalowe?

FastComments wspiera SPAs w swoim rdzeniu. Komponent monitoruje zmiany w obiekcie konfiguracyjnym za pomocą detekcji zmian. Na przykład, jeśli zaktualizujesz bieżącą stronę (nazywaną urlId), widżet zostanie ponownie wyrenderowany. Ułatwia to implementację przypadków użycia, takich jak przełączanie trybu ciemnego czy dodawanie paginacji.

#### Co zmienia się dla istniejących klientów 

Nic się nie zmienia dla istniejących klientów - i **nic** nie stoi na przeszkodzie, aby korzystać z wersji VanillaJS FastComments w nowych projektach. ngx-fastcomments zależy od wersji VanillaJS FastComments i zawsze tak będzie. Jeśli wydamy nowe komponenty, będziemy podążać za tym samym modelem.

Nasz widżet VanillaJS jest obywatel klasy premium w FastComments. To wydanie jest całkowicie *dodające* do naszej infrastruktury.

Dodatkowo, widżet VanillaJS wciąż pozostaje świetnym rozwiązaniem do umieszczania osadzonych komentarzy na dowolnej stronie internetowej, która nie używa frameworka, takiej jak strona statyczna.

#### Podsumowując

Poprzez wydanie biblioteki ngx-fastcomments oraz przyszłych bibliotek, mamy nadzieję, że ułatwimy deweloperom przyjęcie FastComments, korzystając z nowoczesnych metodologii rozwoju. 

Na zdrowie!

{{/isPost}}

---