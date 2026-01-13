---
[category:API & Development]

###### [postdate]
# [postlink]Nueva API de Agregación Lanzada[/postlink]

{{#unless isPost}}
FastComments ofrece a sus clientes un acceso inigualable a sus datos con una API de agregación flexible y rápida
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

### Novedades

FastComments ofrece a sus clientes un acceso inigualable a sus datos con una API de agregación flexible. Esta API te permite contar, investigar, segmentar y agregar
tus comentarios, votos y **34 recursos más**!

### Ejemplo - Contar Comentarios por Correo Electrónico y Página

Por ejemplo, con la nueva API podemos obtener un conteo de comentarios por página (`urlId`) y correo electrónico del usuario (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Esto nos daría algo como:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "commenterEmail": {
                "distinctCounts": {
                    "someone@somewhere.com": 1,
                    "someone2@somewhere.com": 1
                }
            }
        },
        {
            "urlId": {
                "distinctCounts": {
                    "some-page": 2
                }
            }
        }
    ],
    "stats": { "scanned": 2 }
}
</div>

O tal vez queremos contar nuestros comentarios aprobados y no aprobados:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Nos da:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "approved": { "distinctCounts": { "true": 2200, "false": 231 } }
        }
    ],
    "stats": { "scanned": 2431 }
}
</div>

La API también admite filtros de consulta y agrupaciones más profundas.

### Documentación

[Puedes encontrar la documentación completa aquí.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivación

Queremos que nuestros clientes puedan construir paneles para monitorear su cuenta, generar informes, manejar solicitudes de clientes e investigar sus datos según sea necesario.

### Quién lo Recibe y Limitaciones

Todos los clientes de FastComments tienen acceso a la API. Tu uso está limitado según los créditos de API disponibles, que variarán según el paquete que hayas adquirido.

### En Conclusión

Como en todos los lanzamientos importantes, nos alegra que hayamos podido tomar el tiempo para optimizar, probar y lanzar adecuadamente estos cambios. Háznoslo saber
abajo si descubres algún problema.

¡Saludos!

{{/isPost}}

---