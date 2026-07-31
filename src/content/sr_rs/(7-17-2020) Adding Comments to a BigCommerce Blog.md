[category:Integrations]
###### [postdate]
# [postlink]Додавање коментара на BigCommerce блог[/postlink]

{{#isPost}}

#### Додајте ангажовање публике на сваку страницу
Шта ако ваша публика може да коментарише ваше блог постове, поставља питања и даје повратне информације? Сада то могу са FastComments.

#### Прилагођене теме
Да бисте додали FastComments у блог вашег BigCommerce продавнице, мораћете да уређујете шаблоне теме. Проведићемо вас кроз процес.

У BigCommerce контролној табли иди на Storefront -> My Themes.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Store Link" title="Store Link" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="My Themes Link" title="My Themes Link" class="lozad" />
</div>

Под „Current Theme“ видећете падајући мени са ознаком „Advanced“.

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Theme Advanced Dropdown" title="Theme Advanced Dropdown" class="lozad" />
</div>

У овом падајућем менију прва опција је „Edit Theme Files“. Ако ова опција није кликљива, прво ћете морати да копирате тему помоћу „Make a Copy“.

Када можете отворити уређивач шаблона, видећете прегледач датотека на левој страни вашег прегледача. Ово је прегледач датотека за шаблоне у вашој теми.

Треба да се крећете до HTML шаблона који представља блог пост. Нађите га у templates/components/blog/post.html, као што је илустровано:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Editor Post File Location" title="Editor Post File Location" class="lozad" />
</div>

Ваш FastComments код снипет, који можете добити <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">овде</a>, треба да налепите одмах после линије 48, која садржи текст "{{>components/common/share}}".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Place to insert FastComments" title="Place to insert FastComments" class="lozad" />
</div>

#### Запамтите!
Мораћете да додате домен ваше продавнице у FastComments, што можете урадити <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">овде</a>.

#### У закључку
Ево како FastComments треба да изгледа на вашем BigCommerce блогу. Живели!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence on a BigCommerce Blog" title="FastCommence on a BigCommerce Blog" class="lozad" />
</div>

{{/isPost}}