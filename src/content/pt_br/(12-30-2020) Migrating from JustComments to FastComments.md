---
[category:Migration]
###### [postdate]
# [postlink]Migrando de JustComments para FastComments[/postlink]

{{#unless isPost}}
Leia este post para ver como migrar completamente de JustComments para FastComments.

Normalmente, trata-se de remover o pequeno trecho que eles fornecem e substituí-lo por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">o nosso</a>.
Você pode até ter JustComments e FastComments rodando no mesmo site temporariamente para testar e ajustar a aparência. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ajudar com isso</a>.
{{/unless}}

{{#isPost}}

A partir de 2021, o JustComments será encerrado. No FastComments, facilitamos a transição para a nossa plataforma.

Você verá que o FastComments oferece muitos dos mesmos recursos que você está acostumado e muito mais.

## Diferenças de Preço

Enquanto o JustComments utiliza um sistema baseado em créditos, o FastComments utiliza um modelo de níveis com três níveis disponíveis. Com o FastComments, nosso plano de $5/mês
cobre até 1M de carregamentos de página por mês. Além disso, temos os planos Pro e Enterprise, que você pode conferir em nossa <a href="https://fastcomments.com/traffic-pricing" target="_blank">página de preços</a>.

## Se Você Estiver no WordPress

O FastComments tem um plugin dedicado para WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

O plugin torna a instalação, configuração e sincronização muito fáceis. No entanto, o JustComments não sincroniza seus comentários de volta para sua instalação do WordPress como o FastComments
faz. Isso significa que após a sincronização, você terá que seguir os passos de exportação e importação abaixo.

## Exporte Seus Comentários Existentes

O importador do FastComments irá migrar seus comentários, nomes de usuários, avatares de usuários e imagens inline. Nós moveremos as imagens para nossos servidores de forma transparente.

Para baixar seus dados de comentários do JustComments, vá para a página da sua Conta.

## Importe Para o Admin do FastComments

Não se preocupe em abrir o arquivo resultante do JustComments.

Se você estiver logado, pode ir <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aqui para importar o arquivo</a>.

Selecione JustComments no menu suspenso e faça o upload do seu arquivo.

### Identificadores de Página

Ao importar, você verá a opção de escolher URL da Página ou "Item ID". Se você não tiver certeza de qual escolher, escolha URL da Página. Se você tiver uma integração com o JustComments
onde especifica o Item ID na configuração do widget, selecione Item ID.

### Aguarde alguns minutos

A importação do FastComments é "assíncrona". Isso significa que o upload do arquivo e o processamento são etapas separadas.

Assim, dependendo do tamanho do seu arquivo, você pode receber a mensagem de sucesso imediatamente. Na página de importação, na parte inferior, há uma tabela - cada linha representa uma tentativa de importação.
Você pode atualizar esta página com segurança para ver o status da sua importação e quantas linhas foram importadas até agora.

### Quando terminar

Você receberá um e-mail quando a importação estiver concluída - se foi bem-sucedida ou não. Você pode fechar a página após o upload do arquivo ser bem-sucedido e você ver sua importação na página de Importações. Ela terá um status como "Solicitado" e quando começar, o status será "Executando".

É seguro reimportar quantas vezes for necessário - no entanto, se sua importação falhar, então <a href="https://fastcomments.com/auth/my-account/help" target="_blank">entre em contato conosco</a> para que possamos ajudar.

### Substitua o Código do JustComments pelo FastComments

Se você não estiver usando o plugin do JustComments para WordPress, então trata-se simplesmente de remover o pequeno trecho que eles fornecem e substituí-lo por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">o nosso</a>.
Você pode até ter JustComments e FastComments rodando no mesmo site temporariamente para testar e ajustar a aparência. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ajudar com isso</a>.

### Migrando URLs ao mesmo tempo

Os comentários em si estão vinculados aos campos "pageUrl" por padrão na exportação do JustComments, então, desde que seus URLs não mudem, a troca é fácil. Se você deseja migrar URLs e manter seus
comentários, então <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nos avise</a> enviando os URLs antigos e novos. A página de ajuda permite o upload de pequenos arquivos de texto, então se
você estiver migrando mais do que apenas alguns URLs, crie uma planilha do Excel.

## Recapitulando

1. Exporte seus dados
2. Importe no FastComments
3. Se não estiver no WordPress, troque o trecho JavaScript do JustComments pelo <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">do FastComments</a>

{{/isPost}}