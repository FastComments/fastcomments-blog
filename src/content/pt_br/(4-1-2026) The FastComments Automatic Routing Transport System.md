---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]O Sistema de Transporte Automático de Roteamento do FastComments[/postlink]

{{#unless isPost}}
Apresentando o Sistema de Transporte Automático de Roteamento do FastComments!
{{/unless}}

{{#isPost}}

## Introdução

O Sistema de Transporte Automático de Roteamento do FastComments (FARTS) é nossa camada de transporte e serviço. O FARTS ajuda na congestão, roteando o tráfego com base na localização do usuário e potencialmente na carga no futuro. Ele consiste em vários sistemas diferentes, uma camada de DNS geoesaware, um proxy de banco de dados, replicação de banco de dados, gerenciamento de certificados SSL, proxy reverso e CDN que utiliza um cache LRU em disco para armazenar ativos na borda.

## Ativo-Ativo

A versão mais recente do FART contém um proxy embutido e uma camada de replicação para nosso banco de dados. Isso permite que o FastComments seja Ativo-Ativo com disponibilidade de gravação global, o que garante que nossos FARTS sejam eventualmente consistentes. [Mais detalhes aqui](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Uma abordagem que realmente adotamos no início foi ver se conseguíamos criar um fork ativo-ativo do MongoDB. Um de nossos engenheiros (Sloperators) conseguiu realmente realizar isso com Opus 4.6, no entanto, decidimos que o risco de fazer isso era maior do que construir nosso próprio sistema isolado.

## Rust em Escala

Parte da motivação para criar o FART foi substituir alguns serviços existentes escritos em Java. Depois de refletir sobre isso por um tempo, decidimos consolidá-los em um único serviço Rust para reduzir a sobrecarga em tempo de execução. Essa foi uma troca aceitável, já que não implantamos o FART com frequência. O FART é compilado com LTO, então podemos realmente deixar a coisa funcionar.

Passamos muito tempo tentando ajustar o antigo sistema Java com diferentes GCs, etc., e eventualmente decidimos que Rust assíncrono + Mimalloc apresentavam desempenho significativamente melhor no mesmo hardware com requisitos de memória muito mais baixos, então a troca foi uma decisão óbvia.

Rust acabou sendo realmente ótimo para código relacionado a rede que utiliza heaps compartilhados e locks. No entanto, não é à prova de problemas em tempo de execução. Vale a pena mencionar que o código escrito por LLMs em Rust é bastante propenso a deadlocks, e uma maneira de contornar isso é projetar sistemas como máquinas de estado fáceis de entender, em vez de apenas montes de async/await.

## O Mestre FART

Cada implantação contém seu próprio Mestre FART. O mestre é responsável por orquestrar crons, webhooks e assim por diante.

## Impacto no Cliente

O sistema FART está em produção há cerca de um ano agora. Somente recentemente fizemos a migração para a implantação Ativo-Ativo. Há algum impacto ao ler suas próprias gravações entre regiões, que é abordado no post do blog vinculado acima e [na documentação](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

O FART trabalha silenciosamente em segundo plano, embora sua presença seja sempre sentida. Esperamos que você descubra que nossos sistemas são mais rápidos para seus casos de uso (na maioria das vezes, ações dos usuários que resultam em mudanças nos dados serão mais rápidas em algumas regiões).

## Implantações

A implantação utiliza o mesmo sistema de orquestração global que usamos para implantar os próprios serviços. A documentação do FART recomenda que os Sloperators nunca confiem em uma implantação, sempre verifiquem o payload antes de liberar.

Alerts pós-implantação do FART seguem uma política de escalonamento: primeiro o sala, depois o andar, então o edifício.

## Em Conclusão

Dizem que a internet é uma série de tubos, mas na verdade é uma série de toots.

Como todas as grandes versões, estamos contentes por termos podido dedicar tempo para otimizar, testar e liberar adequadamente essa mudança. Estamos empolgados com o que está por vir. O FastComments deve escalar melhor e ter melhor uptime a longo prazo com esse trabalho. Como diz o livro de regras do FART: "Se você sentir algo, diga algo". Deixe-nos saber abaixo se você descobrir algum problema.

{{/isPost}}