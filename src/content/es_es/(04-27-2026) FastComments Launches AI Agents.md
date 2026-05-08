---
[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]FastComments Lanza Agentes de IA[/postlink]

{{#unless isPost}}
Ahora puedes crear Agentes de IA que leen cada nuevo comentario, responden en tu voz, escalan las decisiones difíciles y otorgan insignias a tus mejores colaboradores. Funcionan según tu horario, dentro de tu presupuesto, y solo hacen lo que les permites.
{{/unless}}

{{#isPost}}

### Una Nota para la Comunidad

Solo quiero aclarar esto de inmediato: no estamos construyendo algo que permita a los bots pretender ser usuarios reales. Esto no es algo que creo que sea bueno para internet, las comunidades en línea o la dirección de nuestro producto. El objetivo de los Agentes de IA es empoderar a los equipos de moderación o propietarios de comunidades que no pueden permitirse moderadores dedicados.

Todos los comentarios dejados por IA deben tener la etiqueta "Bot". Así es como el producto se entrega, y cualquier sitio que de alguna manera elimine la etiqueta Bot de los comentarios de los bots tendrá la función desactivada. Además, solo estamos utilizando proveedores de LLM que no entrenan con nuestros datos. Actualmente estamos usando DeepInfra, que solo proporciona inferencias para modelos de código abierto.

Ahora que eso está claro :)

### Novedades

FastComments ahora ofrece agentes automatizados que pueden realizar tareas de moderación, fijar comentarios, resumir hilos de comentarios y más.

Puedes encontrarlos en [Personalizar, luego Agentes de IA](https://fastcomments.com/auth/my-account/ai-agents).

### Disparadores y Herramientas

Cada agente se configura con una lista de disparadores y una lista de acciones permitidas. Los disparadores incluyen nuevos comentarios, ediciones, eliminaciones, umbrales de votos, umbrales de banderas, acciones de moderador, comentaristas por primera vez y más. Si no deseas que un agente prohíba usuarios, puedes excluir la herramienta de prohibición. 

Por ejemplo, si solo deseas un "resumidor de hilo" que solo responda después de un cierto número de comentarios y fije ese comentario, puedes configurar
los permisos del agente de modo que solo tenga acceso a esas acciones.

También puedes limitar un agente a patrones de URL específicos como `/news/*` o `/forums/*`, y a locales específicos, de modo que un agente de comunidad en francés no comience a responder en tus páginas en inglés.

### Prueba Simulada, Aprobaciones y Presupuestos

Cada agente se lanza en modo de prueba simulada por defecto. En modo de prueba simulada, el agente lee el contexto y escribe lo que haría, pero no hace nada de hecho. Puedes observar algunos disparadores reales pasar, ver las acciones propuestas y el razonamiento del agente, y decidir si confías en él antes de activarlo.

Para herramientas sensibles, puedes requerir aprobación humana. El agente pone en cola la acción, un administrador revisa la acción propuesta junto con el razonamiento y la confianza del agente, y aprueba o rechaza. Las prohibiciones siempre requieren aprobación en la UE según el Artículo 17 de la DSA, pero puedes requerir aprobación para cualquier herramienta, en cualquier lugar.

Cada agente tiene un límite diario y mensual de presupuesto. Cuando se alcanza el límite, el agente deja de funcionar hasta que el período se reinicie. Te enviamos un correo electrónico a los umbrales predeterminados del 80 por ciento y el 100 por ciento (también puedes optar por una alerta del 50 por ciento) para que no haya facturas sorpresa.

### Memoria

Los agentes tienen memoria que el agente lee y escribe para sí mismo. Pueden guardar notas breves sobre un usuario o un patrón, como "advertido por off-topic tres veces" o "anillo de spam publicando enlaces al dominio X", y leer esas notas en el siguiente disparador. La memoria se comparte entre agentes en tu inquilino, por lo que las notas de un agente de bienvenida pueden informar las decisiones de un agente de moderación más tarde. La memoria asociada con un usuario se elimina si eliminan su cuenta.

### Repetición y Ejecución de Pruebas

Antes de dejar un agente actuar sobre tráfico en vivo, puedes ejecutarlo contra tus comentarios históricos. La herramienta de repetición revisa comentarios reales pasados en modo de prueba simulada, te muestra lo que el agente habría hecho y clasifica cada acción propuesta contra lo que realmente sucedió. Esta es la forma más rápida de ajustar un aviso de sistema sin esperar eventos en vivo.

### Modelos, Privacidad y Costos

Los agentes funcionan con modelos de peso abierto alojados por proveedores de infraestructura que no entrenan con datos de clientes. Hoy puedes elegir entre un modelo más rápido (gpt-oss-120B-turbo) y uno más inteligente y lento (GLM 5.1), y seguiremos agregando opciones a medida que evolucione el panorama. El costo se mide por token y se convierte en dólares en tu página de uso, junto con tendencias diarias y mensuales.

Como parte de este cambio, estamos reduciendo nuestros costos de tokens de $80 por 1M Tokens a $20 por 1M de tokens combinados de entrada/salida. La mayoría de nuestros clientes gastan muy poco en tokens para detección de spam, ya que el sistema original de detección de spam basado en LLM solo enviaba a la LLM si el spam pasaba el clasificador naive-bayes, de ahí el alto costo originalmente. Estamos reduciendo el costo para fomentar el uso de la nueva funcionalidad de agentes.

En algún momento, cuando los costos de memoria disminuyan y modelos como GLM 5.1 sean más razonables de ejecutar en hardware autoalojado, nos alejaremos de usar un proveedor externo y ejecutaremos el hardware nosotros mismos.

### En Conclusión

Pensamos mucho sobre cómo construir esto sin hacer que se sienta como si el agente estuviera a cargo. La prueba simulada, las aprobaciones, las herramientas limitadas, los límites de presupuesto y la repetición contra el historial existen para ayudarte a mantener el control. Esperamos que los Agentes de IA liberen a tus moderadores para las conversaciones que realmente necesitan un humano.

Agradecemos a nuestros clientes que nos brindan comentarios continuos para que podamos pensar en ideas como esta y también darnos el tiempo para lanzarlas bien. Como siempre, háznoslo saber a continuación si descubres algún problema.

¡Saludos!

{{/isPost}}

---