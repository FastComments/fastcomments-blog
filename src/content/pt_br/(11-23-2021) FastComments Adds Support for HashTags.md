---
[category:Features]

###### [postdate]
# [postlink]FastComments Adiciona Suporte para #HashTags[/postlink]

{{#unless isPost}}
Você já quis #marcar um tópico ou uma informação? Agora você pode.
{{/unless}}

{{#isPost}}

### O Que Há de Novo

Ao comentar, os usuários agora podem inserir uma ou mais `#hashtags`. Ao clicar em uma `#hashtag` em um comentário, você será levado a uma visualização com outros comentários
com a hashtag exibida.

Além disso, `#hashtags` podem ser usadas para vincular a conteúdos externos. Juntamente com este lançamento, lançamos nossa [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)
que permite a pré-população de hashtags na sua conta.

Ao pré-povoar hashtags, podemos definir uma URL para cada tag. Isso significa que `#hashtags` também podem ser usadas para vincular, por exemplo, a um número de ticket ou
a um documento em um CRM.

O símbolo `#` pode ser personalizado também, sob solicitação.

### Como Usar

Ao digitar `#`, e então o início de uma hashtag, uma lista de resultados de busca aparecerá.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="Uso de HashTags" title="Demonstração de #hashtags" />
</div>

Basta clicar na hashtag que você deseja adicionar.

Além disso, você pode usar as teclas de seta para cima e para baixo para navegar nesta lista, e pressionar enter para selecionar, ou esc para sair.

Sabemos que você pode querer usar o símbolo `#` sem adicionar uma hashtag. O FastComments detectará isso e não intervirá na sua experiência de digitação.

### Adicionando Hash Tags

Se a hashtag que você deseja usar não estiver na lista de sugestões - o FastComments simplesmente criará a hashtag automaticamente nos bastidores.

A criação automática de `#hashtag` pode ser desativada conforme a documentação [aqui](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Quem Recebe

Todos os clientes atuais e novos do FastComments, em todos os níveis, agora têm acesso a `#hashtags`. `#hashtags` foram retrocompatíveis a versões anteriores do
widget de comentários, também.

### Como Funciona a Autocompletar

As tags mostradas na lista autocompletada são apenas da sua conta. HashTags não são compartilhadas entre locatários do FastComments.

### Documentação

Há documentação dedicada para `#hashtags`. Veja aqui: https://docs.fastcomments.com/guide-hashtags.html

### Em Conclusão

Assim como o resto do FastComments, esperamos que você ache este recurso rápido e fácil de usar.

Saudações!

{{/isPost}}