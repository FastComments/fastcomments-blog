---
[category:Integrations]
###### [postdate]
# [postlink]Вграждане на коментари в сайт на GatsbyJS с FastComments[/postlink]

{{#unless isPost}}
Сега можете да използвате FastComments, за да вградите коментари в сайт, създаден с Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Тази статия съдържа технически термини

#### Какво ново

Наскоро стартирахме нашия <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React компонент</a> за FastComments.

Това отваря много възможности - включително интегриране на FastComments с Gatsby.

#### Ако сте написали свой собствен обвивка

Ако сте написали своя собствена React обвивка за FastComments - помислете за замяната й с нашата нова. Ние ще поддържаме тази абстракция за вас - и тя съдържа много
интересни неща като <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">автоматично презареждане при промени в конфигурацията</a>.

#### Как работи

Тъй като FastComments има React компонент като обвивка около нашия основен уиджет - просто е въпрос на използване на нашата React библиотека, за да инстанцирате уиджета от клиентска страна.

Ние напълно поддържаме този компонент и ще го актуализираме.

#### Примери?

Започнахме да настройваме примери, които можете да намерите <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">тук</a>.

#### Нощен режим

Един от примерите, които имаме, е "нощен режим" - рендериране на FastComments на сайт с черен (или много тъмен) фон: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Освен това, тъй като уиджетът реагира на промени в конфигурацията, това означава, че можете да имате режим за превключване на темата на вашия сайт и лесно да инструктирате fastcomments-react да се актуализира.

#### В заключение

Надяваме се да намерите интегрирането на FastComments в сайта си на Gatsby бързо и лесно.

Наздраве!

{{/isPost}}