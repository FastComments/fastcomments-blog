---
[category:Integrations]
###### [postdate]
# [postlink]Встраивание комментариев на сайте GatsbyJS с FastComments[/postlink]

{{#unless isPost}}
Теперь вы можете использовать FastComments для встраивания комментариев на сайт, созданный с помощью Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Эта статья содержит техническую терминологию

#### Что нового

Недавно мы запустили наш <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React компонент</a> для FastComments.

Это открывает множество возможностей, в том числе интеграцию FastComments с Gatsby.

#### Если вы создали свою обертку

Если вы создали свою собственную React обертку для FastComments - подумайте о том, чтобы заменить её нашей новой. Мы будем поддерживать эту абстракцию для вас - и в ней много интересных вещей, таких как <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">автообновление при изменениях конфигурации</a>.

#### Как это работает

Поскольку FastComments имеет компонент React в качестве обертки вокруг нашего основного виджета - просто используйте нашу библиотеку React, чтобы инициализировать виджет на стороне клиента.

Мы полностью поддерживаем этот компонент и будем keeping его обновленным.

#### Примеры?

Мы начали настраивать примеры, которые вы можете найти <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">здесь</a>.

#### Ночной режим

Один из примеров, который у нас есть, - это "ночной режим" - отображение FastComments на сайте с черным (или очень темным) фоном: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Кроме того, поскольку виджет реагирует на изменения конфигурации, это означает, что вы можете иметь режим для переключения темы вашего сайта и легко сказать fastcomments-react обновиться.

#### В заключение

Мы надеемся, что вы найдете интеграцию FastComments в ваш сайт Gatsby быстрой и простой.

Удачи!

{{/isPost}}

---