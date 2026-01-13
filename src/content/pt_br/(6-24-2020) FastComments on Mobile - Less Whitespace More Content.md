---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments no Móvel - Menos Espaço em Branco Mais Conteúdo[/postlink]

{{#unless isPost}}
Melhoramos a legibilidade e a aparência do FastComments em dispositivos móveis.
{{/unless}}

{{#isPost}}
#### O Problema

Quando lançamos o FastComments, queríamos um design elegante que funcionasse bem tanto em dispositivos móveis quanto em navegadores de desktop. No entanto, à medida que adicionamos mais recursos e vimos os usuários interagirem com o FastComments, percebemos que estávamos desperdiçando espaço na tela em nossa interface de usuário móvel enquanto tentávamos torná-la "bonita".

Então, chegamos a um compromisso.

#### A Solução

Aqui você pode ver antes, não estávamos usando o espaço de maneira muito eficiente.

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="Versão Móvel Antes"
        title="Versão Móvel Antes"
        class='lozad' />
</div>

Agora, trocamos o espaço vertical da tela por espaço horizontal da tela.

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="Versão Móvel Depois"
        title="Versão Móvel Depois"
        class='lozad' />
</div>

    
#### Implicações da Regra de Customização

Estamos cientes de que, quando fazemos alterações de estilo no widget de comentários visível ao público, podemos quebrar as customizações de nossos clientes. Não se preocupe, estamos cuidando disso e revisamos o estilo do widget personalizado de todos para garantir que não esteja quebrado. No entanto, se você estiver vendo problemas, nos avise.

#### Implicações de Performance

Esta mudança aumentou o tamanho do widget em cerca de 300 bytes, levando-o a um total de 10.1kb. Assim como em todas as versões que aumentam o tamanho do widget, estaremos procurando maneiras de reduzi-lo novamente.

Boas comentários!

{{/isPost}}