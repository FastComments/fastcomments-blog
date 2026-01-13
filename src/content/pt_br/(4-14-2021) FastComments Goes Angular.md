---
[category:API & Development]

###### [postdate]
# [postlink]FastComments Agora Utiliza Angular[/postlink]

{{#unless isPost}}
Precisa incorporar comentários em uma aplicação desenvolvida com Angular? Nós temos a solução.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargões Técnicos

#### Novidades

O FastComments agora tem um componente Angular que está em paridade de recursos com nosso widget VanillaJS.

Decidimos chamar a biblioteca de ngx-fastcomments. Você pode encontrar o repositório no GitHub com o código-fonte <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">aqui</a>.

O repositório também contém exemplos de uso do widget na forma de um workspace Angular.

Você pode encontrá-lo no NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">aqui</a>.

#### Como Funciona

A maneira como esse novo componente funciona é que o componente Angular é um invólucro em torno do widget FastComments existente.

Isso significa que se adicionarmos recursos aos nossos componentes existentes ou corrigirmos bugs, você ainda se beneficiará imediatamente!

#### Por Que O Novo Componente?

Escrevemos o widget FastComments VanillaJS para ser o núcleo do nosso negócio (junto com o backend principal). Isso significa que o projetamos para ser estendido exatamente como estamos fazendo agora.

Embora sem esta nova biblioteca Angular, você poderia ter integrado o FastComments em sua aplicação escrevendo sua própria biblioteca, isso teria sido um grande obstáculo para a adoção. Ao suportarmos Angular diretamente, tornamos a adoção do FastComments muito mais fácil para esse tipo de cliente.

#### Aplicações de Página Única?

O FastComments suporta SPAs em seu núcleo. O componente monitora mudanças no objeto de configuração usando detecção de alterações. Por exemplo, se você atualizar a página atual (chamada urlId), o widget será re-renderizado. Isso torna casos de uso como alternar o modo escuro ou adicionar paginação fáceis de implementar.

#### O Que Muda Para Clientes Existentes

Nada muda para clientes existentes - e não há **nada** de errado em usar a versão VanillaJS do FastComments para novos projetos. O ngx-fastcomments depende da versão VanillaJS do FastComments e sempre dependerá. Se lançarmos novos componentes, seguiremos o mesmo modelo.

Nosso widget VanillaJS é um cidadão de primeira classe do FastComments. Este lançamento é completamente *aditivo* à nossa infraestrutura.

Além disso, o widget VanillaJS ainda permanece uma ótima solução para incorporar comentários em qualquer página da web que não esteja usando um framework, como uma página estática.

#### Em Conclusão

Ao lançar a biblioteca ngx-fastcomments e bibliotecas futuras, esperamos poder facilitar para os desenvolvedores adotarem o FastComments enquanto utilizam metodologias de desenvolvimento modernas. 

Saudações!

{{/isPost}}

---