---
[category:Integrations]
###### [postdate]
# [postlink]Osadzanie komentarzy na stronie GatsbyJS z FastComments[/postlink]

{{#unless isPost}}
Możesz teraz używać FastComments do osadzania komentarzy na stronie stworzonej za pomocą Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera terminologię techniczną

#### Co nowego

Niedawno uruchomiliśmy nasz <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">komponent React</a> dla FastComments.

Otwiera to wiele możliwości - w tym integrację FastComments z Gatsby.

#### Jeśli napisałeś własny wrapper

Jeśli napisałeś własny wrapper React dla FastComments - rozważ zastąpienie go naszym nowym. Będziemy dbać o tę abstrakcję za Ciebie - i zawiera ona wiele
ciekawych funkcji, takich jak <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">automatyczne przeładowanie przy zmianach w konfiguracji</a>.

#### Jak to działa

Ponieważ FastComments ma komponent React jako wrapper wokół naszego podstawowego widgetu - wystarczy użyć naszej biblioteki React do zainicjowania widgetu po stronie klienta.

W pełni wspieramy ten komponent i będziemy go regularnie aktualizować.

#### Przykłady?

Zaczęliśmy przygotowywać przykłady, które możesz znaleźć <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">tutaj</a>.

#### Tryb nocny

Jednym z przykładów, które mamy, jest "tryb nocny" - renderowanie FastComments na stronie z czarnym (lub bardzo ciemnym) tłem: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Dodatkowo, ponieważ widget reaguje na zmiany konfiguracji, oznacza to, że możesz mieć tryb do przełączania motywu swojej strony i łatwo poprosić fastcomments-react o aktualizację.

#### Podsumowując

Mamy nadzieję, że integracja FastComments z Twoją stroną Gatsby będzie szybka i łatwa.

Pozdrawiamy!

{{/isPost}}