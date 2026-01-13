---
[category:Features]

###### [postdate]
# [postlink]O Editor WYSIWYG do FastComments está Fora da Beta[/postlink]

{{#unless isPost}}
Os clientes agora podem optar por usar o novo editor que não utiliza tags de âncora visíveis para formatação.
{{/unless}}

{{#isPost}}

### Novidades

Os usuários do FastComment sempre tiveram a capacidade de formatar seus comentários com tags de âncora como `<b>isto</b>`. Isso é muito
familiar para qualquer pessoa que já usou um fórum na internet no passado, ou muitos de nossos concorrentes, no entanto, alguns usuários e
comunidades esperam um comportamento diferente.

Agora você pode estilizar o texto na área de comentários sem tags de âncora, já que a entrada de texto pode ser alterada para `contenteditable`.

Para fins de demonstração, isso foi habilitado neste blog.

O editor avançado tem a mesma aparência exata do antigo editor, ele apenas não utiliza tags de âncora visíveis.

### Ativando a Edição Avançada

Na Personalização do Widget, você pode simplesmente habilitar o `Editor Avançado` e clicar em salvar. Os documentos estão [aqui](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Para Desenvolvedores & Armadilhas

Você pode encontrar a documentação para habilitar isso no código [aqui](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg), embora recomendamos usar a interface de personalização de widget, pois
resultará em menos dados enviados em cada carregamento de página.

O HTML gerado do conteúdo editável é ligeiramente diferente do antigo editor de textarea, então tenha isso em mente
se você estiver analisando comentários da API.

### Otimizações

Mantivemos o widget de comentários de crescer com esse novo recurso, adicionando isso como uma extensão que é carregada em segundo plano
quando esse recurso é habilitado, o que mantém o widget de comentários padrão pequeno e leve.

### Em Conclusão

Como todos os lançamentos importantes, estamos felizes por termos podido dedicar tempo para otimizar, testar e liberar corretamente esse recurso. Nos avise
abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}

---