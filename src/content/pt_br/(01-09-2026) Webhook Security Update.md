---
[category:Segurança]
[category:Recursos]
[category:Webhooks]
###### [postdate]
# [postlink]Atualização de Segurança do Webhook[/postlink]

{{#unless isPost}}
Os webhooks do FastComments agora incluem assinaturas HMAC-SHA256 para verificação de payload, além de nova seleção de método HTTP.
{{/unless}}

{{#isPost}}

### Novidades

Anteriormente, havia uma fricção extra para configurar Webhooks em comparação com outras plataformas. Considerávamos isso algo positivo devido às medidas de segurança adicionais exigidas, no entanto, recentemente adotamos um mecanismo que é igualmente seguro, mas cuja segurança é opcional.

### Comportamento Anterior

Anteriormente, o sistema encaminhava sua chave de API nos payloads e esperava que você a validasse. Se você não retornasse um 401 para uma chave de API inválida, o sistema não permitiria a configuração.

### Novo Comportamento

Agora, o sistema não passará uma chave de API para novas configurações de webhook. Em vez disso, para integrações novas e existentes, uma assinatura HMAC assinada é incluída. Você pode ou não querer validar essa assinatura, dependendo do seu nível de segurança exigido.

Configurações existentes continuarão a passar a chave de API - você pode agora solicitar a desativação disso por meio de um ticket de suporte.

### Verificação da Assinatura HMAC

O FastComments agora envia os seguintes cabeçalhos com cada solicitação de webhook:

| Cabeçalho | Descrição |
|-----------|-----------|
| `X-FastComments-Timestamp` | Timestamp Unix (segundos) quando a solicitação foi assinada |
| `X-FastComments-Signature` | Assinatura HMAC-SHA256 no formato `sha256=<hex>` |
| `token` | Seu Segredo de API (mantido por compatibilidade retroativa) |

#### Como a Assinatura é Calculada

1. Concatenar: `timestamp + "." + JSON_payload_body`
2. Calcular HMAC-SHA256 usando seu Segredo de API como chave
3. Codificar em hexadecimal o resultado

#### Exemplo de Verificação (Python)

```python
import hmac
import hashlib
import time
import json

def verify_webhook_signature(headers, body, api_secret):
    timestamp = headers.get('X-FastComments-Timestamp')
    signature = headers.get('X-FastComments-Signature')

    if not timestamp or not signature:
        return False

    # Verificar se o timestamp é recente
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Verificar assinatura
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### Seleção do Método HTTP

Além disso, incluído com esta atualização - você agora pode configurar o método HTTP para cada tipo de evento de webhook:

- **Criar Evento**: POST ou PUT (padrão: PUT)
- **Atualizar Evento**: POST ou PUT (padrão: PUT)
- **Deletar Evento**: DELETE, POST ou PUT (padrão: DELETE)

### Benefícios de Segurança

O novo sistema possui alguns benefícios:

- Proteção contra ataques de man-in-the-middle
- Prevenção de ataques de repetição via verificação de timestamp
- Detecção de manipulação de payload

### Compatibilidade Retroativa

O cabeçalho `token` contendo seu Segredo de API ainda é enviado com cada solicitação. Integrações existentes continuarão a funcionar sem modificação, e como mencionado anteriormente, você pode solicitar a desativação do comportamento antigo por meio de suporte.

### Documentação

Para documentação completa, consulte nosso [Guia de Webhooks](https://docs.fastcomments.com/guide-webhooks.html).

### Em Conclusão

Como todas as principais versões, estamos felizes por termos podido dedicar tempo para otimizar, testar e lançar adequadamente essas mudanças. Deixe-nos saber abaixo se você descobrir quaisquer problemas.

Saudações!

{{/isPost}}

---