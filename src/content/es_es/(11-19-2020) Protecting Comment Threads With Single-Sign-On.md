---
[category:Security]

###### [postdate]
# [postlink]Protegiendo Hilos de Comentarios con Inicio de Sesión Único (SSO)[/postlink]

{{#unless isPost}}
¿No consideras públicos tus hilos de comentarios? ¿Tienes SSO configurado para autenticación? Esto podría ser para ti.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

#### Introducción

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(detalles aquí)</a> proporciona a tus usuarios una forma
de comentar sin tener que iniciar sesión en otra plataforma.

Sin embargo, esto por sí solo no asegura tus hilos de comentarios, ya que, por defecto, los datos de los comentarios son información pública: cualquier persona que pueda ver
la página puede ver los comentarios. Sin embargo, esta versión cambia eso.

#### Configuración Sin Código

Podemos prevenir la visualización e interacción con nuestros hilos de comentarios, cuando SSO está configurado, creando una <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">regla de personalización</a>.

Al hacerlo, busca SSO, y encontrarás esta opción:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Opción de Configuración para Bloquear Comentarios a través de SSO" alt="Opción de Configuración para Bloquear Comentarios a través de SSO" class="lozad" />
</div>

Habilítala y guarda la regla de personalización.

#### Solo Proteger un Dominio o Página Específica

Para proteger solo un Dominio o Página específica, simplemente configuraremos la regla de personalización para hacerlo.

En la parte superior de la interfaz de personalización, encontraremos dos entradas, Dominio e ID de URL.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Opción de Configuración por Página o Dominio" alt="Opción de Configuración por Página o Dominio" class="lozad" />
</div>

Para proteger solo un dominio particular, ingresa el dominio en cuestión en el campo "dominio".

Para proteger una página particular, ingresa una URL de página en el campo "ID de URL". Si tienes una integración personalizada con FastComments, puedes ingresar un tipo de ID aquí
en lugar de una URL.

#### Protección Más Allá de la Lectura

Habilitar esta opción protegerá la página o dominio de ser comentado a menos que el usuario haya iniciado sesión a través de SSO. 

#### Consideraciones

Cualquier usuario que haya creado comentarios antes de tu integración SSO no podrá verlos, a menos que inicie sesión a través de tu integración SSO.

#### En Conclusión

Esperamos que hayas encontrado esta guía útil y fácil de leer. No dudes en comentar abajo con cualquier pregunta.

¡Saludos!

{{/isPost}}

---