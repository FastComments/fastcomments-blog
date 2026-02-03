---
[category:Moderation]
[category:Features]

###### [postdate]
# [postlink]Atualização de Busca de Comentários de Moderação[/postlink]

{{#unless isPost}}
FastComments agora permite que você busque por página e usuário na página de moderação de comentários.
{{/unless}}

{{#isPost}}

### O que há de novo

Anteriormente, o FastComments permitia que você buscasse por frases ou correspondências exatas de strings na página de moderação de comentários.

Agora você pode buscar comentários das seguintes maneiras:

- Busca de palavras difusas: **gatos amam**
- Correspondência exata de frase: **"Eu amo gatos."**
- **_Novo!_** Por Título da Página: **page:"Título da Página"**
  - Suporta autocompletar.
  - Mostra o número de comentários para cada página na lista de sugestões de autocompletar.
- **_Novo!_** Por URL da Página: **page:"https://example.com/some-page"**
  - Suporta autocompletar.
  - Mostra o número de comentários para cada página na lista de sugestões de autocompletar.
- **_Novo!_** Por Usuário: **user:"Bob"**
  - Suporta autocompletar.

Você pode compartilhar os resultados da busca com outros moderadores ou administradores compartilhando a URL da página da moderação. O valor do campo de busca será incluído na URL no seu navegador após você clicar em "Ir".

### Como Obter

Este recurso foi disponibilizado para todos os clientes!

### Documentação

O site de documentação foi atualizado, e a documentação dedicada para este recurso [será mantida aqui](https://docs.fastcomments.com/guide-moderation.html#search).

### Em Conclusão

Como em todos os grandes lançamentos, estamos felizes que pudemos dedicar um tempo para otimizar, testar e lançar corretamente este recurso. Nos avise abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}