---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments ma teraz serwer MCP[/postlink]

{{#unless isPost}}
Możesz teraz skierować Claude Code, Claude Desktop, Cursor lub dowolnego innego klienta Model Context Protocol na FastComments i mieć możliwość bezpośredniego wywołania naszego API.
{{/unless}}

{{#isPost}}

### Co nowego

FastComments teraz dostarcza hostowany [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) serwer. MCP to otty standard, który asystenci AI wykorzystują do wywoływania narzędzi po stronie serwera. Skieruj swojego klienta na jeden URL, a będzie mógł listować Twoje komentarze, moderować je, zarządzać użytkownikami SSO, konfigurować widgety i wszystko inne, co robi [API](https://docs.fastcomments.com/guide-api.html).

### Gdzie to jest

Z poziomu swojego dashboardu FastComments, otwórz **Integracja, następnie Serwer MCP**, lub odwiedź go bezpośrednio pod adresem
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Wybierz, którego klucza API chcesz używać w kliencie, a strona wygeneruje wstępnie wypełniony URL oraz fragmenty do skopiowania i wklejenia dla Claude Code i plików konfiguracyjnych Claude Desktop / Cursor.

### Claude Code

Jedno polecenie do rejestracji:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Następnie `/mcp` wewnątrz sesji pokazuje połączenie i listuje każde narzędzie, które serwer udostępnia. Pytaj takie rzeczy jak "pokaż mi ostatnie 20 oznaczonych komentarzy na /blog/launch", "zablokuj tego komentatora na wszystkich moich stronach", lub "jaki jest nasz wskaźnik łapania spamu w ciągu ostatniego tygodnia". Claude przekierowuje do odpowiedniego wywołania narzędzia.

### Claude Desktop i Cursor

Dodaj ten blok do konfiguracji MCP swojego klienta (`claude_desktop_config.json` dla Claude Desktop, `mcp.json` dla Cursor):

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

Uruchom klienta ponownie, a serwer pojawi się obok innych serwerów MCP, które skonfigurowałeś.

### Bezpieczeństwo

Klucz API jest osadzony w URL, więc traktuj ten URL jako tajemnicę. Nie wklejaj go w publicznych czatach, zrzutach ekranu ani w commitach. Jeśli klucz zostanie ujawniony, zmień go na stronie [API Keys page](https://fastcomments.com/auth/my-account/api-secret) i ponownie skopiuj fragment ze strony konfiguracji. Aby ograniczyć to, co agent może zrobić, wygeneruj dedykowany klucz API na każdą asystenta i przypisz go do właściwej domeny. Menu rozwijane na stronie konfiguracji pozwala na łatwą zmianę, który klucz używają fragmenty w jednym kliknięciu.

### Dlaczego to zbudowaliśmy

Ludzie coraz częściej korzystają z narzędzi agentowych do codziennych zadań związanych z interakcją z produktami SaaS. Każdy, kto łączy sesję Claude lub Cursor, aby zająć się swoimi zadaniami moderacyjnymi, lub stworzył własnego agenta, aby wyświetlić wątki warte przypięcia, może teraz całkowicie pominąć warstwę opakowującą.

### Na zakończenie

Otwórz [Integracja, następnie Serwer MCP](https://fastcomments.com/auth/my-account/mcp-setup) w swoim dashboardzie, skopiuj fragment dla swojego ulubionego klienta MCP, a będziesz gotowy do działania. Pełna dokumentacja znajduje się w [przewodniku LLM Kit](https://docs.fastcomments.com/guide-llm-kit.html).

Jak zawsze, daj nam znać poniżej, jeśli napotkasz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}