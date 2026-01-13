---
[category:Integrations]
###### [postdate]
# [postlink]Добавяне на коментари към блог на BigCommerce[/postlink]

{{#isPost}}

#### Добавете ангажираност на аудиторията към всяка страница
Какво ако вашата аудитория може да коментира вашите блог постове, да задава въпроси и да дава обратна връзка? Сега те могат с FastComments.

#### Персонализирани теми
За да добавите FastComments към блога на вашия магазин BigCommerce, ще трябва да редактирате шаблоните на темата си. Ще ви въведем в процеса.

В таблото на BigCommerce отидете на Storefront -> My Themes.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Store Link" title="Store Link" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="My Themes Link" title="My Themes Link" class="lozad" />
</div>

Под "Current Theme" ще видите падащо меню с етикет "Advanced".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Theme Advanced Dropdown" title="Theme Advanced Dropdown" class="lozad" />
</div>

В това падащо меню първата опция е "Edit Theme Files". Ако тази опция не е кликаема, първо ще трябва да копирате темата чрез "Make a Copy".

След като можете да отворите редактора на шаблони, ще видите браузър за файлове от лявата страна на браузъра си. Това е браузър за файлове за шаблоните в темата ви.

Ще искате да навигирате до HTML шаблона, който представлява пост в блога. Той е на templates/components/blog/post.html, както е показано:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Editor Post File Location" title="Editor Post File Location" class="lozad" />
</div>

Вашият кодов фрагмент за FastComments, който можете да получите от <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">тук</a>, трябва да бъде поставен точно след линия 48, която съдържа текста "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Place to insert FastComments" title="Place to insert FastComments" class="lozad" />
</div>

#### Запомнете!
Ще трябва да добавите домейна на вашия магазин към FastComments, което можете да направите <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">тук</a>.

#### В заключение
Ето как трябва да изглеждат FastComments на вашия блог в BigCommerce. Наздраве!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence on a BigCommerce Blog" title="FastCommence on a BigCommerce Blog" class="lozad" />
</div>

{{/isPost}}

---