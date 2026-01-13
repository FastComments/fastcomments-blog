---
[category:UI & Customization]

###### [postdate]
# [postlink]Personalizando El Avatar Predeterminado[/postlink]

{{#unless isPost}}
La imagen de avatar predeterminada ahora se puede personalizar.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

#### Introducción

El ícono predeterminado ha sido el mismo desde que se lanzó FastComments. Contempla la gloria del ícono de perfil predeterminado.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Ícono de Perfil Predeterminado" alt="Ícono de Perfil Predeterminado" />
</div>

Sin embargo, ahora puedes personalizarlo.

#### Sin Código

Primero, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">agrega o edita una regla de personalización</a>. Las reglas de personalización se pueden aplicar solo a una página, un dominio o a toda tu cuenta. Si deseas cambiar la foto de perfil globalmente, puedes dejar el campo de ID de URL en blanco.

Desplázate hacia abajo hasta la sección "Avatar Predeterminado".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="Configuraciones de FastComments Hackaday"
    class='lozad' />
    
Haz clic en el botón para subir un JPG, PNG o GIF de hasta 20mb. Se redimensionará a un cuadrado de 100px.

#### En Código

Si deseas alojar el avatar predeterminado, y ya tienes una URL pública para él, se puede definir en el código como en el ejemplo dado.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

La imagen debe ser cuadrada y su tamaño debe ser un cuadrado de 100px. Seguir estas restricciones asegurará la mejor experiencia.

#### Problemas Comunes

1. Personalizar la foto de perfil predeterminada solo afecta a tu sitio. No afecta a los correos electrónicos de notificación, ni a las cuentas de los usuarios de ninguna manera.
2. Los comentarios creados antes de este cambio pueden todavía mostrar la antigua foto de perfil. Si ajustas el ícono de perfil predeterminado y observas muchos comentarios en tu sitio usando el antiguo ícono de perfil, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">háznoslo saber</a>.

#### En Conclusión

Esperamos que encuentres útil esta guía y fácil de leer. Siéntete libre de comentar abajo con cualquier pregunta.

¡Saludos!

{{/isPost}}

---