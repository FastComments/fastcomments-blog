---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]Configuração DKIM Agora Disponível na UI[/postlink]

{{#unless isPost}}
O FastComments agora oferece uma interface para configurar DKIM, facilitando a melhoria das taxas de entrega de e-mails sem usar a API.
{{/unless}}

{{#isPost}}

### Novidades

Configurar DKIM para seu domínio de e-mail personalizado ficou mais fácil. Anteriormente, configurar DKIM exigia o uso da
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API de Configurações de Domínio</a> diretamente. Agora, você pode
configurar DKIM diretamente pela interface de administração do FastComments.

### Por Que DKIM é Importante

Quando você personaliza o Domínio do Remetente para os e-mails que o FastComments envia em seu nome, os provedores de e-mail precisam verificar se
esses e-mails são legítimos. DKIM (DomainKeys Identified Mail) é um dos principais mecanismos de autenticação que ajuda com isso.
Sem uma configuração DKIM adequada, os e-mails enviados em nome do seu domínio têm mais chances de acabar nas pastas de spam.

### Como Configurar

Navegue até a página <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Meus Domínios</a> e clique
em "Mostrar Avançado" para o domínio que você deseja configurar. Você verá as configurações de DKIM onde poderá inserir seu nome de domínio, seletor de chave 
e chave privada.

Após salvar, a configuração DKIM será aplicada a todos os e-mails enviados daquele domínio.

### A API Continua Funcionando

Se você preferir gerenciar a configuração DKIM programaticamente, a
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API de Configurações de Domínio</a> continua a funcionar
como antes.

### Em Conclusão

Esperamos que isso facilite a garantia de que seus usuários recebam os e-mails que o FastComments envia em seu nome. Nos avise
abaixo se você tiver alguma dúvida.

Saudações!

{{/isPost}}

---