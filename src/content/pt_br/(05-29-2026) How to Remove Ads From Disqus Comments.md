---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Como Remover Anúncios dos Comentários do Disqus[/postlink]

{{#unless isPost}}
No plano gratuito do Disqus, sua seção de comentários vem com anúncios anexados. Existem duas maneiras de se livrar deles. A melhor também faz com que seus comentários sejam carregados mais rápido e impede que seus leitores sejam rastreados.
{{/unless}}

{{#isPost}}

O Disqus paga pelo seu plano gratuito colocando anúncios na sua seção de comentários, logo abaixo do seu conteúdo, no mesmo lugar onde seus leitores vão para falar com você. Esses anúncios não são seus. Você não os escolhe e não ganha nada com eles. Esse é o preço para o nível gratuito.

Existem duas maneiras reais de removê-los.

## Opção 1: Atualize Seu Plano do Disqus

A rota mais direta é pagar pelo Disqus. Seus planos pagos desativam os anúncios. Você pode encontrar as opções atuais na <a href="https://disqus.com/pricing/" target="_blank">página de preços do Disqus</a>.

Isso funciona, mas vale a pena ser claro sobre o que você está comprando. Você está pagando para desfazer uma desvantagem. Os anúncios desaparecem, e o resto do Disqus permanece o mesmo: a área de comentários ainda carrega um pesado pacote de scripts de terceiros, e seus leitores ainda são rastreados pelos sites que o incorporam. Você está pagando para remover os anúncios, e não para tornar a seção de comentários mais leve ou mais privada.

## Opção 2: Mude para uma Plataforma que Nunca Mostra Anúncios

A outra maneira de remover os anúncios é usar uma plataforma de comentários que não os exibe em primeiro lugar. :)

Por apenas $0.99/mês, o FastComments fornece funcionalidades otimizadas para desempenho profundo sem rastreamento ou anúncios.

## Você Mantém Todos os Comentários

A parte que mais preocupa as pessoas é perder sua discussão existente. O FastComments possui um importador de Disqus embutido que traz seus comentários, nomes de usuários, avatares de usuários, imagens embutidas, votos e timestamps. Nós até movemos todas as imagens para o nosso próprio CDN para você.

Se você quiser um guia completo e detalhado, temos um guia dedicado: [Migrando do Disqus para FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). A versão curta está abaixo.

## Como Mudar em Três Passos

### 1. Exporte seus comentários do Disqus

Siga <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">os próprios passos de exportação do Disqus</a>. Eles enviarão um arquivo para você com a extensão "gz". Você não precisa abri-lo ou descompactá-lo, e uma instalação padrão do Windows não consegue, de qualquer forma. Nosso backend lê esse arquivo comprimido diretamente.

### 2. Importe o arquivo para o FastComments

Uma vez logado, vá para a <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">página de importação</a>, selecione Disqus no menu suspenso e faça o upload do arquivo como está. A importação ocorre em segundo plano; a página será atualizada automaticamente enquanto rola para mostrar uma contagem ao vivo do número de comentários descobertos e importados. É seguro re-importar quantas vezes você precisar.

### 3. Troque o snippet do Disqus pelo nosso

Remova o código de incorporação do Disqus de suas páginas e insira <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">o snippet do FastComments</a> em vez disso. Contanto que as URLs das suas páginas permaneçam as mesmas, seus comentários importados ficarão exatamente onde estavam.

## No WordPress?

Se seu site roda no WordPress, pule os passos manuais e instale o <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">plugin do FastComments para WordPress</a>. Ele cuida da instalação, configuração e sincronia para você, e então você pode desativar o Disqus.

## Teste Antes de Comprometer

Você não precisa mudar tudo de uma vez. Você pode rodar o Disqus e o FastComments na mesma página temporariamente para comparar a aparência e a sensação antes de fazer a migração completa. Se você precisar de ajuda com qualquer um desses passos, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">entre em contato conosco</a> e nós o ajudaremos.

Não tem certeza de quanto custará o FastComments? Todos os planos são sem anúncios, e você pode verificar seu número na <a href="https://fastcomments.com/pricing-calculator" target="_blank">calculadora de preços</a>. Se você estiver na UE, pode criar sua conta em <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> para que seus dados permaneçam na UE.

## Recapitulando

1. Exporte seus dados do Disqus
2. Importe para o FastComments
3. Troque o snippet do Disqus pelo <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">do FastComments</a>

É isso. Sem anúncios na sua seção de comentários, páginas mais leves e todos os comentários que você já tinha.

Saudações!

{{/isPost}}