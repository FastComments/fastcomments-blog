---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]A Autenticação por Senha Agora é Suportada[/postlink]

{{#unless isPost}}
Com esta atualização, o FastComments agora suporta autenticação tradicional baseada em senha, além do sistema existente baseado em e-mail.
{{/unless}}

{{#isPost}}

### O Que Há de Novo

Desde o lançamento, o FastComments autentica por meio de links mágicos enviados por e-mail. Isso aconteceu porque pudemos consolidar nossos mecanismos de login no mesmo sistema usado quando um usuário deixa seu primeiro comentário e verifica/loga por meio de um link baseado em e-mail. No entanto, nem todos os servidores de e-mail são iguais, e às vezes receber um link pode levar minutos. Isso foi muito frustrante para alguns de nossos usuários.

A partir do final de 2023, o FastComments agora suporta autenticação via senhas! Na página de login, agora há duas abas - uma para logar via e-mail e outra para via senha.

### Como Definir uma Senha

Você pode definir uma senha acessando [Minha Conta -> Detalhes da Conta -> Alterar Senha](https://fastcomments.com/auth/my-account/edit-details/change-password).

Basta solicitar um link de redefinição. Um link será enviado para seu e-mail e, ao clicar nele, você poderá definir uma nova senha. O link funciona apenas uma vez e expira se não for utilizado.

### Armazenamento e Segurança de Senhas

Senhas não são armazenadas. Em vez disso, as senhas são criptografadas com um sal de 11 rodadas usando bcrypt. A concorrência com o sistema baseado em senha é limitada e monitorada para prevenir vários tipos de ataques relacionados a senhas.

### O Futuro

No futuro, planejamos suportar autenticação de dois fatores (2FA) também.

### Em Conclusão

Como em todos os lançamentos importantes, estamos felizes por podermos dedicar tempo para otimizar, testar e liberar adequadamente este recurso. Nos avise abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}

---