---
[category:Migration]

###### [postdate]
# [postlink]Apoio à Migração de Reações do Hyvor Talk Agora Está Disponível[/postlink]

{{#unless isPost}}
Quando você importa sua exportação de dados do Hyvor Talk, agora podemos migrar suas reações em nível de página.
{{/unless}}

{{#isPost}}

### O que há de Novo

Ao importar comentários para migrá-los do Hyvor Talk, o FastComments agora pode importar suas reações de página. Além disso, detectaremos se
os threads de comentários nas páginas estão fechados ou não, e migraremos esse status também.

Executar a importação novamente não fará com que as contagens se duplicem ou percam quaisquer valores de reação de antes da importação.

### Como Configurar Reações

A exibição das reações de página não é automática. Para começar, você precisará atualizar sua configuração do widget:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Estar Maravilhado
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Coração Vermelho
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Rosto com Boca Aberta
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Rosto Chorando
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Rosto com Lágrimas de Alegria
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Rosto Bravo
            ]
        }
    });
</script>
```

Os ids devem corresponder aos da exportação do Hyvor Talk. Este exemplo utiliza os valores corretos.

Você precisará fornecer suas próprias imagens de reação. Elas podem ser de qualquer formato, incluindo gifs. O exemplo acima usa algumas do projeto OpenMoji.

### Em Conclusão

Como em todos os lançamentos importantes, estamos felizes por termos podido dedicar tempo para otimizar, testar e lançar adequadamente este recurso. Deixe-nos saber
abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}

---