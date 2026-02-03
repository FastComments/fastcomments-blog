---
[category:Announcements]
[category:Performance]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Agora Está Globalmente Distribuído[/postlink]

{{#unless isPost}}
FastComments fez a transição para uma nova arquitetura para melhor desempenho global.
{{/unless}}

{{#isPost}}

### Novidades

Anteriormente, o FastComments tinha uma arquitetura muito tradicional para uma aplicação web. Tínhamos nossos servidores de aplicação, bancos de dados e alguns outros serviços. Isso foi
duplicado em duas regiões (us-west e eu). Se você estivesse na França e quisesse visualizar um thread de comentários de um cliente hospedado em nosso
datacenter global, suas solicitações teriam que ir até us-west para os dados dos comentários.

Não mais! Agora, os dados dos comentários e todos os ativos de mídia são replicados globalmente para clientes em nossa implementação global, e para clientes
em nossa implementação na UE, temos três pontos de presença na UE onde os dados são replicados. Suas solicitações vão para o nó mais próximo na
UE.

### Como Funcionava Antes

Exceto pelos bancos de dados que tinham várias réplicas ativas entre regiões e provedores de nuvem, todos os serviços eram implantados em uma instância por tipo de serviço.
Isso significava que para cada região tínhamos um servidor de aplicação, um servidor pubsub, e um servidor de mídia. O plano era escalar verticalmente enquanto pudéssemos
já que isso mantinha as coisas simples. Escrever código era fácil - você sempre sabia que poderia "ler suas próprias gravações" ao acessar o banco de dados. A infraestrutura era fácil,
com exceção das atualizações de segurança que levariam um minuto de inatividade.

### O Problema

O problema começou, obviamente, quando atingimos a capacidade. Então otimizávamos, e eventualmente tínhamos que aumentar o tamanho da instância para aquele serviço.

Isso começou a se tornar proibitivo em termos de custo na Linode, onde uma instância de $144 é aproximadamente equivalente, com base em nossos testes de passmark, a um nó de $20 da OVH, e mesmo se
trocássemos de provedores de hospedagem, teríamos pontos de falha únicos por toda parte - e provedores como a OVH tendem a ter tempos de resolução mais longos que a Linode
para problemas de manutenção.

### RiR :)

Durante os primeiros anos, os serviços PubSub e Media do FastComments foram escritos em Java. O Java foi escolhido por ser relativamente de alto desempenho para o esforço investido,
e após anos de ajustes no GC, tentando G1GC, Shenandoah e Z1, decidimos que não usaríamos mais Java. A sobrecarga de uso de memória era simplesmente excessiva e como esses
serviços eram muito estagnados uma vez completos, os benefícios do Java diminuíram. Além disso, esses serviços tendiam a ter que lidar com o problema "thundering herd", o que significava
que a JVM estava tentando lidar com o tráfego de pico quando o JIT ainda não havia entrado em ação. Esses serviços eram candidatos ideais para a mudança para C++ ou Rust.

Escolhemos Rust, pois não somos especialistas em C++ e cometer um erro no código de rede poderia expor os dados de um cliente a outro. Rust nos ajuda a prevenir esse tipo de problema.

Queríamos consolidar esses serviços de qualquer forma, então enquanto poderíamos ter feito *outra* passada otimizando-os talvez com GraalVM, decidimos mudar para Rust e terminar com isso.

A migração não foi sem problemas. Esses serviços precisam terminar SSL, suportar HTTP 1.1, HTTP/2, e assim por diante. Eles fazem coisas como gerenciar muitos streams de dados de forma concorrente,
lendo mídia de um cache LRU em disco na borda, S3, bancos de dados e comunicando-se em uma malha. O ecossistema Java, Vertx e Netty, eram muito bons para essas coisas. Estamos pressionando o ecossistema de bibliotecas ao seu limite, e por não termos muita experiência com as bibliotecas Rust, significou que passamos
por alguns testes e erros. Isso causou um tempo de inatividade, e pedimos desculpas por isso.

Também experimentamos diferentes gerenciadores de memória, optando pelo mimalloc para nossos servidores DNS personalizados e libc para a camada de transporte. Não usamos Nginx ou Apache, em vez disso
usamos nossa própria combinação de um servidor DNS personalizado que roteia clientes globalmente com base em um índice em memória reconstruído semanalmente a partir do Maxmind e nossa camada de transporte em Rust que mantém uma malha
com as outras instâncias de transporte. O transporte termina SSL, gerencia o trabalho do pubsub, e é nosso CDN. O benefício disso é menos sobrecarga ao mover coisas entre
serviços, e menos sobrecarga/abstração de infraestrutura. A desvantagem é a visibilidade, então boas métricas são importantes.

Em termos de desempenho resultante, os serviços em Rust usaram cerca de 10-30% da memória dos serviços em Java, apesar de todo o nosso trabalho. Eu leio livros como Java Concurrency in Practice por diversão, então
embora não seja um especialista, eu sei uma ou duas coisas sobre escrever serviços rápidos na JVM, e foi muito mais fácil conseguir isso com Rust. Além disso, picos de mensagens para grandes números
de assinantes quase não impactariam o uso da CPU quando os serviços JVM estariam gastando 40% do seu tempo no GC, apesar de escrever nosso código mais como um motor de jogo e menos
como um servidor típico. Não posso dizer que sou um grande fã de Rust, mas para serviços que fazem muito trabalho e não mudam muito após o desenvolvimento inicial, é perfeito. Nossa lógica de negócios principal
permanece em TypeScript.

### A Nova Arquitetura

A nova arquitetura não tem mais nós "pet". Em vez disso, cada servidor é um clone completo com todos os mesmos serviços e configurações quase idênticas. Cada um roda
o transporte, DNS, o servidor de aplicações e uma cópia do banco de dados. Todos os nós mantêm Criptografia de Disco Completo com desbloqueio automático com Dropbear.

Cada servidor roda o transporte de roteamento que termina solicitações e as lida como um websocket, fluxo http ou solicitação cdn. Esses servidores se conectam uns aos outros e qualquer um deles fornece um mapeamento da rede global para seu servidor DNS local para dizer ao DNS em tempo real onde cada nó ativo está globalmente.

Um dos benefícios da nova arquitetura é redundância. Se um cliente em uma região nos ataca com muita força, as outras regiões permanecem online.

O código da aplicação agora tem que estar muito ciente de quais consultas podem atingir o nó mais próximo ou quais devem ir para o banco de dados principal, que pode estar longe. Cometer um erro
pode diminuir drasticamente o desempenho. Isso também significa que gravações de algumas regiões podem ser lentas, e isso requer ajustes e otimizações cuidadosas. Agora seguimos um padrão internamente
no código onde todos os métodos que atingem o banco de dados aceitam um argumento readPreference, para que os chamadores até o topo tenham que decidir explicitamente como consultar.

O benefício é um escalonamento horizontal muito bom para leituras. O FastComments é muito pesado em leituras, mas não devemos esquecer nossos moderadores! Moderadores trabalham dia e noite em todo o mundo
e queremos que sua experiência continue boa. Como parte dessa implementação, temos trabalhado com alguns deles para garantir que as ferramentas de moderação permaneçam rápidas.

Nós também podemos escolher hardware, o que é divertido e gratificante. Os novos servidores são uma mistura de caixas i5-13500 e Ryzen 5 5600X, e a UE está em alguns Xeons mais antigos. Em nossos benchmarks todos esses
seriam muito mais rápidos do que os servidores mais caros que estávamos explorando em outros provedores. A desvantagem é mais trabalho de configuração, mas automatizamos isso, junto com o monitoramento de disco SMART para falhas e assim por diante.

Fazer esse tipo de coisa significa que podemos continuar a oferecer preços competitivos.

### A Implementação

A implementação nos últimos meses enquanto reescrevemos os serviços e mudamos para novos provedores de hospedagem tem sido complicada, agradecemos por sua paciência.

Na implementação inicial, nossas métricas mostraram um aumento em solicitações levando > 100ms. Tentamos não ter muitas solicitações levando tanto tempo para nada.

<div class="text-center">
    <div class="sm">Progresso Gradual</div>
    <img src="images/slow-reqs.png" alt="Solicitações Lentas" title="Solicitações Lentas" />
</div>

Ainda estamos fazendo progresso gradual na melhoria do desempenho para algumas regiões. Agradecemos a todos que forneceram feedback até agora.

### Considerações ao Usar a API

A API continua fortemente consistente - você pode ler suas próprias gravações - para manter a compatibilidade retroativa e manter as coisas simples para os desenvolvedores. Para permitir
que os desenvolvedores escolham desempenho em vez de consistência, planejamos expor o parâmetro readPreference. O benefício é que também podemos oferecer um desconto em créditos para
essas chamadas de API.

Todos os endpoints públicos, como para servir o widget de comentários públicos, sempre leem do banco de dados mais próximo (local) naquele nó.

### Por Que Não Apenas Usar um CDN Regular

Os threads de comentários não são estáticos, eles são ao vivo, e aplicar um fluxo ao vivo sobre os dados estáticos ultrapassados também não funciona, já que quando você visualiza um thread como
um usuário anônimo, você obtém uma "sessão anônima". Nessa sessão anônima, você pode fazer coisas como bloquear e sinalizar outros usuários, e você tem que mostrar
se o usuário anônimo gostou de um determinado comentário, e assim por diante. Os threads de comentários também podem estar bloqueados atrás de SSO, autenticação ou grupos de usuários. 

Finalmente, o tipo de "aperfeiçoamento progressivo" onde os dados dinâmicos são mapeados aos dados estáticos do CDN oferece uma má experiência onde o conteúdo salta ou muda após alguns segundos.
Preferiríamos não fazer isso.

### Quem Tem Meus Dados Agora

Seus dados não estão mais armazenados na Linode. Eles são replicados ao vivo entre Hetzner e OVH com criptografia de disco completo, e toda comunicação entre servidores de backend
é feita com TLS. Mantemos algumas instâncias legadas da Linode para proxies de webhook de saída, mas nenhum dado ou mídia permanece armazenado na Linode.

### Em Conclusão

Como todas as grandes versões, estamos felizes que pudemos dedicar tempo para otimizar, testar e liberar adequadamente essa mudança. O FastComments deve escalar melhor e ter
melhor tempo de atividade a longo prazo com esse trabalho. Deixe-nos saber abaixo se você descobrir algum problema.

{{/isPost}}

---