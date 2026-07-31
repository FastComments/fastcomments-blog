[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments представља серверско рендеровање[/postlink]

{{#unless isPost}}
Додајте коментаре на ваш сајт без коришћења ЈаваСкрипта.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Овај чланак садржи технички жаргон

## Шта је ново

Од покретања у раним 2020. години, FastComments је искључиво користио ЈаваСкрипт за рендеровање виџета за коментаре.

Шта ако вам кажемо да можете имати готово исту суштинску функционалност, али без коришћења ЈС-а?

<div class="text-center">
    <div class="sm">This is a screenshot, stop trying to click it.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

Горњи снимак екрана је FastComments виџет за коментаре, без ЈаваСкрипта. [Можете видети ову страницу, без ЈаваСкрипта, овде.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Како да га користите

Ако користите WordPress, FastComments додатак верзије 3.10.1 аутоматски дода подршку за SSR као резерву за кориснике који прегледају са онемогућеним ЈС-ом.

За прилагођена решења, преузмите UI за нити коментара, једноставно позовите `/ssr/comments` за ту страницу:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Где је `$urlId` URL или ID странице. Документација за ово је [here](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

На пример, са PHP-ом можемо послати iframe на страницу који рендерује нити коментара унутар:

<div class="code"><div class="title">PHP-Based SSR Example</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Такође можемо направити API позив да добијемо HTML за нити коментара, и рендерујемо, или сачувамо.

Потпуна документација је доступна у [SSR Docs at docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Пошто волимо акрониме који звуче као из предузећа, не брините, SSR подржава SSO. [Пример Single-Sign-On са SSR је овде.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Локализација

SSR-базирани крајњи тачка аутоматски локализује одговор на основу језичких хедерова које шаље прегледач. Такође може користити исте локализационе заменe као ЈаваСкрипт базирани виџет.

## Зашто је ово изграђено

Једна од главних притужби на услуге попут FastComments је што захтевају ЈС. Ми већ правимо наш виџет за коментаре што је могуће танкији, и осигуравамо да испуњавамо SLA за API позиве од < 20мс, али многе мање заједнице неће изабрати такво решење ако то значи додавање ЈС-а на њихов сајт.

Ово такође отвара могућност коришћења рендеринг мотора који немају приступ ЈаваСкрипту.

## Технологија

FastComments користи сопствени мали микрофрејмворк за рендеровање UI-а. Овај фрејмворк користи сличан приступ као React, осим што су ручне DOM манипулације изван почетног рендера дозвољене.

Главна библиотека виџета за коментаре има један улазни тачку – она узима скуп стања и креира резултујући HTML и CSS за рендеровање. Ми једноставно позивамо ово на серверу такође. Када корисник интерагује са страницом, стање се мења и најновији HTML се преузима. Ово је изграђено као резултат хакатона који се одржао као део нове године.

## Живо коментарисање

Пошто UI рендерује сервер, једном, функције живог коментарисања нису доступне.

Такође, обавештајна звоница тренутно није доступна. Бићемо отворени за додавање ове функције у будућности.

## Перформансе

Серверски рендеровани UI користи исте оптимизације складиштења и рендеринг мотор као ЈаваСкрипт базирани виџет. За мале нити коментара, перформансе су заправо боље, јер корисник не мора да преузме скрипту која затим преузима коментаре и рендерује UI.

## Претраживачи и SEO

FastComments већ добро ради са веб претраживачима; ако је SEO брига, коришћење SSR није потребно.

## Будуће примене

Планирамо да у будућности лансирамо решење за Форум. Традиционално, форуми су пагинирани и серверски рендеровани. Савремена решења за Форум се одступају од овог нормала користећи бесконачно скроловање и клијентско рендеровање. Не мислимо да ово мора бити једина опција за коришћење решења трећег лица за Форум.

## У закључку

Надамо се да вам је овај водич био користан и лак за читање. Слободно оставите коментар испод са било каквим питањима.

Поздрав!

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