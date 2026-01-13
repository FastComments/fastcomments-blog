---
[category:Features]
###### [postdate]
# [postlink]Classificando Threads de Comentários com o FastComments[/postlink]

{{#unless isPost}}
Desde o lançamento, o FastComments não permitia que você mudasse a ordem de classificação da thread de comentários. Isso muda com este lançamento!
{{/unless}}

{{#isPost}}

#### Público-Alvo

O público-alvo deste artigo consiste tanto de administradores quanto de comentaristas.

#### Introdução

Os comentários sempre foram classificados usando uma combinação de sua idade e karma (votos positivos + negativos). Até agora, essa era a única direção de classificação permitida.

#### Novas Direções de Classificação

O widget de comentários do FastComments agora também suporta a classificação por Mais Recentes e Mais Antigos Primeiro.

#### Mudando a Direção da Classificação

Quando o número de comentários de nível superior é maior que um, um novo dropdown aparecerá para permitir a mudança na direção da classificação.

<div class="text-center">
    <img src="images/fc-sort-dropdown.png" alt="Dropdown de Seleção de Ordenação" title="Dropdown de Seleção de Ordenação" />
</div>

Ao selecionar Mais Recentes ou Mais Antigos Primeiro, não levamos em conta o karma do comentário.

#### Mudando a Direção de Classificação Padrão

Embora a direção de classificação padrão seja a Mais Relevante, a direção de classificação padrão pode ser facilmente personalizada criando uma <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">regra de personalização</a>.

#### Mantendo a Velocidade

Para que o FastComments continue a viver até seu nome, uma quantidade considerável de tempo foi gasta para garantir que a classificação de todas as maneiras esteja bem otimizada. Os comentários são classificados à medida que são deixados, então nenhuma classificação real acontece quando você carrega a página. Isso garante que carregar o widget de comentários e mudar a direção da classificação seja rápido, não importando quantos comentários você tenha.

#### Conclusão

Esperamos que você tenha achado esta atualização útil. Sinta-se à vontade para comentar abaixo com quaisquer perguntas.

Saudações!

{{/isPost}}