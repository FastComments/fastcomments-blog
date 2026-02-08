---
[category:Features]
[category:Ratings & Reviews]
###### [data do post]
# [postlink]Mostrar Detalhamento dos Resultados Após Responder às Perguntas[/postlink]

{{#unless isPost}}
O FastComments agora permite que você mostre aos usuários um detalhamento agregado de todas as respostas após eles responderem a uma pergunta de classificação ou pesquisa.
{{/unless}}

{{#isPost}}

### Novidades

Ao coletar feedback por meio de classificações em Estrelas, NPS, Curtir/Descurtir ou perguntas de Deslizamento, você agora pode mostrar aos usuários um detalhamento dos resultados imediatamente após eles responderem.

Anteriormente, os usuários respondiam a uma pergunta e apenas viam sua seleção destacada. Agora, com a nova configuração **Mostrar Detalhamento dos Resultados Após Responder**, eles veem como todos os outros naquela página responderam.

### Como é

Para **classificações em Estrelas**, o detalhamento mostra a classificação média com estrelas parcialmente preenchidas, um gráfico de barras de distribuição por estrela com porcentagens e o total de respostas.

Para **perguntas de NPS**, exibe a pontuação de NPS juntamente com as porcentagens de Promotores, Passivos e Detratores com barras codificadas por cores.

Para **Curtir/Descurtir**, os usuários veem a porcentagem dividida entre curtidas e descurtidas.

Para **perguntas de Deslizamento**, o valor médio e o total de respostas são mostrados.

Sub-perguntas também têm seu próprio detalhamento individual.

### Como Ativar

1. Vá para o [Personalizar UI](https://fastcomments.com/auth/my-account/customize-widget).
2. Edite sua regra de personalização (ou crie uma nova).
3. Nas configurações da pergunta, marque **Mostrar Detalhamento dos Resultados Após Responder**.
4. Salve.

É isso. O detalhamento aparecerá para os usuários naquela página após eles enviarem sua resposta.

### Desempenho

Os dados do detalhamento são agregados por página e armazenados em cache do lado do servidor, portanto, não adicionam carga significativa. Quando um usuário envia uma nova resposta, o cache é atualizado para que o detalhamento reflita os dados mais recentes imediatamente.

### Modo Escuro

O detalhamento suporta totalmente o modo escuro. Quando seu site usa um fundo escuro, as barras, rótulos e cores do texto se adaptam automaticamente.

### Em Conclusão

Esse recurso oferece aos usuários prova social imediata e contexto após responder, o que pode aumentar o engajamento com suas classificações e pesquisas. Ele funciona com todos os quatro tipos de perguntas e não requer alterações de código para ser ativado.

Esperamos que você goste dessa adição. Deixe-nos saber abaixo se você tiver algum feedback!

Saudações!

{{/isPost}}

---