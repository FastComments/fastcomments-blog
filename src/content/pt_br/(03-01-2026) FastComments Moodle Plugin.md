---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Plugin FastComments para Moodle[/postlink]

{{#unless isPost}}
O FastComments agora tem um plugin dedicado para Moodle com SSO, comentários em threads e chat colaborativo para seus cursos.
{{/unless}}

{{#isPost}}

### Novidades

Estamos empolgados em anunciar o plugin oficial do FastComments para Moodle. Se você tem usado o Moodle e queria adicionar
comentários em tempo real, em threads ou chat colaborativo aos seus cursos, este plugin torna isso simples. Ele substitui a
antiga abordagem manual em PHP por um plugin apropriado para Moodle que instala em minutos e se integra com suas contas de
usuário do Moodle existentes. O plugin funciona com Moodle 4.1 e versões posteriores, e o código-fonte está disponível em
[GitHub](https://github.com/FastComments/fastcomments-moodle).

### Começando

Para instalar, obtenha o plugin no [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments) e instale-o
via o instalador de plugins do seu site Moodle. Alternativamente, você pode baixá-lo e extrair para
`<moodle-root>/local/fastcomments`, depois faça login como administrador do site e visite **Administração do Site > Notificações**.
O Moodle detectará o novo plugin e executará a instalação automaticamente.

Uma vez instalado, vá para **Administração do Site > Plugins > Plugins Locais > FastComments** para configurar. Você precisará do
seu **Tenant ID** (encontrado no seu painel do FastComments) e do seu **API Secret** se quiser usar o SSO Seguro, que recomendamos.

### Estilos de Comentário

O plugin suporta três estilos de comentários, para que você possa escolher o que funciona melhor para seus alunos e a estrutura
do curso.

O modo **Comentários** coloca um widget de comentários completo abaixo do conteúdo da página. Os alunos recebem respostas em
threads, @menções, avaliação positiva e negativa, um editor de texto rico e o sino de notificação para se inscrever em novos
comentários em uma página.

<div class="text-center">
    <div class="sm">Comentários em uma página do curso</div>
    <img src="images/moodle-course-comments.png" alt="Comentários do Curso" title="Comentários do Curso" />
</div>

O modo **Chat Colaborativo** adiciona uma barra na parte superior da página que pede aos usuários que selecionem texto e
começam uma discussão. O texto destacado é ancorado ao conteúdo, então a conversa permanece ligada exatamente ao que está
sendo discutido. Ele também mostra usuários online e o número de discussões ativas. Este modo não renderiza um widget na parte
inferior.

<div class="text-center">
    <div class="sm">Chat colaborativo ancorado ao texto selecionado</div>
    <img src="images/moodle-collab-chat.png" alt="Chat Colaborativo" title="Chat Colaborativo" />
</div>

O modo **Chat Colaborativo + Comentários** oferece os dois ao mesmo tempo. Os alunos podem destacar texto para discussões
inline e também usar o widget de comentários completo abaixo do conteúdo. Isso é ótimo para cursos onde você deseja tanto
feedback rápido inline quanto conversas mais longas em threads.

<div class="text-center">
    <div class="sm">Ambos os estilos de comentário ativos em uma página</div>
    <img src="images/moodle-page-comments.png" alt="Comentários da Página" title="Comentários da Página" />
</div>

### SSO Automático

O plugin suporta três modos de SSO. O **SSO Seguro** é a opção recomendada. Ele assina a identidade do usuário no lado do
servidor com HMAC-SHA256 usando seu API Secret, de modo que as credenciais nunca são expostas no cliente. Com o SSO Seguro,
os administradores do Moodle são automaticamente sincronizados como moderadores do FastComments, o que significa que seus
administradores de site podem moderar comentários sem nenhuma configuração extra. Avatares, nomes e endereços de e-mail dos
usuários são todos passados de forma segura.

O **SSO Simples** passa dados do usuário (nome, e-mail, avatar) do lado do cliente sem uma assinatura. É rápido de configurar,
mas menos seguro do que a abordagem HMAC. Finalmente, **Nenhum** desabilita completamente o SSO, de modo que os usuários
comentam anonimamente.

### Preferências de Notificação do Usuário

Os alunos podem gerenciar suas configurações de notificação do FastComments diretamente de seu perfil do Moodle. Na seção
**FastComments**, eles podem ativar ou desativar notificações de resposta (receber um e-mail quando alguém responde ao seu
comentário) e notificações de assinatura (receber e-mails para threads às quais se inscreveram). Isso mantém tudo em um só
lugar e dá aos alunos controle sobre a quantidade de e-mails que recebem.

### Em Conclusão

O plugin para Moodle já está disponível. Para o guia completo de configuração, confira o
[Guia de Integração do Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), e o código-fonte está em
[GitHub](https://github.com/FastComments/fastcomments-moodle). Deixe-nos saber abaixo se você tem algum feedback!

Saudações!

{{/isPost}}

---