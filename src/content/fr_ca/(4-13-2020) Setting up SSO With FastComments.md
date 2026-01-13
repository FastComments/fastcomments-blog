---
[category:API & Development]

###### [postdate]
# [postlink]Configuration de SSO avec FastComments[/postlink]

{{#unless isPost}}
FastComments fournit des solutions SSO pour diverses plateformes et intégrations personnalisées.
{{/unless}}

{{#isPost}}

# Vue d'ensemble

## Qu'est-ce que le SSO ?

Le SSO, ou authentification unique, est un ensemble de conventions utilisées pour permettre à vous ou à vos utilisateurs d'utiliser FastComments sans avoir à créer un autre compte.

En supposant que vous n'autorisez pas les commentaires anonymes, un compte est requis pour commenter avec FastComments. Nous rendons ce processus d'inscription très facile - l'utilisateur n'a qu'à laisser
son adresse e-mail lorsqu'il commente. Cependant, nous comprenons que même cela représente une friction supplémentaire que certains sites souhaitent éviter.

## Comment l'obtenir ?

Tous les types de comptes accèdent actuellement au SSO ainsi qu'au support. Cependant, le nombre maximum d'utilisateurs SSO variera en fonction de votre forfait.

### Utilisateurs de WordPress

Si vous utilisez notre <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">plugin WordPress</a>, il n'y a pas de code à écrire ! Il vous suffit d'aller sur la page Admin du plugin, de cliquer sur Paramètres SSO, puis d'activer.

Cela vous amènera à un assistant à un seul clic qui créera votre clé API, l'enverra à votre installation WordPress et activera le SSO. Nous avons condensé cela en un seul clic pour vous.

Notez que si vous installez le plugin pour la première fois, vous devrez suivre le processus de configuration avant de voir la page admin avec le bouton Paramètres SSO.

### Intégrations personnalisées

Le SSO de FastComments utilise le chiffrement HMAC-SHA256 comme mécanisme pour mettre en œuvre le SSO. Nous allons d'abord examiner l'architecture globale, fournir des exemples et des étapes détaillées. Cependant, à la fin
de cet article, vous trouverez des instructions pour **migrer depuis Disqus et Commento**.

Le flux ressemble à ceci :

<div class="text-center">
<img src="/images/sso-diagram.png" alt="Diagramme SSO de FastComments" title="Diagramme SSO de FastComments" class="lozad" />
</div>

Vous n'avez pas besoin d'écrire de nouveaux points de terminaison API avec le SSO de FastComments. Il vous suffit de chiffrer les informations de l'utilisateur en utilisant votre clé secrète et de transmettre la charge utile au widget de commentaire.

Nous fournissons des exemples de code entièrement fonctionnels dans plusieurs langages/environnements d'exécution, y compris NodeJS, Java/Spring et PHP pur. Bien que nous utilisions ExpressJS dans l'exemple NodeJS
et Spring dans l'exemple Java, il n'y a aucun cadre/bibliothèque requis dans ces environnements d'exécution pour mettre en œuvre le SSO de FastComments - les paquets crypto natifs fonctionnent.

Vous pouvez trouver le dépôt d'exemples de code ici :

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">Exemples de code SSO de FastComments</a>

#### Obtenez votre clé secrète API

Votre clé secrète API peut être récupérée depuis <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">cette page</a>. Vous pouvez également trouver cette page en allant sur Mon compte,
en cliquant sur la tuile API/SSO, puis en cliquant sur "Obtenir la clé secrète API".

#### Paramètres du widget de commentaire

La documentation API de haut niveau pour le widget de commentaire peut être trouvée <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ici</a> et en cliquant sur "Afficher les options avancées". Recherchez SSO sur la page.

Entrons dans plus de détails sur ce que signifient ces paramètres.

Le widget de commentaire prend un objet de configuration - vous le passez déjà si vous utilisez FastComments pour passer votre identifiant client (appelé tenantId).

Pour activer le SSO, passez un nouvel objet "sso", qui doit avoir les paramètres suivants. Les valeurs doivent être générées **côté serveur**.

- userDataJSONBase64 : Les données de l'utilisateur au format JSON, qui sont ensuite encodées en Base64.
- verificationHash : Le hachage HMAC-SHA256 créé à partir de UNIX_TIME + userDataJSONBase64.
- timestamp : Le temps unix actuel. **Ne doit pas être dans le futur, ni plus de trois heures dans le passé.**
- loginURL : Une URL que le widget de commentaire peut afficher pour connecter l'utilisateur.
- logoutURL : Une URL que le widget de commentaire peut afficher pour déconnecter l'utilisateur.
- loginCallback : Lorsque fourni à la place de l'URL de connexion, une fonction que le widget de commentaire invoquera lors du clic sur le bouton de connexion.
- logoutCallback : Lorsque fourni à la place de l'URL de déconnexion, une fonction que le widget de commentaire invoquera lors du clic sur le bouton de déconnexion.

#### L'objet utilisateur 

L'objet Utilisateur contient le schéma suivant :

- id (string, requis) (1 000 caractères max)
- email (string, requis) (1 000 caractères max). Remarque : Doit être unique.
- username (string, requis) (1 000 caractères max). Remarque : Le nom d'utilisateur ne peut pas être un e-mail. N'a pas besoin d'être unique.
- avatar (string, optionnel) (3 000 caractères max)
- optedInNotifications (boolean, optionnel)
- displayLabel (string, optionnel, 100 caractères max). Cette étiquette sera affichée à côté de son nom.
- websiteUrl (string, optionnel, 2000 caractères max). Le nom de l'utilisateur sera lié à cela.

#### Notifications

Pour activer ou désactiver les notifications, définissez la valeur de optedInNotifications sur true ou false respectivement. La première fois que l'utilisateur charge la page avec cette valeur dans la charge utile SSO,
ses paramètres de notification seront mis à jour.

#### Utilisateurs VIP et étiquettes spéciales

Vous pouvez afficher une étiquette spéciale à côté du nom de l'utilisateur en utilisant le champ optionnel "displayLabel".

#### Utilisateurs non authentifiés

Pour représenter un utilisateur non authentifié, il suffit de ne pas peupler userDataJSONBase64, verificationHash ou timestamp. Fournissez un loginURL.

#### Exemples directs pour la sérialisation et le hachage des données utilisateur

Plus de détails sous forme d'exemples <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">ici (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">ici (java)</a> et
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">ici (php)</a>.


### Migration depuis Disqus SSO

Les plus grandes différences entre Disqus et FastComments SSO sont que Disqus utilise SHA1 pour le chiffrement tandis que nous utilisons SHA256.
Cela signifie que la migration depuis Disqus est facile - changez l'algorithme de hachage utilisé de SHA1 à SHA256 et mettez à jour les noms de propriétés passés à l'interface utilisateur.

### Migration depuis Commento SSO

Commento utilise une approche SSO radicalement différente - ils exigent que vous disposiez d'un point de terminaison qu'ils invoquent pour authentifier l'utilisateur. FastComments fonctionne à l'inverse - 
il suffit de coder et de hacher les informations de l'utilisateur en utilisant votre clé secrète et de les transmettre.

Nous comprenons que toute intégration peut être un processus compliqué et douloureux. N'hésitez pas à contacter votre représentant ou à utiliser la <a href="https://fastcomments.com/auth/my-account/help" target="_blank">page de support</a>.

{{/isPost}}

---