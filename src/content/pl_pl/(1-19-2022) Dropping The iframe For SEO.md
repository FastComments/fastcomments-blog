---
[category:Performance]
[category:Features]
###### [postdate]
# [postlink]Rezygnacja z iframe dla SEO[/postlink]

{{#unless isPost}}
Poprawiliśmy widoczność Twoich komentarzy w wyszukiwarkach oraz zwiększyliśmy prawdopodobieństwo, że treść będzie przypisana do Twojej witryny.
{{/unless}}

{{#isPost}}

## Co nowego

Dawniej, FastComments renderował Twoje wątki komentarzy w iframe podczas indeksowania przez wyszukiwarki. Dzieje się tak, ponieważ aplikacja wymaga użycia iframe w związku z tym, jak używamy ciasteczek dla sesji użytkowników.

Jednakże, stanowi to problem dla wyszukiwarek, ponieważ nie gwarantują one, że treść w iframe będzie przypisana do Twojej witryny.

Teraz, podczas renderowania komentarzy, skrypt osadzający sprawdzi, czy strona jest ładowana przez robota. Jeśli tak, nie użyje iframe!

## Ile komentarzy jest wyświetlanych

Do 2000 komentarzy będzie pokazywanych wyszukiwarkom na stronie. Będą one sortowane zgodnie z Twoim domyślnym skonfigurowanym porządkiem sortowania.

## Testy, które przeprowadziliśmy

Zapewniliśmy, że wyszukiwarki teraz widzą cały wątek komentarzy dla strony, oraz przetestowaliśmy wydajność ładowania całych wątków komentarzy jednocześnie.

## Wpływ na istniejących klientów

Jeśli jesteś istniejącym klientem korzystającym z FastComments, zmiana została już zastosowana do Twojego konta i nie są wymagane żadne dalsze działania. Gdy wyszukiwarki ponownie zindeksują Twoje strony, wszystkie komentarze na tych stronach powinny zostać zindeksowane.

## Podsumowanie

Mamy nadzieję, że uważasz tę aktualizację oraz jej dokumentację za przydatne. Miłego komentowania!

{{/isPost}}