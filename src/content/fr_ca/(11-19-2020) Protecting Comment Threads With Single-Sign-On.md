---
[category:Sécurité]

###### [postdate]
# [postlink]Protéger les fils de commentaires avec l'authentification unique[/postlink]

{{#unless isPost}}
Vous ne considérez pas vos fils de commentaires comme publics ? Avez-vous mis en place l'authentification unique (SSO) pour l'authentification ? Cela pourrait vous intéresser.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient un jargon technique

#### Introduction

Le SSO de FastComments <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(détails ici)</a> fournit à vos utilisateurs un moyen
de commenter sans avoir à se connecter à une autre plateforme.

Cependant, cela ne sécurise pas à lui seul vos fils de commentaires, car par défaut, les données de commentaires sont des informations disponibles publiquement - quiconque peut voir
la page peut voir les commentaires. Cependant, cette version change cela.

#### Configuration sans code

Nous pouvons empêcher la visualisation et l'interaction avec nos fils de commentaires, lorsque le SSO est configuré, en créant une <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">règle de personnalisation</a>.

En procédant ainsi, recherchez SSO, et vous trouverez cette option :

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Option de configuration pour verrouiller les commentaires via SSO" alt="Option de configuration pour verrouiller les commentaires via SSO" class="lozad" />
</div>

Activez-la et enregistrez la règle de personnalisation.

#### Protéger uniquement un domaine ou une page spécifique

Pour uniquement protéger un certain domaine ou une certaine page, nous allons simplement configurer la règle de personnalisation pour le faire.

En haut de l'interface de personnalisation, nous trouverons deux champs, Domaine et ID de l'URL.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Option de configuration par page ou domaine" alt="Option de configuration par page ou domaine" class="lozad" />
</div>

Pour protéger un domaine particulier, entrez le domaine en question dans le champ "domaine".

Pour protéger une page particulière, entrez une URL de page dans le champ "ID de l'URL". Si vous avez une intégration personnalisée avec FastComments, vous pouvez entrer un type d'ID ici
au lieu d'une URL.

#### Protection au-delà de la lecture

Activer cette option protégera la page ou le domaine contre les commentaires à moins que l'utilisateur ne soit connecté via SSO. 

#### Pièges

Tous les utilisateurs qui ont créé des commentaires avant votre intégration SSO ne pourront pas les voir, à moins qu'ils ne se connectent via votre intégration SSO.

#### En conclusion

Nous espérons que vous avez trouvé ce guide utile et facile à lire. N'hésitez pas à commenter ci-dessous si vous avez des questions.

Santé !

{{/isPost}}

---