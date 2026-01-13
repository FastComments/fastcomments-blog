---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments Lança Estilos de Votação Personalizados[/postlink]

{{#unless isPost}}
Você já quis trocar o estilo de votação padrão para apenas um ícone de coração simples? Agora você pode.
{{/unless}}

{{#isPost}}

### O que Há de Novo

Anteriormente, para personalizar a barra de votação, era necessário escrever código customizado e CSS. Isso também significava que, se você quisesse fazer algo como habilitar a votação anônima, mas desabilitar os votos negativos, não só era necessário código customizado, mas os pedidos de voto não podiam ser validados no lado do servidor. Isso significava que as pessoas ainda poderiam votar negativamente de forma anônima chamando o servidor diretamente, o que aconteceu em algumas comunidades.

Agora introduzimos o conceito de `voteStyle` na plataforma, sendo o primeiro novo estilo de voto o ícone de coração que muitos pediram.

Quando definido através da interface de personalização do widget, isso também adiciona validação à plataforma, que impede completamente os votos negativos, para que hackers não possam mais contornar a interface e votar negativamente em um usuário até a obliteração, como poderia acontecer se a votação anônima fosse habilitada.

### Como Usar

Vá até a [Interface de Personalização do Widget](https://fastcomments.com/auth/my-account/customize-widget) e selecione `Coração` em `Estilo de Votação`.

### Documentação

Os documentos oficiais para este recurso estão [disponíveis em docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Quem Recebe

Todos os clientes atuais e novos do FastComments, em todos os níveis, agora têm acesso a estilos de votação personalizados. Este recurso é supportado apenas pela v2 do widget de comentários e versões posteriores.

### Otimizações

O código para os diferentes estilos de voto não está incluído no download do cliente do widget, a menos que habilitado, para evitar o desperdício de recursos do produto.

### Olhando para o Futuro

Agora temos a capacidade de adicionar diferentes tipos de votação e reações, o que podemos fazer no futuro.

### Em Conclusão

Como o resto do FastComments, esperamos que você ache este recurso rápido e fácil de usar.

Saudações!

{{/isPost}}

---