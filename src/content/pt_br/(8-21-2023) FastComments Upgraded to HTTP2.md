---
[category:Performance]
###### [postdate]
# [postlink]FastComments Atualizado para HTTP/2[/postlink]

{{#unless isPost}}
Fizemos algumas atualizações de infraestrutura que melhoram ainda mais o desempenho do FastComments!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

### O Que Há de Novo

Desde o lançamento, o FastComments esteve em HTTP/1.1. Recentemente, Alteramos toda a nossa infraestrutura em todas as regiões para HTTP/2.

### Impacto

Esta atualização mantém o FastComments atualizado com os padrões modernos enquanto fornece algumas melhorias de desempenho. A desvantagem é que alguns navegadores mais antigos não são mais suportados.

### Navegadores e Clientes Obsoletos

Você pode encontrar [navegadores não suportados aqui](https://caniuse.com/http2). O principal problema será o IE11, que possui apenas suporte parcial, no entanto, esses usuários devem estar migrando para o Edge.

Chrome, Firefox e outros suportam HTTP/2 há anos, então consideramos seguro fazer essa mudança.

### Benefícios de Desempenho

O FastComments já está bastante otimizado em termos de ativos servidos e sua ordem. Por exemplo, o widget de comentários serve apenas algumas solicitações para carregar - o iframe inicial, em seguida, o script que inclui estilização para reduzir o número de solicitações e, em seguida, a solicitação à API para obter todas as informações necessárias. Comparado a muitos outros serviços, é bastante compacto.

Então, este não é um caso onde o HTTP/2 realmente ajuda muito. O principal benefício do HTTP/2 é fazer solicitações simultâneas.

No entanto, o HTTP/2 nos ajuda com compressão! Os cabeçalhos agora são enviados em um protocolo binário que é mais compacto, e certos plugins com muitos ativos carregarão muito mais rapidamente, à medida que as solicitações podem ser encadeadas em paralelo.

### Em Conclusão

Agradecemos aos nossos clientes pela paciência ao implementar essas mudanças. Esperamos que você continue amando o FastComments.

Saudações!

{{/isPost}}

---