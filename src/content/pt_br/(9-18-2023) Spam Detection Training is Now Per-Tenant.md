---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]O Treinamento de Detecção de Spam Agora é Por Inquilino[/postlink]

{{#unless isPost}}
FastComments tem treinado seu classificador de prevenção de spam por anos. Agora, as
capacidades de treinamento foram aprimoradas.
{{/unless}}

{{#isPost}}

### O Que Há de Novo

Quando você marca um comentário como spam ou não spam, o FastComments aprende com isso para a
detecção de spam futura.

No entanto, esse aprendizado acontecia no mesmo lugar para todos. Ou seja, o treinamento de spam de outro
inquilino afetava o seu. Há vantagens e desvantagens nisso. Primeiro, você se beneficia automaticamente do que
outros moderadores consideram spam. A desvantagem é que se eles cometem um erro, ou se eles têm conteúdo que é
diferente do seu.

Por exemplo, se outro inquilino tem um público que fala sobre simuladores de corrida, eles podem estar
marcando comentários com "spam de cripto" como spam, com frequência. Como resultado, o classificador começa a
relacionar texto relacionado a cripto como spam.

Mas, digamos que você tenha um site voltado para cripto. Agora muitos dos seus comentários começam a ser
marcados como spam quando não são. Alguns deles podem ser justificadamente spam, mas muitos podem não ser.

### Treinamento Isolado

Quando um novo inquilino se junta ao FastComments, por padrão, sua detecção de spam será treinada com
o trabalho anterior de outros inquilinos.

À medida que você começa a marcar comentários como spam/não spam, o sistema irá transitar para usar seu
próprio conjunto de treinamento.

### Atualização 20 de Set 2023

Descobrimos que essa configuração não era ideal para todos por padrão. O Treinamento de Spam Isolado não é apenas
por opt-in. Você pode habilitar isso na página de Configurações de Moderação selecionando "Isolado" na opção "Filtro de Spam".

O padrão agora voltou para o treinamento "Compartilhado".

### Ao Vivo

O conjunto de treinamento para seu inquilino agora é sempre reconstruído toda vez que você marca um comentário como spam ou não spam.

Anteriormente, o sistema reconstruía o índice de spam periodicamente. Isso era feito para proteger o sistema contra
carga excessiva. Após alguns anos, descobrimos que a carga do treinamento contínuo não era muito alta, então
atualizamos o sistema para atualizar automaticamente o índice toda vez que você faz uma mudança.

Esses índices são armazenados na borda em nossos servidores de aplicação, e todos eles atualizam de forma independente para
manter o sistema rápido e responsivo.

### Como Obter

Esse recurso foi disponibilizado para todos os clientes!

### Em Conclusão

Como em todos os lançamentos importantes, estamos felizes por termos podido dedicar tempo para otimizar, testar e
liberar adequadamente esse recurso. Deixe-nos saber abaixo se você descobrir algum problema.

Saudações!

{{/isPost}}

---