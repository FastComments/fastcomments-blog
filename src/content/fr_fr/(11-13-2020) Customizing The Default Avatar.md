---
[category:UI & Customization]

###### [postdate]
# [postlink]Personnaliser l'Avatar par Défaut[/postlink]

{{#unless isPost}}
L'image d'avatar par défaut peut désormais être personnalisée.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient du Jargon Technique

#### Introduction

L'icône par défaut est restée la même depuis le lancement de FastComments. Voici la gloire de l'icône de profil par défaut.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Icône de Profil par Défaut" alt="Icône de Profil par Défaut" />
</div>

Cependant, vous pouvez désormais la personnaliser.

#### Sans Code

Tout d'abord, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">ajoutez ou modifiez une règle de personnalisation</a>. Les règles de personnalisation peuvent
être appliquées pour juste une page, un domaine, ou votre compte entier. Si vous souhaitez changer l'image de profil globalement, vous pouvez laisser le champ ID URL vide.

Faites défiler vers la section "Avatar par Défaut".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="Paramètres FastComments Hackaday"
    class='lozad' />
    
Cliquez sur le bouton pour télécharger un JPG, PNG ou GIF d'une taille maximale de 20 Mo. Il sera redimensionné en un carré de 100px.

#### Dans le Code

Si vous souhaitez héberger l'avatar par défaut, et que vous avez déjà une URL publique pour cela, il peut être défini dans le code comme dans l'exemple donné.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

L'image doit être carrée, et sa taille doit être un carré de 100px. Respecter ces contraintes garantira la meilleure expérience.

#### Point à Savoir

1. La personnalisation de l'image de profil par défaut n'affecte que votre site. Cela n'affecte pas les e-mails de notification, ni les comptes des utilisateurs d'aucune manière.
2. Les commentaires créés avant ce changement peuvent encore afficher l'ancienne image de profil. Si vous ajustez l'icône de profil par défaut et constatez de nombreux commentaires sur votre site utilisant l'ancienne icône, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faites-le nous savoir</a>.

#### En Conclusion

Nous espérons que ce guide vous a été utile et facile à lire. N'hésitez pas à commenter ci-dessous si vous avez des questions.

À votre santé !

{{/isPost}}

---