---
[category:Analytics]
###### [postdate]
# [postlink]FastComments Agora Pode Mostrar Contagem de Visualizações de Comentários[/postlink]

{{#unless isPost}}
O FastComments agora suporta mostrar uma contagem ao lado de cada comentário que incrementa ao vivo à medida que os usuários visualizam comentários.
{{/unless}}

{{#isPost}}

### Novidades

O FastComments agora suporta mostrar uma contagem ao lado de cada comentário que incrementa ao vivo à medida que os usuários visualizam comentários. Se um comentário é visualizado ou não é determinado pela conta do usuário ou sessão anônima. Suporta SSO (tanto SSO Seguro quanto SSO Simples).

### Demonstração Ao Vivo

Ativamos uma contagem de visualizações de comentários para este post de blog especificamente! Confira a contagem ao lado do ícone de olho em cada comentário!

### Documentação

[Você pode encontrar a documentação do desenvolvedor para configurar Contagens de Visualização aqui.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Desempenho

As contagens não são atualizadas imediatamente, há um pequeno atraso (de até três segundos) enquanto as contagens são agregadas e depois enviadas pela rede. Essa é uma otimização para que, se você tiver um evento ao vivo, e algumas milhares de pessoas visualizarem, digamos, 10 comentários em média na página, não enviemos instantaneamente milhões de atualizações (`3000 usuários x 3000 carregamentos de página = ~9 milhões de alterações`) para cada usuário e sobrecarreguemos seu navegador ou usemos toda a largura de banda da sua rede.

### Em Conclusão

Agradecemos aos nossos clientes que nos dão feedback contínuo para que possamos pensar em ideias como essa e também nos dar tempo para lançar recursos bem otimizados. Esperamos que você continue amando o FastComments.

Saúde!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---