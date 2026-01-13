---
[category:UI & Customization]

###### [postdate]
# [postlink]Tamanhos de Página Agora São Personalizáveis[/postlink]

{{#unless isPost}}
O FastComments tinha um tamanho de página fixo de 30 comentários desde o lançamento. Agora isso é personalizável!
{{/unless}}

{{#isPost}}

### O Que Há de Novo

Suas threads de comentário agora podem ter tamanhos de paginação variados, e isso pode ser personalizado globalmente em sua conta, ou em um site, ou até mesmo no nível de página. Isso pode ser desejável se você quiser que certas páginas tenham menos ou mais comentários exibidos antes que o usuário precise paginar.

Isso também afeta a rolagem infinita, e quaisquer frameworks ou integrações que renderizam comentários do FastComments.

Os tamanhos de página podem variar de `10` até `200`. O padrão permanece em `30`.

### Como Fazer

Basta ir até a confiável [Interface de Personalização do Widget](https://fastcomments.com/auth/my-account/customize-widget) e definir o seu tamanho de página.

Note que o FastComments pré-calcula os comentários exibidos em cada página, então alterar este parâmetro fará com que nosso sistema recalcule todas as suas threads de comentários. Isso não causará nenhum tempo de inatividade, mas pode levar alguns minutos para que a alteração apareça.

### Documentação

A documentação atualizada sobre tamanhos de página pode ser encontrada em [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Mudanças Quebradoras

Como parte dessa mudança, duas traduções definidas no widget de comentários foram renomeadas. `PREV_30` e `NEXT_30` agora são `PREV` e `NEXT`, respectivamente, e contêm uma variável `[count]`.

Se você definiu traduções para os botões de paginação por meio da Interface de Personalização do Widget, então já migramos isso para você. Se você está passando as traduções de algum tipo de integração via código, você terá que atualizar isso:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### Em Conclusão

Como em todos os grandes lançamentos, estamos satisfeitos por termos tido tempo para otimizar, testar e lançar adequadamente este recurso. Deixe-nos saber abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}

---