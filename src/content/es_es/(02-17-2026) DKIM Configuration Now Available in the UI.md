---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]Configuración de DKIM Ahora Disponible en la Interfaz[/postlink]

{{#unless isPost}}
FastComments ahora ofrece una interfaz para configurar DKIM, facilitando la mejora de las tasas de entrega de correos electrónicos sin necesidad de utilizar la API.
{{/unless}}

{{#isPost}}

### Novedades

Configurar DKIM para tu dominio de correo electrónico personalizado ahora es más fácil. Anteriormente, la configuración de DKIM requería utilizar la
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API de Configuración de Dominios</a> directamente. Ahora puedes
configurar DKIM directamente desde la interfaz de administración de FastComments.

### Por Qué DKIM es Importante

Cuando personalizas el Dominio del Remitente para los correos electrónicos que FastComments envía en tu nombre, los proveedores de correo necesitan verificar que
esos correos son legítimos. DKIM (DomainKeys Identified Mail) es uno de los mecanismos clave de autenticación que ayuda con esto.
Sin una configuración adecuada de DKIM, los correos electrónicos enviados en nombre de tu dominio tienen más probabilidades de terminar en carpetas de spam.

### Cómo Configurarlo

Navega a la página <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Mis Dominios</a> y haz clic en
"Mostrar Avanzado" para el dominio que deseas configurar. Verás la configuración de DKIM donde puedes ingresar tu nombre de dominio, selector de clave,
y clave privada.

Después de guardar, la configuración de DKIM se aplicará a todos los correos electrónicos enviados desde ese dominio.

### La API Sigue Funcionando

Si prefieres gestionar la configuración de DKIM de forma programática, la
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API de Configuración de Dominios</a> continúa funcionando
como antes.

### En Conclusión

Esperamos que esto facilite asegurar que tus usuarios reciban los correos electrónicos que FastComments envía en tu nombre. Háznoslo saber
a continuación si tienes alguna pregunta.

¡Saludos!

{{/isPost}}

---