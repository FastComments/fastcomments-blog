---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]Todos os Widgets FastComments Estão Agora Ao Vivo[/postlink]

{{#unless isPost}}
Cada widget FastComments incorporado (contagens de comentários, comentários recentes, páginas em destaque, discussões recentes, resumo de avaliações, curtidas flutuantes) agora é atualizado em tempo real.
{{/unless}}

{{#isPost}}

### O Que Há de Novo

O widget principal de comentários está ao vivo desde o primeiro dia. Os widgets incorporados menores, no entanto, não estavam. Contagens de comentários, widgets de "comentários recentes" ou "páginas em destaque", etc., mostravam alegremente um número que estava desatualizado em até um minuto.

Agora, todos os widgets que a FastComments envia assinam atualizações ao vivo e se atualizam imediatamente :) Isso inclui os resumos de avaliações também!

### Quais Widgets

Todos eles. Concretamente:

- `FastCommentsCommentCount` - a contagem de comentários por página
- `FastCommentsCommentCountBulk` - a versão em massa que atualiza muitas contagens em uma página de lista/arquivo
- `FastCommentsRecentComments` e `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` e `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` (o distintivo flutuante de contagem de comentários)
- `FastCommentsEmbedPageLikesFloating` (as curtidas flutuantes + contagem de comentários)

### O Que Você Precisa Fazer

Nada. Se você já tem algum desses incorporados, atualize a página uma vez. Na próxima vez que um comentário for postado, editado, excluído, ou alguém reagir a uma página, o widget será atualizado.

A antiga configuração `isLive: true` nos widgets de contagem de comentários agora é redundante - os widgets estão sempre ao vivo.

Se você carregar o JS do widget do nosso CDN, você tem a nova versão, incluindo se você usar uma das nossas bibliotecas wrapper (React, Vue, etc).

### Curtidas Também Estão Ao Vivo

O widget de curtidas flutuantes também responde a eventos de curtidas e reações agora. Clique no coração em uma página e outras abas abertas veem a contagem mudar.

### Como Funciona

Cada widget abre uma única conexão WebSocket. Widgets que mostram dados para uma página específica (`comment-count` (incluindo em massa), `reviews-summary`, `embed-page-likes-floating`) assinam o fluxo de eventos daquela página. Widgets que mostram dados que abrangem um inquilino (`recent-comments`, `top-pages`, `recent-discussions`) assinam um fluxo de pulso por inquilino que dispara um sinal sempre que algo nesse inquilino muda.

O resultado é que um widget ocioso custa efetivamente nada e um widget ativo mostra um número atualizado em um segundo ou dois após a mudança subjacente.

### Coerência de Cache

Os caches no lado do servidor que sustentam esses widgets costumavam expirar em um TTL de 60 segundos. Agora, eles invalidam no momento em que um evento relevante de comentário ou reação chega, de modo que a primeira solicitação após uma mudança retorna dados atualizados, não a versão em cache.

### Em Conclusão

Estamos felizes por termos conseguido dedicar tempo para testar e otimizar essa mudança para que nossos clientes possam desfrutá-la com os mesmos preços de sempre. Acreditamos que os resumos de avaliações ao vivo são um diferencial especialmente interessante para nós.

Deixe-nos saber abaixo se você notar algo errado.

Saudações!

{{/isPost}}