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

### O que Há de Novo

Cada [point-of-presence](https://sophon.fastcomments.com/) do FastComments agora realiza gravações localmente e as replica assíncronamente para todos os outros nós. Isso proporcionará maior durabilidade em relação ao sistema anterior, além de tornar as ferramentas de moderação mais rápidas para os usuários em algumas regiões, com algumas compensações.

"Pronto para o Espaço" é um pouco otimista, mas a ideia é que poderíamos implantar o FastComments em diferentes planetas e eventualmente o sistema acabaria sincronizado. Os usuários em Plutão, no entanto, teriam que esperar cerca de um dia para ver as mudanças refletidas na página de faturas, já que atualmente apenas um
mestre por região pode agregar informações de cobrança.

### Um Pouco de História, Por Que a Mudança

Quando o FastComments foi lançado originalmente, tínhamos uma arquitetura muito típica. Tínhamos uma camada de proxy, uma camada de aplicativo, um banco de dados, algumas réplicas, e depois mais tarde réplicas em regiões e provedores de nuvem para redundância extra.

Eventualmente, movemos as réplicas de DB para todas as zonas onde a maioria dos nossos usuários está e também implantamos o aplicativo lá, e criamos nosso próprio sistema de DNS e proxy (descrito em um post de blog posterior) para direcionar solicitações ao nó de aplicativo mais próximo. Isso torna as leituras rápidas, mas as gravações mais lentas, já que agora, em vez de esperar por uma ida e volta HTTP para o backend, você espera por uma ida e volta HTTP para um nó próximo, e esse nó pode fazer várias gravações no banco de dados de volta ao primário. Não é bom!

Então, para combater isso, reestruturamos muitas áreas da aplicação para aceitar um `readPreference` nos argumentos das funções, para que os chamadores pudessem decidir quão obsoletas estavam OK em suas leituras, e além disso fizemos mais gravações (como gravar estatísticas de moderador em ações de moderador) serem fire-and-forget. Não é o ideal, mas isso acelerou as coisas significativamente.

Um problema que encontramos ao rodar o Mongo globalmente são as divisões de rede. Se nós suficientes forem cortados, as leituras param à medida que cada nó se torna incerto se pode ou não servir as leituras. Existem algumas maneiras de contornar isso, mas os casos extremos ficam confusos. Isso não é uma questão teórica - ocorreu tantas vezes causando páginas às 3 da manhã que ficamos cansados disso, mesmo tentando ajustar o Mongo para ficar ok com incertezas de eleição de replicaset de até um minuto. Infelizmente, as redes de São Paulo a Falkenstein, por exemplo, simplesmente não eram muito boas em alguns dos nossos provedores de hospedagem. Ajustar o controle de congestionamento e similares ajudou, mas não resolveu o problema.

A solução graal, assumindo que você está ok com certas compensações, é a capacidade de aceitar as gravações localmente naquele nó (que tem hardware decente, RAID, etc, que é improvável que quebre) e informar ao usuário que seus dados estão salvos. Você pode também, naquele point-of-presence, ainda ter um segundo nó como uma réplica quente para durabilidade.

Então, isso é onde chegamos. Oregon, Virginia, Falkenstein, São Paulo, Singapura, são todos seus próprios conjuntos de réplicas e aceitam gravações. A implantação da UE (embora tenha apenas três PoPs) tem o mesmo comportamento.

### Como Funciona

Algumas dessas informações estão cobertas na seção anterior, mas o resumo é que é CRDT-lite. Criamos um proxy (em Rust, porque claro) que fica entre a aplicação e o Mongo e torna-o multi-mestre. O proxy é ciente dos pares, gerencia pontos de verificação, replicação, monitoramento e sincronização inicial. Ele é uma substituição multi-mestre para o sistema de replicação do Mongo, incluindo para alguns comandos DDL.

**A diferença em relação a outras ferramentas** é que isso **não segue o oplog**. Seguir o oplog, ou usar fluxos de mudança, não funcionaria, porque eles apenas mostram o estado final do objeto após a gravação, tornando impossível lidar com conflitos. Você precisa capturar cada operação `$set`, `$inc` e replicar essa operação em si.

Esta é uma solução específica de domínio. Não funcionaria para todos os produtos. Você poderia dizer que é design dirigido por domínio :). Funciona para nós porque desde o início temos muito cuidado em apenas `$set` os campos que mudamos em documentos - nunca usamos `replaceOne` do Mongo, por exemplo. O mesmo vale para contadores. Você **nunca** faz `SET VOTES = 5`. Em vez disso, você escreveria `INCREMENT VOTES BY 5`, pois isso permite consistência eventual. Locks distribuídos são tratados por **evitá-los completamente**. Apenas um nó por cluster tem uma flag definida para executar crons. Embora isso possa parecer limitado, podemos comprar servidores com terabytes de RAM, então podemos fazer essa compensação para reduzir risco e complexidade.

### Lendo Suas Próprias Gravações

Para desenvolvedores que usam a API, você deve ser capaz de ler suas próprias gravações assim como antes (faça uma chamada API para criar um comentário, depois liste os comentários e veja a nova entrada nessa lista). **A ressalva** é que você não pode fazer isso entre regiões. Se seu backend roda em apenas uma região, como us-west, então você deve ser capaz de ler suas próprias gravações, exceto no caso de que entre sua gravação e sua leitura, aquele nó fique fora do ar **e** seu cache DNS se atualize para apontar para o próximo nó mais próximo. Desde que isso não aconteça, ler suas próprias gravações é confiável.

### Testando & A Migração

Cerca de metade do código no sistema é o suporte a testes, framework e testes. Ainda assim, o lançamento foi um pouco acidentado, levando mais tempo de inatividade (1h para a UE e 20min para nós-global) do que o desejado, mas estamos felizes por termos passado por esse marco e agradecemos pela sua paciência!

### Em Conclusão & O Que Isso Significa Para Você

O FastComments deve agora ser mais rápido e mais durável do que nunca, e agora podemos voltar a trabalhar em novos recursos :)

Saudações!

{{/isPost}}

---