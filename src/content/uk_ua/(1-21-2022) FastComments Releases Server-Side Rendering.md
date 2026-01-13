---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments випускає серверне рендеринг[/postlink]

{{#unless isPost}}
Додайте коментування на ваш сайт без використання JavaScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> У цій статті міститься технічна термінологія

## Що нового

З моменту запуску на початку 2020 року FastComments виключно використовував JavaScript для рендерингу віджета коментарів.

А що, якби ми сказали вам, що ви можете отримати майже всю ту ж саму основну функціональність, але без використання JS?

<div class="text-center">
    <div class="sm">Це знімок екрану, перестаньте намагатися натискати на нього.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

Вищезазначений знімок екрану – це віджет коментування FastComments без JavaScript. [Ви можете переглянути цю сторінку без JavaScript тут.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Як це використовувати

Якщо ви використовуєте WordPress, версія плагіна FastComments 3.10.1 автоматично додає підтримку SSR як резервний варіант для ваших користувачів, які переглядають з відключеним JS.

Для власних реалізацій отримайте UI для потоку коментарів, просто викликавши `/ssr/comments` для цієї сторінки:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Де `$urlId` – це URL або ID сторінки. Документацію щодо цього можна знайти [тут](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Наприклад, за допомогою PHP ми можемо надіслати iframe на сторінку, яка рендерить потік коментарів всередині:

<div class="code"><div class="title">Приклад SSR на базі PHP</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Ми також можемо зробити API виклик для отримання HTML для потоку коментарів і рендерити або зберігати його.

Повна документація доступна в [SSR Docs на docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Оскільки нам подобаються підприємницькі абревіатури, не хвилюйтеся, SSR підтримує SSO. [Приклад одноразового входу з SSR тут.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Локалізація

Точка входу на основі SSR автоматично локалізує відповідь відповідно до мовних заголовків, які надсилає браузер. Вона також може використовувати ті ж локалізаційні
перевизначення, що й віджет на основі JavaScript.

## Чому це було створено

Однією з основних скарг на сервіси, такі як FastComments, є те, що вони вимагають JS. Ми вже робимо наш віджет коментарів максимально легким і забезпечуємо
дотримання SLAs наших API запитів менше 20 мс, але багато менших спільнот не виберуть таке рішення, якщо це означає додавання JS на їхній сайт.

Це також відкриває можливості для використання рендерингів, які не мають доступу до JavaScript.

## Технологія

FastComments використовує свій власний малий мікрофреймворк для рендерингу UI. Цей фреймворк використовує подібний підхід до React, виключаючи те, що ручні маніпуляції з DOM
поза початковим рендером дозволені.

Основна бібліотека віджета для коментарів має єдину точку входу – вона приймає набір станів і створює результуючий HTML і CSS для рендерингу. Ми просто викликаємо це на
серверах також. Коли користувач взаємодіє зі сторінкою, стан змінюється, і завантажується останній HTML. Це було створено в результаті хакатону, який відбувся в рамках нового року.

## Живе коментування

Оскільки UI рендериться сервером один раз, функції живого коментування наразі недоступні.

Крім того, дзвінок сповіщень наразі недоступний. Ми будемо відкриті до додавання цієї функції в майбутньому.

## Продуктивність

Серверний UI використовує ті ж оптимізації зберігання та рендеринг, що й віджет на основі JavaScript. Для маленьких потоків коментарів продуктивність
насправді краща, оскільки користувач не повинен завантажувати скрипт, який потім отримує коментарі та рендерить UI.

## Crawlers і SEO

FastComments вже добре працює з веб-павуками; якщо SEO є проблемою, використання SSR не є обов'язковим.

## Майбутні застосування

Ми плануємо запустити форум у майбутньому. Традиційно форуми пагінується та рендеряться на стороні сервера. Сучасні рішення для форумів відходять від цього
норму, використовуючи безкінечне прокручування та рендеринг на стороні клієнта. Ми не вважаємо, що це має бути єдиний варіант використання стороннього рішення для форумів.

## На завершення

Сподіваємося, що ви вважаєте цей посібник корисним та легким для читання. Не соромтеся коментувати нижче з будь-якими запитаннями.

На здоров'я!

<style>/*

Monokai Sublime стиль. Походить з Monokai від noformnocontent http://nn.mit-license.org/

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