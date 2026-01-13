---
[category:API & Development]
###### [postdate]
# [postlink]Webhook-ите идват в FastComments[/postlink]

{{#unless isPost}}
FastComments вече може да извиква вашето API за създаване, актуализиране и премахване на коментари.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Тази статия съдържа техническа терминология

#### Какво ново

С FastComments сега е възможно да се извика API крайна точка всеки път, когато коментар бъде добавен, актуализиран или премахнат от нашата система.

Постига се с асинхронни webhook-ове през HTTP/HTTPS.

#### Как да го използвате

Първо, отидете на <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">админ панел за Webhook-ове</a>. Това може да се достъпи чрез Управление на данни -> Webhook-ове.

Оттам можете да зададете крайни точки за всеки тип събитие на коментар.

За всеки тип събитие, не забравяйте да кликнете **Изпрати тестово полезно натоварване**, за да се уверите, че сте настроили интеграцията си правилно. Вижте следващия раздел, "Тестване", за подробности.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Пример за настройка на Webhook" title="Пример за настройка на Webhook" class="lozad" />
</div>

#### Тестване

В <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">админ панела за Webhook-ове</a> има бутони "Изпрати тестово полезно натоварване" за всеки
тип събитие (Създаване, Актуализиране, Изтриване). Събитията за Създаване и Актуализиране изпращат фалшив обект WebhookComment, докато тестването на Изтриване ще изпрати фалшиво тяло на заявка само с един ID.

Тестът ще направи два извиквания, за да провери кода на отговора за "щастлив" (правилен API ключ) и "тъжен" (невалиден API ключ) сценарии.

Когато тестът изпрати невалиден API ключ, трябва да върнете статус код 401, за да премине теста напълно. Ако не проверите правилно стойността на токена, ще видите грешка като:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Неуспех на теста за удостоверяване на Webhook" title="Неуспех на теста за удостоверяване на Webhook" class="lozad" />
</div>

#### Структура на обекта за коментар
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

#### Структура на събитието "Създаване"

Тялото на заявката за събитието "създаване" е обект WebhookComment.

#### Структура на събитието "Актуализиране"

Тялото на заявката за събитието "актуализиране" е обект WebhookComment.

#### Структура на събитието "Изтриване"

Тялото на заявката за събитието "изтриване" е обект WebhookComment, **но само съдържащо id**.

#### Защо събитията Създаване и Актуализиране използват HTTP PUT, а не POST?

**Тъй като всички наши заявки съдържат ID**, повтарянето на същата заявка за Създаване или Актуализиране **не трябва да създава нови обекти от ваша страна**. Това означава, че тези извиквания са идемпотентни и трябва да бъдат
PUT събития, съгласно HTTP спецификацията.

#### Как работи

Всички промени в обекта Коментар в системата задействат събитие, което попада в опашка. Можете да наблюдавате тази опашка в <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">админ панела за Webhook-ове</a> в случай, че вашето API спре. Ако заявка до вашето API не успее, ще я поставим в опашка на график. Този график е 1 минута * броя на повторенията. Ако извикването се провали веднъж, ще опита отново след минута. Ако се провали два пъти, ще изчака две минути и така нататък. 
Това е, за да не натоварваме вашето API, ако имате проблеми с натоварването.

#### Сигурност и API токен

В заглавката на заявката ще предадем вашето <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> в параметъра, наречен "token".

Ако не проверите правилно този параметър, вашата интеграция няма да бъде маркирана като Проверена. Това е защита, за да се уверим, че всички интеграции с FastComments са сигурни.

#### В заключение

Надяваме се, че интеграцията на FastComments Webhook е лесна за разбиране и бърза за настройка.

Ако имате допълнителни въпроси, не се колебайте да се свържете с <a href="https://fastcomments.com/auth/my-account/help" target="_blank">страницата за поддръжка на клиенти</a>.

Наздраве!

{{/isPost}}

---