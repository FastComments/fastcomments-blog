---
[category:Features]

###### [postdate]
# [postlink]Liberando Nomes de Exibição[/postlink]

{{#unless isPost}}
FastComments sempre suportou nomes de exibição para usuários SSO. No entanto, isso nunca foi exposto a comentaristas regulares. Hoje isso muda!
{{/unless}}

{{#isPost}}

### O que há de novo

FastComments sempre suportou nomes de exibição para usuários SSO. No entanto, isso nunca foi exposto a comentaristas regulares. Hoje isso muda!

Na página de [Detalhes da Conta](https://fastcomments.com/auth/my-account/edit-details), você agora pode preencher um novo campo `Display Name`. `Display Name` será
exibido em seus comentários e seus perfis.

### Emojis

No passado, os usuários tinham dificuldade em usar emojis em nomes de usuário, uma vez que era necessário inserir seu nome de usuário para fazer login. No entanto, agora `Display Name` pode conter emojis.

### Exclusividade e Abuso

O ponto do `Display Name` é que ele não é exclusivo. Se dois usuários do FastComments.com, em duas comunidades principais muito diferentes, tiverem nomes semelhantes, gostaríamos que
eles pudessem definir seu nome de exibição preferido. No entanto, não podemos restringir onde as pessoas comentam com sua conta global do FastComments, então isso pode
resultar em confusão.

Ter um nome semelhante ao de outro usuário, ou a um moderador, por si só não é um caso de abuso. No entanto, se você abusar disso ao impersonar intencionalmente outros usuários, podemos
desativar esse recurso em sua conta, e você ficará limitado a usar apenas `username`.

### Fazendo Login

Você ainda usa seu nome de usuário para fazer login - **não seu nome de exibição!**

### Para Desenvolvedores & Armadilhas

Os objetos `User` regulares expostos via API agora possuem `displayName`.

### Em Conclusão

Como todos os lançamentos importantes, estamos felizes por termos conseguido dedicar tempo para otimizar, testar e lançar adequadamente esse recurso. Deixe-nos saber
abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}