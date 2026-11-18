[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]Adicione Enquetes ao Vivo aos Seus Comentários com FastComments[/postlink]

{{#unless isPost}}
Os comentários agora têm enquetes ao vivo! Os leitores votam na própria thread, os resultados são atualizados ao vivo para todos na página, e as enquetes funcionam no widget web e em nossos SDKs para iOS, Android e React Native.
{{/unless}}

{{#isPost}}

### Novidades

Esta versão adiciona **Enquetes ao Vivo**. Uma enquete é anexada a um comentário e é renderizada dentro dele. Os leitores clicam em uma opção para votar, sem sair da thread, e os resultados são atualizados ao vivo para todos que visualizam a página à medida que os votos chegam. Sem recarregar, e ninguém precisa contar respostas manualmente.

<img src="images/fc-live-polls.png" alt="Um comentário com uma enquete perguntando qual formato o próximo encontro deve ter, mostrando Presencial em 34%, Online em 21% e Híbrido em 45%, com 53 respostas" title="Enquetes ao Vivo" class="lozad" />

Como a enquete é um comentário, a conversa permanece anexada a ele. As pessoas votam e depois respondem para dizer por quê.

### Criando uma Enquete

Quando as enquetes estão ativadas, o editor de comentários recebe um botão de enquete. Clicar nele abre um editor de enquete abaixo da caixa de texto, onde você define:

- **A pergunta**, até 200 caracteres.
- **As opções**, de 2 a 10.
- **Quando fecha**: nunca, ou após 1 dia, 3 dias ou 1 semana. Uma enquete fechada mostra seus resultados finais e deixa de aceitar votos.
- **Privacidade**: anônima, visível para administradores, ou pública.
- **Exigir Voto para Ver Resultados**, que mantém os resultados ocultos de cada visualizador até que votem ou a enquete feche.

Em seguida, escreva seu comentário e publique‑o como de costume. As enquetes funcionam em novos comentários e em respostas.

### Votação

Cada pessoa recebe um voto por enquete e pode alterá‑lo enquanto a enquete está aberta. A menos que a enquete exija um voto primeiro, os leitores podem clicar em **Mostrar resultados** para ver a situação antes de escolher.

A privacidade é definida por enquete e exibida logo abaixo das opções, para que os votantes saibam quem pode ver seu voto antes de enviá‑lo. Enquetes anônimas (o padrão) mostram apenas os totais, e ninguém, inclusive administradores, pode ver quem votou em quê. Em enquetes visíveis para administradores, administradores e moderadores podem abrir **Ver quem votou**. Em enquetes públicas, qualquer pessoa pode.

### Ativando

As enquetes estão desativadas por padrão. Abra sua <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Personalização de Widget</a>, marque **Enable Polls**, e escolha quem pode criá‑las:

- **Somente Administradores/Moderadores** (o padrão), para quando você quiser conduzir as enquetes você mesmo.
- **Todos**, para quando você quiser que sua comunidade faça perguntas uns aos outros.

Votar requer um usuário conectado por padrão. Marque **Allow Anonymous Poll Votes** para permitir que qualquer pessoa vote. Para manter a justiça, votos anônimos são limitados a três por endereço IP por enquete por hora.

Como toda regra de personalização, isso pode ser aplicado a todo o seu site, a um domínio ou a uma única página.

### Notificações

O autor de uma enquete recebe informações sobre as respostas à medida que chegam: uma notificação, agrupada quando muitas pessoas votam ao mesmo tempo, e um e‑mail diário quando a enquete recebeu novas respostas naquele dia. Apenas o primeiro voto conta como resposta, portanto, alguém que muda de ideia não gera mais notificações. As notificações seguem a privacidade da enquete, de modo que uma enquete anônima informa apenas quantas novas respostas chegaram, nunca quem.

### SDKs Nativos para Mobile

As enquetes não estão apenas no widget web. Nossos SDKs nativos renderizam o cartão da enquete, o editor da enquete, os resultados ao vivo e a lista de votantes com componentes nativos reais, e leem as mesmas configurações do widget a partir do seu painel. Ative as enquetes uma vez e elas aparecerão no seu site e nos seus aplicativos.

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, via Swift Package Manager.
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, como `com.fastcomments:android-sdk:2.1.0`.
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, no NPM.

Os SDKs iOS e Android também podem publicar uma enquete a partir da sua própria UI. No iOS, fica assim:

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

Os READMEs para <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> e
<a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a>, e o
<a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">changelog do React Native</a>,
cobrem os detalhes, incluindo como restilizar as cores da enquete para combinar com seu aplicativo.

### A API

As enquetes também estão na REST API. Você pode criar uma enquete junto com seu comentário passando `poll` para `POST /api/v1/comments`, ou adicionar, editar, fechar e remover uma mais tarde com `/api/v1/polls/:commentId`. Votos podem ser listados, enviados e removidos com `/api/v1/poll-votes`, o que facilita exportar resultados para uma planilha ou seu próprio CMS. A API segue as mesmas configurações do widget, e votos individuais em enquetes anônimas não podem ser lidos através dela.

### Sobrecarga

O código da enquete não é carregado a menos que as enquetes estejam ativadas, portanto não desacelera o widget de comentários para mais ninguém.

### Documentação

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">O guia de Enquetes ao Vivo</a> cobre a ativação de enquetes, quem pode criá‑las, votos anônimos, privacidade dos votantes, notificações e a API.

### Experimente

Há uma enquete ao vivo na <a href="https://fastcomments.com/product/live-polls" target="_blank">demo de Enquetes ao Vivo</a>. Vote nela, abra a página em uma segunda aba e veja os resultados mudarem. Você também pode publicar sua própria enquete lá.

### Em Conclusão

Se seus tópicos continuam se transformando em contagens de cabeças, experimente as enquetes e nos diga abaixo o que você gostaria de ver a seguir.

Saúde!

{{/isPost}}

---