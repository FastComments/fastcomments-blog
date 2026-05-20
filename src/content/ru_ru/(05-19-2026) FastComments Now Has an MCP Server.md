---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments теперь имеет сервер MCP[/postlink]

{{#unless isPost}}
Теперь вы можете подключить Claude Code, Claude Desktop, Cursor или любой другой клиент Model Context Protocol к FastComments и напрямую вызывать наш API.
{{/unless}}

{{#isPost}}

### Что нового

Теперь FastComments поставляется с размещённым [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) сервером. MCP — это открытый стандарт, который используют AI-кодовые помощники для вызова серверных инструментов. Укажите вашему клиенту один URL, и он сможет перечислить ваши комментарии, модерировать их, управлять пользователями SSO, настраивать виджеты и выполнять любые другие действия, которые предоставляет [API](https://docs.fastcomments.com/guide-api.html).

### Где он находится

С вашего дашборда FastComments откройте **Integrate, затем MCP Server**, или посетите его напрямую по адресу
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Выберите, какой API ключ вы хотите использовать для клиента, и страница сгенерирует предзаполненный URL и фрагменты для копирования и вставки для Claude Code и конфигурационных файлов Claude Desktop / Cursor.

### Claude Code

Одна команда для регистрации:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Затем `/mcp` внутри сессии показывает соединение и перечисляет все инструменты, которые предоставляет сервер. Задавайте вопросы, такие как "покажи последние 20 помеченных комментариев на /blog/launch", "заблокируй этого комментатора на всех моих сайтах" или "какой у нас процент спама за последнюю неделю". Claude организует вызов через нужный инструмент.

### Claude Desktop и Cursor

Добавьте этот блок в конфигурацию MCP вашего клиента (`claude_desktop_config.json` для Claude Desktop, `mcp.json` для Cursor):

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

Перезапустите клиент, и сервер появится вместе с любыми другими серверами MCP, которые вы настроили.

### Безопасность

API ключ встроен в URL, поэтому рассматривайте сам URL как секрет. Не вставляйте его в публичные чаты, скриншоты или коммиты. Если ключ будет раскрыт, измените его на странице [API Keys](https://fastcomments.com/auth/my-account/api-secret) и заново скопируйте фрагмент со страницы настройки. Чтобы ограничить действия агента, сгенерируйте выделенный API ключ для каждого помощника и заблокируйте его для нужного домена. Выпадающий список на странице настройки позволяет вам менять, какой ключ используют фрагменты одним кликом.

### Почему мы это создали

Люди все больше используют агентов для повседневных задач, взаимодействуя с продуктами SaaS. Любой, кто настраивает сессию Claude или Cursor для обработки очереди модерирования или индивидуальный агент для выделения тем, которые стоит закрепить, теперь может полностью пропустить уровень обертки.

### В заключение

Откройте [Integrate, затем MCP Server](https://fastcomments.com/auth/my-account/mcp-setup) в вашем дашборде, скопируйте фрагмент для вашего любимого MCP клиента, и вы в деле. Полная документация находится в [руководстве LLM Kit](https://docs.fastcomments.com/guide-llm-kit.html).

Как всегда, дайте нам знать ниже, если вы столкнетесь с чем-то.

Удачи!

{{/isPost}}

---