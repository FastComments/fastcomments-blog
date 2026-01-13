---
[category:Performance]
###### [postdate]
# [postlink]Indeksowanie Twoich Wątków Komentarzy w Wyszukiwarkach[/postlink]

{{#unless isPost}}
Ulepszyliśmy informacje, które wyszukiwarki widzą podczas przeszukiwania Twojej strony z FastComments.
{{/unless}}

{{#isPost}}

## Co nowego

Wcześniej, gdy wyszukiwarki przeszukiwały strony z zainstalowanym FastComments, indeksowały tylko pierwszą stronę (najlepsze 30) komentarzy.

Było to spowodowane tym, że wcześniej wyszukiwarki widziały to samo, co Ty, odwiedzając swoją stronę.

Teraz, gdy wyszukiwarka odwiedza Twoją stronę, wszystkie komentarze będą ładowane.

## Wpływ na Pozycjonowanie Stron

Nowoczesne wyszukiwarki biorą pod uwagę wiele czynników przy ustalaniu rankingu strony, w tym istotność treści na stronie w porównaniu do tego, czego szukasz, a nawet takie rzeczy jak
czas ładowania tej strony.

Ta zmiana oznacza, że pełna treść Twoich wątków komentarzy jest dostępna do indeksowania, co może zwiększyć istotność wyszukiwań. Pokazuje to również zaangażowanie, co
może być czymś, co wyszukiwarka wykorzysta do oceny pozycji.

Możliwym negatywnym czynnikiem jest wydajność, ponieważ teraz ładujemy więcej komentarzy, jednak w naszych testach stwierdziliśmy, że potrzeba wielu setek, jeśli nie tysięcy komentarzy
w wątku, aby spowolnić FastComments do tego stopnia, że wpłynęłoby to na czasy ładowania Twojej strony, co mogłoby spowodować zmianę w rankingu.

Na przykład, nasza strona demonstracyjna z ponad 100 komentarzami nadal <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">otrzymuje 99/100 punktów od Google PageSpeed Insights</a>.

## Testy, które przeprowadziliśmy

Zapewniliśmy, że wyszukiwarki teraz widzą cały wątek komentarzy na stronie, a także testowaliśmy wydajność ładowania całych wątków komentarzy jednocześnie.

## Wpływ na Aktualnych Klientów

Jeśli jesteś aktualnym klientem korzystającym z FastComments, zmiana została już zastosowana do Twojego konta i nie są wymagane żadne dalsze działania. Gdy wyszukiwarki ponownie zindeksują Twoje strony,
wszystkie komentarze na tych stronach powinny być zindeksowane.

## Podsumowanie

Mamy nadzieję, że ta aktualizacja i jej dokumentacja były dla Ciebie przydatne. Szczęśliwego komentowania!

{{/isPost}}