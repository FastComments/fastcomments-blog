---
[category:Migration]

###### [postdate]
# [postlink]Migrando do IntenseDebate para o FastComments[/postlink]

{{#unless isPost}}
Leia este post para demonstrar como migrar completamente do IntenseDebate para o FastComments.
{{/unless}}

{{#isPost}}
## Se Você Está no WordPress

O FastComments tem um plugin dedicado para WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

O plugin torna a instalação, configuração e sincronização muito fáceis. Se você optar por esse caminho, pode ignorar o restante das instruções aqui.

## Instalação Manual e Genérica

### Exporte Seus Comentários Existentes

Para exportar os dados de Comentários e Usuários do seu site do IntenseDebate, acesse o painel de administração e vá para Sites -> Seu Site -> Ferramentas -> Exportação XML.

Você notará que o arquivo resultante que você recebe por e-mail tem uma misteriosa extensão de arquivo "gz". Se você tem um pouco mais de conhecimento técnico, pode saber que isso significa "gzip" e é uma maneira popular e eficiente de comprimir arquivos.

### Não abra o arquivo "gz"

Uma instalação padrão do Windows 10 não será capaz de abrir o arquivo do IntenseDebate. Tudo bem, porque você não precisa disso com o FastComments. Nosso backend entende esse arquivo comprimido.

Depois disso, se você estiver logado, pode ir <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aqui para importar o arquivo</a>. Selecione IntenseDebate no menu suspenso e faça o upload do seu arquivo.

### Aguarde alguns minutos

A importação do FastComments é "assíncrona". Isso significa que o upload do arquivo e o processamento são etapas separadas.

Assim, dependendo do tamanho do seu arquivo, você pode receber a mensagem de sucesso imediatamente. Na página de importação, na parte inferior, há uma tabela - cada linha representa uma tentativa de importação.
Você pode atualizar essa página com segurança para ver o status de sua importação e quantas linhas foram importadas até agora.

### Quando terminar

Você receberá um e-mail quando a importação estiver concluída - seja com sucesso ou não. Você pode fechar a página após o upload do arquivo ser bem-sucedido e ver sua importação na página de Importações. Terá um status como "Solicitado" e, quando começar, o status será "Em execução".

É seguro reimportar quantas vezes forem necessárias - no entanto, se a sua importação falhar, então <a href="https://fastcomments.com/auth/my-account/help" target="_blank">entre em contato conosco</a> para que possamos ajudar.

### Substitua o Código do IntenseDebate pelo FastComments

É simplesmente uma questão de remover o pequeno trecho que o IntenseDebate lhe oferece e substituí-lo por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">o nosso</a>.
Você pode até executar o IntenseDebate e o FastComments no mesmo site temporariamente para testar e ajustar o visual e a funcionalidade. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ajudar com isso</a>.

Se você estiver usando widgets do IntenseDebate e quiser substituí-los, então <a href="https://fastcomments.com/auth/my-account/help" target="_blank">entre em contato conosco aqui</a>.

### Migrando URLs ao mesmo tempo

Os comentários em si estão ligados aos campos "link" na exportação do IntenseDebate, então, contanto que suas URLs não mudem, a troca é fácil. Se você quiser migrar URLs e manter seus
comentários, então <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nos avise</a> enviando as URLs antigas e novas. A página de ajuda permite o upload de pequenos arquivos de texto, então se
você estiver migrando mais do que apenas algumas URLs, crie uma planilha do Excel.

### Recapitulando

1. Exporte seus dados
2. Importe para o FastComments
3. Troque o snippet JavaScript do IntenseDebate pelo <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">do FastComments</a>

## Por Que o IntenseDebate Não Me Enviará Meu Arquivo?
Para sites maiores, o IntenseDebate pode não ser capaz de criar o arquivo exportado devido a limitações técnicas da parte deles. Temos a capacidade de raspar seu site existente e coletar os comentários, no entanto, isso pode ser
bastante personalizado e, devido ao tempo envolvido, exigirá que você tenha o Pacote de Suporte. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Você pode solicitar ajuda com isso aqui</a>.
{{/isPost}}

---