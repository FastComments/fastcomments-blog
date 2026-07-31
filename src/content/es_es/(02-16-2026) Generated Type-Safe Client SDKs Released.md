---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
Como se insinuó en nuestra publicación de migración a TypeScript, hemos lanzado SDKs de cliente generados y con tipado seguro para diez lenguajes de programación.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### Novedades

En nuestra [TypeScript migration post](/(1-31-2025)-fastcomments-typescript-migration-completed-es_es.html), mencionamos que los SDKs de cliente generados estaban en camino. Ya están aquí.

FastComments ahora ofrece SDKs oficiales y con tipado seguro para **diez lenguajes**:

- TypeScript / JavaScript (npm)
- Python (GitHub)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Cada SDK se genera a partir de la misma especificación OpenAPI que produce nuestro servidor. Los tipos, firmas de métodos y modelos de solicitud/respuesta se mantienen sincronizados automáticamente con la API real. Tu compilador detecta errores de nombres de campos y parámetros faltantes antes de que tu código realice una solicitud de red.

### Cómo funciona

La migración a TypeScript fue un requisito previo para esto. Ahora que el código de nuestro servidor está completamente tipado, usamos [our fork of TSOA](https://github.com/FastComments/tsoa) para generar una especificación OpenAPI 3.0 directamente desde nuestros controladores de rutas. Esa especificación se alimenta a [OpenAPI Generator](https://openapi-generator.tech/) para producir bibliotecas cliente para cada lenguaje.

Cuando la API cambia, nuestras herramientas detectan la diferencia en la especificación, regeneran los SDKs afectados, ejecutan pruebas para cada lenguaje y abren pull requests automáticamente. Construimos una pequeña herramienta de gestión en Nim que orquesta el ciclo de actualización-prueba-lanzamiento en los diez repositorios.

### Qué contiene cada SDK

Cada SDK proporciona dos clases API:

- **`DefaultApi`**: puntos finales autenticados que requieren tu clave API. Úsalos del lado del servidor para moderación, gestión de usuarios, analítica y operaciones en lote.
- **`PublicApi`**: puntos finales no autenticados seguros para llamar desde navegadores y aplicaciones móviles. Estos cubren la obtención de comentarios, publicación, votación y otras operaciones orientadas al cliente.

Todos los SDKs también incluyen utilidades SSO para integrarse con tu sistema de autenticación existente. El SDK de TypeScript además ofrece suscripciones a eventos en tiempo real para comentarios en vivo.

### Documentación

La documentación completa de la API está disponible en [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Cada repositorio SDK también incluye documentación generada que cubre cada método y modelo disponible.

Para la integración SSO, consulta nuestra [SSO guide](https://docs.fastcomments.com/guide-sso.html). Los diez SDKs incluyen ayudantes SSO usando sus bibliotecas criptográficas nativas.

### En conclusión

Tener un servidor completamente tipado facilitó la generación de una especificación OpenAPI confiable y, a partir de ahí, generar clientes para diez (¡y algún día más!) lenguajes fue principalmente una cuestión de construir la automatización y mejorar nuestras definiciones de tipos para que sean consumibles, sin añadir demasiada abstracción que ralentice FastComments!

Como en todos los lanzamientos importantes, nos complace haber tomado el tiempo para optimizar, probar y lanzar correctamente estos SDKs. Déjanos saber a continuación si tienes algún comentario o si hay un lenguaje que te gustaría que añadamos.

¡Salud!

{{/isPost}}

---

---