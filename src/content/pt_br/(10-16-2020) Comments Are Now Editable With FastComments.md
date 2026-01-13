---
[category:Features]
###### [postdate]
# [postlink]Comentários Agora São Editáveis Com FastComments[/postlink]

{{#unless isPost}}
Uma atualização muito aguardada, agora você pode editar comentários deixados com FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

#### O Que Há de Novo

Comentários deixados com FastComments agora podem ser editados - esteja você logado ou não.

<img src="images/fc-editing-demo.gif" alt="Edição de Demonstração GIF (17mb)" title="Demonstração de Edição" />

Compreensivelmente, tem sido um dos nossos recursos mais solicitados, e estamos felizes em alcançar este marco com nossa base de usuários.

#### Como Funciona

Usuários logados podem sempre editar seus comentários. Para comentaristas anônimos, nossos servidores fornecem uma janela temporária de 24 horas para que eles possam editar seu comentário após
comentar, desde que não fechem seu navegador. Por exemplo, isso significa que um comentarista anônimo pode comentar e, em seguida, editar seu comentário para corrigir quaisquer erros de digitação, sem nunca precisar fazer login!

Se o comentarista anônimo fechar seu navegador, ele não poderá editar seu comentário a menos que clique no link mágico enviado para seu e-mail.

Para maior segurança, a chave temporária de edição será invalidada em qualquer tentativa de adivinhar a chave incorretamente.

#### Por Que Agora, Depois de Tanto Tempo?

Como com todas as mudanças no widget do lado do cliente, temos que ter cuidado para não aumentar seu tamanho. Este recurso adiciona um tamanho considerável à base de código principal de comentários (cerca de 1kb comprimido - um aumento de aproximadamente 10%).
Queríamos garantir que isso não diminuísse o desempenho do FastComments e queríamos garantir que funcionasse corretamente com nossos recursos de comentários ao vivo. Além disso, queríamos que o recurso acomodasse o caso de uso mais comum de nossos clientes - comentários anônimos.

#### Editando Comentários Ao Vivo

Assim como comentar e votar - a edição acontece ao vivo. Se dois usuários estiverem na mesma página, e um usuário editar seu comentário, o outro usuário verá a atualização.

#### Habilitando a Edição de Comentários

Concluímos a implementação da edição de comentários por padrão para todos os nossos clientes. Atualmente, não é possível desativá-la.

#### E Agora?

Estamos planejando lançar a capacidade de excluir comentários também em uma atualização futura.

#### Integrações de Terceiros

Editar um comentário fará com que o evento se propague para quaisquer integrações que você tenha - como WordPress. Se você usar nosso plugin do WordPress, então adicionar um comentário atualiza
sua instalação do WordPress em segundo plano para que você mantenha uma cópia dos seus dados. Se você editar um comentário, seguimos a mesma lógica e atualizamos a cópia em sua instalação do WordPress. Isso se aplica a outras integrações, não apenas ao WordPress.

#### Em Conclusão

Sabemos que este recurso foi há muito aguardado por alguns. Como todos os lançamentos importantes, ficamos felizes por termos podido dedicar tempo para otimizar, testar e liberar adequadamente este recurso.

Saudações!

{{/isPost}}