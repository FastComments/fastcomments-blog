---
[category:Features]

###### [postdate]
# [postlink]FastComments Agora Suporta Markdown[/postlink]

Uma experiência de comentário mais rica chegou ao FastComments com o uso de Markdown!

{{#isPost}}

Markdown é um conjunto de convenções para estilização de texto. Por exemplo, para criar uma palavra em negrito, poderíamos \*\*fazer isso\*\*.
Inserir links normais significa apenas colar a URL bruta, e imagens funcionam como antes.

Aqui está uma folha de dicas de Markdown, fornecida pelo Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Que Sintaxe Markdown O FastComments Suporta?

Nós suportamos totalmente Markdown, exceto títulos. Ao definir um título, simplesmente o renderizamos como texto normal, pois eles distraem do fluxo da conversa. Títulos
são para conteúdos como postagens de blog e documentos - não para conversas.

O FastComments sempre suportou imagens via a sintaxe [img]...[/img]. Isso continuará sendo suportado, pois é mais fácil de entender do que o Markdown.

### Misturando Conteúdos

Um único comentário pode conter todas as formas de formatação - markdown, links, imagens, trechos de código e tabelas.

### Evitando Ataques XSF/XSS

Anteriormente, o FastComments enviava texto simples pela rede e o analisava no cliente. Agora, HTML é enviado pela rede, e mantemos duas versões de cada comentário
em nosso banco de dados para suportar funcionalidades como edição de comentários.

Enviar HTML diretamente para os comentários tem seus riscos - portanto, todos os comentários gerados são analisados e limpos para prevenir ataques de cross-site e cross-frame.

### Exportações de Dados

Ao exportar comentários, você receberá a versão que o usuário viu ao digitar seu comentário. Se você quiser obter o HTML bruto, entre em contato conosco.

### Preocupações de Performance

O aumento de recursos costuma ter o hábito de desacelerar as coisas. Isso não é o que queremos fazer no FastComments.
Adicionar esse recurso **reduziu** o tamanho de nosso widget do lado do cliente em ~400 bytes - de 9.53kb para 9.12kb - significando carregamentos de página mais rápidos.

Embora teoricamente esse recurso possa desacelerar o mecanismo de salvar comentários, não vimos nenhuma degradação de performance e, como sempre, estamos monitorando nossas APIs.

### Como eu consigo?

O suporte a Markdown foi implantado automaticamente para todos os nossos clientes. Você não deve ver muitas mudanças no conteúdo postado em seu site - exceto que agora os usuários podem colocar em negrito, sublinhar e fazer coisas interessantes
como criar tabelas simples.

Como em todos os lançamentos de recursos, aguardamos feedback e, enquanto temos muitos testes automatizados... se você ver algum problema - nos avise!

Comentários felizes.

{{/isPost}}