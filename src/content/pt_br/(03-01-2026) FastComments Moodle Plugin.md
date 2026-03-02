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

Estamos empolgados em anunciar o plugin oficial FastComments para Moodle. Se você tem usado o Moodle e queria adicionar comentários em tempo real,
em threads ou chat colaborativo aos seus cursos, este plugin torna tudo simples. Ele substitui a antiga abordagem manual em PHP
por um plugin adequado para Moodle que é instalado em minutos e se integra com suas contas de usuário existentes do Moodle. O plugin funciona
com Moodle 4.1 e versões posteriores, e o código-fonte está disponível no [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Começando

Para instalar, baixe o ZIP do [repositório do GitHub](https://github.com/FastComments/fastcomments-moodle) e extraia-o
para `<moodle-root>/local/fastcomments`. Em seguida, faça login como administrador do site e visite **Administração do Site > Notificações**.
O Moodle detectará o novo plugin e executará a instalação automaticamente.

Uma vez instalado, vá para **Administração do Site > Plugins > Plugins Locais > FastComments** para configurar. Você precisará do seu
**ID do Inquilino** (encontrado no seu painel FastComments) e do seu **Segredo da API** se quiser usar o SSO Seguro, que recomendamos.

Note que o download manual do GitHub é temporário enquanto aguardamos a aprovação do plugin no diretório de plugins do Moodle. Uma vez aprovado, você poderá instalá-lo diretamente pelo instalador de plugins do Moodle.

### Estilos de Comentário

O plugin suporta três estilos de comentários, para que você possa escolher o que funciona melhor para seus alunos e estrutura do curso.

O modo **Comentários** coloca um widget de comentários completo abaixo do conteúdo da página. Os alunos recebem respostas em threads, @menções,
votação positiva e negativa, um editor de texto rico e o sino de notificações para se inscrever em novos comentários em uma página.

<div class="text-center">
    <div class="sm">Comentários em uma página de curso</div>
    <img src="images/moodle-course-comments.png" alt="Comentários do Curso" title="Comentários do Curso" />
</div>

O modo **Chat Colaborativo** adiciona uma barra na parte superior da página que solicita aos usuários que selecionem texto e iniciem uma discussão. O
texto destacado é ancorado ao conteúdo, para que a conversa permaneça vinculada exatamente ao que está sendo discutido. Ele também
mostra usuários online e o número de discussões ativas. Este modo não renderiza um widget na parte inferior.

<div class="text-center">
    <div class="sm">Chat colaborativo ancorado ao texto selecionado</div>
    <img src="images/moodle-collab-chat.png" alt="Chat Colaborativo" title="Chat Colaborativo" />
</div>

**Chat Colaborativo + Comentários** oferece ambos ao mesmo tempo. Os alunos podem destacar texto para discussões inline e também
usar o widget de comentários completo abaixo do conteúdo. Isso é ótimo para cursos onde você deseja tanto feedback rápido inline quanto
conversas mais extensas em threads.

<div class="text-center">
    <div class="sm">Ambos os estilos de comentário ativos em uma página</div>
    <img src="images/moodle-page-comments.png" alt="Comentários da Página" title="Comentários da Página" />
</div>

### SSO Automático

O plugin suporta três modos de SSO. **SSO Seguro** é a opção recomendada. Ele assina a identidade do usuário do lado do servidor com
HMAC-SHA256 usando seu Segredo da API, para que as credenciais nunca sejam expostas no cliente. Com o SSO Seguro, administradores do Moodle são
sincronizados automaticamente como moderadores do FastComments, o que significa que seus administradores do site podem moderar comentários sem nenhuma
configuração extra. Os avatares, nomes e endereços de e-mail dos usuários são todos transmitidos com segurança.

**SSO Simples** transmite dados do usuário (nome, e-mail, avatar) do lado do cliente sem uma assinatura. É rápido de configurar, mas menos seguro
do que a abordagem HMAC. Por fim, **Nenhum** desativa completamente o SSO, de modo que os usuários comentem anonimamente.

### Preferências de Notificação de Usuário

Os alunos podem gerenciar suas configurações de notificação do FastComments diretamente de seu perfil Moodle. Na seção **FastComments**
eles podem alternar as notificações de respostas (receber um e-mail quando alguém responder ao seu comentário) e notificações de assinatura
(receber e-mails para threads nas quais se inscreveram). Isso mantém tudo em um só lugar e dá aos alunos controle sobre a quantidade de e-mails que recebem.

### Conclusão

O plugin Moodle está disponível agora. Para o guia completo de configuração, confira o
[Guia de Integração do Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), e o código-fonte está no
[GitHub](https://github.com/FastComments/fastcomments-moodle). Deixe-nos saber abaixo se você tiver algum feedback!

Saudações!

{{/isPost}}