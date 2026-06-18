---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]Incorporar YouTube, SoundCloud e Mais em Comentários[/postlink]

{{#unless isPost}}
Agora, os comentaristas podem colar um código de incorporação e ter o vídeo ou reprodutor exibido diretamente dentro do comentário. Está desativado por padrão, é necessário optar por site e é restrito a provedores confiáveis.
{{/unless}}

{{#isPost}}

### Novidades

As pessoas adoram compartilhar um vídeo ou uma faixa em uma discussão. Até agora, colar uma incorporação do YouTube ou do SoundCloud em um comentário não tinha muito efeito. O `<iframe>` raw era removido por questões de segurança ou era encapsulado como um bloco de código.

Agora você pode ativar incorporações de mídia para seu site. Quando ativado, um comentarista pode colar o código de incorporação diretamente do provedor e ele é exibido inline, da mesma forma que em qualquer outra página.

Aqui está o tipo de trecho que as pessoas copiam de um botão "Compartilhar" ou "Incorporar":

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="Player de vídeo do YouTube" frameborder="0" allowfullscreen></iframe></div>

Cole isso em um comentário com incorporações ativadas e você obtém o reprodutor real.

### Somente Provedores Confiáveis

Permitir iframes arbitrários em sua página é um verdadeiro risco de segurança, então não simplesmente abrimos as portas. As incorporações são restritas a uma lista embutida de provedores confiáveis, incluindo YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch e Dailymotion.

Se um comentário contiver um iframe apontando para qualquer outro lugar, o iframe é removido quando o comentário é salvo. A mesma higienização que protege contra tags `<script>` e truques `onload=` ainda é aplicada em todos os comentários. As incorporações são apenas uma permissão adicional, cuidadosamente limitada além disso.

### Adicionando Seus Próprios Provedores

Se você usa um provedor que não está na lista embutida, pode permitir isso. Existe um campo "Domínios de Incorporação Adicionais" onde você lista nomes de host extras para confiar, além dos provedores embutidos.

A correspondência é pelo nome de host exato, então adicione o host completo de onde a incorporação é carregada, por exemplo, `player.example.com`. Qualquer coisa que você não listar permanecerá bloqueada.

### Como Ativar

É uma configuração por site na página de personalização do widget, bem ao lado das opções de upload de imagem. Marque "Permitir Incorporações de Mídia?" e salve. Nenhum código ou nova implantação é necessário.

Como nossas outras configurações de conteúdo, isso é por regra de personalização, então você pode ativar incorporações em um site ou em um conjunto de páginas e deixá-las desativadas em outros locais.

### Funciona em Ambos os Editores

Colar funciona tanto na caixa de comentários simples quanto no editor WYSIWYG. Na caixa simples, o código de incorporação é inserido como texto e se torna um reprodutor ao enviar. No editor WYSIWYG, a incorporação aparece como um bloco imediatamente, com um pequeno botão de remoção no canto para que seja fácil de excluir se foi um engano.

### Em Conclusão

As incorporações estão desativadas por padrão, então nada muda para o seu site, a menos que você decida ativá-las. Quando você o faz, seus comentaristas têm uma maneira mais agradável de compartilhar vídeos e faixas, e você mantém as mesmas garantias de segurança que já tinha.

Ative, cole um vídeo e nos diga o que você acha abaixo.

Saudações!

{{/isPost}}