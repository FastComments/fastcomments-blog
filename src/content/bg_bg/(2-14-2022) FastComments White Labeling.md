---
[category:API & Development]

###### [postdate]
# [postlink]White Labeling на FastComments[/postlink]

{{#unless isPost}}
White Labeling с пълна интеграция на API и автоматизационни инструменти пристига в FastComments.
{{/unless}}

{{#isPost}}

## Какво е новото

FastComments вече може да се интегрира с други приложения и трети страни чрез White Labeling. White Labeling ви позволява да създавате акаунти за FastComments (наречени наеми), потребители, модератори и други.

Сега предлагаме [обширно API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) за автоматизиране на интеграцията
с трети страни.

Сега можете да, чрез API:

- Създадете клиенти (дочерни наеми), които се управляват от вашия наем.
- Управлявате пакетите, налични за вашите клиенти и как ще обработвате фактурирането.
- Добавяте и управлявате потребители в управляваните от вас наеми.
- Добавяте и управлявате модератори в управляваните от вас наеми.
- Каните модератори и изпращате линкове за вход на потребителите от наема.

## Фактуриране

При фактурирането има две опции:

1. Чрез FastComments Flex, използването на вашите дочерни наеми автоматично се обобщава и фактурира на родителския наем. Това може да се наблюдава чрез [Billing Analytics Page](https://fastcomments.com/auth/my-account/analytics/billing).
2. Чрез FastComments Pro, получавате достъп да създавате фиксиран брой дочерни наеми за фиксирана месечна цена.

## Дебрандиране

Управляваните наеми могат да имат активирано дебрандиране, което премахва нашите логота от коментарния уиджет.

## Как да получите White Labeling

В момента плановете FastComments Flex и Pro предлагат достъп до White Labeling API.

## Скриптове и Примери

Примерен скрипт, който използва API за настройка на наем с потребители и модератори [е наличен тук](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Обширна Валидация

Всеки API ресурс съдържа обширни валидции и ограничения, с полезни съобщения за грешки, които да ви помогнат да ги използвате правилно.

<div class="code"><div class="title">Пример за Подробна Грешка</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Потребител с този id не съществува в този наем. Създайте потребителя първо и след това го направете модератор.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Други Използвания

API-тата [потребители на наем](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) и [модератори](https://docs.fastcomments.com/guide-api.html#moderator-structure) също могат да се използват за
добавяне и управление на тези ресурси във вашия собствен наем, независимо от white labeling.

## Документация

Можете да намерите пълната документация по White Labeling и как да използвате API [тук](https://docs.fastcomments.com/guide-white-labeling.html).

## В Заключение

Надяваме се, че сте намерили това обновление и неговата документация полезни. Приятно интегриране!

{{/isPost}}