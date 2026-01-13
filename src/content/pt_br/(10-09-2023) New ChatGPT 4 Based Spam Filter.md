---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Novo Filtro de Spam Baseado em ChatGPT 4.[/postlink]

{{#unless isPost}}
FastComments adiciona à sua lista de opções para filtro de spam.
{{/unless}}

{{#isPost}}

### Novidades

FastComments continua a melhorar seu classificador de spam Naïve-Bayes, no entanto, adicionamos uma nova opção à frota de detectores de spam.

Agora você pode detectar spam usando o ChatGPT 4 fornecido pela OpenAI.

### Como Configurar

Para configurar qual detector de spam usar, verifique a página de Configurações de Moderação no seu painel de administração. O detector de spam baseado em GPT4 é cobrado em `$0.08` a cada `1000` tokens.

Esse detector de spam só está disponível para clientes no plano Flex, pois é cobrado com base nos tokens utilizados.

### Otimizações

Primeiro, passamos todo o conteúdo pelo classificador compartilhado Naïve-Bayes para limitar chamadas à OpenAI. Isso economiza seu dinheiro em spam muito óbvio. Para o spam extra sorrateiro, em seguida, chamamos a OpenAI para ver se o conteúdo parece spam.

### Resultados

Observamos melhorias imediatas nas comunidades que ativaram esse recurso.

### Documentação

Isso pode ser configurado através da página de Configurações de Moderação no seu painel de administração.

[A documentação também pode ser encontrada aqui](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### Conclusão

Agradecemos nossos clientes que nos oferecem feedback contínuo para que possamos pensar em ideias como esta. Esperamos que você continue amando o FastComments.

Saudações!

{{/isPost}}

---