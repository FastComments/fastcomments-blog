[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Usuários Banidos Agora São Pesquisáveis[/postlink]

{{#unless isPost}}
The Banned Users page now has a search row, so you can find a ban by email, name, who issued it, or the comment that caused it.
{{/unless}}

{{#isPost}}

### What's New

A página Usuários Banidos em Moderação de Comentários agora tem uma linha de pesquisa acima da tabela. Até agora, a única forma de percorrer essa lista era pelos controles Página e Contagem Por Página, o que é aceitável quando você tem uma dúzia de banimentos e doloroso quando você tem alguns milhares.

Existem três controles: **Search By** escolhe o campo, **Match** escolhe Contém ou Igual, e **Value** é o que você está procurando.

### What You Can Search

**Search By** oferece cinco opções:

- **Any Field** - pesquisa tudo abaixo de uma vez
- **Email** - o endereço banido
- **Name** - o nome registrado no banimento
- **Banned By** - o moderador que aplicou o banimento
- **Banned For Saying** - o texto do comentário que fez o usuário ser banido

Os últimos quatro correspondem às colunas de mesmo nome na tabela, de modo que o menu suspenso lê o mesmo que o que ele filtra.

### Contains vs Equals

**Contains** encontra seu valor em qualquer parte do campo. **Equals** corresponde ao campo inteiro.

Contém é o que você deseja na maioria das vezes. Pesquisar `bademail.com` encontra todos os banimentos naquele domínio, incluindo o banimento curinga `*@bademail.com`, porque os banimentos curinga são armazenados com o asterisco intacto.

Igual é para quando você tem o valor exato e não quer resultados aproximados. Pesquisar Email por `spammer@example.com` com Igual retorna apenas aquele banimento e nada mais.

Ambos são insensíveis a maiúsculas e minúsculas em todos os campos. Isso importa mais do que parece: quando um banimento é criado a partir de um comentário, apenas a metade do domínio do endereço é convertida para minúsculas, de modo que um banimento pode realmente ser armazenado como `MixedCase@Example.com`. Pesquisar por `mixedcase@example.com` o encontra.

### Two Searches Worth Knowing About

**Banned For Saying** pesquisa o texto do comentário que disparou o banimento. Se uma frase ou link específico está circulando, você pode trazer todos que foram banidos por ele em uma única consulta.

**Banned By** pesquisa o moderador que aplicou o banimento. Se você quiser revisar as decisões de um moderador específico, ou está integrando alguém e quer ver o que ele tem feito, basta uma pesquisa.

### It Works With Paging and Sharing

A pesquisa fica na URL da página, de modo que paginar pelos resultados mantém a filtragem aplicada e você pode enviar uma lista filtrada para outro moderador copiando a URL, da mesma forma que você já compartilha links de moderação. Iniciar uma nova pesquisa leva você de volta à primeira página, e **Clear** devolve à lista completa.

### Name Search Matches What You See

Um banimento armazena o nome que o usuário tinha quando você o baniu, mas a tabela mostra o nome que ele tem agora. Esses nem sempre são os mesmos, e um banimento que você criou digitando um endereço de e‑mail não tem nenhum nome armazenado.

Portanto, a busca por Nome resolve o usuário por trás de cada banimento e corresponde ao nome que a tabela realmente está exibindo. Se alguém foi banido como "OldHandle" e desde então mudou para "NewHandle", ambos o encontrarão. Se você baniu um endereço e a tabela mostra um nome para ele, pesquisar esse nome funciona.

### Documentation

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">A seção de Banimento de Usuários do Guia de Moderação</a> cobre a linha de pesquisa em detalhes.

### In Conclusion

Esta surgiu ao observar como a página realmente é usada. Os banimentos se acumulam silenciosamente por anos, e então, em um dia, você precisa encontrar um específico e não há como fazê‑lo. Agora há.

Deixe-nos saber abaixo se há algum campo que você gostaria de poder pesquisar e que não está na lista.

Saúde!

{{/isPost}}