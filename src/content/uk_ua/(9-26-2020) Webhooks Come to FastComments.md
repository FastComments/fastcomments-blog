---
[category:API & Development]
###### [postdate]
# [postlink]Вебхуки в FastComments[/postlink]

{{#unless isPost}}
FastComments тепер може викликати ваш API для створення, оновлення та видалення коментарів.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ця стаття містить технічну термінологію

#### Що нового

З FastComments тепер можливо викликати API-інтерфейс щоразу, коли коментар додається, оновлюється або видаляється з нашої системи.

Ми досягаємо цього за допомогою асинхронних вебхуків через HTTP/HTTPS.

#### Як це використовувати

Спершу перейдіть до <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">адміністратора вебхуків</a>. Це доступно через Управління даними -> Вебхуки.

Там ви можете вказати кінцеві точки для кожного типу події коментаря.

Для кожного типу події, обов'язково натисніть **Відправити тестове навантаження**, щоб переконатися, що ви правильно налаштували свою інтеграцію. Дивіться наступний розділ, "Тестування", для деталей.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Приклад налаштування вебхуків" title="Приклад налаштування вебхуків" class="lozad" />
</div>

#### Тестування

В <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">адміністраторі вебхуків</a> є кнопки "Відправити тестове навантаження" для кожного
типу події (Створення, Оновлення, Видалення). Події Створення та Оновлення відправляють тестовий об'єкт WebhookComment, у той час як тестування Видалення надішле тестове тіло запиту лише з ID.

Тест здійснить два виклики, щоб перевірити код відповіді для сценаріїв "щасливий" (правильний API-ключ) і "сумний" (неправильний API-ключ).

Коли тест надсилає неправильний API-ключ, ви повинні повернути код статусу 401, щоб тест пройшов повністю. Якщо ви неправильно перевірите значення токена, ви побачите помилку на зразок:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Неуспішне тестування аутентифікації вебхуків" title="Неуспішне тестування аутентифікації вебхуків" class="lozad" />
</div>

#### Структура об'єкта коментаря
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### Структура події "Створення"

Тіло запиту події "створення" є об'єктом WebhookComment.

#### Структура події "Оновлення"

Тіло запиту події "оновлення" є об'єктом WebhookComment.

#### Структура події "Видалення"

Тіло запиту події "видалення" є об'єктом WebhookComment, **але лише містить id**.

#### Чому Створення та Оновлення використовують HTTP PUT, а не POST?

**Оскільки всі наші запити містять ID**, повторення того ж запиту Створення або Оновлення **не повинно створювати нові об'єкти у вас на стороні**. Це означає, що ці виклики є ідемпотентними і повинні бути подіями PUT відповідно до специфікації HTTP.

#### Як це працює

Усі зміни до об'єкта Коментаря в системі викликають подію, яка потрапляє в чергу. Ви можете спостерігати за цією чергою в <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">адміністраторі вебхуків</a> у випадку, якщо ваш API вийде з ладу. Якщо запит до вашого API не вдається, ми повторно виставимо його в чергу за графіком. Цей графік становить 1 хвилину * кількість спроб. Якщо виклик не вдається один раз, він спробує ще раз через хвилину. Якщо він не вдається два рази, він почекає дві хвилини, і так далі.
Це робиться для того, щоб ми не перевантажували ваш API, якщо йому стає погано через навантаження.

#### Безпека та API Токен

У заголовку запиту ми передамо ваш <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> з параметром "token".

Якщо ви не перевірите цей параметр належним чином, ваша інтеграція не буде позначена як перевірена. Це засіб безпеки, щоб гарантувати, що всі інтеграції з FastComments є безпечними.

#### На завершення

Ми сподіваємося, що ви знайдете інтеграцію вебхуків FastComments легкою для розуміння та швидкою для налаштування.

Якщо у вас є подальші питання, не соромтеся звертатися до <a href="https://fastcomments.com/auth/my-account/help" target="_blank">сторінки підтримки клієнтів</a>.

На все добре!

{{/isPost}}

---