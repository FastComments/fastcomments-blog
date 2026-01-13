---
[category:API & Development]

###### [postdate]
# [postlink]Mudanças na Estrutura de Webhooks[/postlink]

{{#unless isPost}}
Fizemos algumas alterações relacionadas ao comportamento das estruturas de webhook.
{{/unless}}

{{#isPost}}

### Novidades

Antes de 14 de novembro de 2023, fizemos as seguintes mudanças nos webhooks:

#### Atualizar Webhooks

**Anteriormente**, as atualizações continham a versão mais recente de um comentário. Se dois usuários votassem em um comentário em rápida sucessão, isso
geraria dois webhooks. No entanto, era possível que o primeiro evento de webhook contivesse a **versão mais recente**, resultando em dois
eventos de webhook idênticos:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**A partir de 14 de novembro**, cada evento de webhook é idempotente e contém o objeto do comentário no momento da alteração. No exemplo acima, você agora receberá dois eventos:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Deletar Webhooks

**Anteriormente**, os webhooks de deletar continham apenas o id do comentário. Isso era um objeto como `{ id: string }`.

**A partir de 14 de novembro**, os webhooks de deletar conterão o objeto do comentário **completo** no momento da remoção.

### Em Conclusão

Como em todos os lançamentos importantes, estamos felizes por termos podido dedicar tempo para otimizar, testar e liberar adequadamente essa funcionalidade. Informe-nos abaixo se você encontrar quaisquer problemas.

Saudações!

{{/isPost}}

---