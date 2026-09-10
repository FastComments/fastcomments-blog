[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Melhorias de Auditoria Lançadas[/postlink]

{{#unless isPost}}
O registro de auditoria agora mostra quem ou o que cada evento afetou por nome, e você pode pesquisar por ele. Também há agora intervalo de datas, pesquisa de sub‑inquilinos, diferenças a nível de campo nas atualizações e filtros de API correspondentes.
{{/unless}}

{{#isPost}}

### Novidades

O registro de auditoria sempre registrou quem realizou uma ação e sobre o que ela foi realizada. Esta versão trata de tornar esse registro legível e pesquisável sem sair da página.

Se você quisesse saber o que aconteceu com um moderador específico, primeiro teria que encontrar seu ID, e se esse moderador já tivesse sido removido, não haveria nada contra o qual consultar o ID. O evento dizia que algo foi excluído, por quem e quando, mas por alguns recursos os nomes estavam ausentes.

Agora o nome é capturado junto com o ID no momento do evento, de modo que ele sobrevive à exclusão e você pode pesquisá‑lo.

### A Coluna Affected

Há uma nova coluna **Affected** na tabela que mostra a pessoa ou objeto sobre o qual o evento atuou, por nome. Para uma pessoa, aparece como `jsmith (jsmith@example.com)`. Para uma personalização de widget ou um grupo de moderação, é o nome que você atribuiu. Para um arquivo de mídia, é o nome do arquivo que você enviou.

Acima da tabela há uma caixa de pesquisa correspondente, **Who or what was changed**. Digite um nome, um endereço de e‑mail ou um ID, e ela encontrará eventos que afetaram essa pessoa ou objeto. Você não precisa saber qual dos três tem, e não precisa procurar um ID interno primeiro.

Eventos criados antes desta versão não têm um nome associado, mas ainda mantêm o ID que sempre tiveram, de modo que a mesma caixa de pesquisa os encontra pelo ID.

### Intervalo de Datas

A linha de filtros agora possui um menu suspenso **Date Range** com Últimos 30 dias, Últimos 90 dias, Último ano, Todo o tempo e **Custom range**, que exibe seletores de data De e Até.

Um intervalo de datas é de longe a maneira mais fácil de refinar uma pesquisa, e combiná‑lo com os demais filtros é a forma mais rápida de encontrar algo.

### Contas Gerenciadas

Se sua conta gerencia outros inquilinos, há uma caixa de seleção **Include sub-tenants**. Marcá‑la pesquisa sua conta e todos os inquilinos que ela gerencia em uma única passagem, com uma coluna **Tenant** mostrando de qual conta cada evento provém.

Até agora, o registro de cada inquilino só podia ser lido individualmente, de modo que responder “alguém mexeu em alguma de nossas propriedades esta semana” exigia alternar entre cada um.

### Atualizações Agora Registram o que Foi Alterado

Editar um membro da equipe costumava registrar o conjunto resultante de permissões. Isso informa quais são as permissões agora, mas não quais eram antes, de modo que “quem removeu o acesso de faturamento desta pessoa e quando” não tinha resposta.

Eventos de atualização agora incluem um mapa `changes` apenas com os campos que realmente **alteraram**, cada um com seu valor anterior e novo. Campos não alterados são omitidos, de modo que uma mudança de permissão aparece em uma única linha ao invés de um muro de booleanos.

### Descrições e o Dispositivo por Trás de uma Alteração

Eventos destrutivos agora trazem uma frase simples descrevendo o que aconteceu, como "Removed user from the account." Visualizações de página tinham descrições e exclusões não, o que era **backwards**.

Eventos que alteram algo também registram o navegador que fez a alteração. As sessões são registradas como um hash para que as ações de uma pessoa possam ser correlacionadas sem que o registro armazene algo que possa ser reproduzido.

### Outras Melhorias

- Algumas correções com paginação e combinações de filtros.
- Eventos de login mostraram uma coluna **Who** em branco. O nome de usuário estava no registro o tempo todo e a página não o estava lendo.
- A coluna de ação renderizou eventos de login como N/A, porque Login estava ausente da lista de nomes de ação.
- Páginas do registro de auditoria não conseguiam nomear usuários SSO, exibindo "Missing User" em vez disso. Agora eles são resolvidos corretamente.
- A página está muito mais rápida em contas com longos históricos.

### Para a API

O endpoint `/api/v1/audit-logs` ganhou filtros correspondentes: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` para a pesquisa por substring, e `includeManagedTenants`. As respostas agora incluem `targetId`, `targetLabel` e `ua`.

Duas mudanças que valem a pena notar se você já chama este endpoint. `before` agora funciona sozinho, onde antes era ignorado a menos que você também passasse `after`. E `limit` agora tem um limite máximo de 10k com padrão de 5k. Antes era ilimitado.

### Documentação

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">O guia da API AuditLogs</a> cobre os novos parâmetros de consulta, e <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">a referência da estrutura AuditLog</a> cobre os novos campos.

Se você ainda não usou o registro de auditoria, [a postagem original de lançamento](/(3-21-2022)-audit-log-released.html) explica onde ele está, quem pode lê‑lo e por quanto tempo as entradas são mantidas. Tudo isso permanece inalterado.

### Em Conclusão

Estamos felizes por poder continuar aprimorando o FastComments. Se você procurar algo no seu registro e não conseguir encontrá‑lo, conte‑nos abaixo.

Saúde!

{{/isPost}}

---