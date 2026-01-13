---
[category:API & Development]

###### [postdate]
# [postlink]Branding Branco do FastComments[/postlink]

{{#unless isPost}}
Branding Branco, com integração total de API e ferramentas de automação, chega ao FastComments.
{{/unless}}

{{#isPost}}

## Novidades

O FastComments agora pode se integrar a outras aplicações e revendedores de terceiros via Branding Branco. O Branding Branco permite que você crie contas do FastComments (chamadas de locatários), usuários, moderadores e muito mais.

Agora oferecemos uma [API abrangente](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) para automatizar a integração
com terceiros.

Agora você pode, através da API:

- Criar clientes (locatários filhos) que são gerenciados pelo seu locatário.
- Gerenciar os pacotes disponíveis para seus clientes e como você lidará com a cobrança.
- Adicionar e gerenciar usuários em seus locatários gerenciados.
- Adicionar e gerenciar moderadores em seus locatários gerenciados.
- Convidar moderadores e enviar links de login para os usuários do locatário.

## Cobrança

Com a cobrança, existem duas opções:

1. Através do FastComments Flex, o uso dos seus locatários filhos é automaticamente consolidado e cobrado ao locatário pai. Isso pode ser monitorado na [Página de Análise de Cobrança](https://fastcomments.com/auth/my-account/analytics/billing).
2. Através do FastComments Pro, você tem acesso para criar um número fixo de locatários filhos por um preço mensal fixo.

## Remoção de Marca

Locatários gerenciados podem ter a remoção de marca ativada, o que retira nossos logotipos do widget de comentários.

## Como Obter o Branding Branco

Atualmente, os planos FastComments Flex e Pro oferecem acesso à API de Branding Branco.

## Scripts e Exemplos

Um exemplo de script que usa a API para configurar um locatário com usuários e moderadores [está disponível aqui](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Validação Abrangente

Cada recurso da API contém validações e restrições abrangentes, com mensagens de erro úteis, para guiá-lo a usá-los corretamente.

<div class="code"><div class="title">Exemplo Detalhado de Erro</div><div class="line">{</div><div class="line">  "status": "falhou",</div><div class="line">  "reason": "Um usuário com esse id não existe neste locatário. Crie o usuário primeiro e depois torne-o um moderador.",</div><div class="line">  "code": "não-encontrado"</div><div class="line">}</div></div>

## Outros Casos de Uso

As APIs de [usuários do locatário](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) e [moderadores](https://docs.fastcomments.com/guide-api.html#moderator-structure) também podem ser usadas para 
adicionar e gerenciar esses recursos em seu próprio locatário, independentemente do branding branco.

## Documentação

Você pode encontrar a documentação completa do Branding Branco e como usar a API [aqui](https://docs.fastcomments.com/guide-white-labeling.html).

## Em Conclusão

Esperamos que você tenha achado esta atualização e sua documentação útil. Boa integração!

{{/isPost}}