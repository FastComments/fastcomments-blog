---
[category:Features]
###### [postdate]
# [postlink]Emails de Notificação Ativados Para Assinaturas[/postlink]

{{#unless isPost}}
O FastComments agora envia e-mails para usuários de páginas às quais estão inscritos.
{{/unless}}

{{#isPost}}

### Novidades

Com o FastComments, os usuários podem clicar no ícone de sino em um widget de comentários para se inscrever naquela página. Nós os notificaremos
quando novos comentários forem deixados nessa página, ou quando houver um novo comentário em um thread de resposta do qual eles fazem parte.

Fazemos isso há anos, porém não enviávamos e-mails para essas notificações - elas eram visíveis apenas em nosso dashboard.

Agora enviaremos e-mails para essas notificações.

### Novos Tipos de E-mail

Agora enviamos dois novos tipos de e-mails. O primeiro é quando você tem apenas algumas notificações. Iremos simplesmente listar
os novos comentários no e-mail para você.

O segundo tipo de e-mail que você receberá contém links para cada página da qual você recebeu notificações. Isso é enviado
quando você recebe muitas notificações.

Esses e-mails de notificação são apenas para novos comentários em páginas às quais você está inscrito.

### Cronograma de Notificação por E-mail

Os e-mails de notificação são enviados a cada hora para evitar e-mails excessivos. A exceção é se a página em questão tiver mais de dez mil
comentários, caso em que enviaremos notificações para essa página apenas uma vez por dia.

### Para Proprietários de Sites - Personalizando os E-mails

Um novo template de e-mail `Novos Comentários de Assinatura` estará disponível em breve para personalização.

### Para Desenvolvedores & Observações

Para usuários SSO, não enviaremos os e-mails de notificação por padrão. Você terá que passar uma nova flag: `optedInSubscriptionNotifications: true` no objeto do usuário, ou
no payload para o widget de comentários, para habilitar essas novas notificações.

### Em Conclusão

Como em todos os lançamentos importantes, estamos felizes por poder dedicar tempo para otimizar, testar e lançar adequadamente esse recurso. Deixe-nos saber
abaixo se você encontrar algum problema.

Cheers!

{{/isPost}}

---