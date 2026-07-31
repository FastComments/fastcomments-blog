[category:API & Development]
###### [postdate]
# [postlink]Вебхукови долазе у FastComments[/postlink]

{{#unless isPost}}
FastComments сада може позивати ваш API за креирање, ажурирање и брисање коментара.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Овај чланак садржи технички жаргон

#### Шта је ново

Са FastComments-ом је сада могуће позвати API крајњу тачку кад год се коментар дода, ажурира или избрише из нашег система. 

Ово постижемо асинхроним вебхуковањем преко HTTP/HTTPS.

#### Како се користи

Прво, идите на <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks администратор</a>. Ово је доступно преко Управљање подацима -> Вебхукови.

Одтамо можете одредити крајње тачке за сваку врсту догађаја коментара.

За сваку врсту догађаја, обавезно кликните **Send Test Payload** да бисте били сигурни да сте исправно подесили интеграцију. Погледајте следећи одељак, „Тестирање“, за детаље.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Пример подешавања вебхукова" title="Пример подешавања вебхукова" class="lozad" />
</div>

#### Тестирање

У <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks администратор</a> постоје дугмад „Send Test Payload“ за сваку врсту догађаја (Create, Update, Delete). Догађаји Create и Update шаљу фиктивни WebhookComment објекат, док тестирање Delete шаље фиктивно тело захтева само са ID-ом.

Тест ће извршити два позива да провери код одговора за „срећне“ (исправан API кључ) и „туге“ (неисправан API кључ) сценарије.

Када тест пошаље неисправан API кључ, треба да вратите статусни код 401 да би тест прошао у потпуности. Ако не проверите исправно вредност токена, видећете грешку попут:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Неуспех теста аутентификације вебхукова" title="Неуспех теста аутентификације вебхукова" class="lozad" />
</div>

#### Структура објекта коментара
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

#### Структура догађаја „Create“

Тело захтева за догађај „create“ је WebhookComment објекат.

#### Структура догађаја „Update“

Тело захтева за догађај „update“ је WebhookComment објекат.

#### Структура догађаја „Delete“

Тело захтева за догађај „delete“ је WebhookComment објекат, **али само са id-ом**.

#### Зашто Create и Update користе HTTP PUT уместо POST?

Пошто сви наши захтеви садрже ID, понављање истог Create или Update захтева не би требало да креира нове објекте на вашој страни. Ово значи да су ови позиви идемпотентни и треба да буду PUT догађаји у складу са HTTP спецификацијом.

#### Како функционише

Све измене на Comment објекту у систему покрећу догађај који се ставља у ред. Можете пратити овај ред у <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks администратор</a> у случају да ваш API падне. Ако захтев вашој API-у не успе, поново ћемо га ставити у ред према распореду. Тај распоред је 1 минут * број поновних покушаја. Ако позив не успе једном, покушаће поново за минут. Ако не успе два пута, чекаће два минута, и тако редом. Ово је да не оптеретимо ваш API ако падне због везаних разлога.

#### Сигурност и API токен

У заглављу захтева проследићемо ваш <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> у параметру под називом „token“.

Ако не проверите исправно овај параметар, ваша интеграција неће бити означена као верификована. Ово је заштита да се осигура да су све интеграције са FastComments безбедне.

#### У закључку

Надамо се да ћете сматрати FastComments Webhook интеграцију лако разумљивом и брзом за подешавање.

Ако имате додатних питања, слободно се обратите <a href="https://fastcomments.com/auth/my-account/help" target="_blank">страници за корисничку подршку</a>.

Поздрав!

{{/isPost}}

---