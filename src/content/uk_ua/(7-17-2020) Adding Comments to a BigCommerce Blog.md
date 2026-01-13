---
[category:Integrations]
###### [postdate]
# [postlink]Додавання коментарів до блогу BigCommerce[/postlink]

{{#isPost}}

#### Додайте залучення аудиторії до будь-якої сторінки
Що якщо ваша аудиторія зможе коментувати ваші блоги, задавати питання та давати відгуки? Тепер вони можуть це робити з FastComments.

#### Кастомні теми
Для того щоб додати FastComments до блогу вашого магазину BigCommerce, вам потрібно буде редагувати шаблони тем. Ми проведемо вас через цей процес.

У панелі управління BigCommerce перейдіть до Storefront -> My Themes.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Посилання на магазин" title="Посилання на магазин" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Посилання на мої теми" title="Посилання на мої теми" class="lozad" />
</div>

У розділі "Поточна тема" ви побачите випадаюче меню з позначкою "Розширені".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Розширене випадаюче меню теми" title="Розширене випадаюче меню теми" class="lozad" />
</div>

У цьому випадаючому меню перша опція - "Редагувати файли теми". Якщо ця опція неактивна, спочатку потрібно буде скопіювати тему через "Зробити копію".

Коли ви зможете відкрити редактор шаблонів, ви побачите файловий браузер з лівого боку вашого браузера. Це файловий браузер для шаблонів у вашій темі.

Вам потрібно перейти до HTML-шаблону, що представляє публікацію блогу. Він знаходиться за адресою templates/components/blog/post.html, як показано:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Місцезнаходження файлу публікації редактора" title="Місцезнаходження файлу публікації редактора" class="lozad" />
</div>

Ваш фрагмент коду FastComments, який ви можете отримати <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">тут</a>, слід вставити безпосередньо після рядка 48, в якому є текст "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Місце для вставки FastComments" title="Місце для вставки FastComments" class="lozad" />
</div>

#### Пам'ятайте!
Вам потрібно буде додати домен вашого магазину до FastComments, що можна зробити <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">тут</a>.

#### На завершення
Ось як повинен виглядати FastComments на вашому блозі BigCommerce. На здоров'я!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence на блозі BigCommerce" title="FastCommence на блозі BigCommerce" class="lozad" />
</div>

{{/isPost}}

---