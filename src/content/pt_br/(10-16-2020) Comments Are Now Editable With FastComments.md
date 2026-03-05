---
[category:Features]
###### [postdate]
# [postlink]Comentários Agora Podem Ser Editados com FastComments[/postlink]

{{#unless isPost}}
Uma atualização muito aguardada, agora você pode editar comentários deixados com FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

#### O Que Há de Novo

Comentários deixados com FastComments agora podem ser editados - esteja você logado ou não.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Demonstração de Edição"></video>

Compreensivelmente, essa tem sido uma das funcionalidades mais solicitadas, e estamos felizes em alcançar este marco com nossa base de usuários.

#### Como Funciona

Usuários logados sempre podem editar seus comentários. Para comentaristas anônimos, nossos servidores oferecem uma janela temporária de 24 horas para que eles editem seu comentário após comentarem, desde que não fechem o navegador. Por exemplo, isso significa que um comentarista anônimo pode comentar e, em seguida, editar seu comentário para corrigir quaisquer erros de digitação, sem nunca precisar fazer login!

Se o comentarista anônimo fechar o navegador, não poderá editar seu comentário a menos que clique no link mágico enviado para seu e-mail.

Para maior segurança, a chave de edição temporária será invalidada em qualquer tentativa de adivinhar a chave incorretamente.

#### Por Que Agora, Depois de Tanto Tempo?

Como em todas as mudanças do widget do lado do cliente, precisamos ter cuidado para não aumentar seu tamanho. Esta funcionalidade adiciona um tamanho considerável ao código base principal de comentários (cerca de 1kb gzipped - aproximadamente um aumento de 10%). Queríamos garantir que isso não diminuísse o desempenho do FastComments e que funcionasse corretamente com nossos recursos de comentários ao vivo. Além disso, queríamos que a funcionalidade acomodasse o caso de uso mais comum de nossos clientes - comentários anônimos.

#### Editando Comentários Ao Vivo

Assim como comentar e votar, a edição acontece ao vivo. Se dois usuários estiverem na mesma página e um usuário editar seu comentário, o outro usuário verá a atualização.

#### Habilitando a Edição de Comentários

Terminamos de implementar a edição de comentários como padrão para todos os nossos clientes. Atualmente, não pode ser desativado.

#### E Agora?

Planejamos lançar a capacidade de deletar comentários também em uma atualização futura.

#### Integrações com Terceiros

Editar um comentário fará com que o evento se propague para qualquer integração que você tenha - como o WordPress. Se você usar nosso plugin do WordPress, então adicionar um comentário atualiza sua instalação do WordPress em segundo plano para que você mantenha uma cópia de seus dados. Se você editar um comentário, seguimos a mesma lógica e atualizamos a cópia em sua instalação do WordPress. Isso se aplica a outras integrações, não apenas ao WordPress.

#### Em Conclusão

Sabemos que essa funcionalidade tem sido muito aguardada por alguns. Como em todos os grandes lançamentos, estamos felizes que pudemos dedicar tempo para otimizar, testar e lançar corretamente este recurso.

Saudações!

{{/isPost}}