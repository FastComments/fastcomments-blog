---
[category:API & Development]

###### [postdate]
# [postlink]Nowa wersja API Agregacji[/postlink]

{{#unless isPost}}
FastComments zapewnia swoim klientom niezrównany dostęp do ich danych dzięki elastycznemu i szybkiemu API agregacji
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera terminologię techniczną

### Co nowego

FastComments zapewnia swoim klientom niezrównany dostęp do ich danych dzięki elastycznemu API agregacji. To API pozwala na zliczanie, badanie, segmentowanie i agregowanie
twoich komentarzy, głosów i **34 innych zasobów**!

### Przykład - Zliczanie komentarzy według e-maila i strony

Na przykład, z nowym API możemy uzyskać liczbę komentarzy według strony (`urlId`) i e-maila użytkownika (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

To da nam coś takiego:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "commenterEmail": {
                "distinctCounts": {
                    "someone@somewhere.com": 1,
                    "someone2@somewhere.com": 1
                }
            }
        },
        {
            "urlId": {
                "distinctCounts": {
                    "some-page": 2
                }
            }
        }
    ],
    "stats": { "scanned": 2 }
}
</div>

A może chcemy zliczyć nasze komentarze zatwierdzone i niezatwierdzone:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Daje nam:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "approved": { "distinctCounts": { "true": 2200, "false": 231 } }
        }
    ],
    "stats": { "scanned": 2431 }
}
</div>

API wspiera również filtry zapytań oraz bardziej szczegółowe grupowanie.

### Dokumentacja

[Pełną dokumentację możesz znaleźć tutaj.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motywacja

Chcemy, aby nasi klienci mogli budować pulpity do monitorowania swojego konta, tworzyć raporty, obsługiwać prośby klientów i badać swoje dane w razie potrzeby.

### Kto ma dostęp i limity

Wszyscy klienci FastComments mają dostęp do API. Twoje wykorzystanie jest ograniczone w oparciu o dostępne kredyty API, które będą się różnić w zależności od zakupionego pakietu.

### Podsumowanie

Jak przy każdej większej aktualizacji, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wprowadzenie tych zmian. Daj nam znać
poniżej, jeśli napotkasz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---