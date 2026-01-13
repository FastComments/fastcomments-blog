---
[category:API & Development]
###### [postdate]
# [postlink]Webhooks Chegam ao FastComments[/postlink]

{{#unless isPost}}
Agora o FastComments pode chamar sua API para criação, atualização e remoção de comentários.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

#### O Que Há de Novo

Com o FastComments, agora é possível invocar um endpoint de API sempre que um comentário for adicionado, atualizado ou removido do nosso sistema.

Fazemos isso com webhooks assíncronos sobre HTTP/HTTPS.

#### Como Usar

Primeiro, navegue até o <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administrador de Webhooks</a>. Isso é acessível através de Gerenciar Dados -> Webhooks.

A partir daí, você pode especificar endpoints para cada tipo de evento de comentário.

Para cada tipo de evento, certifique-se de clicar em **Enviar Payload de Teste** para garantir que sua integração esteja configurada corretamente. Consulte a próxima seção, "Testando", para detalhes.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Exemplo de Configuração de Webhooks" title="Exemplo de Configuração de Webhooks" class="lozad" />
</div>

#### Testando

No <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administrador de Webhooks</a>, existem botões "Enviar Payload de Teste" para cada tipo de evento (Criar, Atualizar, Deletar). Os eventos Criar e Atualizar enviam um objeto WebhookComment fictício, enquanto testar Deletar enviará um corpo de requisição fictício com apenas um ID.

O teste fará duas chamadas para verificar o código de resposta para cenários "felizes" (chave de API correta) e "tristes" (chave de API inválida).

Quando o teste envia uma chave de API inválida, você deve retornar um código de status 401 para que o teste passe completamente. Se você não verificar corretamente o valor do token, verá um erro como:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Falha no Teste de Autenticação de Webhooks" title="Falha no Teste de Autenticação de Webhooks" class="lozad" />
</div>

#### A Estrutura do Objeto Comentário
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### A Estrutura do Evento "Criar"

O corpo da requisição do evento "criar" é um objeto WebhookComment.

#### A Estrutura do Evento "Atualizar"

O corpo da requisição do evento "atualizar" é um objeto WebhookComment.

#### A Estrutura do Evento "Deletar"

O corpo da requisição do evento "deletar" é um objeto WebhookComment, **mas contendo apenas o id**.

#### Por que Criar e Atualizar usam HTTP PUT e não POST?

**Uma vez que todas as nossas requisições contêm um ID**, repetir a mesma requisição de Criar ou Atualizar **não deve criar novos objetos do seu lado**. Isso significa que essas chamadas são idempotentes e devem ser eventos PUT conforme a especificação HTTP.

#### Como Funciona

Todas as alterações no objeto Comentário no sistema disparam um evento que acaba em uma fila. Você pode monitorar essa fila no <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administrador de Webhooks</a> caso sua API fique fora do ar. Se uma requisição para sua API falhar, iremos reencaminhá-la em um cronograma. Esse cronograma é 1 Minuto * a contagem de tentativas. Se a chamada falhar uma vez, tentará novamente em um minuto. Se falhar duas vezes, aguardará dois minutos, e assim por diante. Isso é para que não sobrecarreguemos sua API caso você esteja enfrentando problemas relacionados à carga.

#### Segurança & Token da API

No cabeçalho da requisição, passaremos seu <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">Segredo da API</a> no parâmetro chamado "token".

Se você não verificar corretamente este parâmetro, sua integração não será marcada como Verificada. Isso é uma medida de segurança para garantir que quaisquer integrações com o FastComments sejam seguras.

#### Em Conclusão

Esperamos que você ache a integração de Webhooks do FastComments fácil de entender e rápida de configurar.

Se você tiver mais perguntas, sinta-se à vontade para entrar em contato com a <a href="https://fastcomments.com/auth/my-account/help" target="_blank">página de suporte ao cliente</a>.

Saudações!

{{/isPost}}

---