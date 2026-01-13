---
[category:Features]
###### [postdate]
# [postlink]Suporte a Spoilers Adicionado[/postlink]

{{#unless isPost}}
Os usuários agora podem adicionar spoilers em seus comentários, que ficam ocultos até serem sobrepostos pelo mouse.
{{/unless}}

{{#isPost}}

### O Que Há de Novo
Os usuários do FastComments agora podem clicar no botão "SPOILER" para adicionar spoilers aos seus comentários. Eles também podem escrever tags `<spoiler>algum texto</spoiler>` diretamente, se desejado.
Note que a opção da barra de ferramentas para spoilers está desativada por padrão.

### Ativando os Spoilers

Na Personalização do Widget, você pode simplesmente ativar a opção `Spoilers` e clicar em salvar. Os documentos estão [aqui](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-spoilers).
Nós os ativamos para este post do blog para demonstrar o recurso.

### Para Desenvolvedores & Armadilhas

O estilo padrão de spoilers suporta modos claro e escuro. Se você escrever CSS personalizado para texto mascarado, lembre-se de cobrir
o modo escuro também, se o seu site suportar.

### Em Conclusão

Como todas as grandes versões, estamos felizes por termos podido dedicar tempo para otimizar, testar e lançar corretamente esse recurso. Nos avise
abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}

---