---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]O Sistema de Transporte de Roteamento Automático FastComments[/postlink]

{{#unless isPost}}
Apresentando o Sistema de Transporte de Roteamento Automático FastComments!
{{/unless}}

{{#isPost}}

## Introdução

O Sistema de Transporte de Roteamento Automático FastComments (FARTS) é nossa camada de transporte e serviço. FARTS ajuda com congestão, roteando
o tráfego com base na localização do usuário e potencialmente na carga no futuro. Consiste em vários sistemas diferentes, uma camada de DNS ciente da geolocalização, um proxy de DB, replicação de DB, gerenciamento de certificado SSL, proxy reverso e CDN que usa um cache LRU em disco para armazenar ativos na borda.

## Ativo-Ativo

A versão mais recente do FART contém um proxy integrado e uma camada de replicação para nosso banco de dados. Isso permite que o FastComments seja Ativo-Ativo
com disponibilidade de escrita global, o que garante que nossos FARTS sejam eventualmente consistentes. [Mais detalhes aqui](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Uma abordagem que realmente adotamos no início foi ver se poderíamos criar um fork ativo-ativo do MongoDB. Um de nossos engenheiros (Sloperators) conseguiu realmente realizar isso com Opus 4.6, no entanto, decidimos que o risco de fazer isso era maior do que construir nosso próprio sistema isolado.

## Rust em Escala

Parte da motivação para criar o FART foi substituir alguns serviços existentes escritos em Java. Depois de ponderar sobre isso por um tempo, decidimos consolidar esses em um único serviço em Rust para reduzir a sobrecarga de tempo de execução. Essa foi uma troca aceitável, já que não implantamos o FART com frequência. O FART é compilado com LTO, então podemos realmente acelerar.

Gastamos muito tempo tentando ajustar o antigo sistema Java com diferentes GCs etc., e eventualmente decidimos que Rust assíncrono + Mimalloc apresentou desempenho significativamente
melhor no mesmo hardware, com requisitos de memória muito mais baixos, então a mudança foi uma decisão fácil.

Rust acabou sendo realmente ótimo para código relacionado a rede que usa heaps compartilhados e locks. No entanto, não é imune a problemas de tempo de execução.
Vale a pena mencionar que o código escrito por LLMs em Rust é bastante propenso a deadlocks, e uma maneira de contornar isso é projetar sistemas como máquinas de estado fáceis de entender, em vez de apenas montanhas de async/await.

## O Mestre FART

Cada implantação contém seu próprio Mestre FART. O mestre é responsável por orquestrar crons, webhooks e assim por diante.

## Impacto para Clientes

O sistema FART está em produção há cerca de um ano. Somente recentemente realizamos a migração para a implantação Ativo-Ativo.
Há algum impacto ao ler suas próprias gravações em diferentes regiões, que é coberto no post do blog vinculado acima e [na documentação](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

O FART funciona silenciosamente em segundo plano, embora sua presença seja sempre sentida. Esperamos que você descubra que nossos sistemas são mais rápidos para seus casos de uso (principalmente ações do usuário que resultam em mudanças nos dados serão mais rápidas em algumas regiões).

## Implantações

A implantação usa o mesmo sistema de orquestração global que usamos para implantar os próprios serviços. A documentação do FART recomenda que os Sloperators nunca confiem em uma implantação, sempre verifiquem a carga útil antes de liberar.

Após a implantação, os alertas do FART seguem uma política de escalonamento: primeiro a sala, depois o andar, depois o prédio.

## Em Conclusão

Dizem que a internet é uma série de tubos, mas na verdade é uma série de flatos.

Como todas as grandes atualizações, estamos felizes por podermos reservar um tempo para otimizar, testar e liberar adequadamente essa mudança. Estamos animados com o que está por vir.
O FastComments deve escalar melhor e ter melhor disponibilidade a longo prazo com este trabalho. Como diz o manual do FART: "Se você sentir algo, diga algo". Deixe-nos saber abaixo se você descobrir algum problema.

{{/isPost}}