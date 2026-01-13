---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Lança Renderização do Lado do Servidor[/postlink]

{{#unless isPost}}
Adicione comentários ao seu site sem usar JavaScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

## O Que Há de Novo

Desde o lançamento no início de 2020, o FastComments tem usado exclusivamente JavaScript para renderizar o widget de comentários.

E se dissemos que você poderia ter quase toda a mesma funcionalidade essencial, mas sem usar JS?

<div class="text-center">
    <div class="sm">Esta é uma captura de tela, pare de tentar clicar nela.</div>
    <img src="images/ssr-demo.png" alt="Demonstração SSR" title="Demonstração SSR" />
</div>

A captura de tela acima é o widget de comentários do FastComments, sem JavaScript. [Você pode visualizar esta página, sem JavaScript, aqui.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Como Usar

Se você estiver usando WordPress, a versão 3.10.1 do plugin FastComments adiciona automaticamente suporte para SSR como uma alternativa para os usuários que navegam com JS desativado.

Para implementações personalizadas, recupere a interface para um thread de comentários, simplesmente chame o `/ssr/comments` para essa página:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Onde `$urlId` é a url, ou id, da página. A documentação sobre isso está [aqui](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Por exemplo, com PHP, podemos enviar um iframe para a página que renderiza o thread de comentários dentro:

<div class="code"><div class="title">Exemplo de SSR Baseado em PHP</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"meu-id-de-locação"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"meu-id-url-artigo"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"minha-url-página"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"não"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"verdadeiro"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Também poderíamos fazer uma chamada à API para obter o HTML para um thread de comentários, e renderizá-lo, ou armazená-lo.

A documentação completa está disponível nos [Docs do SSR em docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Porque amamos siglas que soam empresariais, não se preocupe, o SSR suporta SSO. [Um exemplo de Single-Sign-On com SSR está aqui.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Localização

O endpoint baseado em SSR localiza automaticamente a resposta com base nos cabeçalhos de idioma que o navegador envia. Ele também pode usar as mesmas
substituições de localização que o widget baseado em JavaScript.

## Por Que Isso Foi Construído

Uma das principais reclamações sobre serviços como o FastComments é que eles requerem JS. Nós já fazemos nosso widget de comentários o mais leve possível e garantimos que atendemos
nossas SLAs de chamada de API de < 20ms, mas muitas comunidades menores não optarão por tal solução se isso significar adicionar JS ao seu site.

Isso também abre a oportunidade de usar mecanismos de renderização que não têm acesso ao JavaScript.

## A Tecnologia

O FastComments usa seu próprio pequeno microframework para renderizar a interface. Este framework usa uma abordagem semelhante ao React, exceto que manipulações manuais do DOM
fora da renderização inicial são permitidas.

A biblioteca central do widget de comentários tem um único ponto de entrada - ela leva um conjunto de estado e cria o HTML e CSS resultantes a serem renderizados. Chamamos isso no
servidor também. Quando o usuário interage com a página, o estado é alterado e o HTML mais recente é recuperado. Isso foi criado como resultado de um hackathon que ocorreu como parte do ano novo.

## Comentários Ao Vivo

Como a interface é renderizada pelo servidor, uma vez, os recursos de comentários ao vivo não estão disponíveis.

Além disso, o sino de notificações não está atualmente disponível. Estaremos abertos a adicionar esse recurso no futuro.

## Desempenho

A interface renderizada pelo servidor usa as mesmas otimizações de armazenamento e o mecanismo de renderização que o widget baseado em JavaScript. Para threads de comentários pequenas, o desempenho
é na verdade melhor, já que o usuário não precisa baixar um script que então busca os comentários e renderiza a interface.

## Crawlers e SEO

O FastComments já funciona bem com crawlers da web; se SEO é uma preocupação, usar SSR não é obrigatório.

## Aplicações Futuras

Planejamos lançar uma solução de Fórum no futuro. Tradicionalmente, fóruns são paginados e renderizados do lado do servidor. Soluções modernas de Fórum se afastam dessa
norma ao usar rolagem infinita e renderização do lado do cliente. Não achamos que essa deva ser a única opção para usar uma solução de Fórum de terceiros.

## Conclusão

Esperamos que você tenha achado este guia útil e fácil de ler. Sinta-se à vontade para comentar abaixo com qualquer pergunta.

Saudações!

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