---
[category:Features]  
[category:Moderation]  
[category:Announcements]  
###### [postdate]  
# [postlink]FastComments Lança Agentes de IA[/postlink]  

{{#unless isPost}}  
Agora você pode criar Agentes de IA que leem cada novo comentário, respondem em sua voz, escalam as decisões difíceis e concedem badges aos seus melhores colaboradores. Eles operam de acordo com sua programação, dentro do seu orçamento, e fazem apenas o que você permitir.  
{{/unless}}  

{{#isPost}}  

### Uma Nota para a Comunidade  

Quero esclarecer isso logo de cara - não estamos construindo algo que permita que bots se façam passar por usuários reais. Isso não é algo que eu acredito ser bom para a internet, comunidades online ou a direção do nosso produto. O objetivo com os Agentes de IA é capacitar equipes de moderação ou proprietários de comunidades que não podem pagar moderadores dedicados.  

Todos os comentários deixados pela IA devem ter a tag "Bot". Essa é a forma como o produto é entregue, e quaisquer sites que de alguma forma removerem a tag Bot dos comentários de bots terão a funcionalidade desabilitada. Além disso, estamos usando apenas provedores de LLM que não treinam com nossos dados. Estamos atualmente usando a DeepInfra, que fornece apenas inferência para modelos de código aberto.  

Agora que isso está esclarecido :)  

### O Que Há de Novo  

O FastComments agora oferece agentes automatizados que podem realizar tarefas de moderação, destacar comentários, resumir tópicos de comentários e mais.  

Você pode encontrá-los em [Customize, then AI Agents](https://fastcomments.com/auth/my-account/ai-agents).  

### Gatilhos e Ferramentas  

Cada agente é configurado com uma lista de gatilhos e uma lista de ações permitidas. Os gatilhos incluem novos comentários, edições, exclusões, limites de votos, limites de bandeiras, ações de moderadores, comentaristas de primeira viagem e mais. Se você não quiser que um agente bane usuários, pode excluir a ferramenta de banimento.  

Por exemplo, se você quiser apenas um "resumidor de tópico" que somente responde após um certo número de comentários e destaca esse comentário, pode configurar as permissões do agente para que ele tenha acesso apenas a essas ações.  

Você também pode restringir um agente a padrões de URL específicos, como `/news/*` ou `/forums/*`, e a locais específicos, para que um agente de comunidade em francês não comece a responder em suas páginas em inglês.  

### Execução Simulada, Aprovações e Orçamentos  

Todo agente inicia em modo de execução simulada por padrão. Na execução simulada, o agente lê o contexto e escreve o que faria, mas não realiza realmente nada. Você pode observar alguns gatilhos reais, olhar as ações propostas e o raciocínio do agente, e decidir se confia nele antes de ativá-lo.  

Para ferramentas sensíveis, você pode exigir aprovação humana. O agente coloca a ação na fila, um administrador revisa a ação proposta juntamente com o raciocínio e a confiança do agente, e aprova ou rejeita. Os banimentos sempre requerem aprovação na UE de acordo com o Artigo 17 do DSA, mas você pode exigir aprovação para qualquer ferramenta, em qualquer lugar.  

Todo agente tem um teto de orçamento diário e mensal. Quando o teto é atingido, o agente para de funcionar até o período reiniciar. Nós lhe enviamos um e-mail nos limites padrão de 80% e 100% (você também pode optar por um alerta de 50%) para que não haja faturas surpresa.  

### Memória  

Os agentes têm memória que o agente lê e escreve para si mesmo. Eles podem salvar notas curtas sobre um usuário ou um padrão, como "avisado por off-topic três vezes" ou "grupo de spam postando links para o domínio X", e ler essas notas no próximo gatilho. A memória é compartilhada entre os agentes no seu inquilino, portanto, as notas de um agente de boas-vindas podem informar as decisões de um agente de moderação mais tarde. A memória associada a um usuário é limpa se ele excluir sua conta.  

### Repetição e Execução de Teste  

Antes de liberar um agente em tráfego ao vivo, você pode executá-lo contra seus comentários históricos. A ferramenta de repetição percorre comentários anteriores reais em execução simulada, mostra o que o agente teria feito e classifica cada ação proposta em relação ao que realmente aconteceu. Esta é a forma mais rápida de ajustar um prompt de sistema sem esperar por eventos ao vivo.  

### Modelos, Privacidade e Custo  

Os agentes operam em modelos de pesos abertos hospedados por provedores de infraestrutura que não treinam com dados de clientes. Hoje, você pode escolher entre um modelo mais rápido (gpt-oss-120B-turbo) e um mais inteligente e lento (GLM 5.1), e continuaremos a adicionar opções à medida que o cenário evolui. O custo é medido por token e convertido em dólares na sua página de uso, ao lado de tendências diárias e mensais.  

Como parte dessa mudança, estamos reduzindo nossos custos de tokens de $80 por 1M Tokens para $20 por 1M de tokens de entrada/saída combinados. A maioria dos nossos clientes gasta muito pouco em tokens para detecção de spam, já que o sistema original de detecção de spam baseado em LLM só direcionava para o LLM se o spam passasse pelo classificador naive-bayes, daí o alto custo originalmente. Estamos reduzindo o custo para incentivar o uso da nova funcionalidade dos agentes.  

Em algum momento, quando os custos de memória voltarem a cair e modelos como GLM 5.1 se tornarem mais razoáveis para operar em hardware auto-hospedado, mudaremos de provedores externos e operaremos o hardware nós mesmos.  

### Em Conclusão  

Pensamos muito sobre como construir isso sem fazer parecer que o agente estava no controle. A execução simulada, as aprovações, as ferramentas restritas, os tetos de orçamento e a repetição com base na história existem para ajudá-lo a manter o controle. Esperamos que os Agentes de IA liberem seus moderadores para as conversas que realmente precisam de um humano.  

Agradecemos nossos clientes que nos dão feedback contínuo para que possamos pensar em ideias como esta e também nos dar o tempo necessário para lançá-las bem. Como sempre, nos avise abaixo se você descobrir algum problema.  

Saudações!  

{{/isPost}}  

---