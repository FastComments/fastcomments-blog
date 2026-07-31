[category:API & Development]

###### [postdate]
# [postlink]Ново API за агрегирање објављено[/postlink]

{{#unless isPost}}
FastComments даје својим клијентима несагледив приступ својим подацима уз флексибилан и брз API за агрегирање
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Овај чланак садржи технички жаргон

### Шта је ново

FastComments даје својим клијентима несагледив приступ својим подацима уз флексибилан API за агрегирање. Овај API вам омогућава да бројите, истражујете, делите и агрегирате ваше коментаре, гласове и **34 додатна ресурса**!

### Пример - Бројање коментара по имејлу и страници

На пример, помоћу новог API‑а можемо добити број коментара по страници (`urlId`) и имејлу корисника (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Ово би нам дало нешто попут:

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

Или можда желимо да пребројимо одобрене и неодобрене коментаре:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Даје нам:

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

API такође подржава филтере упита и дубље груписање.

### Documentation

[Потпуну документацију можете пронаћи овде.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Мотивација

Желимо да наши клијенти могу да праве контролне табле за надгледање свог налога, израђују извештаје, обрађују захтеве корисника и истражују своје податке по потреби.

### Ко добија и ограничења

Сви FastComments клијенти имају приступ API‑у. Ваше коришћење је ограничено на основу доступних API кредита који се разликују у зависности од пакета који сте купили.

### У закључку

Као и свака велика издања, радује нас што смо успели да одвојимо време за оптимизацију, тестирање и правилно објављивање ових измена. Јавите нам у наставку ако откријете било какве проблеме.

Поздрав!

{{/isPost}}

---