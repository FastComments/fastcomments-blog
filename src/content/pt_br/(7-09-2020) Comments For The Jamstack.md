---
[category:Integrations]
###### [postdate]
# [postlink]Comentários Para O Jamstack[/postlink]

{{#unless isPost}}
O que é velho é novo novamente. Renderização prévia e servir sites de um CDN agora é chamado de "JamStack" - mas não precisa ser completamente estático!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

<a href="https://jamstack.org/" target="_blank">O Jamstack</a> é uma maneira de escrever um site que não depende de um servidor web tradicional. Em vez disso, eles são
servidos de servidores que chamamos de "CDN" para a melhor experiência do usuário (eles carregam muito rápido). Desempenho é uma prioridade enorme para sites escritos com o Jamstack - assim como
o FastComments.

#### Por Que O FastComments Funciona Com O Jamstack

O FastComments requer apenas um pequeno (< 11kb atualmente) trecho de código na parte inferior da página estática à qual você deseja adicionar comentários. Assim, instalar o FastComments em um típico
site Jamstack leva apenas alguns segundos, assim como qualquer site estático.

#### Problemas Potenciais

Entendemos que sites Jamstack nem sempre começam como algo estático. Eles podem ser feitos com Preact, React ou Vue, por exemplo. Escrito em JS vanilla, construímos o widget FastComments
para máxima interoperabilidade para funcionar com todos os principais frameworks. No entanto, se você encontrar problemas com o FastComments e seu framework de escolha, então
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">nos avise</a>.

#### Em Conclusão

Esperamos que você ache que o FastComments permite que seus usuários interajam com seu site, dêem feedback e deixem comentários de maneiras que normalmente não poderiam em um site estático.
Por exemplo, esta página está pré-renderizada assim como um site tradicional Jamstack, e você pode ver o FastComments felizmente funcionando na parte inferior.

Saudações!

{{/isPost}}