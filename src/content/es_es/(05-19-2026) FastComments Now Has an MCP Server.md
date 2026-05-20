---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments Ahora Tiene un Servidor MCP[/postlink]

{{#unless isPost}}
Ahora puedes apuntar Claude Code, Claude Desktop, Cursor, o cualquier otro cliente del Protocolo de Contexto de Modelos a FastComments y hacer que llame a nuestra API directamente.
{{/unless}}

{{#isPost}}

### Novedades

FastComments ahora ofrece un servidor [Protocolo de Contexto de Modelos](https://modelcontextprotocol.io/) (MCP) hospedado. MCP es el estándar abierto que utilizan los asistentes de codificación de IA para invocar herramientas del lado del servidor. Apunta tu cliente a una URL y puede listar tus comentarios, moderarlos, gestionar usuarios SSO, configurar widgets, y cualquier otra cosa que hace la [API](https://docs.fastcomments.com/guide-api.html).

### Dónde Se Encuentra

Desde tu panel de FastComments, abre **Integrar, luego Servidor MCP**, o visítalo directamente en
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Elige qué clave API deseas que utilice el cliente, y la página genera una URL pre-rellenada más fragmentos para copiar y pegar para los archivos de configuración de Claude Code y Claude Desktop / Cursor.

### Claude Code

Un comando para registrar:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Luego, `/mcp` dentro de una sesión muestra la conexión y lista cada herramienta que el servidor expone. Pregunta cosas como "muéstrame los últimos 20 comentarios marcados en /blog/launch", "bloquea a este comentarista en todos mis sitios", o "cuál es nuestra tasa de detección de spam durante la última semana". Claude enruta a través de la llamada a la herramienta correcta.

### Claude Desktop y Cursor

Agrega este bloque a la configuración MCP de tu cliente (`claude_desktop_config.json` para Claude Desktop, `mcp.json` para Cursor):

```json
{
  "mcpServers": {
    "fastcomments": {
      "type": "http",
      "url": "https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY"
    }
  }
}
```

Reinicia el cliente y el servidor aparecerá junto con cualquier otro servidor MCP que hayas configurado.

### Seguridad

La clave API está incrustada en la URL, por lo que trata la URL misma como un secreto. No la pegues en chats públicos, capturas de pantalla o confirmaciones. Si una clave se expone, rótala desde la [página de Claves API](https://fastcomments.com/auth/my-account/api-secret) y vuelve a copiar el fragmento de la página de configuración. Para limitar lo que un agente puede hacer, genera una clave API dedicada por asistente y bloqueala al dominio correcto. El menú desplegable en la página de configuración te permite cambiar qué clave utilizan los fragmentos con un clic.

### Por Qué Lo Construimos

Las personas están utilizando herramientas agenciales cada vez más para tareas cotidianas que interactúan con productos SaaS. Cualquiera que esté conectando una sesión de Claude o Cursor para gestionar su cola de moderación, o un agente personalizado para resaltar hilos que valga la pena fijar, ahora puede omitir completamente la capa de envoltura.

### En Conclusión

Abre [Integrar, luego Servidor MCP](https://fastcomments.com/auth/my-account/mcp-setup) en tu panel, copia el fragmento para tu cliente MCP favorito, y estarás en vivo. La documentación completa está en la [guía del Kit LLM](https://docs.fastcomments.com/guide-llm-kit.html).

Como siempre, háznoslo saber abajo si te encuentras con algo.

¡Saludos!

{{/isPost}}

---