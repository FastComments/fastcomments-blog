---
[category:Integrations]
###### [postdate]
# [postlink]Ajouter des commentaires à un blog BigCommerce[/postlink]

{{#isPost}}

#### Ajoutez de l'engagement du public à n'importe quelle page
Et si votre public pouvait commenter vos articles de blog, poser des questions et donner son avis ? Maintenant, il peut le faire avec FastComments.

#### Thèmes personnalisés
Pour ajouter FastComments au blog de votre boutique BigCommerce, vous devrez modifier vos modèles de thème. Nous allons vous guider à travers cela.

Dans le tableau de bord BigCommerce, allez sur Storefront -> Mes thèmes.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Store Link" title="Store Link" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Lien Mes thèmes" title="Lien Mes thèmes" class="lozad" />
</div>

Sous "Thème actuel", vous verrez un menu déroulant avec l'étiquette "Avancé".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Menu déroulant Thème avancé" title="Menu déroulant Thème avancé" class="lozad" />
</div>

Dans ce menu déroulant, la première option est "Modifier les fichiers du thème". Si cette option n'est pas cliquable, vous devrez d'abord copier le thème via "Faire une copie".

Une fois que vous pouvez ouvrir l'éditeur de modèles, vous verrez un explorateur de fichiers sur le côté gauche de votre navigateur. C'est un explorateur de fichiers pour les modèles de votre thème.

Vous devrez naviguer jusqu'au modèle HTML qui représente un article de blog. Il se trouve à templates/components/blog/post.html, comme illustré :

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Emplacement du fichier de l'éditeur d'articles" title="Emplacement du fichier de l'éditeur d'articles" class="lozad" />
</div>

Votre extrait de code FastComments, que vous pouvez obtenir <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ici</a>, doit être collé juste après la ligne 48, qui contient le texte "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Emplacement pour insérer FastComments" title="Emplacement pour insérer FastComments" class="lozad" />
</div>

#### Rappelez-vous !
Vous devrez ajouter le domaine de votre boutique à FastComments, ce que vous pouvez faire <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">ici</a>.

#### En conclusion
Voici à quoi FastComments devrait ressembler sur votre blog BigCommerce. Santé !

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastComments sur un blog BigCommerce" title="FastComments sur un blog BigCommerce" class="lozad" />
</div>

{{/isPost}}

---