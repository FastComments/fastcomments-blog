---
[category:API & Development]
###### [postdate]
# [postlink]Utilisation de FastComments dans des applications à page unique VanillaJS[/postlink]

{{#unless isPost}}
Bien que nous ayons des composants dédiés pour React et VueJS, le widget Vanilla peut également être utilisé dans des applications à page unique.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

#### Public cible

Cet article s'adresse aux développeurs.

#### Introduction

La plupart des exemples d'utilisation du widget FastComments VanillaJS sont de très simples extraits de code qui chargent le fil de commentaires pour l'URL de la page actuelle. C'est parce que
c'est le cas d'utilisation pour la grande majorité de nos clients, mais récemment, nous avons constaté un afflux de développeurs construisant des SPAs et utilisant FastComments.

Tout d'abord, gardez à l'esprit que FastComments a des composants dédiés pour <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> et <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a>, alors consultez-les
si vous utilisez ces bibliothèques afin de ne pas avoir à construire votre propre wrapper autour de FastComments.

Si vous construisez votre application en utilisant VanillaJS, vous pouvez instancier et mettre à jour dynamiquement le widget de commentaires.

#### D'abord, l'URL et l'ID d'URL

FastComments a deux identifiants pour la page ou l'article auquel le fil de commentaires est associé. Dans l'objet de configuration, ce sont les propriétés "url" et "urlId".

L'URL est l'URL vers le widget de commentaires. Idéalement, vous devriez pouvoir visiter cette URL depuis l'extérieur de votre application. Elle sera exposée sous forme de lien dans les e-mails de notification et dans
les outils d'administration.

L'ID d'URL est une chaîne qui est soit une URL soit un ID - cela peut être n'importe quelle valeur tant qu'elle représente la page actuelle. Si vous avez un post, un article ou un identifiant de page, vous pouvez utiliser cela
au lieu de l'URL de la page pour cette valeur. La raison pour laquelle l'ID d'URL est séparé est que vous pourriez vouloir stocker des informations supplémentaires dans l'URL qui rendraient l'URL non unique à la page.

Notez que nous avons documenté la configuration complète supportée par le widget en TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">sur GitHub</a>.

#### Spécificités et une véritable démo

Lorsque le widget est instancié, capturez le résultat de la fonction FastCommentsUI que vous appelleriez normalement :

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Ensuite, vous pouvez invoquer une méthode "update" sur l'objet d'instance pour mettre à jour la configuration. Cela mettra à jour le composant :

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Vous pouvez voir un exemple fonctionnel <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">avec ce fiddle</a>.

Notez que dans cet exemple, nous utilisons document.getElementById, mais vous pouvez utiliser n'importe quel mécanisme que vous aimez pour récupérer l'élément cible.

#### Pièges

Bien que simplement mettre à jour "urlId" fonctionnera, vous devriez mettre à jour à la fois "urlId" et "url" même s'ils sont identiques afin que les liens provenant des e-mails de notification et
des outils de modération fonctionnent. Mettre à jour uniquement "url" ne fonctionnera pas - les commentaires sont liés à "urlId".

#### En conclusion

Nous espérons que ce guide vous a été utile. N'hésitez pas à commenter ci-dessous avec vos questions.

À la vôtre !

{{/isPost}}

---