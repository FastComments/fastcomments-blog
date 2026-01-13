---
[category:API & Development]
###### [postdate]
# [postlink]Atualização do Menu de Comentários[/postlink]

{{#unless isPost}}
Esta atualização é principalmente para desenvolvedores que personalizam o FastComments. Fizemos algumas alterações na API e algumas otimizações.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargões Técnicos

### O que há de Novo

Alguns inquilinos do FastComments personalizam o widget de comentários. Isso cria um contrato
entre suas personalizações e nossa implementação. Fazemos o nosso melhor para não quebrar esse
contrato, mas como parte deste anúncio, temos uma pequena alteração quebradora.

### Para Desenvolvedores

Um seletor CSS para o menu de comentários foi alterado.

Antigo:

    .comment .menu .menu-content

Novo:

    .menu-content

### Inquilinos Existentes

Se você já está usando o seletor "menu-content" - parabéns! Estamos revisando todos os nossos
inquilinos que utilizam este seletor e atualizando suas configurações de widget para evitar quebras.

Nos avise se você tiver algum problema.

### Raciocínio

Desde que o widget de comentários foi criado, o menu de comentários era puramente um dropdown controlado por CSS. Isso
é uma maneira simples e rápida de implementar um menu suspenso que também não requer muito código - um objetivo de
design do FastComments.

No entanto, ao longo dos anos, surgiram problemas.

Por um lado, quando a área de comentários tem uma altura específica e é rolável, como no Streaming Chat,
acessar o menu na parte inferior é difícil, pois o menu tentará ir além da área de conteúdo rolável. Isso torna parte do menu invisível e requer que você
movimente o mouse e passe o cursor novamente sobre o menu para realizar qualquer trabalho que estava tentando fazer. Sentimos
que isso era frustrante de usar.

Algumas soluções temporárias foram feitas, como inverter a direção do menu para **cima**,
mas isso também não funciona se a altura do widget não for alta o suficiente e houver muitos itens de ação
no menu - como para administradores. Nesse caso, seria ideal fazer o menu descer
para além da área de conteúdo rolável.

### Benefícios de Tamanho

Um benefício desta mudança é que conseguimos abstrair muito código em um
módulo que carrega de forma assíncrona. Isso nos permitirá expandir as ações que você pode realizar
em dados de comentários sem deixar a carga inicial do widget pesada. Isso introduz uma chamada de rede na primeira vez que você passa o mouse
sobre o menu de edição, mas o pacote inicial é muito pequeno (< 1kb) então isso não deve ser muito notável.

É muito difícil continuar a evoluir o software e também reduzir seu tamanho ao longo do tempo. Normalmente, o software
começa rápido e fica lento. Portanto, estamos sempre felizes em trabalhar para manter o FastComments rápido:

    Antes: 28.76kb gzipped (108.02kb total)
    Depois: 28.39kb gzipped (105.79kb total)

Menos código é também menos código para o seu navegador processar na carga da página. O impacto disso se expandirá conforme mais recursos forem adicionados.

### Benefícios de Performance

O antigo menu renderizava todos os itens do menu e carregava todas as extensões para ver se as extensões
tinham itens para adicionar, e renderizava esses também - para cada comentário - para que o conteúdo estivesse pronto para o seu mouse.

Geralmente há apenas de 30 a 100 objetos, por isso isso tende a não ser um grande problema, mas o impacto estava crescendo. O novo sistema remove essa preocupação,
já que o menu agora é renderizado apenas sob demanda.

A compensação é que o novo menu é posicionado e renderizado usando JS para realizar o que queremos. Nós iremos
continuar a otimizá-lo sempre que pudermos, no entanto, atualmente ele está funcionando bem.

### Em Conclusão

Agradecemos aos nossos clientes pela paciência ao implementar essas mudanças. Esperamos que você
continue amando o FastComments.

Saudações!

{{/isPost}}

---