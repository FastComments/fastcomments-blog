---
[category:Moderação]

###### [postdate]

# [postlink]Ocultando Comentários Sinalizados com FastComments[/postlink]

{{#unless isPost}}Sinalização foi adicionada ao FastComments. Além disso, os comentários podem ser ocultados com base no número de vezes que são sinalizados.{{/unless}}

{{#isPost}}

### O que há de Novo

Os usuários agora podem sinalizar comentários com threads de comentários hospedadas pelo FastComments. Os moderadores podem filtrar comentários sinalizados, bem como ver quantas vezes foram sinalizados.

A plataforma também pode ser configurada para ocultar automaticamente os comentários quando foram sinalizados um certo número de vezes.

### A Perspectiva do Comentador

Quando um usuário tem uma sessão válida, ele pode sinalizar comentários através do menu de edição de comentários.

Isso é compatível com os seguintes tipos de sessão:

- Sessões anônimas
- Sessão de Usuário do FastComments.com (Usando Cookies de Terceiros)
- SSO Seguro
- SSO Simples

Comentários sinalizados continuarão a ser exibidos até que o limite de sinalização configurado seja atingido.

### Para Moderadores

Os moderadores podem ver comentários sinalizados usando o filtro `Flagged`, também disponível diretamente [aqui](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

Além disso, o número de vezes que um comentário foi sinalizado é visível para Moderadores e Administradores.

Nota:

- Redefinir a contagem de sinalizações para um comentário que foi `Não Aprovado` via o `Limite de Não Aprovação` irá `Re-Aprovar` o comentário.
- `Re-Aprovar` um comentário `Sinalizado` irá **redefinir a contagem de sinalizações**.
- Este é um recurso criado como uma conveniência.

### Configuração

Configurar a ocultação automática de comentários sinalizados pode ser feito na [Página de Configurações de Moderação de Comentários](https://fastcomments.com/auth/my-account/moderate-comments/settings).

### Clientes Existentes

Concluímos a implementação deste recurso para todos os clientes existentes em todos os níveis. A ocultação automática de comentários não aprovados não está habilitada para novos ou clientes existentes.

### Em Conclusão

Esperamos que você encontre este novo conjunto de recursos útil e fácil de usar.

Saudações!

{{/isPost}}

---