---
[category:Features]
###### [postdate]
# [postlink]Os Comentários Podem Agora Ser Removidos pelos Usuários[/postlink]

{{#unless isPost}}
Uma atualização muito aguardada, agora você pode excluir os seus comentários deixados com o FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

#### O Que Há de Novo

Conforme anunciado recentemente - os comentários deixados com o FastComments agora podem ser editados - seja você estar logado ou não.

<video src="images/fc-deleting-demo.mp4" autoplay loop muted playsinline title="Demonstração de Exclusão"></video>

Como uma continuação, a capacidade de excluir seus comentários foi liberada. Como era de se esperar, assim como a edição de comentários, tem sido um dos nossos recursos mais solicitados, e estamos felizes por alcançar esse marco com nossa base de usuários.

#### Como Funciona

A remoção de comentários funciona da mesma maneira que a edição - usuários logados podem sempre editar e excluir seus comentários. Para comentaristas anônimos, nossos servidores fornecem uma janela temporária de 24 horas para que eles possam editar ou excluir seu comentário após comentarem, contanto que não fechem seu navegador. Por exemplo, isso significa que um comentarista anônimo pode comentar, e então editar seu comentário para corrigir quaisquer erros de digitação, ou excluí-lo, sem nunca fazer login!

Se o comentarista anônimo fechar seu navegador, ele não poderá editar ou excluir seu comentário, a menos que clique no link mágico enviado para seu e-mail.

Para maior segurança, a chave de edição temporária será invalidada em qualquer tentativa de adivinhar a chave de forma incorreta.

#### Por Que Agora, Depois de Tanto Tempo?

A razão para isso é a mesma de por que a edição levou tanto tempo para ser liberada. Queríamos garantir que isso não diminuísse o desempenho do FastComments e queríamos garantir que funcionasse corretamente com nossos recursos de comentários ao vivo. Além disso, queríamos que a funcionalidade acomodasse o caso de uso mais comum de nossos clientes - comentários anônimos.

#### Excluindo Comentários Ao Vivo

Assim como comentar e votar - a exclusão acontece ao vivo. Se dois usuários estiverem na mesma página e um usuário excluir seu comentário, o outro usuário verá isso ser removido.

#### Habilitando a Remoção de Comentários

Concluímos a implementação da edição e exclusão de comentários como padrão para todos os nossos clientes. Atualmente, não pode ser desativada.

#### Integrações de Terceiros

Excluir um comentário fará com que o evento se propague para qualquer integração que você tenha - como o WordPress. Se você usa nosso plugin do WordPress, ao adicionar um comentário, sua instalação do WordPress é atualizada em segundo plano para que você mantenha uma cópia dos seus dados. Se você remover comentários, seguimos a mesma lógica e os removemos da sua instalação do WordPress. Isso se aplica a outras integrações, não apenas ao WordPress.

#### Em Conclusão

Sabemos que este recurso tem sido muito aguardado por alguns. Como todas as grandes liberações, estamos felizes por podermos dedicar tempo para otimizar, testar e liberar adequadamente esse recurso.

Saudações!

{{/isPost}}