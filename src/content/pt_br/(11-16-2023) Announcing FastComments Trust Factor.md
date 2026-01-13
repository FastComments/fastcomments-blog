---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Anunciando o Fator de Confiança do FastComments[/postlink]

{{#unless isPost}}
O FastComments agora usa mais heurísticas ao determinar o que é e o que não é spam.
{{/unless}}

{{#isPost}}

### Novidades

A partir de 16 de novembro de 2023, o FastComments começou a expandir a forma como determina a confiabilidade
dos usuários para reduzir a frustração ao lidar com filtros de spam.

### Impacto para os Usuários

Se você é um membro de longa data de um site existente e suas comentários foram capturados
pelo filtro de spam, essa mudança é para você.

Recebemos numerosos relatos de usuários em sites que fazem coisas que os filtros de spam não gostam, como compartilhar muitos links e assim por diante, e esses
comentários acabam sendo considerados spam e são bloqueados ou aguardam aprovação de um moderador, dependendo da configuração do site.

### Impacto para Administradores de Sites e Moderadores

1. Você pode ver menos comentários automaticamente marcados como spam de seus usuários mais ativos.
2. Isso não altera a detecção de spam baseada na lista negra de palavras/frases. Profanidades e frases filtradas ainda farão com que os comentários vão para o spam se você tiver essa configuração.

O número do Fator de Confiança em si atualmente não é exposto a administradores de sites ou moderadores, no entanto,
isso é algo que exploraremos no futuro.

### Como o Fator de Confiança é Calculado

O Fator de Confiança é um número de `0` a `100` e é mantido em uma base por site.

As seguintes variáveis são usadas para determinar o fator de confiança:

- Idade da interação com o site.
- Número de comentários aprovados.
- Número de comentários fixados.

Se você foi membro de um site por mais de seis meses e deixou mais de 50 comentários aprovados,
você terá uma pontuação de confiança perfeita de `100`.

Caso contrário, a fórmula é a seguinte e evoluirá com o tempo:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Onde:

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

Você pode notar o `* 20` aqui - comentários fixados têm um alto peso. Se moderadores estão fixando
seus comentários, você provavelmente é considerado um usuário bastante confiável.

### Para Desenvolvedores & Atenções

Na API, `UserBadgeProgress` agora tem `autoTrustFactor` e `manualTrustFactor` expostos.

`autoTrustFactor` é calculado por nós e não pode ser escrito via API.

Se você gostaria de configurar o fator de confiança você mesmo, pode definir `manualTrustFactor`. O sistema
usará esse valor em vez disso, e continuaremos a manter o valor de `autoTrustFactor` separadamente.

### Abuso do Fator de Confiança

Como todas as coisas, esperamos que isso seja abusado. As pessoas estabelecerão relacionamentos com uma comunidade e, em seguida, usarão
a conta para postar spam. No entanto, pensamos que, com padrões sensatos (seis meses, 50+ comentários), estabelecemos a barra
alta o suficiente para que isso não valha a pena para a maioria dos spammers. Uma vez que eles começam a postar spam, suas contas podem ser imediatamente
banidas pelos moderadores. No futuro, também podemos permitir que moderadores ajustem o fator de confiança.

### Em Conclusão

Como todas as grandes atualizações, estamos felizes por podermos dedicar tempo para otimizar, testar e lançar adequadamente esse recurso. Deixe-nos saber
abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}

---