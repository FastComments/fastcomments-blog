---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Releases Server-Side Rendering[/postlink]

{{#unless isPost}}
Добавете коментари на сайта си без използване на JavaScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Тази статия съдържа техническа терминология

## Какво ново

От старта си в началото на 2020 г. FastComments използва изключително JavaScript за рендиране на виджета за коментари.

Какво ще стане, ако ви кажем, че можете да имате почти всички съществени функции, но без използване на JS?

<div class="text-center">
    <div class="sm">Това е снимка на екрана, спрете да се опитвате да я кликнете.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

Горната снимка на екрана показва виджета за коментари на FastComments, без JavaScript. [Можете да видите тази страница, без JavaScript, тук.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Как да го използвате

Ако използвате WordPress, версия 3.10.1 на плъгина FastComments автоматично добавя поддръжка за SSR като резервен вариант за потребители, които разглеждат с деактивиран JS.

За кастомни реализации, изтеглете UI за коментарен поток, като просто извикате `/ssr/comments` за тази страница:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Където `$urlId` е URL адресът или ID на страницата. Документацията за това е [тук](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Например, с PHP можем да изпратим iframe на страницата, която рендира коментарния поток вътре:

<div class="code"><div class="title">PHP-базиран пример за SSR</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Можем също да направим API повикване, за да получим HTML за коментарен поток и да го рендираме или съхраним.

Пълната документация е налична в [SSR документацията на docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Тъй като обичаме акроними, звучащи корпоративно, не се притеснявайте, SSR поддържа SSO. [Пример за Single-Sign-On с SSR е тук.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Локализация

SSR-базираната крайна точка автоматично локализира отговора на базата на заглавките на езика, които браузърът изпраща. Тя може също да използва същите локализационни
надстройки като JavaScript-базирания виджет.

## Защо беше изградена

Едно от основните оплаквания относно услуги като FastComments е, че изискват JS. Вече правим нашия виджет за коментари колкото се може по-лек и се уверяваме, че спазваме
нашите SLA за API повиквания под 20ms, но много по-малки общности няма да изберат такова решение, ако това означава добавяне на JS на сайта им.

Това също отваря възможност за използване на рендериращи двигатели, които нямат достъп до JavaScript.

## Технологията

FastComments използва собствен малък микрорамка за рендиране на потребителския интерфейс. Тази рамка използва подобен подход на React, с изключение на това, че ръчните манипулации на DOM 
извън първоначалното рендиране са разрешени.

Основната библиотека на виджета за коментари има една единствена входна точка - тя взема набор от състояния и създава произтичащото HTML и CSS, което да бъде рендерирано. Ние просто извикваме това и на
сървъра. Когато потребителят взаимодейства със страницата, състоянието се променя и последното HTML се изтегля. Това беше изградена в резултат на хакатон, който се проведе като част от новогодишните празненства.

## Живо коментиране

Тъй като UI се рендира от сървъра, един единствен път, функциите за живо коментиране не са налични.

Освен това, звънецът за известия в момента не е наличен. Ние ще сме отворени за добавяне на тази функция в бъдеще.

## Производителност

Рендираният от сървъра интерфейс използва същите оптимизации за съхранение и рендериращ двигател като JavaScript-базирания виджет. За малки коментарни потоци, производителността
всъщност е по-добра, тъй като потребителят не трябва да изтегля скрипт, който след това извършва извикване на коментари и рендира интерфейса.

## Механизми за обхождане и SEO

FastComments вече работи добре с мрежовите механизми за обхождане; ако SEO е важен, използването на SSR не е задължително.

## Бъдещи приложения

Планираме да пуснем решение за форум в бъдеще. Традиционно форумите са страницирани и рендирани от сървъра. Съвременните форумни решения се отклоняват от тази
норма, използвайки безкрайно превъртане и рендиране от клиентската страна. Не мислим, че това трябва да е единствената опция за използване на решение за форум от трета страна.

## В заключение

Надяваме се, че това ръководство е било полезно и лесно за четене. Не се колебайте да коментирате по-долу с всякакви въпроси.

Наздраве!

<style>/*

Monokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/

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