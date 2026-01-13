---
[category:Features]
###### [postdate]
# [postlink]FastComments Recebe @menções[/postlink]

{{#unless isPost}}
Já quis mencionar um ou mais usuários em um comentário? Agora você pode.
{{/unless}}

{{#isPost}}

### O que há de novo

Enquanto anteriormente o FastComments notificava os usuários se você respondesse aos comentários deles, não havia como marcar várias pessoas em um único comentário. Além disso, essas
notificações eram enviadas em lotes a cada hora. Com `@menções`, agora é possível marcar um ou mais usuários e o FastComments os notificará imediatamente por e-mail.

### Como Usar

Ao digitar `@`, e em seguida o início do nome de um usuário, uma lista de resultados de pesquisa aparecerá.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Uso de Menções" title="Demonstração de @menções" />
</div>

Basta clicar no nome do usuário que você deseja marcar.

Além disso, você pode usar as teclas de seta para cima e para baixo para navegar nesta lista, e pressionar enter para selecionar, ou escape para sair.

Sabemos que você pode querer usar o símbolo `@` sem marcar um usuário. O FastComments detectará isso e não interferirá na sua experiência de digitação.

### Quem Recebe

Todos os clientes atuais e novos do FastComments, em todos os níveis, agora têm acesso a `@menções`. As `@menções` foram portadas para versões anteriores do
widget de comentários.

### Como Funciona a Autocompletação

Os usuários mostrados na lista autocompletada são determinados por:

- Usuários que comentaram na mesma página ou thread.
- Usuários que criaram suas contas FastComments através do mesmo site.
- Moderadores do site atual.
- Usuários SSO que pertencem ao inquilino atual.

### Editando Comentários

Menções podem ser adicionadas a comentários existentes editando-os. No entanto, o aplicativo `Moderate Comments` atualmente não autocompleta `@menções`.

### Considerações Futuras

No futuro, usuários que tiverem o FastComments aberto em uma janela do navegador receberão um aviso quando forem mencionados, se tiverem optado por notificações.

### Em Conclusão

Como o restante do FastComments, esperamos que você ache este recurso rápido e fácil de usar.

Saudações!

{{/isPost}}