---
[category:Migration]
###### [postdate]
# [postlink]Migrando Do Yotpo Para FastComments[/postlink]

{{#unless isPost}}
Procurando uma alternativa ao Yotpo? Este post explica como migrar avaliações de produtos do Yotpo para o FastComments, o que é preservado, como as plataformas se comparam e o que muda para sua loja.
{{/unless}}

{{#isPost}}

Temos recebido um fluxo constante de comerciantes do Shopify perguntando sobre alternativas ao Yotpo e como mover suas avaliações de produtos da plataforma. Este post abrange o que procurar em uma alternativa ao Yotpo, como funciona a migração do FastComments de ponta a ponta e o que muda assim que você estiver no FastComments.

## Para Quem Este Post É

Este guia é para comerciantes de ecommerce e proprietários de lojas que utilizam o Yotpo para avaliações de produtos e que desejam uma alternativa mais rápida, leve ou acessível. A maioria dos comerciantes com quem conversamos está no Shopify, mas o FastComments funciona da mesma forma em lojas WooCommerce, BigCommerce, lojas personalizadas e configurações headless. O processo de migração é o mesmo, independentemente de onde sua loja está hospedada.

## Por Que Mover

- FastComments é rápido. O Yotpo carrega quase um megabyte de JavaScript e múltiplas chamadas de terceiros, o que pode deixar as páginas de produtos lentas.
- Avaliações não aparecem ao vivo. Um comprador envia uma avaliação, a página informa para verificar a caixa de entrada, e a avaliação só aparece após um atraso.
- FastComments oferece preços mais lineares, sem restrições de recursos por camadas.

FastComments serve classificações em estrelas e threads de avaliações em um único widget de ~30KB que se atualiza em tempo real. Novas avaliações aparecem em cada página aberta no momento em que são postadas, sem necessidade de recarregar! Nosso plano baseado em tráfego cobre classificações, moderação de IA, moderação em múltiplos estados, o recurso de Perguntas e exportação completa de dados. Muitos clientes pagam apenas um dólar, com preços por assento de administrador e moderador disponíveis para organizações maiores.

## Uma Experiência Ao Vivo

O Widget de Resumo do FastComments é ao vivo, assim como nossos widgets de comentários e chat. Se uma avaliação for deixada, as classificações se atualizam imediatamente sem recarregar. Isso pode ser útil para lançamentos de produtos.

FastComments também funciona fora do Shopify se você decidir se mudar ou gerenciar diferentes lojas em diferentes plataformas.

## Yotpo vs FastComments Em Um Relance

Um rápido comparativo das dimensões que os comerciantes perguntam ao buscar uma alternativa ao Yotpo:

- Peso do widget: O Yotpo entrega 800KB+ de JavaScript em várias chamadas. O FastComments entrega 38KB em uma única chamada.
- Avaliações ao vivo: O Yotpo requer um recarregamento de página para mostrar novas avaliações. O FastComments envia novas estrelas e comentários para cada página aberta em tempo real.
- Preços: O Yotpo cobra por volume de avaliações através de planos em camadas com restrições de recursos. O FastComments tem um preço fixo baseado em tráfego de página e inclui todos os recursos em todos os planos.
- Avaliações em foto e vídeo: Ambos suportam isso.
- Avaliações de perguntas e respostas: O Yotpo vende Q&A como um módulo adicional. O FastComments inclui através do recurso de Perguntas embutido.
- Moderação de IA: O Yotpo oferece regras básicas de publicação automática. O FastComments inclui agentes de IA com pontuação configurável por comentário e registros de auditoria, além de configuração de publicação manual e automática.
- Exportação de dados: O Yotpo restringe a exportação completa a camadas superiores. O FastComments inclui exportação completa em CSV e JSON em todos os planos.
- Migração de um concorrente: O Yotpo cobra pela migração concierge. O FastComments gerencia isso gratuitamente através de um ticket de suporte.

## Como Funciona a Migração

O Yotpo não tem uma exportação limpa e autossuficiente que mapeie de forma clara em um esquema de importação pública, então gerenciamos as migrações do Yotpo através de nossa equipe de suporte em vez da página de importação padrão. O processo de ponta a ponta é:

1. Abra um <a href="https://fastcomments.com/contact-us" target="_blank">ticket de suporte</a> conosco e nos avise que você está migrando do Yotpo.
2. Enviaremos instruções para exportar seus dados do Yotpo. A exportação abrange avaliações, classificações, fotos, sinalizações de comprador verificado e respostas encadeadas.
3. Você envia a exportação de volta para nós no ticket.
4. Mapeamos cada campo para o FastComments e carregamos em um tenant de preparação vinculado à sua conta, para que você possa visualizar o resultado antes que qualquer coisa entre ao vivo em sua loja.
5. Quando você aprova a visualização, promovemos os dados para o seu tenant de produção.

A maioria das migrações do Yotpo é concluída em menos de uma semana a partir do momento em que recebemos a exportação.

## O Que É Preservado

O mapeamento abrange tudo o que o Yotpo armazena por avaliação:

- Classificações em estrelas e a classificação agregada do produto
- Texto da avaliação, respostas encadeadas e timestamps de resposta
- Anexos de fotos e vídeos (movemos os arquivos para nosso CDN)
- Sinalizações de comprador verificado
- Identificadores de clientes, para que a contagem de avaliações nos perfis dos clientes corresponda ao que era antes
- Timestamps de envio, para que a ordem cronológica em suas páginas de produtos seja preservada

Se você tiver perguntas e respostas do Yotpo, elas serão mapeadas para o recurso de Perguntas do FastComments nas mesmas threads de produtos.

## Substituindo O Widget

Uma vez que os dados estejam transferidos, troque o widget do Yotpo no seu template de página de produto pelo widget do FastComments. Somos um aplicativo do Shopify, então para a maioria das lojas, isso é um bloco de uma linha em seu tema. O <a href="https://fastcomments.com/install-wizard" target="_blank">assistente de instalação</a> cobre Shopify, configurações headless e os principais frameworks de front-end. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ajudar com isso</a>.

Você pode executar o Yotpo e o FastComments lado a lado em um único produto temporariamente se quiser comparar a aparência e a sensação antes de fazer a migração totalmente.

## EU

Se você estiver na UE, crie sua conta em <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> para que seus dados de clientes permaneçam na UE.

## Perguntas Comuns Sobre a Troca Do Yotpo

### O FastComments é mais barato que o Yotpo?

Na quase totalidade dos casos, sim. O FastComments funciona em um plano baseado em tráfego fixo que inclui todos os recursos, enquanto o Yotpo cobra por avaliação em planos em camadas e adiciona taxas de excesso. Calcule os números para sua loja no <a href="https://fastcomments.com/pricing-calculator" target="_blank">calculadora de preços</a>.

### Posso manter minhas avaliações do Yotpo quando mudar?

Sim. A migração preserva cada avaliação, cada classificação, cada anexo de foto e vídeo, cada resposta encadeada e cada sinalização de comprador verificado. Timestamps de envio são mantidos para que a ordem cronológica em suas páginas de produtos permaneça a mesma.

### O FastComments funciona fora do Shopify?

Sim. O FastComments funciona no Shopify, WordPress, WooCommerce, BigCommerce, lojas personalizadas e configurações headless. O <a href="https://fastcomments.com/install-wizard" target="_blank">assistente de instalação</a> cobre os principais frameworks de front-end.

### Posso executar o Yotpo e o FastComments lado a lado primeiro?

Sim. Monte ambos os widgets em uma única página de produto durante a visualização de preparação para comparar como eles parecem e funcionam em sua loja, e então remova o Yotpo quando estiver pronto para a migração total.

### E quanto ao Yotpo Loyalty, Yotpo SMS ou Yotpo Email?

O FastComments é uma plataforma de avaliações e comentários ao vivo. Não lida com programas de fidelidade, marketing por SMS ou campanhas de marketing por e-mail. Se você usa esses produtos do Yotpo atualmente, precisará mantê-los ou transferi-los para uma ferramenta dedicada quando mudar as avaliações para o FastComments.

Observe que gostaríamos de desenvolver essa funcionalidade, e se você estiver interessado em ser um testador beta, ficaremos felizes em adicionar isso à nossa programação de curto prazo.

### Minhas classificações em estrelas ainda aparecerão nas minhas páginas de produtos?

Sim. O widget do FastComments renderiza a classificação agregada em estrelas, as estrelas de avaliação individuais e a contagem de avaliações nos mesmos lugares que o widget do Yotpo fazia. O HTML de cada avaliação é estruturado para que os motores de busca possam capturar os dados de classificação na página.

### A mudança do Yotpo para o FastComments afetará meu SEO?

Se os URLs das suas páginas de produtos permanecerem os mesmos, não. O conteúdo das avaliações se move para o novo widget nos mesmos URLs, e os motores de busca veem os mesmos produtos com as mesmas avaliações nas mesmas páginas. Se você estiver mudando os URLs como parte da migração, envie-nos os pares de URLs antigos e novos no ticket de suporte para que o importador possa mapeá-los.

### Há um teste gratuito?

Todos os planos do FastComments começam com um teste gratuito. Você pode criar uma conta, executar a visualização da importação e ver o widget em um tenant de preparação antes de se comprometer com um plano pago.

## Recapitulando

1. <a href="https://fastcomments.com/contact-us" target="_blank">Abra um ticket de suporte</a> nos informando que deseja migrar do Yotpo
2. Exporte seus dados do Yotpo e envie-os para nós no ticket
3. Visualize a importação em um tenant de preparação
4. Troque o widget do Yotpo pelo widget do FastComments no seu template de página de produto

{{/isPost}}

---