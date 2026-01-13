---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Incorporando Comentários em um site VueJS com FastComments[/postlink]

{{#unless isPost}}
Precisa incorporar comentários em uma aplicação desenvolvida com Vue? Nós temos a solução.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

#### Novidades

O FastComments agora possui um componente Vue que está em paridade de recursos com nosso widget VanillaJS.

Decidimos chamar a biblioteca de fastcomments-vue. Você pode encontrar o repositório do GitHub com o código-fonte <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">aqui</a>.

O repositório também contém exemplos de uso do widget.

Está no NPM, que você pode encontrar <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">aqui</a>.

#### Como Funciona

A forma como este novo componente funciona é que o componente Vue é um envoltório em torno do widget FastComments existente.

Isso significa que se adicionarmos recursos aos nossos componentes existentes ou corrigirmos bugs, você ainda se beneficiará imediatamente!

#### Por Que o Novo Componente?

Escrevemos o widget FastComments VanillaJS para ser o núcleo do nosso negócio (junto com o backend principal). Isso significa que o projetamos para ser expandido da mesma forma que estamos fazendo agora.

Embora sem esta nova biblioteca Vue, você pudesse ter integrado o FastComments em sua aplicação escrevendo sua própria biblioteca, isso teria sido um grande obstáculo à adoção. Ao suportar
o Vue diretamente, facilitamos a adoção do FastComments para esses tipos de clientes.

#### Vue 3.0

Temos um componente construído especificamente para o Vue 3.0 chamado <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Aplicações de Página Única?

O FastComments suporta SPAs em seu núcleo. O componente monitora mudanças no objeto de configuração - então, se você atualizar a página atual (chamada urlId), o widget
será re-renderizado.

#### O Que Muda para Clientes Existentes

Nada muda para os clientes existentes - e **não há nada** de errado em usar a versão VanillaJS do FastComments para novos projetos. fastcomments-vue depende da versão VanillaJS
do FastComments e sempre o fará. Se lançarmos componentes Angular ou Vue, seguiremos o mesmo modelo.

Nosso widget VanillaJS é um cidadão de primeira classe do FastComments. Este lançamento é completamente *aditivo* à nossa infraestrutura.

Além disso, o widget VanillaJS ainda permanece uma ótima solução para incorporar comentários em qualquer página da web que não esteja usando um framework, como uma página estática.

#### Em Conclusão

Ao lançar a biblioteca fastcomments-vue e futuras bibliotecas, esperamos que possamos facilitar para os desenvolvedores adotarem o FastComments enquanto utilizam metodologias de desenvolvimento modernas.

Saudações!

{{/isPost}}