[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Usuários Banidos Agora São Pesquisáveis[/postlink]

{{#unless isPost}}
A página de Usuários Banidos agora tem uma linha de pesquisa, para que você possa encontrar um banimento por e‑mail, nome, quem o aplicou ou o comentário que o causou.
{{/unless}}

{{#isPost}}

### Novidades

A página de Usuários Banidos em Moderação de Comentários agora tem uma linha de pesquisa acima da tabela. Até agora, a única forma de navegar por essa lista era através dos controles de Página e Contagem por Página, o que é aceitável quando você tem uma dúzia de banimentos e doloroso quando você tem alguns milhares.

Existem três controles: **Search By** escolhe o campo, **Match** escolhe Contém ou Igual, e **Value** é o que você está procurando.

### O que você pode pesquisar

**Search By** oferece cinco opções:

- **Any Field** - pesquisa tudo abaixo de uma vez
- **Email** - o endereço banido
- **Name** - o nome do comentarista
- **Banned By** - o moderador que aplicou o banimento
- **Banned For Saying** - o texto do comentário que fez o usuário ser banido

Os últimos quatro correspondem às colunas de mesmo nome na tabela, de modo que o menu suspenso lê o mesmo que o item que filtra.

### Contém vs Igual

**Contains** encontra seu valor em qualquer parte do campo. **Equals** corresponde ao campo inteiro.

Contém é o que você deseja na maioria das vezes. Pesquisar `bademail.com` encontra todos os banimentos naquele domínio, incluindo o banimento curinga `*@bademail.com`, porque os banimentos curinga são armazenados com o asterisco intacto.

Igual é para quando você tem o valor exato e não quer coincidências aproximadas. Pesquisar Email por `spammer@example.com` com Igual retorna apenas aquele banimento e nada mais.

Ambos são insensíveis a maiúsculas e minúsculas em todos os campos. Isso importa mais do que parece: quando um banimento é criado a partir de um comentário, apenas a metade do domínio do endereço é convertida para minúsculas, de modo que um banimento pode realmente ser armazenado como `MixedCase@Example.com`. Pesquisar por `mixedcase@example.com` o encontra.

### Dois tipos de pesquisa que vale a pena conhecer

**Banned For Saying** pesquisa o texto do comentário que disparou o banimento. Se uma frase ou link específico está circulando, você pode trazer todos que foram banidos por ele em uma única consulta.

**Banned By** pesquisa o moderador que aplicou o banimento. Se você quiser revisar as decisões de um moderador específico, ou está integrando alguém e deseja ver o que ele tem feito, basta uma pesquisa.

### Funciona com paginação e compartilhamento

A pesquisa fica na URL da página, portanto ao paginar os resultados ela permanece aplicada e você pode enviar uma lista filtrada para outro moderador copiando a URL, da mesma forma que já compartilha links de moderação. Iniciar uma nova pesquisa leva você de volta à primeira página, e **Clear** devolve à lista completa.

### Documentação

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">A seção Banning Users do Guia de Moderação</a> cobre a linha de pesquisa em detalhes.

### Em Conclusão

Esta surgiu ao observar como a página realmente é usada. Os banimentos se acumulam silenciosamente por anos, e então, um dia, você precisa encontrar um específico e não há como fazê-lo. Agora há.

Deixe-nos saber abaixo se há algum campo que você gostaria de poder pesquisar e que não está na lista.

Saúde!

{{/isPost}}