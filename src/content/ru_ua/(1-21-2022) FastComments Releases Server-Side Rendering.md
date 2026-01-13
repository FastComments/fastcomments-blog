---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Выпускает Рендеринг на Серверной Стороне[/postlink]

{{#unless isPost}}
Добавьте возможность комментирования на ваш сайт без использования JavaScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> В этой статье есть технический жаргон

## Что нового

С момента запуска в начале 2020 года FastComments использовал исключительно JavaScript для рендеринга виджета комментариев.

Что если мы скажем вам, что вы можете получить почти все те же основные функции, но без использования JS?

<div class="text-center">
    <div class="sm">Это скриншот, не пытайтесь на него нажимать.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

Вышеуказанный скриншот является виджетом комментариев FastComments, без JavaScript. [Вы можете просмотреть эту страницу без JavaScript здесь.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Как это использовать

Если вы используете WordPress, плагин FastComments версии 3.10.1 автоматически добавляет поддержку SSR как резервный вариант для ваших пользователей, которые просматривают с отключенным JS.

Для кастомных реализаций получите UI для потока комментариев, просто вызвав `/ssr/comments` для этой страницы:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Где `$urlId` — это url или id страницы. Документация по этому вопросу находится [здесь](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Например, с помощью PHP мы можем отправить iframe на страницу, которая рендерит поток комментариев внутри:

<div class="code"><div class="title">Пример SSR на базе PHP</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Мы также можем сделать API вызов, чтобы получить HTML для потока комментариев, и отрендерить или сохранить его.

Полная документация доступна в [документации по SSR на docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Поскольку нам нравятся звучащие как предприятия аббревиатуры, не беспокойтесь, SSR поддерживает SSO. [Пример единого входа с SSR здесь.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Локализация

Конечная точка на основе SSR автоматически локализует ответ на основе языковых заголовков, которые отправляет браузер. Она также может использовать те же переопределения локализации, что и виджет на основе JavaScript.

## Зачем это было создано

Одним из основных жалоб на такие сервисы, как FastComments, является то, что они требуют JS. Мы уже сделали наш виджет комментариев максимально легким и гарантируем, что соблюдаем наши SLA для API вызовов менее 20 мс, но многие мелкие сообщества не выберут такое решение, если это означает добавление JS на их сайт.

Это также открывает возможность использовать движки рендеринга, у которых нет доступа к JavaScript.

## Технология

FastComments использует свой собственный небольшой микроframework для рендеринга UI. Этот фреймворк использует подход, похожий на React, за исключением того, что ручные манипуляции DOM вне начального рендеринга разрешены.

Основная библиотека виджета комментариев имеет единую точку входа - она принимает набор состояний и создает соответствующий HTML и CSS для рендеринга. Мы также просто вызываем это на сервере. Когда пользователь взаимодействует со страницей, состояние изменяется, и последний HTML извлекается. Это было создано в результате хакатона, который проходил в рамках нового года.

## Живое комментирование

Поскольку UI рендерится сервером один раз, функции живого комментирования в настоящее время недоступны.

Дополнительно, колокольчик уведомлений в данный момент недоступен. Мы будем открыты к добавлению этой функции в будущем.

## Производительность

Рендеренный сервером UI использует те же оптимизации хранения и движок рендеринга, что и виджет на основе JavaScript. Для небольших потоков комментариев производительность на самом деле лучше, так как пользователю не нужно загружать скрипт, который затем извлекает комментарии и рендерит UI.

## Паук и SEO

FastComments уже хорошо работает с веб-сканерами; если SEO является проблемой, использование SSR не обязательно.

## Будущие приложения

Мы планируем запустить форум в будущем. Традиционно форумы страничные и рендерятся на сервере. Современные решения форумов отходят от этой нормы, используя бесконечный скроллинг и рендеринг на стороне клиента. Мы не считаем, что это единственный вариант использования стороннего решения для форума.

## В заключение

Мы надеемся, что вы нашли это руководство полезным и легким для чтения. Не стесняйтесь комментировать ниже с любыми вопросами.

Удачи!

<style>/*

Monokai Sublime стиль. Разработан на основе Monokai от noformnocontent http://nn.mit-license.org/

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #23241f;
}

.hljs,
.hljs-tag,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2;
}

.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff;
}

.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672;
}

.hljs-symbol,
.hljs-attribute {
  color: #66d9ef;
}

.hljs-params,
.hljs-class .hljs-title {
  color: #f8f8f2;
}

.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}
</style>

{{/isPost}}

---