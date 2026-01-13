---
[category:API & Development]
###### [postdate]
# [postlink]Utiliser FastComments dans des applications à page unique VanillaJS[/postlink]

{{#unless isPost}}
Bien que nous disposions de composants dédiés pour React et VueJS, le widget vanilla peut également être utilisé dans des applications à page unique.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

#### Public cible

Cet article s'adresse aux développeurs.

#### Introduction

La plupart des exemples d'utilisation du widget FastComments VanillaJS sont de très simples extraits de code qui chargent le fil de commentaires pour l'URL de la page actuelle. C'est parce que
c'est le cas d'utilisation pour l'écrasante majorité de nos clients, mais récemment, nous avons constaté une affluence de développeurs construisant des SPA et utilisant FastComments.

Tout d'abord, gardez à l'esprit que FastComments dispose de composants dédiés pour <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> et <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a>, alors jetez un œil à ceux-ci
si vous utilisez ces bibliothèques pour ne pas avoir à construire votre propre wrapper autour de FastComments.

Cependant, si vous construisez votre application en utilisant VanillaJS, vous pouvez instancier et mettre à jour le widget de commentaires dynamiquement.

#### D'abord, l'URL et l'ID de l'URL

FastComments a deux identifiants pour la page ou l'article auquel le fil de commentaires est lié. Dans l'objet de configuration, ce sont les propriétés "url" et "urlId".

L'URL est l'URL du widget de commentaires. Idéalement, vous devriez pouvoir visiter cette URL depuis l'extérieur de votre application. Elle sera exposée en tant que lien dans les e-mails de notification et dans
les outils d'administration.

L'ID de l'URL est une chaîne qui est soit une URL, soit un ID - cela peut être n'importe quelle valeur tant qu'elle représente la page actuelle. Si vous avez un post, un article ou un ID de page, vous pouvez utiliser cela
au lieu de l'URL de la page pour cette valeur. La raison pour laquelle l'ID de l'URL est séparé est que vous voudrez peut-être stocker des informations supplémentaires dans l'URL qui rendraient l'URL non unique à la page.

Notez que nous avons documenté la configuration complète que le widget prend en charge en TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">sur GitHub</a>.

#### Spécificités et une vraie démo

Lorsque le widget est instancié, capturez le résultat de la fonction FastCommentsUI que vous appelleriez normalement :

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Ensuite, vous pouvez invoquer une méthode "update" sur l'objet d'instance pour mettre à jour la configuration. Cela rafraîchira le composant :

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Vous pouvez voir un exemple fonctionnel <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">avec ce fiddle</a>.

Notez que dans cet exemple, nous utilisons document.getElementById, mais vous pouvez utiliser le mécanisme de votre choix pour récupérer l'élément cible.

#### Pièges

Bien que la mise à jour uniquement de "urlId" fonctionnera, vous devriez mettre à jour à la fois "urlId" et "url" même s'ils sont les mêmes afin que les liens provenant des e-mails de notification et
des outils de modération fonctionnent. Mettre à jour uniquement "url" ne fonctionnera pas - les commentaires sont liés à "urlId".

#### En conclusion

Nous espérons que vous avez trouvé ce guide utile. N'hésitez pas à commenter ci-dessous avec vos questions.

Santé !

{{/isPost}}

---