---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Adicione um Chat Ao Vivo a Aplicativos Nativos Com FastComments React Native[/postlink]

{{#unless isPost}}
Depois de meses de trabalho, temos o prazer de anunciar que o fastcomments-react-native-sdk agora está na versão 1.0 para disponibilidade geral.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

### O Que Há de Novo

No FastComments, lançamos uma nova maneira de construir aplicativos React Native com FastComments. Anteriormente, você usaria nosso wrapper react-native em torno da biblioteca VanillaJS. Isso introduziu vários problemas de memória e latência devido à necessidade de uma web view - um navegador no seu aplicativo - apenas para carregar nossa biblioteca.

Agora, nós **completamente** portamos o FastComments para React Native e criamos nosso próprio editor WYSIWYG para eliminar completamente a necessidade de web views.

A biblioteca suporta diferentes temas e layouts. Por exemplo, aqui está o tema Erebus, que é um estilo de chat ao vivo escuro:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

A biblioteca está disponível [no GitHub em FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) assim como
[no NPM](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Personalizável

A nova biblioteca nativa foi projetada para ser personalizável assim como a biblioteca web existente.

Você pode:

- Personalizar todos os ativos e ícones que a biblioteca usa.
- Personalizar o estilo de cada componente na biblioteca passando um objeto Styles por cima.
- Personalizar todas as traduções.
- Usar um dos temas predefinidos ou desenvolvidos pela comunidade.
- Usar muitas das mesmas opções de configuração que a biblioteca web suporta.

### Lista Completa de Recursos

A biblioteca suporta muitas funcionalidades. Uma lista incompleta é:

- [x] Bloqueio
- [x] Reações de Chat
- [x] Comentários e Respostas de Filhos
- [x] Estilos Personalizados (como stylesheet tipado)
- [x] Emoticons
- [x] Marcação
- [x] Navegador de Gif - Com capacidade de tendência padrão e pesquisa. Imagens e busca anonimizada por proxy.
- [x] Comentários ao vivo
- [x] Seleção e Upload de Mídia
- [x] Editor WYSIWYG nativo com suporte a imagens.
- [x] Serviço de Notificações (receber notificações não lidas do usuário em segundo plano para enviar a eles, etc)
- [x] Lista de Notificações (mostra ao clicar no sino). Suporta assinaturas.
- [x] Paginação (Botões)
- [x] Paginação (Scroll Infinito)
- [x] Fixação de Comentários
- [x] Comentários seguros, simples SSO e anônimos.
- [x] Vários temas predefinidos.
- [x] Alternar Mostrar/Ocultar Comentários
- [x] Tópicos
- [x] Indicadores de atividade do usuário
- [x] Votação

### Como Funciona

A biblioteca é uma reescrita completa do cliente FastComments em TypeScript e React Native.

### Plano de Longo Prazo

A longo prazo, manteremos tanto a biblioteca VanillaJS quanto a biblioteca react-native em paralelo, assim como quaisquer futuras bibliotecas nativas que possamos desenvolver.

### O Que Vem a Seguir?

Estamos ansiosos por feedback dos usuários e da comunidade para melhorar esta biblioteca ao longo do tempo, assim como fizemos com o ecossistema web.

### Em Conclusão

Sabemos que esta biblioteca foi muito aguardada por alguns. Como todos os grandes lançamentos, estamos felizes que pudemos dedicar tempo para otimizar, testar e lançar adequadamente esta biblioteca.

Saudações!

{{/isPost}}

---