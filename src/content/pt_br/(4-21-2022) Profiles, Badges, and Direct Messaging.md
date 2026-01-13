---
[category:Features]

###### [postdate]

# [postlink]Perfis, Distintivos e Mensagens Diretas[/postlink]

{{#unless isPost}}Nesta versão, temos muitos recursos que recompensam comunidades que usam o FastComments e ajudam a se comunicar.{{/unless}}

{{#isPost}}

### Novidades
O FastComments lançou oficialmente Perfis de Usuário e recursos relacionados.

### Perfis de Usuário

O perfil de um usuário consiste em seu nome, se ele está online, sua atividade recente e um espaço para comentar em seu perfil.

Seus distintivos e o progresso na conquista de distintivos também são exibidos aqui.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="Perfil de Usuário FastComments" title="Perfil de Usuário FastComments"></video>
</div>

Os usuários podem ver seu próprio perfil clicando em seu avatar em um tópico de comentários ou [indo para sua página de conta](https://fastcomments.com/auth/my-account).

Além disso, você pode enviar uma mensagem direta para um usuário a partir de seu perfil.

### Modal de Perfil do Usuário
Quando o avatar de um usuário é selecionado, o Modal de Perfil será aberto. Este recurso também foi adicionado para moderadores na página de Moderação de Comentários.

### Recompensando Usuários Com Distintivos

Os distintivos são outra adição recente ao FastComments que permite recompensar usuários de sua comunidade. Criar um distintivo é fácil:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Criar um Distintivo" title="Criar um Distintivo" />
</div>

Os distintivos podem ser concedidos com base nas seguintes condições:

- Número de Comentários Deixados
- Número de Up-Votes Obtidos
- Número de Respostas Recebidas
- Número de Comentários Fixados
- Veterano (tempo desde o primeiro comentário)
- Comentando Tarde da Noite
- Tempo Rápido de Resposta
- Responder a Página Específica
- Moderadores - Número de Comentários Excluídos
- Moderadores - Número de Comentários Aprovados
- Moderadores - Número de Comentários Não Aprovados
- Moderadores - Número de Comentários Revisados
- Moderadores - Número de Comentários Marcados como Spam
- Moderadores - Número de Comentários Marcados como Não Spam

Como você pode ver, existem muitos tipos de situações pelas quais podemos recompensar os usuários.

Podemos definir vários *níveis* de distintivos. Por exemplo, poderíamos adicionar distintivos de `Contagem de Comentários` com limiares de 10, 100 e 1000 comentários deixados. À medida que os usuários interagem em sua comunidade, os distintivos ganhos **se acumulam** ao longo do tempo.

Não podemos esquecer dos *Moderadores*. Em muitas comunidades, este é um trabalho ingrato. Dê aos seus moderadores algo para mostrar configurando distintivos de Moderador para eles.

Também apoiamos alguns casos únicos, como os distintivos `Coruja Noturna` e `Tempo Rápido de Resposta` para reconhecer membros que estão ativos tarde da noite ou que estão respondendo rapidamente. `Tempo Rápido de Resposta` funciona melhor quando os recursos ao vivo do FastComments são usados.

Quando novos distintivos são criados, eles serão adicionados automaticamente a membros existentes de sua comunidade que se qualificam.

### Mensagem Direta

Os clientes pediram a capacidade de enviar Mensagens Diretas para usuários desde o lançamento do FastComments. Após dois anos, estamos felizes em finalmente anunciar esse recurso e agradecer àqueles que aguardaram pacientemente.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="Mensagens Diretas FastComments" title="Mensagens Diretas FastComments"></video>
</div>

A Mensagem Direta permite que membros de uma comunidade se enviem mensagens entre si de forma privada, mas também serve como uma ferramenta útil para Moderadores e Administradores se comunicarem com os comentaristas.

Como a maioria dos recursos do FastComments, todas as funcionalidades de Mensagem Direta são ao vivo.

#### Mensagem Direta Assíncrona

Quando você envia uma mensagem a um usuário, ele pode estar offline. Neste caso, enviaremos um e-mail ao usuário informando-o de que ele tem uma nova mensagem.

#### Mensagem Direta Via E-mail

Quando um usuário recebe uma mensagem por e-mail, ele tem a capacidade de responder respondendo a esse e-mail.

<div class="text-center">
    <img src="/images/email-dm.png" alt="E-mail de DM" title="E-mail de DM" />
</div>

Quando isso acontece, a resposta dele aparecerá **ao vivo** para o outro usuário na aba Mensagens de seu perfil.

### SSO Seguro

Os Perfis de Usuário FastComments são totalmente compatíveis com as instalações SSO Seguras existentes.

Coisas como as configurações de privacidade do usuário também podem ser configuradas através da flag `isProfileActivityPrivate` no payload SSO.

Por padrão, `isProfileActivityPrivate` é verdadeiro.

### Clientes Existentes

Concluímos a implementação deste recurso para todos os clientes existentes em todos os níveis.

### Configurando Privacidade

Ao visualizar seu perfil, há opções para:

- Desabilitar comentários em seu perfil.
- Impedir que sua atividade seja visível por outros.
- Impedir que outros lhe enviem mensagens diretas.

### Dados Coletados

Os Perfis de Usuário são criados com base nos dados que temos hoje, como seu nome, quais comentários ele deixou recentemente e assim por diante.

Não coletaremos dados adicionais para expandir os perfis dos usuários. Gostamos de pensar nos Perfis de Usuário mais como o perfil de um usuário típico em um fórum.

### Em Conclusão

Acreditamos que esses recursos expandem significativamente o FastComments como uma plataforma, e esperamos que você os ache úteis e fáceis de usar.

Saudações!

{{/isPost}}

---