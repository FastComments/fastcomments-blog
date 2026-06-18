---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Actualización del SDK del Sistema de Comentarios de React Native[/postlink]

{{#unless isPost}}
Reestructuramos fastcomments-react-native-sdk desde cero: nueva gestión de estado más eficiente, un rediseño utilizando Design Tokens, un widget de chat en vivo dedicado y soporte web de primera clase.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

### Novedades

Acabamos de lanzar la versión 5.1 de `fastcomments-react-native-sdk`, nuestra biblioteca de React Native que renderiza comentarios y chat con componentes nativos reales en lugar de un WebView.

Reescribimos la parte interna, rediseñamos todo el aspecto, añadimos un widget de chat en vivo, llevamos el SDK a la web y lo actualizamos a las últimas versiones de React Native y React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, tema claro" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tema oscuro" title="FastComments React Native SDK, tema oscuro" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### ¿Por Qué Dos Bibliotecas de React Native?

Una nota rápida, porque recibimos esta pregunta. Disponemos de dos opciones:

- `fastcomments-react-native` es un delgado wrapper alrededor de nuestro widget web que se ejecuta en un WebView. Es la forma más rápida de obtener cada característica al instante, y se beneficia de las correcciones web automáticamente.
- `fastcomments-react-native-sdk` (este) renderiza la UI con componentes nativos de React Native sin un webview. Es más flexible, completamente temático y se siente nativo porque es nativo.

Para la mejor experiencia recomendamos el SDK. El resto de este post trata sobre lo que cambió en 5.0.

### Nueva Gestión de Estado

El principal impulso de este cambio es asegurarnos de que nuestra biblioteca se mantenga fiel a nuestro nombre y siga siendo Rápida. Tuvimos varios clientes que se quejaron acerca de su rendimiento, así que esto ya está solucionado.

El SDK originalmente mantenía su árbol de comentarios en Hookstate. Funcionaba, pero a medida que los hilos y las actualizaciones en vivo crecían, las cosas empezaron a ralentizarse.

Reemplazamos Hookstate con Zustand y una tienda plana, indexada. Los comentarios ahora viven en un mapa `byId` junto con los índices `childrenByParent`, `rootOrder` y `pinnedIds`, en lugar de estar en un árbol anidado dentro del estado.

La recompensa:

- Los eventos en vivo (un nuevo comentario, un voto, una edición) se convirtieron en mutaciones O(1) en lugar de recorrer y clonar un árbol.
- Eliminamos dos clonaciones JSON profundas de todo el árbol que solían ejecutarse en cada búsqueda.
- Los componentes se suscriben exactamente a las partes que leen, el modelo de selector estándar, así que un voto en un comentario afecta solo a ese comentario.

Ese último punto importa más de lo que parece. Con suscripciones basadas en selectores, una fila solo se vuelve a renderizar cuando sus propios datos cambian.

### Un Rediseño Basado en Tokens

El antiguo aspecto era una pila de estilos codificados de forma rígida. El nuevo por defecto se genera a partir de un conjunto de tokens de diseño semánticos (`FastCommentsTheme`): colores, espaciado, radio, tamaños de fuente, pesos de fuente y tamaños de avatar. Todo el árbol de estilos se deriva de esos tokens.

Eso significa que el restilo es una propiedad:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

El modo oscuro está a un conjunto de tokens de distancia:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

El rediseño en sí tiene un aspecto más limpio y moderno-neutro: separadores delgados, botones de voto con forma de pastilla y chips, botones primarios llenos, avatares redondeados y una escala de tipografía consistente. La propiedad `styles` sigue ahí para sobreposiciones quirúrgicas, por lo que las integraciones existentes siguen funcionando.

### Un Widget de Chat en Vivo Dedicado

Añadimos `FastCommentsLiveChat`, un preset de chat sobre el mismo motor que refleja la vista de chat de nuestro SDK de Android: mensajes cronológicos con el más nuevo en la parte inferior, el compositor debajo de la lista, una tira de encabezado en vivo con un punto de conexión y recuento de usuarios, desplazamiento automático que se pausa mientras lees mensajes antiguos, y un historial infinito a medida que te desplazas hacia arriba. Cada preset se puede sobrescribir a través de `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Ahora También en la Web

El mismo SDK ahora funciona en la web a través de `react-native-web`. El compositor de texto enriquecido (impulsado por `react-native-enriched`) se renderiza de la misma manera en iOS, Android y el navegador, por lo que la experiencia de edición es consistente en todas partes con una única implementación. Las superposiciones que la lista de comentarios de otro modo cortaría (menús, el selector de GIF, la lista de notificaciones) están ancladas debajo de sus activadores en la construcción web.

Puedes probar cada widget tú mismo en el vivo <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">navegador de componentes</a>, que es este SDK funcionando en el navegador a través de `react-native-web`.

### Manteniéndose Actualizado con React Native

5.0 está construido y probado contra React Native 0.81 y React 19, y está orientado a la Nueva Arquitectura (Fabric), que el editor de texto enriquecido nativo requiere. Mantenerse actualizado aquí no es trabajo en vano: el editor, el manejo de gestos y el renderizado se vuelven más rápidos y correctos a medida que React Native avanza, y preferimos tomar esas actualizaciones de manera constante que quedarnos años atrás.

### En Conclusión

Esta reescritura fue sobre darle al SDK de React Native el mismo pie de igualdad de primera clase que nuestras otras bibliotecas: un modelo de datos rápido y predecible, un aspecto que puedes tematizar en una propiedad, un widget de chat y soporte web, todo sobre una base moderna de React Native.

Puedes encontrar el SDK en <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, el código fuente, con ejemplos, en <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, y cada widget funcionando en vivo en el <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">navegador de componentes</a>. Háznoslo saber abajo si te encuentras con algo.

¡Saludos!

{{/isPost}}

---