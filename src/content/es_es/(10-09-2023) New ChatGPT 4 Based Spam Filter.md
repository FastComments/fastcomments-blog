---
[category:Características]
[category:IA y Aprendizaje Automático]
###### [postdate]
# [postlink]Nuevo Filtro de Spam Basado en ChatGPT 4.[/postlink]

{{#unless isPost}}
FastComments amplía su lista de opciones de filtros de spam.
{{/unless}}

{{#isPost}}

### Novedades

FastComments sigue mejorando su clasificador de spam Naïve-Bayes, sin embargo, hemos añadido una nueva opción a la flota de detectores de spam.

Ahora puedes detectar spam utilizando ChatGPT 4 proporcionado por OpenAI.

### Cómo Obtenerlo

Para configurar qué detector de spam utilizar, revisa la página de Configuraciones de Moderación en tu panel de administración. El detector de spam basado en GPT4 se cobra a `$0.08` cada `1000` tokens.

Este detector de spam solo está disponible para clientes con un plan Flex, ya que se cobra en función de los tokens utilizados.

### Optimización

Primero pasamos todo el contenido a través del clasificador Naïve-Bayes compartido para limitar las llamadas a OpenAI. Esto te ahorra dinero para el spam muy obvio. Para el spam extra astuto, luego llamamos a OpenAI para ver si el contenido parece spam.

### Resultados

Observamos mejoras inmediatas en las comunidades que han activado esta función.

### Documentación

Esto se puede configurar a través de la página de Configuraciones de Moderación en tu panel de administración.

[La documentación también se puede encontrar aquí](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### En Conclusión

Agradecemos a nuestros clientes que nos brindan retroalimentación continua para que podamos pensar en ideas como esta. Esperamos que sigas amando FastComments.

¡Saludos!

{{/isPost}}

---