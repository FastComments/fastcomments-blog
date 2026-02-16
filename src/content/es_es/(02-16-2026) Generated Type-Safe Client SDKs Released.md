---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]SDKs de Cliente Generados y Seguros por Tipo Publicados[/postlink]

{{#unless isPost}}
Como se insinuó en nuestra publicación sobre la migración a TypeScript, hemos lanzado SDKs de cliente generados y seguros por tipo para diez lenguajes de programación.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

### Novedades

En nuestra [publicación sobre la migración a TypeScript](/blog/fastcomments-typescript-migration-completed), mencionamos que estaban en camino los SDKs de cliente generados. Ya están aquí.

FastComments ahora ofrece SDKs oficiales y seguros por tipo para **diez lenguajes**:

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Cada SDK se genera a partir de la misma especificación OpenAPI que produce nuestro servidor. Los tipos, firmas de métodos y modelos de solicitud/respuesta se mantienen sincronizados automáticamente con la API real. Tu compilador detecta errores tipográficos en los nombres de campo y parámetros faltantes antes de que tu código realice una solicitud de red.

### Cómo Funciona

La migración a TypeScript fue un prerrequisito para esto. Ahora que nuestro código del servidor está completamente tipado, usamos [nuestro fork de TSOA](https://github.com/FastComments/tsoa) para generar una especificación OpenAPI 3.0 directamente desde nuestros controladores de ruta. Esa especificación se ingresa en [OpenAPI Generator](https://openapi-generator.tech/) para producir bibliotecas de clientes para cada lenguaje.

Cuando la API cambia, nuestras herramientas detectan la diferencia en la especificación, regeneran los SDKs afectados, ejecutan pruebas para cada lenguaje y abren solicitudes de extracción automáticamente. Construimos una pequeña herramienta de gestión en Nim que orquesta el ciclo de actualización-prueba-lanzamiento en todos los diez repositorios.

### Qué Hay en Cada SDK

Cada SDK proporciona dos clases de API:

- **`DefaultApi`**: puntos finales autenticados que requieren tu clave de API. Úsalos del lado del servidor para moderación, gestión de usuarios, análisis y operaciones en lotes.
- **`PublicApi`**: puntos finales no autenticados seguros para llamar desde navegadores y aplicaciones móviles. Estos cubren la obtención de comentarios, publicaciones, votaciones y otras operaciones orientadas al cliente.

Todos los SDKs también incluyen utilidades de SSO para integrarse con tu sistema de autenticación existente. El SDK de TypeScript además proporciona suscripciones a eventos en tiempo real para comentarios en vivo.

### Documentación

La documentación completa de la API está disponible en [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Cada repositorio de SDK también incluye documentación generada que cubre cada método y modelo disponible.

Para integración de SSO, consulta nuestra [guía de SSO](https://docs.fastcomments.com/guide-sso.html). Los diez SDKs incluyen ayudantes de SSO utilizando sus bibliotecas de criptografía nativas.

### En Conclusión

Tener un servidor completamente tipado facilitó la generación de una especificación OpenAPI confiable, y a partir de ahí, generar clientes para diez (¡y algún día más!) lenguajes fue principalmente una cuestión de construir la automatización y mejorar nuestras definiciones de tipo para que puedan ser consumibles, sin agregar demasiada abstracción que ralentizaría FastComments.

Como en todos los lanzamientos importantes, nos complace haber podido tomarnos el tiempo para optimizar, probar y lanzar correctamente estos SDKs. Háznoslo saber abajo si tienes algún comentario o si hay un lenguaje que te gustaría que agregáramos.

¡Saludos!

{{/isPost}}

---

---