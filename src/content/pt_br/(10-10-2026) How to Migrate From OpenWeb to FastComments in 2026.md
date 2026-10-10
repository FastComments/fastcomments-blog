[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Como Migrar do OpenWeb para FastComments em 2026[/postlink]

{{#unless isPost}}
Um guia recurso por recurso para editores que estão migrando do OpenWeb (anteriormente Spot.IM): o que tem correspondência 1:1, o que é diferente, como funciona a importação CSV, como a troca de SSO muda, e um plano de transição passo a passo.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

Este guia é para líderes de produto e engenharia e gerentes de comunidade que utilizam o OpenWeb hoje e precisam de um plano de migração. Ele percorre cada superfície do OpenWeb, nomeia o equivalente no FastComments e indica claramente onde não há correspondência 1:1.

### Por Que Agora

Em 30 de setembro de 2026, o Tribunal Distrital de Tel Aviv ordenou a nomeação de um receptor temporário sobre o OpenWeb a pedido de seu credor, Mars Growth Capital, que detém um gravame de primeira prioridade sobre os ativos e contas da empresa e está buscando executá‑lo contra os ativos israelenses, contas bancárias e propriedade intelectual do OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, 30 de set.</a>). Um administrador temporário, Adv. Ehud Gindes, foi nomeado no dia seguinte (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, 4 de out.</a>). No início de 2026, a Microsoft, um dos maiores clientes do OpenWeb, encerrou seu contrato e reteve pagamentos devido a uma disputa de tráfego que o OpenWeb rejeita (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, 28 de set.</a>).

O OpenWeb afirma que a plataforma continua operando. Supervisão judicial, um credor executando gravames sobre a IP da qual seu widget de comentários depende, e um administrador cujo trabalho é preservar o valor dos ativos não são condições que um editor deseja em uma superfície de engajamento central. Se ainda não fez uma exportação completa de dados, faça isso agora, antes de qualquer outra coisa neste guia.

### O Que Você Precisa Antes de Começar

Reúna isso antes de tocar em qualquer código:

- **Sua exportação de comentários do OpenWeb.** O OpenWeb expõe uma Export API (v4) que gera arquivos CSV compactados, no máximo 100 000 comentários por arquivo, com janelas de intervalo de data de até um mês e links de download que expiram após uma semana (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">documentação do OpenWeb</a>). Solicite todas as janelas que precisar e guarde os arquivos em local seguro. Se seu contato no OpenWeb já forneceu uma exportação CSV pelo Painel de Admin, mantenha-a também. O importador do FastComments lê o CSV do OpenWeb com colunas como `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` e `url`.
- **Seu Spot ID e a lista de IDs de posts.** Cada `data-post-id` que você passa ao lançador torna‑se um ID de URL do FastComments. Se seus IDs de post são IDs de artigos do CMS, observe como são gerados para que você possa emitir os mesmos valores no FastComments.
- **Sua lista de usuários SSO.** Especificamente os valores `primary_key` e `user_name` que você registrou no OpenWeb. A autoria dos comentários é correspondida pelo nome de usuário durante a importação, portanto você deve passar os mesmos nomes de usuário na carga útil SSO do FastComments.
- **Sua lista de moderadores e papéis.** Contas de admin, moderador e jornalista, e quais seções cada um modera.
- **Sua configuração de moderação.** Política de site (aprovar tudo, publicar e moderar, exigir aprovação), substituições por artigo, lista de palavras restritas, usuários silenciados e banidos.
- **CSS customizado e configurações de tema.** Exporte tudo que tem no Painel de Admin para poder reconstruir na página de personalização do widget FastComments.
- **Onde o lançador vive em seus templates**, incluindo quaisquer páginas que executam Reactions, Topic Tracker, Spotlight, o Sino de Notificação ou um Anúncio Autônomo sem Conversa.

### Como os IDs de Post do OpenWeb Mapeiam para IDs de URL do FastComments

O FastComments associa um thread de comentários a um `urlId`. Por padrão, o ID de URL é a URL da página limpa, mas você pode defini‑lo para qualquer string, e é exatamente isso que o importador do OpenWeb faz: ele lê a coluna `post_id` e a usa como o ID de URL do FastComments para cada comentário daquele artigo. Ele também armazena a coluna `url` como a URL de exibição, de modo que links de moderação e e‑mails de notificação apontem para a página correta.

Portanto, a regra para seus templates é: onde você passava `data-post-id="POST_ID"` e `data-post-url="ARTICLE_URL"` para o OpenWeb, passe `urlId: 'POST_ID'` e `url: 'ARTICLE_URL'` para o FastComments. Threads importados alinham‑se com threads ao vivo sem redirecionamentos nem reescrita de URL. Veja <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">a documentação de ID de URL</a>.

Se preferir chavesar threads por URL em vez de por ID de post, importe primeiro e depois use a ferramenta Migrate Comments em Manage Data para mover threads do ID de post para a URL em massa.

### O Mapa de Recursos

| OpenWeb | FastComments | Observações |
| --- | --- | --- |
| Conversa com atualizações em tempo real | Widget de comentários com comentários ao vivo | Ao vivo por padrão. Novos comentários ficam atrás de um botão “Mostrar N Novos Comentários”, ou aparecem instantaneamente com `showLiveRightAway`. |
| Curtidas e descurtidas em comentários | Votos positivos e negativos | A importação preserva `likes_count` e `dislikes_count`. Estilo de coração e “desativar votação” são opções de configuração. |
| Reações (ícones ao nível do artigo) | Page Reacts | Conjunto de ícones configurável na página, lembrado por usuário. |
| Respostas e encadeamento | Respostas encadeadas, profundidade ilimitada | `maxReplyDepth` limita o aninhamento. Veja a nota de importação sobre threads abaixo. |
| Ordenação: melhor, mais novo, mais antigo | Mais Relevante, Mais Novo Primeiro, Mais Antigo Primeiro | `defaultSortDirection` define o padrão por site ou por padrão de URL. |
| Perfis de usuário | Perfis de usuário | Avatar, bio, badges, karma, atividade, DMs. Funciona para usuários SSO. |
| Badge de Autor | `displayLabel`, `isAdmin`, `isModerator`, badges | Definido na carga útil SSO. Não requer chamada de busca no backend. |
| Atualizações de Live Blog fixas, comentários destacados | Fixar e Desfixar em qualquer comentário | Moderadores fixam pelo widget ou painel. Um template de agente IA fixa comentários mais votados. |
| Enquetes na Conversa | Enquetes em comentários | 2 a 10 opções, datas de fechamento, modos de privacidade, restrições ao criador. |
| Formatos Ask Me Anything | Nenhum produto dedicado | Executado como thread com usuário SSO do autor rotulado e pergunta fixada. |
| Live Blog | Nenhum equivalente 1:1 | Widget de Live Chat e comentários em modo chat existem. Blog editorial ao vivo permanece no seu CMS. |
| Topic Tracker (seguir tópicos e autores) | Assinaturas de página | Usuários seguem uma página, não um tópico ou autor. Sem seguimento entre artigos. |
| Sino de Notificação | Sino de notificação no widget | Respostas, menções, atividade de thread, votos, assinaturas, badges, DMs. |
| Notificações por e‑mail | Notificações por e‑mail com templates | Opt‑in por usuário via flags SSO. Templates customizáveis, remetente com marca. |
| Troca de SSO (codeA/codeB) | SSO Seguro (payload HMAC‑SHA256) | Sem chamada register‑user. Assine um payload no servidor e passe ao widget. |
| SSO de terceiros (Auth0, Gigya, Piano) | SSO Seguro após seu provedor autenticar | Mesmo payload. Seu backend assina após login do usuário. |
| Identidade (telas de registro OpenWeb) | Login por link mágico, SSO Simples | Leitores entram com link por e‑mail. Sem senhas. |
| Política de moderação por artigo | Regras de customização por padrão de ID de URL | Modo de aprovação, filtro de spam e mais variam por padrões `*/section/*`. |
| Moderação AI Aida | Classificadores de spam, opção ChatGPT 4, moderação de imagem, Agentes AI | Agentes iniciam em modo teste e podem exigir aprovação humana. |
| Palavras restritas | Lista negra de palavras | ~450 frases padrão, editáveis. |
| Silenciamento de usuário | Bloquear Usuário | Bloqueio por leitor no menu de comentário. |
| Banimentos | Banimentos | Permanente, temporário, sombra, IP‑hash, plus‑alias. |
| Painel de Moderação | Dashboard Moderate Comments | Filtros, ações em massa com desfazer, grupos de moderação, e‑mails resumidos com aprovação em um clique. |
| Webhook de Notificação | Webhooks | Comentário criado, atualizado, excluído. Não há webhook de notificação por usuário. |
| Dashboard de Engajamento | Analytics | Usuários ao vivo, páginas top, carregamentos, comentários, votos, contas por dia. Sem relatório de receita de anúncios. |
| Anúncios na conversa, Anúncio Autônomo | Nenhum | FastComments não exibe anúncios. Você mantém sua própria pilha de anúncios ao redor do widget. |
| Avaliações Sociais (classificações por estrelas) | Ratings and Reviews | Produto separado na mesma conta. |
| Popular na Comunidade | Widgets Recent Discussions e Top Pages | Recirculação impulsionada por atividade de comentários. |
| Contador de Comentários | Widgets de contagem de comentários | Único e em massa. |
| API de Exportação de Comentários | Exportação CSV, API, webhooks | Exporte do dashboard a qualquer momento. |
| Exportar e Excluir Dados de Usuário (GDPR/CCPA) | Exclusão de conta e dados, região EU | eu.fastcomments.com mantém dados na UE. DPA disponível. |
| SDKs Android, iOS, React Native | SDKs Android, iOS, React Native | UI nativa, SSO, atualizações ao vivo, encadeamento, ações de moderação. |
| Lançador, Páginas Virtuais, SDK React | Script de embed, `fcConfigs`, bibliotecas React, Vue, Angular, SolidJS | `update()` e `destroy()` para SPAs. |

A continuação desta seção detalha cada grupo.

### Conversa, Votos e Reações

A Conversa do OpenWeb é um thread em tempo real. O widget de comentários do FastComments também é: comentários, edições, exclusões, votos e ações de moderação são enviados a todos que visualizam o thread (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Por padrão, novos comentários de outras pessoas ficam atrás de um botão “Mostrar 2 Novos Comentários” para que a página não pule sob o leitor. Para eventos ao vivo, defina `showLiveRightAway` para renderizar imediatamente, e `newCommentsToBottom` se quiser que fluam para baixo como um chat.

Curtidas e descurtidas tornam‑se votos positivos e negativos. O importador mantém ambas as contagens por comentário. Se sua comunidade está acostumada a uma única curtida, altere o estilo de voto para corações na página de personalização do widget. A votação também pode ser desativada totalmente.

Reações do OpenWeb são um widget separado com dois a quatro ícones rotulados no artigo (<a href="https://developers.openweb.com/docs/reactions" target="_blank">docs OpenWeb</a>). O equivalente no FastComments é Page Reacts: um conjunto configurável de imagens de reação anexado ao widget de comentários, lembrado por página e por usuário (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Contagens de reação não fazem parte da exportação de comentários do OpenWeb, portanto começam em zero.

A ordenação mapeia diretamente. Os valores `data-sort-by` do OpenWeb (best, newest, oldest) correspondem a Mais Relevante, Mais Novo Primeiro e Mais Antigo Primeiro. Defina o padrão com `defaultSortDirection` (`MR`, `NF`, `OF`) no código ou em uma regra de personalização. Os leitores podem mudar no widget.

`data-read-only="true"` torna‑se `readonly: true`, que bloqueia novos comentários, votos, edições e exclusões. `data-post-staleness-days` não tem equivalente direto, mas uma regra de personalização pode aplicar `readonly` a um padrão de ID de URL, e você também pode alterná‑lo a partir dos templates com base na idade do artigo. `data-messages-count` define o tamanho da página, configurável na página de personalização do widget de 10 a 200 comentários.

### Respostas e Encadeamento

O FastComments suporta aninhamento ilimitado por padrão; `maxReplyDepth` limita isso (`1` gera estrutura plana de dois níveis). O CSV do OpenWeb inclui colunas `parent_id` e `parent_comment_id`. O importador atual importa cada linha como um comentário de nível superior na sua página, em ordem cronológica, preservando autor, timestamp, votos, contagem de sinalizações e estado de aprovação. Ele **não** reconstrói a árvore pai‑filho. Se seus threads são muito de respostas, informe‑nos ao enviar a exportação e trataremos do encadeamento durante a importação ao invés de deixá‑lo achatado.

### Perfis de Usuário e Badges

Usuários do FastComments, incluindo usuários SSO, recebem um perfil com avatar, nome de exibição, bio, links sociais, badges, karma, contagem de comentários, feed público de atividade e mensagens diretas (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Cada uma das superfícies de atividade, comentários de perfil e DMs pode ser desativada por usuário na carga útil SSO ou globalmente na configuração.

O Badge de Autor do OpenWeb exige chamar `GET /sso/v1/user/{primary_key}` e colocar o ID retornado em `data-author-id`. No FastComments você define `displayLabel: 'Author'` (ou qualquer rótulo de até 100 caracteres) na carga útil SSO do usuário, e `isAdmin` ou `isModerator` para staff. O rótulo aparece ao lado do nome em cada comentário. Para um sistema mais rico, configure badges em Customize → Badges: imagens ou textos, concedidos automaticamente por limites (contagem de comentários, votos positivos, comentários fixados, status de veterano, velocidade de resposta) ou manualmente, e atribuíveis via carga útil SSO com `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Comentários Fixados, Enquetes e Q&A

Qualquer moderador pode Fixar ou Desfixar um comentário pelo menu de comentário no widget ou no painel de moderação. Comentários fixados são enviados ao vivo para todos no thread. Se quiser automatizar, o recurso de Agentes AI inclui um template Top Comment Pinner que fixa um comentário de nível superior ao atingir um limite de votos (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

As Enquetes na Conversa do OpenWeb permitem que a equipe anexe uma enquete de 2 a 4 opções a um comentário de nível superior. As enquetes do FastComments também se anexam a um comentário, com 2 a 10 opções, data de fechamento opcional, privacidade dos resultados (anônima, apenas admins, todos) e modo “votar para ver resultados”. Você escolhe quem pode criar enquetes (desativado, admins e moderadores, todos) e se leitores anônimos podem votar. As enquetes também são expostas na API pública para criação a partir do seu CMS.

O OpenWeb oferecia formatos Ask Me Anything. O FastComments não tem um produto Q&A dedicado. A substituição prática é um thread normal em um URL ID dedicado: o usuário SSO do convidado carrega um `displayLabel`, você fixa o comentário de introdução, leitores perguntam em comentários de nível superior, o convidado responde dentro do thread, e menções/notificações trazem as pessoas de volta. Defina `noNewRootComments` após o período de perguntas fechar para que apenas respostas continuem.

O Community Spotlight (coletor de e‑mail, contador e cartões de redirecionamento do OpenWeb) não tem equivalente. O widget suporta HTML de cabeçalho customizado acima da caixa de comentário via `headerHTML`, que cobre um CTA mas não um formulário de captura de e‑mail.

### Live Blog

Não há Live Blog no FastComments. O Live Blog do OpenWeb é um produto editorial: repórteres designados no Painel de Admin publicam atualizações com links incorporados, tweets e vídeos, e leitores acompanham (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">docs OpenWeb</a>).

O que o FastComments oferece para cobertura ao vivo é o lado do leitor: um widget de Live Chat (`embed-live-chat.min.js`) para chat em streaming, e o widget de comentários em modo chat (`showLiveRightAway` + `newCommentsToBottom`) ao lado da sua cobertura ao vivo. Para as atualizações editoriais, editores que migram do OpenWeb mantêm-nas no CMS ou em uma ferramenta de live blog dedicada e incorporam o FastComments abaixo para discussão. Embeds de mídia (YouTube, SoundCloud etc.) são suportados dentro dos comentários, de modo que atualizações da equipe postadas como comentários carregam mídia rica.

### Topic Tracker, Notificações e E‑mail

O Topic Tracker do OpenWeb permite que um leitor siga tópicos e autores extraídos dos metadados da página e receba notificações quando novos artigos correspondentes são publicados (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">docs OpenWeb</a>). O FastComments não tem seguimento de tópico ou autor entre artigos. Os leitores assinam uma página pelo sino de notificação e recebem atualizações desse thread, com frequência escolhida por assinatura: a cada minuto, resumo horário ou diário. Se o seguimento entre artigos for crucial para sua retenção, este é um recurso que você perde.

Todo o resto no Sino de Notificação mapeia. O widget tem um sino que fica vermelho com a contagem de não lidos e lista: respostas a você, respostas em um thread que você comentou, menções, votos positivos nos seus comentários, atividade em páginas assinadas, badges concedidos e DMs (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Notificações in‑app são em tempo real via WebSocket. E‑mails de resposta e menção são enviados a cada minuto apenas para comentários aprovados.

Para usuários SSO, passe `optedInNotifications` e `optedInSubscriptionNotifications` na carga útil e o FastComments atualiza as preferências no próximo carregamento da página. E‑mails precisam de endereço na carga útil. Templates de e‑mail são editáveis por tipo e por localidade em Customize → Email Templates, e o envio a partir do seu próprio domínio com DKIM é suportado. Moderadores e admins recebem um resumo diário, semanal ou mensal com aprovação em um clique, respostas e links de spam.

O Webhook de Notificação do OpenWeb posta eventos de notificação por usuário (`replied-message`, `liked-message`, `topic-by-keyword` etc.) no seu endpoint. Os webhooks do FastComments cobrem o recurso de comentário: criado, atualizado e removido, com quantos endpoints de assinatura quiser (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Se você usava o webhook de notificação para alimentar seu próprio sistema de e‑mail, reconstruirá essa lógica sobre eventos de comentário, ou deixará o FastComments enviar os e‑mails.

### SSO: De codeA/codeB para um Payload Assinado

A troca de mão do OpenWeb tem seis passos: aguarde `spot-im-api-ready`, o OpenWeb gera `codeA`, seu cliente o envia ao backend, seu backend confirma o usuário e chama `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, o OpenWeb devolve `codeB`, e seu cliente devolve `codeB` ao OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">docs OpenWeb</a>). Logout chama `window.SPOTIM.logout()`.

O SSO Seguro do FastComments não tem ida‑e‑volta nem novo endpoint. Quando você renderiza a página para um usuário logado, seu backend serializa o usuário, codifica em Base64 e assina com HMAC‑SHA256 usando seu segredo de API. O widget envia o payload nas requisições e o FastComments verifica a assinatura (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). Em Node:

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // mesmo valor usado como primary_key no OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // mesmo user_name registrado no OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // opcional, substitui a busca de Author Badge
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

O timestamp está em milissegundos epoch e é rejeitado se for mais antigo que dois dias. Para um leitor deslogado, omita os três campos assinados e passe apenas `loginURL` (ou uma função `loginCallback`) e o widget mostrará um prompt de login ao invés de um compositor. Exemplos completos em Node, Java e PHP estão no <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">repositório de exemplos de código</a>.

Usuários são criados no primeiro carregamento da página. Você não registra em massa ninguém. Como o importador do OpenWeb corresponde autores de comentário por `user_name`, um usuário cujo payload SSO contém o mesmo `username` reivindica seus comentários importados na primeira vez que carrega um thread e pode editá‑los ou excluí‑los a partir daí. Existe também uma API de usuário SSO caso queira pré‑criar usuários.

Cada vez que o payload é enviado, o FastComments atualiza o registro do usuário a partir dele, de modo que nome de exibição ou avatar alterados no seu lado se propagam no próximo carregamento da página. Defina um campo como `null` para limpá‑lo.

Se você usou o SSO de terceiros do OpenWeb com Auth0, Gigya ou Piano via `window.SPOTIM.startSSOForProvider`, o fluxo do FastComments é o mesmo: depois que seu provedor autentica o usuário, seu backend cria e assina o payload. Não há integração específica de provedor a configurar no FastComments.

Outras duas opções existem. SSO Simples passa o objeto usuário sem assinatura do cliente, para plataformas sem backend, e marca a atividade como verificada quando há e‑mail (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 assina seu staff no próprio dashboard FastComments via Okta, Azure AD ou ADFS, com mapeamento de papéis, e está disponível em planos Enterprise (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderação

A API de Política de Moderação por artigo do OpenWeb tem quatro valores: `spot_policy`, `approve_all`, `publish_and_moderate` e `require_approval`. O FastComments configura os mesmos comportamentos em Configurações de Moderação: aprovação automática ligada ou desligada, aprovação requerida apenas para o primeiro comentário de um usuário, e auto‑aprovação apenas para comentários verificados (logados ou SSO). Regras aplicam‑se a nível de site ou a um padrão de ID de URL como `*/politics/*`, que é como você reproduz política por seção. Todo comentário, aprovado ou não, chega ao dashboard Moderate Comments, de modo que o modelo publicar‑então‑revisar é a visualização padrão lá (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

A importação traz o estado de moderação. `message_status` do OpenWeb com valor `approved` importa como aprovado e revisado; `rejected` importa como spam e revisado; qualquer outro valor importa como não aprovado e não revisado, aparecendo na sua fila de moderação. `reports_count` torna‑se a contagem de sinalizações do comentário.

A moderação automatizada no FastComments é em camadas, ao contrário de um único sistema como Aida:

- Classificador de spam, treinado continuamente, disponível como modelo compartilhado entre todos os locatários ou isolado para o seu locatário, com fator de confiança que relaxa filtragem para usuários de longa data ou frequentemente fixados.
- Verificação opcional de spam via ChatGPT 4 em plano Flex.
- Moderação de conteúdo de imagem em sensibilidade baixa, média ou alta para imagens enviadas.
- Lista negra de palavras com cerca de 450 frases padrão, editável, que mascara correspondências com asteriscos. É onde suas palavras restritas do OpenWeb vão.
- Limiares de sinalização que ocultam automaticamente um comentário após N denúncias.
- Prevenção de mensagens repetidas e quase‑duplicadas, sempre ativa.
- Agentes AI: agentes orientados a eventos com lista explícita de ferramentas permitidas (marcar spam, aprovar, bloquear, fixar, avisar por DM, banir, conceder badge, responder). Cada agente inicia em modo teste, ferramentas sensíveis podem ser condicionadas a aprovação humana, e cada ação é registrada com justificativa e pontuação de confiança.

A API de Silenciamento de Usuário do OpenWeb permite que um leitor SSO silencie outro. O equivalente no FastComments é Bloquear Usuário no menu de comentário, disponível para qualquer leitor logado. Banimentos são ação de moderador: permanente ou por período definido, opcionalmente sombra (o usuário vê seu comentário, mas ninguém mais vê), opcionalmente por IP hash, com plus‑aliases de e‑mail tratados como um único endereço. A lista de usuários banidos pode ser pesquisada por e‑mail, nome, moderador e comentário que disparou o banimento.

O dashboard Moderate Comments oferece filtros (precisa revisão, precisa aprovação, spam, sinalizado, de usuários banidos) e busca textual, ações em massa com desfazer e pausa, “selecionar tudo que corresponde” para filas muito grandes, grupos de moderação para que sua redação esportiva veja apenas threads esportivos, logs por comentário que mostram por que um e‑mail foi ou não enviado, e links filtrados compartilháveis. Moderadores têm apenas o dashboard; não podem mudar configurações ou importar dados.

### Analytics

O Analytics do FastComments mostra usuários online agora em seus sites e por página, páginas top por comentários ou por leitores ao vivo, e séries diárias de carregamentos de página, comentários, votos e contas criadas (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Estatísticas de moderador são separadas. Contagens são quase em tempo real, com atraso máximo de um minuto, e cada carregamento de página é contado ao invés de amostrado.

O que você não encontrará é qualquer informação sobre preenchimento de anúncios, CPM ou receita, porque não há anúncios. Se o dashboard do OpenWeb era sua fonte para relatórios de engajamento‑para‑receita, esse relatório passa para sua própria pilha de anúncios.

### Monetização

O OpenWeb coloca anúncios dentro e ao redor da Conversa e oferece um unitário Standalone Ad, com campanhas configuradas através do seu contato no OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">docs OpenWeb</a>). O FastComments não exibe anúncios no widget, não tem compartilhamento de receita e não carrega scripts de anúncios ou rastreamento de terceiros. O widget é um iframe que você insere; os espaços de anúncio acima e abaixo dele são seus e rodam através do que você já usa.

O trade‑off é explícito: você perde o que o OpenWeb pagava e ganha um custo fixo, previsível, e um widget que não adiciona requisições de anúncios à sua página. A marca é removida nos planos Flex e Pro, e o white‑label está disponível nos planos Pro e Enterprise.

### Exportação de Dados e Privacidade

Todos os dados de comentários podem ser exportados do dashboard FastComments como CSV a qualquer momento, com datas em formato UTC ISO, e os mesmos dados estão disponíveis via API. Webhooks cobrem sincronização contínua. Arquivos de importação são deletados do FastComments assim que a importação termina.

Para GDPR e CCPA, o OpenWeb fornece uma API de exportação e exclusão onde comentários de usuários deletados permanecem anexados a uma conta de convidado aleatória (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">docs OpenWeb</a>). O FastComments suporta solicitações de exportação e exclusão de dados, oferece um Data Processing Agreement, e opera um deployment separado na UE em <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> com dados replicados apenas dentro dos pontos de presença da UE. Crie sua conta lá se seus leitores estiverem na Europa. Na região UE, bans de agentes AI sempre requerem aprovação humana para atender ao Artigo 17 do DSA.

Dados de comentários no deployment global são replicados entre regiões, inclusive um nó em Singapura, e o widget é servido pelos próprios DNS e CDN do FastComments. O script de embed tem menos de 30 KB no disco e cerca de 6 KB comprimido na rede.

### SDKs Mobile

O OpenWeb entrega SDKs Android, iOS e React Native com Conversa, Artigos, Autenticação, Notificações, Reações e Enquetes na Conversa. O FastComments entrega bibliotecas nativas <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> e <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> com comentários encadeados, atualizações ao vivo via WebSocket, SSO Seguro, votação, menções, upload de imagens, ações de moderação (sinalizar, fixar, bloquear, bloquear), temas, modo de chat ao vivo e componente de feed social. A região UE é uma flag de configuração. Não há SDK de anúncios separado porque não há anúncios.

### Embed e Integração SPA

O lançador e contêiner do OpenWeb:

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
            urlId: 'POST_ID',        // era data-post-id
            url: 'ARTICLE_URL',      // era data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

Seu tenant ID está na <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">página de código de embed</a> assim que você tem uma conta. `data-article-tags` não tem equivalente, já que não há seguimento de tópico; hashtags dentro de comentários são um recurso diferente.

Para scroll infinito e apps de página única, a abordagem de Páginas Virtuais do OpenWeb usa um contêiner por artigo. No FastComments você chama `FastCommentsUI(element, config)` por thread e depois `instance.update(newConfig)` para trocar o ID de URL ou `instance.destroy()` para removê‑lo (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). As bibliotecas React, Vue, Angular e SolidJS lidam com isso quando a prop de config muda. Callbacks de ciclo de vida (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) substituem os eventos DOM `spot-im-*` que você escutava.

Contadores de comentários em páginas de índice usam o widget de contagem de comentários, único ou em massa. Para SEO, comentários são renderizados diretamente na página para crawlers de buscadores ao invés de dentro do iframe, portanto não há chamada de API SEO para configurar.

### Passo a Passo da Transição

**1. Crie a conta e configure o básico.** Cadastre‑se em fastcomments.com ou eu.fastcomments.com. Defina suas configurações de moderação, lista negra de palavras, estilo de voto, ordenação padrão e CSS customizado na página de personalização do widget. Adicione moderadores e grupos de moderação. Se você tem muitos usuários admin, o suporte importa‑os para você.

**2. Execute a primeira importação.** Vá para <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, escolha OpenWeb (.csv) e faça upload. A importação roda como job em background; a página mostra contagem de linhas e status, e você recebe um e‑mail quando termina (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Cada ID de mensagem do OpenWeb torna‑se o ID de comentário do FastComments, então re‑executar a importação não cria duplicatas.

**3. Verifique contagens.** Compare a contagem de linhas do job com sua exportação. Abra alguns IDs de URL de alto tráfego no dashboard de moderação e verifique autores, datas, totais de votos e estados de aprovação. Confirme que comentários rejeitados aparecem como spam e os pendentes ficam na fila.

**4. Construa o payload SSO.** Implemente o código de assinatura acima no seu backend, usando o mesmo `id` e `username` que usou no OpenWeb. Teste com uma conta de staff em uma página de staging: os comentários importados do usuário aparecem como dele, e edição/exclusão aparecem no menu de comentário.

**5. Troque o embed em um template de staging.** Substitua o lançador e contêiner pelo snippet FastComments, mapeando `data-post-id` para `urlId` e `data-post-url` para `url`. Remova `window.SPOTIM.logout()` e listeners `spot-im-*`, ou mapeie‑os para os callbacks. Aplique seu CSS em uma regra de personalização ao invés de código, para que seja testado em cada release do FastComments.

**6. Execute em paralelo.** Coloque o FastComments em uma seção ou porcentagem de artigos enquanto o OpenWeb permanece nos demais. Nada no lado OpenWeb precisa mudar. Observe a fila de moderação e a página de analytics. Comentários em páginas FastComments durante essa janela não entram na sua exportação OpenWeb, então planeje a importação final antes que eles comecem, não depois.

**7. CSP e DNS.** Se você usa Content‑Security‑Policy, permita `cdn.fastcomments.com` e `fastcomments.com` (ou `eu.fastcomments.com`) para `script-src`, `frame-src` e `connect-src`, e remova as entradas `spot.im` e `openweb.com` quando o lançador for removido. Nada muda no seu DNS. Não são necessários redirects porque os IDs de URL coincidem.

**8. Importação final e go live.** Extraia mais uma exportação OpenWeb cobrindo a janela de execução paralela, faça upload (re‑import é seguro), então implante a mudança de template em todas as páginas e remova o lançador, Reactions, Topic Tracker, Spotlight, sino e contêineres de anúncios.

**9. Checklist de go‑live.**

- Comentários ao vivo visíveis em um artigo de produção em dois navegadores.
- Login SSO, logout e um comentário sob uma conta real de assinante.
- Moderadores recebem o digest e podem aprovar a partir dele.
- E‑mails de resposta e menção chegam e linkam à página correta.
- Lista de bans e lista negra de palavras populada.
- Page Reacts e widgets de contagem de comentários renderizando onde antes havia Reactions e o contador.
- Relatórios CSP limpos.
- Última comparação de contagem de comentários entre sua exportação e o dashboard.

### O Que Você Perde e O Que É Diferente

Sendo direto sobre as lacunas:

- **Live Blog.** Nenhum equivalente. Mantenha‑o no seu CMS ou ferramenta de live blogging e coloque o FastComments abaixo.
- **Topic Tracker.** Nenhum seguimento entre artigos de tópico ou autor. Apenas assinaturas de página.
- **Community Spotlight.** Nenhum produto de cartão CTA. `headerHTML` oferece uma mensagem acima do compositor, não captura de e‑mail.
- **Receita de anúncios.** Nenhuma. O widget é livre de anúncios por design.
- **Webhook de notificação.** Webhooks são apenas para eventos de comentário, não para eventos de notificação por usuário.
- **Encadeamento na importação.** O importador atual achata respostas em comentários de nível superior na mesma página. Avise‑nos se precisar da árvore reconstruída.
- **Histórico de reações.** Contagens de reação ao nível do artigo não estão no export CSV e começam do zero.
- **Histórico de enquetes.** Definições e votos de enquetes não estão no export CSV; o texto da enquete importa, a enquete não.
- **Modelo de login.** Leitores sem SSO entram por link mágico ao invés de senha ou botão de login social.
- **Equipe humana de moderação.** O OpenWeb inclui uma equipe de moderação com Aida. O FastComments fornece ferramentas, classificadores e agentes; a equipe humana é sua.

O que você ganha, no mesmo espírito: um widget que adiciona apenas um pequeno script e nenhuma requisição de anúncio, moderação que uma pessoa pode operar em grande site com ações em massa e agentes, SSO que é uma função de assinatura ao invés de um protocolo, e um fornecedor que não está sob supervisão judicial.

### Cronograma e Oferta de Importação Gratuita

Planeje de uma a duas semanas para um editor com uma integração SSO e algumas centenas de milhares de comentários: um ou dois dias na exportação e primeira importação, alguns dias em SSO e templates, janela de execução paralela, depois importação final e troca. A plataforma já lida com essa escala: United Cloud roda mais de dez portais e milhões de comentários no FastComments, e itsfoss.com migrou um histórico de 88 000 comentários de outro provedor usando o mesmo importador self‑service.

O FastComments importa seu CSV do OpenWeb gratuitamente, ajuda a rodar OpenWeb e FastComments em paralelo durante a transição, e auxilia na migração propriamente dita, incluindo questões de encadeamento e correspondência de usuários. Planos Enterprise incluem SLA, respostas de suporte em até uma hora durante horário comercial, e a opção de um deployment Isolated Cloud na sua própria conta de nuvem (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). Preço baseado em uso Flex está disponível para sites que desejam começar sem contrato.

Escreva para <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> com o tamanho da sua exportação e sua configuração SSO que retornaremos com um plano.

### Em Conclusão

Exporte seus dados hoje. O resto da migração é mecânico: os mesmos IDs de post tornam‑se IDs de URL, os mesmos nomes de usuário reivindicam seus comentários via SSO, o estado de moderação é mantido, e o embed é uma troca direta. Os pontos onde o FastComments difere estão listados acima para que você possa decidir com os fatos em mãos.

Cheers!{{/isPost}}

---