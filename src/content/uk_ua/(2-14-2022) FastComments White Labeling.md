---
[category:API & Development]

###### [postdate]
# [postlink]White Labeling FastComments[/postlink]

{{#unless isPost}}
White Labeling, з повною інтеграцією API та інструментами автоматизації, приходить до FastComments.
{{/unless}}

{{#isPost}}

## Що нового

FastComments тепер може інтегруватися з іншими застосунками та сторонніми реселлерами через White Labeling. White Labeling дозволяє вам створювати акаунти FastComments (називаються tenants), користувачів, модераторів та інше.

Ми тепер пропонуємо [вичерпний API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) для автоматизації інтеграції
з третіми сторонами.

Тепер ви можете, через API:

- Створювати клієнтів (дочірні tenants), які керуються вашим tenant.
- Керувати пакетами, доступними вашим клієнтам, і як ви будете обробляти виставлення рахунків.
- Додавати та керувати користувачами у ваших керованих tenants.
- Додавати та керувати модераторами у ваших керованих tenants.
- Запрошувати модераторів та надсилати посилання для входу користувачам tenant.

## Виставлення рахунків

З виставленням рахунків існує два варіанти:

1. Через FastComments Flex, використання ваших дочірніх tenants автоматично підсумовується і виставляється батьківському tenant. Це можна контролювати через [Сторінку аналітики виставлення рахунків](https://fastcomments.com/auth/my-account/analytics/billing).
2. Через FastComments Pro, ви отримуєте доступ до створення фіксованої кількості дочірніх tenants за фіксовану місячну плату.

## Деградація брендингу

У керованих tenants можна ввімкнути деградацію брендингу, що видаляє наші логотипи з віджета коментарів.

## Як отримати White Labeling

Наразі плани FastComments Flex та Pro пропонують доступ до White Labeling API.

## Скрипти та приклади

Приклад скрипту, який використовує API для налаштування tenant з користувачами та модераторами [доступний тут](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Вичерпна валідація

Кожен ресурс API містить вичерпні валідації та обмеження, з корисними повідомленнями про помилки, щоб направити вас у правильному використанні.

<div class="code"><div class="title">Приклад детальної помилки</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Користувач з таким id не існує в цьому tenant. Спочатку створіть користувача, а потім зробіть його модератором.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Інші випадки використання

API [користувачів tenant](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) та [модераторів](https://docs.fastcomments.com/guide-api.html#moderator-structure) також можуть бути використані для
додавання та управління цими ресурсами у вашому власному tenant, незалежно від деградації брендингу.

## Документація

Ви можете знайти повну документацію White Labeling та як використовувати API [тут](https://docs.fastcomments.com/guide-white-labeling.html).

## На завершення

Сподіваємось, що ви знайшли це оновлення та його документацію корисними. Щасливої інтеграції!

{{/isPost}}