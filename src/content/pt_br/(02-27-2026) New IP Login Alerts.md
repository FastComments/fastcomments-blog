---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Novos Alertas de Login por IP[/postlink]

{{#unless isPost}}
O FastComments agora envia um e-mail de alerta de segurança quando um login é detectado de um novo endereço IP, incluindo a localização aproximada, para ajudar os usuários a detectar acessos não autorizados.
{{/unless}}

{{#isPost}}

### Novidades

O FastComments agora envia automaticamente um e-mail de alerta de segurança quando detectamos um acesso à sua conta a partir de um endereço IP que nunca vimos antes. O e-mail inclui:

- A **localização aproximada** (cidade e país) do login.
- O **endereço IP** utilizado.
- A **hora** do login.
- Um link direto para **mudar sua senha** caso o login não tenha sido você.

Isso se aplica a todos os métodos de login: login baseado em senha, links mágicos e fluxos de autenticação de dois fatores.

### Privacidade

Nós não armazenamos seu endereço IP bruto. Armazenamos apenas uma forma ofuscada para fins de comparação de segurança. A localização aproximada é
determinada no momento do login e não é armazenada.

**Seu IP não é compartilhado com terceiros** para determinar a localização. Nós hospedamos nosso próprio serviço que extrai a localização aproximada
de uma cópia do banco de dados MaxMind (atualizada semanalmente).

### Quando os Alertas São Enviados

Um alerta é enviado quando **todos** os seguintes são verdadeiros:

- O login foi bem-sucedido.
- Não é o primeiro login do usuário.
- O endereço IP não foi visto em um login bem-sucedido anterior para aquela conta.

Isso significa que você não receberá um alerta em seu primeiro login e não receberá alertas repetidos para o mesmo IP.

### Conclusão

Este é mais um passo para manter sua conta segura. Se você receber um alerta que não reconhece, recomendamos mudar
sua senha imediatamente.

Deixe-nos saber abaixo se você tem algum feedback!

Saudações!

{{/isPost}}