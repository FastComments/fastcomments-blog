---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Migração para TypeScript do FastComments Concluída[/postlink]

{{#unless isPost}}
Em preparação para a próxima década de desenvolvimento, migramos um dos maiores componentes do FastComments para TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

### O que há de novo

No FastComments, valorizamos linguagens tipadas estaticamente. Mais especificamente, gosto de sistemas de tipos decentes com compiladores rápidos. O FastComments começou com o último - ou sem compilador. Embora tivéssemos dois serviços escritos em Java moderno no primeiro ano, as principais bibliotecas de backend e frontend foram escritas em CJS JS rodando no Node.

Em preparação para a próxima década de desenvolvimento, migramos os maiores componentes do FastComments para TypeScript.

Isso envolveu migrar mais de 130 mil linhas de código (100 mil dessas são do backend) em 1441 arquivos, e corrigir mais de 8000 erros de compilação.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="Captura de tela do GitHub" title="Captura de tela do GitHub" />
</div>

Isso foi feito em duas semanas.

### Congelamento de Código - Obrigado

Gostaria de agradecer aos nossos clientes por lidarem com quaisquer atrasos em correções de bugs ou lançamentos de recursos, enquanto fizemos um congelamento de código de duas semanas para concluir essa atualização. Obrigado!

### Bugs Corrigidos

Como você pode imaginar, corrigimos uma série de bugs. Estes estavam principalmente relacionados à detecção de spam e cache.

### Mudanças Quebradoras

- Todos os endpoints da API agora retornam status: 'failed' em vez de uma mistura de "failed" e "failure" como valores de status. "success" permanece inalterado.
- Não iremos mais retornar a primeira configuração de widget por padrão se não houver correspondência, em vez disso, retornaremos a configuração padrão do sistema.

### Como Foi?

Descobrimos que, como de costume, muitas das ferramentas do ecossistema NPM para ajudar com essa tarefa não funcionaram muito bem. Então, usamos LLMs para gerar scripts que realizassem grande parte do trabalho. Por exemplo, utilizamos bastante o JSDoc, para que pudéssemos escrever scripts que pegassem o JSDoc e os convertessem em interfaces TypeScript e definições de tipos, e anotassem corretamente argumentos de função e tipos de retorno. Também usamos esses scripts para migrar de CJS para ESM, o que incluiu reescrever imports, exports e detectar problemas comuns de runtime como `__dirname`.

Mencionei problemas de runtime?

### Como é o TypeScript em 2025?

TypeScript é uma linguagem agradável para escrever lógica de negócios. Mas, Java ainda tem uma melhor DevEx. Se Java, Go ou Rust compilar, é muito provável que funcione. Com TypeScript, posso fazer algo como:

    console.log(__dirname);

... e isso vai compilar.

Mas não vai rodar, com módulos es modernos. Seu IDE até pode completar automaticamente `__dirname`, e então ele vai falhar em tempo de execução. Parece com Spring DI, mas pior.

Você também pode fazer coisas como:

    context.someImportantMethodToCall;

Agora, isso é uma "declaração". É uma "declaração" válida. À primeira vista, você pode pensar que estamos chamando `someImportantMethodToCall`, mas não estamos! Meu IDE, pelo menos, não avisa sobre isso, e nem o compilador. O código simplesmente não fará nada (a menos que `someImportantMethodToCall` seja um `getter` de classe, caso em que será chamado implicitamente...)

A correção é:

    context.someImportantMethodToCall();

Acho que você pode provavelmente detectar isso com algo como eslint e alguma regra de "sem efeitos colaterais", mas aí você puxa outro grande conjunto de bibliotecas para manter atualizadas, e então o eslint tem que analisar todo o seu código em cada build, as ferramentas são lentas, e assim por diante - não, obrigado. O impacto na produtividade de lidar com ferramentas lentas como o eslint tem sido mais significativo na minha carreira em empregos anteriores do que o "impulso" de produtividade que obtive das pequenas coisas que o eslint corrige/previne com espaçamento, etc. Novas alternativas mais rápidas estão surgindo agora, o que é ótimo.

TypeScript é realmente bom por causa de recursos de linguagem como `Pick<User, 'username', 'email'>`. Isso, combinado com inferência de tipos, fornece uma maneira de ter resultados de consulta seguros em termos de tipos do banco de dados para subconjuntos de objetos maiores sem precisar definir uma classe para cada formato. `Pick` é algo que estou surpreso que o Scala não tenha. Uniões de Tipos também são muito boas.

Builds incrementais também funcionam razoavelmente bem, aumentamos nossos tempos de build em CI em cerca de 5 a 10 segundos, em média, para compilar a biblioteca compartilhada, frontend e backend.

### Cronograma de Desenvolvimento

Para aqueles curiosos, aqui está como nossa progressão se parecer:

- Dia Um: Encontramos 5564 erros em 362 arquivos.
- Dia Dois: Encontramos 4034 erros em 239 arquivos.
- Dia Três: Encontramos 3784 erros em 191 arquivos.
- Dia Quatro: Encontramos 2974 erros em 169 arquivos.
- Dia Cinco: Encontramos 3000 erros em 171 arquivos.
- Dia Seis: Encontramos 2916 erros em 165 arquivos.
- Dia Sete: Encontramos 2618 erros em 157 arquivos.
- Dia Oito: Encontramos 2253 erros em 109 arquivos.
- Dia Nove: Encontramos 1605 erros em 69 arquivos.
- Dia Dez: Encontramos 686 erros em 53 arquivos.
- Dia 11: Testes Unitários do Backend Aprovados
- Dia 12: Começamos a migrar o frontend, 3118 erros.
- Dia 13: Encontramos 2172 erros.
- Dia 14: Encontramos 1224 erros.
- Dia 15: Encontramos 498 erros.
- Dia 16: Todos os erros de compilação corrigidos.
- Dia 17: Lançado. Testes E2E aprovados. 30 minutos de inatividade durante problemas de runtime inesperados. :)

### O Futuro

Fizemos isso para apoiar o desenvolvimento da próxima década. O sistema está agora grande o suficiente que é mais rápido desenvolver com um sistema de tipos do que sem ele.

Você também pode esperar que nossa biblioteca TypeScript no NPM melhore, como já começou a melhorar, uma vez que estamos agora alimentando essa biblioteca em nosso código de servidor e cliente.

Também estaremos em breve lançando SDKs de cliente gerados diretamente do código do servidor, que foi uma motivação primária em torno desse esforço.

### Em Conclusão

Como em todos os lançamentos importantes, estamos felizes por termos podido dedicar tempo para otimizar, testar e lançar adequadamente essas mudanças. Deixe-nos saber abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}

---