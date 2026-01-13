---
[category:UI & Customization]

###### [postdate]
# [postlink]Personalizando O Avatar Padrão[/postlink]

{{#unless isPost}}
A imagem do avatar padrão agora pode ser personalizada.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artigo Contém Jargão Técnico

#### Introdução

O ícone padrão tem sido o mesmo desde o lançamento do FastComments. Contemple a glória do ícone de perfil padrão.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Ícone de Perfil Padrão" alt="Ícone de Perfil Padrão" />
</div>

No entanto, agora você pode personalizá-lo.

#### Sem Código

Primeiro, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">adicione ou edite uma regra de personalização</a>. As regras de personalização podem
ser aplicadas a apenas uma página, um domínio ou sua conta inteira. Se você quiser mudar a foto de perfil globalmente, pode deixar o campo de ID de URL em branco.

Role para baixo até a seção "Avatar Padrão".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="Configurações do FastComments Hackaday"
    class='lozad' />
    
Clique no botão para enviar um JPG, PNG ou GIF de até 20mb. Ele será redimensionado para um quadrado de 100px.

#### Em Código

Se você deseja hospedar o avatar padrão, e já possui uma URL pública para ele, pode ser definido no código como no exemplo dado.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

A imagem deve ser quadrada, e seu tamanho deve ser de 100px quadrados. Seguir essas restrições garantirá a melhor experiência.

#### Armadilhas

1. Personalizar a foto de perfil padrão afeta apenas seu site. Não afeta e-mails de notificação ou as contas dos usuários de forma alguma.
2. Comentários criados antes dessa mudança podem ainda exibir a antiga foto de perfil. Se você ajustar o ícone de perfil padrão e observar muitos comentários em seu site
usando o antigo ícone de perfil, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nos avise</a>.

#### Em Conclusão

Esperamos que você tenha achado este guia útil e fácil de ler. Sinta-se à vontade para comentar abaixo com qualquer dúvida.

Saudações!

{{/isPost}}

---