---
[category:API & Development]

###### [postdate]
# [postlink]Выпущен новый API агрегации[/postlink]

{{#unless isPost}}
FastComments предоставляет своим клиентам непревзойденный доступ к их данным с помощью гибкого и быстрого API агрегации.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Эта статья содержит техническую терминологию

### Что нового

FastComments предоставляет своим клиентам непревзойденный доступ к их данным с помощью гибкого API агрегации. Этот API позволяет вам считать, исследовать, делить и агрегировать
ваши комментарии, голоса и **34 других ресурса**!

### Пример - Подсчет комментариев по электронной почте и странице

Например, с помощью нового API мы можем получить подсчет комментариев по странице (`urlId`) и электронной почте пользователя (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Это даст нам что-то вроде:

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

Или, возможно, мы хотим подсчитать наши одобренные и не одобренные комментарии:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Что дает нам:

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

API также поддерживает фильтры запросов и более глубокую группировку.

### Документация

[Вы можете найти полную документацию здесь.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Мотивация

Мы хотим, чтобы наши клиенты могли создавать панели мониторинга для отслеживания своих учетных записей, составлять отчеты, обрабатывать запросы клиентов и исследовать свои данные по мере необходимости.

### Кто получает доступ и ограничения

Все клиенты FastComments имеют доступ к API. Ваше использование ограничено в зависимости от доступных кредитов API, которые будут варьироваться в зависимости от пакета, который вы приобрели.

### В заключение

Как и все основные релизы, мы рады, что смогли уделить время оптимизации, тестированию и правильному выпуску этих изменений. Дайте нам знать в комментариях, если вы обнаружите какие-либо проблемы.

Удачи!

{{/isPost}}

---