---
[category:Seguridad]
[category:Funciones]
[category:Webhooks]
###### [postdate]
# [postlink]Actualización de Seguridad de Webhooks[/postlink]

{{#unless isPost}}
Los webhooks de FastComments ahora incluyen firmas HMAC-SHA256 para la verificación de carga, además de una nueva selección de método HTTP.
{{/unless}}

{{#isPost}}

### Novedades

Previamente, había una fricción adicional para configurar Webhooks en comparación con otras plataformas. Consideramos que esto era algo positivo debido a las medidas de seguridad adicionales requeridas, sin embargo, recientemente hemos llegado a un mecanismo que es igualmente seguro pero que la seguridad es opcional.

### Comportamiento Anterior

Anteriormente, el sistema pasaba tu clave API en las cargas y esperaba que la validaras. Si no devolvías un 401 por una clave api no válida, el sistema no permitía la configuración.

### Nuevo Comportamiento

Ahora, el sistema no pasará una clave API para nuevas configuraciones de webhook. En su lugar, para integraciones nuevas y existentes se incluye una firma HMAC firmada. Puedes o no querer validar esta firma, dependiendo de tu nivel de seguridad requerido.

Las configuraciones existentes continuarán pasando la clave API - ahora puedes pedir desactivar esto a través de un ticket de soporte.

### Verificación de la Firma HMAC

FastComments ahora envía los siguientes encabezados con cada solicitud de webhook:

| Encabezado | Descripción |
|------------|-------------|
| `X-FastComments-Timestamp` | Marca de tiempo Unix (segundos) cuando se firmó la solicitud |
| `X-FastComments-Signature` | Firma HMAC-SHA256 en formato `sha256=<hex>` |
| `token` | Tu Secreto API (mantenido por compatibilidad hacia atrás) |

#### Cómo se Computa la Firma

1. Concatenar: `timestamp + "." + JSON_payload_body`
2. Calcular HMAC-SHA256 usando tu Secreto API como clave
3. Codificar en hexadecimal el resultado

#### Ejemplo de Verificación (Python)

```python
import hmac
import hashlib
import time
import json

def verify_webhook_signature(headers, body, api_secret):
    timestamp = headers.get('X-FastComments-Timestamp')
    signature = headers.get('X-FastComments-Signature')

    if not timestamp or not signature:
        return False

    # Verificar que la marca de tiempo es reciente
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Verificar la firma
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### Selección de Método HTTP

Además, incluido con esta actualización - ahora puedes configurar el método HTTP para cada tipo de evento de webhook:

- **Evento Crear**: POST o PUT (predeterminado: PUT)
- **Evento Actualizar**: POST o PUT (predeterminado: PUT)
- **Evento Eliminar**: DELETE, POST o PUT (predeterminado: DELETE)

### Beneficios de Seguridad

El nuevo sistema tiene algunos beneficios:

- Protección contra ataques de hombre en el medio
- Prevención de ataques de repetición a través de la verificación de la marca de tiempo
- Detección de manipulación de cargas

### Compatibilidad hacia Atrás

El encabezado `token` que contiene tu Secreto API aún se envía con cada solicitud. Las integraciones existentes continuarán funcionando sin modificación, y como se mencionó anteriormente puedes solicitar desactivar el comportamiento antiguo a través del soporte.

### Documentación

Para obtener la documentación completa, consulta nuestra [Guía de Webhooks](https://docs.fastcomments.com/guide-webhooks.html).

### En Conclusión

Como todas las versiones importantes, nos alegra haber podido tomarnos el tiempo para optimizar, probar y lanzar adecuadamente estos cambios. Háganos saber abajo si descubres algún problema.

¡Saludos!

{{/isPost}}