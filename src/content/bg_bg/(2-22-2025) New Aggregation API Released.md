---
[category:API & Development]

###### [postdate]
# [postlink]Новата API за агрегиране е пусната[/postlink]

{{#unless isPost}}
FastComments дава на своите клиенти ненадминат достъп до данните им с гъвкава и бърза API за агрегиране
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Тази статия съдържа технически термини

### Какво е новото

FastComments дава на своите клиенти ненадминат достъп до данните им с гъвкава API за агрегиране. Тази API ви позволява да броите, разследвате, разделяте и агрегиране
вашите коментари, гласове и **34 допълнителни ресурса**!

### Пример - Броене на коментари по имейл и страница

Например, с новата API можем да получим броя на коментарите по страница (`urlId`) и имейл на потребителя (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Това би ни дало нещо подобно:

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

Или може би искаме да преброим нашите одобрени и неодобрени коментари:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Да ни даде:

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

API-то също така поддържа филтри за заявки и по-дълбоко групиране.

### Документация

[Можете да намерите пълната документация тук.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Мотивация

Искаме нашите клиенти да могат да изграждат табла за управление, за да следят акаунта си, да изграждат отчети, да се справят с клиентски запитвания и да разследват данните си при необходимост.

### Кой има достъп и ограничения

Всички клиенти на FastComments имат достъп до API-то. Вашето използване е ограничено въз основа на наличните ви API кредити, които ще варират в зависимост от пакета, който сте закупили.

### В заключение

Както при всички основни версии, ние сме доволни, че успяхме да отделим време за оптимизиране, тестване и правилно публикуване на тези промени. Уведомете ни
по-долу, ако откриете някакви проблеми.

Наздраве!

{{/isPost}}

---