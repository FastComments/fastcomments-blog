---
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

O Sistema de Transporte Automático de Roteamento do FastComments (FARTS) é nossa camada de transporte e serviço. FARTs ajudam a aliviar a congestionamento, roteando
o tráfego com base na localização do usuário e potencialmente na carga no futuro. Ele consiste em vários sistemas diferentes, uma camada de DNS ciente da geolocalização, um proxy de DB, replicação de DB, gerenciamento de certificados SSL, proxy reverso e CDN que utiliza um cache LRU em disco para armazenar ativos na borda. O sistema suporta modos de failover silenciosos e barulhentos.
O modo silencioso é preferido em produção.

## Ativo-Ativo

A versão mais recente do FART contém um proxy integrado e camada de replicação para nosso banco de dados. Isso permite que o FastComments seja Ativo-Ativo
com disponibilidade de escrita global, o que faz com que nosso FARTS seja eventualmente consistente. [Mais detalhes aqui](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Uma abordagem que realmente adotamos no início foi ver se poderíamos criar um fork do MongoDB. Um de nossos engenheiros (Sloperators) conseguiu realmente
realizar isso com o Opus 4.6, no entanto decidimos que o risco de fazer isso era maior do que construir nosso próprio sistema isolado.

A última coisa que você gostaria em algo como o FART é saber que ele chegou, mas você não pode rastrear a fonte. Temos monitoramento adicionado e diagnósticos
para monitorar a replicação ativo-ativo em um nível granular.

## Rust em Escala

Parte da motivação para criar o FART foi substituir alguns serviços existentes escritos em Java. Depois de refletirmos sobre isso por um tempo, decidimos consolidá-los em um único serviço em Rust
para reduzir a sobrecarga de tempo de execução. Essa foi uma troca aceitável, uma vez que não implantamos o FART com frequência. O FART é compilado com LTO, então podemos realmente deixar ele funcionar.

Gastamos muito tempo tentando ajustar o antigo sistema Java com diferentes GCs etc, e eventualmente apenas decidimos que Rust assíncrono + Mimalloc apresentava um desempenho significativamente
melhor no mesmo hardware com requisitos de memória muito mais baixos, então a troca foi uma decisão fácil.

## O Mestre FART

Cada implantação contém seu próprio Mestre FART. O mestre é responsável por orquestrar crons, webhooks, e assim por diante.

## Impacto no Cliente

O sistema FART está em produção há cerca de um ano agora. Apenas recentemente fizemos a migração para a implantação Ativo-Ativo. O novo
sistema nos proporciona maior visibilidade sobre a latência em todo o sistema, bem como menor carga de manutenção, para que agora possamos gastar mais tempo em recursos.

O FART trabalha silenciosamente em segundo plano, embora sua presença seja sempre sentida. Esperamos que você ache nossos sistemas mais rápidos para seus casos de uso (principalmente ações do usuário que resultam em alterações nos dados serão mais rápidas em algumas regiões).

## Implantações

A implantação utiliza o mesmo sistema de orquestração global que usamos para implantar os próprios serviços. A documentação do FARTS recomenda que os sloperators nunca confiem em uma implantação, sempre verifiquem a carga útil antes de liberar.

Após a implantação, os alertas do FART seguem uma política de escalonamento: primeiro a sala, depois o andar, depois o prédio.

## Em Conclusão

Como todas as grandes versões, estamos felizes por termos podido dedicar tempo para otimizar, testar e liberar adequadamente essa mudança. Estamos animados com o que está por vir.
O FastComments deve escalar melhor e ter um uptime melhor a longo prazo com esse trabalho. Como diz o manual de execução do FART: "Se você sentir algo, diga algo". Informe-nos abaixo se descobrir algum problema.

{{/isPost}}

---