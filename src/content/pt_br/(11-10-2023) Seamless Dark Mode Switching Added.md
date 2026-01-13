---
[category:UI & Customization]

###### [postdate]
# [postlink]Troca de Modo Escuro Sem Costura Adicionada[/postlink]

{{#unless isPost}}
O FastComments sempre suportou o modo escuro. No entanto, anteriormente era necessário recarregar o widget de comentários para alternar para o modo escuro. Isso foi corrigido.
{{/unless}}

{{#isPost}}

### O Que Há de Novo

O FastComments sempre suportou o modo escuro. No entanto, anteriormente era necessário recarregar o widget de comentários para alternar para o modo escuro.

Isso significa que, se um site usasse o modo escuro, ou permitisse que os usuários alternassem entre os modos claro e escuro, nós
removeríamos completamente o widget de comentários do navegador e o recarregaríamos. Isso foi feito por razões técnicas para simplificar o produto
no lançamento inicial, uma vez que o estado precisa ser comunicado entre a página pai e o iframe do widget.

À medida que a temporada assustadora chega ao fim - a troca do modo escuro foi aprimorada. O widget de comentários agora suporta transições sem costura entre os modos claro
e escuro. No entanto, ainda é necessário passar a flag `hasDarkBackground` quando aplicável.

### Para Desenvolvedores & Armadilhas

Para informar ao widget de comentários que seu site está no modo escuro - ou tem um fundo escuro aplicado - você deve passar a flag
`hasDarkBackground`. Isso não muda. No entanto, agora, quando você chama `instance.update(newConfig)` (ou altera o estado
em uma de nossas bibliotecas como React, Svelte, etc), detectaremos se o único parâmetro alterado é `hasDarkBackground` e, se sim,
atualizaremos o widget de comentários de forma elegante. O widget carregará assíncronamente a extensão do modo escuro em segundo plano e atualizará seu estilo
se necessário.

Uma grande armadilha é que, ao passar `newConfig` - isso deve ser um objeto completamente novo para que esse recurso funcione.

### Em Conclusão

Como em todos os lançamentos principais, estamos felizes por podermos dedicar tempo para otimizar, testar e lançar esse recurso adequadamente. Deixe-nos saber
abaixo se você encontrar algum problema.

Saudações!

{{/isPost}}

---