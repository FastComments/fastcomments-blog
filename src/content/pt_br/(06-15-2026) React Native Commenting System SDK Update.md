---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Atualização do SDK do Sistema de Comentários React Native[/postlink]

{{#unless isPost}}
Reconstruímos o fastcomments-react-native-sdk do zero: novo gerenciamento de estado mais eficiente, um redesign usando Design Tokens, um widget de chat ao vivo dedicado e suporte da web em primeiro nível.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

### O que há de Novo

Acabamos de lançar a versão 5.1 do `fastcomments-react-native-sdk`, nossa biblioteca React Native que renderiza comentários e chat com componentes nativos reais em vez de um WebView.

Reescrevemos a parte interna, redesenhamos toda a aparência, adicionamos um widget de chat ao vivo, trouxemos o SDK para a web e atualizamos para a versão mais recente do React Native e React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, tema claro" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tema escuro" title="FastComments React Native SDK, tema escuro" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Por Que Duas Bibliotecas React Native?

Uma nota rápida, porque recebemos essa pergunta. Nós lançamos duas opções:

- `fastcomments-react-native` é um envoltório leve em torno de nosso widget web rodando em um WebView. É a maneira mais rápida de obter todos os recursos instantaneamente e se beneficia das correções da web automaticamente.
- `fastcomments-react-native-sdk` (este) renderiza a UI com componentes nativos do React Native sem um webview. É mais flexível, totalmente personalizável e parece nativo porque é nativo.

Para a melhor experiência, recomendamos o SDK. O restante deste post é sobre o que mudou na versão 5.0.

### Novo Gerenciamento de Estado

O principal objetivo dessa mudança é garantir que nossa biblioteca continue fiel ao nosso nome e permaneça Rápida. Tivemos vários clientes reclamando
sobre seu desempenho, então isso agora está resolvido.

O SDK originalmente mantinha sua árvore de comentários no Hookstate. Funcionava, mas à medida que os threads e atualizações ao vivo cresciam, as coisas começavam a desacelerar.

Substituímos o Hookstate pelo Zustand e uma loja plana e indexada. Comentários agora vivem em um mapa `byId` ao lado de índices `childrenByParent`, `rootOrder` e `pinnedIds`, em vez de uma árvore aninhada dentro do estado.

O resultado:

- Eventos ao vivo (um novo comentário, um voto, uma edição) se tornaram mutações O(1) em vez de andar e clonar uma árvore.
- Eliminamos dois clones JSON completos da árvore que costumavam rodar em cada fetch.
- Componentes se inscrevem exatamente nas fatias que leem, o modelo padrão de seletor, então um voto em um comentário afeta apenas um comentário.

Esse último ponto é mais importante do que parece. Com assinaturas baseadas em seletor, uma linha só re-renderiza quando seus próprios dados mudam.

### Um Redesign Baseado em Tokens

A aparência antiga era uma pilha de estilos codificados. O novo padrão é gerado a partir de um conjunto de tokens de design semântico (`FastCommentsTheme`): cores, espaçamento, raios, tamanhos de fonte, pesos de fonte e tamanhos de avatar. Toda a árvore de estilos é derivada desses tokens.

Isso significa que a reformatação é uma propriedade:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

O modo escuro está a apenas um conjunto de tokens de distância:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

O redesign em si é uma aparência mais limpa e moderna: separadores finos, botões de voto em pílula e chips, botões primários preenchidos, avatares arredondados e uma escala de tipografia consistente. A propriedade `styles` ainda está lá para modificações cirúrgicas, então integrações existentes continuam funcionando.

### Um Widget de Chat Ao Vivo Dedicado

Adicionamos `FastCommentsLiveChat`, um preset de chat sobre o mesmo motor que espelha a visão de chat do nosso SDK Android: mensagens cronológicas com as mais novas na parte inferior, o compositor abaixo da lista, uma faixa superior ao vivo com um ponto de conexão e contagem de usuários, rolagem automática que pausa enquanto você lê mensagens mais antigas, e histórico infinito enquanto você rola para cima. Cada preset é substituível através de `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Agora Também na Web

O mesmo SDK agora funciona na web através do `react-native-web`. O compositor de texto enriquecido (alimentado pelo `react-native-enriched`) renderiza da mesma forma no iOS, Android e no navegador, então a experiência de edição é consistente em todos os lugares com uma única implementação. Sobreposições que a lista de comentários normalmente cortaria (menus, o seletor de GIFs, a lista de notificações) são ancoradas sob seus gatilhos na versão web.

### Mantendo-se Atualizado com o React Native

A versão 5.0 é construída e testada contra o React Native 0.81 e o React 19, e tem como alvo a Nova Arquitetura (Fabric), que o editor de texto rico nativo requer. Manter-se atualizado aqui não é perda de tempo: o editor, o manuseio de gestos e a renderização tornam-se mais rápidos e mais corretos à medida que o React Native avança, e preferimos levar esses upgrades de forma constante do que ficar anos atrás.

### Em Conclusão

Esta reescrita foi sobre dar ao SDK do React Native o mesmo status de primeira classe que nossas outras bibliotecas: um modelo de dados rápido e previsível, uma aparência que você pode personalizar em uma propriedade, um widget de chat e suporte à web, tudo sobre uma base moderna do React Native.

Você pode encontrar o SDK no <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> e o código-fonte, com exemplos, no <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Informe-nos abaixo se você encontrar qualquer coisa.

Saudações!

{{/isPost}}

---