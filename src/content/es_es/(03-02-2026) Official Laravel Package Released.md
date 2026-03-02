---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Paquete oficial de Laravel lanzado[/postlink]

{{#unless isPost}}
Hemos lanzado un paquete oficial de Laravel con componentes Blade listos para usar, SSO automático e integración de API.
{{/unless}}

{{#isPost}}

### Novedades

Estamos emocionados de anunciar el lanzamiento de nuestro paquete oficial de Laravel, `fastcomments/laravel`. Si estás construyendo con Laravel y deseas añadir
comentarios, chat en vivo o recuentos de comentarios a tu aplicación, ahora puedes hacerlo con una sola instalación de Composer y un par de componentes Blade.

El paquete es compatible con Laravel 10, 11 y 12 en PHP 8.1+.

### Comenzando

Instala con Composer:

    composer require fastcomments/laravel

Luego, añade tu ID de inquilino y la clave API a tu `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

Eso es todo. El proveedor de servicio y la fachada se descubren automáticamente, no se necesita registro manual. Puedes publicar el archivo de configuración para más personalización:

    php artisan vendor:publish --tag=fastcomments-config

### Componentes Blade listos para usar

El paquete incluye tres componentes Blade que puedes utilizar directamente en tus plantillas:

**Widget de comentarios:**

    <x-fastcomments url-id="my-page" />

**Widget de chat en vivo:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Recuento de comentarios:**

    <x-fastcomments-comment-count url-id="my-page" />

Cada componente soporta propiedades como `url`, `locale`, `readonly`, `has-dark-background` y `default-sort-direction`. Los scripts se cargan
de manera asíncrona y se deduplican, por lo que puedes colocar múltiples widgets en la misma página de manera segura.

### SSO Automático

El SSO se puede habilitar con dos variables de entorno:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Una vez habilitado, los componentes de comentarios y chat en vivo leen automáticamente `Auth::user()` e inyectan la carga útil SSO firmada en la configuración del widget.
Los usuarios que han iniciado sesión son autenticados sin problemas. Los invitados ven enlaces de inicio y cierre de sesión que por defecto apuntan a tus rutas nombradas de Laravel `login` y `logout`.

Hay dos formas de controlar cómo tu modelo de Usuario se mapea a los datos de usuario de FastComments:

**Mapeo basado en configuración** - establece los nombres de atributo (incluida la notación de puntos) o llamados en `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Mapeo basado en interfaz** - implementa `MapsToFastCommentsUser` en tu modelo de Usuario para un control total:

```php
use FastComments\Laravel\SSO\Contracts\MapsToFastCommentsUser;

class User extends Authenticatable implements MapsToFastCommentsUser
{
    public function toFastCommentsUserData(): array
    {
        return [
            'id' => (string) $this->id,
            'email' => $this->email,
            'username' => $this->name,
            'avatar' => $this->avatar_url,
            'is_admin' => $this->hasRole('admin'),
        ];
    }
}
```

Ambos modos de SSO Seguro (firmado HMAC, recomendado para producción) y SSO Simple son compatibles.

### Integración de API

El paquete también envuelve la API de FastComments con una fachada, inyección de dependencias e inyección directa del cliente SDK:

```php
use FastComments\Laravel\Facades\FastComments;

// API de Admin
$comments = FastComments::admin()->getComments(...);

// API Pública
$counts = FastComments::publicApi()->getCommentCounts(...);

// Token SSO para uso personalizado
$token = FastComments::sso()->tokenFor($user);
```

### Residencia de Datos en la UE

Para los clientes que utilizan nuestra región de la UE, una única variable de entorno cambia todos los puntos finales - widgets, llamadas a API y SSO:

    FASTCOMMENTS_REGION=eu

### En conclusión

Esperamos que este paquete facilite la adición de FastComments a tus aplicaciones de Laravel. Ya está disponible en <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
y el código fuente está en <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

¡Déjanos saber abajo si tienes algún comentario!

¡Salud!

{{/isPost}}

---