---
[category:Integrations]
###### [postdate]
# [postlink]Встраивание комментариев на сайте GatsbyJS с использованием FastComments[/postlink]

{{#unless isPost}}
Теперь вы можете использовать FastComments для встраивания комментариев на сайте, созданном с помощью Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> В этой статье содержится техническая терминология

#### Что нового

Мы недавно запустили наш <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React компонент</a> для FastComments.

Это открывает множество возможностей, включая интеграцию FastComments с Gatsby.

#### Если вы написали свой собственный обертку

Если вы написали свою собственную React-обертку для FastComments, подумайте о том, чтобы заменить ее на нашу новую. Мы будем поддерживать эту абстракцию для вас, и она содержит много 
удобных функций, таких как <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">автоперезагрузка при изменениях конфигурации</a>.

#### Как это работает

Поскольку FastComments имеет компонент React в качестве обертки вокруг нашего основного виджета, просто нужно использовать нашу React-библиотеку для создания виджета на стороне клиента.

Мы полностью поддерживаем этот компонент и будем его обновлять.

#### Примеры?

Мы начали настраивать примеры, которые вы можете найти <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">здесь</a>.

#### Ночной режим

Один из примеров, который у нас есть, это "ночной режим" - рендеринг FastComments на сайте с черным (или очень темным) фоном: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Кроме того, поскольку виджет реагирует на изменения конфигурации, это означает, что вы можете иметь режим для переключения темы вашего сайта и легко сказать fastcomments-react обновиться.

#### В заключение

Мы надеемся, что интеграция FastComments в ваш сайт Gatsby будет быстрой и легкой.

Удачи!

{{/isPost}}