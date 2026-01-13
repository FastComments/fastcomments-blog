---
[category:Features]

###### [postdate]
# [postlink]Suporte Fácil a Snippets de Código com FastComments[/postlink]

Alguns de nossos clientes possuem sites e blogs relacionados a desenvolvimento de software. Nestas comunidades, é comum compartilhar snippets de código. Aqui está como o FastComments torna isso fácil.

{{#isPost}}

O FastComments permite compartilhar código simplesmente colando-o na caixa de comentários. Ele pode ser misturado com outro texto e imagens, e não exige que você adicione manualmente qualquer tipo de tags de "código" para adicionar a formatação. Basta colar!

Aqui está uma demonstração rápida mostrando isso em ação.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Demonstração de Compartilhamento de Snippet de Código" title="Demonstração de Compartilhamento de Snippet de Código"></video>

### Implicações de Desempenho

Adicionar este recurso acrescentou apenas ~150 bytes ao widget do lado do cliente, já que a maior parte da funcionalidade é tratada do lado do servidor. Na verdade, se você agrupar isso com os recentes recursos de Markdown adicionados, o tamanho do widget na verdade diminuiu com essas recentes funcionalidades!

### Coisas a Observar

Se você tiver uma comunidade que compartilha muito código, deve considerar aumentar o tamanho máximo do comentário para facilitar o compartilhamento de snippets de código. Isso é feito através da aba "Personalizar" do painel administrativo.

### Detecção de Código

Para manter o tamanho do widget do lado do cliente reduzido, só detectaremos automaticamente código colado para linguagens como C e Python (Java, JavaScript, CSS, C++, por exemplo) que utilizem "{" ou espaços para controle de fluxo. Se você estiver utilizando comumente uma linguagem que não está sendo detectada automaticamente, entre em contato conosco.

Para inserir manualmente um bloco de código, escreva um comentário como: ```<code>(defun someLispCode(1, 2, 3))</code>```. Podemos detectar automaticamente cerca de 150 linguagens.

### Migrando Comentários Existentes

Se você gostaria de migrar para o FastComments e tem muitos comentários com snippets de código que gostaria que fossem formatados corretamente, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">podemos ajudar</a>.

### Em Conclusão

É isso! Implementamos isso em todas as comunidades online no FastComments.

Comentários felizes!

{{/isPost}}