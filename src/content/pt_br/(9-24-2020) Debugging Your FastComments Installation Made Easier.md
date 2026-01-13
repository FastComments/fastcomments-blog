---
[category:Tutorials]
###### [postdate]
# [postlink]Facilitando a Depuração da Sua Instalação do FastComments[/postlink]

{{#unless isPost}}
Comentários não aparecem? As configurações não parecem estar aplicadas? Descobrir isso ficou muito mais fácil.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

#### O Que Há de Novo

Na <a href="https://fastcomments.com">FastComments</a>, acabamos de lançar uma extensão para o navegador Google Chrome. Esta extensão ajudará você a entender qual configuração
o widget de comentários está recebendo, bem como por que pode não estar sendo exibido.

Você pode encontrar a extensão aqui: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Como Usá-la

Se você perceber que o widget de comentários não está carregando, ou que alguma configuração que você definiu não está aparecendo, tente instalar <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">a extensão</a>
e abri-la na página em questão. Para ver o ícone na sua barra de ferramentas, pode ser necessário clicar na peça de quebra-cabeça no canto superior direito para fixá-lo, como mostrado:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Como Fixar a Extensão" title="Como Fixar a Extensão" class="lozad" />
</div>

A extensão pode ajudar a depurar duas classificações de erros. A primeira, se o widget não estiver incluído na página ou houver um erro de digitação significativo no script.

A segunda é se alguma configuração não parece estar surtindo efeito.

Para depurar ambos, você começa clicando simplesmente no ícone.

Se a ferramenta não encontrar o widget de comentários na página, você receberá um grande erro vermelho:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Exemplo de Embed.js não encontrado" title="Exemplo de Embed.js não encontrado" class="lozad" />
</div>

Se uma ou mais instâncias do widget forem encontradas, você verá suas configurações exibidas separadamente:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Exemplo de Múltiplas Configurações" title="Exemplo de Múltiplas Configurações" class="lozad" />
</div>

Além disso, o FastComments Debugger também exibirá avisos para pegadinhas comuns - como o widget não aparecer em modo somente leitura se não houver comentários disponíveis.

#### Configurações da Instância "Final"?

Você pode ver que o depurador mostra dois conjuntos de configurações - um rotulado "Passado para o Widget" e outro rotulado "Final".

A configuração "Passado para o Widget" é, como você pode imaginar, a configuração que você passa para o widget. Alguns valores são passados implicitamente pelo embed.js, como a URL ou Título da Página - e esses são incluídos.

A configuração "Final" é tudo o que o widget usa para se renderizar. Isso pode significar valores preenchidos automaticamente (como o id da instância) ou <b>valores da página de administração de personalização do widget</b>.

#### Como Funciona

O widget de comentários armazena sua configuração em um local onde o depurador pode encontrá-la, e então o depurador escaneia a página atual que você está para instâncias do widget e as carrega na memória.

#### Quais Informações Esta Extensão Coleta?

A Ferramenta de Depuração do FastComments não se comunica com nenhum servidor da FastComments. De fato, o widget não irá sequer verificar o conteúdo da página em que você está
a menos que você a abra.

#### Em Conclusão

Esperamos que fornecer mais ferramentas como esta torne a configuração do FastComments mais fácil para todos os tipos de clientes que temos. Deixe-nos saber na seção de comentários abaixo
como isso funcionou para você.

Sabemos que em alguns casos você ainda pode precisar de uma mão amiga - e para isso ainda existe a <a href="https://fastcomments.com/auth/my-account/help" target="_blank">página de suporte ao cliente</a>.

Saudações!

{{/isPost}}