---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Atualização da Frequência de Notificações por Email[/postlink]

{{#unless isPost}}
Agora os usuários podem controlar com que frequência recebem notificações por email sobre novos comentários e respostas, a cada minuto, boletim horário ou boletim diário, com uma única configuração compartilhada, além de substituições por assinatura.
{{/unless}}

{{#isPost}}

### O Que Há de Novo

Adicionamos uma configuração de **Frequência de Notificação de Novo Comentário** que controla com que frequência você recebe notificações por email tanto para notificações de resposta quanto para notificações de inquilinos (novo comentário). As três opções são:

- **A cada minuto** - receba um email assim que novos comentários chegarem (verificado a cada minuto).
- **Boletim horário** - receba um resumo agrupado de novos comentários uma vez por hora.
- **Boletim diário** - receba um resumo agrupado de novos comentários uma vez por dia.

Essa configuração está disponível tanto para administradores de inquilinos quanto para comentaristas, e se aplica a todos os emails de notificação de comentários. Observe que as notificações de @menção são sempre enviadas imediatamente, independentemente dessa configuração.

Você também pode substituir a frequência por assinatura na tabela de Assinaturas, para um controle mais granular sobre páginas individuais.

### Como Configurá-lo

1. Vá para suas [Configurações de Notificação](https://fastcomments.com/auth/my-account/edit-notifications).
2. Use o menu suspenso de **Frequência de Notificação de Novo Comentário** para definir sua frequência preferida.
3. Opcionalmente, substitua a frequência para assinaturas individuais na tabela de Assinaturas.
4. Clique em **Salvar Alterações**.

O padrão é **A cada minuto**, que corresponde ao comportamento anterior.

### Suporte à API

A frequência de notificação também está disponível via API. A configuração em nível de usuário é o campo `notificationFrequency`, e as substituições por assinatura podem ser definidas através do campo `notificationFrequency` da assinatura. Consulte a [documentação da API](https://docs.fastcomments.com/guide-api.html) para detalhes.

### Em Conclusão

Isso dá aos usuários controle sobre sua caixa de entrada sem ter que cancelar a assinatura de páginas inteiras. Uma configuração agora cobre tanto as notificações de resposta quanto as de inquilinos, tornando mais simples a gestão.

Deixe-nos saber abaixo se você tiver algum feedback!

Saudações!

{{/isPost}}