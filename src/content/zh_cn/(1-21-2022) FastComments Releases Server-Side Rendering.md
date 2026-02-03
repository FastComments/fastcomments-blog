---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments发布服务器端渲染[/postlink]

{{#unless isPost}}
在您的网站上添加评论功能，而无需使用JavaScript。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含专业术语

## 新鲜事

自2020年初发布以来，FastComments一直使用JavaScript来渲染评论小部件。

如果我们告诉您，可以在不使用JS的情况下获得几乎所有相同的基本功能，您会怎么想？

<div class="text-center">
    <div class="sm">这是一张截图，别试图点击它。</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

上面的截图是FastComments评论小部件，无需JavaScript。 [您可以在此查看此页面，无需JavaScript。](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## 如何使用

如果您使用的是WordPress，FastComments插件版本3.10.1会自动为您的用户添加SSR支持，以防他们禁用JS。

对于自定义实现，获取评论线程的用户界面，只需调用该页面的`/ssr/comments`：

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

其中`$urlId`是页面的url或id。相关文档在[这里](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id)。

例如，使用PHP，我们可以向页面发送一个iframe，以在其中渲染评论线程：

<div class="code"><div class="title">PHP示例的SSR</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

我们还可以调用API获取评论线程的HTML，然后渲染或存储它。

完整文档可在[SSR文档网上查阅](https://docs.fastcomments.com/guide-ssr.html)。

## SSO

因为我们喜欢听起来像企业的缩写，不用担心，SSR支持SSO。[使用SSR的单点登录示例在这里。](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## 本地化

基于SSR的端点会根据浏览器发送的语言相关头自动本地化响应。它还可以使用与基于JavaScript的小部件相同的本地化覆盖。

## 为什么要构建这个

关于像FastComments这样的服务，主要的抱怨之一是它们需要JS。我们已经尽可能使我们的评论小部件精简，并确保满足我们的API调用SLA，即< 20ms，但许多较小的社区如果这意味着要在其网站上添加JS，就不会选择这样的解决方案。

这也为使用没有JavaScript访问权限的渲染引擎打开了机会。

## 技术

FastComments使用自己的小型微框架来渲染用户界面。该框架采用与React类似的方法，只是允许在初始渲染之外进行手动DOM操作。

核心评论小部件库有一个单一入口点 - 它使用一组状态并创建生成的HTML和CSS以进行渲染。我们也在服务器上简单调用它。当用户与页面交互时，状态就会改变，最新的HTML会被获取。这是由于新年期间举行的黑客马拉松的结果而构建的。

## 实时评论

由于用户界面是一次性由服务器呈现的，因此实时评论功能不可用。

此外，通知铃现在不可用。我们将在未来考虑添加此功能。

## 性能

服务器渲染的用户界面使用与基于JavaScript的小部件相同的存储优化和渲染引擎。对于小的评论线程，性能实际上更好，因为用户不必下载一个脚本来获取评论并渲染用户界面。

## 网络爬虫和SEO

FastComments已经与网络爬虫良好兼容；如果SEO是一个问题，使用SSR并非必需。

## 未来应用

我们计划在未来推出一个论坛解决方案。传统上，论坛是分页的，服务器端渲染的。现代论坛解决方案通过使用无限滚动和客户端渲染来摆脱这种规范。我们不认为这必须是使用第三方论坛解决方案的唯一选择。

## 总结

我们希望您觉得这份指南对您有帮助且易于阅读。如有任何问题，请随时在下方评论。

干杯！

<style>/*

Monokai Sublime风格。衍生自Monokai by noformnocontent http://nn.mit-license.org/

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