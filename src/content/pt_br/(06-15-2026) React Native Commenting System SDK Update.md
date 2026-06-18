---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Atualização do SDK do Sistema de Comentários do React Native[/postlink]

{{#unless isPost}}
Reestruturamos o fastcomments-react-native-sdk do zero: novo gerenciamento de estado mais eficiente, um redesign utilizando Design Tokens, um widget de chat ao vivo dedicado e suporte de primeira classe para a web.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

### O que há de novo

Acabamos de lançar a versão 5.1 do `fastcomments-react-native-sdk`, nossa biblioteca React Native que renderiza comentários e chat com componentes nativos reais em vez de um WebView.

Reescrevemos a estrutura interna, redesenhamos toda a aparência, adicionamos um widget de chat ao vivo, trouxemos o SDK para a web e atualizamos para a versão mais recente do React Native e React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, tema claro" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tema escuro" title="FastComments React Native SDK, tema escuro" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Por que duas bibliotecas React Native?

Uma nota rápida, porque recebemos essa pergunta. Nós oferecemos duas opções:

- `fastcomments-react-native` é uma camada fina sobre nosso widget web rodando em um WebView. É a maneira mais rápida de obter todos os recursos instantaneamente, e se beneficiará automaticamente de correções da web.
- `fastcomments-react-native-sdk` (este) renderiza a interface do usuário com componentes nativos do React Native sem um WebView. É mais flexível, totalmente personalizável e tem uma sensação nativa porque é nativo.

Para a melhor experiência, recomendamos o SDK. O restante deste post é sobre o que mudou na versão 5.0.

### Novo gerenciamento de estado

O motivador principal dessa mudança é garantir que nossa biblioteca permaneça fiel ao nosso nome e continue Rápida. Tivemos vários clientes reclamando sobre seu desempenho, então isso agora foi corrigido.

O SDK originalmente mantinha sua árvore de comentários no Hookstate. Ele funcionava, mas à medida que os threads e atualizações ao vivo cresciam, as coisas começaram a desacelerar.

Substituímos o Hookstate pelo Zustand e uma loja plana, indexada. Os comentários agora residem em um mapa `byId` ao lado dos índices `childrenByParent`, `rootOrder` e `pinnedIds`, em vez de uma árvore aninhada dentro do estado.

O resultado:

- Eventos ao vivo (um novo comentário, um voto, uma edição) se tornaram mutações O(1) em vez de percorrer e clonar uma árvore.
- Eliminamos dois deep-clones JSON de árvore inteira que costumavam ser executados em cada fetch.
- Os componentes se inscrevem exatamente nas partes que leem, o modelo padrão de seletor, então um voto em um comentário afeta apenas um comentário.

Esse último ponto é mais importante do que parece. Com assinaturas baseadas em seletores, uma linha só é renderizada novamente quando seus próprios dados mudam.

### Um redesign baseado em tokens

A aparência antiga era uma pilha de estilos codificados. O novo padrão é gerado a partir de um conjunto de tokens de design semânticos (`FastCommentsTheme`): cores, espaçamento, raio, tamanhos de fonte, pesos de fonte e tamanhos de avatar. Toda a árvore de estilo é derivada desses tokens.

Isso significa que reestilizar é uma propriedade:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

O modo escuro está a um conjunto de tokens de distância:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

O redesign em si possui uma aparência limpa e moderna: separadores finos, botões de voto e chips em forma de pílula, botões primários preenchidos, avatares arredondados e uma escala tipográfica consistente. A propriedade `styles` ainda está lá para substituições específicas, então as integrações existentes continuam funcionando.

### Um widget de chat ao vivo dedicado

Adicionamos o `FastCommentsLiveChat`, um preset de chat sobre o mesmo motor que espelha a visão de chat do nosso SDK para Android: mensagens cronológicas com as mais novas na parte inferior, o compositor abaixo da lista, uma faixa de cabeçalho ao vivo com um ponto de conexão e contagem de usuários, rolagem automática que pausa enquanto você lê mensagens mais antigas, e histórico infinito enquanto você rola para cima. Cada preset é configurável através de `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Agora na web também

O mesmo SDK agora roda na web através do `react-native-web`. O compositor de texto rico (alimentado por `react-native-enriched`) renderiza da mesma forma no iOS, Android e no navegador, então a experiência de edição é consistente em todos os lugares com uma única implementação. Overlays que a lista de comentários cortaria (menus, o seletor de GIFs, a lista de notificações) são ancorados sob seus gatilhos na versão web.

Você pode experimentar cada widget por conta própria no <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">navegador de componentes</a> ao vivo, que é este SDK rodando no navegador via `react-native-web`.

### Mantendo-se atualizado com o React Native

A versão 5.0 foi construída e testada contra o React Native 0.81 e React 19, e é direcionada à Nova Arquitetura (Fabric), que o editor de texto rico nativo requer. Manter-se atualizado aqui não é trabalho à toa: o editor, o manuseio de gestos e a renderização ficam mais rápidos e corretos conforme o React Native avança, e preferimos fazer essas atualizações de forma constante do que ficar anos para trás.

### Em conclusão

Essa reescrita foi sobre dar ao SDK do React Native a mesma base de primeira classe que nossas outras bibliotecas: um modelo de dados rápido e previsível, uma aparência que você pode personalizar em uma propriedade, um widget de chat e suporte à web, tudo sobre uma fundação moderna do React Native.

Você pode encontrar o SDK no <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, o código-fonte, com exemplos, no <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, e cada widget funcionando ao vivo no <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">navegador de componentes</a>. Deixe-nos saber abaixo se você encontrar qualquer coisa.

Saudações!

{{/isPost}}

---