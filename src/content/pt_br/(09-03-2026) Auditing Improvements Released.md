[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Melhorias de Auditoria Lançadas[/postlink]

{{#unless isPost}}
O registro de auditoria agora mostra quem ou o que cada evento afetou por nome, e você pode pesquisar por ele. Também há agora intervalo de datas, pesquisa de sub‑inquilinos, diferenças a nível de campo nas atualizações e filtros de API correspondentes.
{{/unless}}

{{#isPost}}

### O que há de novo

O registro de auditoria sempre registrou quem realizou uma ação e sobre o que ela foi realizada. Esta versão trata de tornar esse
registro legível e pesquisável sem sair da página.

Se você quisesse saber o que aconteceu com um moderador específico, primeiro teria que encontrar seu ID, e se esse
moderador já tivesse sido removido, não haveria nada contra o qual procurar o ID. O evento dizia que algo foi excluído,
por quem e quando, mas por alguns recursos os nomes estavam ausentes.

Agora o nome é capturado junto com o ID no momento do evento, então ele sobrevive à exclusão e você pode pesquisar por ele.

### A coluna Affected

Há uma nova coluna **Affected** na tabela que mostra a pessoa ou objeto que o evento afetou, por nome. Para uma pessoa,
ela aparece como `jsmith (jsmith@example.com)`. Para uma personalização de widget ou um grupo de moderação, é o nome que você deu a ele. Para um
arquivo de mídia, é o nome do arquivo que você enviou.

Acima da tabela há uma caixa de pesquisa correspondente, **Who or what was changed**. Digite um nome, um endereço de e‑mail ou um ID, e ela
encontrará eventos que afetaram essa pessoa ou objeto. Você não precisa saber qual dos três você tem, e não precisa procurar
um ID interno primeiro.

Eventos criados antes desta versão não têm um nome anexado, mas ainda mantêm o ID que sempre tiveram, então a mesma
caixa de pesquisa os encontra por ID.

### Intervalo de datas

A linha de filtros agora tem um menu suspenso **Date Range** com Últimos 30 dias, Últimos 90 dias, Último ano, Todo o tempo e **Custom range**,
que revela seletores de data De e Até.

Um intervalo de datas é de longe a maneira mais fácil de restringir uma pesquisa, e combiná‑lo com os outros filtros é a forma mais rápida
de encontrar algo.

### Contas gerenciadas

Se sua conta gerencia outros inquilinos, há uma caixa de seleção **Include sub‑tenants**. Marcá‑la pesquisa sua conta e
todos os inquilinos que ela gerencia em uma única passagem, com uma coluna **Tenant** mostrando de qual conta cada evento veio.

Até agora o log de cada inquilino só podia ser lido individualmente, então responder "alguém mexeu em alguma de nossas propriedades esta semana"
significava alternar entre cada um deles.

### Atualizações agora registram o que mudou

Editar um membro da equipe costumava registrar o conjunto resultante de permissões. Isso informa quais são as permissões agora, mas não
quais eram, então "quem removeu o acesso de faturamento desta pessoa, e quando" era impossível de responder.

Eventos de atualização agora incluem um mapa `changes` apenas com os campos que realmente mudaram, cada um com seu valor anterior e novo.
Campos que não mudaram são omitidos, então uma mudança de permissão aparece como uma única linha em vez de um bloco de booleanos.

### Descrições e o dispositivo por trás de uma mudança

Eventos destrutivos agora trazem uma frase simples descrevendo o que aconteceu, como "Removed user from the account." Visualizações de página tinham
descrições e exclusões não, o que era inconsistente.

Eventos que alteram algo também registram o navegador que fez a mudança. As sessões são registradas como um hash para que as ações de uma pessoa possam ser
correlacionadas sem que o log armazene algo que possa ser reproduzido.

### Outras melhorias

- Alguns ajustes com paginação e combinações de filtros.
- Eventos de login mostravam uma coluna **Who** em branco. O nome de usuário estava no registro o tempo todo e a página não o estava lendo.
- A coluna de ação renderizava eventos de login como N/A, porque Login estava ausente da lista de nomes de ação.
- Páginas de log de auditoria não conseguiam nomear usuários SSO, exibindo "Missing User" em vez disso. Agora eles são resolvidos corretamente.
- A página está muito mais rápida em contas com históricos longos.

### Para a API

O endpoint `/api/v1/audit-logs` ganhou filtros correspondentes: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target`
para a pesquisa por substring, e `includeManagedTenants`. As respostas agora incluem `targetId`, `targetLabel` e `ua`.

Duas mudanças que valem a pena notar se você já chama este endpoint. `before` agora funciona sozinho, onde antes era ignorado
a menos que você também passasse `after`. E `limit` agora está limitado a 10k, onde antes não tinha teto. O padrão permanece inalterado
em 1k.

### Documentação

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">O guia da API AuditLogs</a> cobre os
novos parâmetros de consulta, e <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">a
referência da estrutura AuditLog</a> cobre os novos campos.

Se você ainda não usou o registro de auditoria, [the original release post](/(3-21-2022)-audit-log-released.html) percorre
onde ele está, quem pode lê‑lo e por quanto tempo as entradas são mantidas. Tudo isso permanece inalterado.

### Em conclusão

Estamos felizes por poder continuar melhorando o FastComments.
Se você for procurar algo no seu log e não conseguir encontrar, conte-nos abaixo.

Saúde!

{{/isPost}}