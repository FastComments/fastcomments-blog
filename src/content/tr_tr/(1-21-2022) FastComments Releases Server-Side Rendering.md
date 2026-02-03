---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Sunucu Tarafı Render'ı Yayınladı[/postlink]

{{#unless isPost}}
JavaScript kullanmadan sitenize yorum ekleyin.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçeriyor

## Yenilikler

2020'nin başından bu yana FastComments, yorum widget'ını render etmek için yalnızca JavaScript kullanmaktadır.

Ya size hemen hemen tüm temel işlevleri, ancak JS kullanmadan elde edebileceğinizi söylesek?

<div class="text-center">
    <div class="sm">Bu bir ekran görüntüsü, üzerine tıklama çabalarınızı bırakın.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

Yukarıdaki ekran görüntüsü, JavaScript olmadan FastComments yorum widget'ıdır. [Bu sayfayı, JavaScript olmadan buradan görüntüleyebilirsiniz.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Nasıl Kullanılır

Eğer WordPress kullanıyorsanız, FastComments eklenti sürümü 3.10.1, JS devre dışı bırakılmış kullanıcılar için SSR desteğini otomatik olarak ekler.

Özel uygulamalar için, bir yorum dizisinin UI'sını almak için bu sayfanın `/ssr/comments` çağrısını basitçe yapın:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Burada `$urlId`, sayfanın url'si veya kimliğidir. Bununla ilgili dökümantasyon [burada](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Örneğin, PHP ile içindeki yorum dizisini render eden bir iframe sayfaya gönderebiliriz:

<div class="code"><div class="title">PHP Tabanlı SSR Örneği</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Ayrıca bir yorum dizisi için HTML almak üzere bir API çağrısı yapabilir ve onu render edebilir veya depolayabilirsiniz.

Tam dökümantasyon [SSR Dokümanları'nda docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html) mevcuttur.

## SSO

Kurumsal görünümlü kısaltmaları sevdiğimiz için, endişelenmeyin, SSR SSO'yu destekliyor. [SSR ile Tekli Giriş örneği buradadır.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Yerelleştirme

SSR tabanlı uç noktası, tarayıcının gönderdiği dil ile ilgili başlıklar temelinde cevabı otomatik olarak yerelleştirir. Ayrıca, JavaScript tabanlı widget ile aynı yerelleştirme geçersiz kılmalarını da kullanabilir.

## Neden Bu Oluşturuldu

FastComments gibi hizmetlerle ilgili en büyük şikayetlerden biri, JS gerektirmeleridir. Yorum widget'ımızı mümkün olduğunca hafif tutuyoruz ve API çağrısı SLA'larımızı < 20ms olarak karşılamak için çalışıyoruz, ancak birçok küçük topluluk, sitelerine JS eklemenin anlamına geldiği bir çözümü kabul etmeyecek.

Bu, JavaScript'e erişimi olmayan render motorlarını kullanma fırsatını da açar.

## Teknoloji

FastComments, UI'yı render etmek için kendi küçük mikro frameworkünü kullanır. Bu framework, React'a benzer bir yaklaşım kullanır, ancak başlangıç render'ı dışında manuel DOM manipülasyonlarına izin verilir.

Ana yorum widget kütüphanesinin tek bir giriş noktası vardır - bir dizi durumu alır ve sonuçta render edilecek HTML ve CSS oluşturarak çalışır. Bunu sunucuda da basitçe çağırırız. Kullanıcı sayfa ile etkileşimde bulunduğunda, durum değiştirilir ve en son HTML çekilir. Bu, yeni yılın bir parçası olarak gerçekleşen bir hackathonun sonucunda oluşturuldu.

## Canlı Yorumlama

UI sunucu tarafından bir kez render edildiğinden, canlı yorumlama özellikleri mevcut değildir.

Ayrıca, bildirim çanı şu anda mevcut değil. Bu özelliği gelecekte eklemeye açık olacağız.

## Performans

Sunucu tarafından render edilen UI, JavaScript tabanlı widget ile aynı depolama optimizasyonlarını ve render motorunu kullanır. Küçük yorum dizileri için, performans aslında daha iyidir, çünkü kullanıcı, ardından yorumları alıp UI'ı render eden bir script indirmek zorunda kalmaz.

## Tarayıcılar ve SEO

FastComments zaten web tarayıcıları ile iyi çalışmaktadır; eğer SEO bir endişe ise, SSR kullanımı gerekmemektedir.

## Gelecek Uygulamaları

Gelecekte bir Forum çözümü sunmayı planlıyoruz. Geleneksel olarak, forumlar sayfalandırılır ve sunucu tarafından render edilir. Modern Forum çözümleri bu normdan, sonsuz kaydırma ve istemci tarafı render'ı kullanarak uzaklaşmaktadır. Bunun, üçüncü taraf bir Forum çözümünü kullanmanın tek seçeneği olması gerektiğini düşünmüyoruz.

## Sonuç Olarak

Umarız bu kılavuzu faydalı ve okunması kolay bulmuşsunuzdur. Herhangi bir sorunuz varsa alttaki yorum kısmında bize ulaşmaktan çekinmeyin.

Şerefe!

<style>/*

Monokai Sublime stili. Monokai'den türetilmiştir, noformnocontent http://nn.mit-license.org/

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