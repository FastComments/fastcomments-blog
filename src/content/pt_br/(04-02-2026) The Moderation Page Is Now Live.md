---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]A Página de Moderação Agora Está Ativa[/postlink]

{{#unless isPost}}
A página de moderação do FastComments agora exibe uma notificação em tempo real quando novos comentários chegam que correspondem aos seus filtros atuais.
{{/unless}}

{{#isPost}}

### Novidades

A página de moderação sempre foi uma ferramenta poderosa para gerenciar comentários. Você poderia filtrar por status, pesquisar por texto, filtrar por página ou usuário, e realizar ações em massa. Mas para ver novos comentários, era necessário atualizar a página.

Não mais! A página de moderação agora mostra quando novos comentários chegam que correspondem aos seus filtros atuais. Um banner aparece na parte superior da lista de comentários informando quantos novos comentários estão aguardando, e ao clicar nele, eles são carregados inline sem precisar de uma atualização completa da página.

A mensagem "novos comentários para seus filtros" deve ser quase instantânea na maioria das circunstâncias.

### Avaliação de Filtros

A camada de transporte avalia todos os filtros de moderação do lado do servidor. Isso inclui filtros de status (necessita revisão, necessita aprovação, spam, sinalizado, banido), filtros de string (ID do usuário, URL da página, domínio) e até mesmo busca de texto. Texto citado como <div class="code">"frase exata"</div> realiza uma correspondência exata sem diferenciar maiúsculas de minúsculas, enquanto termos não citados fazem correspondência difusa sem diferenciar maiúsculas de minúsculas.

Isso significa que se você estiver filtrando comentários de spam, não receberá notificações sobre comentários aprovados. Se estiver procurando por comentários que contenham uma frase específica, apenas os comentários correspondentes ativam o banner.

### Grupos de Moderação

Se sua conta usa grupos de moderação para restringir quais moderadores podem ver quais comentários, essas restrições são totalmente aplicadas para notificações em tempo real. A camada de transporte faz uma chamada de volta ao servidor da aplicação para construir o filtro, que inclui restrições de grupo com base nos grupos designados ao moderador. Esse filtro é armazenado em cache durante a duração da conexão WebSocket e atualizado sempre que o moderador altera os filtros.

### Eventos Perdidos

Se a conexão de um moderador cair temporariamente (problemas de rede, hibernação do laptop, etc.), o sistema se atualiza automaticamente na reconexão para que você não perca nenhum trabalho.

### Desempenho

Projetamos esse recurso para ter um impacto mínimo no tempo de carregamento da página de moderação.

### Multi-Região

Esse recurso funciona sem problemas com nossa arquitetura distribuída globalmente, então equipes de moderação distribuídas globalmente obtêm a mesma visualização em tempo real.

### Em Conclusão

Esperamos que esse recurso economize tempo dos moderadores e torne a experiência de moderação mais responsiva. Como sempre, agradecemos aos nossos clientes pelo feedback e suporte.

Saudações!

{{/isPost}}