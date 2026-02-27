---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Atualização da Frequência de Notificações por Email[/postlink]

{{#unless isPost}}
Os usuários agora podem controlar com que frequência recebem notificações por email para novos comentários e respostas, a cada minuto, resumo horário ou resumo diário, com configurações separadas para notificações de resposta e de administrador, além de substituições por assinatura.
{{/unless}}

{{#isPost}}

### Novidades

Adicionamos configurações de **Frequência de Notificação de Resposta** e **Frequência de Notificação de Administrador** que controlam com que frequência você recebe notificações por email para respostas e novos comentários, respectivamente. As três opções para cada uma são:

- **A cada minuto** - receba um email assim que novos comentários chegarem (verificado a cada minuto).
- **Resumo horário** - receba um resumo agrupado de novos comentários uma vez por hora.
- **Resumo diário** - receba um resumo agrupado de novos comentários uma vez por dia.

A Frequência de Notificação de Resposta está disponível para todos os usuários e tem como padrão **A cada minuto**. A Frequência de Notificação de Administrador está disponível para administradores do site e tem como padrão **Resumo horário**. Observe que as notificações @mention são sempre enviadas imediatamente, independentemente dessas configurações.

Você também pode substituir a frequência em uma base por assinatura na tabela de Assinaturas, para um controle mais preciso sobre páginas individuais.

### Como Configurar

1. Vá para suas [Configurações de Notificação](https://fastcomments.com/auth/my-account/edit-notifications).
2. Use os menus suspensos **Frequência de Notificação de Resposta** e **Frequência de Notificação de Administrador** para definir suas frequências preferidas.
3. Opcionalmente, substitua a frequência para assinaturas individuais na tabela de Assinaturas.
4. Clique em **Salvar Alterações**.

### Suporte à API

O campo `notificationFrequency` no objeto do usuário controla a frequência de notificação de resposta, e o campo `adminNotificationFrequency` controla a frequência de notificação de administrador. Substituições por assinatura podem ser definidas através do campo `notificationFrequency` da assinatura. Veja a [documentação da API](https://docs.fastcomments.com/guide-api.html) para detalhes.

### Em Conclusão

Isso dá aos usuários controle sobre sua caixa de entrada sem precisar cancelar a assinatura de páginas inteiramente.

Deixe-nos saber abaixo se você tiver algum feedback!

Saudações!

{{/isPost}}

---