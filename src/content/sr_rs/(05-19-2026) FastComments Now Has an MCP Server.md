[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments сада има MCP сервер[/postlink]

{{#unless isPost}}
Сада можете усмерити Claude Code, Claude Desktop, Cursor или било који други Model Context Protocol клијент ка FastComments и имати да директно позива наш API.
{{/unless}}

{{#isPost}}

### Шта је ново

FastComments сада испоручује хостовани [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) сервер. MCP је отворени стандард који AI асистенти за кодирање користе за позивање серверских алата. Усмерите ваш клијент на један URL и он може да листа ваше коментаре, модерира их, управља SSO корисницима, конфигурише виџете и све остало што [API](https://docs.fastcomments.com/guide-api.html) ради.

### Где се налази

Из вашег FastComments контролне табле, отворите **Integrate, then MCP Server**, или га посетите директно на
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Изаберите који API кључ желите да клијент користи, а страница генерише унапред попуњен URL и исечке за копирање за Claude Code и конфигурационе датотеке Claude Desktop / Cursor.

### Claude Code

Једна команда за регистрацију:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Затим `/mcp` унутар сесије приказује везу и листа сваки алат који сервер излаже. Питајте ствари попут „прикажи ми последњих 20 означених коментара на /blog/launch“, „блокирај овог коментатора на свим мојим сајтовима“, или „који је наш стопа хватања спама у последњој недељи“. Claude рутира преко одговарајућег позива алата.

### Claude Desktop и Cursor

Додајте овај блок у MCP конфигурацију вашег клијента (`claude_desktop_config.json` за Claude Desktop, `mcp.json` за Cursor):

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

Рестартујте клијент и сервер ће се појавити поред свих осталих MCP сервера које сте конфигурисали.

### Безбедност

API кључ је уграђен у URL, па третирате сам URL као тајну. Не налепљујте га у јавним ћаскањима, снимцима екрана или комитима. Ако кључ буде изложен, ротирајте га са [API Keys page](https://fastcomments.com/auth/my-account/api-secret) и поново копирајте исечак са странице за подешавање. Да ограничите шта агент може да уради, генеришите посебан API кључ за сваког асистента и закључајте га на одговарајући домен. Падајући мени на страници за подешавање вам омогућава да једним кликом замените који кључ исечци користе.

### Зашто смо то изградили

Људи све више користе агентске алате за свакодневне задатке у интеракцији са SaaS производима. Свако ко повезује Claude или Cursor сесију за тријажење своје модерационе реда, или прилагођени агент за истакнути теме које вреде закачињања, сада може у потпуности прескочити слој омотача.

### У закључку

Отворите [Integrate, then MCP Server](https://fastcomments.com/auth/my-account/mcp-setup) у вашој контролној табли, копирајте исечак за ваш омиљени MCP клијент, и бићете спремни. Пуна документација се налази у [LLM Kit guide](https://docs.fastcomments.com/guide-llm-kit.html).

Као и увек, јавите нам у наставку ако наиђете на било шта.

Поздрав!

{{/isPost}}