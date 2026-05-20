---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments Agora Tem um Servidor MCP[/postlink]

{{#unless isPost}}
Agora você pode apontar Claude Code, Claude Desktop, Cursor, ou qualquer outro cliente do Model Context Protocol para o FastComments e fazer com que ele chame nossa API diretamente.
{{/unless}}

{{#isPost}}

### Novidades

O FastComments agora oferece um servidor [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) hospedado. O MCP é o padrão aberto que assistentes de codificação de IA usam para invocar ferramentas do lado do servidor. Aponte seu cliente para uma URL e ele pode listar seus comentários, moderá-los, gerenciar usuários SSO, configurar widgets, e qualquer outra coisa que a [API](https://docs.fastcomments.com/guide-api.html) faz.

### Onde Está

Do seu painel FastComments, abra **Integrar, depois Servidor MCP**, ou visite diretamente em
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Escolha qual chave da API você quer que o cliente use, e a página gera uma URL preenchida automaticamente, além de trechos para copiar e colar para Claude Code e os arquivos de configuração do Claude Desktop / Cursor.

### Claude Code

Um comando para registrar:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Então `/mcp` dentro de uma sessão mostra a conexão e lista todas as ferramentas que o servidor expõe. Pergunte coisas como "mostre-me os últimos 20 comentários sinalizados em /blog/launch", "bloqueie este comentarista em todos os meus sites", ou "qual é nossa taxa de captura de spam na última semana". Claude roteia através da chamada da ferramenta correta.

### Claude Desktop e Cursor

Adicione este bloco à configuração MCP do seu cliente (`claude_desktop_config.json` para Claude Desktop, `mcp.json` para Cursor):

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

Reinicie o cliente e o servidor aparecerá ao lado de qualquer outro servidor MCP que você tenha configurado.

### Segurança

A chave da API está incorporada na URL, então trate a URL como um segredo. Não a cole em chats públicos, capturas de tela ou commits. Se uma chave for exposta, gire-a a partir da [página de Chaves de API](https://fastcomments.com/auth/my-account/api-secret) e recopie o trecho da página de configuração. Para limitar o que um agente pode fazer, gere uma chave de API dedicada por assistente e bloqueie-a ao domínio correto. O menu suspenso na página de configuração permite que você troque qual chave os trechos usam em um clique.

### Por Que Nós a Criamos

As pessoas estão usando ferramentas agenticas cada vez mais para tarefas diárias interagindo com produtos SaaS. Qualquer um que conecte uma sessão de Claude ou Cursor para triagem de sua fila de moderação, ou um agente personalizado para destacar tópicos que valem a pena marcar, pode agora pular completamente a camada de wrapper.

### Conclusão

Abra [Integrar, depois Servidor MCP](https://fastcomments.com/auth/my-account/mcp-setup) no seu painel, copie o trecho para o seu cliente MCP favorito, e você está ao vivo. A documentação completa está no [guia do Kit LLM](https://docs.fastcomments.com/guide-llm-kit.html).

Como sempre, nos avise abaixo se você encontrar qualquer coisa.

Saudações!

{{/isPost}}

---