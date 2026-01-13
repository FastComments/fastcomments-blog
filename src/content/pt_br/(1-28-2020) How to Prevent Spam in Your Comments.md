---
[category:Moderação]
[category:Tutoriais]
###### [postdate]
# [postlink]Como Prevenir Spam em Seus Comentários[/postlink]

Não há como combater spam 100%. Mas o FastComments implementa uma série de medidas para ajudar.

{{#isPost}}

## Documentação para Administradores do Site

Uma instalação padrão do FastComments tem os filtros de Spam e Profanidade habilitados.

Essas configurações padrões equilibram a prevenção de spam e não são muito intrusivas para a maioria das comunidades.

[Você pode querer conferir o guia de moderação](https://docs.fastcomments.com/guide-moderation.html).

## Como Funciona

Nosso filtro de spam usa um [classificador Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) para identificar spam.

Ele é treinado ao longo do tempo com base no que os administradores marcam como spam e não spam.

O FastComments é executado em um iframe em seu site. Isso torna mais difícil para bots de spam automatizados direcionarem sua seção de comentários. No entanto, se eles o fizerem
e nosso classificador descobrir que seus comentários são "spammys", eles serão ocultados de seus usuários. Como todos os outros comentários, eles também são marcados como
"precisa de revisão" na [página de moderação](https://fastcomments.com/auth/my-account/moderate-comments) do painel.

O filtro de profanidade, no entanto, não resulta em comentários ocultos por padrão. Ele apenas mascara as "palavras ruins" com asteriscos.

## Bloqueando Spam Completamente

Por padrão, o FastComments permitirá o spam, mas o ocultará e o marcará para revisão.

Se você deseja informar ao usuário que seu comentário foi detectado como spam e pedir que o revise, isso pode ser feito nas [Configurações de Moderação](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
ativando a configuração `Block Spam`.

## Ocultando Comentários Profanos

Comentários profanos podem ser ocultados ativando `Automatically Send Profane Comments to Spam` nas [Configurações de Moderação](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Configurações

Tanto o filtro de Profanidade quanto o de Spam podem ser individualmente desativados na página [Configurações de Moderação](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Verificação de Comentários

O FastComments emprega um sistema de verificação onde, por padrão, [comentários não verificados](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) são marcados como tal para que todos os usuários possam ver.

Ao permitir que os usuários comentem sem estar totalmente logados, isso reduz a barreira de entrada para entrar em uma discussão. O rótulo de não verificado pode ser ocultado por meio de regras de personalização.

Comentários não verificados são exibidos por padrão, mas podem ser ocultados até serem verificados por email, ativando `Only Auto Approve Verified Comments`.

Observe que com SSO, todos os comentários estão sempre verificados. Se um usuário estiver em uma sessão verificada, seus comentários também estarão sempre verificados.

Comentários não verificados também podem ser programados para remoção.

## Para Comentadores

Se seu comentário for detectado como spam, você verá uma mensagem imediatamente. Isso é para informá-lo que o comentário precisará ser revisado
antes de aparecer para os outros. A detecção de spam não pode ser 100% precisa, então entendemos se você sentir alguma frustração. Se seu comentário for legítimo, o
administrador do site deverá ser capaz de reconhecer isso e marcar seu comentário como não spam.

{{/isPost}}