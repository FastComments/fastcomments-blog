---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]A Página de Moderação Agora Está Ativa[/postlink]

{{#unless isPost}}
A página de moderação do FastComments agora exibe uma notificação ao vivo quando novos comentários chegam que correspondem aos seus filtros atuais.
{{/unless}}

{{#isPost}}

### O Que Há de Novo

A página de moderação sempre foi uma ferramenta poderosa para gerenciar comentários. Você podia filtrar por status, buscar por texto, filtrar por página ou usuário e realizar ações em massa. Mas para ver novos comentários, você precisava atualizar a página.

Não mais! A página de moderação agora mostra quando novos comentários chegam que correspondem aos seus filtros atuais. Um banner aparece no topo da lista de comentários informando quantos novos comentários estão esperando, e clicar nele os carrega em linha sem uma atualização completa da página.

A mensagem "novos comentários para seus filtros" deve ser quase instantânea na maioria das circunstâncias.

### Avaliação de Filtros

A camada de transporte avalia todos os filtros de moderação do lado do servidor. Isso inclui filtros de status (necessita revisão, necessita aprovação, spam, sinalizado, banido), filtros de string (ID do usuário, URL da página, domínio) e até mesmo busca por texto. Texto citado como `"frase exata"` faz uma correspondência exata, insensível a maiúsculas e minúsculas, enquanto termos não citados fazem correspondência difusa, insensível a maiúsculas e minúsculas.

Isso significa que se você estiver filtrando comentários de spam, não receberá notificações sobre comentários aprovados. Se você estiver buscando comentários que contenham uma frase específica, apenas os comentários correspondentes acionam o banner.

### Grupos de Moderação

Se sua conta usar grupos de moderação para restringir quais moderadores podem ver quais comentários, essas restrições são totalmente aplicadas para notificações ao vivo. A camada de transporte faz uma chamada de volta para o servidor de aplicação para construir o filtro, que inclui restrições de grupo com base nos grupos atribuídos ao moderador. Esse filtro é armazenado em cache durante a duração da conexão WebSocket e atualizado sempre que o moderador altera os filtros.

### Eventos Perdidos

Se a conexão de um moderador cair temporariamente (problemas de rede, laptop em modo de suspensão, etc.), o sistema se atualiza automaticamente ao reconectar para que você não perca nenhum trabalho.

### Desempenho

Projetamos esse recurso para ter um impacto mínimo no tempo de carregamento da página de moderação.

### Múltiplas Regiões

Esse recurso funciona perfeitamente com nossa arquitetura distribuída globalmente, então equipes de moderação distribuídas globalmente obtêm a mesma visualização ao vivo.

### Em Conclusão

Esperamos que este recurso economize tempo dos moderadores e torne a experiência de moderação mais responsiva. Como sempre, agradecemos aos nossos clientes pelo feedback e apoio.

Saudações!

{{/isPost}}