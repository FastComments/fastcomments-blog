---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments está Pronto para o Espaço![/postlink]

{{#unless isPost}}
Concluímos nossa migração de banco de dados ativo-ativo, trazendo verdadeira redundância multi-região para o FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

### O Que Há de Novo

Cada [ponto de presença](https://sophon.fastcomments.com/) do FastComments agora grava localmente e replica essas gravações de forma assíncrona para todos os outros nós. Isso proporcionará maior durabilidade em relação ao sistema anterior, além de tornar as ferramentas de moderação mais rápidas para usuários em algumas regiões, com algumas compensações.

"Pronto para o Espaço" é um pouco otimista, mas a ideia é que poderíamos implantar o FastComments em diferentes planetas e, eventualmente, o sistema acabaria em sincronia. Os usuários em Plutão, no entanto, teriam que esperar cerca de um dia para ver as alterações refletidas em sua página de fatura futura, já que atualmente apenas um mestre por região pode agregar informações de faturamento.

### Um Pouco de História, Por Que a Mudança

Quando o FastComments foi lançado originalmente, tínhamos uma arquitetura muito típica. Tínhamos uma camada de proxy, uma camada de aplicativo, um banco de dados, algumas réplicas e, mais tarde, réplicas através de regiões e provedores de nuvem para redundância extra.

Eventualmente, movemos as réplicas do banco de dados para todas as zonas onde a maioria dos nossos usuários está e também implementamos o aplicativo lá, e criamos nosso próprio sistema de DNS e proxy (descrito em um post no blog posterior) para direcionar as solicitações ao nó de aplicativo mais próximo. Isso torna as leituras rápidas, mas as gravações mais lentas, já que agora, em vez de esperar por uma viagem de ida e volta HTTP para o backend, você espera por uma viagem de ida e volta HTTP para um nó próximo, e esse nó pode fazer múltiplas gravações no banco de dados de volta ao primário. Não é bom!

Assim, para combater isso, reestruturamos muitas áreas da aplicação para aceitar um `readPreference` nos argumentos da função, para que os chamadores possam decidir quão obsoletas estão dispostos a aceitar suas leituras, e além disso, fizemos mais gravações (como gravar estatísticas de moderadores em ações de moderador) como fire-and-forget. Não é ideal, mas acelerou as coisas significativamente.

Um problema que encontramos ao rodar o Mongo globalmente são as divisões de rede. Se um número suficiente de nós ficar desconectado, as leituras param, já que cada nó se torna incerto sobre se é aceitável servir leituras. Existem algumas maneiras de contornar isso, mas os casos extremos ficam complicados. Isso não é um problema teórico - aconteceu o suficiente causando páginas às 3 da manhã que nos cansamos disso, até tentamos ajustar o Mongo para lidar com a incerteza da eleição do replicaset até um minuto de diferença. Infelizmente, as redes de São Paulo a Falkenstein, por exemplo, simplesmente não eram muito boas em alguns dos nossos provedores de hospedagem. Ajustar o controle de congestão e coisas assim ajudou, mas não resolveu o problema.

A solução ideal, assumindo que você aceita certas compensações, é a capacidade de aceitar as gravações localmente naquele nó (que tem um hardware decente, RAID, etc., que é improvável de falhar) e informar ao usuário que seus dados estão salvos. Você também pode ter, naquele ponto de presença, um segundo nó como uma réplica quente para durabilidade.

Então, isso é o que acabamos fazendo. Oregon, Virginia, Falkenstein, São Paulo, Cingapura, são todos seus próprios replicaset e aceitam gravações. O deployment da UE (embora com apenas três PoPs) tem o mesmo comportamento.

### Como Funciona

Algumas disso é abordado na seção anterior, mas o resumo é que é CRDT-lite. Criamos um proxy (em Rust, porque claro) que fica entre a aplicação e o Mongo e torna-o multi-mestre. O proxy é ciente dos pares, gerencia checkpoints, replicação, monitoramento e sincronização inicial. É uma substituição multi-mestre para o sistema de replicação do Mongo, incluindo alguns comandos DDL.

**A diferença de outras ferramentas** é que isso **não observa o oplog**. Observar o oplog, ou usar fluxos de alterações, não funcionaria, porque eles mostram apenas o estado final do objeto após a gravação, tornando impossível lidar com conflitos. Você precisa capturar cada operação `$set`, `$inc` e replicar essa operação em si.

Esta é uma solução específica de domínio. Não funcionaria para todos os produtos. Você poderia dizer que é design orientado a domínio :). Funciona para nós porque desde o início fomos muito cuidadosos ao apenas `$set` os campos que mudamos nos documentos - nunca usamos o `replaceOne` do Mongo, por exemplo. O mesmo vale para contadores. Você **nunca** faz `SET VOTES = 5`. Em vez disso, você escreveria `INCREMENT VOTES BY 5`, pois isso permite consistência eventual. Travamentos distribuídos são manejados por **don't**. Apenas um nó por cluster tem uma bandeira marcada para executar crons. Embora isso possa parecer limitado, podemos comprar servidores com terabytes de RAM, então podemos aceitar essa compensação para reduzir riscos e complexidade.

### Lendo Seus Próprios Registros

Para desenvolvedores usando a API, você deve ser capaz de ler suas próprias gravações exatamente como antes (faça uma chamada de API para criar um comentário, depois liste comentários e veja a nova entrada nessa lista). **A ressalva** é que você não pode fazer isso entre regiões. Se seu backend opera em apenas uma região, como us-west, então você deve ser capaz de ler suas próprias gravações, exceto no caso de que entre sua gravação e sua leitura, aquele nó fique fora do ar **e** o cache DNS atualize para apontar para o próximo nó mais próximo. Desde que isso não aconteça, ler suas próprias gravações é confiável.

[Você também pode fixar qual ponto de presença você acessa. Mais informações aqui.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Testando & A Migração

Cerca de metade do código no sistema é o suporte de testes, framework e testes. Ainda assim, o lançamento foi um pouco turbulento, levando mais tempo de inatividade (1h para a UE e 20min para o us-global) do que desejado, mas estamos felizes por termos passado por esse marco e agradecemos sua paciência!

### Em Conclusão & O Que Isso Significa para Você

O FastComments deve agora ser mais rápido e mais durável do que nunca, e agora podemos voltar a trabalhar em recursos :)

Saudações!

{{/isPost}}