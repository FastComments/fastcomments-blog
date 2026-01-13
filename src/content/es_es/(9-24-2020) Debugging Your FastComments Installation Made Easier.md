---
[category:Tutoriales]
###### [postdate]
# [postlink]Depuración de Su Instalación de FastComments Hecha Más Fácil[/postlink]

{{#unless isPost}}
¿Los comentarios no se muestran? ¿Las configuraciones parecen no estar aplicadas? Averiguar eso se ha vuelto mucho más fácil.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

#### Novedades

En <a href="https://fastcomments.com">FastComments</a> hemos lanzado una extensión para el navegador Google Chrome. Esta extensión te ayudará a entender qué configuración
está recibiendo el widget de comentarios y por qué puede no estar mostrándose.

Puedes encontrar la extensión aquí: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Cómo Usarla

Si encuentras que el widget de comentarios no se está cargando, o alguna configuración que has definido no se muestra, prueba a instalar <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">la extensión</a>
y ábrela en la página en cuestión. Para ver el icono en tu barra de herramientas, es posible que debas hacer clic en la pieza de rompecabezas en la parte superior derecha para anclarlo como se muestra:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Cómo Anclar la Extensión" title="Cómo Anclar la Extensión" class="lozad" />
</div>

La extensión puede ayudar a depurar dos clasificaciones de errores. La primera, si el widget no está incluido en la página en absoluto o hay un error tipográfico importante en el script.

La segunda es si alguna configuración parece no estar teniendo efecto.

Para depurar ambos, simplemente haz clic en el icono.

Si la herramienta no encuentra el widget de comentarios en la página, recibirás un gran error rojo:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Ejemplo de Embed.js no encontrado" title="Ejemplo de Embed.js no encontrado" class="lozad" />
</div>

Si se han encontrado una o más instancias del widget, verás sus configuraciones mostradas por separado:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Ejemplo de Múltiples Configuraciones" title="Ejemplo de Múltiples Configuraciones" class="lozad" />
</div>

Además, el Depurador de FastComments también mostrará advertencias para problemas comunes, como que el widget no se muestre en modo de solo lectura si no hay comentarios disponibles.

#### ¿Configuraciones de "Instancia" "Final"?

Puede que veas que el depurador muestra dos conjuntos de configuraciones: una etiquetada como "Pasada al Widget" y otra etiquetada como "Final".

La configuración "Pasada al Widget" es, como puedes imaginar, la configuración que pasas al widget. Algunos valores se pasan implícitamente por embed.js, como la URL o el Título de la Página, y esos están incluidos.

La configuración "Final" es todo lo que el widget utiliza para renderizarse. Esto puede significar valores autocompletados (como el id de instancia), o <b>valores de la página de administración de personalización del widget</b>.

#### Cómo Funciona

El widget de comentarios almacena su configuración en un lugar donde el depurador puede encontrarla, y luego el depurador escanea la página actual en la que te encuentras en busca de instancias del widget y las carga en memoria.

#### ¿Qué Información Recoge Esta Extensión?

La Herramienta de Depuración de FastComments no envía información a casa ni se comunica con ningún servidor de FastComments. De hecho, el widget ni siquiera revisará el contenido de la página en la que te encuentras
a menos que la abras.

#### En Conclusión

Esperamos que al proporcionar más herramientas como esta, la configuración de FastComments sea más fácil para cada tipo de cliente que tenemos. Háznos saber en la sección de comentarios a continuación
cómo te funcionó esto.

Sabemos que en algunos casos aún puedes necesitar una mano amiga, y para eso sigue estando la <a href="https://fastcomments.com/auth/my-account/help" target="_blank">página de soporte al cliente</a>.

¡Salud!

{{/isPost}}

---