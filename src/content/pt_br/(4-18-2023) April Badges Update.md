---
[category:Features]

###### [postdate]

# [postlink]Atualização dos Badges de Abril[/postlink]

{{#unless isPost}}Algumas mudanças foram feitas nos badges, algumas funcionalidades foram adicionadas e algumas melhorias foram feitas para evitar que os badges desapareçam quando ocorre reprocessamento.{{/unless}}

{{#isPost}}

### O que há de Novo - Empilhamento de Badges

Antes de ontem, se você tinha um conjunto de badges na sua comunidade como os seguintes:

- Novo Comentador (1 comentário)
- Membro da Comunidade (50 comentários)
- Especialista (500 comentários)

... e um usuário acaba com 500 comentários, os badges serão exibidos em seus comentários assim:

    [Novo Comentador] [Membro da Comunidade] [Especialista]

Nesse cenário específico, provavelmente queremos que apenas o badge `Especialista` seja exibido. Bem, a maioria dos nossos clientes quer isso, mas nem todos. Nem todos os nossos inquilinos têm a mesma configuração e reconhecemos isso.

No entanto, para as comunidades que seguem o padrão acima, que são a maioria delas, elas querem que os comentários mostrem o badge mais prestigioso.

Para lidar com esse caso de uso, adicionamos o conceito de um badge **substituindo** outro badge. Ao fazer isso, podemos criar um fluxo de badges que um usuário pode conquistar:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Empilhamento de Badges" title="Empilhamento de Badges" />
</div>

Internamente, chamamos isso de *empilhamento de badges*. O novo badge "empilha-se" sobre o antigo.

Podemos configurar isso editando um badge e dizendo que ele substitui outro:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Configuração do Empilhamento de Badges" title="Configuração do Empilhamento de Badges" />
</div>

Obviamente, isso pode se tornar difícil de acompanhar, então a lista de badges também foi atualizada para fornecer mais informações, incluindo qual badge substitui o que.

### O que há de Novo - Melhorias no Reprocessamento

Quando você faz uma mudança em um badge, precisamos passar por todos os seus usuários e determinar se eles ainda devem "conquistar" o badge,
e atualizar todos os estilos de badge exibidos, além de caches para que a versão mais recente seja exibida.

O reprocessamento não remove mais um badge de um usuário ao salvar, mesmo que eles não atendam mais aos critérios **a menos que os critérios configurados mudem**.

Administradores, observem - vocês podem diminuir os critérios de limite para um badge sem que o reprocessamento remova esse badge. Apenas **aumentar** o limite causará reprocessamento que pode remover o badge em alguns casos.

Para mais informações, continue lendo em *A Perspectiva do Comentador*.

### A Perspectiva do Comentador

Reprocessar badges é muito arriscado, pois os usuários adoram seus badges - e reconhecemos isso! Não queremos retirar um badge de um usuário porque ele conquistou o badge de Resposta devido a 100 usuários responderem aos seus comentários, e depois 10 usuários apagarem seus comentários ou serem removidos por moderadores.

O badge deve permanecer, e ele permanece, exceto...

No reprocessamento, não sabemos que aqueles comentários anteriores existem, então o badge pode ser removido de alguns usuários se um badge for editado, como se o estilo
for atualizado, ou se o empilhamento de badges for configurado.

Isso foi o que aconteceu em 17 de abril de 2023, quando lançamos o *Empilhamento de Badges* e algumas comunidades habilitaram a funcionalidade.

Dois cenários foram observados:

1. Os usuários descobriram que alguns de seus badges pareceram removidos. O que realmente aconteceu foi que todos os badges, exceto os mais prestigiosos, ficaram ocultos.
   - **Você pode exibir todos os seus badges se quiser.** Basta clicar no menu de três pontos no canto superior direito do seu perfil e clicar em `Gerenciar Badges`.
2. Alguns badges foram realmente removidos de alguns usuários, como no exemplo do badge de Resposta acima. Para evitar que isso aconteça no futuro, melhoramos o sistema de reprocessamento para que o badge não seja removido a menos que os critérios do badge mudem e você não atenda mais aos critérios, no entanto 
    desaconselhamos que os administradores da comunidade façam isso, pois, novamente, os usuários amam seus badges.

### Para Moderadores

Não houve mudanças do ponto de vista de um moderador, exceto que você verá menos badges exibidos na maioria dos casos. Você verá, em vez disso, os badges mais prestigiosos seus e de membros da sua comunidade exibidos.

### Clientes Existentes

Concluímos o lançamento dessa funcionalidade para todos os clientes existentes em todos os níveis! O empilhamento de badges não é habilitado por padrão e deve ser configurado manualmente.

### Em Conclusão

Esperamos que você ache esse novo conjunto de funcionalidades e correções útil e fácil de usar. 

Saudações!

{{/isPost}}