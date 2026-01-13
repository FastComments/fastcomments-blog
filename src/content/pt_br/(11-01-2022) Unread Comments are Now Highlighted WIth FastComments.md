---
[category:UI & Customization]
###### [postdate]
# [postlink]Comentários Não Lidos Agora Estão Destacados Com FastComments[/postlink]

{{#unless isPost}}
Já voltou a uma página e quis retomar a leitura da seção de comentários de onde parou? O FastComments agora estiliza os comentários
que você perdeu, facilitando isso.
{{/unless}}

{{#isPost}}

### O Que Há de Novo

Já voltou a uma página e quis retomar a leitura da seção de comentários de onde parou? O FastComments agora estiliza os comentários
que você perdeu, facilitando isso.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar no novo comentário destacado." />
</div>

### Como Conseguir

Qualquer comentário que acionou uma notificação no aplicativo (respostas, respostas no mesmo tópico, ou comentários em uma página
que você está inscrito) será automaticamente destacado com o avatar do usuário brilhando levemente. A cor pode ser personalizada via CSS
usando a classe `is-unread`. A estilização padrão também suporta o modo escuro.

Além disso, uma nova classe CSS `24hr` foi adicionada aos elementos de comentário postados nas últimas 24 horas. Você pode usar isso para estilizar
os comentários também.

### Por Que Destacar O Avatar?

Reconhecemos que pode ser preferível destacar o comentário inteiro. No entanto, isso apresenta preocupações de legibilidade e estilização com
nossos clientes que personalizaram a plataforma para combinar com seu produto. Descobrimos que destacar o avatar levemente é uma mudança pouco intrusiva
na maioria dos casos. Se desejado, o brilho pode ser removido e alterado usando regras de personalização de widget.

### Em Conclusão

Sabemos que esse recurso é aguardado há muito por alguns. Passamos tempo escolhendo uma estilização que não fosse muito intrusiva, mas ainda assim útil, e podemos
fazer mais ajustes com base no feedback.

Saudações!

{{/isPost}}

---