---
[category:Integrations]
###### [postdate]
# [postlink]Incorporando Comentários em um Site GatsbyJS com FastComments[/postlink]

{{#unless isPost}}
Agora você pode usar o FastComments para incorporar comentários em um site feito com Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

#### O que Há de Novo

Recentemente lançamos nosso <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">componente React</a> para FastComments.

Isso abre muitas oportunidades - incluindo a integração do FastComments com Gatsby.

#### Se Você Criou Seu Próprio Wrapper

Se você criou seu próprio wrapper React para FastComments - considere substituí-lo pelo nosso novo. Nós manteremos essa abstração para você - e contém muitas
coisas interessantes como <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">recarregamento automático em mudanças de configuração</a>.

#### Como Funciona

Como o FastComments possui um componente React como wrapper em torno de nosso widget principal - é apenas uma questão de usar nossa biblioteca React para instanciar o widget do lado do cliente.

Apoiamo-nos totalmente nesse componente e o manteremos atualizado.

#### Exemplos?

Começamos a configurar exemplos, que você pode encontrar <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">aqui</a>.

#### Modo Noturno

Um dos exemplos que temos é "modo noturno" - renderizando FastComments em um site com um fundo preto (ou muito escuro): <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Além disso, como o widget responde a mudanças de configuração, isso significa que você pode ter um modo para alternar o tema do seu site e facilmente informar o fastcomments-react para atualizar.

#### Em Conclusão

Esperamos que você ache a integração do FastComments em seu site Gatsby rápida e fácil.

Saudações!

{{/isPost}}

---