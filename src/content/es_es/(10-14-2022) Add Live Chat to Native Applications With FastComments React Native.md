---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Agrega Chat en Vivo a Aplicaciones Nativas con FastComments React Native[/postlink]

{{#unless isPost}}
Después de meses de trabajo, nos complace anunciar que fastcomments-react-native-sdk ahora está en la versión 1.0 para disponibilidad general.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

### Novedades

En FastComments, hemos lanzado una nueva forma de construir aplicaciones React Native con FastComments. Anteriormente, utilizabas nuestro wrapper de react-native alrededor de
la biblioteca VanillaJS. Esto introdujo varios problemas de memoria y latencia debido a que requería una vista web - un navegador en tu aplicación - solo para cargar nuestra biblioteca.

Ahora hemos **completamente** portado FastComments a React Native y escribimos nuestro propio editor WYSIWYG para eliminar por completo la necesidad de vistas web.

La biblioteca soporta diferentes skins y diseños. Por ejemplo, aquí está el skin Erebus que es un skin oscuro estilo chat en vivo:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Skin Erebus" title="Skin Erebus" />
</div>

La biblioteca está disponible [en GitHub en FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) así como
[en NPM](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Personalizable

La nueva biblioteca nativa está diseñada para ser personalizable al igual que la biblioteca web existente.

Puedes:

- Personalizar todos los activos e íconos que utiliza la biblioteca.
- Personalizar el estilo de cada componente en la biblioteca pasando un objeto Styles desde arriba.
- Personalizar todas las traducciones.
- Usar uno de los skins predefinidos o desarrollados por la comunidad.
- Usar muchas de las mismas opciones de configuración que soporta la biblioteca web.

### Lista Completa de Características

La biblioteca soporta muchas cosas. Una lista incompleta es:

- [x] Bloqueo
- [x] Reacciones en el Chat
- [x] Comentarios e Respuestas de Niños
- [x] Estilos Personalizados (como hojas de estilo tipadas)
- [x] Emoticonos
- [x] Reportes
- [x] Navegador de Gif - Con capacidad de tendencias predeterminadas + búsqueda. Imágenes y búsqueda anonimizadas por proxy.
- [x] Comentarios en vivo
- [x] Selección y Cargas de Medios
- [x] Editor WYSIWYG nativo con soporte de imágenes.
- [x] Servicio de Notificación (obtén las notificaciones no leídas del usuario en segundo plano para enviarlas, etc.)
- [x] Lista de Notificaciones (se muestra al hacer clic en la campana). Soporta suscripciones.
- [x] Paginación (Botones)
- [x] Paginación (Desplazamiento Infinito)
- [x] Fijar Comentarios
- [x] Comentarios seguros, simples SSO y anónimos.
- [x] Varios skins predefinidos.
- [x] Alternar Mostrar/Ocultar Comentarios
- [x] Hilos
- [x] Indicadores de actividad del usuario
- [x] Votación

### Cómo Funciona

La biblioteca es una reescritura completa del cliente FastComments en TypeScript y React Native.

### Plan a Largo Plazo

A largo plazo, mantendremos tanto la biblioteca VanillaJS como la biblioteca react-native en paralelo, así como cualquier futura biblioteca nativa que podamos desarrollar.

### ¿Qué Sigue?

Esperaremos los comentarios de los usuarios y la comunidad para mejorar esta biblioteca a lo largo del tiempo, tal como lo hemos hecho con el ecosistema web.

### En Conclusión

Sabemos que esta biblioteca ha sido muy esperada por algunos. Como todos los lanzamientos importantes, nos alegra que hayamos podido tomarnos el tiempo para optimizar, probar y lanzar adecuadamente esta biblioteca.

¡Salud!

{{/isPost}}

---