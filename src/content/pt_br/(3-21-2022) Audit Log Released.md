---
[category:Security]

###### [postdate]
# [postlink]Registro de Auditoria Liberado[/postlink]

{{#unless isPost}}O FastComments agora fornece um registro detalhado de todas as modificações feitas pela plataforma.{{/unless}}

{{#isPost}}

### Novidades

A partir de março, o FastComments agora inclui auditoria detalhada com o plano Pro, e para todos os clientes corporativos existentes.

Todas as ações administrativas, seja acesso a dados, modificação de um comentário ou cancelamento de um bloqueio de usuário, são rastreadas e indexadas no registro de auditoria.

### Como Usar

O Registro de Auditoria pode ser acessado indo para `Gerenciar Dados` e depois `Registros de Auditoria`. Um link direto está [aqui](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Para começar, você verá uma página como a seguinte:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Registro de Auditoria" />
</div>

Daqui, você pode pesquisar por nome de usuário, endereço IP, tipo de ação ou pelo recurso.

Por exemplo, filtrando por recurso:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Seleção de Recurso do Registro de Auditoria" />
</div>

Também podemos mergulhar nos detalhes de uma entrada no registro de auditoria e até ver o objeto relacionado que foi alterado.

Por exemplo, podemos mergulhar em uma entrada para banir um usuário:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Detalhes da Entrada do Registro de Auditoria" />
</div>

Aqui podemos ver quem baniu o usuário (um usuário com o nome de usuário `winrid`). Podemos ver que é um banimento permanente, e também temos o ID do usuário e o e-mail banido, junto com o texto pelo qual eles foram banidos.

Podemos ver o IP que criou o banimento, mas o IP do comentador original é intencionalmente omitido para sua privacidade.

Para ver todos os eventos de `winrid`, podemos simplesmente clicar no ícone de filtro à direita, ao lado do nome de usuário.

### Restringindo Acesso

Os dados no registro de auditoria só podem ser acessados por usuários com a permissão `Gerenciar Dados`.

### Retenção

Todas as entradas no registro de auditoria são mantidas por dois anos. No entanto, o registro de auditoria é limpo quando sua conta é excluída.

### Acesso à API

[A documentação para a API do Registro de Auditoria está aqui.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Você descobrirá que o registro de auditoria pode ser
classificado e paginado de algumas maneiras diferentes dependendo do seu caso de uso.

### Clientes Existentes

Se você estiver no plano Pro ou equivalente, verá que o registro de auditoria foi habilitado automaticamente! Se você gostaria de obter acesso, entre em contato com seu representante de suporte.

### O Que Foi Omitido

O único tipo de mudanças que são omitidas são comentários reais e seus votos. Isso se deve ao fato de que descobrimos que nossos clientes estão principalmente interessados no lado administrativo durante a auditoria, e não necessariamente interessados em auditar o que as pessoas comentam. Esses tipos de ações também adicionam um ruído considerável ao registro.

No entanto, se isso for um requisito, entre em contato, e podemos discutir a possibilidade de habilitar isso para você.

### Em Conclusão

Esperamos que você ache essa área de nossa oferta útil, a interface fácil de usar e a API rápida.

Saudações!

{{/isPost}}