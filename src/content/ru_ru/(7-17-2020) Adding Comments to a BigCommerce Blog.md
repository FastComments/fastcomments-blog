---
[category:Integrations]
###### [postdate]
# [postlink]Добавление комментариев в блог BigCommerce[/postlink]

{{#isPost}}

#### Добавьте вовлеченность аудитории на любую страницу
Что если ваша аудитория сможет оставлять комментарии к вашим блогам, задавать вопросы и давать обратную связь? Теперь они могут сделать это с помощью FastComments.

#### Пользовательские темы
Чтобы добавить FastComments в блог вашего магазина BigCommerce, вам нужно будет отредактировать шаблоны темы. Мы проведем вас через этот процесс.

В панели управления BigCommerce перейдите в Storefront -> My Themes.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Ссылка на магазин" title="Ссылка на магазин" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Ссылка на Мои темы" title="Ссылка на Мои темы" class="lozad" />
</div>

Под "Текущая тема" вы увидите выпадающее меню с надписью "Дополнительно".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Выпадающее меню темы" title="Выпадающее меню темы" class="lozad" />
</div>

В этом выпадающем меню первым вариантом будет "Редактировать файлы темы". Если этот пункт недоступен, вам сначала придется скопировать тему через "Создать копию".

Когда вы сможете открыть редактор шаблонов, вы увидите файловый браузер с левой стороны вашего браузера. Это файловый браузер для шаблонов в вашей теме.

Вам нужно будет перейти к HTML-шаблону, который представляет собой запись блога. Он находится по адресу templates/components/blog/post.html, как показано:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Расположение файла редактора записи" title="Расположение файла редактора записи" class="lozad" />
</div>

Ваш фрагмент кода FastComments, который вы можете получить <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">здесь</a>, должен быть вставлен сразу после строки 48, где находится текст "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Место для вставки FastComments" title="Место для вставки FastComments" class="lozad" />
</div>

#### Помните!
Вам нужно будет добавить домен вашего магазина в FastComments, что вы можете сделать <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">здесь</a>.

#### В заключение
Вот как должны выглядеть FastComments на вашем блоге BigCommerce. Ваше здоровье!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence на блоге BigCommerce" title="FastCommence на блоге BigCommerce" class="lozad" />
</div>

{{/isPost}}

---