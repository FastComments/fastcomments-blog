---
[category:API & Development]
###### [postdate]
# [postlink]FastComments Agora Com React[/postlink]

{{#unless isPost}}
Precisa incorporar comentários em um aplicativo desenvolvido com React? Nós temos a solução.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

#### O Que Há de Novo

O FastComments agora possui um componente React que está em paridade de recursos com nosso widget VanillaJS.

Decidimos chamar a biblioteca de fastcomments-react. Você pode encontrar o repositório do GitHub com o código-fonte <a href="https://github.com/FastComments/fastcomments-react" target="_blank">aqui</a>.

O repositório também contém exemplos de uso do widget.

Está no NPM, que você pode encontrar <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">aqui</a>.

#### Como Funciona

A forma como esse novo componente funciona é que o componente React é uma camada em cima do widget FastComments existente.
 
Isso significa que, se adicionarmos recursos aos nossos componentes existentes ou corrigirmos bugs, você ainda se beneficiará imediatamente!

#### Por Que O Novo Componente?

Escrevemos o widget FastComments VanillaJS para ser o núcleo do nosso negócio (junto com o backend central). Isso significa que o projetamos para ser estendido exatamente da maneira que estamos fazendo agora.

Embora, sem esta nova biblioteca React, você pudesse ter integrado o FastComments em seu aplicativo escrevendo sua própria biblioteca, teria sido um grande obstáculo para a adoção. Ao oferecer suporte
direto ao React, facilitamos a adoção do FastComments para esses tipos de clientes.

#### Aplicações de Página Única?

O FastComments suporta SPAs em sua essência. O componente monitora as alterações no objeto de configuração - então, se você atualizar a página atual (chamada urlId), o widget
será re-renderizado.

#### O Que Muda Para Clientes Existentes

Nada muda para clientes existentes - e não há **nada** errado em usar a versão VanillaJS do FastComments para novos projetos. fastcomments-react depende da versão VanillaJS
do FastComments e sempre dependerá. Se lançarmos componentes Angular ou Vue, seguiremos o mesmo modelo.

Nosso widget VanillaJS é um cidadão de primeira classe do FastComments. Este lançamento é completamente *aditivo* à nossa infraestrutura.

Além disso, o widget VanillaJS ainda continua sendo uma ótima solução para adicionar comentários incorporados em qualquer página web que não esteja usando um framework, como uma página estática.

#### Em Conclusão

Ao lançar a biblioteca fastcomments-react, e bibliotecas futuras, esperamos que possamos facilitar para os desenvolvedores a adoção do FastComments enquanto usam metodologias de desenvolvimento modernas. 

Saudações!

{{/isPost}}

---