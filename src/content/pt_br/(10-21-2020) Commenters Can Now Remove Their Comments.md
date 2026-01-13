---
[category:Features]
###### [postdate]
# [postlink]Agora os Comentadores Podem Remover Seus Comentários[/postlink]

{{#unless isPost}}
Uma atualização muito esperada, agora você pode deletar seus comentários feitos com o FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargões Técnicos

#### Novidades

Conforme anunciado recentemente - os comentários feitos com o FastComments agora podem ser editados - esteja você logado ou não.

<img src="images/fc-deleting-demo.gif" alt="GIF de Demonstração de Exclusão (11mb)" title="Demonstração de Exclusão" />

Como acompanhamento, a capacidade de deletar seus comentários foi liberada. Compreensivelmente, assim como a edição de comentários, esta tem sido uma das funcionalidades mais solicitadas, e estamos felizes em atingir este marco com nossa base de usuários.

#### Como Funciona

A remoção de comentários funciona da mesma forma que a edição - usuários logados podem sempre editar e deletar seus comentários. Para comentadores anônimos, nossos servidores fornecem uma janela temporária de 24 horas para que eles editem ou deletem seu comentário após comentar, desde que não fechem o navegador. Por exemplo, isso significa que um comentador anônimo pode comentar, e então editar seu comentário para corrigir quaisquer erros de digitação, ou deletá-lo, sem nunca precisar fazer login!

Se o comentador anônimo fechar seu navegador, ele não poderá editar ou deletar seu comentário, a menos que clique no link mágico enviado para seu email.

Para maior segurança, a chave de edição temporária será invalidada em qualquer tentativa de adivinhar a chave incorretamente.

#### Por Que Agora, Depois de Tanto Tempo?

A razão para isso é a mesma de por que a edição demorou tanto para ser lançada. Queríamos garantir que isso não diminuísse o desempenho do FastComments e queríamos garantir que funcionasse corretamente com nossas funcionalidades de comentários em tempo real. Além disso, queríamos que a funcionalidade acomodasse o caso de uso mais comum de nossos clientes - comentários anônimos.

#### Excluindo Comentários ao Vivo

Assim como comentar e votar - a exclusão acontece ao vivo. Se dois usuários estão na mesma página, e um usuário deleta seu comentário, o outro usuário verá isso ser removido.

#### Habilitando a Remoção de Comentários

Concluímos a liberação da edição e exclusão de comentários por padrão para todos os nossos clientes. Atualmente, não pode ser desativado.

#### Integrações de Terceiros

Excluir um comentário fará com que o evento se propague para qualquer integração que você tenha - como WordPress. Se você usar nosso plugin do WordPress, então adicionar um comentário atualiza sua instalação do WordPress em segundo plano, para que você mantenha uma cópia de seus dados. Se você remover comentários, seguimos a mesma lógica e removemos da sua instalação do WordPress. Isso se aplica a outras integrações, não apenas ao WordPress.

#### Em Conclusão

Sabemos que esta funcionalidade foi muito aguardada por alguns. Como todas as grandes atualizações, estamos felizes por termos conseguido dedicar um tempo para otimizar, testar e liberar esta funcionalidade corretamente.

Saúde!

{{/isPost}}