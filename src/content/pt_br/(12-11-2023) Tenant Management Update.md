---
[category:Features]
###### [postdate]
# [postlink]Atualização de Gerenciamento de Inquilinos[/postlink]

{{#unless isPost}}
FastComments melhorou a interação para gerenciar seus inquilinos!
{{/unless}}

{{#isPost}}

### Novidades

A partir de 11 de dezembro de 2023, o FastComments agora oferece a capacidade de alternar inquilinos sem se passar por outros usuários inquilinos.

### Público-Alvo

Essa atualização não é para comentaristas ou administradores de site que gerenciam um único site. Isso beneficia administradores que gerenciam muitos sites ou inquilinos apenas.

### Impacto para Administradores

Anteriormente, criar inquilinos e alternar usuários era um desafio. Alguns pontos problemáticos comuns eram:

1. Era necessário criar um usuário ao criar seu inquilino, pois esse usuário "possuía" o inquilino.
2. Isso significava que você tinha que usar um novo e-mail para cada site, mesmo que quisesse usar um único e-mail/conta para muitos sub-inquilinos.
3. Alternar inquilinos exigia impessoalidade, o que significava que seus usuários tinham que ser duplicados em todos os inquilinos, com as mesmas permissões, e assim por diante.

Agora:

1. Nenhuma criação de usuário é necessária ao criar um inquilino.
2. Qualquer usuário Super Admin com as permissões apropriadas tem as mesmas permissões em todos os sub-inquilinos.
3. Há um botão `Switch` na lista de inquilinos que retém seu usuário e permissões atuais, mas altera qual inquilino você está logado.
4. Se você é um administrador de um inquilino pai, tem permissões de moderador em sub-inquilinos ao usar o widget de comentários.

Os eventos ainda são registrados no Audit Log para o inquilino ao qual você foi alterado.

### Impessoalidade

Você ainda pode se passar por usuários. Altere para um inquilino e vá para a página `Users`.

### Para Desenvolvedores & Armadilhas

Ao usar a API `POST /tenants`, o campo `email` agora é opcional. A documentação foi atualizada.

### Atualizações Futuras

No futuro, haverá mais ações administrativas na lista de inquilinos, como excluir inquilinos e assim por diante.

### Em Conclusão

Como em todos os lançamentos importantes, estamos felizes por termos conseguido dedicar tempo para otimizar, testar e lançar adequadamente esse recurso. Informe-nos abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}

---