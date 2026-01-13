---
[category:Integrations]
###### [postdate]
# [postlink]Добавление комментариев в блог BigCommerce[/postlink]

{{#isPost}}

#### Добавьте взаимодействие с аудиторией на любую страницу
Что если ваша аудитория сможет оставлять комментарии к вашим записям в блоге, задавать вопросы и давать отзывы? Теперь они могут это сделать с FastComments.

#### Пользовательские темы
Чтобы добавить FastComments в блог вашего магазина BigCommerce, вам нужно отредактировать шаблоны вашей темы. Мы проведем вас через этот процесс.

В панели управления BigCommerce перейдите в Storefront -> My Themes.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Ссылка на магазин" title="Ссылка на магазин" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Ссылка на мои темы" title="Ссылка на мои темы" class="lozad" />
</div>

В разделе "Текущая тема" вы увидите выпадающий список с надписью "Расширенные".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Выпадающий список темы" title="Выпадающий список темы" class="lozad" />
</div>

В этом выпадающем списке первый вариант – "Редактировать файлы темы". Если этот вариант недоступен для нажатия, сначала вам нужно будет скопировать тему через "Сделать копию".

Как только вы сможете открыть редактор шаблонов, вы увидите браузер файлов на левой стороне вашего браузера. Это браузер файлов для шаблонов в вашей теме.

Вам нужно перейти к HTML-шаблону, который представляет собой запись блога. Он находится по адресу templates/components/blog/post.html, как показано на 그림:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Расположение файла редактора поста" title="Расположение файла редактора поста" class="lozad" />
</div>

Ваш фрагмент кода FastComments, который вы можете получить <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">здесь</a>, должен быть размещен сразу после строки 48, в которой написано "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Место для вставки FastComments" title="Место для вставки FastComments" class="lozad" />
</div>

#### Не забудьте!
Вам нужно будет добавить домен вашего магазина в FastComments, что вы можете сделать <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">здесь</a>.

#### В заключение
Вот как должны выглядеть FastComments в вашем блоге BigCommerce. Ура!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastComments в блоге BigCommerce" title="FastComments в блоге BigCommerce" class="lozad" />
</div>

{{/isPost}}

---