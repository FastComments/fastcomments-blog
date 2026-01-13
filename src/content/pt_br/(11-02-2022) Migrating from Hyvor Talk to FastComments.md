---
[category:Migration]
###### [postdate]
# [postlink]Migrando do Hyvor Talk para o FastComments[/postlink]

{{#unless isPost}}
Leia este post para ver como migrar completamente do Hyvor Talk para o FastComments.

Se você está usando a instalação de código manual com o Hyvor Talk, então é simplesmente uma questão de remover o pequeno trecho que eles fornecem e substituí-lo por <a href="https://fastcomments.com/install-wizard" target="_blank">o nosso</a>. 
Você pode até rodar o Hyvor e o FastComments no mesmo site temporariamente para testar e ajustar a aparência. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ajudar com isso</a>.

Se você não está usando a instalação baseada em trecho de código, as instruções variarão com base na sua plataforma - novamente, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">entre em contato conosco</a>.
{{/unless}}

{{#isPost}}

## Se você está no WordPress

O FastComments tem um plugin dedicado para WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

O plugin facilita a instalação, configuração e sincronização. Se você seguir por esse caminho, pode ignorar o restante das instruções aqui. Apenas certifique-se de que você sincronizou seus comentários do Hyvor Talk de volta para sua instalação do WordPress.

Se isso não estiver funcionando para você, como relatado por alguns de nossos clientes, você pode querer usar nosso plugin para WordPress, mas realizar uma importação de dados exportando manualmente do Hyvor Talk. Você pode encontrar importações de dados em [Gerenciar Dados -> Importar Comentários](https://fastcomments.com/auth/my-account/manage-data/import).

## Instalação Manual e Genérica

### Exporte Seus Comentários Existentes

O importador do FastComments migrará suas threads de comentários, nomes de usuário, avatares, emojis e imagens inline. Nós moveremos as imagens para nossos servidores sem problemas.

A partir de 2022, o Hyvor Talk não exporta emails ou votos de avaliação. Se você conseguir um export deles com essas informações, podemos importá-las.

### Importe o Arquivo .JSON

Depois de ter o export do Hyvor baixado, faça login no seu painel do FastComments e vá <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aqui para importar o arquivo</a>. Selecione Hyvor Talk no menu suspenso e faça o upload do seu arquivo.

### Aguarde alguns minutos

A importação do FastComments é "assíncrona". Isso significa que o upload do arquivo e seu processamento são etapas separadas.

Portanto, dependendo do tamanho do seu arquivo, você pode receber a mensagem de sucesso imediatamente. Na página de importação, na parte inferior, há uma tabela - cada linha representa uma tentativa de importação. 
Você pode atualizar essa página com segurança para ver o status da sua importação e quantas linhas foram importadas até agora.

### Quando estiver pronto

Você receberá um email quando a importação estiver concluída - tenha sucesso ou não. Você pode fechar a página após o upload do arquivo ser bem-sucedido e ver sua importação na página de Importações. Terá um status como "Solicitado" e, quando começar, o status será "Em Execução".

É seguro reimportar quantas vezes forem necessárias - no entanto, se sua importação falhar, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">entre em contato conosco</a> para que possamos ajudar.

### Substitua o Código do Hyvor Talk pelo FastComments

Se você estiver usando a instalação baseada em trecho de código com o Hyvor, então é simplesmente uma questão de remover o pequeno trecho que eles fornecem e substituí-lo por <a href="https://fastcomments.com/install-wizard" target="_blank">o nosso</a>. 
Nós também suportamos muitos frameworks de front-end que [você pode encontrar aqui](https://fastcomments.com/install-wizard). Você pode até rodar o Hyvor e o FastComments no mesmo site temporariamente para testá-los e ajustar a aparência. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ajudar com isso</a>.

Se você não está usando a instalação baseada em trecho de código, as instruções variarão com base na sua plataforma - novamente, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">entre em contato conosco</a>.

Oferecemos um assistente de instalação self-service [aqui](https://fastcomments.com/install-wizard).

### Migrando URLs ao mesmo tempo

Os comentários em si estão ligados aos campos de id da página na exportação, então, contanto que suas URLs não mudem, a troca é fácil. Se você quiser migrar URLs e manter seus comentários, então <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nos avise</a> enviando as URLs antigas e novas. A página de ajuda permite o upload de pequenos arquivos de texto, então se você estiver migrando mais do que apenas algumas URLs, crie uma planilha do Excel.

### UE

Se você estiver na UE, provavelmente desejará criar sua conta em [eu.fastcomments.com](https://eu.fastcomments.com) para que os dados dos seus clientes permaneçam na UE.

### Recapitulando

1. Exporte seus dados
2. Importe para o FastComments
3. Troque o trecho de JavaScript do Hyvor por <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments</a>

## Por Que o Hyvor Não Está Me Enviando Meu Arquivo?
Para sites maiores, o Hyvor pode não conseguir criar o arquivo exportado devido a limitações técnicas do lado deles. Temos a capacidade de rastrear seu site existente e retirar os comentários dele, no entanto, isso pode ser bastante personalizado e, devido ao tempo envolvido, exigirá que você tenha o Pacote de Suporte. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Você pode solicitar ajuda com isso aqui</a>.
{{/isPost}}

---