---
[category:Migration]
###### [postdate]
# [postlink]Migrando do Commento para FastComments[/postlink]

{{#unless isPost}}
Leia este post para ver como migrar completamente do Commento para o FastComments.

## Armadilhas

O Commento não nos fornece URLs completas. O que eles fornecem é apenas o nome de domínio ao qual uma thread de comentários pertence - como "fastcomments.com/some-page".
Isso significa que o importador do FastComments tem que assumir qual é o protocolo, e ele padrão para https. Se você executar a importação e não estiver vendo seus dados,
pode ser uma boa ideia verificar se seu site está corretamente seguro.
{{/unless}}

{{#isPost}}
### Exporte Seus Comentários Existentes

Para exportar os dados de Comentários e Usuários do seu site do Commento, acesse o Painel de Administração, vá em Geral e depois em Exportar Dados.

Você notará que o arquivo resultante que você recebe por e-mail tem uma misteriosa extensão de arquivo "gz". Se você tem um pouco mais de conhecimento técnico, pode saber que isso significa "gzip" e é uma forma popular e eficiente de compactar arquivos.

### Não abra o arquivo "gz"

Uma instalação padrão do Windows 10 não será capaz de abrir o arquivo do Commento. Isso é bom, porque você não precisa fazê-lo com o FastComments. Nosso backend entende esse arquivo compactado.

Depois disso, se você estiver logado, pode ir <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aqui para importar o arquivo</a>. Selecione Commento no dropdown e envie seu arquivo.

### Aguarde alguns minutos

A importação do FastComments é "assíncrona". Isso significa que o upload do arquivo e o processamento são etapas separadas.

Portanto, dependendo do tamanho do seu arquivo, você pode receber a mensagem de sucesso imediatamente. Na página de importação, na parte inferior, há uma tabela - cada linha representa uma tentativa de importação.
Você pode atualizar esta página com segurança para ver o status da sua importação e quantas linhas foram importadas até agora.

### Quando estiver concluído

Você receberá um e-mail quando a importação estiver concluída - seja ela bem-sucedida ou não. Você pode fechar a página após o upload do arquivo ser bem-sucedido e ver sua importação na página de Importações. Terá um status como "Solicitado" e quando começar, o status será "Executando".

É seguro reimportar quantas vezes forem necessárias - no entanto, se sua importação falhar, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">entre em contato conosco</a> para que possamos ajudar.

### Substitua o Código do Commento pelo do FastComments

É simplesmente uma questão de remover o pequeno trecho que o Commento fornece e substituí-lo pelo <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">nosso próprio</a>.
Você pode até executar o Commento e o FastComments no mesmo site temporariamente para testar e ajustar a aparência e o funcionamento. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ajudar com isso</a>.

### Migrando URLs ao mesmo tempo

Os próprios comentários estão atrelados aos campos "link" na exportação do Commento, então, contanto que suas URLs não mudem, a troca é fácil. Se você quiser migrar URLs e manter seus
comentários, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nos avise</a> enviando as URLs antigas e novas. A página de ajuda permite o envio de pequenos arquivos de texto, então se
você estiver migrando mais do que apenas algumas URLs, crie uma planilha do Excel.

### Recapitulação

1. Exporte seus dados
2. Importe para o FastComments
3. Troque o snippet JavaScript do Commento pelo <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">do FastComments</a>

## Armadilhas

O Commento não nos fornece URLs completas. O que eles fornecem é apenas o nome de domínio ao qual uma thread de comentários pertence - como "fastcomments.com/some-page".
Isso significa que o importador do FastComments tem que assumir qual é o protocolo, e ele padrão para https. Se você executar a importação e não estiver vendo seus dados,
pode ser uma boa ideia verificar se seu site está corretamente seguro.

## Por Que o Commento Não Me Enviará Meu Arquivo?
Para sites maiores, o Commento pode não conseguir criar o arquivo exportado devido a limitações técnicas do lado deles. Nós temos a capacidade de raspar seu site existente e extrair os comentários dele, no entanto isso pode ser
bastante personalizado e, devido ao tempo envolvido, exigirá que você tenha o Pacote de Suporte. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Você pode solicitar ajuda com isso aqui</a>.
{{/isPost}}

---