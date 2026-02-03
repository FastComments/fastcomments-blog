---
[category:Announcements]

###### [postdate]
# [postlink]FastComments Ahora Está Respaldado en Múltiples Proveedores de Nube[/postlink]

{{#unless isPost}}
A partir de abril de 2023, las bases de datos de FastComments ahora se almacenan en múltiples proveedores de nube por precaución adicional.
{{/unless}}

{{#isPost}}

### Novedades

Anteriormente, FastComments tenía copias de seguridad de bases de datos en vivo en múltiples servidores, pero en el mismo proveedor de nube.

FastComments utiliza principalmente Linode para las regiones de EE. UU. Oeste y UE, como implementaciones separadas de base de datos y aplicación.

Cada región anteriormente tenía su propia réplica para la base de datos como una copia de seguridad en vivo. Si la base de datos principal se perdía, por cualquier motivo, 
la copia de seguridad en vivo estaría disponible para tomar su lugar. También se realizan instantáneas de la base de datos en estas copias de seguridad.

Ahora hemos agregado copias de seguridad en otro proveedor de nube, para que los datos en cada región no estén aislados a un solo datacenter por región.

La nueva topología de base de datos es:

- EE. UU. Oeste
  - Un clúster de base de datos en Linode en California.
  - **NUEVO** Una réplica en vivo en Hetzner en Oregón.
- UE
  - Un clúster de base de datos en Linode en Frankfurt.
  - **NUEVO** Una réplica en vivo en Hetzner en Falkenstein.

Estas réplicas son en vivo, siempre tienen la última versión de la base de datos.

### En Conclusión

Como en todos los lanzamientos importantes, nos alegra haber podido tomarnos el tiempo para optimizar, probar y lanzar adecuadamente esta función. Háganos saber
a continuación si descubre algún problema.

¡Saludos!

{{/isPost}}

---