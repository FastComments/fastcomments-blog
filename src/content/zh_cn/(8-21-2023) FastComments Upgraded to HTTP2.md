---
[category:Performance]
###### [postdate]
# [postlink]FastComments 升级到 HTTP/2[/postlink]

{{#unless isPost}}
我们进行了基础设施升级，使 FastComments 的性能进一步提升！
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

### 有什么新变化

自发布以来，FastComments 一直使用 HTTP/1.1。最近，我们将所有区域的整个基础设施切换到 HTTP/2。

### 影响

此次更新使 FastComments 符合现代标准，同时提供了一些性能提升。缺点是某些较旧的浏览器不再受支持。

### 被弃用的浏览器和客户端

您可以在 [这里找到不受支持的浏览器](https://caniuse.com/http2)。主要的问题是 IE11，它仅部分支持，但这些用户应该转向 Edge。

Chrome、Firefox 等浏览器已经支持 HTTP/2 多年，因此我们认为进行这个更改是安全的。

### 性能优势

在提供的资源及其顺序方面，FastComments 已经相当优化。例如，评论小部件只需几次请求即可加载——首先是初始的 iframe，然后是包含样式的脚本，以减少请求的数量，最后是向 API 发起请求以获取所需的信息。与许多其他服务相比，它相对紧凑。

所以，这不是 HTTP/2 真的能帮助很多的情况。HTTP/2 的主要好处是可以进行并发请求。

然而，HTTP/2 确实有助于我们的压缩！现在头部信息通过二进制协议发送，这更紧凑，而某些资产较多的插件将加载得更快，因为请求可以并行排队。

### 总结

感谢我们的客户在这些变更过程中给予的耐心。我们希望您继续喜爱 FastComments。

干杯！

{{/isPost}}

---