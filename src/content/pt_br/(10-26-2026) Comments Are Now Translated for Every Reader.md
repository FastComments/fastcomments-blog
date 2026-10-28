[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]Comentários Agora São Traduzidos para Cada Leitor[/postlink]

{{#unless isPost}}
FastComments agora pode traduzir os próprios comentários, não apenas o widget ao redor deles. Ative‑o por site ou por página, automaticamente ou com um botão Traduzir, e cada leitor vê a conversa em seu próprio idioma com o original a um clique de distância.
{{/unless}}

{{#isPost}}

### Novidades

O FastComments já foi traduzido para vinte e oito idiomas há algum tempo, então os botões, rótulos e e‑mails já aparecem no idioma do leitor. Os comentários não. Um comentário em espanhol em uma página em inglês permanecia em espanhol, e quem não o lia simplesmente passava adiante.

Esta versão adiciona **Comment Translation**. Quando está ativada, um comentário escrito em um idioma diferente do do leitor é exibido traduzido, com uma pequena linha abaixo indicando de onde veio e um link **Show original** para ver o que foi realmente escrito.

<img src="images/fc-comment-translation-auto.png" alt="Um leitor em inglês vendo um comentário em espanhol traduzido, com a linha Traduzido do espanhol e um link Show original abaixo" title="Tradução Automática de Comentário" class="lozad" />

### Dois Modos

**Automatic** translates up front. Todo comentário em outro idioma chega traduzido, e o leitor pode alternar para o original se desejar. Este é o modo para uma comunidade que realmente escreve em duas ou mais línguas e quer que todos leiam a mesma conversa.

**Manual** adds a **Translate** link to each comment and does nothing until it's clicked. O leitor decide quais comentários valem a tradução, e nada é gasto com aqueles que ninguém solicita. Um comentário que já está no idioma do leitor indica isso ao invés de fingir que foi traduzido.

<img src="images/fc-comment-translation-manual.png" alt="Modo manual, onde um comentário em espanhol foi traduzido ao clicar e um comentário em inglês indica que já está no idioma do leitor" title="Tradução Manual de Comentário" class="lozad" />

Em ambos os modos, o idioma do leitor é o que o widget já está exibindo: o **Locale / Language** que você definiu na regra de personalização, ou o idioma do navegador do visitante se você não definiu nenhum. Não há nada que o visitante precise instalar, se registrar ou configurar. Ele funciona da mesma forma, seja o widget incorporado na sua página, dentro de um construtor de sites como o Google Sites, ou em uma página de comentários FastComments independente.

### Ativando

Abra sua <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Personalização de Widget</a>, encontre **Comment Translation** logo abaixo de **Locale / Language**, e escolha Automatic ou Manual. Por padrão está desativado.

Como ele está em uma regra de personalização, você pode aplicá‑lo como quiser: em todo o seu site, em um domínio, ou em uma única página onde sabe que o público é misto. É uma configuração do lado do servidor, portanto não pode ser ativada apenas a partir da configuração JavaScript do widget.

### Quanto Custa

As traduções são produzidas por um modelo de linguagem e cobradas como tokens LLM, a mesma métrica usada pelos [AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html). Qualquer plano pode ativá‑la.

Cada comentário é traduzido uma vez por idioma e a tradução é armazenada junto ao comentário. Se mil leitores em espanhol abrirem o mesmo tópico em inglês, o trabalho de tradução ocorre apenas uma vez. Um comentário típico tem algumas centenas de tokens, o que nas tarifas Flex equivale a cerca de meio centavo. Se o autor ou um moderador editar um comentário, a tradução armazenada é descartada e o comentário é traduzido novamente na próxima visualização, de modo que ninguém lê uma tradução de texto que já não existe.

O modo manual não custa nada até que alguém clique.

### Os Detalhes

O texto traduzido é tratado exatamente como um comentário digitado por alguém. Ele passa pelas mesmas regras de sanitização e de links do original, portanto uma tradução não pode conter nada que o original não poderia. Menções e hashtags mantêm sua formatação.

Comentários que são muito longos, ou cujo idioma não pode ser detectado com confiança, são deixados como escritos ao invés de adivinhados. A linha de idioma sob um comentário traduzido também está no idioma do leitor, de modo que um leitor em espanhol de um comentário em inglês vê "Traducido del inglés" e "Mostrar original".

### Sobrecarga

O código desta nova funcionalidade não é carregado a menos que esteja ativado, portanto não desacelera o widget de comentários para nossos outros usuários.

### Documentação

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">Guia de Tradução de Comentários</a>
cobre ambos os modos, a configuração da regra e a cobrança.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Guia de locale</a>
cobre como o idioma do widget é escolhido inicialmente.

### Em Conclusão

Esta surgiu de uma associação de bairro cujos moradores comentam em inglês e espanhol, e que queriam que ambos os grupos lessem o mesmo tópico sem pedir que ninguém instalasse uma extensão de navegador ou se registrasse em algo.

Se você administra uma comunidade que escreve em mais de um idioma, ative‑a e nos conte abaixo como as traduções ficam.

Saúde!

{{/isPost}}

---