---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Migración de FastComments a TypeScript Completa[/postlink]

{{#unless isPost}}
En preparación para la próxima década de desarrollo, hemos migrado uno de los componentes más grandes de FastComments a TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

### Novedades

En FastComments valoramos los lenguajes de tipos estáticos. Más específicamente, me gustan los sistemas de tipos decentes con compiladores rápidos. FastComments comenzó con lo segundo - o
sin compilador. Mientras teníamos dos servicios escritos en Java moderno durante el primer año, las principales bibliotecas de backend y frontend estaban escritas en CJS JS ejecutándose en Node.

En preparación para la próxima década de desarrollo, hemos migrado los componentes más grandes de FastComments a TypeScript.

Esto implicó migrar más de 130k líneas de código (100k de eso es backend) a través de 1441 archivos, y corregir más de 8000 errores de compilación.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="Captura de Pantalla de GitHub" title="Captura de Pantalla de GitHub" />
</div>

Esto se realizó en un período de dos semanas.

### Congelación de Código - Gracias

Me gustaría agradecer a nuestros clientes por lidiar con cualquier retraso en correcciones de errores o lanzamientos de funciones mientras realizábamos una congelación de código de dos semanas para completar esta actualización. ¡Gracias!

### Errores Corregidos

Como pueden imaginar, corregimos un puñado de errores. Estos estaban principalmente relacionados con la detección de spam y la caché.

### Cambios Rompedores

- Todos los puntos finales de la API ahora devuelven status: 'failed' en lugar de una mezcla de "failed" y "failure" como valores de estado. "success" permanece sin cambios.
- Ya no se establecerá de forma predeterminada la primera configuración del widget si no hay coincidencia, en su lugar devolveremos la configuración del sistema predeterminada.

### ¿Cómo fue?

Descubrimos que, como de costumbre, muchas de las herramientas en el ecosistema de NPM para ayudar con esta tarea no funcionaban muy bien. Así que usamos LLMs para generar
scripts para hacer gran parte del trabajo. Por ejemplo, hicimos un uso intensivo de JSDoc, así que pudimos escribir scripts para tomar el JSDoc y convertirlo a interfaces de typescript
y definiciones de tipos, y anotar adecuadamente los argumentos de función y los tipos de retorno. También utilizamos estos scripts para migrar de CJS a ESM, lo que incluyó reescribir
importaciones, exportaciones y detectar problemas comunes en tiempo de ejecución como `__dirname`.

¿Mencioné problemas en tiempo de ejecución?

### ¿Cómo es TypeScript en 2025?

TypeScript es un buen lenguaje para escribir lógica de negocio. Pero, Java todavía tiene mejor DevEx. Si Java, Go o Rust compilan, lo más probable es que funcione. Con TypeScript,
puedo hacer algo como:

    console.log(__dirname);

... y esto se compilará.

Pero no se ejecutará, con los módulos es modernos. Tu IDE incluso completará automáticamente `__dirname`, y luego fallará en tiempo de ejecución. Se siente como Spring DI, pero peor.

También puedes hacer cosas como:

    context.someImportantMethodToCall;

Ahora, esto es una "declaración". Es una "declaración" válida. A primera vista podrías pensar que estamos llamando a `someImportantMethodToCall`, ¡pero no lo estamos! Mi IDE, al menos, no
advierte sobre esto, y tampoco lo hace el compilador. El código simplemente no hará nada (a menos que `someImportantMethodToCall` sea una clase `getter`, en cuyo caso se llama implícitamente...)

La solución es:

    context.someImportantMethodToCall();

Creo que probablemente puedas detectar esto con algo como eslint y alguna regla de "sin efectos secundarios", pero luego introduces otro conjunto grande de bibliotecas para mantener actualizadas, y
entonces eslint tiene que analizar toda tu base de código en cada compilación, las herramientas son lentas, y así sucesivamente - no gracias. El impacto en la productividad al lidiar con herramientas lentas como eslint ha sido
más significativo en mi carrera en empleos anteriores que el "aumento" de productividad que alguna vez obtuve de las pequeñas cosas que eslint corrige/preventivas con espaciado, etc. Ahora están saliendo alternativas más rápidas, lo cual es genial.

TypeScript es realmente agradable debido a características del lenguaje como `Pick<User, 'username', 'email'>`. Esto, combinado con la inferencia de tipos, proporciona una manera de tener resultados de consulta seguros en tipos de la base de datos para subconjuntos
de objetos más grandes sin tener que definir una clase para cada forma. `Pick` es algo que me sorprende que Scala no tenga. Las Uniones de Tipos también son realmente agradables.

Las compilaciones incrementales también funcionan razonablemente bien, solo hemos aumentado nuestros tiempos de compilación en CI en aproximadamente 5 - 10 segundos en promedio, para compilar la biblioteca compartida, frontend y backend.

### Cronograma de Desarrollo

Para los curiosos, aquí está cómo fue nuestra progresión:

- Día Uno: Encontré 5564 errores en 362 archivos.
- Día Dos: Encontré 4034 errores en 239 archivos.
- Día Tres: Encontré 3784 errores en 191 archivos.
- Día Cuatro: Encontré 2974 errores en 169 archivos.
- Día Cinco: Encontré 3000 errores en 171 archivos.
- Día Seis: Encontré 2916 errores en 165 archivos.
- Día Siete: Encontré 2618 errores en 157 archivos.
- Día Ocho: Encontré 2253 errores en 109 archivos.
- Día Nueve: Encontré 1605 errores en 69 archivos.
- Día Diez: Encontré 686 errores en 53 archivos.
- Día 11: Pruebas Unitarias de Backend Pasan
- Día 12: Comenzar a migrar frontend, 3118 errores.
- Día 13: Encontré 2172 errores.
- Día 14: Encontré 1224 errores.
- Día 15: Encontré 498 errores.
- Día 16: Todos los errores de compilación corregidos.
- Día 17: Lanzado. Pruebas E2E pasan. 30 minutos de inactividad durante problemas inesperados en tiempo de ejecución. :)

### El Futuro

Hicimos esto para soportar el desarrollo durante la próxima década. El sistema ahora es lo suficientemente grande como para que sea más rápido desarrollar con un sistema de tipos que sin uno.

También puedes esperar que nuestra biblioteca de TypeScript en NPM mejore, como ya ha comenzado a hacerlo, ya que ahora estamos alimentando esa biblioteca en nuestro código de servidor y cliente.

También lanzaremos pronto SDKs de cliente generados directamente desde el código del servidor, lo que fue una de las principales motivaciones detrás de este esfuerzo.

### En Conclusión

Como todos los lanzamientos importantes, nos alegra poder tomarnos el tiempo para optimizar, probar y liberar adecuadamente estos cambios. Háganos saber
abajo si descubren algún problema.

¡Saludos!

{{/isPost}}

---