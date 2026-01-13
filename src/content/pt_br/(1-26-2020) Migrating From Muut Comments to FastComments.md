---
[category:Migration]
###### [postdate]
# [postlink]Migrando De Comentários Muut Para FastComments[/postlink]

{{#unless isPost}}
Leia este post para ver como migrar completamente do Muut para o FastComments.

É simplesmente uma questão de remover o pequeno trecho que o Muut fornece e substituí-lo por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">o nosso</a>.
Você pode até executar o Muut e o FastComments no mesmo site temporariamente para testar e ajustar a aparência. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ajudar com isso</a>.
{{/unless}}

{{#isPost}}
### Exporte Seus Comentários Existentes

O importador do FastComments migrará seus comentários, nomes de usuário, avatares de usuários, e imagens em linha. Nós moveremos as imagens para nossos servidores de forma contínua.

Para exportar os dados de Comentários e Usuários do seu site do Muut, vá até o painel de Admin, acesse Integrações e depois Exportação JSON.

Você notará que o arquivo resultante que você recebe por e-mail tem uma misteriosa extensão de arquivo "gz". Se você tem um pouco mais de conhecimento técnico, pode saber que isso significa "gzip" e é uma maneira popular e eficiente de comprimir arquivos. 

### Não abra o arquivo "gz"

Uma instalação padrão do Windows 10 não será capaz de abrir o arquivo do Muut. Está tudo bem, porque você não precisa fazer isso com o FastComments. Nosso backend entende este arquivo comprimido.

Depois disso, se você estiver logado, pode ir <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aqui para importar o arquivo</a>. Selecione Muut no dropdown e faça o upload do seu arquivo.

Você precisará inserir a URL do seu site. Isso acontece porque o Muut não nos fornece essa informação na exportação.

### Espere alguns minutos

A importação do FastComments é "assíncrona". Isso significa que fazer o upload do arquivo e processá-lo são etapas separadas.

Portanto, dependendo do tamanho do seu arquivo, você pode receber a mensagem de sucesso imediatamente. Na página de importação, na parte inferior, há uma tabela - cada linha representa uma tentativa de importação.
Você pode atualizar esta página com segurança para ver o status da sua importação e quantas linhas foram importadas até agora.

### Quando terminar

Você receberá um e-mail quando a importação estiver concluída - seja com sucesso ou não. Você pode fechar a página após o upload do arquivo ter sucesso e você ver sua importação na página de Importações. Ela terá um status como "Solicitado" e quando começa, o status será "Em Execução".

É seguro reimportar quantas vezes forem necessárias - no entanto, se sua importação falhar, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">entre em contato conosco</a> para que possamos ajudar.

### Substitua o Código Muut pelo FastComments

É simplesmente uma questão de remover o pequeno trecho que o Muut fornece e substituí-lo por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">o nosso</a>.
Você pode até executar o Muut e o FastComments no mesmo site temporariamente para testar e ajustar a aparência. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ajudar com isso</a>.

### Migrando URLs ao mesmo tempo

Os comentários em si estão ligados aos campos "link" na exportação do Muut, então, enquanto suas URLs não mudarem, a troca é fácil. Se você quiser migrar URLs e manter seus
comentários, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nos avise</a> enviando as antigas e novas URLs. A página de ajuda permite o upload de pequenos arquivos de texto, então, se
você estiver migrando mais do que apenas algumas URLs, crie uma planilha do Excel.

### Recapitulando

1. Exporte seus dados
2. Importe para o FastComments
3. Troque o snippet JavaScript do Muut pelo <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">do FastComments</a>

## Por Que O Muut Não Me Enviará Meu Arquivo?
Para sites maiores, o Muut pode não ser capaz de criar o arquivo exportado devido a limitações técnicas do lado deles. Temos a capacidade de extrair seu site existente e coletar os comentários, no entanto, isso pode ser
bastante personalizado e, devido ao tempo envolvido, exigirá que você tenha o Pacote de Suporte. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Você pode solicitar ajuda com isso aqui</a>.
{{/isPost}}

---