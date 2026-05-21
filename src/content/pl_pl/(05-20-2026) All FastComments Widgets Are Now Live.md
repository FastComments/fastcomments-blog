---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]Wszystkie widżety FastComments są teraz aktywne[/postlink]

{{#unless isPost}}
Każdy osadzony widżet FastComments (liczba komentarzy, ostatnie komentarze, najpopularniejsze strony, ostatnie dyskusje, podsumowanie recenzji, pływające polubienia) teraz aktualizuje się w czasie rzeczywistym.
{{/unless}}

{{#isPost}}

### Co nowego

Główny widżet komentarzy jest aktywny od samego początku. Mniejsze osadzone widżety, jednak, nie były. Liczby komentarzy, widżety „najnowsze komentarze” lub „najpopularniejsze strony” itp. mogły z radością pokazywać liczbę, która była przestarzała o minutę.

Teraz każdy widżet, który FastComments wysyła, subskrybuje aktualizacje na żywo i odświeża się od razu :) To również obejmuje podsumowania recenzji!

### Które widżety

Wszystkie. Konkretne:

- `FastCommentsCommentCount` - liczba komentarzy na stronę
- `FastCommentsCommentCountBulk` - wersja zbiorcza, która aktualizuje wiele liczb na stronie z listą/archiwum
- `FastCommentsRecentComments` i `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` i `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` (pływająca odznaka liczby komentarzy)
- `FastCommentsEmbedPageLikesFloating` (pływające polubienia + liczba komentarzy)

### Co musisz zrobić

Nic. Jeśli już masz któryś z tych widżetów osadzonych, odśwież stronę raz. Następnym razem, gdy komentarz zostanie dodany, edytowany, usunięty lub ktoś zareaguje na stronę, widżet zostanie zaktualizowany.

Stary znacznik konfiguracyjny `isLive: true` na widżetach liczby komentarzy jest teraz zbędny - widżety są zawsze aktywne.

Jeśli ładujesz skrypt widżetu z naszego CDN, masz nową wersję, w tym jeśli używasz jednej z naszych bibliotek wrapper (React, Vue itp.).

### Polubienia są też na żywo

Widżet pływających polubień również reaguje na zdarzenia polubienia i reakcji. Kliknij serce na stronie, a inne otwarte karty zobaczą zmianę liczby.

### Jak to działa

Każdy widżet otwiera pojedyncze połączenie WebSocket. Widżety, które pokazują dane dla jednej konkretnej strony (`comment-count` (w tym zbiorczy), `reviews-summary`, `embed-page-likes-floating`) subskrybują strumień zdarzeń tej strony. Widżety, które pokazują dane obejmujące jednego najemcę (`recent-comments`, `top-pages`, `recent-discussions`) subskrybują wąski strumień pulsów per-najemca, który wysyła sygnał, gdy cokolwiek w tym najemcy się zmienia.

Wynik jest taki, że nieaktywny widżet kosztuje praktycznie nic, a aktywny widżet pokazuje świeżą liczbę w ciągu sekundy lub dwóch od podstawowej zmiany.

### Spójność pamięci podręcznej

Serwerowe pamięci podręczne, które wspierają te widżety, wcześniej wygasały po 60-sekundowym TTL. Teraz unieważniają się natychmiast, gdy dotrze odpowiedni komentarz lub zdarzenie reakcji, więc pierwsze żądanie po zmianie zwraca świeże dane, a nie wersję z pamięci podręcznej.

### Podsumowanie

Cieszymy się, że mogliśmy poświęcić czas na przetestowanie i optymalizację tej zmiany, aby nasi klienci mogli cieszyć się nią po tej samej cenie co zawsze. Uważamy, że
żywe podsumowania recenzji są dla nas szczególnie atrakcyjnym wyróżnikiem.

Daj nam znać poniżej, jeśli zauważysz coś nie tak.

Na zdrowie!

{{/isPost}}