---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Actualización del SDK del sistema de comentarios React Native[/postlink]

{{#unless isPost}}
Rehicimos fastcomments-react-native-sdk desde cero: nueva gestión de estado más eficiente, un rediseño utilizando Design Tokens, un widget de chat en vivo dedicado y soporte web de primera calidad.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

### Novedades

Acabamos de lanzar la versión 5.1 de `fastcomments-react-native-sdk`, nuestra biblioteca de React Native que renderiza comentarios y chat con componentes nativos reales en lugar de un WebView.

Reescribimos los internals, rediseñamos todo el aspecto, añadimos un widget de chat en vivo, llevamos el SDK a la web y lo actualizamos a la última versión de React Native y React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, light theme" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, dark theme" title="FastComments React Native SDK, dark theme" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### ¿Por Qué Dos Bibliotecas de React Native?

Una breve nota, porque recibimos esta pregunta. Ofrecemos dos opciones:

- `fastcomments-react-native` es un envoltorio delgado alrededor de nuestro widget web que se ejecuta en un WebView. Es la forma más rápida de obtener cada función al instante y se beneficia automáticamente de las correcciones web.
- `fastcomments-react-native-sdk` (este) renderiza la interfaz de usuario con componentes nativos de React Native sin un webview. Es más flexible, totalmente tematizable y se siente nativo porque es nativo.

Para la mejor experiencia, recomendamos el SDK. El resto de este post es sobre lo que cambió en 5.0.

### Nueva Gestión de Estado

El principal motivo de este cambio es asegurarnos de que nuestra biblioteca se mantenga fiel a nuestro nombre y sea Rápida. Tuvimos varios clientes que se quejaron
sobre su rendimiento, así que esto ya está corregido.

El SDK originalmente mantenía su árbol de comentarios en Hookstate. Funcionaba, pero a medida que los hilos y las actualizaciones en vivo crecían, las cosas comenzaron a ralentizarse.

Reemplazamos Hookstate por Zustand y una tienda plana e indexada. Los comentarios ahora residen en un mapa `byId` junto a los índices `childrenByParent`, `rootOrder` y `pinnedIds`, en lugar de un árbol anidado dentro del estado.

El resultado:

- Los eventos en vivo (un nuevo comentario, un voto, una edición) se convirtieron en mutaciones O(1) en lugar de recorrer y clonar un árbol.
- Eliminamos dos clones JSON de árbol completo que solían ejecutarse en cada recuperación.
- Los componentes se suscriben exactamente a las porciones que leen, el modelo de selector estándar, por lo que un voto en un comentario afecta a un solo comentario.

Ese último punto es más importante de lo que parece. Con suscripciones basadas en selectores, una fila solo se vuelve a renderizar cuando sus propios datos cambian.

### Un Rediseño Basado en Tokens

El aspecto antiguo era un montón de estilos codificados. El nuevo por defecto se genera a partir de un conjunto de tokens de diseño semántico (`FastCommentsTheme`): colores, espaciado, radio, tamaños de fuente, pesos de fuente y tamaños de avatar. Todo el árbol de estilos se deriva de esos tokens.

Eso significa que el rediseño es una sola prop:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

El modo oscuro está a un conjunto de tokens de distancia:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

El rediseño en sí es una apariencia más limpia y moderna-neutral: separadores delgados, botones de voto y chips en forma de píldora, botones primarios llenos, avatares redondeados y una escala tipográfica consistente. La prop `styles` sigue ahí para sobrescrituras quirúrgicas, así que las integraciones existentes siguen funcionando.

### Un Widget de Chat en Vivo Dedicado

Añadimos `FastCommentsLiveChat`, un preset de chat sobre el mismo motor que refleja la vista de chat de nuestro SDK de Android: mensajes cronológicos con los más nuevos en la parte inferior, el compositor debajo de la lista, una barra superior en vivo con un punto de conexión y el recuento de usuarios, desplazamiento automático que se pausa mientras lees mensajes antiguos e historia infinita a medida que te desplazas hacia arriba. Cada preset es sobrescribible a través de `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Ahora También en la Web

El mismo SDK ahora se ejecuta en la web a través de `react-native-web`. El compositor de texto enriquecido (impulsado por `react-native-enriched`) se renderiza de la misma manera en iOS, Android y el navegador, por lo que la experiencia de edición es consistente en todas partes con una única implementación. Los superpuestos que de otro modo recortaría la lista de comentarios (menús, el selector de GIFs, la lista de notificaciones) están anclados debajo de sus activadores en la versión web.

### Manteniéndose Al Día Con React Native

5.0 está construido y probado contra React Native 0.81 y React 19, y tiene como objetivo la Nueva Arquitectura (Fabric), que el editor de texto enriquecido nativo requiere. Mantenerse al día aquí no es un trabajo ocioso: el editor, el manejo de gestos y el renderizado se vuelven más rápidos y precisos a medida que React Native avanza, y preferiríamos llevar esas actualizaciones de manera constante que quedarnos años atrás.

### En Conclusión

Esta reescritura se trató de darle al SDK de React Native el mismo nivel de calidad que nuestras otras bibliotecas: un modelo de datos rápido y predecible, una apariencia que puedes tematizar en una prop, un widget de chat y soporte web, todo sobre una base moderna de React Native.

Puedes encontrar el SDK en <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> y el código fuente, con ejemplos, en <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Háznos saber a continuación si te encuentras con algo.

¡Salud!

{{/isPost}}

---