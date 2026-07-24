---
[category:Migration]
###### [postdate]
# [postlink]Migrating From Cusdis To FastComments[/postlink]

{{#unless isPost}}
Leia este post para ver como migrar completamente do Cusdis para o FastComments, incluindo seus tópicos, status de moderação e URLs das páginas.
{{/unless}}

{{#isPost}}

Cusdis é um sistema de comentários leve e de código aberto. Se você já superou suas limitações e deseja recursos como filtragem de spam, votos, reações, notificações, SSO e um painel completo de moderação, o FastComments agora importa seus dados do Cusdis diretamente.

## Exportar seus comentários existentes

No painel do Cusdis, solicite uma exportação completa de dados. O Cusdis fornece um único arquivo JSON contendo seus projetos, páginas e todos os comentários, junto com suas threads e status de aprovação. Dependendo da sua configuração do Cusdis, a exportação é enviada por e‑mail ou baixada imediatamente.

Não há nada para editar ou descompactar. Mantenha o arquivo ".json" como está, e nosso backend o lê diretamente.

## Importar para o FastComments

Depois de fazer login, vá <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aqui para importar o arquivo</a>. Selecione **Cusdis (.json)** no menu suspenso e faça o upload do seu arquivo.

### Aguarde alguns minutos

A importação do FastComments é "asynchronous". O upload do arquivo e o seu processamento são etapas separadas. Para um arquivo pequeno, a mensagem de sucesso aparece imediatamente. Na parte inferior da página de importação há uma tabela, e cada linha representa uma tentativa de importação. Atualize a página para acompanhar o status e quantos comentários foram importados até o momento.

### Quando terminar

Você receberá um e‑mail quando a importação terminar, seja ela bem‑sucedida ou não. É seguro fechar a página após o upload ser concluído e você ver sua importação listada com o status "Requested" ou "Running".

Reimportar é seguro. O FastComments corresponde cada comentário ao seu ID original do Cusdis, então executar a importação novamente atualiza seus comentários existentes em vez de criar duplicatas. Se uma importação falhar, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">entre em contato conosco</a> e nós ajudaremos.

## O que é importado

- **Respostas em thread.** O Cusdis aninha respostas em vários níveis, e o FastComments reconstrói toda a estrutura de pais e filhos.
- **Status de moderação.** Comentários aprovados permanecem aprovados. Comentários ainda aguardando aprovação vão para a fila de moderação do FastComments para que você os revise.
- **Autores.** O nome e e‑mail de cada comentarista são transferidos, e usuários registrados no FastComments são correspondidos pelo e‑mail.
- **Formatação.** Comentários do Cusdis são escritos em Markdown. O FastComments renderiza o mesmo Markdown, incluindo links, imagens e quebras de linha, para que seus tópicos sejam exibidos exatamente como antes.

Comentários que foram excluídos no Cusdis permanecem, portanto suas threads importadas ficam limpas.

## Substituir o widget do Cusdis

Depois que seus dados estiverem migrados, remova o pequeno snippet do Cusdis do seu site e insira <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">nosso próprio</a>. Você pode rodar Cusdis e FastComments lado a lado por um tempo para testar a aparência e a sensação primeiro. Suportamos muitos frameworks front‑end, que <a href="https://fastcomments.com/install-wizard" target="_blank">você pode encontrar aqui</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ajudar com isso</a>.

### Migrando URLs ao mesmo tempo

O Cusdis vincula cada comentário à URL da página, então, enquanto suas URLs não mudarem, a troca é fácil. Se suas URLs também estiverem mudando, importe seus dados do Cusdis primeiro, depois use a ferramenta interna <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> em Gerenciar Dados para mover seus comentários para os novos locais. Você pode inserir um domínio inteiro, uma URL completa ou um ID de URL tanto para o local antigo quanto para o novo, de modo que um único par "de" e "para" mova todas as páginas correspondentes de uma vez. O processo roda em segundo plano e envia um e‑mail quando termina.

Se preferir que cuidemos disso (se você tem muitas páginas), <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nos informe</a> as URLs antigas e novas.

## UE

Se você está na UE, provavelmente desejará criar sua conta em <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> para que os dados dos seus clientes permaneçam na UE.

## Recapitulando

1. Exporte seus dados do Cusdis como JSON
2. Faça o upload na página de importação do FastComments e selecione **Cusdis (.json)**
3. Troque o snippet do Cusdis pelo <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

{{/isPost}}

---