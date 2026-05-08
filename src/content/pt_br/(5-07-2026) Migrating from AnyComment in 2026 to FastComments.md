---
[category:Migration]
###### [postdate]
# [postlink]Migrando do AnyComment em 2026 para o FastComments[/postlink]

{{#unless isPost}}
Leia este post para ver como migrar completamente do AnyComment para o FastComments em 2026.
{{/unless}}

{{#isPost}}

Recebemos vários clientes perguntando sobre a migração do AnyComment em 2026.

## AnyComment Vive Dentro do WordPress

AnyComment é um plugin do WordPress. Ao contrário de plataformas independentes como Disqus ou Hyvor Talk, ele não executa seu próprio backend - seus comentários são armazenados diretamente no banco de dados do WordPress, na mesma tabela `wp_comments` que o WordPress utiliza. Essa é uma ótima notícia para a migração: não há uma exportação separada do AnyComment para lidar, nem um servidor de terceiros para coordenar. Seus dados já estão em seu próprio servidor.

Isso significa que o fluxo padrão de migração do FastComments para WordPress lida com o AnyComment sem nenhum passo extra.

## Opção 1: O Plugin FastComments para WordPress (Recomendado)

O caminho mais fácil é instalar o <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">plugin FastComments para WordPress</a>. O plugin orienta você na vinculação da sua instalação do WordPress com o FastComments, e copia seus dados de comentários existentes automaticamente. Não há nada para baixar ou fazer upload manualmente. Os dados são copiados do seu banco de dados do WordPress para nossos servidores, então isso também aliviará
a carga de seus servidores assim que a migração estiver concluída.

A maioria das migrações termina em poucos minutos.

Após a transferência dos dados, desative o AnyComment. Os comentários continuarão a ser servidos pelo FastComments, e o plugin mantém seu banco de dados do WordPress em sincronia como um backup (se você ativar essa funcionalidade), assim você sempre possui seus dados.

## Opção 2: Exportação XML do WordPress

Se você preferir migrar manualmente, ou já moveu para fora do WordPress e só tem um backup XML, use a exportação integrada do WordPress.

1. No seu admin do WordPress, vá para **Ferramentas -> Exportar** e baixe o arquivo XML.
2. Faça login no seu painel do FastComments e vá <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aqui para importar o arquivo</a>.
3. Selecione **WordPress (.xml)** no dropdown e faça upload do seu arquivo.

Como o AnyComment escreve no `wp_comments`, cada thread do AnyComment está naquele XML junto com seus outros comentários do WordPress. O importador os associa automaticamente ao post correto.

## Substituindo o Widget do AnyComment

Se você usou a Opção 1, o plugin FastComments para WordPress já substitui o AnyComment em seu site - basta desativar o AnyComment após a migração ser concluída.

Se você usou a Opção 2 e está mantendo sua instalação do WordPress, instale o plugin FastComments em seguida para lidar com a renderização do widget e a sincronização contínua. Se você está saindo do WordPress completamente, inclua nosso <a href="https://fastcomments.com/install-wizard" target="_blank">snippet de instalação</a> em seu novo site - suportamos muitos frameworks de frontend que <a href="https://fastcomments.com/install-wizard" target="_blank">você pode encontrar aqui</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nós podemos ajudar com isso</a>.

## UE

Se você está na UE, provavelmente vai querer criar sua conta em <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> para que seus dados de clientes permaneçam na UE.

## Recapitulando

1. Instale o plugin FastComments para WordPress e deixe que ele copie seus dados, **ou** exporte do WordPress como XML e faça upload na página de importação
2. Desative o AnyComment
3. Se você também está deixando o WordPress, troque o código do widget em seu novo site

{{/isPost}}

---