[category:Migration]
###### [postdate]
# [postlink]Migrando do Commento e Cusdis em 2026[/postlink]

{{#unless isPost}}
Os serviços hospedados do Commento e do Cusdis deixaram de responder. Aqui está como migrar para o FastComments e como podemos ajudar a recuperar seus comentários do Internet Archive se você nunca os exportou.
{{/unless}}

{{#isPost}}

Se a seção de comentários do seu site ficou em branco, este post é para você. Ele cobre o que mudou, como importar uma exportação se você a tem, e como podemos ajudá‑lo a recuperar seus comentários do Internet Archive se não tiver.

## What Happened

Veja o que observamos em 1 de novembro de 2026:

- **Commento.** commento.io, sua API e seu script de widget retornam 404. Capturas do Internet Archive mostram o site funcionando em 25 de maio de 2026 e retornando 404 em 11 de junho de 2026.
- **Cusdis.** cusdis.com e sua API retornam o erro 521 da Cloudflare, que significa que o servidor por trás da Cloudflare está fora do ar. Capturas mostram que funcionava até 27 de agosto de 2026 e retornando 521 em 16 de outubro de 2026. O script do widget ainda carrega, então sua página exibe uma caixa vazia onde os comentários estavam.

Não encontramos nenhum aviso de encerramento de nenhum dos projetos. Se você hospeda o Commento ou o Cusdis por conta própria, sua instalação não é afetada por isso, e você pode exportar a partir dela sempre que estiver pronto para migrar.

## Find Your Data

O caminho que você escolher depende do que você tem:

1. **Você tem um arquivo de exportação.** Procure também na sua caixa de entrada, já que o Commento enviava suas exportações por e‑mail como um arquivo ".gz". Pule adiante para as etapas de importação.
2. **Você hospeda por conta própria.** Exporte a partir do seu próprio painel e, em seguida, siga as etapas de importação.
3. **Você usou o serviço hospedado e não tem exportação.** O painel do qual você exportaria não existe mais. Leia a seção de recuperação abaixo.

## Import an Export File

Depois de fazer login, vá <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aqui para importar o arquivo</a>. Selecione **Commento (.gz, .json)** ou **Cusdis (.json)** no menu suspenso e faça upload do seu arquivo. Não é necessário descompactar o arquivo ".gz" do Commento primeiro.

A importação é executada em segundo plano e você receberá um e‑mail quando terminar. Reimportar é seguro, pois cada comentário é correspondido ao seu ID original e atualizado no local.

Temos um guia mais detalhado para cada formato: <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> e <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. As etapas para solicitar uma exportação a partir do painel hospedado não se aplicam mais, mas os detalhes de importação ainda valem.

## Recover Your Comments From the Internet Archive

Commento e Cusdis carregam os comentários via JavaScript a partir de seus próprios servidores. Quando o Internet Archive captura uma página com um navegador, ele pode salvar essas respostas junto com a página. Essas respostas salvas contêm os tópicos de comentários.

Testamos isso nós mesmos. A <a href="https://web.archive.org" target="_blank">Wayback Machine</a> contém mais de 12.000 respostas de comentários do Commento capturadas e capturas de 448 projetos Cusdis, e as mais recentes são de 2026. Não temos uma ferramenta de auto‑serviço para isso. Realizamos a recuperação para você, então <a href="https://fastcomments.com/contact-us" target="_blank">escreva para nós</a> para começar.

### Check Your Own Site First

Abra um dos seus posts mais movimentados na Wayback Machine, substituindo o endereço pelo seu próprio:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

Role até a seção de comentários. Se seus comentários aparecerem, o arquivo tem esse tópico. Se não aparecerem, tente outro ano usando o calendário no topo da página. Um resultado em branco em um post não exclui o restante do seu site, então escreva para nós de qualquer forma.

### How the Recovery Works

1. **Informe seu domínio.** Se você usou o Cusdis, também envie seu App ID, o valor `data-app-id` no snippet do seu site. Pediremos que você comprove que controla o domínio, já que esses comentários pertencem ao seu site.
2. **Encontramos seus tópicos.** Coletamos as capturas do seu site e verificamos se cada uma pertence ao seu domínio e página. Recuperações do Commento demoram mais, porque o arquivo não indexa suas capturas por site e precisamos ler todas elas.
3. **Mostramos o que encontramos.** Você verá quantas páginas e comentários foram recuperados, e a data do comentário mais recente, antes de qualquer importação.
4. **Importamos os tópicos para sua conta.** Você pode então editar ou remover qualquer comentário a partir do seu painel de moderação.

### What Comes Back

<div class="pretty-table wide-table">

| Dados | Commento | Cusdis |
| --- | --- | --- |
| Texto do comentário | Sim | Sim |
| Nome de exibição do autor | Sim | Sim |
| Data do comentário | Sim | Sim |
| Encadeamento de respostas | Sim | Sim |
| Pontuação de voto | Sim | Cusdis não tem votos |
| Endereço da página | Sim | Sim, embora alguns sites armazenem apenas um caminho, então precisamos do seu domínio |
| E‑mail do autor | Não | Não |
| Comentários ainda aguardando aprovação | Não | Não |
| Comentários escritos após a última captura | Não | Não |
| Páginas que o arquivo nunca capturou | Não | Não |

</div>

### What to Expect

Esta é uma recuperação a partir de snapshots, portanto planeje lacunas. Funciona melhor para páginas que eram populares o suficiente para serem capturadas com frequência e recentemente.

Dois resultados dos nossos testes mostram a variação. Em um blog, 30 buscas retornaram 810 comentários em 19 páginas. Em outro site, que ainda exibe seus comentários, a cópia arquivada mais recente parou em outubro de 2023, enquanto a página ao vivo continuou até março de 2025. Qualquer coisa escrita entre a última captura e o encerramento não está no arquivo.

Os e‑mails ausentes também são importantes. Comentários recuperados mantêm o nome do autor, mas não podem ser associados a uma conta FastComments, e seus autores não receberão notificações sobre novas respostas.

## Replace the Widget

Qualquer que seja o caminho que você seguiu, o snippet antigo precisa ser removido do seu site. Para o Commento, remova isto, junto com `count.js` se você usa contagem de comentários:

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

Para o Cusdis, remova isto:

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

Em seguida, adicione <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">nosso</a>:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

Também suportamos muitos frameworks front‑end, que <a href="https://fastcomments.com/install-wizard" target="_blank">você pode encontrar aqui</a>. Não há necessidade de esperar a recuperação terminar antes de mudar. Seus leitores podem começar a comentar imediatamente, e os tópicos recuperados são adicionados às mesmas páginas quando são importados.

### If Your URLs Are Changing

Comentários importados são vinculados ao URL da página, então se seus URLs permanecerem os mesmos, os tópicos se alinham automaticamente. Se estiverem mudando, importe primeiro, depois use a ferramenta <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> em Gerenciar Dados para movê‑los para os novos locais.

## EU

Se você está na UE, provavelmente desejará criar sua conta em <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> para que os dados dos seus clientes permaneçam na UE.

## Recap

1. Procure um arquivo de exportação, inclusive na sua caixa de e‑mail.
2. Se você tem um, faça upload dele na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">página de importação</a>.
3. Se não tem, verifique seu site na Wayback Machine e <a href="https://fastcomments.com/contact-us" target="_blank">escreva para nós</a> com seu domínio.
4. Troque o snippet antigo pelo <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">nosso</a>.

Saudações!

{{/isPost}}

---