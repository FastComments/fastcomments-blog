---

[category:Features]
###### [postdate]
# [postlink]Page Reacts Lançado[/postlink]

{{#unless isPost}}
O FastComments agora suporta exibir reações de página juntamente com contagens acima do widget de comentários.
{{/unless}}

{{#isPost}}

### Novidades

O FastComments já suportava o que chamamos de nosso módulo de Feedback, onde você poderia exibir uma avaliação por estrelas, NPS ou outra pergunta acima da área de comentários.

No entanto, muitos usuários desejam algo mais simples - mostrar alguns ícones com reações acima do widget de comentários, poder personalizar esses ícones, talvez personalizar as opções por usuário, e assim por diante.

A partir de hoje, lançamos esse recurso.

Todos os planos do FastComments agora têm acesso a Reações de Página.

### Demonstração ao Vivo

Habilitamos uma configuração de demonstração de Reações de Página especificamente para esta postagem do blog, você pode encontrá-la abaixo!

### Documentação

[Você pode encontrar a documentação para desenvolvedores sobre como configurar Reações de Página aqui.](https://docs.fastcomments.com/guide-page-reacts.html)

### Lista de Usuários que Reagem

As Reações de Página também podem ser configuradas para mostrar uma dica que revela a lista de usuários que deixaram uma reação específica.

### Em Conclusão

Agradecemos aos nossos clientes que nos fornecem feedback contínuo para que possamos pensar em ideias como esta e também nos dar o tempo para lançar recursos bem otimizados. Esperamos que você continue amando o FastComments.

Saudações!

<script>
    window.demoOverrides = {
        pageReactConfig: {
            showUsers: true,
            reacts: [
                {id: 'droll', src: 'https://docs.fastcomments.com/images/emojis/droll.png'},
                {id: 'he', src: 'https://docs.fastcomments.com/images/emojis/heart-eyes.png'},
                {id: 'laugh', src: 'https://docs.fastcomments.com/images/emojis/laugh.png'},
                {
                    id: 'puke',
                    src: 'https://docs.fastcomments.com/images/emojis/puke.png',
                    selectedSrc: 'https://docs.fastcomments.com/images/emojis/puke-bw.png'
                },
                {id: 'rofl', src: 'https://docs.fastcomments.com/images/emojis/rofl.png'},
            ]
        }
    }
</script>

{{/isPost}}

---