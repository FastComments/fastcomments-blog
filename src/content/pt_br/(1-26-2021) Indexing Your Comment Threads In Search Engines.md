---
[category:Performance]
###### [postdate]
# [postlink]Indexando Seus Fóruns de Comentários em Motores de Busca[/postlink]

{{#unless isPost}}
Melhoramos as informações que os motores de busca veem ao rastrear seu site com o FastComments.
{{/unless}}

{{#isPost}}

## Novidades

Anteriormente, quando os motores de busca rastreavam sites com o FastComments instalado, eles apenas indexavam a primeira página (top 30) de comentários.

Isso ocorria porque, anteriormente, os motores de busca viam a mesma coisa que você ao visitar seu site.

Agora, quando um motor de busca visita seu site, todos os comentários serão carregados.

## Impactos no Page Rank

Motores de busca modernos levam muitas coisas em conta ao classificar uma página, incluindo a relevância do conteúdo da página em comparação com o que você está pesquisando, e até coisas como
o tempo de carregamento dessa página.

Essa mudança significa que o conteúdo completo dos seus fóruns de comentários estará disponível para indexação, potencialmente aumentando a relevância das buscas. Também demonstra engajamento, que
é algo que o motor de busca pode usar para classificar.

Um possível fator negativo é o desempenho, já que agora estamos carregando mais comentários; no entanto, em nossos testes, descobrimos que seriam necessários muitos centenas, senão milhares de comentários
em um fórum para desacelerar o FastComments a ponto de isso impactar seus tempos de carregamento de página e causar uma mudança de classificação.

Por exemplo, nossa página de demonstração com mais de 100 comentários ainda <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">recebe uma pontuação de 99/100 do PageSpeed Insights do Google</a>.

## Os Testes que Fizemos

Garantimos que os motores de busca agora veem todo o fórum de comentários de uma página, e testamos o desempenho de carregar fóruns de comentários inteiros de uma vez.

## Impacto para Clientes Existentes

Se você é um cliente existente usando o FastComments, a mudança já foi aplicada à sua conta e nenhuma ação adicional é necessária. Assim que os motores de busca reindexarem suas páginas,
todos os comentários nessas páginas deverão ser indexados.

## Em Conclusão

Esperamos que você tenha achado essa atualização e sua documentação úteis. Boas interações!

{{/isPost}}