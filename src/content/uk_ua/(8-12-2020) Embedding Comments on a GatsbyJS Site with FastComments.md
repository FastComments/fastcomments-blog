---
[category:Integrations]
###### [postdate]
# [postlink]Вставка коментарів на сайті GatsbyJS з FastComments[/postlink]

{{#unless isPost}}
Тепер ви можете використовувати FastComments для вбудовування коментарів у сайт, створений за допомогою Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Эта статья содержит технические термины

#### Що нового

Ми нещодавно запустили наш <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React компонент</a> для FastComments.

Це відкриває багато можливостей - зокрема інтеграцію FastComments з Gatsby.

#### Якщо ви написали свій власний обгортку

Якщо ви написали свою власну обгортку React для FastComments - рекомендуємо замінити її на нашу нову. Ми будемо підтримувати цю абстракцію для вас - і вона містить багато
цікавих речей, таких як <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">автооновлення при зміні конфігурації</a>.

#### Як це працює

Оскільки FastComments має React компонент як обгортку навколо нашого основного віджета - це просто питання використання нашої React бібліотеки для створення віджета на стороні клієнта.

Ми повністю підтримуємо цей компонент і будемо його оновлювати.

#### Приклади?

Ми почали налаштовувати приклади, які ви можете знайти <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">тут</a>.

#### Нічний режим

Один з прикладів, які ми маємо - це "нічний режим" - рендеринг FastComments на сайті з чорним (або дуже темним) фоном: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Крім того, оскільки віджет реагує на зміни конфігурації, це означає, що ви можете мати режим для перемикання теми ваших сайтів і легко сказати fastcomments-react оновити.

#### На закінчення

Ми сподіваємося, що інтеграція FastComments у ваш сайт Gatsby буде швидкою та легкою.

На здоров'я!

{{/isPost}}

---