---
[category:API & Development]
###### [postdate]
# [postlink]Usando o FastComments em Aplicações de Página Única VanillaJS[/postlink]

{{#unless isPost}}
Embora tenhamos componentes dedicados para React e VueJS, o widget vanilla também pode ser usado em aplicações de página única.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

#### Público-Alvo

Este artigo é direcionado a desenvolvedores.

#### Introdução

A maioria dos exemplos de uso do widget FastComments VanillaJS é um trecho de código muito simples que carrega o thread de comentários para a URL da página atual. Isso ocorre porque
este é o caso de uso para a grande maioria de nossos clientes, mas recentemente vimos um influxo de desenvolvedores construindo SPAs e usando o FastComments.

Primeiro, tenha em mente que o FastComments tem componentes dedicados para <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> e <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a>, então confira esses
se você estiver usando essas bibliotecas para não precisar construir seu próprio wrapper ao redor do FastComments.

Se você estiver construindo sua aplicação usando VanillaJS, você pode instanciar e atualizar o widget de comentários dinamicamente.

#### Primeiro, a URL e o ID da URL

O FastComments tem dois identificadores para a página ou artigo que o thread de comentários está vinculado. No objeto de configuração, eles são as propriedades "url" e "urlId".

A URL é o link para o widget de comentários. Idealmente, você deve ser capaz de visitar essa URL de fora da sua aplicação. Ela será exposta como um link em e-mails de notificação e em
ferramentas administrativas.

O ID da URL é uma string que pode ser uma URL ou um ID - pode ser qualquer valor, desde que represente a página atual. Se você tiver um post, artigo ou id da página, pode usar isso
em vez da URL da página para este valor. A razão pela qual o ID da URL é separado é que você pode querer armazenar informações extras na URL que tornariam a URL não única para a página.

Note que documentamos a configuração completa que o widget suporta em TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">no GitHub</a>.

#### Especificidades e uma Demonstração Real

Quando o widget é instanciado, capture o resultado da função FastCommentsUI que você normalmente chamaria:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Então, você pode invocar um método "update" no objeto de instância para atualizar a configuração. Isso irá atualizar o componente:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Você pode ver um exemplo funcional <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">neste fiddle</a>.

Note que neste exemplo usamos document.getElementById, mas você pode usar qualquer mecanismo que desejar para buscar o elemento-alvo.

#### Armadilhas

Embora atualizar apenas "urlId" funcione, você deve atualizar tanto "urlId" quanto "url", mesmo que sejam os mesmos, para que os links em e-mails de notificação e
as ferramentas de moderação funcionem. Atualizar apenas o "url" não funcionará - os comentários estão vinculados ao "urlId".

#### Conclusão

Esperamos que você tenha achado este guia útil. Fique à vontade para comentar abaixo com qualquer dúvida.

Saudações!

{{/isPost}}

---