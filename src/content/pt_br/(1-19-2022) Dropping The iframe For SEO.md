---
[category:Performance]
[category:Features]
###### [postdate]
# [postlink]Eliminando o iframe para SEO[/postlink]

{{#unless isPost}}
Melhoramos a visibilidade dos seus comentários para os motores de busca e aumentamos a probabilidade de que o conteúdo seja atribuído ao seu site.
{{/unless}}

{{#isPost}}

## O que há de novo

Anteriormente, o FastComments renderizava seus threads de comentários em um iframe quando rastreados por motores de busca. Isso ocorre porque a aplicação requer o uso de iframes para como usamos cookies para as sessões de seus usuários.

No entanto, isso apresenta um problema para os motores de busca, pois eles não garantem que o conteúdo no iframe será atribuído ao seu site.

Agora, ao renderizar comentários, o script de embed verificará se a página está sendo carregada por um crawler. Se sim, ele não usará um iframe!

## Quantos Comentários São Mostrados

Até 2.000 comentários serão mostrados para os motores de busca em uma página. Eles serão ordenados com base na sua ordem de classificação configurada por padrão.

## Os Testes que Fizemos

Nos certificamos de que os motores de busca agora vejam todo o thread de comentários de uma página, e testamos o desempenho do carregamento de threads de comentários inteiros de uma só vez.

## Impacto para Clientes Existentes

Se você é um cliente existente que usa o FastComments, a alteração já foi aplicada à sua conta e nenhuma ação adicional é necessária. Assim que os motores de busca reindexarem suas páginas, todos os comentários nessas páginas devem ser indexados.

## Conclusão

Esperamos que você tenha achado esta atualização e sua documentação úteis. Comentários felizes!

{{/isPost}}

---