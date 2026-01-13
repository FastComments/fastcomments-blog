---
[category:Wydajność]
###### [postdate]
# [postlink]FastComments zaktualizowane do HTTP/2[/postlink]

{{#unless isPost}}
Wprowadziliśmy pewne ulepszenia infrastrukturalne, które jeszcze bardziej poprawiają wydajność FastComments!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Artykuł Zawiera Terminologię Techniczną

### Co Nowego

Od momentu uruchomienia FastComments korzystał z HTTP/1.1. Ostatnio przestawiliśmy naszą całą infrastrukturę
we wszystkich regionach na HTTP/2.

### Wpływ

Ta aktualizacja utrzymuje FastComments na bieżąco z nowoczesnymi standardami, zapewniając jednocześnie
pewne poprawy wydajności. Minusem jest to, że niektóre starsze przeglądarki nie są już wspierane.

### Przeglądarki i Klienty, Które Zostały Zaniechane

Możesz znaleźć [nieobsługiwane przeglądarki tutaj](https://caniuse.com/http2). Głównym problemem będzie IE11, który
ma tylko częściowe wsparcie, jednak ci użytkownicy powinni przejść na Edge.

Chrome, Firefox i inne od lat wspierają HTTP/2, więc uważamy, że zmiana ta jest bezpieczna.

### Korzyści z Wydajności

FastComments jest już dość optymalny pod względem serwowanych zasobów i ich kolejności. Na przykład,
widget komentarzy wysyła tylko kilka zapytań do załadowania - początkowy iframe, potem skrypt, który zawiera style, aby zredukować liczbę zapytań, a następnie
zapytanie do API, aby uzyskać wszystkie potrzebne informacje. W porównaniu do wielu innych usług jest to dość kompaktowe.

Tak więc, to nie jest ten przypadek, w którym HTTP/2 naprawdę wiele pomaga. Główna zaleta HTTP/2 polega na możliwości wysyłania równoległych zapytań.

Jednak HTTP/2 pomaga nam z kompresją! Nagłówki są teraz wysyłane w protokole binarnym, który
jest bardziej kompaktowy, a niektóre wtyczki z dużą ilością zasobów ładują się znacznie szybciej, ponieważ zapytania
mogą być przesyłane równolegle.

### Podsumowanie

Dziękujemy naszym klientom za ich cierpliwość w związku z wprowadzanymi zmianami. Mamy nadzieję, że nadal pokochasz FastComments.

Na zdrowie!

{{/isPost}}

---