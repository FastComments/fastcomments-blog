---
[category:API & Development]

###### [postdate]
# [postlink]Випущено новий API агрегації[/postlink]

{{#unless isPost}}
FastComments надає своїм клієнтам неперевершений доступ до їхніх даних з гнучким і швидким API агрегації
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ця стаття містить технічну термінологію

### Що нового

FastComments надає своїм клієнтам неперевершений доступ до їхніх даних з гнучким API агрегації. Цей API дозволяє вам рахувати, досліджувати, розрізати і агрегувати
ваші коментарі, голоси та **34 додаткових ресурси**!

### Приклад - Підрахунок коментарів за електронною поштою та сторінкою

Наприклад, з новим API ми можемо отримати кількість коментарів за сторінкою (`urlId`) та електронною поштою користувача (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Це надасть нам щось на кшталт:

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

А можливо, ми хочемо підрахувати наші схвалені та несхвалені коментарі:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Це дає нам:

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

API також підтримує фільтри запитів та більш детальну групування.

### Документація

[Ви можете знайти повну документацію тут.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Мотивація

Ми хочемо, щоб наші клієнти могли створювати інформаційні панелі для моніторингу свого облікового запису, створювати звіти, обробляти запити клієнтів і досліджувати свої дані за потреби.

### Хто має доступ і обмеження

Усі клієнти FastComments мають доступ до API. Ваше використання обмежене відповідно до доступних кредитів API, які будуть варіюватися залежно від пакету, який ви придбали.

### На завершення

Як і всі основні випуски, ми раді, що змогли знайти час для оптимізації, тестування та коректного випуску цих змін. Дайте нам знати
нижче, якщо ви виявите будь-які проблеми.

На здоров'я!

{{/isPost}}

---