---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migrando do Disqus para o FastComments[/postlink]

{{#unless isPost}}
Leia este post para ver como migrar totalmente do Disqus para o FastComments.

Se você está usando a Integração de Site Genérica com o Disqus, então é simplesmente uma questão de remover o pequeno trecho que eles fornecem e substituí-lo por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">o nosso</a>.
Você pode até executar o Disqus e o FastComments no mesmo site temporariamente para testar e ajustar a aparência. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ajudar com isso</a>.

Se você não está usando a Integração de Site Genérica, então as instruções variam de acordo com sua plataforma - novamente, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">entre em contato conosco</a>.
{{/unless}}

{{#isPost}}
Há muitas coisas que o Disqus faz certo, mas onde eles falham é onde o FastComments entra.

## Se Você Está no WordPress

O FastComments possui um plugin dedicado para WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

O plugin torna a instalação, configuração e sincronização muito fáceis. Se você seguir por esse caminho, pode ignorar o resto das instruções aqui.

## Instalação Manual e Genérica

### Exporte Seus Comentários Existentes

O importador do FastComments migrará seus comentários, nomes de usuários, avatares de usuários e imagens inline. Nós moveremos as imagens para nossos servidores de forma transparente.

Uma coisa que o Disqus faz certo é como eles lidam com a exportação de dados. Você notará, após seguir os passos no guia deles <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">aqui</a>, que o arquivo resultante que você recebe por e-mail tem uma misteriosa extensão de arquivo "gz". Se você for um pouco mais técnico, pode saber que isso significa "gzip" e é uma maneira popular e eficiente de compactar arquivos. 

### Não abra o arquivo "gz"

Uma instalação padrão do Windows 10 não conseguirá abrir o arquivo do Disqus. Isso é bom, porque você não precisa com o FastComments. Nosso backend entende
esse arquivo compactado, então tudo o que você precisa fazer é seguir as instruções deles <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">aqui para obter o referido arquivo</a>.

Depois disso, se você estiver logado, pode ir <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aqui para importar o arquivo</a>. Selecione Disqus no menu suspenso e faça o upload do seu arquivo.

### Aguarde alguns minutos

A importação do FastComments é "assíncrona". Isso significa que o upload do arquivo e o processamento são etapas separadas.

Então, dependendo do tamanho do seu arquivo, você pode receber a mensagem de sucesso imediatamente. Na página de importação, na parte inferior, há uma tabela - cada linha representa uma tentativa de importação.
Você pode atualizar essa página com segurança para ver o status da sua importação e quantas linhas foram importadas até agora.

### Quando terminar

Você receberá um e-mail quando a importação terminar - independentemente de ter sido bem-sucedida ou não. Você pode fechar a página após o upload do arquivo ser bem-sucedido e você ver sua importação na página de Importações. Terá um status como "Solicitado" e, quando começar, o status será "Executando".

É seguro reimportar quantas vezes forem necessárias - no entanto, se sua importação falhar, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">entre em contato conosco</a> para que possamos ajudar.

### Substitua o Código do Disqus pelo FastComments

Se você está usando a Integração de Site Genérica com o Disqus, então é simplesmente uma questão de remover o pequeno trecho que eles fornecem e substituí-lo por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">o nosso</a>.
Você pode até executar o Disqus e o FastComments no mesmo site temporariamente para testar e ajustar a aparência. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ajudar com isso</a>.

Se você não está usando a Integração de Site Genérica, então as instruções variarão de acordo com sua plataforma - novamente, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">entre em contato conosco</a>.

### Migrando URLs ao mesmo tempo

Os comentários em si estão vinculados aos campos "link" na exportação do Disqus, então, desde que suas URLs não mudem, a troca é fácil. Se você deseja migrar URLs e manter seus
comentários, então <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nos avise</a> enviando-nos as URLs antigas e novas. A página de ajuda permite o upload de pequenos arquivos de texto, então se
você estiver migrando mais do que apenas algumas URLs, crie uma planilha do Excel.

### Recapitulação

1. Exporte seus dados
2. Importe para o FastComments
3. Substitua o trecho JavaScript do Disqus por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">o do FastComments</a>

## Por Que o Disqus Não Vai Me Enviar Meu Arquivo?
Para sites maiores, o Disqus pode não conseguir criar o arquivo exportado devido a limitações técnicas do lado deles. Nós temos a capacidade de extrair seu site existente e puxar os comentários dele, no entanto, isso pode ser
bastante personalizado e, devido ao tempo envolvido, exigirá que você tenha o Pacote de Suporte. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Você pode solicitar ajuda com isso aqui</a>.
{{/isPost}}