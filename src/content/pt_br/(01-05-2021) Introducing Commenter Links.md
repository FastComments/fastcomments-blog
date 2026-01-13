---
[category:Features]
###### [postdate]
# [postlink]Apresentando Links de Comentadores[/postlink]

{{#unless isPost}}
Nossa primeira versão de 2021 traz a capacidade (se habilitada no nível do inquilino) para usuários adicionarem o link do seu blog ao comentar.
{{/unless}}

{{#isPost}}

## O que há de novo

Nossa primeira versão de 2021 traz a capacidade (se habilitada no nível do inquilino) para usuários adicionarem o link do seu blog ao comentar.

## O que são Links de Comentadores?

Como vemos com esta troca muito curiosa, um desses usuários tem seu nome de usuário sublinhado para indicar que é um link:

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Links de Comentadores" title="Demonstração de Links de Comentadores" />
</div>

Isso porque o site configurou sua instalação do FastComments para permitir o preenchimento de um novo campo ao comentar, onde o
usuário pode deixar um link:

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Entrada de Link de Comentador" title="Entrada de Link de Comentador" />
</div>

Esse link também pode ser personalizado ao editar seus <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Detalhes da Conta</a>.

## Habilitando Links de Comentadores

Ao criar uma <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Regra de Personalização</a>, podemos habilitar o novo campo de entrada.
Basta habilitar a opção "Habilitar Links de Comentadores".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Habilitando Links de Comentadores" title="Links de Blog" />
</div>

## Substituindo o Texto do Campo de Entrada

Por padrão, o placeholder do campo de link do comentarista é "Seu URL do Blog.". Isso pode ser substituído pela mesma regra de personalização
que você usou para habilitar o recurso, clicando em "Mostrar Texto Personalizado".

## Melhorando a Classificação de Spam

Esse recurso tem o efeito colateral de reduzir o conteúdo sinalizado como spam que pode não ser spam. Comentários com pouco texto e um link têm uma chance maior de serem classificados
como spam. No entanto, o link do comentarista não afeta a classificação de se o comentário é spam ou não. Isso significa que um usuário pode comentar com seu link de blog
com um risco muito menor de o comentário ser sinalizado como spam.

Por essas razões, sites com altas quantidades de spam podem não querer habilitar esse recurso, entretanto, aqueles que não o fizerem encontrarão valor em usá-lo com certas audiências.

## Impacto para Clientes Existentes

Se você é um cliente existente usando o FastComments, seus usuários não perceberão nenhuma mudança na funcionalidade, a menos que você ative esse recurso. O mesmo acontece com novos clientes - você
perceberá que esse recurso está desativado por padrão.

## Em Conclusão

Esperamos que esse recurso seja o início de um ano melhor do que o anterior. Feliz comentários!

{{/isPost}}