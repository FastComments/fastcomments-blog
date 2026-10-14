[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Como Migrar do OpenWeb para FastComments em 2026[/postlink]

{{#unless isPost}}
Um guia recurso por recurso para editores que estão migrando do OpenWeb (anteriormente Spot.IM): o que corresponde 1:1, o que é diferente, como funciona a importação CSV, como a negociação SSO muda, e um plano de transição passo a passo.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

Este guia é para líderes de produto e engenharia e gerentes de comunidade que utilizam o OpenWeb hoje e precisam de um plano para migrar. Ele percorre cada superfície do OpenWeb, indica o equivalente no FastComments e informa claramente onde não há correspondência 1:1.

### Por Que Agora

Em 30 de setembro de 2026, o Tribunal Distrital de Tel Aviv ordenou a nomeação de um receptor temporário sobre o OpenWeb a pedido de seu credor credor, Mars Growth Capital, que detém um gravame de primeira prioridade sobre os ativos e contas da empresa e está buscando executá‑lo contra os ativos israelenses, contas bancárias e propriedade intelectual do OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Um administrador temporário, Adv. Ehud Gindes, foi nomeado no dia seguinte (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). No início de 2026, a Microsoft, um dos maiores clientes do OpenWeb, encerrou seu engajamento e reteve pagamentos devido a uma disputa de tráfego que o OpenWeb rejeita (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb afirma que a plataforma continua operando. Supervisão judicial, um credor executando gravames sobre a propriedade intelectual da qual seu widget de comentários depende, e um administrador cujo trabalho é preservar o valor dos ativos não são condições que você deseja como editor para uma superfície de engajamento central. Se ainda não fez uma exportação completa de dados, faça isso primeiro, hoje, antes de qualquer outra coisa neste guia.

### O Que Você Precisa Antes de Começar

- **Sua exportação de comentários do OpenWeb.** O OpenWeb expõe uma Export API (v4) que produz arquivos CSV compactados, no máximo 100.000 comentários por arquivo, com janelas de intervalo de datas de até um mês e links de download que expiram após uma semana (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Solicite todas as janelas que precisar e guarde os arquivos em um local seguro. Se seu contato do OpenWeb forneceu uma exportação CSV do Painel de Administração no passado, mantenha‑a também. O importador do FastComments lê o CSV do OpenWeb com colunas como `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` e `url`.
- **Seu Spot ID e a lista de IDs de post.** Cada `data-post-id` que você passa para o launcher se torna um URL ID do FastComments. Se seus IDs de post são IDs de artigos do CMS, observe como eles são gerados para que você possa emitir os mesmos valores no lado do FastComments.
- **Sua lista de usuários SSO.** Especificamente os valores `primary_key` e `user_name` que você registrou no OpenWeb. A autoria dos comentários é correspondida pelo nome de usuário durante a importação, portanto você deve passar os mesmos nomes de usuário no payload SSO do FastComments.
- **Sua lista de moderadores e funções.** Contas de admin, moderador e jornalista, e quais seções cada um modera.
- **Sua configuração de moderação.** Política de site inteiro (aprovar tudo, publicar e moderar, exigir aprovação), substituições por artigo, lista de palavras restritas, usuários silenciados e banidos.
- **CSS personalizado e configurações de tema.** Exporte tudo que você tem no Painel de Administração para que possa reconstruir na página de personalização do widget FastComments.
- **Onde o launcher está localizado em seus templates**, incluindo quaisquer páginas que executam Reactions, Topic Tracker, Spotlight, o Notification Bell ou um Standalone Ad sem uma Conversa.

### Migração Assistida por IA

FastComments fornece um [LLM Kit e servidor MCP para acelerar a migração](https://docs.fastcomments.com/guide-llm-kit.html).

### Como os IDs de Post do OpenWeb Mapeiam para os URL IDs do FastComments

FastComments vincula um thread de comentários a um `urlId`. Por padrão, o URL ID é a URL da página limpa, mas você pode defini‑lo para qualquer string, e isso é exatamente o que o importador do OpenWeb faz: ele lê a coluna `post_id` e a usa como URL ID do FastComments para cada comentário naquele artigo. Ele também armazena a coluna `url` como a URL de exibição, de modo que os links de moderação e os e‑mails de notificação apontem para a página correta.

Portanto, a regra para seus templates é: onde você passou `data-post-id="POST_ID"` e `data-post-url="ARTICLE_URL"` para o OpenWeb, passe `urlId: 'POST_ID'` e `url: 'ARTICLE_URL'` para o FastComments. Threads importados alinham‑se com os threads ao vivo sem redirecionamentos e sem reescrita de URL. Veja <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">a documentação de URL ID</a>.

Se você preferir identificar threads por URL no futuro em vez de por ID de post, importe primeiro e então use a ferramenta Migrate Comments em Manage Data para mover threads do ID de post para a URL em massa.

### O Mapa de Recursos

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Notas |
| --- | --- | --- |
| Conversa com atualizações em tempo real | Widget de comentários com comentários ao vivo | Ao vivo por padrão. Novos comentários ficam recolhidos atrás de um botão "Show N New Comments", ou aparecem instantaneamente com `showLiveRightAway`. |
| Curtidas e descurtidas em comentários | Votos positivos e negativos | A importação preserva `likes_count` e `dislikes_count`. Estilo de coração e "disable voting" são opções de configuração. |
| Reações (ícones ao nível do artigo) | Page Reacts | Conjunto configurável de ícones na página, lembrado por usuário. |
| Respostas e encadeamento | Respostas em thread, profundidade ilimitada | `maxReplyDepth` limita o aninhamento. |
| Ordenação: melhor, mais recente, mais antigo | Mais Relevante, Mais Recente Primeiro, Mais Antigo Primeiro | `defaultSortDirection` define o padrão por site ou por padrão de URL. |
| Perfis de usuário | Perfis de usuário | Avatar, biografia, emblemas, karma, atividade, DMs. Funciona para usuários SSO. |
| Emblema de Autor | `displayLabel`, `isAdmin`, `isModerator`, emblemas | Definido no payload SSO. Nenhuma chamada de consulta ao backend necessária. |
| Atualizações de Live Blog fixadas, comentários destacados | Fixar e Desfixar em qualquer comentário | Moderadores fixam a partir do widget ou painel. Um modelo de agente de IA fixa comentários mais votados. |
| Enquetes na Conversa | Enquetes em comentários | 2 a 10 opções, datas de encerramento, modos de privacidade, restrições de criador. |
| Formatos Ask Ask Me Anything | Sem produto dedicado | Executar como uma thread com o usuário SSO do autor rotulado e a pergunta fixada. |
| Live Blog | Sem equivalente 1:1 | Widget de Live Chat e comentários em modo chat existem. O live blogging editorial permanece no seu CMS. |
| Topic Tracker (seguir tópicos e autores) | Subscrições de página | Usuários seguem uma página, não um tópico ou autor. Sem seguimento entre artigos. |
| Sininho de Notificação | Sininho de notificação no widget | Respostas, menções, atividade de thread, votos, subscrições, emblemas, DMs. |
| Notificações por e‑mail | Notificações por e‑mail com modelos | Opt‑in por usuário via flags SSO. Modelos personalizados, remetente com marca. |
| Handshake SSO (codeA/codeB) | SSO Seguro (payload HMAC‑SHA256) | Sem chamada register‑user. Assine um payload no servidor, passe ao widget. |
| SSO de terceiros (Auth0, Gigya, Piano) | SSO Seguro após seu provedor autenticar | Mesmo payload. Seu backend o assina quando o usuário está logado. |
| Identidade (telas de registro do OpenWeb) | Login por link mágico, SSO Simples | Leitores fazem login com um link de e‑mail. Sem senhas. |
| Política de moderação por artigo | Regras de personalização por padrão de URL ID | Modo de aprovação, filtro de spam e mais variam por padrões `*/section/*`. |
| Moderação AI Aida | Classificadores de spam, filtros baseados em LLM, moderação de imagens, Agentes de IA | Agentes começam em modo de teste e podem exigir aprovação humana. |
| Palavras restritas | Lista negra de palavras personalizável por localidade | ~450 frases padrão, editáveis. |
| Silenciamento de usuário | Block User | Bloqueio por leitor a partir do menu de comentário. |
| Banimentos | Bans | Permanente, temporário, sombra, IP‑hash, consciente de alias. |
| Painel de Moderação | Dashboard Moderate Comments | Filtros, ações em massa com desfazer, grupos de moderação, e‑mails de resumo com aprovação em um clique. |
| Webhook de Notificação | Webhooks | Comentário criado, atualizado, excluído. Sem webhook de notificação por usuário. |
| Dashboard de Engajamento | Analytics | Usuários ao vivo online, páginas principais, carregamentos de página, comentários, votos, contas por dia. Sem relatório de receita de anúncios. |
| Anúncios na conversa, Standalone Ad | Nenhum | FastComments não exibe anúncios. Você mantém sua própria pilha de anúncios ao redor do widget. |
| Avaliações Sociais (classificações por estrelas) | Ratings and Reviews | Produto separado na mesma conta. |
| Popular na Comunidade | Widgets Recent Discussions e Top Pages | Recirculação impulsionada pela atividade de comentários. |
| Contador de Comentários | Widgets de contagem de comentários | Individual e em massa. |
| API de Exportação de Comentários | Exportação CSV, API, webhooks | Exportar do painel a qualquer momento. |
| Exportar e Excluir Dados de Usuário (GDPR/CCPA) | Exclusão de conta e dados, região UE | eu.fastcomments.com mantém dados na UE. DPA disponível. |
| SDKs Android, iOS, React Native | Android, iOS, React Native SDKs | UI nativo, SSO, atualizações ao vivo, encadeamento, ações de moderação. |
| Launcher, Virtual Pages, React SDK | Script de embed, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` e `destroy()` para SPAs. |

</div>

O resto desta seção percorre cada grupo em detalhe.

### Conversa, Votos e Reações

A Conversa do OpenWeb é um thread em tempo real. O widget de comentários do FastComments também é: comentários, edições, exclusões, votos e ações de moderação são enviados a todos que visualizam o thread (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Por padrão, novos comentários de outras pessoas aparecem atrás de um botão "Show 2 New Comments" para que a página não pule sob o leitor. Para eventos ao vivo, defina `showLiveRightAway` para que sejam renderizados imediatamente, e `newCommentsToBottom` se quiser que fluam para baixo como um chat.

Curtidas e descurtidas se tornam votos positivos e negativos. O importador mantém ambas as contagens por comentário. Se sua comunidade está acostumada a uma única curtida, altere o estilo de voto para corações na página de personalização do widget. A votação também pode ser desativada completamente.

Reações do OpenWeb é um widget separado com dois a quatro ícones rotulados no artigo (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). O equivalente no FastComments é Page Reacts: um conjunto configurável de imagens de reação anexadas ao widget de comentários, lembrado por página e por usuário (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). As contagens de reação não fazem parte da exportação de comentários do OpenWeb, portanto começam em zero.

A ordenação mapeia diretamente. Os valores `data-sort-by` do OpenWeb best, newest e oldest correspondem a Most Relevant, Newest First e Oldest First. Defina o padrão com `defaultSortDirection` (`MR`, `NF`, `OF`) no código ou em uma regra de personalização. Os leitores podem mudar no widget.

`data-read-only="true"` torna‑se `readonly: true`, que bloqueia novos comentários, votos, edições e exclusões. `data-post-staleness-days` não tem equivalente direto, mas uma regra de personalização pode aplicar `readonly` a um padrão de URL ID, e você também pode alterná‑lo a partir de seus templates com base na idade do artigo. `data-messages-count` é o tamanho da página, definido na página de personalização do widget entre 10 e 200 comentários.

### Respostas e Encadeamento

FastComments suporta aninhamento ilimitado por padrão; `maxReplyDepth` o limita (`1` gera uma estrutura plana de dois níveis). O CSV do OpenWeb inclui colunas `parent_id` e `parent_comment_id`. O importador lê `parent_comment_id` e reconstrói a árvore de respostas em profundidade total, de modo que uma resposta a outra resposta permanece aninhada sob seu pai direto, com autor, timestamp, votos, contagem de sinalizações e estado de aprovação intactos. As respostas são vinculadas mesmo quando aparecem antes de seu pai no arquivo, ou quando o pai foi importado de uma janela de exportação anterior. Uma resposta cujo pai está ausente de todas as exportações torna‑se um comentário de nível superior. O ID da mensagem do OpenWeb é armazenado em cada comentário, de modo que uma reimportação de um import plano mais antigo o encadeia no lugar.

### Perfis de Usuário e Emblemas

Usuários do FastComments, incluindo usuários SSO, recebem um perfil com avatar, nome de exibição, biografia, links sociais, emblemas, karma, contagem de comentários, um feed de atividade público e mensagens diretas (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Cada uma das superfícies de atividade, comentários de perfil e DM pode ser desativada por usuário no payload SSO ou globalmente na configuração.

O Emblema de Autor do OpenWeb requer que você chame `GET /sso/v1/user/{primary_key}` para o autor e coloque o ID retornado em `data-author-id`. No FastComments você define `displayLabel: 'Author'` (ou qualquer rótulo de até 100 caracteres) no payload SSO do usuário, e `isAdmin` ou `isModerator` para a equipe. O rótulo é exibido ao lado do nome em cada comentário. Para um sistema mais rico, configure emblemas em Personalizar, Emblemas: emblemas de imagem ou texto, concedidos automaticamente por limites (contagem de comentários, upvotes, comentários fixados, status de veterano, velocidade de resposta) ou manualmente, e atribuíveis a partir do payload SSO com `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Comentários Fixados, Enquetes e Q&A

Qualquer moderador pode Fixar ou Desfixar um comentário a partir do menu de comentário no widget ou no painel de moderação. Comentários fixados são enviados ao vivo para todos no thread. Se quiser isso automatizado, o recurso AI Agents inclui um modelo Top Comment Pinner que fixa um comentário de nível superior quando ele ultrapassa um limiar de votos (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

As Enquetes na Conversa do OpenWeb permitem que a equipe anexe uma enquete de 2 a 4 opções a um comentário de nível superior. As enquetes do FastComments também se anexam a um comentário, com 2 a 10 opções, data de encerramento opcional, privacidade dos resultados (anônima, apenas admins, todos) e modo "vote to see results". Você escolhe quem pode criar enquetes (desativado, admins e moderadores, todos) e se leitores anônimos podem votar. Enquetes também são expostas na API pública para criá‑las a partir do seu CMS.

OpenWeb executou formatos Ask Me Anything em sua plataforma. FastComments não tem um produto Q&A separado. A substituição prática é um thread normal em um URL ID dedicado: o usuário SSO do convidado carrega um `displayLabel`, você fixa o comentário de introdução, leitores perguntam em comentários de nível superior, o convidado responde dentro do thread, e as notificações de menção e resposta trazem as pessoas de volta. Defina `noNewRootComments` após o encerramento da janela para que apenas respostas continuem.

Community Spotlight (coletor de e‑mail, contador e cartões de redirecionamento do OpenWeb) não tem equivalente. O widget suporta HTML de cabeçalho personalizado acima da entrada de comentário via `headerHTML`, que cobre um call to action mas não um formulário de captura de e‑mail.

### Live Blog

Não há Live Blog no FastComments. O Live Blog do OpenWeb é um produto editorial: repórteres designados no Painel de Administração publicam atualizações com links incorporados, tweets e vídeos, e os leitores acompanham (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

O que o FastComments oferece para cobertura ao vivo é o lado do leitor: um widget de Live Chat (`embed-live-chat.min.js`) para chat em streaming, e o widget de comentários em modo chat (`showLiveRightAway` mais `newCommentsToBottom`) ao lado da sua cobertura ao vivo. Para as atualizações editoriais, os editores que migram do OpenWeb as mantêm em seu CMS ou em uma ferramenta de live blog dedicada e incorporam o FastComments abaixo para discussão. Incorporar mídia (YouTube, SoundCloud e outros) é suportado dentro dos comentários, de modo que as atualizações da equipe publicadas como comentários trazem mídia rica.

### Topic Tracker, Notificações e E‑mail

O Topic Tracker do OpenWeb permite que um leitor siga tópicos e autores extraídos dos metadados da página e seja notificado quando novos artigos correspondam (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). O FastComments não tem seguimento de tópico ou autor entre artigos. Os leitores se inscrevem em uma página a partir do sininho de notificação e recebem atualizações para esse thread, com a frequência escolhida por subscrição: a cada minuto, resumo horário ou resumo diário. Se o seguimento entre artigos for importante para seus números de retenção, avise‑nos, pois esse recurso está em nosso roadmap.

Todo o resto no Sininho de Notificação mapeia. O widget tem um sininho que fica vermelho com a contagem de não lidos e lista: respostas a você, respostas em um thread que você comentou, menções, upvotes nos seus comentários, atividade em páginas inscritas, concessões de emblemas, mensagens diretas (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Notificações no app são em tempo real via WebSocket. E‑mails de resposta e menção são enviados a cada minuto apenas para comentários aprovados.

Para usuários SSO, passe `optedInNotifications` e `optedInSubscriptionNotifications` no payload e o FastComments atualiza suas preferências na próxima carga de página. E‑mails precisam de um endereço de e‑mail no payload. Modelos de e‑mail são editáveis por tipo e por localidade em Personalizar, Modelos de E‑mail, e o envio a partir do seu próprio domínio com DKIM é suportado. Moderadores e admins recebem um resumo diário, semanal ou mensal com aprovação em um clique, respostas e links de spam.

O Webhook de Notificação do OpenWeb envia eventos de notificação por usuário (`replied-message`, `liked-message`, `topic-by-keyword` etc.) para seu endpoint. Os webhooks do FastComments cobrem o recurso de comentário: criado, atualizado, excluído, com quantos endpoints de assinatura você quiser (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Se você usava o webhook de notificação para alimentar seu próprio sistema de e‑mail, você reconstruirá essa lógica em eventos de comentário, ou deixará o FastComments enviar os e‑mails.

### SSO: De codeA/codeB para um Payload Assinado

O handshake do OpenWeb tem seis etapas: aguarde `spot-im-api-ready`, o OpenWeb gera `codeA`, seu cliente o envia ao seu backend, seu backend confirma o usuário e chama `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, o OpenWeb devolve `codeB`, e seu cliente devolve `codeB` ao OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). O logout chama `window.SPOTIM.logout()`.

FastComments Secure SSO não tem ida‑e‑volta e não requer novo endpoint do seu lado. Quando você renderiza a página para um usuário logado, seu backend serializa o usuário, codifica‑o em Base64 e assina‑o com HMAC‑SHA256 usando seu segredo de API. O widget envia o payload com suas requisições e o FastComments verifica a assinatura (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). Em Node:

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // same value you used as primary_key with OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // same user_name you registered with OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // optional, replaces the Author Badge lookup
        optedInNotifications: true
    };
    const userDataJSONBase64 = Buffer.from(JSON.stringify(user)).toString('base64');
    const timestamp = Date.now();
    const verificationHash = crypto
        .createHmac('sha256', process.env.FASTCOMMENTS_API_SECRET)
        .update(timestamp + userDataJSONBase64)
        .digest('hex');
    // Render into the page config:
    // sso: { userDataJSONBase64, verificationHash, timestamp,
    //        loginURL: 'https://example.com/login', logoutURL: 'https://example.com/logout' }
</div>

O timestamp está em milissegundos epoch e é rejeitado se for mais antigo que dois dias. Para um leitor desconectado, omita os três campos assinados e passe apenas `loginURL` (ou uma função `loginCallback`) e o widget exibirá um prompt de login em vez de um compositor. Exemplos completos em funcionamento em Node, Java e PHP estão no <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">repositório de exemplos de código</a>.

Usuários são criados na primeira carga de página. Você não registra em massa ninguém. Como o importador do OpenWeb combina autores de comentários por `user_name`, um usuário cujo payload SSO contém o mesmo `username` reivindica seus comentários importados na primeira vez que carrega um thread e pode editá‑los ou excluí‑los a partir daí. Também há uma API de usuário SSO se você quiser pré‑criar usuários.

Cada vez que o payload é enviado, o FastComments atualiza o registro do usuário a partir dele, de modo que um nome de exibição ou avatar alterado do seu lado se propaga na próxima visualização de página. Defina um campo como `null` para limpá‑lo.

Se você usou o SSO de terceiros do OpenWeb com Auth0, Gigya ou Piano via `window.SPOTIM.startSSOForProvider`, o fluxo do FastComments é o mesmo descrito acima: assim que seu provedor autenticar o usuário, seu backend cria e assina o payload. Não há integração específica de provedor para configurar no lado do FastComments.

Existem duas outras opções. Simple SSO passa o objeto usuário sem assinatura do cliente, para plataformas sem backend, e marca a atividade como verificada quando um e‑mail está presente (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 assina sua equipe no próprio painel do FastComments através do Okta, Azure AD ou ADFS, com mapeamento de funções, e está disponível em planos Enterprise (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderação

A API de Política de Moderação por artigo do OpenWeb tem quatro valores: `spot_policy`, `approve_all`, `publish_and_moderate` e `require_approval`. O FastComments configura os mesmos comportamentos em Configurações de Moderação: aprovação automática ativada ou desativada, aprovação necessária apenas para o primeiro comentário de um usuário, e auto‑aprovação apenas de comentários verificados (logados ou SSO). As regras se aplicam a todo o site ou a um padrão de URL ID como `*/politics/*`, que é como você reproduz a política por seção. Cada comentário, aprovado ou não, aparece no dashboard Moderate Comments, então o modelo publicar‑então‑revisar é a visualização padrão lá (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

A importação transporta o estado de moderação. O `message_status` do OpenWeb de `approved` importa como aprovado e revisado; `rejected` importa como spam e revisado; qualquer outro importa como não aprovado e não revisado, aparecendo na sua fila de moderação. `reports_count` torna‑se a contagem de sinalizações do comentário.

A moderação automatizada no FastComments é em camadas ao invés de um único sistema como Aida:

- Um classificador de spam, continuamente treinado, disponível como modelo compartilhado entre todos os locatários ou isolado para seu locatário, com um fator de confiança que relaxa a filtragem para usuários de longa data ou frequentemente fixados.
- Uma verificação opcional de spam por LLM na cobrança Flex (modelos de peso aberto como GLM‑5.3 estão disponíveis)
- Moderação de conteúdo de imagem em baixa, média ou alta sensibilidade para imagens enviadas.
- Uma lista negra de palavras localizada com cerca de 450 frases padrão, editável, que mascara correspondências com asteriscos. É onde suas palavras restritas do OpenWeb vão.
- Limiares de sinalização que ocultam automaticamente um comentário após N denúncias.
- Prevenção de mensagens repetidas e quase duplicadas, sempre ativada.
- Agentes de IA: agentes orientados a eventos com uma lista explícita de ferramentas permitidas (marcar spam, aprovar, bloquear, fixar, avisar por DM, banir, conceder emblema, responder). Cada agente começa em modo de teste, ferramentas sensíveis podem ser condicionadas à aprovação humana, e cada ação é registrada com justificativa e pontuação de confiança.

A API de Silenciamento de Usuário do OpenWeb permite que um leitor SSO silencie outro. O equivalente no FastComments é Block User no menu de comentário, disponível para qualquer leitor logado. Banimentos são uma ação de moderador: permanente ou por duração definida, opcionalmente um banimento sombra (o usuário vê seu comentário postado, mas ninguém mais vê), opcionalmente por IP‑hash, com plus‑aliases de um e‑mail tratado como um endereço. A lista de usuários banidos pode ser pesquisada por e‑mail, nome, moderador e o comentário que disparou o banimento.

O dashboard Moderate Comments suporta filtros (necessitando revisão, necessitando aprovação, spam, sinalizado, de usuários banidos) e busca por texto, ações em massa com desfazer e pausar, "select all matching" para filas muito grandes, grupos de moderação para que sua equipe de esportes veja apenas threads esportivos, logs por comentário que mostram por que um e‑mail foi ou não enviado, e links filtrados compartilháveis. Moderadores têm apenas o dashboard; eles não podem mudar configurações ou importar dados.

### Analytics

FastComments Analytics mostra usuários online agora em seus sites e por página, páginas principais por comentários ou por leitores ao vivo, e séries diárias para carregamentos de página, comentários, votos e contas criadas (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Estatísticas de moderador são separadas. As contagens são quase em tempo real, com atraso de no máximo um minuto, e cada carregamento de página é contado ao invés de amostrado.

O que você não encontrará é qualquer coisa sobre preenchimento de anúncios, CPM ou receita, porque não há anúncios. Se o dashboard do OpenWeb era sua fonte para relatórios de engajamento‑para‑receita, esse relatório passa para sua própria pilha de anúncios.

### Monetização

OpenWeb coloca anúncios dentro e ao redor da Conversa e oferece uma unidade Standalone Ad, com campanhas configuradas através do seu contato OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments não exibe anúncios no widget, não tem compartilhamento de receita, e não carrega scripts de anúncios ou rastreamento de terceiros. O widget é um iframe que você insere; os espaços de anúncios acima e abaixo dele são seus e rodam através do que você já usa.

O trade‑off é explícito: você perde o que o OpenWeb lhe pagava, e ganha um custo fixo, previsível e um widget que não adiciona solicitações de anúncios à sua página. A marca é removida nos planos Flex e Pro, e a marca branca está disponível nos planos Pro e Enterprise.

### Exportação de Dados e Privacidade

Todas as exportações de dados de comentários do painel FastComments como CSV a qualquer momento, com datas no formato UTC ISO, e os mesmos dados estão disponíveis via API. Webhooks cobrem sincronização contínua. Arquivos de importação são deletados do FastComments assim que a importação termina.

Para GDPR e CCPA, o OpenWeb fornece uma API de exportação e exclusão onde os comentários de usuários deletados permanecem anexados a uma conta de convidado aleatória (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments suporta solicitações de exportação e exclusão de dados, oferece um Data Processing Agreement, e executa uma implantação separada na UE em <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> com dados replicados apenas dentro dos pontos de presença da UE. Crie sua conta lá se seus leitores estiverem na Europa. Na região UE, banimentos de agentes de IA sempre exigem aprovação humana para atender ao Artigo 17 do DSA.

Os dados de comentários na implantação global são replicados entre regiões, incluindo um nó em Cingapura, e o widget é servido a partir do DNS e CDN próprios do FastComments. O script embed tem cerca de 35 kb comprimido na transmissão.

### SDKs Mobile

OpenWeb disponibiliza SDKs para Android, iOS e React Native com Conversation, Articles, Authentication, Notifications, Reactions e In Conversation Polls. FastComments disponibiliza bibliotecas nativas <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> e <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> com comentários em thread, atualizações ao vivo via WebSocket, SSO Seguro, votação, menções, upload de imagens, ações de moderação (sinalizar, fixar, bloquear, bloquear), temas, modo de chat ao vivo e componente de feed social. A região UE é uma flag de configuração. Não há SDK de anúncios separado porque não há anúncios.

### Integração de Embed e SPA

O launcher e contêiner do OpenWeb:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

O equivalente no FastComments:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID',
            urlId: 'POST_ID',        // was data-post-id
            url: 'ARTICLE_URL',      // was data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

Seu tenant ID está na <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">página de credenciais</a> assim que você tem uma conta. `data-article-tags` não tem equivalente, já que não há seguimento por tópico; hashtags dentro de comentários são um recurso diferente.

Para scroll infinito e apps de página única, a abordagem Virtual Pages do OpenWeb é um contêiner por artigo. No FastComments você chama `FastCommentsUI(element, config)` por thread e depois `instance.update(newConfig)` para trocar o URL ID ou `instance.destroy()` para removê‑lo (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). As bibliotecas React, Vue, Angular e SolidJS lidam com isso quando a prop de config muda. Callbacks de ciclo de vida (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) substituem os eventos DOM `spot-im-*` que você escutava.

Contagens de comentários em páginas de índice usam o widget de contagem de comentários, individual ou em massa. Para SEO, os comentários são renderizados diretamente na página para rastreadores de mecanismos de busca ao invés de dentro do iframe, então não há chamada de API SEO para configurar.

### Corte Passo a Passo

**1. Crie a conta e configure o básico.** Inscreva‑se em fastcomments.com ou eu.fastcomments.com. Defina suas configurações de moderação, lista negra de palavras, estilo de voto, ordenação padrão e CSS personalizado na página de personalização do widget. Adicione moderadores e grupos de moderação. Se você tem muitos usuários admin, o suporte importa para você.

**2. Execute primeira importação.** Acesse <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, escolha OpenWeb (.csv) e faça upload. A importação roda como um job em background; a página mostra contagens de linhas e status, e você recebe um e‑mail quando termina (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Cada comentário mantém seu ID de mensagem OpenWeb como ID externo, então reexecutar a importação atualiza os comentários existentes ao invés de criar duplicatas.

**3. Verifique as contagens.** Compare a contagem de linhas do job com sua exportação. Abra alguns URL IDs de alto tráfego no dashboard de moderação e faça verificações pontuais de autores, datas, totais de votos e estados de aprovação. Confirme que comentários rejeitados aparecem como spam e os pendentes ficam na fila.

**4. Construa o payload SSO.** Implemente o código de assinatura acima no seu backend, usando o mesmo `id` e `username` que usou com OpenWeb. Teste com uma conta de equipe em uma página de staging: comentários importados do usuário aparecem como dele, e editar e excluir aparecem no menu de comentário dele.

**5. Troque o embed em um template de staging.** Substitua o launcher e o contêiner pelo snippet FastComments, mapeando `data-post-id` para `urlId` e `data-post-url` para `url`. Remova `window.SPOTIM.logout()` e os listeners `spot-im-*`, ou mapeie‑os para os callbacks. Aplique seu CSS em uma regra de personalização ao invés de em código para que seja testado em cada release do FastComments.

**6. Execute em paralelo.** Coloque FastComments em uma seção ou em uma porcentagem de artigos enquanto o OpenWeb permanece no restante. Nada do lado OpenWeb precisa mudar. Observe a fila de moderação e a página de analytics. Leitores comentando em páginas FastComments durante essa janela não estão na sua exportação OpenWeb, então planeje a importação final antes que eles comecem, não depois.

**7. CSP e DNS.** Se você usa uma Content‑Security‑Policy, permita `cdn.fastcomments.com` e `fastcomments.com` (ou `eu.fastcomments.com`) para `script-src`, `frame-src` e `connect-src`, e remova as entradas `spot.im` e `openweb.com` assim que o launcher for removido. Nada muda no seu próprio DNS. Não são necessários redirects porque os URL IDs correspondem.

**8. Importação final e lançamento.** Extraia mais uma exportação OpenWeb cobrindo a janela de execução paralela, faça upload (re‑importação é segura), então implante a mudança de template em todas as páginas e remova o launcher, Reactions, Topic Tracker, Spotlight, sininho e contêineres de anúncios.

**9. Checklist de go‑live.**

- Comentários ao vivo visíveis em um artigo de produção a partir de dois navegadores.
- Login SSO, logout e um comentário sob uma conta real de assinante.
- Moderadores recebem o resumo e podem aprovar a partir dele.
- E‑mails de resposta e menção chegam e linkam para a página correta.
- Lista de banimentos e lista negra de palavras preenchidas.
- Page Reacts e contagens de comentários renderizando onde antes estavam Reactions e o contador.
- Relatórios CSP limpos.
- Última comparação de contagem de comentários entre sua exportação e o dashboard.

### O Que Você Perde e O Que É Diferente

Sendo direto sobre as lacunas:

- **Live Blog.** Sem equivalente. Mantenha no seu CMS ou em uma ferramenta de live blogging e coloque FastComments abaixo.
- **Topic Tracker.** Sem seguimento de tópico ou autor entre artigos. Apenas subscrições de página.
- **Community Spotlight.** Sem produto de cartão CTA. `headerHTML` fornece uma mensagem acima do compositor, não um captura de e‑mail.
- **Receita de anúncios.** Nenhuma. O widget é livre de anúncios por design.
- **Webhook de notificação.** Webhooks são de eventos de comentário, não de eventos de notificação por usuário.
- **Histórico de reações.** Contagens de reações ao nível do artigo não estão na exportação de comentários e começam do zero. Podemos às vezes raspar isso do seu site.
- **Histórico de enquetes.** Definições de enquetes e votos não estão na exportação de comentários; o texto da enquete é importado, a enquete não. Podemos às vezes raspar isso do seu site.
- **Modelo de login.** Leitores sem SSO fazem login por link mágico ao invés de senha ou botão de login social por padrão.
- **Equipe humana de moderação.** OpenWeb inclui uma equipe de moderação com Aida. FastComments fornece ferramentas, classificadores e agentes; os humanos são seus.

O que você ganha, no mesmo espírito: um widget que adiciona um pequeno script e nenhuma solicitação de anúncios, moderação que uma pessoa pode operar para um site grande com ações em massa e agentes, SSO que é uma função de assinatura ao invés de um protocolo, e um fornecedor que não está sob supervisão judicial.

### Cronograma e a Oferta de Importação Gratuita

Planeje de uma a duas semanas para um editor com uma integração SSO e algumas centenas de milhares de comentários: um ou dois dias na exportação e primeira importação, alguns dias em SSO e templates, uma janela de execução paralela, então a importação final e troca. A plataforma já suporta essa escala: United Cloud opera mais de dez portais e milhões de comentários no FastComments, e itsfoss.com migrou um histórico de 88 000 comentários de outro provedor através do mesmo importador self‑service.

FastComments importa sua exportação CSV do OpenWeb gratuitamente, ajuda você a rodar OpenWeb e FastComments em paralelo durante o corte, e auxilia na própria migração, incluindo questões de encadeamento e correspondência de usuários. Planos Enterprise incluem SLA de 99,99 % e suporte com respostas dentro de uma hora durante o horário comercial. Preço Flex baseado em uso está disponível para sites que desejam começar sem contrato.

<a href="https://fastcomments.com/contact-us">Escreva para nós</a> com o tamanho da sua exportação e sua configuração SSO e retornaremos com um plano.

### Em Conclusão

Faça sua exportação hoje. Lembre‑se: os mesmos IDs de post se tornam URL IDs, o estado de moderação é mantido, e o embed é uma troca direta. Os pontos onde o FastComments difere estão listados acima para que você possa decidir com os fatos em mãos. :)

Saúde!{{/isPost}}

---