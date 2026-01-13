---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Wydaje Renderowanie po Stronie Serwera[/postlink]

{{#unless isPost}}
Dodaj komentarze do swojej witryny bez użycia JavaScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten Artykuł Zawiera Terminologię Techniczną

## Co Nowego

Od uruchomienia na początku 2020 roku, FastComments wykorzystywał wyłącznie JavaScript do renderowania widżetu komentarzy.

Co byś powiedział na to, że możesz mieć prawie wszystkie te same istotne funkcje, ale bez używania JS?

<div class="text-center">
    <div class="sm">To jest zrzut ekranu, przestań starać się go kliknąć.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

Powyższy zrzut ekranu przedstawia widżet komentarzy FastComments, bez JavaScript. [Możesz zobaczyć tę stronę, bez JavaScript, tutaj.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Jak To Użyć

Jeśli używasz WordPressa, wersja wtyczki FastComments 3.10.1 automatycznie dodaje wsparcie dla SSR jako alternatywę dla użytkowników, którzy przeglądają z wyłączonym JS.

Dla niestandardowych implementacji, pobierz UI dla wątku komentarzy, po prostu wywołując `/ssr/comments` dla tej strony:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Gdzie `$urlId` to url lub id strony. Dokumentacja na ten temat jest [tutaj](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Na przykład, w PHP możemy wysłać iframe na stronę, która renderuje wątek komentarzy wewnątrz:

<div class="code"><div class="title">Przykład SSR w PHP</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Możemy także wykonać zapytanie API, aby uzyskać HTML dla wątku komentarzy i go renderować lub przechowywać.

Pełna dokumentacja jest dostępna w [Dokumentacji SSR na docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Ponieważ uwielbiamy brzmienie akronimów związanych z przedsiębiorstwami, nie martw się, SSR wspiera SSO. [Przykład pojedynczego logowania z SSR jest tutaj.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Lokalizacja

Punkt końcowy oparty na SSR automatycznie lokalizuje odpowiedź na podstawie nagłówków związanych z językiem, które wysyła przeglądarka. Może również używać tych samych nadpisów lokalizacyjnych co widżet oparty na JavaScript.

## Dlaczego To Zostało Zbudowane

Jedną z głównych skarg na usługi takie jak FastComments jest to, że wymagają JS. Już teraz staramy się, aby nasz widżet komentarzy był jak najbardziej zredukowany i staramy się spełnić nasze SLA dotyczące wywołań API < 20ms, ale wiele mniejszych społeczności nie wybierze takiego rozwiązania, jeśli oznacza to dodanie JS do ich witryny.

To również otwiera możliwość używania silników renderujących, które nie mają dostępu do JavaScript.

## Technologia

FastComments wykorzystuje własny mały mikroframework do renderowania UI. Ten framework stosuje podobne podejście do React, z tą różnicą, że dozwolone są ręczne manipulacje DOM poza wstępnym renderowaniem.

Podstawowa biblioteka widżetu komentarzy ma jeden punkt wejścia - przyjmuje zestaw stanu i tworzy wynikowy HTML i CSS do renderowania. Po prostu wywołujemy to również na serwerze. Kiedy użytkownik wchodzi w interakcję ze stroną, stan jest zmieniany, a najnowszy HTML jest pobierany. To zostało zbudowane w wyniku hackathonu, który odbył się w ramach noworocznych.

## Live Commenting

Ponieważ UI jest renderowane przez serwer, raz, funkcje komentarzy na żywo nie są obecnie dostępne.

Dodatkowo, dzwonek powiadomień nie jest obecnie dostępny. Będziemy otwarci na dodanie tej funkcji w przyszłości.

## Wydajność

UI renderowane przez serwer wykorzystuje te same optymalizacje pamięci i silnik renderujący, co widżet oparty na JavaScript. Dla małych wątków komentarzy wydajność jest rzeczywiście lepsza, ponieważ użytkownik nie musi pobierać skryptu, który następnie pobiera komentarze i renderuje UI.

## Crawlers and SEO

FastComments już dobrze współpracuje z robotami sieciowymi; jeśli SEO jest dla Ciebie ważne, korzystanie z SSR nie jest wymagane.

## Przyszłe Aplikacje

Planujemy w przyszłości uruchomić rozwiązanie Forum. Tradycyjnie, fora są paginowane i renderowane po stronie serwera. Nowoczesne rozwiązania Forum odstępują od tej normy, wykorzystując nieskończone przewijanie i renderowanie po stronie klienta. Nie sądzimy, że to musi być jedyna opcja korzystania z rozwiązania forum od osoby trzeciej.

## Na Zakończenie

Mamy nadzieję, że uznałeś ten przewodnik za pomocny i łatwy do przeczytania. Nie wahaj się zostawić komentarza poniżej z wszelkimi pytaniami.

Pozdrawiam!

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